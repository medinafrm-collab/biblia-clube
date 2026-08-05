"use client";

import { trackGameEvent, type GameId } from "@/lib/analytics";

type FeedbackPromptProps = {
  game: GameId;
  label: string;
};

const feedbackFormUrl =
  process.env.NEXT_PUBLIC_FEEDBACK_FORM_URL ??
  "https://forms.gle/HAabL26tsRjC17Ab6";

export function FeedbackPrompt({ game, label }: FeedbackPromptProps) {
  if (!feedbackFormUrl) return null;

  return (
    <div className="mt-8 rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-5 text-left">
      <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--olive-dark)]">
        Feedback
      </p>
      <h2 className="mt-2 font-serif text-2xl text-[var(--navy)]">
        Como foi sua experiência?
      </h2>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
        Sua opinião ajuda o Bíblia Clube a melhorar jogos, dinâmicas e
        conteúdos gratuitos.
      </p>
      <a
        href={feedbackFormUrl}
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          trackGameEvent(game, "feedback_open", {
            source: label,
          })
        }
        className="button-secondary mt-4"
      >
        Enviar feedback <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
