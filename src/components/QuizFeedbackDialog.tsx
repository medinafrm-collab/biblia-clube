"use client";

import { useEffect, useRef } from "react";
import { feedbackFormUrl } from "@/lib/feedbackForm";
import { trackGoogleAnalyticsEvent } from "@/lib/googleAnalytics";

const shownInPage = new Set<string>();

const options = [
  { label: "Sim", value: "yes" },
  { label: "Tive dificuldades", value: "difficulty" },
  { label: "Não", value: "no" },
] as const;

type Activity = {
  game: string;
  name: string;
  topic?: string;
  journey?: number;
};

export function QuizFeedbackDialog({ game, name, topic, journey }: Activity) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const answered = useRef(false);
  const storageKey = `biblia-clube:feedback-shown:v1:${game}:${topic ?? ""}`;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const dialog = dialogRef.current;
      if (!dialog || shownInPage.has(storageKey) || document.visibilityState !== "visible" ||
          document.querySelector("dialog[open]")) return;
      try {
        if (localStorage.getItem(storageKey)) return;
      } catch {
        // The in-memory guard still prevents repeats in this page.
      }
      dialog.showModal();
      shownInPage.add(storageKey);
      try { localStorage.setItem(storageKey, "1"); } catch {
        // Storage can be unavailable in restricted browsers.
      }
      trackGoogleAnalyticsEvent("quiz_feedback_view", { game, topic: topic ?? null, journey: journey ?? null });
    }, 2500);
    return () => window.clearTimeout(timer);
  }, [game, topic, journey, storageKey]);

  const eventContext = { game, topic: topic ?? null, journey: journey ?? null };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="quiz-feedback-heading"
      aria-describedby="quiz-feedback-question"
      onClose={() => {
        if (!answered.current) trackGoogleAnalyticsEvent("quiz_feedback_dismiss", eventContext);
      }}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-sm overflow-y-auto rounded-lg bg-[var(--navy)] p-5 text-left text-white shadow-xl backdrop:bg-black/55 sm:p-6"
    >
      <form method="dialog">
        <div className="flex items-center justify-between gap-3">
          <h2 id="quiz-feedback-heading" className="font-serif text-2xl">Avaliação rápida!</h2>
          <button
            type="submit"
            aria-label="Fechar avaliação"
            className="grid size-11 shrink-0 place-items-center rounded-md text-2xl leading-none text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <p className="mt-2 text-sm font-bold text-[var(--gold)]">{name}</p>
        <p id="quiz-feedback-question" className="mt-2">Gostou da rodada?</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {options.map(({ label, value }) => (
            <button key={value} type="submit" className="button-secondary"
              onClick={() => {
                if (answered.current) return;
                answered.current = true;
                trackGoogleAnalyticsEvent("quiz_feedback_vote", { ...eventContext, rating: value });
              }}>
              {label}
            </button>
          ))}
        </div>
        {feedbackFormUrl && (
          <div className="mt-5 border-t border-white/25 pt-4 text-sm leading-6 text-white/90">
            <p>Se tiver um tempinho, responda a pesquisa para melhorarmos nossos conteúdos! Deus abençoe</p>
            <a href={feedbackFormUrl} target="_blank" rel="noreferrer"
              onClick={() => trackGoogleAnalyticsEvent("quiz_feedback_form_open", eventContext)}
              className="inline-flex min-h-11 items-center font-bold text-white underline underline-offset-4">
              Responder à pesquisa
            </a>
          </div>
        )}
        <button type="submit" autoFocus className="mt-1 min-h-11 text-sm font-semibold text-white underline underline-offset-4">Agora não</button>
      </form>
    </dialog>
  );
}
