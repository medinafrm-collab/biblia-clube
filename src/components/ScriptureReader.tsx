"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";

type PassageVerse = {
  chapter: number;
  number: number;
  text: string;
};

type PassageSection = {
  reference: string;
  verses: PassageVerse[];
};

type PassageResponse = {
  reference: string;
  version: string;
  sections: PassageSection[];
  notice?: string;
};

type ScriptureReaderProps = {
  reference: string;
};

const passageCache = new Map<string, PassageResponse>();

export function ScriptureReader({ reference }: ScriptureReaderProps) {
  const titleId = useId();
  const descriptionId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [passage, setPassage] = useState<PassageResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [open]);

  async function openReader() {
    setOpen(true);
    setError(null);

    const cachedPassage = passageCache.get(reference);
    if (cachedPassage) {
      setPassage(cachedPassage);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `/api/bible-passage?reference=${encodeURIComponent(reference)}`,
      );

      if (!response.ok) throw new Error("Não foi possível carregar o texto.");

      const nextPassage = (await response.json()) as PassageResponse;
      passageCache.set(reference, nextPassage);
      setPassage(nextPassage);
    } catch {
      setError(
        "Não foi possível abrir esta leitura agora. Tente novamente em instantes.",
      );
    } finally {
      setLoading(false);
    }
  }

  function closeReader() {
    setOpen(false);
  }

  function handleBackdropClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) closeReader();
  }

  const modal = open ? (
    <div
      className="fixed inset-0 z-[100] grid items-end bg-[var(--navy)]/55 p-0 sm:place-items-center sm:p-6"
      onMouseDown={handleBackdropClick}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="flex max-h-[88vh] w-full flex-col overflow-hidden rounded-t-2xl border border-[var(--border)] bg-white shadow-2xl sm:max-w-2xl sm:rounded-2xl"
      >
        <header className="flex items-start justify-between gap-5 border-b border-[var(--border)] px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--olive-dark)]">
              Leitura da referência
            </p>
            <h2 id={titleId} className="mt-2 font-serif text-2xl text-[var(--navy)] sm:text-3xl">
              {reference}
            </h2>
            <p id={descriptionId} className="mt-1 text-sm text-[var(--muted)]">
              Almeida 1819 · texto em domínio público
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={closeReader}
            aria-label="Fechar leitura"
            title="Fechar leitura"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-[var(--border)] text-2xl leading-none text-[var(--navy)] transition hover:border-[var(--gold)] hover:bg-[var(--gold-soft)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="overflow-y-auto px-5 py-6 sm:px-7">
          {loading ? (
            <p aria-live="polite" className="py-10 text-center text-[var(--muted)]">
              Preparando a leitura…
            </p>
          ) : error ? (
            <div role="alert" className="rounded-lg border border-[var(--danger)]/20 bg-[var(--danger-soft)] p-5 text-[var(--navy)]">
              {error}
            </div>
          ) : passage ? (
            <div>
              {passage.sections.map((section) => (
                <section key={section.reference} className="border-b border-[var(--border)] pb-6 last:border-0 last:pb-0 [&+&]:pt-6">
                  <h3 className="font-serif text-xl text-[var(--navy)]">
                    {section.reference}
                  </h3>
                  <div className="mt-4 space-y-3">
                    {section.verses.map((verse) => (
                      <p key={`${section.reference}-${verse.chapter}-${verse.number}`} className="font-serif text-lg leading-8 text-[var(--foreground)]">
                        <sup className="mr-2 font-sans text-xs font-extrabold text-[var(--olive-dark)]">
                          {verse.chapter}:{verse.number}
                        </sup>
                        {verse.text}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              {passage.notice ? (
                <p className="mt-6 rounded-lg bg-[var(--gold-soft)] p-4 text-sm leading-6 text-[var(--foreground)]">
                  {passage.notice}
                </p>
              ) : null}

              {passage.sections.length === 0 && !passage.notice ? (
                <p className="text-[var(--muted)]">
                  O texto desta referência não está disponível nesta edição.
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  ) : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={openReader}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="button-secondary mt-4 !min-h-10 !w-auto !px-4 !py-2 text-sm"
      >
        Ler referência
        <span aria-hidden="true">→</span>
      </button>
      {typeof document !== "undefined" && modal
        ? createPortal(modal, document.body)
        : null}
    </>
  );
}
