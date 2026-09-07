import fs from 'node:fs';
import path from 'node:path';
import { gzipSync } from 'node:zlib';
import { createRequire } from 'node:module';
import { loadTs } from './audit-loader.mjs';
const require = createRequire(import.meta.url);
const sharp = require('sharp');
const { resolveBibleReference } = loadTs('src/lib/bibleReference.ts');
const { editorialArticles } = loadTs('src/data/editorialContent.ts');
const { quizQuestions } = loadTs('src/data/quizQuestions.ts');
const { quizTopics } = loadTs('src/data/quizTopics.ts');
const { libraryItems } = loadTs('src/data/libraryItems.ts');
const { printableResources } = loadTs('src/data/printableResources.ts');
const { cellDynamics } = loadTs('src/data/cellDynamics.ts');
const { matchingThemes } = loadTs('src/data/matchingPairs.ts');
const { completePhraseQuestions } = loadTs('src/data/completePhraseQuestions.ts');
const strings = value => typeof value === 'string' ? [value] : value && typeof value === 'object' ? Object.values(value).flatMap(strings) : [];
const references = [
  ...quizQuestions.map(q => ({ owner: `quiz:${q.id}`, reference: q.reference })),
  ...matchingThemes.flatMap(t => t.pairs.map(q => ({ owner: `matching:${q.id}`, reference: q.reference }))),
  ...completePhraseQuestions.map(q => ({ owner: `phrase:${q.id}`, reference: q.reference })),
  ...cellDynamics.flatMap(d => d.references.map(reference => ({ owner: d.id, reference }))),
  ...editorialArticles.flatMap(a => a.sections.filter(s => s.reference).map(s => ({ owner: a.slug, reference: s.reference }))),
];
const unresolved = references.map(r => ({ ...r, result: resolveBibleReference(r.reference) })).filter(r => !r.result.sections.length);
const repeated = new Map();
for (const article of editorialArticles) for (const text of strings([article.introduction, article.sections]).filter(s => s.length > 100)) {
  repeated.set(text, [...(repeated.get(text) || []), article.slug]);
}
const walk = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);
const images = [];
for (const file of walk('public').filter(file => /\.(png|jpe?g|webp|avif)$/i.test(file))) {
  const metadata = await sharp(file).metadata();
  images.push({ file, bytes: fs.statSync(file).size, width: metadata.width, height: metadata.height });
}
const report = {
  articles: editorialArticles.map(a => ({ slug: a.slug, title: a.title, words: strings([a.introduction, a.sections]).join(' ').split(/\s+/).length, sections: a.sections.map(s => s.heading), related: a.relatedPaths, readTime: a.readTime })),
  questions: quizQuestions.length, topics: quizTopics.map(t => ({ path: t.path, journeys: [1, 2, 3].map(j => quizQuestions.filter(q => q.topics.includes(t.id) && (q.journey || 1) === j).length) })),
  libraryCount: libraryItems.length, libraryAudiences: [...new Set(libraryItems.map(i => i.audience))],
  referencesChecked: references.length, unresolved,
  repeatedParagraphs: [...repeated].filter(([, slugs]) => new Set(slugs).size > 1),
  printables: printableResources.map(p => ({ slug: p.slug, pages: p.pages })),
  images: images.sort((a, b) => b.bytes - a.bytes),
  bundles: walk('.next/static').filter(f => /\.(js|css)$/.test(f)).map(file => { const data = fs.readFileSync(file); return { file, bytes: data.length, gzip: gzipSync(data).length }; }).sort((a, b) => b.gzip - a.gzip),
};
fs.mkdirSync('.test-artifacts/audit', { recursive: true });
fs.writeFileSync('.test-artifacts/audit/content.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify({ ...report, images: report.images.slice(0, 8), bundles: report.bundles.slice(0, 6) }, null, 2));
