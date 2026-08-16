import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const errors = [];
const warnings = [];

function normalize(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const similarityStopWords = new Set(
  "a o as os de da do das dos e em no na nos nas um uma que qual quem como onde para por foi era eram ficou tinha teve seu sua seus suas com ao aos entre sobre segundo depois durante livro biblia biblico biblica nome chamou chamado aconteceu respondeu".split(
    " ",
  ),
);

function meaningfulTokens(value) {
  return new Set(
    normalize(value)
      .split(" ")
      .filter((token) => token.length > 2 && !similarityStopWords.has(token)),
  );
}

function jaccardSimilarity(first, second) {
  const left = meaningfulTokens(first);
  const right = meaningfulTokens(second);
  const intersection = [...left].filter((token) => right.has(token)).length;
  const union = new Set([...left, ...right]).size;
  return union ? intersection / union : 0;
}

function evaluate(node) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (ts.isArrayLiteralExpression(node)) {
    return node.elements
      .filter((element) => !ts.isSpreadElement(element))
      .map(evaluate);
  }
  if (ts.isObjectLiteralExpression(node)) {
    return Object.fromEntries(
      node.properties
        .filter(ts.isPropertyAssignment)
        .map((property) => [property.name.getText().replace(/["']/g, ""), evaluate(property.initializer)]),
    );
  }
  throw new Error(`Expressão não suportada no validador: ${node.getText()}`);
}

function loadArray(relativePath, variableName) {
  const filename = path.join(root, relativePath);
  const source = ts.createSourceFile(
    filename,
    fs.readFileSync(filename, "utf8"),
    ts.ScriptTarget.Latest,
    true,
  );
  let initializer;
  source.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (declaration.name.getText() === variableName) initializer = declaration.initializer;
    }
  });
  if (!initializer || !ts.isArrayLiteralExpression(initializer)) {
    throw new Error(`${variableName} não encontrado em ${relativePath}`);
  }
  return evaluate(initializer);
}

function assertUnique(items, key, label) {
  const seen = new Map();
  for (const item of items) {
    const value = normalize(String(key(item)));
    if (seen.has(value)) {
      errors.push(`${label} repetido: ${key(item)}`);
    } else {
      seen.set(value, item);
    }
  }
}

const quizQuestions = [
  ...loadArray("src/data/quizQuestions.ts", "quizQuestions"),
  ...loadArray("src/data/quizQuestionExpansions.ts", "quizQuestionExpansions"),
  ...loadArray("src/data/quizQuestionJourneyThree.ts", "quizQuestionJourneyThree"),
];

assertUnique(quizQuestions, (item) => item.id, "ID de pergunta");
assertUnique(quizQuestions, (item) => item.question, "Pergunta textual");

for (const question of quizQuestions) {
  if (question.options.length !== 4) {
    errors.push(`Pergunta ${question.id} não possui quatro alternativas.`);
  }
  if (new Set(question.options.map(normalize)).size !== question.options.length) {
    errors.push(`Pergunta ${question.id} possui alternativas repetidas.`);
  }
  if (question.options.filter((option) => option === question.correctAnswer).length !== 1) {
    errors.push(`Pergunta ${question.id} não possui exatamente uma resposta correta.`);
  }
  if (!question.explanation || !question.reference) {
    errors.push(`Pergunta ${question.id} não possui explicação ou referência.`);
  }
}

const newQuestions = quizQuestions.filter((question) => question.journey === 3);
if (process.argv.includes("--report")) {
  for (const question of quizQuestions) {
    console.log(
      [
        question.id,
        question.topics.join(","),
        question.journey ?? 1,
        question.question,
        question.correctAnswer,
        question.reference,
      ].join("\t"),
    );
  }
}
for (let index = 0; index < newQuestions.length; index += 1) {
  const current = newQuestions[index];
  for (const candidate of quizQuestions) {
    if (candidate.id === current.id) continue;
    const sameAnswer = normalize(candidate.correctAnswer) === normalize(current.correctAnswer);
    const sameReference = normalize(candidate.reference) === normalize(current.reference);
    if (sameAnswer && sameReference) {
      errors.push(
        `Possível fato repetido entre as perguntas ${current.id} e ${candidate.id}: mesma resposta e referência.`,
      );
    }

    const sharesTopic = current.topics.some((topic) => candidate.topics.includes(topic));
    const similarity = jaccardSimilarity(
      `${current.question} ${current.correctAnswer}`,
      `${candidate.question} ${candidate.correctAnswer}`,
    );
    if (sharesTopic && similarity >= 0.72) {
      errors.push(
        `Perguntas possivelmente repetidas por similaridade (${similarity.toFixed(2)}): ${current.id} e ${candidate.id}.`,
      );
    } else if (sharesTopic && similarity >= 0.58 && current.id < candidate.id) {
      warnings.push(
        `Revisar similaridade (${similarity.toFixed(2)}) entre as perguntas ${current.id} e ${candidate.id}.`,
      );
    }
  }
}

const topicIds = [
  "geral",
  "antigo-testamento",
  "jesus-evangelhos",
  "personagens",
  "mulheres-da-biblia",
  "parabolas-de-jesus",
  "lugares-da-biblia",
  "igreja-primitiva",
];
for (const topic of topicIds) {
  const count = newQuestions.filter((question) => question.topics.includes(topic)).length;
  if (count !== 12) errors.push(`A terceira jornada de ${topic} possui ${count} perguntas; esperado: 12.`);
}

const answerDistribution = [0, 1, 2, 3].map(
  (position) => newQuestions.filter((question) => question.options[position] === question.correctAnswer).length,
);
if (Math.max(...answerDistribution) - Math.min(...answerDistribution) > 2) {
  warnings.push(`Distribuição das respostas A-D desequilibrada: ${answerDistribution.join(", ")}.`);
}

const memoryModes = loadArray("src/data/memoryGamePairs.ts", "memoryGameModes");
const memoryPairs = memoryModes.flatMap((mode) => mode.pairs);
assertUnique(memoryPairs, (item) => item.id, "ID de par da memória");
assertUnique(memoryPairs, (item) => `${item.first}|${item.second}`, "Par da memória");
for (const mode of memoryModes) {
  assertUnique(mode.pairs, (item) => item.first, `Primeira carta do modo ${mode.id}`);
  assertUnique(mode.pairs, (item) => item.second, `Segunda carta do modo ${mode.id}`);
}

const matchingThemes = loadArray("src/data/matchingPairs.ts", "matchingThemes");
assertUnique(matchingThemes, (item) => item.id, "ID de tema de pares");
assertUnique(matchingThemes.flatMap((theme) => theme.pairs), (item) => item.id, "ID de ligação");

const phrases = loadArray("src/data/completePhraseQuestions.ts", "completePhraseQuestions");
assertUnique(phrases, (item) => item.id, "ID de frase");
assertUnique(phrases, (item) => item.prompt, "Enunciado de frase");
for (const phrase of phrases) {
  if (phrase.options.length !== 4 || phrase.options.filter((item) => item === phrase.answer).length !== 1) {
    errors.push(`Frase ${phrase.id} possui alternativas inválidas.`);
  }
}

const dynamics = loadArray("src/data/cellDynamics.ts", "cellDynamics");
assertUnique(dynamics, (item) => item.id, "ID de dinâmica");
assertUnique(dynamics, (item) => item.title, "Título de dinâmica");

console.log(`Quiz: ${quizQuestions.length} perguntas (${newQuestions.length} na jornada 3).`);
console.log(`Respostas A-D na jornada 3: ${answerDistribution.join(" / ")}.`);
console.log(`Memória: ${memoryPairs.length} pares em ${memoryModes.length} modos.`);
console.log(`Ligue os Pares: ${matchingThemes.length} temas.`);
console.log(`Complete a Frase: ${phrases.length} frases.`);
console.log(`Dinâmicas: ${dynamics.length} roteiros.`);

for (const warning of warnings) console.warn(`AVISO: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`ERRO: ${error}`);
  process.exit(1);
}
console.log("Conteúdo validado sem duplicidades estruturais.");
