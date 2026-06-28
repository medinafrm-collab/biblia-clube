"use client";

import { useEffect, useState } from "react";
import {
  quizQuestions,
  type QuizQuestion,
  type QuizTopicId,
} from "@/data/quizQuestions";
import { quizTopics } from "@/data/quizTopics";

type Phase = "setup" | "playing" | "finished";
type RoundResult = "correct" | "wrong" | "timeout" | "skipped" | null;

type Team = {
  id: number;
  name: string;
  score: number;
  color: string;
};

const teamDefaults = [
  { name: "Equipe Azul", color: "#26566b" },
  { name: "Equipe Dourada", color: "#c6a35d" },
  { name: "Equipe Verde", color: "#53633a" },
  { name: "Equipe Coral", color: "#a84f46" },
  { name: "Equipe Violeta", color: "#6f5b86" },
  { name: "Equipe Turquesa", color: "#39765a" },
];

function shuffleQuestions(questions: QuizQuestion[]) {
  const shuffled = [...questions];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

export function GroupMode() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [teamCount, setTeamCount] = useState(2);
  const [teamNames, setTeamNames] = useState(
    teamDefaults.map((team) => team.name),
  );
  const [selectedTopic, setSelectedTopic] =
    useState<QuizTopicId>("geral");
  const [roundCount, setRoundCount] = useState(5);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [allowRebound, setAllowRebound] = useState(true);
  const [teams, setTeams] = useState<Team[]>([]);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answeringTeamIndex, setAnsweringTeamIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isRebound, setIsRebound] = useState(false);
  const [isResolved, setIsResolved] = useState(false);
  const [roundResult, setRoundResult] = useState<RoundResult>(null);
  const [pointsAwarded, setPointsAwarded] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const availableQuestionCount = quizQuestions.filter((question) =>
    question.topics.includes(selectedTopic),
  ).length;
  const roundOptions = [5, 10, availableQuestionCount]
    .filter((value) => value <= availableQuestionCount)
    .filter((value, index, values) => values.indexOf(value) === index);
  const currentQuestion = questions[questionIndex];
  const currentTeam = teams[answeringTeamIndex];
  const ranking = [...teams].sort((a, b) => b.score - a.score);
  const topScore = ranking[0]?.score ?? 0;
  const winners = ranking.filter((team) => team.score === topScore);

  useEffect(() => {
    if (
      phase !== "playing" ||
      timerSeconds === 0 ||
      isPaused ||
      isResolved ||
      timeLeft <= 0
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      if (timeLeft === 1) {
        setTimeLeft(0);
        setIsResolved(true);
        setRoundResult("timeout");
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [phase, timerSeconds, isPaused, isResolved, timeLeft]);

  function updateTeamName(index: number, name: string) {
    setTeamNames((current) =>
      current.map((teamName, teamIndex) =>
        teamIndex === index ? name : teamName,
      ),
    );
  }

  function changeTopic(topic: QuizTopicId) {
    const questionCount = quizQuestions.filter((question) =>
      question.topics.includes(topic),
    ).length;

    setSelectedTopic(topic);
    if (roundCount > questionCount) setRoundCount(questionCount);
  }

  function startGame() {
    const availableQuestions = quizQuestions.filter((question) =>
      question.topics.includes(selectedTopic),
    );
    const gameQuestions = shuffleQuestions(availableQuestions).slice(
      0,
      Math.min(roundCount, availableQuestions.length),
    );
    const gameTeams = teamDefaults.slice(0, teamCount).map((team, index) => ({
      id: index + 1,
      name: teamNames[index].trim() || `Equipe ${index + 1}`,
      score: 0,
      color: team.color,
    }));

    setTeams(gameTeams);
    setQuestions(gameQuestions);
    setQuestionIndex(0);
    setAnsweringTeamIndex(0);
    setSelectedAnswers([]);
    setIsRebound(false);
    setIsResolved(false);
    setRoundResult(null);
    setPointsAwarded(0);
    setTimeLeft(timerSeconds);
    setIsPaused(false);
    setPhase("playing");
  }

  function awardPoints(teamIndex: number, points: number) {
    setTeams((current) =>
      current.map((team, index) =>
        index === teamIndex
          ? { ...team, score: Math.max(0, team.score + points) }
          : team,
      ),
    );
  }

  function selectAnswer(answer: string) {
    if (isResolved || isPaused || selectedAnswers.includes(answer)) return;

    const isCorrect = answer === currentQuestion.correctAnswer;
    setSelectedAnswers((current) => [...current, answer]);

    if (isCorrect) {
      const points = isRebound ? 5 : 10;
      awardPoints(answeringTeamIndex, points);
      setPointsAwarded(points);
      setRoundResult("correct");
      setIsResolved(true);
      return;
    }

    if (allowRebound && !isRebound && teams.length > 1) {
      setIsRebound(true);
      setAnsweringTeamIndex((answeringTeamIndex + 1) % teams.length);
      setTimeLeft(timerSeconds);
      return;
    }

    setRoundResult("wrong");
    setIsResolved(true);
  }

  function skipQuestion() {
    if (isResolved) return;
    setRoundResult("skipped");
    setIsResolved(true);
  }

  function goToNextQuestion() {
    if (questionIndex === questions.length - 1) {
      setPhase("finished");
      return;
    }

    const nextQuestionIndex = questionIndex + 1;
    setQuestionIndex(nextQuestionIndex);
    setAnsweringTeamIndex(nextQuestionIndex % teams.length);
    setSelectedAnswers([]);
    setIsRebound(false);
    setIsResolved(false);
    setRoundResult(null);
    setPointsAwarded(0);
    setTimeLeft(timerSeconds);
    setIsPaused(false);
  }

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      // Fullscreen availability depends on the browser and device.
    }
  }

  if (phase === "setup") {
    return (
      <section className="paper-texture min-h-[calc(100vh-5rem)] py-12 sm:py-16">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Modo Grupo</span>
            <h1 className="section-title mx-auto">
              Prepare as equipes e comece a rodada.
            </h1>
            <p className="section-copy mx-auto">
              Joguem no mesmo aparelho, alternem os turnos e acompanhem o
              placar em tempo real.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-lg border border-[var(--border)] bg-white p-6 shadow-sm sm:p-9">
            <div>
              <label className="text-sm font-extrabold text-[var(--navy)]">
                Quantidade de equipes
              </label>
              <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Quantidade de equipes">
                {[2, 3, 4, 5, 6].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setTeamCount(count)}
                    className={`grid size-11 place-items-center rounded-md border font-bold ${teamCount === count ? "border-[var(--navy)] bg-[var(--navy)] text-white" : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--gold)]"}`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {teamDefaults.slice(0, teamCount).map((team, index) => (
                <label key={team.color} className="text-sm font-bold text-[var(--navy)]">
                  <span className="mb-2 flex items-center gap-2">
                    <span className="size-3 rounded-full" style={{ backgroundColor: team.color }} />
                    Equipe {index + 1}
                  </span>
                  <input
                    value={teamNames[index]}
                    onChange={(event) => updateTeamName(index, event.target.value)}
                    maxLength={24}
                    className="min-h-12 w-full rounded-md border border-[var(--border)] px-4 font-normal outline-none focus:border-[var(--gold)]"
                  />
                </label>
              ))}
            </div>

            <div className="mt-8 grid gap-6 border-t border-[var(--border)] pt-8 sm:grid-cols-2">
              <label className="text-sm font-extrabold text-[var(--navy)]">
                Tema
                <select
                  value={selectedTopic}
                  onChange={(event) => changeTopic(event.target.value as QuizTopicId)}
                  className="mt-2 min-h-12 w-full rounded-md border border-[var(--border)] bg-white px-4 font-normal"
                >
                  {quizTopics.map((topic) => (
                    <option key={topic.id} value={topic.id}>{topic.label}</option>
                  ))}
                </select>
              </label>

              <label className="text-sm font-extrabold text-[var(--navy)]">
                Quantidade de perguntas
                <select
                  value={roundCount}
                  onChange={(event) => setRoundCount(Number(event.target.value))}
                  className="mt-2 min-h-12 w-full rounded-md border border-[var(--border)] bg-white px-4 font-normal"
                >
                  {roundOptions.map((count) => (
                    <option key={count} value={count}>{count} perguntas</option>
                  ))}
                </select>
              </label>
            </div>

            <fieldset className="mt-7">
              <legend className="text-sm font-extrabold text-[var(--navy)]">Tempo por pergunta</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {[
                  { value: 0, label: "Sem tempo" },
                  { value: 30, label: "30 segundos" },
                  { value: 60, label: "60 segundos" },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setTimerSeconds(option.value)}
                    className={`min-h-12 rounded-md border px-4 text-sm font-bold ${timerSeconds === option.value ? "border-[var(--navy)] bg-[var(--navy)] text-white" : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--gold)]"}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="mt-7 flex cursor-pointer items-start gap-3 rounded-md bg-[var(--surface-soft)] p-4">
              <input
                type="checkbox"
                checked={allowRebound}
                onChange={(event) => setAllowRebound(event.target.checked)}
                className="mt-1 size-4 accent-[var(--navy)]"
              />
              <span>
                <strong className="block text-sm text-[var(--navy)]">Ativar rebote</strong>
                <span className="mt-1 block text-sm leading-6 text-[var(--muted)]">
                  Após um erro, a próxima equipe pode responder e ganhar 5 pontos.
                </span>
              </span>
            </label>

            <div className="mt-8 flex justify-end">
              <button type="button" onClick={startGame} className="button-primary">
                Iniciar partida <span aria-hidden="true">→</span>
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
            <span className="eyebrow">Partida concluída</span>
            <h1 className="section-title mx-auto">
              {winners.length > 1
                ? `Empate entre ${winners.map((team) => team.name).join(" e ")}`
                : `${winners[0]?.name} venceu a rodada!`}
            </h1>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-[var(--border)] bg-white p-6 sm:p-9">
            <ol className="grid gap-3">
              {ranking.map((team, index) => (
                <li key={team.id} className="flex items-center gap-4 rounded-md border border-[var(--border)] p-4">
                  <strong className="grid size-10 place-items-center rounded-full bg-[var(--surface-soft)] text-[var(--navy)]">{index + 1}</strong>
                  <span className="size-3 rounded-full" style={{ backgroundColor: team.color }} />
                  <span className="min-w-0 flex-1 truncate font-bold text-[var(--navy)]">{team.name}</span>
                  <strong className="text-xl text-[var(--olive-dark)]">{team.score} pts</strong>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button type="button" onClick={startGame} className="button-primary">Jogar novamente</button>
              <button type="button" onClick={() => setPhase("setup")} className="button-secondary">Nova configuração</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="paper-texture min-h-[calc(100vh-5rem)] py-8 sm:py-10">
      <div className="container-site">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="eyebrow">Modo Grupo</span>
            <h1 className="mt-2 font-serif text-3xl text-[var(--navy)]">Placar da partida</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {timerSeconds > 0 && (
              <button type="button" onClick={() => setIsPaused((current) => !current)} className="button-secondary !min-h-11 !px-4">
                {isPaused ? "Continuar" : "Pausar"}
              </button>
            )}
            <button type="button" onClick={toggleFullscreen} className="button-secondary !min-h-11 !px-4">Tela cheia</button>
            <button type="button" onClick={() => setPhase("finished")} className="button-secondary !min-h-11 !px-4">Encerrar</button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((team, index) => (
            <div key={team.id} className={`rounded-md border bg-white p-4 ${index === answeringTeamIndex ? "border-[var(--gold)] shadow-sm" : "border-[var(--border)]"}`}>
              <div className="flex items-center gap-3">
                <span className="size-3 rounded-full" style={{ backgroundColor: team.color }} />
                <strong className="min-w-0 flex-1 truncate text-[var(--navy)]">{team.name}</strong>
                <strong className="text-xl text-[var(--olive-dark)]">{team.score}</strong>
              </div>
              <div className="mt-3 flex justify-end gap-2">
                <button type="button" aria-label={`Retirar 5 pontos de ${team.name}`} onClick={() => awardPoints(index, -5)} className="grid size-8 place-items-center rounded-md border border-[var(--border)] font-bold text-[var(--muted)]">−</button>
                <button type="button" aria-label={`Adicionar 5 pontos a ${team.name}`} onClick={() => awardPoints(index, 5)} className="grid size-8 place-items-center rounded-md border border-[var(--border)] font-bold text-[var(--navy)]">+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-5xl overflow-hidden rounded-lg border border-[var(--border)] bg-white shadow-sm">
          <div className="bg-[var(--navy)] px-6 py-5 text-white sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <strong className="block text-[var(--gold)]">{currentTeam?.name}</strong>
                <span className="mt-1 block text-sm text-white/70">
                  {isRebound ? "Chance de rebote por 5 pontos" : "Vale 10 pontos"}
                </span>
              </div>
              <div className="text-right">
                <strong className="block">Pergunta {questionIndex + 1} de {questions.length}</strong>
                {timerSeconds > 0 && (
                  <span className={`mt-1 block text-sm ${timeLeft <= 10 ? "text-[var(--gold)]" : "text-white/70"}`}>
                    {isPaused ? "Pausado" : `${timeLeft}s`}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/15">
              <div className="h-full rounded-full bg-[var(--gold)] transition-[width]" style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }} />
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <h2 className="font-serif text-2xl leading-tight text-[var(--navy)] sm:text-4xl">{currentQuestion.question}</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {currentQuestion.options.map((option, index) => {
                const isCorrect = isResolved && option === currentQuestion.correctAnswer;
                const isWrong = selectedAnswers.includes(option) && option !== currentQuestion.correctAnswer;

                return (
                  <button
                    key={option}
                    type="button"
                    disabled={isResolved || isPaused || selectedAnswers.includes(option)}
                    onClick={() => selectAnswer(option)}
                    className={`flex min-h-16 items-center gap-4 rounded-lg border p-4 text-left transition ${isCorrect ? "border-[var(--success)] bg-[var(--success-soft)] text-[var(--success)]" : isWrong ? "border-[var(--danger)] bg-[var(--danger-soft)] text-[var(--danger)]" : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--gold)] hover:bg-[var(--gold-soft)] disabled:cursor-default"}`}
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-current/25 text-sm font-extrabold">
                      {isCorrect ? "✓" : isWrong ? "×" : String.fromCharCode(65 + index)}
                    </span>
                    <span className="font-bold">{option}</span>
                  </button>
                );
              })}
            </div>

            {isRebound && !isResolved && (
              <p aria-live="polite" className="mt-5 rounded-md bg-[var(--gold-soft)] p-4 text-sm font-bold text-[var(--olive-dark)]">
                A primeira equipe errou. Agora {currentTeam?.name} pode responder as alternativas restantes.
              </p>
            )}

            {isResolved ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-[minmax(0,1fr)_12rem] sm:items-start">
                <div className={`rounded-lg border p-5 ${roundResult === "correct" ? "border-[var(--success)]/20 bg-[var(--success-soft)]" : "border-[var(--gold)]/30 bg-[var(--gold-soft)]"}`}>
                  <strong className="text-[var(--navy)]">
                    {roundResult === "correct"
                      ? `Resposta correta! ${currentTeam?.name} ganhou ${pointsAwarded} pontos.`
                      : roundResult === "timeout"
                        ? `Tempo encerrado. A resposta correta é ${currentQuestion.correctAnswer}.`
                        : roundResult === "skipped"
                          ? `Pergunta pulada. A resposta correta é ${currentQuestion.correctAnswer}.`
                          : `A resposta correta é ${currentQuestion.correctAnswer}.`}
                  </strong>
                  <p className="mt-2 leading-7 text-[var(--muted)]">{currentQuestion.explanation}</p>
                  <p className="mt-2 text-sm font-bold text-[var(--olive-dark)]">Referência: {currentQuestion.reference}</p>
                </div>
                <button type="button" onClick={goToNextQuestion} className="button-primary order-first w-full sm:order-none">
                  {questionIndex === questions.length - 1 ? "Ver resultado" : "Próxima pergunta"}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            ) : (
              <div className="mt-6 flex justify-end">
                <button type="button" onClick={skipQuestion} className="button-secondary !min-h-11">Pular pergunta</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
