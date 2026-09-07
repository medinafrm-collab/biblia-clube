import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';
import { loadTs } from './audit-loader.mjs';

const { resolveBibleReference } = loadTs('src/lib/bibleReference.ts');
const meeting = loadTs('src/lib/meetingPlan.ts');
const { cellDynamics } = loadTs('src/data/cellDynamics.ts');
const { whoAmICharacters, whoAmIJourneys } = loadTs('src/data/whoAmICharacters.ts');

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
  assert.doesNotMatch(long.timeline[1].instruction, /não o roteiro integral/);
  assert.notEqual(short.timeline[1].instruction, long.timeline[1].instruction);
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
