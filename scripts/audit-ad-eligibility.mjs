import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const origin = 'http://127.0.0.1:3100';
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true });
const context = await browser.newContext();
await context.route('**/*', route => {
  if (route.request().url().includes('/pagead/js/adsbygoogle.js')) {
    return route.fulfill({ contentType: 'application/javascript', body: 'window.auditAdExecuted = true;' });
  }
  return new URL(route.request().url()).origin === origin ? route.continue() : route.abort();
});
const results = [];
try {
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const [path, eligible, status] of [
    ['/', true, 200], ['/dinamicas-para-celulas/planejar-juntos', true, 200],
    ['/biblioteca/roteiro-completo-de-celula-em-60-minutos', true, 200],
    ['/guias/jogos-biblicos-para-grupos', true, 200],
    ['/contato', false, 200], ['/politica-de-privacidade', false, 200],
    ['/termos-de-uso', false, 200], ['/monte-seu-encontro', false, 200],
    ['/quiz-biblico', false, 200], ['/quem-sou-eu', false, 200],
    ['/materiais/roteiro-de-encontro', false, 200],
    ['/rota-audit-inexistente', false, 404], ['/biblioteca/rota-audit-inexistente', false, 404],
  ]) {
    const response = await page.goto(origin + path, { waitUntil: 'networkidle' });
    assert.equal(response.status(), status, path);
    assert.equal(await page.locator('script[src*="/pagead/js/adsbygoogle.js"]').count(), eligible ? 1 : 0, path);
    assert.equal(await page.locator('meta[name="google-adsense-account"]').getAttribute('content'), 'ca-pub-8150008386108071');
    results.push({ path, eligible, status });
  }
  await page.goto(origin, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.auditAdExecuted === true);
  await page.locator('a[href="/contato"]').first().click();
  await page.waitForURL('**/contato');
  await page.waitForFunction(() => !window.auditAdExecuted && !document.querySelector('script[src*="/pagead/js/adsbygoogle.js"]'));
  results.push({ transition: 'Home to Contact clears executed ad script', passed: true });
  for (const width of [320, 375, 768, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(origin + '/dinamicas-para-celulas/planejar-juntos', { waitUntil: 'networkidle' });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    assert.match(await page.locator('main').innerText(), /A conexão caiu/);
    results.push({ dynamicWidth: width, passed: true });
  }
  assert.deepEqual(errors, []);
  fs.mkdirSync('tmp/audit-2026-10-07', { recursive: true });
  fs.writeFileSync('tmp/audit-2026-10-07/ad-eligibility-validation.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
} finally {
  await browser.close();
}
