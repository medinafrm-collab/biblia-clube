"use client";

import type { QuizJourney, QuizTopicId } from "@/data/quizQuestions";

const PROGRESS_KEY = "biblia-clube:quiz-progress:v1";
const HISTORY_KEY = "biblia-clube:quiz-history:v1";
const UPDATE_EVENT = "biblia-clube:quiz-progress-updated";
const MAX_PROGRESS_AGE = 30 * 24 * 60 * 60 * 1000;

export type SavedQuizProgress = {
  version: 1;
  topic: QuizTopicId;
  topicLabel: string;
  topicPath: string;
  journey: QuizJourney;
  currentIndex: number;
  selectedAnswer: string | null;
  score: number;
  total: number;
  updatedAt: number;
};

export type CompletedQuizJourney = {
  topic: QuizTopicId;
  journey: QuizJourney;
  score: number;
  total: number;
  completedAt: number;
};

type QuizHistory = {
  version: 1;
  completed: Record<string, CompletedQuizJourney>;
};

function notifyProgressUpdate() {
  window.dispatchEvent(new Event(UPDATE_EVENT));
}

export function getJourneyKey(topic: QuizTopicId, journey: QuizJourney) {
  return `${topic}:${journey}`;
}

export function readQuizProgress(): SavedQuizProgress | null {
  if (typeof window === "undefined") return null;

  const storedProgress = window.localStorage.getItem(PROGRESS_KEY);
  if (storedProgress === null) return null;

  try {
    const parsed = JSON.parse(storedProgress) as
      | Partial<SavedQuizProgress>
      | null;

    if (
      !parsed ||
      parsed.version !== 1 ||
      typeof parsed.topic !== "string" ||
      typeof parsed.topicLabel !== "string" ||
      typeof parsed.topicPath !== "string" ||
      typeof parsed.journey !== "number" ||
      typeof parsed.currentIndex !== "number" ||
      typeof parsed.score !== "number" ||
      typeof parsed.total !== "number" ||
      typeof parsed.updatedAt !== "number" ||
      (parsed.selectedAnswer !== null &&
        typeof parsed.selectedAnswer !== "string") ||
      Date.now() - parsed.updatedAt > MAX_PROGRESS_AGE
    ) {
      clearQuizProgress();
      return null;
    }

    return parsed as SavedQuizProgress;
  } catch {
    clearQuizProgress();
    return null;
  }
}

export function saveQuizProgress(
  progress: Omit<SavedQuizProgress, "updatedAt">,
) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify({ ...progress, updatedAt: Date.now() }),
    );
    notifyProgressUpdate();
  } catch {
    // The quiz remains usable when browser storage is unavailable.
  }
}

export function clearQuizProgress() {
  if (typeof window === "undefined") return;

  try {
    if (window.localStorage.getItem(PROGRESS_KEY) === null) return;
    window.localStorage.removeItem(PROGRESS_KEY);
    notifyProgressUpdate();
  } catch {
    // The quiz remains usable when browser storage is unavailable.
  }
}

export function readQuizHistory(): Record<string, CompletedQuizJourney> {
  if (typeof window === "undefined") return {};

  try {
    const parsed = JSON.parse(
      window.localStorage.getItem(HISTORY_KEY) ?? "null",
    ) as QuizHistory | null;

    if (!parsed || parsed.version !== 1 || !parsed.completed) return {};
    return parsed.completed;
  } catch {
    return {};
  }
}

export function recordCompletedJourney(
  journey: Omit<CompletedQuizJourney, "completedAt">,
): Record<string, CompletedQuizJourney> {
  const completedJourney = {
    ...journey,
    completedAt: Date.now(),
  };
  const completed = {
    ...readQuizHistory(),
    [getJourneyKey(journey.topic, journey.journey)]: completedJourney,
  };

  try {
    window.localStorage.setItem(
      HISTORY_KEY,
      JSON.stringify({ version: 1, completed } satisfies QuizHistory),
    );
  } catch {
    // Recommendations can still use the completion from the current session.
  }

  return completed;
}

export function subscribeToQuizProgress(callback: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === PROGRESS_KEY) callback();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(UPDATE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(UPDATE_EVENT, callback);
  };
}
