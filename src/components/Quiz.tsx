"use client";

import { useState } from "react";
import { quizQuestions } from "@/data/quizQuestions";

function getResultMessage(percentage: number) {
  if (percentage <= 40) {
    return "Continue praticando! Cada resposta é uma oportunidade de aprender mais.";
  }

  if (percentage <= 70) {
    return "Muito bom! Você já conhece várias histórias bíblicas.";
  }

  return "Excelente! Você mandou muito bem no Quiz Bíblico.";
}

export function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];
  const progress = ((currentIndex + 1) / quizQuestions.length) * 100;
  const percentage = Math.round((score / quizQuestions.length) * 100);

  function selectAnswer(answer: string) {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);
    if (answer === currentQuestion.correctAnswer) {
      setScore((currentScore) => currentScore + 1);
    }
  }

  function goToNextQuestion() {
    if (currentIndex === quizQuestions.length - 1) {
      setIsFinished(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelectedAnswer(null);
  }

  function restartQuiz() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
  }

  return (
    <section id="quiz" className="section-space paper-texture">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Quiz Bíblico Geral</span>
          <h2 className="section-title mx-auto">
            Quanto você conhece das histórias da Bíblia?
          </h2>
          <p className="section-copy mx-auto">
            São 12 perguntas para testar seus conhecimentos e aprender um
            pouco mais a cada resposta.
          </p>
        </div>

        <div className="card mx-auto mt-12 max-w-4xl overflow-hidden !rounded-[2rem]">
          {!isFinished ? (
            <>
              <div className="bg-[var(--navy)] px-6 py-6 text-white sm:px-10">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-bold text-[var(--gold)]">
                    Pergunta {currentIndex + 1} de {quizQuestions.length}
                  </span>
                  <span aria-live="polite" className="text-white/70">
                    {score} {score === 1 ? "acerto" : "acertos"}
                  </span>
                </div>
                <div
                  className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"
                  role="progressbar"
                  aria-label="Progresso do quiz"
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

              <div className="p-6 sm:p-10">
                <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--olive)]">
                  Escolha uma alternativa
                </p>
                <h3 className="mt-4 max-w-3xl font-serif text-2xl leading-tight text-[var(--navy)] sm:text-4xl">
                  {currentQuestion.question}
                </h3>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrect =
                      selectedAnswer !== null &&
                      option === currentQuestion.correctAnswer;
                    const isWrong = isSelected && !isCorrect;

                    return (
                      <button
                        key={option}
                        type="button"
                        disabled={selectedAnswer !== null}
                        onClick={() => selectAnswer(option)}
                        className={`flex min-h-16 items-center gap-4 rounded-2xl border p-4 text-left transition ${
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
                        <span className="font-bold">{option}</span>
                      </button>
                    );
                  })}
                </div>

                {selectedAnswer !== null && (
                  <div
                    aria-live="polite"
                    className={`mt-7 rounded-2xl border p-5 ${
                      selectedAnswer === currentQuestion.correctAnswer
                        ? "border-[var(--success)]/20 bg-[var(--success-soft)]"
                        : "border-[var(--danger)]/20 bg-[var(--danger-soft)]"
                    }`}
                  >
                    <strong className="text-[var(--navy)]">
                      {selectedAnswer === currentQuestion.correctAnswer
                        ? "Resposta correta!"
                        : `A resposta correta é ${currentQuestion.correctAnswer}.`}
                    </strong>
                    <p className="mt-2 leading-7 text-[var(--muted)]">
                      {currentQuestion.explanation}
                    </p>
                    <p className="mt-2 text-sm font-bold text-[var(--olive-dark)]">
                      Referência: {currentQuestion.reference}
                    </p>
                  </div>
                )}

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    disabled={selectedAnswer === null}
                    onClick={goToNextQuestion}
                    className="button-primary disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {currentIndex === quizQuestions.length - 1
                      ? "Ver meu resultado"
                      : "Próxima pergunta"}
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="p-7 text-center sm:p-12">
              <span className="mx-auto grid size-20 place-items-center rounded-full bg-[var(--gold-soft)] text-4xl">
                {percentage >= 71 ? "★" : percentage >= 41 ? "✓" : "↗"}
              </span>
              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--olive)]">
                Rodada concluída
              </p>
              <h3 className="mt-3 font-serif text-4xl text-[var(--navy)] sm:text-5xl">
                Você acertou {score} de {quizQuestions.length}
              </h3>
              <div className="mx-auto mt-6 flex size-32 items-center justify-center rounded-full border-[10px] border-[var(--surface-soft)] bg-white shadow-inner">
                <strong className="font-serif text-3xl text-[var(--olive-dark)]">
                  {percentage}%
                </strong>
              </div>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                {getResultMessage(percentage)}
              </p>
              <button
                type="button"
                onClick={restartQuiz}
                className="button-primary mt-8"
              >
                Jogar novamente
                <span aria-hidden="true">↻</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
