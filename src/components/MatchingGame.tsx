"use client";

import { useState } from "react";
import {
  matchingThemes,
  type MatchingPair,
  type MatchingTheme,
} from "@/data/matchingPairs";

type Phase = "setup" | "playing" | "finished";
type PairItem = Pick<MatchingPair, "id"> & { label: string };

function shuffle<T>(items: T[]) {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [
      result[randomIndex],
      result[index],
    ];
  }

  return result;
}

function buildColumn(pairs: MatchingPair[], side: "left" | "right") {
  return shuffle(
    pairs.map((pair) => ({
      id: pair.id,
      label: side === "left" ? pair.left : pair.right,
    })),
  );
}

export function MatchingGame() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [theme, setTheme] = useState<MatchingTheme>(matchingThemes[0]);
  const [leftItems, setLeftItems] = useState<PairItem[]>([]);
  const [rightItems, setRightItems] = useState<PairItem[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [feedback, setFeedback] = useState("Rodada iniciada.");

  const score = Math.max(0, theme.pairs.length * 100 - mistakes * 25);

  function startGame(nextTheme = theme) {
    setTheme(nextTheme);
    setLeftItems(buildColumn(nextTheme.pairs, "left"));
    setRightItems(buildColumn(nextTheme.pairs, "right"));
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatched([]);
    setMistakes(0);
    setFeedback("Rodada iniciada.");
    setPhase("playing");
  }

  function resolvePair(leftId: string, rightId: string) {
    if (leftId === rightId) {
      const pair = theme.pairs.find((item) => item.id === leftId);
      const nextMatched = [...matched, leftId];

      setMatched(nextMatched);
      setSelectedLeft(null);
      setSelectedRight(null);
      setFeedback(`Par correto: ${pair?.left} e ${pair?.right}.`);

      if (nextMatched.length === theme.pairs.length) {
        setPhase("finished");
      }
      return;
    }

    setMistakes((current) => current + 1);
    setSelectedLeft(null);
    setSelectedRight(null);
    setFeedback("Esses itens não formam um par. Tente outra combinação.");
  }

  function chooseLeft(id: string) {
    if (matched.includes(id)) return;
    setSelectedLeft(id);
    setFeedback("Primeiro item selecionado.");
    if (selectedRight) resolvePair(id, selectedRight);
  }

  function chooseRight(id: string) {
    if (matched.includes(id)) return;
    setSelectedRight(id);
    setFeedback("Segundo item selecionado.");
    if (selectedLeft) resolvePair(selectedLeft, id);
  }

  if (phase === "setup") {
    return (
      <section className="paper-texture min-h-[calc(100vh-5rem)] py-12 sm:py-16">
        <div className="container-site">
          <div className="mx-auto grid max-w-5xl items-center gap-9 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div>
              <span className="eyebrow">Novo jogo bíblico</span>
              <h1 className="section-title">Ligue os pares e descubra novas conexões.</h1>
              <p className="section-copy">
                Personagens, lugares, livros e imagens bíblicas aparecem em
                rodadas rápidas com contexto e referências para continuar o estudo.
              </p>
            </div>
            <svg
              viewBox="0 0 320 220"
              role="img"
              aria-label="Pontos conectados representando pares"
              className="mx-auto w-full max-w-80"
            >
              <rect x="1" y="1" width="318" height="218" rx="8" fill="#ffffff" stroke="#dfe5dc" />
              <path d="M76 53 C145 53 170 164 244 164" fill="none" stroke="#c6a35d" strokeWidth="4" />
              <path d="M76 110 C145 110 170 55 244 55" fill="none" stroke="#53633a" strokeWidth="4" />
              <path d="M76 167 C145 167 170 109 244 109" fill="none" stroke="#26566b" strokeWidth="4" />
              {[53, 110, 167].map((y) => <circle key={`left-${y}`} cx="68" cy={y} r="15" fill="#173c4d" />)}
              {[55, 109, 164].map((y) => <circle key={`right-${y}`} cx="252" cy={y} r="15" fill="#f3ead4" stroke="#c6a35d" strokeWidth="3" />)}
            </svg>
          </div>

          <div className="mx-auto mt-10 max-w-5xl border border-[var(--border)] bg-white p-6 shadow-sm sm:p-9">
            <h2 className="font-serif text-2xl text-[var(--navy)]">Escolha o tema</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {matchingThemes.map((item) => {
                const active = item.id === theme.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setTheme(item)}
                    className={`min-h-28 border p-5 text-left transition ${active ? "border-[var(--navy)] bg-[var(--navy)] text-white" : "border-[var(--border)] bg-white text-[var(--navy)] hover:border-[var(--gold)] hover:bg-[var(--gold-soft)]"}`}
                  >
                    <strong className="block text-base">{item.title}</strong>
                    <span className={`mt-2 block text-sm leading-6 ${active ? "text-white/70" : "text-[var(--muted)]"}`}>{item.description}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-7 flex justify-end">
              <button type="button" onClick={() => startGame()} className="button-primary">
                Começar rodada <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (phase === "finished") {
    return (
      <section className="paper-texture min-h-[calc(100vh-5rem)] py-12 sm:py-16">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Rodada concluída</span>
            <h1 className="section-title mx-auto">Você conectou todos os pares!</h1>
            <p className="mt-5 text-lg text-[var(--muted)]">
              Pontuação: <strong className="text-[var(--navy)]">{score} pontos</strong> · {mistakes} {mistakes === 1 ? "tentativa incorreta" : "tentativas incorretas"}
            </p>
          </div>

          <div className="mx-auto mt-9 max-w-4xl border border-[var(--border)] bg-white p-6 shadow-sm sm:p-9">
            <h2 className="font-serif text-2xl text-[var(--navy)]">Conexões da rodada</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {theme.pairs.map((pair) => (
                <li key={pair.id} className="border-l-4 border-[var(--gold)] pl-4">
                  <strong className="text-[var(--navy)]">{pair.left} — {pair.right}</strong>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{pair.explanation}</p>
                  <p className="mt-2 text-xs font-bold text-[var(--olive-dark)]">{pair.reference}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button type="button" onClick={() => startGame()} className="button-primary">Jogar novamente</button>
              <button type="button" onClick={() => setPhase("setup")} className="button-secondary">Escolher outro tema</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="paper-texture min-h-[calc(100vh-5rem)] py-8 sm:py-12">
      <div className="container-site">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Ligue os pares</span>
              <h1 className="mt-3 font-serif text-3xl text-[var(--navy)] sm:text-4xl">{theme.title}</h1>
            </div>
            <div className="text-right text-sm text-[var(--muted)]">
              <strong className="block text-lg text-[var(--navy)]">{matched.length} de {theme.pairs.length}</strong>
              <span>{mistakes} {mistakes === 1 ? "erro" : "erros"}</span>
            </div>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-[var(--border)]">
            <div className="h-full rounded-full bg-[var(--gold)] transition-[width]" style={{ width: `${(matched.length / theme.pairs.length) * 100}%` }} />
          </div>

          <div className="mt-6 border border-[var(--border)] bg-white p-3 shadow-sm sm:p-6">
            <div className="grid grid-cols-2 gap-2 sm:gap-5">
              <div className="grid content-start gap-2 sm:gap-3">
                <h2 className="px-1 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--olive-dark)] sm:text-sm">Começa com</h2>
                {leftItems.map((item, index) => {
                  const isMatched = matched.includes(item.id);
                  const isSelected = selectedLeft === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      disabled={isMatched}
                      aria-pressed={isSelected}
                      onClick={() => chooseLeft(item.id)}
                      className={`flex min-h-20 min-w-0 items-center gap-2 border p-3 text-left text-sm transition sm:gap-3 sm:p-4 sm:text-base ${isMatched ? "border-[var(--success)] bg-[var(--success-soft)] text-[var(--success)]" : isSelected ? "border-[var(--gold)] bg-[var(--gold-soft)] text-[var(--navy)] shadow-sm" : "border-[var(--border)] text-[var(--navy)] hover:border-[var(--gold)]"}`}
                    >
                      <span className="grid size-7 shrink-0 place-items-center rounded-full border border-current/25 text-xs font-extrabold sm:size-8">{isMatched ? "✓" : String.fromCharCode(65 + index)}</span>
                      <strong className="min-w-0 break-words">{item.label}</strong>
                    </button>
                  );
                })}
              </div>

              <div className="grid content-start gap-2 sm:gap-3">
                <h2 className="px-1 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--olive-dark)] sm:text-sm">Combina com</h2>
                {rightItems.map((item, index) => {
                  const isMatched = matched.includes(item.id);
                  const isSelected = selectedRight === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      disabled={isMatched}
                      aria-pressed={isSelected}
                      onClick={() => chooseRight(item.id)}
                      className={`flex min-h-20 min-w-0 items-center gap-2 border p-3 text-left text-sm transition sm:gap-3 sm:p-4 sm:text-base ${isMatched ? "border-[var(--success)] bg-[var(--success-soft)] text-[var(--success)]" : isSelected ? "border-[var(--gold)] bg-[var(--gold-soft)] text-[var(--navy)] shadow-sm" : "border-[var(--border)] text-[var(--navy)] hover:border-[var(--gold)]"}`}
                    >
                      <span className="grid size-7 shrink-0 place-items-center rounded-full border border-current/25 text-xs font-extrabold sm:size-8">{isMatched ? "✓" : index + 1}</span>
                      <strong className="min-w-0 break-words">{item.label}</strong>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-4 border-t border-[var(--border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p aria-live="polite" className="text-sm font-bold text-[var(--muted)]">{feedback}</p>
              <button type="button" onClick={() => setPhase("setup")} className="button-secondary !min-h-11 !px-4">Trocar tema</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

