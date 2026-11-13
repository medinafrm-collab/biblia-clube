"use client";

import { trackGameEvent, type GameId } from "@/lib/analytics";
import { feedbackFormUrl } from "@/lib/feedbackForm";
import { QuizFeedbackDialog } from "./QuizFeedbackDialog";

type FeedbackPromptProps = {
  game: GameId;
  label: string;
  topic?: { id: string; name: string; journey: number };
};

const activityNames: Record<GameId, string> = {
  quiz: "Quiz bíblico",
  "complete-a-frase": "Complete a frase",
  "modo-grupo": "Modo Grupo",
  "ligue-os-pares": "Ligue os pares",
  "jogo-da-memoria": "Jogo da memória",
  "quem-sou-eu": "Quem sou eu?",
};

export function FeedbackPrompt({ game, label, topic }: FeedbackPromptProps) {

  return (
    <>
      <QuizFeedbackDialog
        key={`${game}:${topic?.id ?? ""}`}
        game={game}
        name={topic ? `Quiz bíblico · ${topic.name}` : activityNames[game]}
        topic={topic?.id}
        journey={topic?.journey}
      />
    {feedbackFormUrl && (
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
    )}
    </>
  );
}
