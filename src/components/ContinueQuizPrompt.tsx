"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  clearQuizProgress,
  readQuizProgress,
  subscribeToQuizProgress,
  type SavedQuizProgress,
} from "@/lib/quizProgress";

type ContinueQuizPromptProps = {
  compact?: boolean;
  hidden?: boolean;
  initialOnly?: boolean;
  onContinue?: (progress: SavedQuizProgress) => void;
};

export function ContinueQuizPrompt({
  compact = false,
  hidden = false,
  initialOnly = false,
  onContinue,
}: ContinueQuizPromptProps) {
  const [progress, setProgress] = useState<SavedQuizProgress | null>(null);

  useEffect(() => {
    const refresh = () => setProgress(readQuizProgress());
    const timer = window.setTimeout(refresh, 0);
    const unsubscribe = initialOnly
      ? () => undefined
      : subscribeToQuizProgress(refresh);

    return () => {
      window.clearTimeout(timer);
      unsubscribe();
    };
  }, [initialOnly]);

  if (!progress || hidden) return null;

  const resumeHref = `${progress.topicPath}?continuar=1#quiz`;

  return (
    <section
      className={
        compact
          ? "mx-auto mt-8 max-w-[820px]"
          : "border-b border-[var(--border)] bg-[var(--surface-soft)]"
      }
      aria-label="Jornada em andamento"
    >
      <div
        className={
          compact
            ? "rounded-lg border border-[var(--border)] bg-white px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-6"
            : "container-site py-5 sm:flex sm:items-center sm:justify-between sm:gap-8"
        }
      >
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--olive)]">
            Continue de onde parou
          </p>
          <p className="mt-1 font-bold text-[var(--navy)]">
            {progress.topicLabel} · Jornada {progress.journey}
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Pergunta {progress.currentIndex + 1} de {progress.total}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-0 sm:justify-end">
          {onContinue ? (
            <button
              type="button"
              onClick={() => onContinue(progress)}
              className="button-primary"
            >
              Continuar jornada
              <span aria-hidden="true">→</span>
            </button>
          ) : (
            <Link href={resumeHref} className="button-primary">
              Continuar jornada
              <span aria-hidden="true">→</span>
            </Link>
          )}
          <button
            type="button"
            onClick={() => {
              clearQuizProgress();
              setProgress(null);
            }}
            className="text-sm font-bold text-[var(--muted)] underline decoration-[var(--border)] underline-offset-4 transition hover:text-[var(--navy)]"
          >
            Descartar
          </button>
        </div>
      </div>
    </section>
  );
}
