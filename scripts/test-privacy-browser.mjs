import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const local = 'http://127.0.0.1:3100';
const origin = 'https://www.bibliaclube.com.br';
const policy = '/politica-de-privacidade';
const output = '.test-artifacts/audit';
fs.mkdirSync(output, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true });
const results = [];

async function makeContext(consent, width = 375, javaScriptEnabled = true) {
  const requests = [];
  const context = await browser.newContext({ viewport: { width, height: 850 }, reducedMotion: 'reduce', javaScriptEnabled, serviceWorkers: 'block' });
  await context.addInitScript(consent => {
    window.__documentIdentity = Math.random();
    if (consent) localStorage.setItem('biblia-clube:analytics-consent:v1', consent);
  }, consent);
  // No production request or third-party script is executed by this test.
  await context.route('**/*', async route => {
    const url = new URL(route.request().url());
    if (url.pathname.startsWith('/_vercel/') || url.origin !== origin) {
      requests.push(url.href);
      if (url.pathname.endsWith('adsbygoogle.js')) return route.fulfill({ contentType: 'application/javascript', body: 'window.__adsExecuted = true; window.__tcfapi = function() {};' });
      if (url.hostname === 'www.googletagmanager.com') return route.fulfill({ contentType: 'application/javascript', body: 'window.__googleTagExecuted = true;' });
      if (url.pathname.startsWith('/_vercel/')) return route.fulfill({ contentType: 'application/javascript', body: 'window.__vercelExecuted = true;' });
      return route.abort();
    }
    const response = await route.fetch({ url: local + url.pathname + url.search, maxRedirects: 0 });
    return route.fulfill({ response });
  });
  return { context, requests };
}

async function cleanPolicy(page) {
  await page.getByRole('heading', { name: 'Política de Privacidade', exact: true }).waitFor();
  assert.equal(await page.locator('script[src*="googlesyndication"], script[src*="googletagmanager"], script[src*="fundingchoices"], script[src*="/_vercel/"]').count(), 0);
  assert.equal(await page.getByRole('complementary', { name: 'Preferências de cookies' }).count(), 0);
  assert.equal(await page.getByRole('button', { name: 'Preferências de cookies', exact: true }).count(), 0);
  assert.equal(await page.evaluate(() => Boolean(window.__adsExecuted || window.__googleTagExecuted || window.__vercelExecuted || window.__tcfapi)), false);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
}

try {
  for (const consent of [null, 'denied', 'granted']) {
    const { context, requests } = await makeContext(consent);
    const page = await context.newPage();
    await page.goto(origin + policy, { waitUntil: 'networkidle' });
    await cleanPolicy(page);
    assert.deepEqual(requests, []);
    if (consent === 'granted') await page.screenshot({ path: `${output}/privacy-without-integrations-375.png`, fullPage: true });
    results.push(`Direct policy without integrations, consent=${consent}`);
    await context.close();
  }

  const raw = await makeContext(null, 1440, false);
  const rawPage = await raw.context.newPage();
  await rawPage.goto(origin + policy, { waitUntil: 'networkidle' });
  assert.equal(await rawPage.locator('script[src*="googlesyndication"], script[src*="googletagmanager"], script[src*="/_vercel/"]').count(), 0);
  await rawPage.goto(origin, { waitUntil: 'networkidle' });
  assert.equal(await rawPage.locator('script[src*="adsbygoogle.js"]').count(), 1);
  results.push('Initial HTML excludes ads on policy and preserves verification script on Home');
  await raw.context.close();

  const { context } = await makeContext('granted', 1440);
  const page = await context.newPage();
  await page.goto(origin, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__adsExecuted && window.__googleTagExecuted);
  const homeIdentity = await page.evaluate(() => window.__documentIdentity);
  await page.getByRole('navigation', { name: 'Links institucionais' }).getByRole('link', { name: 'Política de Privacidade', exact: true }).click();
  await cleanPolicy(page);
  assert.notEqual(await page.evaluate(() => window.__documentIdentity), homeIdentity);
  await page.goBack({ waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__adsExecuted && window.__googleTagExecuted);
  await page.goForward({ waitUntil: 'networkidle' });
  await cleanPolicy(page);
  results.push('Footer link creates a clean document; back/forward remains isolated');

  await page.goto(origin, { waitUntil: 'networkidle' });
  const oldIdentity = await page.evaluate(() => window.__documentIdentity);
  await page.evaluate(path => history.pushState(null, '', path), policy);
  await page.waitForFunction(old => window.__documentIdentity !== old, oldIdentity);
  await cleanPolicy(page);
  results.push('Client-side pathname change falls back to a clean document');
  await context.close();

  const unknown = await makeContext(null);
  const bannerPage = await unknown.context.newPage();
  await bannerPage.goto(origin, { waitUntil: 'networkidle' });
  await bannerPage.getByRole('complementary', { name: 'Preferências de cookies' }).getByRole('link', { name: 'Política de Privacidade' }).click();
  await cleanPolicy(bannerPage);
  results.push('Consent banner link opens policy without ads, CMP or analytics');
  await unknown.context.close();
} finally {
  await browser.close();
  fs.writeFileSync(`${output}/privacy-isolation.json`, JSON.stringify({ passed: results, allPassed: results.length === 7, realThirdPartyScriptsExecuted: false }, null, 2));
}
console.log(JSON.stringify({ passed: results }, null, 2));
