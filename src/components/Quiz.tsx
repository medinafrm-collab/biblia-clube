"use client";

import { useState } from "react";
import {
  quizQuestions,
  type QuizTopicId,
} from "@/data/quizQuestions";
import { quizTopics } from "@/data/quizTopics";

type QuizProps = {
  initialTopic?: QuizTopicId;
  showIntroduction?: boolean;
  showTopicSelector?: boolean;
};

function getResultMessage(percentage: number) {
  if (percentage <= 40) {
    return "Continue praticando! Cada resposta é uma oportunidade de aprender mais.";
  }

  if (percentage <= 70) {
    return "Muito bom! Você já conhece várias histórias bíblicas.";
  }

  return "Excelente! Você mandou muito bem no Quiz Bíblico.";
}

export function Quiz({
  initialTopic = "geral",
  showIntroduction = true,
  showTopicSelector = true,
}: QuizProps = {}) {
  const [selectedTopic, setSelectedTopic] =
    useState<QuizTopicId>(initialTopic);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const activeQuestions = quizQuestions.filter((question) =>
    question.topics.includes(selectedTopic),
  );
  const selectedTopicLabel =
    quizTopics.find((topic) => topic.id === selectedTopic)?.label ?? "Geral";
  const currentQuestion = activeQuestions[currentIndex];
  const progress = ((currentIndex + 1) / activeQuestions.length) * 100;
  const percentage = Math.round((score / activeQuestions.length) * 100);

  function selectAnswer(answer: string) {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);
    if (answer === currentQuestion.correctAnswer) {
      setScore((currentScore) => currentScore + 1);
    }
  }

  function goToNextQuestion() {
    if (currentIndex === activeQuestions.length - 1) {
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

  function changeTopic(topic: QuizTopicId) {
    setSelectedTopic(topic);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
  }

  return (
    <section id="quiz" className="section-space paper-texture">
      <div className="container-site">
        {showIntroduction && (
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Quiz bíblico grátis</span>
            <h2 className="section-title mx-auto">
              Escolha seu desafio bíblico.
            </h2>
            <p className="section-copy mx-auto">
              Jogue uma rodada geral ou concentre-se em um assunto para
              aprender um pouco mais a cada resposta.
            </p>
          </div>
        )}

        {showTopicSelector && (
          <div
            id="quiz-topics"
            className="mx-auto mt-10 grid max-w-[820px] gap-1.5 rounded-lg border border-[var(--border)] bg-white p-1.5 sm:grid-cols-2 lg:grid-cols-4"
            role="radiogroup"
            aria-label="Tema do quiz"
          >
            {quizTopics.map((topic) => {
              const questionCount = quizQuestions.filter((question) =>
                question.topics.includes(topic.id),
              ).length;
              const isActive = selectedTopic === topic.id;

              return (
                <button
                  key={topic.id}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  onClick={() => changeTopic(topic.id)}
                  className={`min-h-14 rounded-md px-4 py-2 text-sm font-bold transition ${
                    isActive
                      ? "bg-[var(--navy)] text-white shadow-sm"
                      : "text-[var(--muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--navy)]"
                  }`}
                >
                  <span className="block">{topic.label}</span>
                  <span
                    className={`mt-0.5 block text-xs font-normal ${
                      isActive ? "text-white/65" : "text-[var(--muted)]"
                    }`}
                  >
                    {questionCount} perguntas
                  </span>
                </button>
              );
            })}
          </div>
        )}

        <div className="card mx-auto mt-12 max-w-[820px] overflow-hidden !rounded-[2rem]">
          {!isFinished ? (
            <>
              <div className="bg-[var(--navy)] px-6 py-6 text-white sm:px-10">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span>
                    <strong className="block text-[var(--gold)]">
                      {selectedTopicLabel}
                    </strong>
                    <span className="mt-1 block text-white/70">
                      Pergunta {currentIndex + 1} de {activeQuestions.length}
                    </span>
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

                {selectedAnswer !== null ? (
                  <div className="mt-7 grid gap-4 sm:grid-cols-[minmax(0,1fr)_12rem] sm:items-start">
                    <div
                      aria-live="polite"
                      className={`rounded-2xl border p-5 ${
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
                    <button
                      type="button"
                      onClick={goToNextQuestion}
                      className="button-primary order-first w-full sm:order-none"
                    >
                      {currentIndex === activeQuestions.length - 1
                        ? "Ver meu resultado"
                        : "Próxima pergunta"}
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
                      {currentIndex === activeQuestions.length - 1
                        ? "Ver meu resultado"
                        : "Próxima pergunta"}
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                )}
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
                Você acertou {score} de {activeQuestions.length}
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
