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
  assert.match(questions.find(question => question.id === 61).question, /atribuição tradicional/);
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
});

test('Old Testament third journey preserves answers and clarifies Jacob and Job', () => {
  const questions = quizQuestions.filter(question => question.topics.includes('antigo-testamento') && question.journey === 3);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 12 }, (_, index) => 207 + index));
  assert.deepEqual(questions.map(question => question.correctAnswer), ['Babel', 'Ló', 'Rebeca', 'Doze', 'Balaão', 'Josué', 'Eúde', 'Uma porção de lã', 'Jônatas', 'Eliseu', 'Jó', 'Belsazar']);
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
