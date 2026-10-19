import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import { loadTs } from './audit-loader.mjs';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { quizQuestions } = loadTs('src/data/quizQuestions.ts');
const { matchingThemes } = loadTs('src/data/matchingPairs.ts');
const { memoryGameModes } = loadTs('src/data/memoryGamePairs.ts');
const { completePhraseQuestions } = loadTs('src/data/completePhraseQuestions.ts');
const { whoAmICharacters } = loadTs('src/data/whoAmICharacters.ts');
const local = process.env.LOCAL_ORIGIN || 'http://127.0.0.1:3100';
let server;
if (process.env.START_LOCAL_BUILD === '1') {
  server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', new URL(local).port], { stdio: 'pipe' });
  try {
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Local build server timeout')), 30000);
      server.stdout.on('data', data => { if (data.toString().includes('Ready')) { clearTimeout(timer); resolve(); } });
      server.on('error', error => { clearTimeout(timer); reject(error); });
      server.on('exit', code => { clearTimeout(timer); reject(new Error('Local build server exited: ' + code)); });
    });
  } catch (error) { server.kill(); throw error; }
}
const origin = 'https://www.bibliaclube.com.br';
const output = '.test-artifacts/audit';
fs.mkdirSync(output, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true });
const context = await browser.newContext({ viewport: { width: 375, height: 850 }, reducedMotion: 'reduce', serviceWorkers: 'block' });
await context.addInitScript(() => {
  localStorage.setItem('biblia-clube:analytics-consent:v1', 'granted');
  Object.defineProperty(navigator, 'share', { configurable: true, value: undefined });
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => {} } });
});
await context.route('**/*', async route => {
  const url = new URL(route.request().url());
  if (url.origin === origin) {
    const response = await route.fetch({ url: local + url.pathname + url.search, maxRedirects: 0 });
    return route.fulfill({ response });
  }
  if (url.hostname === 'www.googletagmanager.com') return route.fulfill({ contentType: 'application/javascript', body: 'window.__mockTag = true;' });
  return route.abort();
});
const page = await context.newPage();
page.setDefaultTimeout(12000);
const report = { tests: [], errors: [], realGoogleRequests: false };
page.on('pageerror', error => report.errors.push(error.message));
const gameByPath = { '/quiz-biblico': 'quiz', '/ligue-os-pares': 'ligue-os-pares', '/complete-a-frase': 'complete-a-frase', '/quem-sou-eu': 'quem-sou-eu', '/jogo-da-memoria-biblico': 'jogo-da-memoria', '/modo-grupo': 'modo-grupo' };
const go = async path => {
  await page.goto(origin + path, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__mockTag === true);
};
const events = async () => page.evaluate(() => Array.from(window.dataLayer || [], call => Array.from(call)).filter(call => call[0] === 'event'));
const check = async (name, fn) => {
  try {
    await fn();
    const game = gameByPath[new URL(page.url()).pathname];
    const calls = await events();
    const views = calls.filter(call => call[1] === 'game_view' && call[2].game === game);
    assert.ok(views.length >= 1, game + ': game_view');
    assert.equal(new Set(views.map(call => JSON.stringify(call[2]))).size, views.length, game + ': duplicate view for the same context');
    for (const event of ['game_start', 'game_finish']) assert.equal(calls.filter(call => call[1] === event && call[2].game === game).length, 1, game + ': ' + event);
    const feedback = page.getByRole('link', { name: /Enviar feedback/ });
    assert.equal(await feedback.count(), 1);
    const href = await feedback.getAttribute('href');
    assert.equal(new URL(href).protocol, 'https:');
    assert.equal(await feedback.getAttribute('target'), '_blank');
    await page.getByRole('button', { name: /Compartilhar resultado/ }).click();
    assert.equal((await events()).filter(call => call[1] === 'game_share' && call[2].game === game).length, 1);
    const popupPromise = context.waitForEvent('page');
    await feedback.click();
    const popup = await popupPromise;
    await popup.close();
    const clicked = (await events()).filter(call => call[1] === 'game_feedback_open' && call[2].game === game);
    assert.equal(clicked.length, 1);
    assert.ok(clicked[0][2].source);
    for (const call of await events()) assert.ok(!Object.keys(call[2]).some(key => /email|team_name|answer_text/i.test(key)));
    report.tests.push({ name, game, events: ['game_view', 'game_start', 'game_finish', 'game_share', 'game_feedback_open'], feedback: href, passed: true });
    console.log('PASS ' + name);
  } catch (error) {
    report.tests.push({ name, passed: false, error: error.message });
    console.log('FAIL ' + name + ': ' + error.message);
    await page.screenshot({ path: output + '/analytics-game-failure.png', fullPage: true });
  }
};
try {
  await page.goto(origin);
  await check('Quiz journey deep link, all answers, score and result', async () => {
    await page.evaluate(() => localStorage.removeItem('biblia-clube:quiz-progress:v1'));
    await go('/quiz-biblico?jornada=2');
    const questions = quizQuestions.filter(q => q.topics.includes('geral') && q.journey === 2);
    await page.locator('#quiz h3').filter({ hasText: questions[0].question }).waitFor();
    for (const q of questions) {
      await page.getByRole('button', { name: `Alternativa ${String.fromCharCode(65 + q.options.indexOf(q.correctAnswer))}: ${q.correctAnswer}`, exact: true }).click();
      await page.getByRole('button', { name: /Próxima pergunta|Ver meu resultado/ }).click();
    }
    await page.getByRole('heading', { name: `Você acertou ${questions.length} de ${questions.length}` }).waitFor();
    assert.equal(await page.evaluate(() => localStorage.getItem('biblia-clube:quiz-progress:v1')), null);
    await page.screenshot({ path: `${output}/quiz-result-375.png`, fullPage: true });
  });
  await check('Matching game complete round with explanations', async () => {
    await go('/ligue-os-pares');
    await page.getByRole('button', { name: /Começar rodada/ }).click();
    for (const pair of matchingThemes[0].pairs) {
      await page.getByRole('button').filter({ has: page.locator('strong', { hasText: new RegExp(`^${pair.left}$`) }) }).click();
      await page.getByRole('button').filter({ has: page.locator('strong', { hasText: new RegExp(`^${pair.right}$`) }) }).click();
    }
    await page.getByRole('heading', { name: 'Você conectou todos os pares!' }).waitFor();
  });
  await check('Complete phrase all ten answers and result', async () => {
    await go('/complete-a-frase');
    await page.getByRole('button', { name: /Começar rodada/ }).click();
    for (let i = 0; i < 10; i++) {
      const heading = await page.locator('main h1').innerText();
      const q = completePhraseQuestions.find(q => q.prompt === heading);
      assert.ok(q, heading);
      await page.getByRole('button').filter({ hasText: q.answer }).first().click();
      await page.getByRole('button', { name: /Próxima frase|Ver resultado/ }).click();
    }
    assert.match(await page.locator('main h1').innerText(), /10/);
  });
  await check('Who am I progressive clues, keyboard answer and complete result', async () => {
    await go('/quem-sou-eu');
    await page.getByRole('button', { name: 'Começar jornada', exact: true }).first().click();
    const characters = whoAmICharacters.filter(character => character.journey === 'known');
    for (let index = 0; index < characters.length; index++) {
      const character = characters[index];
      if (index === 0) {
        await page.getByRole('button', { name: /Revelar outra pista/ }).click();
        assert.match(await page.locator('main').innerText(), new RegExp(character.clues[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
      }
      const option = page.getByRole('button', { name: new RegExp(`${character.name}$`) });
      await option.focus();
      await page.keyboard.press('Enter');
      await page.getByText(new RegExp(index === 0 ? 'Correto! \\+80 pontos' : 'Correto! \\+100 pontos')).waitFor();
      await page.getByRole('button', { name: /Próximo personagem|Ver resultado/ }).click();
    }
    await page.getByRole('heading', { name: '1180 pontos' }).waitFor();
    assert.match(await page.locator('main').innerText(), /Acertos\s*12/);
  });
  await check('Memory game full round, revealed UI only', async () => {
    await go('/jogo-da-memoria-biblico');
    await page.getByRole('button', { name: /Começar jogo/ }).click();
    const cards = page.locator('button.group.relative');
    const known = new Map();
    const labels = new Map(memoryGameModes[0].pairs.flatMap(p => [[`${p.firstKind}: ${p.first}`, p.id], [`${p.secondKind}: ${p.second}`, p.id]]));
    for (let round = 0; round < 40 && await page.getByRole('button', { name: 'Reiniciar', exact: true }).count(); round++) {
      const states = await cards.evaluateAll(nodes => nodes.map((el, index) => ({ index, label: el.getAttribute('aria-label'), disabled: el.disabled })));
      for (const state of states) if (labels.has(state.label)) known.set(state.index, labels.get(state.label));
      const available = states.filter(s => !s.disabled);
      const first = available.find(s => !known.has(s.index)) || available[0];
      if (!first) break;
      await cards.nth(first.index).click();
      const pairId = labels.get(await cards.nth(first.index).getAttribute('aria-label'));
      known.set(first.index, pairId);
      const second = available.find(s => s.index !== first.index && known.get(s.index) === pairId) || available.find(s => s.index !== first.index && !known.has(s.index)) || available.find(s => s.index !== first.index);
      await cards.nth(second.index).click();
      known.set(second.index, labels.get(await cards.nth(second.index).getAttribute('aria-label')));
      await page.waitForTimeout(1250);
    }
    await page.getByRole('button', { name: 'Jogar novamente', exact: true }).waitFor();
  });
  await check('Group mode five questions, team names and scoreboard', async () => {
    await go('/modo-grupo');
    await page.getByLabel('Equipe 1', { exact: true }).fill('Equipe Teste');
    await page.getByLabel('Quantidade de perguntas').selectOption('5');
    await page.getByRole('button', { name: /Iniciar partida/ }).click();
    for (let i = 0; i < 5; i++) {
      const headings = await page.locator('main h2').allTextContents();
      const q = quizQuestions.find(q => headings.includes(q.question));
      assert.ok(q);
      await page.getByRole('button').filter({ hasText: q.correctAnswer }).last().click();
      await page.getByRole('button', { name: /Próxima pergunta|Ver resultado/ }).click();
    }
    await page.getByRole('button', { name: 'Nova configuração', exact: true }).waitFor();
    await page.screenshot({ path: `${output}/group-result-375.png`, fullPage: true });
  });
  await check('Who am I intermediate journey and complete result', async () => {
    await go('/quem-sou-eu');
    await page.getByRole('button', { name: 'Começar jornada', exact: true }).nth(1).click();
    const characters = whoAmICharacters.filter(character => character.journey === 'intermediate');
    for (let index = 0; index < characters.length; index++) {
      const character = characters[index];
      if (index === 0) {
        await page.getByRole('button', { name: /Revelar outra pista/ }).click();
        assert.match(await page.locator('main').innerText(), new RegExp(character.clues[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
      }
      const option = page.getByRole('button', { name: new RegExp(`${character.name}$`) });
      await option.focus();
      await page.keyboard.press('Enter');
      await page.getByText(new RegExp(index === 0 ? 'Correto! \\+80 pontos' : 'Correto! \\+100 pontos')).waitFor();
      await page.getByRole('button', { name: /Próximo personagem|Ver resultado/ }).click();
    }
    await page.getByRole('heading', { name: '1180 pontos' }).waitFor();
    assert.match(await page.locator('main').innerText(), /Acertos\s*12/);
  });

  for (const script of ['scripts/test-analytics-browser.mjs', 'scripts/test-privacy-browser.mjs']) {
    await new Promise((resolve, reject) => {
      const child = spawn(process.execPath, [script], { env: { ...process.env, LOCAL_ORIGIN: local }, stdio: ['ignore', 'pipe', 'pipe'] });
      let log = '';
      child.stdout.on('data', data => { log += data; });
      child.stderr.on('data', data => { log += data; });
      child.on('error', reject);
      child.on('exit', code => {
        fs.writeFileSync(output + '/' + script.split('/').at(-1) + '-2026-10-19.log', log);
        if (code === 0) resolve(); else reject(new Error(script + ': ' + log.slice(-2500)));
      });
    });
    console.log('PASS ' + script);
  }
} finally {
  await browser.close();
  server?.kill();
  fs.writeFileSync(output + '/games-analytics-feedback-2026-10-19.json', JSON.stringify(report, null, 2));
}
console.log(JSON.stringify(report, null, 2));
if (report.errors.length || report.tests.some(test => !test.passed)) process.exitCode = 1;

