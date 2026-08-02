import Link from "next/link";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Quiz } from "./Quiz";
import { quizTopics, type QuizTopic } from "@/data/quizTopics";

type QuizTopicPageProps = {
  topic: QuizTopic;
};

export function QuizTopicPage({ topic }: QuizTopicPageProps) {
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

            <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)]/55 p-4 sm:p-5">
              <div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--olive-dark)]">
                    Escolha uma temática
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Selecione um tema e depois escolha uma jornada para começar.
                  </p>
                </div>
              </div>

              <nav aria-label="Outros temas de quiz" className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-4">
                {quizTopics.map((item) => {
                  const isActive = item.id === topic.id;

                  return (
                    <Link
                      key={item.id}
                      href={`${item.path}#quiz`}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex min-h-12 items-center justify-center rounded-xl border px-3 py-2 text-center text-sm font-bold leading-tight no-underline transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] ${
                        isActive
                          ? "border-[var(--navy)] bg-[var(--navy)] text-white shadow-sm"
                          : "border-[var(--border)] bg-white text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--navy)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
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
