"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FeedbackPrompt } from "@/components/FeedbackPrompt";
import {
  memoryGameModes,
  type MemoryGameMode,
  type MemoryGameModeConfig,
} from "@/data/memoryGamePairs";
import { trackGameEvent } from "@/lib/analytics";

type Phase = "setup" | "playing" | "finished";
type Difficulty = "easy" | "medium";
type CardSide = "first" | "second";
type MemoryCard = {
  uid: string;
  pairId: string;
  label: string;
  kind: string;
  side: CardSide;
};

const difficultyOptions: Array<{
  id: Difficulty;
  label: string;
  pairs: number;
}> = [
  { id: "easy", label: "6 pares", pairs: 6 },
  { id: "medium", label: "8 pares", pairs: 8 },
];

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

function buildDeck(mode: MemoryGameModeConfig, difficulty: Difficulty) {
  const size =
    difficultyOptions.find((option) => option.id === difficulty)?.pairs ??
    mode.pairs.length;
  const selectedPairs = shuffle(mode.pairs).slice(0, size);
  const cards = selectedPairs.flatMap<MemoryCard>((pair) => [
    {
      uid: `${pair.id}-first`,
      pairId: pair.id,
      label: pair.first,
      kind: pair.firstKind,
      side: "first",
    },
    {
      uid: `${pair.id}-second`,
      pairId: pair.id,
      label: pair.second,
      kind: pair.secondKind,
      side: "second",
    },
  ]);

  return shuffle(cards);
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function BoardMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="size-8 text-[var(--gold)]"
    >
      <path
        d="M12 10v24c6-2 10-.5 12 3V13c-3-4-7-5-12-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M36 10v24c-6-2-10-.5-12 3V13c3-4 7-5 12-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M24 15v22M16 19h4M28 19h4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function findMode(modeId: MemoryGameMode) {
  return memoryGameModes.find((mode) => mode.id === modeId) ?? memoryGameModes[0];
}

