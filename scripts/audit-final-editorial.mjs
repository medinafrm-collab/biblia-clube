import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { loadTs } from './audit-loader.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { quizTopics } = loadTs('src/data/quizTopics.ts');
const { getQuizTopicContext } = loadTs('src/data/quizTopicContext.ts');
const { cellDynamics } = loadTs('src/data/cellDynamics.ts');
const { buildMeetingPlan } = loadTs('src/lib/meetingPlan.ts');
const origin = process.env.LOCAL_ORIGIN || 'http://127.0.0.1:3100';
const results = [];
const browser = await chromium.launch({ ...(process.env.CHROME_CHANNEL ? { channel: process.env.CHROME_CHANNEL } : { executablePath: process.env.CHROME_PATH }), headless: true });
try {
  const staticContext = await browser.newContext({ javaScriptEnabled: false });
  await staticContext.route('**/*', route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
  const staticPage = await staticContext.newPage();
  for (const topic of quizTopics) {
    const response = await staticPage.goto(origin + topic.path);
    assert.equal(response.status(), 200);
    const body = await staticPage.locator('main').innerText();
    const context = getQuizTopicContext(topic.id);
    for (const text of [...topic.introduction, context.introduction, context.closingNote,
      ...context.sections.flatMap(section => [section.title, section.description, ...section.references])]) {
      assert.ok(body.includes(text), `${topic.id}: ${text}`);
    }
    results.push({ route: topic.path, completeEditorialContentWithoutJavaScript: true });
  }
  for (const route of ['/jogo-da-memoria-biblico', '/ligue-os-pares', '/complete-a-frase', '/quem-sou-eu', '/modo-grupo']) {
    await staticPage.goto(origin + route);
    const examples = staticPage.getByRole('heading', { name: 'Exemplos comentados', exact: true }).locator('..');
    assert.equal(await examples.locator('article').count(), 2);
    assert.equal(await examples.getByText(/^Para conferir:/).count(), 2);
    results.push({ route, examplesWithoutPlayingOrJavaScript: 2 });
  }
  await staticContext.close();

  const context = await browser.newContext({ viewport: { width: 375, height: 850 } });
  await context.route('**/*', route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(origin + '/monte-seu-encontro', { waitUntil: 'networkidle' });
  const necessary = page.getByRole('button', { name: 'Apenas necessários', exact: true });
  if (await necessary.count()) await necessary.click();
  const defaultPlan = buildMeetingPlan(cellDynamics, 'celulas', 'aprender', 60);
  const renderedPlan = await page.locator('#plano').innerText();
  assert.ok(renderedPlan.includes(defaultPlan.dynamic.meetingCore));
  assert.ok(renderedPlan.includes('total 12 min'));
  assert.ok(!renderedPlan.includes('As quatro etapas somam 20 minutos'));
  results.push({ planner: 'adapted core rendered with its own twelve-minute schedule', passed: true });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({ path: '.test-artifacts/audit/meeting-plan.pdf', format: 'A4', printBackground: true });
  await page.emulateMedia({ media: 'screen' });
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'share', { configurable: true, value: undefined });
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: {
      writeText: async text => { window.auditCopiedPlan = text; },
    } });
  });
  await page.getByRole('button', { name: 'Compartilhar', exact: true }).click();
  await page.getByRole('status').filter({ hasText: 'Roteiro completo copiado.' }).waitFor();
  const copied = await page.evaluate(() => window.auditCopiedPlan);
  assert.match(copied, /ROTEIRO BÍBLIA CLUBE/);
  assert.match(copied, /Referências:/);
  for (let step = 1; step <= 6; step++) assert.ok(copied.includes(`${step}. `));
  results.push({ sharing: 'clipboard includes all six steps and references', passed: true });

  await page.evaluate(() => {
    navigator.clipboard.writeText = async () => { throw new DOMException('denied', 'NotAllowedError'); };
  });
  await page.getByRole('button', { name: 'Compartilhar', exact: true }).click();
  await page.getByRole('status').filter({ hasText: 'Não foi possível compartilhar ou copiar.' }).waitFor();
  results.push({ sharing: 'denial is reported as failure, not cancellation', passed: true });

  await page.evaluate(() => {
    Object.defineProperty(navigator, 'share', { configurable: true, value: async () => {
      throw new DOMException('cancelled', 'AbortError');
    } });
  });
  await page.getByRole('button', { name: 'Compartilhar', exact: true }).click();
  await page.getByRole('status').filter({ hasText: 'O compartilhamento foi cancelado.' }).waitFor();
  results.push({ sharing: 'native cancellation', passed: true });

  await page.evaluate(() => {
    Object.defineProperty(navigator, 'share', { configurable: true, value: async () => {} });
  });
  await page.getByRole('button', { name: 'Compartilhar', exact: true }).click();
  await page.getByRole('status').filter({ hasText: 'Roteiro compartilhado.' }).waitFor();
  results.push({ sharing: 'native success', passed: true });

  await page.evaluate(() => {
    Object.defineProperty(navigator, 'share', { configurable: true, value: undefined });
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: undefined });
  });
  await page.getByRole('button', { name: 'Compartilhar', exact: true }).click();
  await page.getByRole('status').filter({ hasText: 'A cópia não está disponível' }).waitFor();
  results.push({ sharing: 'unsupported APIs provide PDF fallback', passed: true });
  assert.deepEqual(errors, []);
  await page.goto(origin + '/guias/jogos-biblicos-para-grupos', { waitUntil: 'networkidle' });
  const table = page.getByRole('region', { name: 'Tabela de formatos de jogos', exact: true });
  await table.focus();
  assert.equal(await table.evaluate(element => element === document.activeElement), true);
  await page.keyboard.press('ArrowRight');
  await page.waitForFunction(() => document.querySelector('[aria-label="Tabela de formatos de jogos"]').scrollLeft > 0);
  results.push({ keyboard: 'comparison table can be focused and scrolled', passed: true });
  await page.screenshot({ path: '.test-artifacts/audit/guide-table-375.png' });
  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(origin, { waitUntil: 'networkidle' });
    const hero = page.getByRole('img', { name: /^Cinco jogos bíblicos ilustrados/ });
    await hero.evaluate(image => image.decode());
    assert.equal(await hero.getAttribute('fetchpriority'), 'high');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await page.screenshot({ path: `.test-artifacts/audit/home-final-${width}.png` });
    results.push({ homeWidth: width, heroLoadedWithHighPriority: true });
  }
  await context.close();
  fs.writeFileSync('.test-artifacts/audit/editorial-final-2026-10-09.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
} finally {
  await browser.close();
}
