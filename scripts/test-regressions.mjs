import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';
import { loadTs } from './audit-loader.mjs';

const { resolveBibleReference } = loadTs('src/lib/bibleReference.ts');
const meeting = loadTs('src/lib/meetingPlan.ts');
const { cellDynamics } = loadTs('src/data/cellDynamics.ts');
const { whoAmICharacters, whoAmIJourneys } = loadTs('src/data/whoAmICharacters.ts');
const { isAdEligiblePath } = loadTs('src/lib/adEligibility.ts');
const { quizQuestions } = loadTs('src/data/quizQuestions.ts');

test('Memory symbol feedback explains each association with a resolvable passage', () => {
  const { memoryGameModes } = loadTs('src/data/memoryGamePairs.ts');
  const symbols = memoryGameModes.find(mode => mode.id === 'symbols');
  assert.equal(symbols.pairs.length, 12);
  for (const pair of symbols.pairs) {
    const reference = pair.note.match(/(?:[1-3] )?[\p{L}]+ \d+:\d+(?:-\d+)?/u)?.[0];
    assert.ok(reference, pair.id);
    const passage = resolveBibleReference(reference);
    assert.ok(passage.sections.length && passage.sections.every(section => section.verses.length), reference);
  }
  assert.match(symbols.pairs.find(pair => pair.id === 'peter-keys').note, /Mateus 16:19/);
  assert.match(symbols.pairs.find(pair => pair.id === 'joshua-trumpets').note, /não indica que ele próprio tocava/);
});

test('Meeting integration never requests more associations than a playable theme', () => {
  const { matchingThemes } = loadTs('src/data/matchingPairs.ts');
  for (const duration of meeting.meetingDurations) {
    const plan = meeting.buildMeetingPlan(cellDynamics, 'celulas', 'integrar', duration);
    const instruction = plan.timeline[2].instruction;
    const count = Number(instruction.match(/até (\d+) associações/)?.[1]);
    assert.ok(count > 0 && matchingThemes.every(theme => count <= theme.pairs.length));
    assert.match(instruction, /encerre antes de completar/);
    assert.equal(meeting.meetingPlanTotal(plan.timeline), duration);
  }
});

test('Quiz questions identify the observed scene within their supplied passage', () => {
  const byId = id => quizQuestions.find(question => question.id === id);
  assert.match(byId(93).question, /atribuiu a Deus a revelação/);
  assert.equal(byId(93).correctAnswer, 'Daniel');
  assert.match(byId(103).question, /entre os juncos à margem/);
  assert.equal(byId(103).reference, 'Êxodo 2:3-9; Números 26:59');
});

test('Seven print-free formats distinguish digital games from oral activities', () => {
  const { editorialArticles } = loadTs('src/data/editorialContent.ts');
  const article = editorialArticles.find(item => item.slug === 'jogos-biblicos-sem-impressao');
  assert.equal(article.title, 'Jogos e atividades sem impressão: 7 formatos simples');
  assert.match(article.summary, /quatro formatos com jogos digitais, duas atividades orais e um fechamento/);
  assert.match(article.introduction[0], /itens 1, 3, 4 e 5 usam jogos digitais/);
  assert.match(article.introduction[0], /itens 2 e 6 são atividades orais/);
  assert.match(article.introduction[0], /item 7 é um fechamento/);
  assert.equal(article.sections.filter(section => /^[1-7]\. /.test(section.heading)).length, 7);
});

test('Group cards provide eighteen referenced answers without personal disclosures', () => {
  const { printableResources } = loadTs('src/data/printableResources.ts');
  const resource = printableResources.find(item => item.slug === 'cartoes-de-perguntas');
  const cards = resource.sections.flatMap(section => section.items);
  assert.equal(resource.sections.length, 4);
  assert.equal(cards.length, 24);
  cards.forEach((card, index) => assert.ok(card.startsWith(`${index + 1}. `)));
  assert.deepEqual(resource.answerKey.map(entry => entry.card), Array.from({ length: 18 }, (_, index) => index + 7));
  for (const entry of resource.answerKey) {
    const resolved = resolveBibleReference(entry.reference);
    assert.ok(resolved.sections.length && resolved.sections.every(section => section.verses.length), entry.reference);
    assert.ok(entry.answer.trim());
    assert.ok(cards[entry.card - 1].includes(entry.reference));
  }
  assert.match(resource.instructions.join(' '), /gabarito.*depois/);
  assert.doesNotMatch(cards.join(' '), /Que dificuldade|deixar de adiar|Por quem podemos orar|momento bom em família/);
});

test('Differentiated dynamics keep distinct tasks and short planner cores', () => {
  const byId = id => cellDynamics.find(item => item.id === id);
  assert.match(byId('verdade-ou-pressao').title, /Jogo limpo/);
  assert.match(byId('amizades-que-edificam').meetingCore, /livro/);
  assert.doesNotMatch(byId('amizades-que-edificam').meetingCore, /quiz/);
  assert.match(byId('digital-com-proposito').steps[2].description, /20\/11\/2030.*15h.*EXEMPLO/);
  assert.match(byId('maos-que-servem').meetingCore, /seis itens/);
  assert.match(byId('boas-novas-em-uma-frase').steps[2].description, /observação.*não informado.*aplicação/);
  assert.equal(new Set(cellDynamics.map(item => item.meetingCore)).size, cellDynamics.length);
  for (const item of cellDynamics) {
    assert.equal(item.steps.length, 4);
    for (const ref of item.references) assert.ok(resolveBibleReference(ref).sections.length, `${item.id}: ${ref}`);
  }
});

test('Service workshop offers a short instruction test with a complete correction', () => {
  const dynamic = cellDynamics.find(item => item.id === 'maos-que-servem');
  assert.equal(dynamic.duration, '15 min; extensão de 5 min');
  assert.equal(dynamic.steps.length, 4);
  assert.match(dynamic.steps[0].description, /3 minutos/);
  assert.match(dynamic.steps[1].description, /3 minutos/);
  assert.match(dynamic.steps[2].description, /6 minutos: 2.*2.*2/);
  assert.match(dynamic.steps[2].description, /não informado/);
  assert.match(dynamic.steps[2].description, /folha de regras e folha de placar em folhas comuns/);
  assert.match(dynamic.steps[2].description, /nenhum ajuste necessário/);
  assert.match(dynamic.steps[3].description, /3 \+ 3 \+ 6 \+ 3 = 15/);
  assert.match(dynamic.steps[3].description, /ainda não medidas/);
  assert.match(dynamic.meetingCore, /Qual item ficou sem destino\? Apoio: folha de placar/);
  assert.doesNotMatch(JSON.stringify(dynamic), /35 a 50|50 minutos|envelope/);
  for (const duration of meeting.meetingDurations) {
    const plan = meeting.buildMeetingPlan([dynamic], 'celulas', 'integrar', duration);
    assert.equal(meeting.meetingPlanTotal(plan.timeline), duration);
    assert.match(plan.timeline[1].instruction, /folha de placar/);
  }
});

