"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FeedbackPrompt } from "@/components/FeedbackPrompt";
import {
  completePhraseQuestions,
  type CompletePhraseQuestion,
} from "@/data/completePhraseQuestions";
import { trackGameEvent } from "@/lib/analytics";

type Phase = "setup" | "playing" | "finished";
type RoundQuestion = CompletePhraseQuestion & { shuffledOptions: string[] };

const ROUND_SIZE = 10;

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

function buildRound() {
  return shuffle(completePhraseQuestions)
    .slice(0, ROUND_SIZE)
    .map((question) => ({
      ...question,
      shuffledOptions: shuffle(question.options),
    }));
}

function getResultMessage(percentage: number) {
  if (percentage >= 80) return "Excelente memória! Você reconheceu muito bem as passagens.";
  if (percentage >= 50) return "Muito bom! Cada frase completada ajuda a guardar mais da Palavra.";
  return "Continue praticando. Uma nova rodada já traz outras oportunidades de aprender.";
}

export function CompletePhraseGame() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [questions, setQuestions] = useState<RoundQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const currentQuestion = questions[currentIndex];
  const progress = questions.length
    ? ((currentIndex + 1) / questions.length) * 100
    : 0;
  const percentage = questions.length
    ? Math.round((score / questions.length) * 100)
    : 0;

  useEffect(() => {
    trackGameEvent("complete-a-frase", "view");
  }, []);

  function startGame() {
    const nextQuestions = buildRound();

    setQuestions(nextQuestions);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setPhase("playing");
    trackGameEvent("complete-a-frase", "start", {
      questions: nextQuestions.length,
    });
  }

  function selectAnswer(answer: string) {
    if (selectedAnswer !== null || !currentQuestion) return;

    setSelectedAnswer(answer);

    if (answer === currentQuestion.answer) {
      const nextStreak = streak + 1;
      setScore((currentScore) => currentScore + 1);
      setStreak(nextStreak);
      setBestStreak((currentBest) => Math.max(currentBest, nextStreak));
    } else {
      setStreak(0);
    }
  }

  function goToNextQuestion() {
    if (currentIndex === questions.length - 1) {
      trackGameEvent("complete-a-frase", "finish", {
        questions: questions.length,
        score,
        percentage,
        best_streak: bestStreak,
      });
      setPhase("finished");
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelectedAnswer(null);
  }

  if (phase === "setup") {
    return (
      <section className="paper-texture min-h-[calc(100vh-5rem)] py-12 sm:py-16">
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">Novo jogo</span>
            <h1 className="section-title mx-auto">
              Complete a frase e reconheça passagens da Bíblia.
            </h1>
            <p className="section-copy mx-auto">
              Escolha a continuação correta em uma rodada rápida com dez
              frases, referências e o texto completo após cada resposta.
            </p>
          </div>

          <div className="card mx-auto mt-10 max-w-3xl overflow-hidden !rounded-lg">
            <div className="grid gap-0 sm:grid-cols-[1fr_15rem]">
              <div className="p-7 sm:p-9">
                <h2 className="font-serif text-2xl text-[var(--navy)]">
                  Como funciona
                </h2>
                <ul className="mt-5 grid gap-4 text-[var(--muted)]">
                  <li className="flex gap-3">
                    <strong className="text-[var(--gold)]">01</strong>
                    Complete uma frase por vez escolhendo entre quatro opções.
                  </li>
                  <li className="flex gap-3">
                    <strong className="text-[var(--gold)]">02</strong>
                    Confira a passagem completa e sua referência.
                  </li>
                  <li className="flex gap-3">
                    <strong className="text-[var(--gold)]">03</strong>
                    Some acertos e tente alcançar a melhor sequência.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center bg-[var(--navy)] p-7 text-white sm:p-8">
                <span className="text-sm font-bold text-[var(--gold)]">
                  Rodada
                </span>
                <strong className="mt-2 font-serif text-4xl">10 frases</strong>
                <span className="mt-2 text-sm leading-6 text-white/65">
                  Sem cronômetro e sem cadastro.
                </span>
                <button
                  type="button"
                  onClick={startGame}
                  className="button-light mt-6 self-center whitespace-nowrap !min-h-11 !px-5 !py-2 !text-sm"
                >
                  Começar rodada <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-[var(--muted)]">
            Textos da Bíblia Portuguesa Mundial, tradução em domínio público.
            A edição está em revisão contínua. {" "}
            <a
              href="https://ebible.org/porbrbsl/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[var(--olive-dark)] underline"
            >
              Consultar a fonte
            </a>
          </p>
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
                {score} de {questions.length} frases
              </h1>
            </div>
            <div className="p-7 sm:p-10">
              <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
                <div className="border border-[var(--border)] p-4">
                  <strong className="block font-serif text-3xl text-[var(--navy)]">
                    {percentage}%
                  </strong>
                  <span className="mt-1 block text-sm text-[var(--muted)]">
                    aproveitamento
                  </span>
                </div>
                <div className="border border-[var(--border)] p-4">
                  <strong className="block font-serif text-3xl text-[var(--navy)]">
                    {bestStreak}
                  </strong>
                  <span className="mt-1 block text-sm text-[var(--muted)]">
                    melhor sequência
                  </span>
                </div>
              </div>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                {getResultMessage(percentage)}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button type="button" onClick={startGame} className="button-primary">
                  Jogar novamente <span aria-hidden="true">↻</span>
                </button>
                <Link href="/#jogos" className="button-secondary">
                  Ver outros jogos
                </Link>
              </div>
              <FeedbackPrompt game="complete-a-frase" label="complete_a_frase_result" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!currentQuestion) return null;

  const answeredCorrectly = selectedAnswer === currentQuestion.answer;

  return (
    <section className="paper-texture min-h-[calc(100vh-5rem)] py-8 sm:py-12">
      <div className="container-site">
        <div className="card mx-auto max-w-[900px] overflow-hidden !rounded-lg">
          <div className="bg-[var(--navy)] px-6 py-6 text-white sm:px-9">
            <div className="flex items-center justify-between gap-4 text-sm">
              <span>
                <strong className="block text-[var(--gold)]">Complete a frase</strong>
                <span className="mt-1 block text-white/70">
                  Frase {currentIndex + 1} de {questions.length}
                </span>
              </span>
              <span className="text-right text-white/70" aria-live="polite">
                <strong className="block text-base text-white">{score} acertos</strong>
                Sequência: {streak}
              </span>
            </div>
            <div
              className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"
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
          </div>

          <div className="p-6 sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--olive)]">
              Escolha a continuação correta
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-[var(--navy)] sm:text-4xl">
              {currentQuestion.prompt}
            </h1>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {currentQuestion.shuffledOptions.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrect =
                  selectedAnswer !== null && option === currentQuestion.answer;
                const isWrong = isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    type="button"
                    disabled={selectedAnswer !== null}
                    onClick={() => selectAnswer(option)}
                    className={`flex min-h-20 min-w-0 items-center gap-3 border p-4 text-left transition ${
                      isCorrect
                        ? "border-[var(--success)] bg-[var(--success-soft)] text-[var(--success)]"
                        : isWrong
                          ? "border-[var(--danger)] bg-[var(--danger-soft)] text-[var(--danger)]"
                          : "border-[var(--border)] bg-white text-[var(--foreground)] hover:border-[var(--gold)] hover:bg-[var(--gold-soft)] disabled:cursor-default disabled:hover:border-[var(--border)] disabled:hover:bg-white"
                    }`}
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-current/25 text-sm font-extrabold">
                      {isCorrect ? "✓" : isWrong ? "×" : String.fromCharCode(65 + index)}
                    </span>
                    <span className="min-w-0 break-words font-bold">{option}</span>
                  </button>
                );
              })}
            </div>

            {selectedAnswer !== null ? (
              <div className="mt-7 grid gap-4 sm:grid-cols-[minmax(0,1fr)_12rem] sm:items-start">
                <div
                  aria-live="polite"
                  className={`border p-5 ${
                    answeredCorrectly
                      ? "border-[var(--success)]/20 bg-[var(--success-soft)]"
                      : "border-[var(--danger)]/20 bg-[var(--danger-soft)]"
                  }`}
                >
                  <strong className="text-[var(--navy)]">
                    {answeredCorrectly
                      ? "Resposta correta!"
                      : "Quase! Veja a frase completa:"}
                  </strong>
                  <blockquote className="mt-3 font-serif text-lg leading-7 text-[var(--navy)]">
                    “{currentQuestion.fullText}”
                  </blockquote>
                  <p className="mt-3 text-sm font-bold text-[var(--olive-dark)]">
                    {currentQuestion.reference}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={goToNextQuestion}
                  className="button-primary order-first w-full sm:order-none"
                >
                  {currentIndex === questions.length - 1
                    ? "Ver resultado"
                    : "Próxima frase"}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            ) : (
              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  disabled
                  className="button-primary disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Próxima frase <span aria-hidden="true">→</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
