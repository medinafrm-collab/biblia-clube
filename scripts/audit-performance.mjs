import fs from 'node:fs';
import path from 'node:path';
import lighthouse from '../.tools/audit/node_modules/lighthouse/core/index.js';
import { launch } from '../.tools/audit/node_modules/chrome-launcher/dist/index.js';

const runs = [['/', 'mobile'], ['/quiz-biblico', 'mobile'], ['/monte-seu-encontro', 'mobile'], ['/', 'desktop']];
fs.mkdirSync('.test-artifacts/audit/lighthouse-profile', { recursive: true });
for (const [route, device] of runs) {
  const chrome = await launch({ chromePath: process.env.CHROME_PATH, chromeFlags: ['--headless'], userDataDir: path.resolve('.test-artifacts/audit/lighthouse-profile') });
  try {
    const result = await lighthouse(`http://127.0.0.1:3100${route}`, {
      port: chrome.port, output: 'json', logLevel: 'error', onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      blockedUrlPatterns: ['*googlesyndication.com*', '*google-analytics.com*', '*googletagmanager.com*', '*vercel-scripts.com*'],
      ...(device === 'desktop' ? { formFactor: 'desktop', screenEmulation: { mobile: false, width: 1440, height: 900, deviceScaleFactor: 1, disabled: false }, throttling: { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1 } } : {}),
    });
    fs.writeFileSync(`.test-artifacts/audit/lighthouse-${route === '/' ? 'home' : route.slice(1)}-${device}.json`, JSON.stringify(result.lhr));
    console.log(JSON.stringify({ route, device, scores: Object.fromEntries(Object.entries(result.lhr.categories).map(([key, value]) => [key, value.score])), lcp: result.lhr.audits['largest-contentful-paint'].numericValue, cls: result.lhr.audits['cumulative-layout-shift'].numericValue, tbt: result.lhr.audits['total-blocking-time'].numericValue }));
  } finally { await chrome.kill(); }
}