test('Listening round keeps a short reciprocal exercise and a factual extension', () => {
  const dynamic = cellDynamics.find(item => item.id === 'escuta-que-aproxima');
  assert.equal(dynamic.duration, '15 min; extensão de 5 min');
  assert.equal(dynamic.steps.length, 4);
  assert.match(dynamic.steps[1].description, /A retoma a preferência; B oferece outra escolha/);
  assert.match(dynamic.steps[2].description, /primeiro minuto.*Troquem.*No minuto final/);
  assert.match(dynamic.steps[2].description, /não inventem um erro/);
  assert.match(dynamic.steps[2].description, /dia e o horário inventados/);
  assert.match(dynamic.steps[3].description, /3 \+ 3 \+ 6 \+ 3 = 15/);
  assert.match(dynamic.steps[3].description, /ainda não medidas/);
  assert.match(dynamic.meetingCore, /quem falou confirma ou corrige/);
  assert.doesNotMatch(JSON.stringify(dynamic), /45 a 60|22 minutos|três ciclos/);
  for (const duration of meeting.meetingDurations) {
    const plan = meeting.buildMeetingPlan([dynamic], 'casais', 'conversar', duration);
    assert.equal(meeting.meetingPlanTotal(plan.timeline), duration);
    assert.match(plan.timeline[1].instruction, /depois troquem/i);
    assert.match(plan.timeline[1].instruction, /não toda a oficina/);
  }
});

test('One sentence reading distinguishes observation and application in a short round', () => {
  const dynamic = cellDynamics.find(item => item.id === 'boas-novas-em-uma-frase');
  assert.equal(dynamic.duration, '12 min; extensão de 3 min');
  assert.equal(dynamic.references[0], 'Colossenses 4:5-6');
  assert.match(dynamic.steps[1].description, /não uma citação literal/);
  assert.match(dynamic.steps[2].description, /A: observação, Colossenses 4:6; B: não informado; C: aplicação/);
  assert.match(dynamic.steps[2].description, /Se a frase já estiver sustentada, mantenham-na/);
  assert.match(dynamic.steps[3].description, /3 \+ 2 \+ 5 \+ 2 = 12/);
  assert.match(dynamic.steps[3].description, /ainda não medidos/);
  assert.doesNotMatch(JSON.stringify(dynamic), /35 a 50|50 minutos|35 minutos/);
  for (const duration of meeting.meetingDurations) {
    const plan = meeting.buildMeetingPlan([dynamic], 'celulas', 'aprender', duration);
    assert.equal(meeting.meetingPlanTotal(plan.timeline), duration);
    assert.match(plan.timeline[3].instruction, /Use Colossenses 4:5-6/);
    assert.match(plan.timeline[1].instruction, /somente essa comparação/);
  }
});

test('Couples printable describes its overlap with the companion guide honestly', () => {
  const { printableResources } = loadTs('src/data/printableResources.ts');
  const resource = printableResources.find(item => item.slug === 'cartoes-para-casais');
  assert.equal(resource.sections.flatMap(section => section.items).length, 18);
  assert.match(resource.summary, /doze.*seis bíblicos, cinco/);
  assert.match(resource.instructions.join(' '), /Escolham uma versão para não repetir/);
  assert.match(resource.instructions.join(' '), /Zaqueu é a pergunta diferente/);
});

test('Preparation checklist connects twelve checks to a concrete game session', () => {
  const { printableResources } = loadTs('src/data/printableResources.ts');
  const resource = printableResources.find(item => item.slug === 'checklist-do-lider');
  assert.equal(resource.sections.length, 3);
  const items = resource.sections.flatMap(section => section.items);
  assert.equal(items.length, 12);
  assert.ok(items.every(item => item.startsWith('[ ] ')));
  assert.match(items.join(' '), /duas equipes, tema geral, cinco perguntas, Sem tempo e rebote desativado/);
  assert.match(items.join(' '), /minuto 45/);
  assert.match(items.join(' '), /alternativas, gabaritos e referências/);
  assert.match(items.join(' '), /não reutilize a pergunta por pontos/);
  assert.match(items.join(' '), /sem inventar um problema/);
  assert.match(resource.instructions.join(' '), /não nomes, respostas individuais/);
  assert.doesNotMatch(items.join(' '), /quem ficou à margem|acompanhamentos que prometi/);
});

test('Score sheet uses a six team grid without subjective score bonuses', () => {
  const { printableResources } = loadTs('src/data/printableResources.ts');
  const resource = printableResources.find(item => item.slug === 'folha-de-pontuacao');
  const table = resource.sections[0].table;
  assert.deepEqual(table.columns, ['Equipe', '1', '2', '3', '4', '5', 'Total']);
  assert.equal(table.rows.length, 6);
  assert.ok(table.rows.every(row => row.length === table.columns.length));
  assert.match(resource.instructions.join(' '), /10 pelo acerto inicial e 5 pelo rebote/);
  assert.match(resource.instructions.join(' '), /um traço quando a equipe não teve tentativa/);
  assert.doesNotMatch(JSON.stringify(resource), /Equipe que melhor colaborou/);
  assert.match(resource.sections[1].description, /soma 2/);
});

test('Blank meeting worksheet includes a time budget and referenced answer support', () => {
  const { printableResources } = loadTs('src/data/printableResources.ts');
  const resource = printableResources.find(item => item.slug === 'roteiro-de-encontro');
  const table = resource.sections.find(section => section.table).table;
  assert.deepEqual(table.columns, ['Etapa', 'Minutos', 'O que ler ou fazer']);
  assert.equal(table.rows.length, 5);
  assert.ok(table.rows.every(row => row.length === 3));
  assert.equal(table.rows[4][0], 'Total');
  const text = JSON.stringify(resource);
  assert.match(text, /3 \+ 5 \+ 7 \+ 5/);
  assert.equal(resource.sections.flatMap(section => section.items).filter(item => item.startsWith('Resposta de apoio e versículo:')).length, 2);
  assert.match(text, /O que retirar se faltar tempo/);
  assert.match(text, /Alternativa sem internet já preparada/);
  assert.doesNotMatch(text, /Acompanhamento necessário|Próximo passo do grupo/);
});

test('Family printable offers seven factual readings without a weekly commitment', () => {
  const { printableResources } = loadTs('src/data/printableResources.ts');
  const resource = printableResources.find(item => item.slug === 'plano-familiar-semanal');
  const days = resource.sections.slice(0, 2).flatMap(section => section.items);
  assert.equal(days.length, 7);
  for (const item of days) assert.match(item, /Apoio:/);
  assert.match(resource.instructions.join(' '), /estimativa/);
  assert.doesNotMatch(JSON.stringify(resource), /Como podemos falar com Deus sobre o medo|Uma pessoa por quem vamos orar|Uma atitude que praticaremos|Que escolha certa/);
  for (const ref of ['Marcos 10:13-16', 'Lucas 19:1-6', 'Marcos 1:16-20', 'João 6:8-13', 'Atos 18:1-3', 'Êxodo 31:1-6', 'Salmos 119:105']) assert.ok(resolveBibleReference(ref).sections.every(section => section.verses.length), ref);
});

