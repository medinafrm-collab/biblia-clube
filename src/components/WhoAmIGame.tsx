"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FeedbackPrompt } from "@/components/FeedbackPrompt";
import { ResultShare } from "@/components/ResultShare";
import {
  whoAmICharacters,
  whoAmIJourneys,
  type WhoAmIJourneyId,
} from "@/data/whoAmICharacters";
import { trackGameEvent } from "@/lib/analytics";

type Phase = "setup" | "playing" | "finished";
type AnswerRecord = { correct: boolean; cluesUsed: number; points: number };

const pointsByClue = [100, 80, 60, 40, 20];

export function WhoAmIGame() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [journeyId, setJourneyId] = useState<WhoAmIJourneyId>("known");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleClues, setVisibleClues] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const characters = useMemo(
    () => whoAmICharacters.filter((character) => character.journey === journeyId),
    [journeyId],
  );
  const currentCharacter = characters[currentIndex];
  const score = answers.reduce((total, answer) => total + answer.points, 0);
  const correctAnswers = answers.filter((answer) => answer.correct).length;
  const averageClues = answers.length
    ? answers.reduce((total, answer) => total + answer.cluesUsed, 0) / answers.length
    : 0;

  useEffect(() => {
    trackGameEvent("quem-sou-eu", "view");
  }, []);

  function startGame(nextJourneyId = journeyId) {
    setJourneyId(nextJourneyId);
    setCurrentIndex(0);
    setVisibleClues(1);
    setSelectedAnswer(null);
    setAnswers([]);
    setPhase("playing");
    trackGameEvent("quem-sou-eu", "start", { journey: nextJourneyId });
  }

  function revealClue() {
    if (!currentCharacter || selectedAnswer !== null) return;
    setVisibleClues((count) => Math.min(count + 1, currentCharacter.clues.length));
  }

  function answer(option: string) {
    if (!currentCharacter || selectedAnswer !== null) return;
    const correct = option === currentCharacter.name;
    const points = correct ? pointsByClue[visibleClues - 1] ?? 20 : 0;
    setSelectedAnswer(option);
    setAnswers((current) => [...current, { correct, cluesUsed: visibleClues, points }]);
  }

  function continueGame() {
    if (currentIndex === characters.length - 1) {
      const finalAnswers = answers;
      const finalScore = finalAnswers.reduce((total, answer) => total + answer.points, 0);
      trackGameEvent("quem-sou-eu", "finish", {
        journey: journeyId,
        score: finalScore,
        correct: finalAnswers.filter((answer) => answer.correct).length,
        total: characters.length,
      });
      setPhase("finished");
      return;
    }
    setCurrentIndex((index) => index + 1);
    setVisibleClues(1);
    setSelectedAnswer(null);
  }

  if (phase === "setup") {
    return (
      <section id="jogo" className="paper-texture scroll-mt-20 py-12 sm:py-16">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Jogo de pistas</span>
            <h2 className="section-title mx-auto">Escolha sua jornada.</h2>
            <p className="section-copy mx-auto">
              Cada rodada reúne 12 personagens. Comece com uma pista e decida entre responder ou revelar outra.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {whoAmIJourneys.map((journey, index) => (
              <article key={journey.id} className="card flex h-full flex-col !rounded-lg p-6 sm:p-8">
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--gold-ink)]">
                  Jornada {index + 1}
                </span>
                <h3 className="mt-3 font-serif text-3xl text-[var(--navy)]">{journey.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-[var(--muted)]">{journey.description}</p>
                <dl className="mt-6 grid grid-cols-2 border-y border-[var(--border)] py-4 text-sm">
                  <div><dt className="font-bold text-[var(--navy)]">Rodada</dt><dd className="mt-1 text-[var(--muted)]">12 personagens</dd></div>
                  <div><dt className="font-bold text-[var(--navy)]">Nível</dt><dd className="mt-1 text-[var(--muted)]">{journey.level}</dd></div>
                </dl>
                <button type="button" onClick={() => startGame(journey.id)} className="button-primary mt-6 self-start">
                  Começar jornada <span aria-hidden="true">→</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (phase === "finished") {
    const journey = whoAmIJourneys.find((item) => item.id === journeyId);
    return (
      <section id="jogo" className="paper-texture scroll-mt-20 py-12 sm:py-16">
        <div className="container-site">
          <div className="card mx-auto max-w-3xl overflow-hidden !rounded-lg text-center">
            <div className="bg-[var(--navy)] px-6 py-8 text-white">
              <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--gold)]">Jornada concluída</span>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">{score} pontos</h2>
              <p className="mt-2 text-white/75">{journey?.title}</p>
            </div>
            <div className="p-6 sm:p-10">
              <dl className="mx-auto grid max-w-xl grid-cols-3 border-y border-[var(--border)] py-6">
                <div><dt className="text-xs text-[var(--muted)]">Acertos</dt><dd className="mt-2 font-serif text-3xl text-[var(--navy)]">{correctAnswers}</dd></div>
                <div className="border-x border-[var(--border)]"><dt className="text-xs text-[var(--muted)]">Erros</dt><dd className="mt-2 font-serif text-3xl text-[var(--navy)]">{answers.length - correctAnswers}</dd></div>
                <div><dt className="text-xs text-[var(--muted)]">Média de pistas</dt><dd className="mt-2 font-serif text-3xl text-[var(--navy)]">{averageClues.toFixed(1).replace(".", ",")}</dd></div>
              </dl>
              <ResultShare
                game="quem-sou-eu"
                title="Meu resultado no Quem sou eu?"
                text={`Fiz ${score} pontos e reconheci ${correctAnswers} de ${characters.length} personagens no Quem sou eu? do Bíblia Clube.`}
                path="/quem-sou-eu"
                eventProperties={{ journey: journeyId, score, correct: correctAnswers }}
              />
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <button type="button" onClick={() => startGame(journeyId)} className="button-primary">Jogar novamente <span aria-hidden="true">↻</span></button>
                <button type="button" onClick={() => setPhase("setup")} className="button-secondary">Trocar jornada</button>
                <Link href="/#jogos" className="button-secondary">Outros jogos</Link>
              </div>
              <FeedbackPrompt game="quem-sou-eu" label="quem_sou_eu_result" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!currentCharacter) return null;
  const answeredCorrectly = selectedAnswer === currentCharacter.name;
  const availablePoints = pointsByClue[visibleClues - 1] ?? 20;
  const progress = ((currentIndex + 1) / characters.length) * 100;

  return (
    <section id="jogo" className="paper-texture scroll-mt-20 py-8 sm:py-12">
      <div className="container-site">
        <div className="card mx-auto max-w-4xl overflow-hidden !rounded-lg">
          <div className="bg-[var(--navy)] px-5 py-6 text-white sm:px-8">
            <div className="flex items-start justify-between gap-4 text-sm">
              <div><strong className="block text-[var(--gold)]">Quem sou eu?</strong><span className="mt-1 block text-white/70">Personagem {currentIndex + 1} de {characters.length}</span></div>
              <div className="text-right"><strong className="block text-base">{score} pontos</strong><span className="text-white/70">Vale {availablePoints}</span></div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-label="Progresso da jornada" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
              <div className="h-full rounded-full bg-[var(--gold)] transition-[width]" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div><p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--olive-dark)]">Pistas reveladas</p><h2 className="mt-2 font-serif text-3xl text-[var(--navy)]">Quem é este personagem?</h2></div>
              <span className="text-sm font-bold text-[var(--muted)]">{visibleClues} de {currentCharacter.clues.length}</span>
            </div>

            <ol className="mt-6 grid gap-3" aria-live="polite">
              {currentCharacter.clues.slice(0, visibleClues).map((clue, index) => (
                <li key={clue} className="flex gap-4 border-l-2 border-[var(--gold)] bg-[var(--gold-soft)] p-4 leading-7 text-[var(--foreground)]">
                  <strong className="text-[var(--gold-ink)]">{String(index + 1).padStart(2, "0")}</strong><span>{clue}</span>
                </li>
              ))}
            </ol>

            {selectedAnswer === null ? (
              <>
                <fieldset className="mt-7">
                  <legend className="sr-only">Escolha o personagem</legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {currentCharacter.options.map((option, index) => (
                      <button key={option} type="button" onClick={() => answer(option)} className="flex min-h-16 items-center gap-3 rounded-lg border border-[var(--border)] bg-white p-4 text-left font-bold transition hover:border-[var(--gold)] hover:bg-[var(--gold-soft)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]">
                        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[var(--border)] text-sm">{String.fromCharCode(65 + index)}</span>{option}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <div className="mt-6 flex justify-center">
                  <button type="button" onClick={revealClue} disabled={visibleClues === currentCharacter.clues.length} className="button-secondary disabled:cursor-not-allowed disabled:opacity-45">
                    {visibleClues === currentCharacter.clues.length ? "Todas as pistas reveladas" : `Revelar outra pista (-${availablePoints - (pointsByClue[visibleClues] ?? 20)} pontos)`}
                  </button>
                </div>
              </>
            ) : (
              <div className="mt-7 grid gap-4 sm:grid-cols-[minmax(0,1fr)_13rem] sm:items-start">
                <div aria-live="polite" className={`rounded-lg border p-5 ${answeredCorrectly ? "border-[var(--success)]/25 bg-[var(--success-soft)]" : "border-[var(--danger)]/25 bg-[var(--danger-soft)]"}`}>
                  <strong className="text-lg text-[var(--navy)]">{answeredCorrectly ? `Correto! +${availablePoints} pontos` : `A resposta é ${currentCharacter.name}.`}</strong>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{currentCharacter.explanation}</p>
                  <p className="mt-3 text-sm font-extrabold text-[var(--olive-dark)]">Referência: {currentCharacter.reference}</p>
                </div>
                <button type="button" onClick={continueGame} className="button-primary order-first w-full sm:order-none">
                  {currentIndex === characters.length - 1 ? "Ver resultado" : "Próximo personagem"} <span aria-hidden="true">→</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
