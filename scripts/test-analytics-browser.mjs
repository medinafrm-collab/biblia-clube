import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const local = 'http://127.0.0.1:3100';
const simulated = 'https://www.bibliaclube.com.br';
const consentKey = 'biblia-clube:analytics-consent:v1';
const scriptId = 'biblia-clube-google-analytics';
const output = '.test-artifacts/audit';
fs.mkdirSync(output, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true });
const results = [];
const closingContexts = new WeakSet();

async function contextFor(origin) {
  const context = await browser.newContext({ viewport: { width: 375, height: 850 }, reducedMotion: 'reduce', serviceWorkers: 'block' });
  // The production hostname is simulated: all application requests go to localhost.
  await context.route('**/*', async route => {
    try {
      const url = new URL(route.request().url());
      if (closingContexts.has(context)) return await route.abort();
      if (url.origin === origin) {
        const response = await route.fetch({ url: local + url.pathname + url.search, maxRedirects: 0 });
        return await route.fulfill({ response });
      }
      if (url.hostname === 'www.googletagmanager.com' && url.pathname === '/gtag/js') {
        return await route.fulfill({ contentType: 'application/javascript', body: 'window.__mockGoogleTagLoads = (window.__mockGoogleTagLoads || 0) + 1;' });
      }
      return await route.abort();
    } catch (error) {
      if (!closingContexts.has(context)) throw error;
    }
  });
  return context;
}

async function disabled(page, expected) {
  await page.waitForFunction(expected => Object.entries(window).some(([key, value]) => key.startsWith('ga-disable-G-') && value === expected), expected);
}
async function closeContext(context) {
  closingContexts.add(context);
  await context.close();
}
async function tagLoaded(page) {
  await page.waitForFunction(() => window.__mockGoogleTagLoads === 1);
}
async function banner(page, visible) {
  await page.getByRole('complementary', { name: 'Preferências de cookies' }).waitFor({ state: visible ? 'visible' : 'hidden' });
}
async function reopen(page) {
  await page.getByRole('button', { name: 'Preferências de cookies', exact: true }).click();
  await banner(page, true);
  await disabled(page, true);
}

try {
  const context = await contextFor(simulated);
  const page = await context.newPage();
  page.setDefaultTimeout(8000);
  await page.goto(simulated, { waitUntil: 'networkidle' });
  await banner(page, true);
  await disabled(page, true);
  assert.equal(await page.locator(`#${scriptId}`).count(), 0);
  await page.getByRole('button', { name: 'Aceitar cookies', exact: true }).click();
  await tagLoaded(page);
  await disabled(page, false);
  await page.reload({ waitUntil: 'networkidle' });
  await tagLoaded(page);
  await banner(page, false);
  await reopen(page);
  assert.equal(await page.evaluate(key => localStorage.getItem(key), consentKey), null);
  assert.equal(await page.evaluate(() => [...window.dataLayer].reverse().find(call => call[0] === 'consent')[2].analytics_storage), 'denied');
  await page.getByRole('button', { name: 'Apenas necessários', exact: true }).click();
  await page.reload({ waitUntil: 'networkidle' });
  await banner(page, false);
  await disabled(page, true);
  assert.equal(await page.locator(`#${scriptId}`).count(), 0);
  results.push('Initial choice, acceptance, persisted reload, reopening and refusal');

  await reopen(page);
  await page.getByRole('button', { name: 'Aceitar cookies', exact: true }).click();
  await tagLoaded(page);
  const other = await context.newPage();
  await other.goto(simulated, { waitUntil: 'networkidle' });
  await tagLoaded(other);
  await other.evaluate(() => localStorage.clear());
  await disabled(page, true);
  await banner(page, true);
  await page.getByRole('button', { name: 'Aceitar cookies', exact: true }).click();
  await disabled(other, false);
  await reopen(page);
  await page.getByRole('button', { name: 'Apenas necessários', exact: true }).click();
  await disabled(other, true);
  await banner(other, false);
  results.push('Cross-tab storage.clear(), acceptance and refusal');
  await closeContext(context);

  const blocked = await contextFor(simulated);
  await blocked.addInitScript(() => {
    for (const method of ['getItem', 'setItem', 'removeItem']) {
      Storage.prototype[method] = () => { throw new DOMException('Storage blocked for test', 'SecurityError'); };
    }
  });
  const restricted = await blocked.newPage();
  await restricted.goto(simulated, { waitUntil: 'networkidle' });
  await banner(restricted, true);
  await disabled(restricted, true);
  await restricted.getByRole('button', { name: 'Aceitar cookies', exact: true }).click();
  await tagLoaded(restricted);
  await disabled(restricted, false);
  await reopen(restricted);
  await restricted.getByRole('button', { name: 'Apenas necessários', exact: true }).click();
  await banner(restricted, false);
  await disabled(restricted, true);
  await restricted.reload({ waitUntil: 'networkidle' });
  await banner(restricted, true);
  await disabled(restricted, true);
  assert.equal(await restricted.locator(`#${scriptId}`).count(), 0);
  results.push('Unavailable storage: current-page choice, reset, refusal and safe reload');
  await closeContext(blocked);

  const localContext = await contextFor(local);
  const localPage = await localContext.newPage();
  await localPage.goto(local, { waitUntil: 'networkidle' });
  await localPage.getByRole('button', { name: 'Aceitar cookies', exact: true }).click();
  await banner(localPage, false);
  assert.equal(await localPage.locator(`#${scriptId}`).count(), 0);
  await reopen(localPage);
  await localPage.screenshot({ path: `${output}/analytics-preferences-375.png`, fullPage: false });
  results.push('Localhost never loads the Google tag, even after acceptance');
  await closeContext(localContext);
} finally {
  for (const context of browser.contexts()) closingContexts.add(context);
  await browser.close();
  fs.writeFileSync(`${output}/analytics-consent.json`, JSON.stringify({ completed: results, allPassed: results.length === 4, realGoogleTagExecuted: false, applicationOrigin: local }, null, 2));
}
console.log(JSON.stringify({ passed: results }, null, 2));