test('Family reading keeps optional participation and complete oral sequence support', () => {
  const { editorialArticles } = loadTs('src/data/editorialContent.ts');
  const article = editorialArticles.find(item => item.slug === 'culto-domestico-com-criancas');
  const schedule = article.sections.find(item => item.schedule);
  let end = 0;
  for (const item of schedule.schedule) {
    const [from, to] = item.time.match(/\d+/g).map(Number);
    assert.equal(from, end);
    assert.ok(to > from);
    end = to;
  }
  assert.equal(end, 15);
  assert.match(schedule.note, /não medidos em aplicação real/);
  assert.match(schedule.schedule.at(-1).text, /oração breve opcional ou releia/);
  const questions = article.sections.find(item => item.heading === 'Perguntas com apoio para o adulto');
  assert.equal(questions.steps.length, 4);
  for (const [index, verse] of [13, 14, 16].entries()) assert.match(questions.steps[index].text, new RegExp(`Marcos 10:${verse}`));
  const sequence = article.sections.find(item => item.heading === 'Jogo pronto: coloque a cena em ordem');
  assert.match(sequence.paragraphs.join(' '), /C, B, D, A/);
  assert.match(sequence.paragraphs.join(' '), /trazer, depois receber/);
  const suggestions = article.sections.find(item => item.heading === 'Sugestões independentes para outra ocasião');
  assert.equal(suggestions.steps.length, 3);
  assert.match(suggestions.steps[0].text, /B, D, A, C/);
  assert.doesNotMatch(JSON.stringify(article), /Semana [234]:|Faça a oração breve/);
  for (const ref of ['Marcos 10:13-16', 'Lucas 19:1-6', 'João 6:1-13']) assert.ok(resolveBibleReference(ref).sections.every(section => section.verses.length));
});

test('Sixty minute meeting keeps five fictional examples and no weekly assignment', () => {
  const { editorialArticles } = loadTs('src/data/editorialContent.ts');
  const article = editorialArticles.find(item => item.slug === 'roteiro-completo-de-celula-em-60-minutos');
  const schedule = article.sections.find(item => item.schedule);
  let end = 0;
  for (const item of schedule.schedule) {
    const [from, to] = item.time.match(/\d+/g).map(Number);
    assert.equal(from, end);
    assert.ok(to > from);
    end = to;
  }
  assert.equal(end, 60);
  assert.match(schedule.note, /60 minutos sugeridos/);
  const examples = article.sections.find(item => item.heading === 'Apoio para as cinco situações');
  assert.equal(examples.steps.length, 5);
  for (const item of examples.steps) assert.match(item.text, /Frase:/);
  assert.match(examples.note, /não respostas únicas/);
  assert.equal(article.sections.find(item => item.questions).questions.length, 4);
  const revision = article.sections.find(item => item.heading === 'Uma resposta melhor e um encerramento preparado');
  assert.match(revision.paragraphs.join(' '), /sem tarefa para a semana/);
  assert.match(revision.paragraphs.join(' '), /acompanhar em silêncio/);
  assert.doesNotMatch(JSON.stringify(article), /Nesta semana, em|Na próxima reunião, convide|todos têm espaço para conversar/);
  assert.match(JSON.stringify(article), /não pede relatos íntimos/);
  const passage = resolveBibleReference('Colossenses 3:12-17');
  assert.equal(passage.sections[0].verses.length, 6);
  assert.ok(passage.sections[0].verses.some(verse => verse.number === 13));
});

test('Game night has a complete oral kit and a continuous 75 minute schedule', () => {
  const { editorialArticles } = loadTs('src/data/editorialContent.ts');
  const article = editorialArticles.find(item => item.slug === 'como-montar-uma-noite-de-jogos-biblicos');
  const schedule = article.sections.find(item => item.schedule).schedule;
  let end = 0;
  for (const item of schedule) {
    const [from, to] = item.time.match(/\d+/g).map(Number);
    assert.equal(from, end);
    assert.ok(to > from);
    end = to;
  }
  assert.equal(end, 75);
  assert.equal(article.sections.find(item => item.heading.startsWith('Kit de condução')).steps.length, 3);
  const questions = article.sections.find(item => item.heading === 'Rodada oral para falta de conexão').steps;
  const phrases = article.sections.find(item => item.heading === 'Troque o ritmo com Complete a Frase').steps;
  assert.equal(questions.length, 4);
  assert.equal(phrases.length, 3);
  for (const item of [...questions, ...phrases]) assert.match(item.text, /Resposta: [ABC][,.]/);
  for (const ref of ['Lucas 19:1-6', 'Atos 18:2-3', 'Marcos 1:9', 'Êxodo 3:1-4', 'Salmos 119:105', 'Salmos 23:1-3', 'Eclesiastes 3:1-8']) {
    const passage = resolveBibleReference(ref);
    assert.ok(passage.sections.length, ref);
    assert.ok(passage.sections.every(section => section.verses.length), ref);
  }
  assert.match(article.sections.find(item => item.schedule).note, /não medidos em aplicação real/);
});

test('Every quiz context provides distinct readable examples', () => {
  const { quizTopics } = loadTs('src/data/quizTopics.ts');
  const { getQuizTopicContext } = loadTs('src/data/quizTopicContext.ts');
  assert.equal(quizTopics.length, 8);
  for (const topic of quizTopics) {
    assert.ok(topic.introduction.length >= 3, topic.id);
    const context = getQuizTopicContext(topic.id);
    assert.equal(context.sections.length, 3);
    assert.equal(new Set(context.sections.map(section => section.description)).size, 3);
    for (const section of context.sections) for (const reference of section.references) {
      const passage = resolveBibleReference(reference);
      assert.ok(passage.sections.length, `${topic.id}: ${reference}`);
    }
  }
});

test('Materials use an honest print format and neutral couple activities', () => {
  const { printableResources } = loadTs('src/data/printableResources.ts');
  for (const resource of printableResources) assert.equal(resource.format, 'A4');
  const couples = printableResources.find(resource => resource.slug === 'cartoes-para-casais');
  assert.equal(couples.sections.flatMap(section => section.items).length, 18);
  assert.doesNotMatch(JSON.stringify(couples), /finanç|financeir|ansiedade/i);
  const score = printableResources.find(resource => resource.slug === 'folha-de-pontuacao');
  assert.doesNotMatch(score.instructions.join(' '), /coluna colaboração/);
});

test('Recreational couple quiz has six unambiguous choices and readable references', () => {
  const { couplesRecreationalQuiz } = loadTs('src/data/recreationalGuides.ts');
  assert.equal(couplesRecreationalQuiz.length, 6);
  assert.equal(new Set(couplesRecreationalQuiz.map(item => item.question)).size, 6);
  for (const item of couplesRecreationalQuiz) {
    assert.equal(item.options.length, 4);
    assert.equal(new Set(item.options).size, 4);
    assert.equal(item.options.filter(option => option === item.answer).length, 1);
    assert.ok(resolveBibleReference(item.reference).sections.length, item.reference);
    assert.ok(item.explanation && item.observation);
  }
  assert.doesNotMatch(JSON.stringify(couplesRecreationalQuiz), /reconcilia|pastoral|conflito|intimidade/i);
});

test('Youth workshop follows its passage and offers an honest 35 minute plan', () => {
  const { youthReadingWorkshop } = loadTs('src/data/recreationalGuides.ts');
  const passage = resolveBibleReference(youthReadingWorkshop.reference);
  assert.equal(passage.sections[0].verses.length, 6);
  assert.equal(youthReadingWorkshop.facts.length, 3);
  assert.equal(youthReadingWorkshop.comparisons.length, 4);
  assert.equal(youthReadingWorkshop.sequence.length, 6);
  assert.equal(new Set(youthReadingWorkshop.sequence.map(item => item.id)).size, 6);
  const expected = [...youthReadingWorkshop.sequence].sort((a, b) => a.verse - b.verse).map(item => item.id);
  assert.deepEqual(youthReadingWorkshop.sequenceAnswer, expected);
  assert.equal(youthReadingWorkshop.schedule.reduce((sum, item) => sum + item.minutes, 0), 35);
  assert.match(youthReadingWorkshop.comparisons[2].answer, /não informa/);
});

