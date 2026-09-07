import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const origin = process.env.AUDIT_ORIGIN || "http://127.0.0.1:3100";
if (!['127.0.0.1', 'localhost'].includes(new URL(origin).hostname)) throw new Error('Local audit only');
const output = path.resolve('.test-artifacts/audit');
fs.mkdirSync(output, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true });
const report = { routes: [], responsive: [], errors: [], brokenLinks: [], blockedHosts: [] };
try {
  const context = await browser.newContext({ javaScriptEnabled: false });
  await context.route('**/*', route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
  const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
  const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
  const page = await context.newPage();
  for (const route of paths) {
    const response = await page.goto(origin + route);
    const data = await page.evaluate(() => {
      const main = document.querySelector('main') || document.body;
      const meta = key => document.querySelector(`meta[name="${key}"],meta[property="${key}"]`)?.content;
      return {
        title: document.title, description: meta('description'), canonical: document.querySelector('link[rel="canonical"]')?.href,
        ogUrl: meta('og:url'), ogTitle: meta('og:title'), twitterTitle: meta('twitter:title'), robots: meta('robots'),
        words: main.innerText.split(/\s+/).filter(Boolean).length, text: main.innerText,
        headings: [...main.querySelectorAll('h1,h2,h3,h4')].map(el => ({ level: el.tagName, text: el.textContent })),
        links: [...document.querySelectorAll('a[href]')].map(el => el.getAttribute('href')),
        ids: [...document.querySelectorAll('[id]')].map(el => el.id),
        images: [...main.querySelectorAll('img')].map(el => ({ src: el.getAttribute('src'), alt: el.getAttribute('alt'), width: el.width, height: el.height })),
      };
    });
    report.routes.push({ route, status: response.status(), ...data });
  }
  const known = new Map(report.routes.map(item => [item.route, item]));
  for (const item of report.routes) for (const href of item.links) {
    const url = new URL(href, origin + item.route);
    if (url.origin !== origin && url.hostname !== 'www.bibliaclube.com.br') continue;
    const dest = known.get(url.pathname);
    if (dest && url.hash && !dest.ids.includes(decodeURIComponent(url.hash.slice(1)))) report.brokenLinks.push({ from: item.route, href, reason: 'missing anchor' });
    if (!dest && !url.pathname.startsWith('/_next')) {
      const response = await fetch(origin + url.pathname, { method: 'HEAD' });
      if (!response.ok) report.brokenLinks.push({ from: item.route, href, status: response.status });
    }
  }
  await context.close();
  const live = await browser.newContext({ reducedMotion: 'reduce' });
  const blocked = new Set();
  await live.route('**/*', route => {
    const url = new URL(route.request().url());
    if (url.origin === origin) return route.continue();
    blocked.add(url.hostname);
    return route.abort();
  });
  const rendered = await live.newPage();
  rendered.on('pageerror', error => report.errors.push({ url: rendered.url(), error: error.message }));
  const templates = ['/', '/quiz-biblico', '/biblioteca', '/biblioteca/roteiro-completo-de-celula-em-60-minutos', '/guias', '/materiais', '/monte-seu-encontro', '/modo-grupo', '/jogo-da-memoria-biblico', '/ligue-os-pares', '/complete-a-frase', '/quem-sou-eu', '/dinamicas-para-celulas', '/sobre', '/contato'];
  for (const width of [320, 375, 768, 1024, 1280, 1440]) {
    await rendered.setViewportSize({ width, height: 900 });
    for (const route of (width === 320 ? paths : templates)) {
      await rendered.goto(origin + route, { waitUntil: 'networkidle' });
      const result = await rendered.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        offenders: [...document.querySelectorAll('main *')].filter(el => { const r = el.getBoundingClientRect(); return r.width && (r.right > innerWidth + 1 || r.left < -1); }).slice(0, 8).map(el => ({ tag: el.tagName, text: el.textContent.slice(0, 80), class: el.className })),
        brokenImages: [...document.images].filter(el => el.complete && el.naturalWidth === 0).map(el => el.src),
      }));
      report.responsive.push({ route, width, ...result });
      if (route === '/' || (width === 375 && ['/quiz-biblico', '/monte-seu-encontro', '/biblioteca'].includes(route))) {
        await rendered.evaluate(async () => {
          for (let top = 0; top < document.body.scrollHeight; top += innerHeight) { scrollTo(0, top); await new Promise(resolve => setTimeout(resolve, 80)); }
          await Promise.all([...document.images].map(img => img.decode().catch(() => {})));
          scrollTo(0, 0);
        });
        await rendered.screenshot({ path: `${output}/${route === '/' ? 'home' : route.slice(1)}-${width}.png`, fullPage: true });
      }
    }
    console.log(`Responsive ${width}px complete`);
  }
  report.blockedHosts = [...blocked];
} finally {
  fs.writeFileSync(`${output}/browser-${process.env.AUDIT_LABEL || 'current'}.json`, JSON.stringify(report, null, 2));
  await browser.close();
}
console.log(JSON.stringify({ routes: report.routes.length, brokenLinks: report.brokenLinks, errors: report.errors, overflow: report.responsive.filter(item => item.overflow), brokenImages: report.responsive.filter(item => item.brokenImages.length) }, null, 2));
