import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { loadTs } from './audit-loader.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { quizQuestions } = loadTs('src/data/quizQuestions.ts');
const { getQuizTopic } = loadTs('src/data/quizTopics.ts');
const { getQuizTopicContext } = loadTs('src/data/quizTopicContext.ts');
const origin = 'http://127.0.0.1:3100';
const output = 'tmp/audit-2026-10-07';
const evidenceDate = process.env.AUDIT_DATE || '20261008';
assert.match(evidenceDate, /^\d{8}$/);
const topic = process.env.AUDIT_QUIZ_TOPIC || 'geral';
const journey = Number(process.env.AUDIT_QUIZ_JOURNEY || 1);
assert.ok([1, 2, 3].includes(journey));
const topicChecks = {
  geral: { route: '/quiz-biblico', heading: 'Organização não é ordem de escrita', reference: 'Mateus 22:34-40', name: 'quiz-geral', firstText: /No princípio|No principio/i },
  'antigo-testamento': { route: '/quiz-biblico/antigo-testamento', heading: 'Lei e aliança', reference: 'Gênesis 6:13-22', name: 'quiz-antigo', firstText: /disse Deus a Noé/i },
  'jesus-evangelhos': { route: '/quiz-biblico/jesus-e-evangelhos', heading: 'Relatos com propósito', reference: 'Mateus 2:1-6', name: 'quiz-evangelhos', firstText: /nascido em Belém/i },
  personagens: { route: '/quiz-biblico/personagens-biblicos', heading: 'Nomes iguais, pessoas diferentes', reference: 'Gênesis 12:1-5', name: 'quiz-personagens', firstText: /disse a Abrão/i },
  'mulheres-da-biblia': { route: '/quiz-biblico/mulheres-da-biblia', heading: 'Família e recomeço', reference: 'Gênesis 18:9-15', name: 'quiz-mulheres', firstText: /Onde está Sara/i },
  'parabolas-de-jesus': { route: '/quiz-biblico/parabolas-de-jesus', heading: 'O contexto orienta a leitura', reference: 'Lucas 10:30-37', name: 'quiz-parabolas', firstText: /descia de Jerusalém a Jericó/i },
  'lugares-da-biblia': { route: '/quiz-biblico/lugares-da-biblia', heading: 'Partidas e promessas', reference: '2 Samuel 5:4-10', name: 'quiz-lugares', firstText: /Em Hebrom reinou/i },
  'igreja-primitiva': { route: '/quiz-biblico/igreja-primitiva', heading: 'Pentecostes e testemunho', reference: 'Atos 1:6-8', name: 'quiz-igreja', firstText: /restaurarás neste tempo/i },
};
assert.ok(Object.hasOwn(topicChecks, topic));
const { route, heading: contextHeading, reference: sampleReference, name: evidenceName, firstText } = topicChecks[topic];
const editorialContext = getQuizTopicContext(topic);
const editorialTexts = [...getQuizTopic(topic).introduction, editorialContext.introduction, editorialContext.closingNote, ...editorialContext.sections.flatMap(section => [section.title, section.description, ...section.references])];
assert.ok(journey === 1 || Object.hasOwn(topicChecks, topic));
const journeyTwoFirstText = { geral: /Saí do meio de meu povo/i, 'antigo-testamento': /Meu arco porei nas nuvens/i, 'jesus-evangelhos': /veio João Batista/i, personagens: /o SENHOR visitou Sara/i, 'mulheres-da-biblia': /Maria levantou-se/i, 'parabolas-de-jesus': /ouve a palavra do Reino/i, 'lugares-da-biblia': /lava-te sete vezes no Jordão/i, 'igreja-primitiva': /um certo discípulo, de nome Ananias/i };
const journeyThreeFirstText = { geral: /Para todas as coisas há um tempo determinado/i, 'antigo-testamento': /toda a terra de uma língua/i, 'jesus-evangelhos': /Todos os anos, seus pais iam a Jerusalém/i, personagens: /saiu o rei de Sodoma/i, 'mulheres-da-biblia': /Um homem da família de Levi/i, 'parabolas-de-jesus': /Ouvi outra parábola/i, 'lugares-da-biblia': /Estas são as gerações de Terá/i, 'igreja-primitiva': /dia de Pentecostes/i };
assert.ok(journey !== 3 || Object.hasOwn(journeyThreeFirstText, topic));
const evidenceSuffix = journey === 1 ? '' : `-jornada${journey}`;
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true });
const report = { widths: [], errors: [], completedQuestions: 0 };