test('Planning workshop separates preparation, event and optional replacement', () => {
  const planning = cellDynamics.find(item => item.id === 'planejar-juntos');
  assert.deepEqual(planning.planningWorksheet.fields.map(field => field.label), ['Jogo', 'Tempo do evento', 'Funções', 'Participação', 'Sem internet']);
  assert.ok(planning.planningWorksheet.fields.every(field => field.prompt && field.example));
  assert.match(planning.planningWorksheet.fields[1].example, /3 minutos.*12.*5/);
  assert.match(planning.planningWorksheet.fields[4].example, /Noé.*Gênesis 6:13-22/);
  assert.match(planning.planningWorksheet.variation, /B, C, D, A/);
  assert.match(planning.planningWorksheet.variation, /5 minutos, substituindo/);
  assert.match(planning.steps[3].description, /6 \+ 5 \+ 12 \+ 7 = 30/);
  assert.match(planning.meetingCore, /não executem.*nem acrescentem a variação/);
  assert.ok(!cellDynamics.some(item => item.id === 'rotina-com-proposito'));
  const config = loadTs('next.config.ts');
  return config.default.redirects().then(redirects => {
    assert.ok(redirects.some(item => item.source === '/dinamicas-para-celulas/rotina-com-proposito' && item.destination === '/dinamicas-para-celulas/planejar-juntos' && item.permanent));
  });
});

test('Couple cards keep eighteen distinct recreational prompts in three categories', () => {
  const { printableResources } = loadTs('src/data/printableResources.ts');
  const cards = printableResources.find(item => item.slug === 'cartoes-para-casais');
  assert.deepEqual(cards.sections.map(section => section.title), ['Preferências', 'Atividades juntos', 'Leitura bíblica']);
  for (const section of cards.sections) assert.equal(section.items.length, 6);
  assert.equal(new Set(cards.sections.flatMap(section => section.items)).size, 18);
  assert.match(cards.instructions.join(' '), /passar qualquer cartão/);
  for (const card of cards.sections[2].items) {
    const reference = card.match(/Em (.*?), /)[1];
    assert.ok(resolveBibleReference(reference).sections.length, reference);
  }
  assert.doesNotMatch(cards.sections.flatMap(section => section.items).join(' '), /perdão|conflito|sonho|orar|tarefa.*dividida/i);
});

test('Character clues do not conflate Jeoseba rooms or claim an undocumented rescue outcome', () => {
  const jeoseba = whoAmICharacters.find(character => character.id === 'jeoseba');
  assert.doesNotMatch(jeoseba.clues[1], /quarto do templo/);
  const rescue = whoAmICharacters.find(character => character.id === 'ebede-meleque');
  assert.match(rescue.clues[2], /panos sob os braços/);
  for (const character of whoAmICharacters) assert.ok(resolveBibleReference(character.reference).sections.length, character.id);
});

test('General quiz samples keep unique answers and readable passage references', () => {
  const samples = quizQuestions.filter(question => question.topics.includes('geral')).slice(0, 3);
  assert.deepEqual(samples.map(question => question.id), [2, 9, 11]);
  assert.deepEqual(samples.map(question => question.correctAnswer), ['Gênesis', 'Amar a Deus', 'Apocalipse']);
  for (const question of samples) {
    assert.equal(question.options.length, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    assert.ok(resolveBibleReference(question.reference)?.sections.length);
  }
});

test('Ad eligibility requires an exact known editorial route', () => {
  const paths = ['/', '/biblioteca/artigo-conhecido'];
  assert.equal(isAdEligiblePath('/', paths), true);
  assert.equal(isAdEligiblePath('/biblioteca/artigo-conhecido', paths), true);
  for (const path of [null, '/contato', '/politica-de-privacidade', '/termos-de-uso',
    '/monte-seu-encontro', '/quiz-biblico', '/materiais/roteiro-de-encontro',
    '/biblioteca/inexistente', '/biblioteca/artigo-conhecido/extra']) {
    assert.equal(isAdEligiblePath(path, paths), false, String(path));
  }
});

test('General quiz first journey preserves all rounds with readable references', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('geral') && (question.journey ?? 1) === 1);
  assert.deepEqual(questions.map(question => question.id), [2, 9, 11, 12, 19, 20, 21, 22, 23, 24, 25, 26, 43, 44]);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    assert.ok(resolveBibleReference(question.reference)?.sections.length, question.reference);
  }
  assert.match(questions.find(question => question.id === 43).question, /tradição protestante/);
  assert.match(questions.find(question => question.id === 12).question, /Romanos 1:1/);
  assert.match(questions.find(question => question.id === 12).explanation, /versículo 7.*destinatários/);
  assert.equal(questions.find(question => question.id === 12).correctAnswer, 'Paulo');
  assert.match(questions.find(question => question.id === 25).question, /objetivos na abertura/);
  assert.equal(questions.find(question => question.id === 25).correctAnswer, 'Provérbios');
});

test('General quiz FAQ answers specific organization questions without changing other topics', () => {
  const { getQuizTopicFaq } = loadTs('src/data/quizTopicEditorial.ts');
  const questions = quizQuestions.filter(question => question.topics.includes('geral'));
  const journeys = new Set(questions.map(question => question.journey ?? 1)).size;
  const faq = getQuizTopicFaq('Geral', questions.length, journeys, 'geral');
  assert.equal(faq.length, 3);
  assert.match(faq[0].answer, new RegExp(`${questions.length} perguntas em ${journeys} jornadas`));
  assert.match(faq[1].answer, /índice.*não prova sua posição/);
  assert.match(faq[2].answer, /Atos é um livro; Evangelhos é o conjunto/);
  assert.equal(getQuizTopicFaq('Antigo Testamento', 36, 3, 'antigo-testamento').length, 4);
});

test('Who am I journeys contain complete and unambiguous character rounds', () => {
  assert.equal(whoAmIJourneys.length, 2);
  for (const journey of whoAmIJourneys) {
    const characters = whoAmICharacters.filter(character => character.journey === journey.id);
    assert.equal(characters.length, 12);
    for (const character of characters) {
      assert.ok(character.clues.length >= 3 && character.clues.length <= 5);
      assert.equal(character.options.length, 4);
      assert.equal(character.options.filter(option => option === character.name).length, 1);
      assert.ok(character.explanation.length >= 50);
      assert.match(character.reference, /\d/);
    }
  }
});

test('Old Testament first journey retains unique answers and complete reference ranges', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('antigo-testamento') && (question.journey ?? 1) === 1);
  assert.deepEqual(questions.map(question => question.id), [1, 3, 4, 7, 8, 13, 14, 27, 28, 29, 45]);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length, question.reference);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.equal(questions.find(question => question.id === 27).reference, 'Êxodo 16:23-31');
  assert.match(questions.find(question => question.id === 14).question, /após ser vendido.*autoridade/);
  assert.equal(questions.find(question => question.id === 14).correctAnswer, 'José');
  assert.match(questions.find(question => question.id === 29).question, /seleção junto à água/);
  assert.equal(questions.find(question => question.id === 29).correctAnswer, '300');
  assert.match(questions.find(question => question.id === 45).question, /1 Reis 6:1.*quarto ano/);
  assert.equal(questions.find(question => question.id === 45).correctAnswer, 'Salomão');
});

