import Link from "next/link";
import { completePhraseQuestions } from "@/data/completePhraseQuestions";
import { quizQuestions } from "@/data/quizQuestions";
import { quizTopics } from "@/data/quizTopics";

const questionCount = quizQuestions.length + completePhraseQuestions.length;
const roundedQuestionCount = Math.floor(questionCount / 100) * 100;

const miniCards = [
  { value: `+${roundedQuestionCount}`, label: "perguntas e desafios" },
  { value: String(quizTopics.length), label: "temáticas para explorar" },
  { value: "Grátis", label: "e sem cadastro" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="paper-texture relative overflow-hidden border-b border-[var(--border)]"
    >
      <div className="container-site grid items-center gap-10 py-10 sm:py-12 lg:grid-cols-[0.82fr_1.18fr] lg:py-14">
        <div className="relative z-10">
          <span className="eyebrow">Conhecimento que aproxima</span>
          <h1 className="display-title mt-5 max-w-2xl text-[clamp(2.5rem,4.2vw,3.75rem)] text-[var(--navy)]">
            Aprenda, jogue e compartilhe a{" "}
            <span className="relative inline-block text-[var(--olive-dark)]">
              Bíblia com leveza
              <svg
                aria-hidden="true"
                viewBox="0 0 260 18"
                preserveAspectRatio="none"
                className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full overflow-visible text-[var(--gold)]"
              >
                <path
                  d="M4 13C73 2 171 3 256 10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </span>
            .
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            Aqui você encontra quiz, jogos e dinâmicas para grupos, famílias,
            jovens e todos que desejam aprender mais sobre a Palavra de Deus.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/quiz-biblico" className="button-primary">
              Jogar quiz grátis
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/biblioteca" className="button-secondary">
              Conhecer a biblioteca
            </Link>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 border-t border-[var(--border)] pt-5">
            {miniCards.map((item) => (
              <div key={item.label}>
                <strong className="block font-serif text-2xl text-[var(--navy)]">
                  {item.value}
                </strong>
                <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[680px]">
          <div className="absolute -inset-3 rotate-1 rounded-lg bg-[var(--gold-soft)]" />
          <div className="relative overflow-hidden rounded-lg border border-white/70 bg-white p-3 shadow-[0_24px_65px_rgba(32,56,47,0.14)]">
            <div className="rounded-md bg-[var(--navy)] p-6 text-white sm:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em]">
                  Rodada rápida
                </span>
                <span className="text-sm text-white/70">03 / 12</span>
              </div>
              <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-1/4 rounded-full bg-[var(--gold)]" />
              </div>
              <p className="mt-8 text-sm font-bold text-[var(--gold)]">
                Antigo Testamento
              </p>
              <p className="mt-3 max-w-xl font-serif text-[clamp(1.75rem,3vw,2.45rem)] leading-tight">
                Quem recebeu os Dez Mandamentos no monte Sinai?
              </p>
              <div className="mt-7 grid gap-2.5">
                {["Josué", "Moisés", "Elias", "Samuel"].map((option, index) => (
                  <div
                    key={option}
                    className={`flex items-center gap-3 rounded-md border px-4 py-3 text-sm ${
                      index === 1
                        ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--navy)]"
                        : "border-white/15 bg-white/5"
                    }`}
                  >
                    <span className="grid size-7 place-items-center rounded-full border border-current/30 text-xs font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="font-bold">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden rounded-md border border-[var(--border)] bg-white p-3 shadow-lg sm:flex sm:items-center sm:gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-[var(--success-soft)] text-xl">
              ✓
            </span>
            <span>
              <strong className="block text-sm text-[var(--navy)]">
                Aprenda na hora
              </strong>
              <span className="text-xs text-[var(--muted)]">
                com explicações simples
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
