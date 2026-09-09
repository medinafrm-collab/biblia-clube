import Image from "next/image";
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
          <Image
            src="/images/hero-games-deck.webp"
            alt="Cinco jogos bíblicos ilustrados como cartas sobrepostas: quiz, memória, ligue os pares, complete a frase e Quem sou eu?"
            width={1448}
            height={1086}
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