test('Gospels first journey keeps its rounds and specifies ambiguous scenes', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('jesus-evangelhos') && (question.journey ?? 1) === 1);
  assert.deepEqual(questions.map(question => question.id), [5, 6, 10, 15, 16, 17, 18, 30, 31, 32, 46, 47, 48]);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    assert.ok(resolveBibleReference(question.reference).sections.every(section => section.verses.length > 0));
  }
  assert.match(questions.find(question => question.id === 6).question, /Marcos 3/);
  assert.match(questions.find(question => question.id === 18).question, /João 20:1-2/);
  assert.match(questions.find(question => question.id === 31).question, /Mateus 14:13-21/);
});

test('Characters first journey retains its answers and resolves every reference section', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('personagens') && (question.journey ?? 1) === 1);
  assert.deepEqual(questions.map(question => question.id), [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 49, 50]);
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Abraão', 'Noemi', 'Samuel', 'Salomão', 'Elias', 'Eliseu', 'Débora', 'Lídia', 'Barnabé', 'Zaqueu', 'José', 'Neemias']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
});

test('Women first journey preserves answers and fixes the Rahab instruction', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('mulheres-da-biblia') && (question.journey ?? 1) === 1);
  assert.deepEqual(questions.map(question => question.id), [99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]);
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Sara', 'Rebeca', 'Raquel', 'Lia', 'Miriã', 'Raabe', 'Débora', 'Campo de Boaz', 'Ana', 'Abigail', 'Mordecai', 'Hulda']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.match(questions.find(question => question.id === 104).question, /recebeu dos espias a orientação/);
  assert.match(questions.find(question => question.id === 103).reference, /Números 26:59/);
});

test('Parables first journey preserves answers and places forgiveness after the plea', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('parabolas-de-jesus') && (question.journey ?? 1) === 1);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 123 + index));
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    assert.ok(resolveBibleReference(question.reference).sections.every(section => section.verses.length > 0));
  }
  const servant = questions.find(question => question.id === 127);
  assert.match(servant.question, /após ouvir a súplica/);
  assert.equal(servant.correctAnswer, 'Perdoou a dívida');
});

test('Places first journey resolves location context and distinguishes David reigns', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('lugares-da-biblia') && (question.journey ?? 1) === 1);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 147 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Jerusalém', 'Belém', 'Nazaré', 'Jericó', 'Betânia', 'Cafarnaum', 'Samaria', 'Damasco', 'Éfeso', 'Corinto', 'Filipos', 'Antioquia']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.match(questions.find(question => question.id === 147).question, /todo Israel e Judá/);
  assert.match(questions.find(question => question.id === 157).question, /expulsar um espírito/);
});

test('Early church first journey retains answers and resolves all passage sections', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('igreja-primitiva') && (question.journey ?? 1) === 1);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 171 + index));
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.equal(questions.find(question => question.id === 179).reference, 'Atos 6:5; Atos 7:1-2; Atos 7:54-60');
  assert.match(questions.find(question => question.id === 177).explanation, /a acusação é a mentira/);
});

test('General quiz second journey keeps its answers and contextualizes book organization', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('geral') && question.journey === 2);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 51 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Êxodo', 'Salmos', 'Mateus', 'Atos', 'Profetas', 'Josué', '1 Coríntios', 'Malaquias', 'Rute', 'Neemias', 'Lucas', 'Apocalipse']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.match(questions.find(question => question.id === 57).question, /paciente e bondoso/);
  assert.equal(questions.find(question => question.id === 59).reference, 'Rute 1:4; Rute 1:14-18');
  assert.match(questions.find(question => question.id === 60).question, /cinquenta e dois dias/);
  assert.match(questions.find(question => question.id === 60).explanation, /Esdras 4 também menciona/);
  assert.match(questions.find(question => question.id === 60).reference, /Esdras 4:12-13/);
  assert.match(questions.find(question => question.id === 61).question, /dirigido a Teófilo/);
  assert.match(questions.find(question => question.id === 61).explanation, /não identificam o autor pelo nome/);
});

test('Old Testament second journey keeps its answers and resolves all references', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('antigo-testamento') && question.journey === 2);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 63 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Um arco-íris', 'Jacó', 'Moisés', 'Mar Vermelho', 'Raabe', 'Sansão', 'Saul', 'Elias', 'Ezequias', 'Sadraque, Mesaque e Abede-Nego', 'Ezequiel', 'Jonas']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.match(questions.find(question => question.id === 68).question, /rompeu as amarras.*Juízes 15:14/);
  assert.match(questions.find(question => question.id === 71).question, /quinze anos de vida em 2 Reis 20/);
  for (const id of [66, 72]) assert.match(questions.find(question => question.id === id).explanation, /versão exibida pelo site/);
  assert.doesNotMatch(questions.map(question => question.explanation).join(' '), /edição do leitor|tradução do leitor/);
});

test('Gospels second journey preserves answers and specifies the initial temptation location', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('jesus-evangelhos') && question.journey === 2);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 75 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['João Batista', 'No deserto', 'Cobrador de impostos', 'O filho pródigo', 'Pedro', 'Lázaro', 'Última ceia', 'Simão de Cirene', 'José de Arimateia', 'Emaús', 'Novo mandamento', 'Monte das Oliveiras']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.match(questions.find(question => question.id === 76).question, /no início/);
});

test('Characters second journey keeps answers and places Abigail before Nabal death', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('personagens') && question.journey === 2);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 87 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Sara', 'Arão', 'Josué', 'Rute', 'Davi', 'Abigail', 'Daniel', 'Ester', 'Gabriel', 'Isabel', 'Matias', 'Timóteo']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.match(questions.find(question => question.id === 92).question, /enquanto Nabal ainda vivia/);
});

test('Women second journey keeps answers and resolves the context of each scene', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('mulheres-da-biblia') && question.journey === 2);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 111 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Maria', 'Zacarias', 'Ana', 'Marta', 'Maria de Betânia', 'Maria Madalena', 'Uma mulher samaritana', 'Priscila', 'Filipos', 'Dorcas', 'Febe', 'Loide e Eunice']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.match(questions.find(question => question.id === 114).question, /Lucas 10:38-42/);
});

test('Parables second journey preserves answers and resolves every reference section', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('parabolas-de-jesus') && question.journey === 2);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 135 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['A palavra do Reino', 'Um inimigo', 'Grão de mostarda', 'Na farinha', 'Em um campo', 'Um negociante', 'Separam os peixes bons dos ruins', 'Azeite', 'Escondeu o talento na terra', 'Perto da última hora do dia', 'No velador', 'Quem ouve e pratica as palavras de Jesus']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
});

test('Places second journey keeps answers and fixes the return after ascension', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('lugares-da-biblia') && question.journey === 2);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 159 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Rio Jordão', 'Mar da Galileia', 'Monte Nebo', 'Montes de Ararate', 'Monte Moriá', 'Monte das Oliveiras', 'Deserto da Judeia', 'Querite', 'Um vale cheio de ossos', 'Vale de Escol', 'Rio Jordão', 'Éden']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.match(questions.find(question => question.id === 164).question, /após a ascensão/);
});

