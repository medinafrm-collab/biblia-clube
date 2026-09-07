import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { loadTs } from './audit-loader.mjs';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { quizQuestions } = loadTs('src/data/quizQuestions.ts');
const { matchingThemes } = loadTs('src/data/matchingPairs.ts');
const { memoryGameModes } = loadTs('src/data/memoryGamePairs.ts');
const { completePhraseQuestions } = loadTs('src/data/completePhraseQuestions.ts');
const { whoAmICharacters } = loadTs('src/data/whoAmICharacters.ts');
const { cellDynamics } = loadTs('src/data/cellDynamics.ts');
const origin = 'http://127.0.0.1:3100';
const output = '.test-artifacts/audit';
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true });
const context = await browser.newContext({ viewport: { width: 375, height: 850 }, reducedMotion: 'reduce' });
await context.route('**/*', r => new URL(r.request().url()).origin === origin ? r.continue() : r.abort());
const page = await context.newPage();
page.setDefaultTimeout(7000);
const report = { tests: [], errors: [], accessibility: [] };
page.on('pageerror', e => report.errors.push(e.message));
const go = async route => {
  await page.goto(origin + route, { waitUntil: 'networkidle' });
  const consent = page.getByRole('button', { name: 'Apenas necessários', exact: true });
  if (await consent.count()) await consent.click();
};
const check = async (name, fn) => {
  if (process.env.AUDIT_FLOW_FILTER && !name.includes(process.env.AUDIT_FLOW_FILTER)) return;
  try { await fn(); report.tests.push({ name, passed: true }); console.log(`PASS ${name}`); }
  catch (error) { report.tests.push({ name, passed: false, error: error.message }); console.log(`FAIL ${name}: ${error.message}`); await page.screenshot({ path: `${output}/failure-${report.tests.length}.png`, fullPage: true }); }
};
try {
  await check('Home mobile menu, anchors and Escape focus', async () => {
    await go('/');
    await page.getByRole('button', { name: 'Abrir menu' }).click();
    await page.keyboard.press('Escape');
    assert.equal(await page.getByRole('button', { name: 'Abrir menu' }).evaluate(el => el === document.activeElement), true);
    await page.getByRole('button', { name: 'Abrir menu' }).click();
    await page.getByRole('navigation', { name: 'Navegação para celular' }).getByRole('link', { name: 'Jogos', exact: true }).click();
    assert.ok(page.url().endsWith('#jogos'));
  });
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
  await check('Quiz wrong answer, reload/resume and Bible dialog keyboard', async () => {
    await go('/quiz-biblico/antigo-testamento');
    await page.getByRole('button', { name: /^Alternativa A:/ }).click();
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('biblia-clube:quiz-progress:v1')));
    assert.equal(saved.score, 0);
    await go('/quiz-biblico/antigo-testamento?continuar=1');
    assert.equal(await page.getByRole('button', { name: /^Alternativa A:/ }).isDisabled(), true);
    await page.getByRole('button', { name: 'Ler referência', exact: true }).first().click();
    await page.getByRole('dialog').waitFor();
    await page.getByRole('region', { name: 'Texto da passagem bíblica' }).getByText(/No principio|No princípio/i).first().waitFor().catch(() => {});
    await page.keyboard.press('Tab');
    assert.equal(await page.getByRole('region', { name: 'Texto da passagem bíblica' }).evaluate(el => el === document.activeElement), true);
    await page.keyboard.press('Escape');
    assert.equal(await page.getByRole('dialog').count(), 0);
  });
  await check('Library search, empty state, reset and group audience filter', async () => {
    await go('/biblioteca');
    await page.getByRole('searchbox').fill('xyzsemresultado');
    await page.getByRole('heading', { name: 'Nenhum recurso encontrado.' }).waitFor();
    await page.getByRole('button', { name: 'Limpar filtros' }).click();
    await page.getByRole('combobox').nth(1).selectOption('Grupos');
    await page.getByRole('link').filter({ hasText: 'Pontes de gratidão' }).first().waitFor();
    await page.getByRole('searchbox').fill('Marcos');
    await page.getByRole('link').filter({ hasText: 'Plano de quatro encontros' }).first().click();
    await page.waitForURL('**/biblioteca/plano-de-quatro-encontros-em-marcos');
  });
  await check('Meeting builder 64 combinations, duration totals and audience-safe variants', async () => {
    await go('/monte-seu-encontro');
    for (const audience of ['Célula ou grupo', 'Jovens', 'Casais', 'Família']) {
      await page.getByRole('button').filter({ has: page.locator('strong', { hasText: new RegExp(`^${audience}$`) }) }).click();
      for (const duration of [30, 45, 60, 90]) {
        await page.getByRole('button', { name: `${duration} min`, exact: true }).click();
        for (const goal of ['Integrar', 'Aprender', 'Conversar', 'Celebrar']) {
          await page.getByRole('button').filter({ has: page.locator('strong', { hasText: new RegExp(`^${goal}$`) }) }).click();
          const timeline = await page.locator('#plano ol').first().locator('li').allTextContents();
          assert.equal(timeline.length, 6);
          assert.equal(timeline.reduce((sum, text) => sum + Number(text.match(/(\d+) min$/)[1]), 0), duration);
          for (const item of timeline) assert.ok(item.length >= 80, item);
          assert.equal(await page.locator('#plano').getByRole('heading', { name: 'Materiais' }).count(), 1);
          assert.ok(await page.locator('#plano ul li').count() >= 3);
          assert.equal(await page.locator('#plano').getByRole('heading', { name: 'Cuidado para quem conduz' }).count(), 1);
          const href = await page.locator('#plano a[href^="/dinamicas"]').getAttribute('href');
          const dynamic = cellDynamics.find(d => href.endsWith(d.id));
          assert.equal(dynamic.audience, audience === 'Jovens' ? 'jovens' : audience === 'Casais' ? 'casais' : 'todos');
        }
      }
      for (let i = 0; i < 5; i++) await page.getByRole('button', { name: 'Trocar sugestão' }).click();
    }
    await page.emulateMedia({ media: 'print' });
    await page.screenshot({ path: `${output}/meeting-print.png`, fullPage: true });
    await page.emulateMedia({ media: 'screen' });
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
  await check('Invalid route and safe Bible API inputs', async () => {
    assert.equal((await fetch(origin + '/biblioteca/nao-existe')).status, 404);
    assert.equal((await fetch(origin + '/api/bible-passage')).status, 400);
    assert.equal((await fetch(origin + '/api/bible-passage?reference=' + 'a'.repeat(121))).status, 400);
    const response = await fetch(origin + '/api/bible-passage?reference=' + encodeURIComponent('Gênesis 9999999999999999999999'), { signal: AbortSignal.timeout(3000) });
    assert.equal((await response.json()).sections.length, 0);
  });
  const routes = JSON.parse(fs.readFileSync(`${output}/browser-baseline.json`, 'utf8')).routes.map(r => r.route);
  for (const route of (process.env.AUDIT_FLOW_FILTER ? [] : routes)) {
    await go(route);
    await page.addScriptTag({ path: '.tools/audit/node_modules/axe-core/axe.min.js' });
    const result = await page.evaluate(async () => {
      const result = await window.axe.run(document, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
        rules: { 'label-content-name-mismatch': { enabled: true } },
      });
      return result.violations.map(v => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) }));
    });
    report.accessibility.push({ route, violations: result });
    if (route.startsWith('/materiais/')) {
      await page.emulateMedia({ media: 'print' });
      await page.pdf({ path: `${output}/print-${route.split('/').pop()}.pdf`, format: 'A4', printBackground: true });
      await page.emulateMedia({ media: 'screen' });
    }
  }
} finally {
  fs.writeFileSync(`${output}/flows.json`, JSON.stringify(report, null, 2));
  await browser.close();
}
console.log(JSON.stringify({ tests: report.tests, errors: report.errors, accessibility: report.accessibility.filter(r => r.violations.length).map(r => ({ route: r.route, rules: r.violations.map(v => v.id) })) }, null, 2));
if (report.tests.some(test => !test.passed) || report.errors.length || report.accessibility.some(result => result.violations.length)) process.exitCode = 1;