try {
  for (const width of [320, 375, 768, 1024, 1280, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, javaScriptEnabled: false });
    const response = await page.goto(`${origin}${route}`);
    assert.equal(response.status(), 200);
    const result = await page.evaluate(({ contextHeading, sampleReference, editorialTexts }) => ({
      overflow: document.documentElement.scrollWidth > innerWidth,
      h1: document.querySelectorAll('main h1').length,
      context: document.querySelector('main').innerText.includes(contextHeading),
      source: document.querySelector('main').innerText.includes(sampleReference),
      editorial: editorialTexts.every(text => document.querySelector('main').innerText.includes(text)),
    }), { contextHeading, sampleReference, editorialTexts });
    assert.equal(result.overflow, false);
    assert.equal(result.h1, 1);
    assert.ok(result.context && result.source);
    assert.ok(result.editorial);
    report.widths.push({ width, ...result });
    if (width === 375) await page.screenshot({ path: `${output}/${evidenceName}${evidenceSuffix}-${evidenceDate}-375.png`, fullPage: true });
    await page.close();
  }

  const page = await browser.newPage({ viewport: { width: 375, height: 900 } });
  page.on('pageerror', error => report.errors.push(error.message));
  await page.route('**/*', route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
  await page.goto(`${origin}${route}?jornada=${journey}`, { waitUntil: 'networkidle' });
  const consent = page.getByRole('button', { name: 'Apenas necessários', exact: true });
  if (await consent.count()) await consent.click();
  const questions = quizQuestions.filter(question => question.topics.includes(topic) && (question.journey ?? 1) === journey);
  assert.ok(questions.length > 0);
  const readReferences = new Set();
  for (const [index, question] of questions.entries()) {
    await page.locator('#quiz h3').filter({ hasText: question.question }).waitFor();
    const letter = String.fromCharCode(65 + question.options.indexOf(question.correctAnswer));
    await page.getByRole('button', { name: `Alternativa ${letter}: ${question.correctAnswer}`, exact: true }).click();
    {
      const passage = readReferences.has(question.reference)
        ? null
        : page.waitForResponse(response => response.url().includes('/api/bible-passage'));
      await page.getByRole('button', { name: 'Ler referência', exact: true }).first().click();
      if (passage) assert.equal((await passage).status(), 200);
      readReferences.add(question.reference);
      const region = page.getByRole('region', { name: 'Texto da passagem bíblica' });
      await region.waitFor();
      if (index === 0) await region.getByText(journey === 3 ? journeyThreeFirstText[topic] : journey === 2 ? journeyTwoFirstText[topic] : firstText).first().waitFor();
      assert.ok((await region.innerText()).trim().length > 0);
      await page.keyboard.press('Escape');
      assert.equal(await page.getByRole('dialog').count(), 0);
    }
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await page.getByRole('button', { name: /Próxima pergunta|Ver meu resultado/ }).click();
    report.completedQuestions++;
  }
  await page.getByRole('heading', { name: `Você acertou ${questions.length} de ${questions.length}` }).waitFor();
  assert.deepEqual(report.errors, []);
  await page.close();
  fs.writeFileSync(`${output}/${evidenceName}${evidenceSuffix}-${evidenceDate}-validation.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report));
} finally {
  await browser.close();
}