test('Church second journey preserves answers and names the action described for Ananias', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('igreja-primitiva') && question.journey === 2);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 183 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Ananias', 'Barnabé', 'Antioquia', 'Listra', 'Concílio de Jerusalém', 'Silas', 'Timóteo', 'Atenas', 'Áquila e Priscila', 'Éfeso', 'Malta', 'Roma']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.match(questions[0].question, /impôs as mãos/);
  assert.match(questions[11].explanation, /sob guarda/);
});

test('General third journey preserves answers and distinguishes similar passages', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('geral') && question.journey === 3);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 195 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Eclesiastes', 'Filemom', 'Esdras', 'Amós', 'Hebreus', 'Lamentações', 'Tiago', 'Efésios', 'Ezequiel', 'Gálatas', 'Hebreus', '1 Crônicas']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.match(questions.find(question => question.id === 197).question, /sétimo ano de Artaxerxes/);
  assert.match(questions.find(question => question.id === 199).question, /viva, eficaz/);
  assert.match(questions.find(question => question.id === 196).question, /pedido de Paulo/);
  assert.match(questions.find(question => question.id === 196).explanation, /versão exibida pelo site/);
  assert.equal(questions.find(question => question.id === 200).reference, 'Lamentações 1:1-8; Lamentações 3:21-24');
  assert.match(questions.find(question => question.id === 203).explanation, /versão exibida pelo site/);
  assert.match(questions.find(question => question.id === 205).question, /capítulo 4.*grande sumo sacerdote/);
  assert.doesNotMatch(questions.map(question => question.explanation).join(' '), /tradução do leitor|edição do leitor/);
});

test('Old Testament third journey preserves answers and clarifies Jacob and Job', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('antigo-testamento') && question.journey === 3);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 207 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Babel', 'Ló', 'Rebeca', 'Doze', 'Balaão', 'Josué', 'Eúde', 'Uma porção de lã', 'Jônatas', 'Eliseu', 'Jó', 'Belsazar']);
  assert.match(questions.find(question => question.id === 215).reference, /^1 Samuel 14:1;/);
  assert.match(questions.find(question => question.id === 215).explanation, /entrega dos objetos é uma ação narrada/);
  assert.match(questions.find(question => question.id === 215).explanation, /não o relato de que a partida já aconteceu/);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.match(questions.find(question => question.id === 210).question, /filhos homens/);
  assert.match(questions.find(question => question.id === 217).explanation, /não diz que os filhos/);
});

test('Gospels third journey preserves answers and distinguishes instruction from narrated action', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('jesus-evangelhos') && question.journey === 3);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 219 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['No templo', 'João Batista', 'Jairo', 'Pelo telhado', 'Pedro, Tiago e João', 'Na boca de um peixe', 'Dez', 'Bartimeu', 'O servo do sumo sacerdote', 'Rei dos Judeus', 'Cento e cinquenta e três', 'Jerusalém']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  const coin = questions.find(question => question.id === 224);
  assert.match(coin.question, /orientação de Jesus/);
  assert.match(coin.explanation, /não descreve Pedro pescando/);
  assert.match(questions.find(question => question.id === 227).question, /Segundo Lucas 22/);
});

test('Characters third journey preserves answers and resolves every source section', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('personagens') && question.journey === 3);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 231 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Melquisedeque', 'Jetro', 'Bezalel', 'Calebe', 'Acã', 'Boaz', 'Natã', 'Naamã', 'Esdras', 'Mordecai', 'Simeão', 'Êutico']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.match(questions.find(question => question.id === 232).reference, /18:1-5/);
  assert.match(questions.find(question => question.id === 233).explanation, /Aoliabe/);
  assert.match(questions.find(question => question.id === 236).explanation, /Boaz é seu bisavô/);
  assert.match(resolveBibleReference(questions.find(question => question.id === 242).reference).sections[0].verses[0].text, /Trôade/);
});

test('Women third journey preserves answers and follows names in the cited passages', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('mulheres-da-biblia') && question.journey === 3);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 243 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Joquebede', 'Zípora', 'As filhas de Zelofeade', 'Jael', 'Dalila', 'Noemi', 'Bate-Seba', 'Uma viúva de Sarepta', 'A mulher sunamita', 'Rainha de Sabá', 'Joana', 'Rode']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.match(questions.find(question => question.id === 244).question, /Reuel nesse trecho/);
  assert.match(questions.find(question => question.id === 243).reference, /Números 26:59/);
  assert.match(questions.find(question => question.id === 246).question, /ofereceu leite/);
});

test('Parables third journey preserves answers and anchors royal authority to the return', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('parabolas-de-jesus') && question.journey === 3);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 255 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Expulsaram-no e o mataram', 'Que esperasse mais um ano', 'Três', 'De uma festa de casamento', 'Distribuir alimento no tempo certo', 'O último lugar', 'Havia acabado de se casar', 'Calcular o custo', 'Reduziu os valores registrados', 'Autoridade real', 'Dorme e se levanta', 'Em odres novos']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  const noble = questions.find(question => question.id === 264);
  assert.match(noble.question, /quando voltou/);
  assert.match(resolveBibleReference(noble.reference).sections[0].verses.at(-1).text, /tomado o reino/);
  assert.doesNotMatch(questions.find(question => question.id === 266).explanation, /romperaria/);
});

test('Places third journey preserves answers and distinguishes departure and meeting locations', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('lugares-da-biblia') && question.journey === 3);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 267 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Ur dos caldeus', 'Harã', 'Betel', 'Peniel', 'Vale de Elá', 'Susã', 'Cesareia de Filipe', 'Gólgota', 'Patmos', 'Tarso', 'Bereia', 'Mileto']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.match(questions.find(question => question.id === 268).question, /Segundo Gênesis 12:4-5/);
  assert.match(questions.find(question => question.id === 271).question, /1 Samuel 17:1-3/);
  assert.match(questions.find(question => question.id === 278).explanation, /Mileto é o lugar da reunião/);
});

test('Church third journey preserves answers and distinguishes similar episodes', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('igreja-primitiva') && question.journey === 3);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 279 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Eles falavam em diferentes línguas', 'Três mil', 'Obedecer a Deus', 'Um anjo do Senhor', 'Simão, o mágico', 'Dentro de um cesto', 'Pedro', 'Centurião', 'Ágabo', 'Tiago', 'Elimas', 'O sobrinho de Paulo']);
  for (const question of questions) {
    assert.equal(new Set(question.options).size, 4);
    assert.equal(question.options.filter(option => option === question.correctAnswer).length, 1);
    const passage = resolveBibleReference(question.reference);
    assert.equal(passage.sections.length, question.reference.split(';').length);
    assert.ok(passage.sections.every(section => section.verses.length > 0));
  }
  assert.match(questions.find(question => question.id === 282).question, /Atos 5:19/);
  assert.match(questions.find(question => question.id === 287).question, /Cláudio César/);
  assert.match(questions.find(question => question.id === 289).explanation, /não descreve sua recuperação/);
});