export function MemoryGame() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [modeId, setModeId] = useState<MemoryGameMode>("symbols");
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState("Escolha duas cartas para começar.");

  const mode = useMemo(() => findMode(modeId), [modeId]);
  const totalPairs = cards.length / 2;
  const matchedPairs = matched.length;
  const progress = totalPairs ? (matchedPairs / totalPairs) * 100 : 0;

  useEffect(() => {
    if (phase !== "playing") return;

    const timer = window.setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    trackGameEvent("jogo-da-memoria", "view");
  }, []);

  function startGame(nextModeId = modeId, nextDifficulty = difficulty) {
    const nextMode = findMode(nextModeId);
    const nextCards = buildDeck(nextMode, nextDifficulty);

    setModeId(nextModeId);
    setDifficulty(nextDifficulty);
    setCards(nextCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setSeconds(0);
    setMessage("Escolha duas cartas para começar.");
    setPhase("playing");
    trackGameEvent("jogo-da-memoria", "start", {
      mode: nextModeId,
      difficulty: nextDifficulty,
      pairs: nextCards.length / 2,
    });
  }

  function chooseCard(card: MemoryCard) {
    if (
      phase !== "playing" ||
      flipped.includes(card.uid) ||
      matched.includes(card.pairId) ||
      flipped.length === 2
    ) {
      return;
    }

    const nextFlipped = [...flipped, card.uid];
    setFlipped(nextFlipped);

    if (nextFlipped.length !== 2) {
      setMessage(`${card.kind} selecionado.`);
      return;
    }

    setMoves((current) => current + 1);

    const [firstCard, secondCard] = nextFlipped.map((uid) =>
      cards.find((item) => item.uid === uid),
    );

    if (!firstCard || !secondCard) return;

    const isMatch =
      firstCard.pairId === secondCard.pairId && firstCard.side !== secondCard.side;

    if (isMatch) {
      const pair = mode.pairs.find((item) => item.id === firstCard.pairId);
      const nextMatched = [...matched, firstCard.pairId];

      setMatched(nextMatched);
      setMessage(pair ? `Par correto: ${pair.note}` : "Par correto.");
      window.setTimeout(() => setFlipped([]), 500);

      if (nextMatched.length === totalPairs) {
        trackGameEvent("jogo-da-memoria", "finish", {
          mode: mode.id,
          difficulty,
          pairs: totalPairs,
          moves: moves + 1,
          seconds,
        });
        window.setTimeout(() => {
          setPhase("finished");
          setMessage("Rodada concluída.");
        }, 650);
      }
      return;
    }

    setMessage("Essas cartas não formam um par. Observe e tente novamente.");
    window.setTimeout(() => setFlipped([]), 900);
  }

  if (phase === "setup") {
    return (
      <section className="paper-texture min-h-[calc(100vh-5rem)] py-12 sm:py-16">
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <div>
              <span className="eyebrow">Novo jogo</span>
              <h1 className="section-title mx-auto">
                Jogo da memória para aprender conectando.
              </h1>
              <p className="section-copy mx-auto">
                Encontre pares entre personagens e símbolos ou conecte trechos
                às suas referências. Uma dinâmica leve para jogar sozinho, em
                família ou em grupo.
              </p>
            </div>
          </div>

          <div className="card mx-auto mt-10 max-w-5xl !rounded-lg p-6 sm:p-9">
            <div className="grid gap-8 lg:grid-cols-[1fr_18rem]">
              <div>
                <h2 className="font-serif text-2xl text-[var(--navy)]">
                  1. Escolha o modo
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {memoryGameModes.map((item) => {
                    const active = item.id === modeId;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setModeId(item.id)}
                        className={`min-h-36 rounded-lg border p-5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)] ${
                          active
                            ? "border-[var(--navy)] bg-[var(--navy)] text-white"
                            : "border-[var(--border)] bg-white text-[var(--navy)] hover:border-[var(--gold)] hover:bg-[var(--gold-soft)]"
                        }`}
                      >
                        <strong className="block font-serif text-2xl">
                          {item.title}
                        </strong>
                        <span
                          className={`mt-3 block text-sm leading-6 ${
                            active ? "text-white/70" : "text-[var(--muted)]"
                          }`}
                        >
                          {item.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[var(--navy)]">
                  2. Defina a dificuldade
                </h2>
                <div className="mt-5 grid gap-3">
                  {difficultyOptions.map((option) => {
                    const active = option.id === difficulty;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setDifficulty(option.id)}
                        className={`rounded-full border px-5 py-3 text-left text-sm font-extrabold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)] ${
                          active
                            ? "border-[var(--gold)] bg-[var(--gold-soft)] text-[var(--olive-dark)]"
                            : "border-[var(--border)] bg-white text-[var(--muted)] hover:border-[var(--gold)]"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={() => startGame()}
                  className="button-primary mt-7 w-full"
                >
                  Começar jogo <span aria-hidden="true">→</span>
                </button>
              </div>
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
          <div className="card mx-auto max-w-3xl overflow-hidden !rounded-lg text-center">
            <div className="bg-[var(--navy)] px-6 py-8 text-white">
              <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--gold)]">
                Rodada concluída
              </span>
              <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
                {matchedPairs} pares encontrados
              </h1>
            </div>
            <div className="p-7 sm:p-10">
              <div className="mx-auto grid max-w-xl gap-3 sm:grid-cols-3">
                <div className="flex min-h-32 min-w-0 flex-col items-center justify-center rounded-lg border border-[var(--border)] p-4">
                  <strong className="block font-serif text-3xl text-[var(--navy)]">
                    {moves}
                  </strong>
                  <span className="mt-1 block text-sm text-[var(--muted)]">
                    movimentos
                  </span>
                </div>
                <div className="flex min-h-32 min-w-0 flex-col items-center justify-center rounded-lg border border-[var(--border)] p-4">
                  <strong className="block font-serif text-3xl text-[var(--navy)]">
                    {formatTime(seconds)}
                  </strong>
                  <span className="mt-1 block text-sm text-[var(--muted)]">
                    tempo
                  </span>
                </div>
                <div className="flex min-h-32 min-w-0 flex-col items-center justify-center rounded-lg border border-[var(--border)] p-4">
                  <strong className="block max-w-full whitespace-normal font-serif text-xl leading-snug text-[var(--navy)] [overflow-wrap:normal] [word-break:normal]">
                    {mode.title}
                  </strong>
                  <span className="mt-1 block text-sm text-[var(--muted)]">
                    modo
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => startGame()}
                  className="button-primary"
                >
                  Jogar novamente <span aria-hidden="true">↻</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPhase("setup")}
                  className="button-secondary"
                >
                  Trocar modo
                </button>
                <Link href="/#jogos" className="button-secondary">
                  Ver outros jogos
                </Link>
              </div>
              <FeedbackPrompt game="jogo-da-memoria" label="jogo_da_memoria_result" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="paper-texture min-h-[calc(100vh-5rem)] py-8 sm:py-12">
      <div className="container-site">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="card !rounded-lg p-4 sm:p-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="eyebrow">Jogo da memória</span>
                  <h1 className="mt-3 font-serif text-3xl text-[var(--navy)] sm:text-4xl">
                    {mode.title}
                  </h1>
                  <p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">
                    {mode.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => startGame()}
                  className="button-secondary !min-h-11 !px-4"
                >
                  Reiniciar
                </button>
              </div>

              <div
                className="mt-6 h-2 overflow-hidden rounded-full bg-[var(--border)]"
                role="progressbar"
                aria-label="Progresso da rodada"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
              >
                <div
                  className="h-full rounded-full bg-[var(--gold)] transition-[width] duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3">
                {cards.map((card) => {
                  const isMatched = matched.includes(card.pairId);
                  const isFlipped = flipped.includes(card.uid) || isMatched;
                  const isReferenceMode = mode.id === "references";

                  return (
                    <button
                      key={card.uid}
                      type="button"
                      onClick={() => chooseCard(card)}
                      disabled={isMatched}
                      aria-label={
                        isFlipped
                          ? `${card.kind}: ${card.label}`
                          : "Carta virada para baixo"
                      }
                      className={`group relative grid aspect-[1.08] min-h-24 place-items-stretch rounded-lg border p-0 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)] sm:min-h-32 ${
                        isMatched
                          ? "border-[var(--success)] bg-[var(--success-soft)] shadow-[0_0_0_4px_rgba(57,118,90,0.08)]"
                          : isFlipped
                            ? "border-[var(--gold)] bg-white shadow-sm"
                            : "border-[var(--navy)] bg-[var(--navy)] hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(18,63,82,0.18)]"
                      }`}
                    >
                      {isFlipped ? (
                        <span className="flex h-full flex-col justify-between rounded-lg p-3 sm:p-4">
                          <span className="text-[0.64rem] font-extrabold uppercase tracking-[0.12em] text-[var(--olive-dark)]">
                            {card.kind}
                          </span>
                          <strong
                            className={`break-words font-serif leading-tight text-[var(--navy)] ${
                              isReferenceMode && card.side === "first"
                                ? "text-base sm:text-lg"
                                : "text-xl sm:text-2xl"
                            }`}
                          >
                            {card.label}
                          </strong>
                          <span className="h-1 w-12 rounded-full bg-[var(--gold)]" />
                        </span>
                      ) : (
                        <span className="grid h-full place-items-center rounded-lg bg-[var(--navy)] text-[var(--gold)]">
                          <BoardMark />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <aside className="card h-fit !rounded-lg p-6">
              <h2 className="font-serif text-2xl text-[var(--navy)]">
                Rodada
              </h2>
              <dl className="mt-5 grid gap-4">
                <div className="border-b border-[var(--border)] pb-4">
                  <dt className="text-sm font-bold text-[var(--muted)]">Modo</dt>
                  <dd className="mt-1 font-serif text-xl text-[var(--navy)]">
                    {mode.title}
                  </dd>
                </div>
                <div className="border-b border-[var(--border)] pb-4">
                  <dt className="text-sm font-bold text-[var(--muted)]">
                    Movimentos
                  </dt>
                  <dd className="mt-1 font-serif text-3xl text-[var(--navy)]">
                    {moves}
                  </dd>
                </div>
                <div className="border-b border-[var(--border)] pb-4">
                  <dt className="text-sm font-bold text-[var(--muted)]">Tempo</dt>
                  <dd className="mt-1 font-serif text-3xl text-[var(--navy)]">
                    {formatTime(seconds)}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-bold text-[var(--muted)]">
                    Pares encontrados
                  </dt>
                  <dd className="mt-1 font-serif text-3xl text-[var(--navy)]">
                    {matchedPairs}/{totalPairs}
                  </dd>
                </div>
              </dl>

              <p aria-live="polite" className="mt-6 text-sm leading-6 text-[var(--muted)]">
                {message}
              </p>

              <button
                type="button"
                onClick={() => setPhase("setup")}
                className="button-secondary mt-6 w-full"
              >
                Trocar modo
              </button>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
