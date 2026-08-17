"use client";

import { useState } from "react";
import {
  trackGameEvent,
  type GameEventProperties,
  type GameId,
} from "@/lib/analytics";

type ShareStatus = "idle" | "shared" | "copied" | "error";

type ResultShareProps = {
  game: GameId;
  title: string;
  text: string;
  path: string;
  eventProperties?: GameEventProperties;
};

async function copyToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  textArea.remove();

  if (!copied) throw new Error("Copy failed");
}

export function ResultShare({
  game,
  title,
  text,
  path,
  eventProperties = {},
}: ResultShareProps) {
  const [status, setStatus] = useState<ShareStatus>("idle");
  const [isSharing, setIsSharing] = useState(false);

  async function shareResult() {
    const url = new URL(path, window.location.origin).toString();
    const content = `${text}\n\n${url}`;

    setIsSharing(true);
    setStatus("idle");

    try {
      if (navigator.share) {
        try {
          await navigator.share({ title, text, url });
          setStatus("shared");
          trackGameEvent(game, "share", {
            ...eventProperties,
            method: "native",
          });
          return;
        } catch (error) {
          if (error instanceof DOMException && error.name === "AbortError") return;
        }
      }

      await copyToClipboard(content);
      setStatus("copied");
      trackGameEvent(game, "share", {
        ...eventProperties,
        method: "clipboard",
      });
    } catch {
      setStatus("error");
    } finally {
      setIsSharing(false);
    }
  }

  return (
    <div className="mx-auto mt-8 max-w-xl border-y border-[var(--border)] py-6 text-center">
      <strong className="font-serif text-xl text-[var(--navy)]">
        Compartilhe sua conquista
      </strong>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
        Convide alguém para tentar o mesmo desafio no Bíblia Clube.
      </p>
      <button
        type="button"
        onClick={shareResult}
        disabled={isSharing}
        aria-busy={isSharing}
        className="button-secondary mt-4 disabled:cursor-wait disabled:opacity-60"
      >
        {isSharing ? "Preparando…" : "Compartilhar resultado"}
        <span aria-hidden="true">↗</span>
      </button>
      <p aria-live="polite" className="mt-3 min-h-5 text-sm font-bold text-[var(--olive-dark)]">
        {status === "shared" ? "Resultado compartilhado!" : null}
        {status === "copied" ? "Convite copiado. Agora é só enviar para alguém." : null}
        {status === "error" ? "Não foi possível compartilhar. Tente novamente." : null}
      </p>
    </div>
  );
}