test('Old Testament introduction provides distinct examples with complete sources', () => {
  const { getQuizTopic } = loadTs('src/data/quizTopics.ts');
  const { getQuizTopicContext } = loadTs('src/data/quizTopicContext.ts');
  const topic = getQuizTopic('antigo-testamento');
  const context = getQuizTopicContext(topic.id);
  assert.equal(topic.path, '/quiz-biblico/antigo-testamento');
  assert.equal(quizQuestions.filter(question => question.topics.includes(topic.id)).length, 35);
  assert.equal(context.sections.length, 3);
  assert.match(topic.introduction.join(' '), /Moisés e Josué/);
  assert.match(context.sections[1].description, /sacerdotes que levam a arca/);
  assert.match(context.sections[2].description, /não executa sozinho/);
  assert.match(context.closingNote, /pessoa, lugar e ação/);
  for (const section of context.sections) {
    for (const reference of section.references) {
      const passage = resolveBibleReference(reference);
      assert.equal(passage.sections.length, reference.split(';').length);
      assert.ok(passage.sections.every(part => part.verses.length > 0));
    }
  }
});

test('Gospels introduction distinguishes instructions and stages with complete sources', () => {
  const { getQuizTopic } = loadTs('src/data/quizTopics.ts');
  const { getQuizTopicContext } = loadTs('src/data/quizTopicContext.ts');
  const topic = getQuizTopic('jesus-evangelhos');
  const context = getQuizTopicContext(topic.id);
  assert.equal(topic.path, '/quiz-biblico/jesus-e-evangelhos');
  assert.equal(quizQuestions.filter(question => question.topics.includes(topic.id)).length, 37);
  assert.equal(context.sections.length, 3);
  assert.match(context.sections[1].description, /sem narrar a pesca ou o pagamento/);
  assert.match(context.sections[2].description, /momentos diferentes/);
  for (const reference of ['Marcos 5:22-24', 'Marcos 5:35-43', ...context.sections.flatMap(section => section.references)]) {
    const passage = resolveBibleReference(reference);
    assert.equal(passage.sections.length, reference.split(';').length);
    assert.ok(passage.sections.every(part => part.verses.length > 0));
  }
});

test('Characters introduction distinguishes names, ancestry and roles with complete sources', () => {
  const { getQuizTopic } = loadTs('src/data/quizTopics.ts');
  const { getQuizTopicContext } = loadTs('src/data/quizTopicContext.ts');
  const topic = getQuizTopic('personagens');
  const context = getQuizTopicContext(topic.id);
  assert.equal(topic.path, '/quiz-biblico/personagens-biblicos');
  assert.equal(quizQuestions.filter(question => question.topics.includes(topic.id)).length, 36);
  assert.equal(context.sections.length, 3);
  assert.match(context.sections[0].description, /Tabita se traduz Dorcas/);
  assert.match(context.sections[1].description, /Boaz como bisavô/);
  assert.match(context.sections[2].description, /Esdras/);
  for (const reference of context.sections.flatMap(section => section.references)) {
    const passage = resolveBibleReference(reference);
    assert.equal(passage.sections.length, reference.split(';').length);
    assert.ok(passage.sections.every(part => part.verses.length > 0));
  }
});

test('Meeting builder creates 64 complete, time-safe and audience-safe plans', () => {
  for (const audience of meeting.meetingAudiences) {
    for (const goal of meeting.meetingGoals) {
      for (const duration of meeting.meetingDurations) {
        const plan = meeting.buildMeetingPlan(cellDynamics, audience.id, goal.id, duration);
        assert.ok(plan, `${audience.id}/${goal.id}/${duration}`);
        assert.equal(plan.timeline.length, 6);
        assert.equal(meeting.meetingPlanTotal(plan.timeline), duration);
        assert.ok(plan.timeline.every(step => step.minutes > 0 && step.instruction.length >= 40));
        assert.equal(
          plan.dynamic.audience,
          audience.id === 'jovens' ? 'jovens' : audience.id === 'casais' ? 'casais' : 'todos',
        );
        assert.ok(plan.materials.length >= 3);
        assert.ok(plan.leaderNote.length >= 20);

        const shared = meeting.formatMeetingPlanForSharing(plan, duration);
        for (const step of plan.timeline) {
          assert.match(shared, new RegExp(`${step.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} \\(${step.minutes} min\\)`));
        }
        assert.match(shared, /Materiais:/);
        assert.match(shared, /Referências:/);
        assert.match(shared, /Cuidado para quem conduz:/);
      }
    }
  }
});

test('Meeting builder adapts short and long dynamics instead of promising the full source duration', () => {
  const short = meeting.buildMeetingPlan(cellDynamics, 'celulas', 'aprender', 30);
  const long = meeting.buildMeetingPlan(cellDynamics, 'celulas', 'aprender', 90);
  assert.match(short.timeline[1].instruction, /não o roteiro integral/);
  assert.match(long.timeline[1].instruction, /não o roteiro integral/);
  assert.notEqual(short.timeline[1].instruction, long.timeline[1].instruction);
  for (const dynamic of cellDynamics) {
    assert.ok(dynamic.meetingCore?.length > 100, dynamic.id);
    assert.doesNotMatch(dynamic.meetingCore, /Reserve \d|etapas somam|versão de|cronograma integral/i);
  }
  for (const audience of ['celulas', 'familias', 'jovens', 'casais']) {
    for (const duration of [30, 45, 60, 90]) {
      for (const goal of ['integrar', 'aprender', 'conversar', 'celebrar']) {
        for (let variant = 0; variant < cellDynamics.length; variant++) {
          const plan = meeting.buildMeetingPlan(cellDynamics, audience, goal, duration, variant);
          const step = plan.timeline[1];
          assert.ok(step.instruction.includes(plan.dynamic.meetingCore));
          assert.ok(step.instruction.includes(`total ${step.minutes} min`));
          const parts = [...step.instruction.matchAll(/Reserve (\d+) min|(?:, | e )(\d+) min para/g)].map(match => Number(match[1] ?? match[2]));
          assert.equal(parts.reduce((sum, value) => sum + value, 0), step.minutes);
          assert.doesNotMatch(step.instruction, /quatro etapas somam|versão de 30 minutos/);
        }
      }
    }
  }
  for (let variant = -15; variant <= 15; variant += 1) {
    assert.ok(meeting.buildMeetingPlan(cellDynamics, 'jovens', 'conversar', 45, variant));
  }
});

test('Bible reference cannot stall the process with unsafe integers', () => {
  const child = spawnSync(process.execPath, ['--input-type=module', '-e', `
    import { loadTs } from './scripts/audit-loader.mjs';
    const { resolveBibleReference } = loadTs('src/lib/bibleReference.ts');
    const result = resolveBibleReference('Genesis 999999999999999999999999999');
    if (result.sections.length) process.exit(1);
  `], { timeout: 3000 });
  assert.equal(child.error, undefined);
  assert.equal(child.status, 0);
});
test('Bible reference resolves ranges and rejects invalid chapter/verse numbers', () => {
  assert.equal(resolveBibleReference('João 3:16-18').sections[0].verses.length, 3);
  assert.equal(resolveBibleReference('Gênesis 1:1; 2:1').sections.length, 2);
  for (const reference of ['João 0', 'João 500', 'João 3:0', 'João 3:18-16', 'João 3-2']) {
    assert.equal(resolveBibleReference(reference).sections.length, 0, reference);
  }
});
test('Bible reading limit includes whole-book previews', () => {
  const result = resolveBibleReference('Gênesis; Êxodo; Levítico; Números');
  assert.ok(result.sections.flatMap(section => section.verses).length <= 80);
});

