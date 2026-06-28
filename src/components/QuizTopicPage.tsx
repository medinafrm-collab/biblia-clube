import Link from "next/link";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Quiz } from "./Quiz";
import { quizQuestions } from "@/data/quizQuestions";
import { quizTopics, type QuizTopic } from "@/data/quizTopics";

type QuizTopicPageProps = {
  topic: QuizTopic;
};

export function QuizTopicPage({ topic }: QuizTopicPageProps) {
  const questionCount = quizQuestions.filter((question) =>
    question.topics.includes(topic.id),
  ).length;

  return (
    <>
      <Header />
      <main>
        <section className="paper-texture border-b border-[var(--border)] py-16 sm:py-20">
          <div className="container-site">
            <nav aria-label="Navegação estrutural" className="flex gap-2 text-sm text-[var(--muted)]">
              <Link href="/" className="font-bold text-[var(--navy)] no-underline">Início</Link>
              <span aria-hidden="true">/</span>
              <span>{topic.label}</span>
            </nav>
            <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <span className="eyebrow">{topic.eyebrow}</span>
                <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.8rem,6vw,4.8rem)] text-[var(--navy)]">
                  {topic.title}
                </h1>
              </div>
              <div>
                <p className="text-lg leading-8 text-[var(--muted)]">{topic.description}</p>
                <a href="#quiz" className="button-primary mt-7">
                  Começar desafio <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="container-site">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <span className="eyebrow">Antes de jogar</span>
                <h2 className="section-title">Uma rodada para aprender enquanto responde.</h2>
              </div>
              <div className="space-y-5 text-lg leading-8 text-[var(--muted)]">
                {topic.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>

            <div className="mt-12 grid gap-6 border-y border-[var(--border)] py-8 sm:grid-cols-3">
              {topic.highlights.map((highlight, index) => (
                <div key={highlight} className="flex gap-4">
                  <strong className="font-serif text-2xl text-[var(--gold)]">{String(index + 1).padStart(2, "0")}</strong>
                  <p className="leading-7 text-[var(--muted)]">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
              <p className="font-bold text-[var(--navy)]">{questionCount} perguntas com correção imediata</p>
              <nav aria-label="Outros temas de quiz" className="flex flex-wrap gap-2">
                {quizTopics.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    aria-current={item.id === topic.id ? "page" : undefined}
                    className={`rounded-md border px-3 py-2 text-sm font-bold no-underline transition ${item.id === topic.id ? "border-[var(--navy)] bg-[var(--navy)] text-white" : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--navy)]"}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </section>

        <Quiz key={topic.id} initialTopic={topic.id} showIntroduction={false} showTopicSelector={false} />
      </main>
      <Footer />
    </>
  );
}