const progress = loadTs('src/lib/quizProgress.ts');

const analytics = loadTs('src/lib/googleAnalytics.ts');
const consentKey = 'biblia-clube:analytics-consent:v1';
const disableKey = `ga-disable-${analytics.GA_MEASUREMENT_ID}`;

function analyticsBrowser(t, hostname = 'www.bibliaclube.com.br') {
  const values = new Map();
  const blocked = new Set();
  const calls = [];
  const browser = Object.assign(new EventTarget(), {
    location: { hostname },
    gtag: (...args) => calls.push(args),
    localStorage: {
      getItem(key) { if (blocked.has('get')) throw new Error('SecurityError'); return values.get(key) ?? null; },
      setItem(key, value) { if (blocked.has('set')) throw new Error('QuotaExceededError'); values.set(key, value); },
      removeItem(key) { if (blocked.has('remove')) throw new Error('SecurityError'); values.delete(key); },
    },
  });
  globalThis.window = browser;
  t.after(() => { blocked.clear(); analytics.resetAnalyticsConsent(); delete globalThis.window; });
  return { browser, values, blocked, calls };
}

test('Analytics cannot initialize without consent or outside the allowed host', t => {
  const { browser, calls } = analyticsBrowser(t, 'localhost');
  assert.equal(analytics.initializeGoogleAnalytics(), false);
  analytics.saveAnalyticsConsent('granted');
  assert.equal(analytics.initializeGoogleAnalytics(), false);
  analytics.trackGoogleAnalyticsEvent('test');
  assert.equal(browser[disableKey], true);
  assert.equal(calls.some(call => call[0] === 'config' || call[0] === 'event'), false);
});

test('Analytics queues the first consented game event before the tag loader mounts', t => {
  const { calls } = analyticsBrowser(t);
  analytics.saveAnalyticsConsent('granted');
  analytics.trackGoogleAnalyticsEvent('game_view', { game: 'quem-sou-eu' });
  assert.equal(calls.filter(call => call[0] === 'config').length, 1);
  assert.equal(calls.filter(call => call[0] === 'event' && call[1] === 'game_view' && call[2].game === 'quem-sou-eu').length, 1);
});

test('Analytics reset revokes synchronously and requires a new explicit grant', t => {
  const { browser, calls } = analyticsBrowser(t);
  assert.equal(analytics.initializeGoogleAnalytics(), false);
  analytics.saveAnalyticsConsent('granted');
  assert.equal(analytics.initializeGoogleAnalytics(), true);
  analytics.trackGoogleAnalyticsEvent('before_reset');
  const states = [];
  const unsubscribe = analytics.subscribeToAnalyticsConsent(() => states.push([analytics.readAnalyticsConsent(), browser[disableKey]]));
  analytics.resetAnalyticsConsent();
  assert.deepEqual(states.at(-1), [null, true]);
  assert.equal(analytics.initializeGoogleAnalytics(), false);
  analytics.trackGoogleAnalyticsEvent('after_reset');
  assert.equal(calls.some(call => call[0] === 'event' && call[1] === 'after_reset'), false);
  analytics.saveAnalyticsConsent('denied');
  assert.equal(analytics.initializeGoogleAnalytics(), false);
  analytics.saveAnalyticsConsent('granted');
  assert.equal(analytics.initializeGoogleAnalytics(), true);
  assert.equal(browser[disableKey], false);
  assert.equal(calls.filter(call => call[0] === 'config').length, 1);
  unsubscribe();
});

test('Analytics keeps the current choice when browser storage fails', t => {
  const { browser, values, blocked } = analyticsBrowser(t);
  analytics.saveAnalyticsConsent('granted');
  analytics.initializeGoogleAnalytics();
  blocked.add('remove');
  analytics.resetAnalyticsConsent();
  assert.equal(values.get(consentKey), 'granted');
  assert.equal(analytics.readAnalyticsConsent(), null);
  assert.equal(browser[disableKey], true);
  assert.equal(analytics.initializeGoogleAnalytics(), false);
  blocked.add('set');
  analytics.saveAnalyticsConsent('denied');
  assert.equal(analytics.readAnalyticsConsent(), 'denied');
  assert.equal(analytics.initializeGoogleAnalytics(), false);
  analytics.saveAnalyticsConsent('granted');
  assert.equal(analytics.readAnalyticsConsent(), 'granted');
  assert.equal(analytics.initializeGoogleAnalytics(), true);
});

test('Analytics handles cross-tab denial, removal and storage.clear()', t => {
  const { browser, values } = analyticsBrowser(t);
  let updates = 0;
  const unsubscribe = analytics.subscribeToAnalyticsConsent(() => { updates += 1; });
  for (const key of [consentKey, null]) {
    analytics.saveAnalyticsConsent('granted');
    analytics.initializeGoogleAnalytics();
    values.clear();
    browser.dispatchEvent(Object.assign(new Event('storage'), { key }));
    assert.equal(browser[disableKey], true);
    assert.equal(analytics.readAnalyticsConsent(), null);
  }
  analytics.saveAnalyticsConsent('granted');
  analytics.initializeGoogleAnalytics();
  values.set(consentKey, 'denied');
  browser.dispatchEvent(Object.assign(new Event('storage'), { key: consentKey }));
  assert.equal(browser[disableKey], true);
  assert.equal(analytics.readAnalyticsConsent(), 'denied');
  unsubscribe();
  const before = updates;
  browser.dispatchEvent(Object.assign(new Event('storage'), { key: consentKey }));
  assert.equal(updates, before);
});
test('Blocked browser storage is non-fatal', () => {
  globalThis.window = { get localStorage() { throw new Error('SecurityError'); } };
  assert.equal(progress.readQuizProgress(), null);
  assert.deepEqual(progress.readQuizHistory(), {});
  assert.doesNotThrow(() => progress.clearQuizProgress());
  delete globalThis.window;
});
test('Saved progress rejects unsafe routes and impossible state', () => {
  let value;
  globalThis.window = { localStorage: { getItem: () => value, removeItem: () => { value = null; } }, dispatchEvent: () => {} };
  const valid = { version: 1, topic: 'geral', topicLabel: 'Geral', topicPath: '/quiz-biblico', journey: 1, currentIndex: 0, selectedAnswer: null, score: 0, total: 10, updatedAt: Date.now() };
  value = JSON.stringify(valid);
  assert.ok(progress.readQuizProgress());
  for (const change of [{ topicPath: 'javascript:alert(1)' }, { journey: 20 }, { currentIndex: -1 }, { total: 0 }, { score: 99 }, { topic: '__proto__' }, { updatedAt: Date.now() + 86400000 }]) {
    value = JSON.stringify({ ...valid, ...change });
    assert.equal(progress.readQuizProgress(), null, JSON.stringify(change));
  }
  value = JSON.stringify({ version: 1, completed: { 'geral:1': { topic: 'geral', journey: 1, score: -1, total: 10, completedAt: Date.now() } } });
  assert.deepEqual(progress.readQuizHistory(), {});
  delete globalThis.window;
});
