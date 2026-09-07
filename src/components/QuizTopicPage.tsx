import Link from "next/link";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Quiz } from "./Quiz";
import { quizTopics, type QuizTopic } from "@/data/quizTopics";
import { quizQuestions } from "@/data/quizQuestions";
import { getQuizTopicContext } from "@/data/quizTopicContext";
import {
  getQuizTopicFaq,
  quizTopicRelatedPaths,
} from "@/data/quizTopicEditorial";
import { libraryItems } from "@/data/libraryItems";

type QuizTopicPageProps = {
  topic: QuizTopic;
};

export function QuizTopicPage({ topic }: QuizTopicPageProps) {
  const context = getQuizTopicContext(topic.id);
  const topicQuestions = quizQuestions.filter((question) =>
    question.topics.includes(topic.id),
  );
  const journeyCount = new Set(
    topicQuestions.map((question) => question.journey ?? 1),
  ).size;
  const sampleQuestions = topicQuestions.slice(0, 3);
  const faq = getQuizTopicFaq(topic.label, topicQuestions.length, journeyCount);
  const relatedItems = quizTopicRelatedPaths[topic.id]
    .map((path) => libraryItems.find((item) => item.href === path))
    .filter((item) => item !== undefined);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Quiz",
        name: topic.title,
        description: topic.description,
        url: `https://www.bibliaclube.com.br${topic.path}`,
        inLanguage: "pt-BR",
        educationalUse: "practice",
        learningResourceType: "Quiz com explicações e referências bíblicas",
        numberOfQuestions: topicQuestions.length,
        isAccessibleForFree: true,
        author: {
          "@type": "Organization",
          name: "Bíblia Clube",
          url: "https://www.bibliaclube.com.br/sobre",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <section className="paper-texture border-b border-[var(--border)] py-16 sm:py-20">
          <div className="container-site">
            <nav aria-label="Navegação estrutural" className="flex gap-2 text-sm text-[var(--muted)]">
              <Link href="/" className="font-bold text-[var(--navy)] no-underline">Início</Link>
              <span aria-hidden="true">/</span>
              <span>{topic.label}</span>
            </nav>
            <div className="mt-10 grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="min-w-0">
                <span className="eyebrow">{topic.eyebrow}</span>
                <h1 className="display-title mt-5 max-w-4xl text-4xl text-[var(--navy)] sm:text-5xl lg:text-7xl">
                  {topic.title}
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">{topic.description}</p>
                <a href="#quiz" className="button-primary mt-7">
                  Começar desafio <span aria-hidden="true">↓</span>
                </a>
              </div>
              <aside className="rounded-lg bg-[var(--navy)] p-7 text-white sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div className="min-w-0">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--gold)]">Neste tema</p>
                    <h2 className="mt-3 font-serif text-3xl">Jornadas comentadas</h2>
                  </div>
                  <span className="rounded-full border border-white/20 px-3 py-2 text-sm font-bold">{journeyCount} jornadas</span>
                </div>
                <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-1/3 rounded-full bg-[var(--gold)]" />
                </div>
                <ul className="mt-7 space-y-4 text-sm leading-6 text-white/80">
                  {topic.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--gold)]" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-t border-white/15 pt-5 text-sm font-bold text-white">
                  {topicQuestions.length} perguntas disponíveis
                </p>
              </aside>
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
                  <strong className="font-serif text-2xl text-[var(--gold-ink)]">{String(index + 1).padStart(2, "0")}</strong>
                  <p className="leading-7 text-[var(--muted)]">{highlight}</p>
                </div>
              ))}
            </div>

            <section className="mt-14" aria-labelledby="quiz-details-title">
              <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <span className="eyebrow">Ficha do desafio</span>
                  <h2 id="quiz-details-title" className="section-title">
                    O que você encontra nesta rodada.
                  </h2>
                </div>
                <dl className="grid border-y border-[var(--border)] sm:grid-cols-2">
                  <div className="border-b border-[var(--border)] py-5 sm:border-r sm:px-6 sm:first:pl-0">
                    <dt className="text-sm font-extrabold text-[var(--olive-dark)]">Formato</dt>
                    <dd className="mt-2 leading-7 text-[var(--muted)]">Múltipla escolha, com quatro alternativas.</dd>
                  </div>
                  <div className="border-b border-[var(--border)] py-5 sm:px-6">
                    <dt className="text-sm font-extrabold text-[var(--olive-dark)]">Duração estimada</dt>
                    <dd className="mt-2 leading-7 text-[var(--muted)]">De 5 a 8 minutos por jornada.</dd>
                  </div>
                  <div className="py-5 sm:border-r sm:px-6 sm:first:pl-0">
                    <dt className="text-sm font-extrabold text-[var(--olive-dark)]">Nível</dt>
                    <dd className="mt-2 leading-7 text-[var(--muted)]">Variado, com questões diretas e de contexto.</dd>
                  </div>
                  <div className="py-5 sm:px-6">
                    <dt className="text-sm font-extrabold text-[var(--olive-dark)]">Indicado para</dt>
                    <dd className="mt-2 leading-7 text-[var(--muted)]">Uso individual, famílias, classes e pequenos grupos.</dd>
                  </div>
                </dl>
              </div>
            </section>

            <section className="mt-16 border-t border-[var(--border)] pt-14">
              <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <span className="eyebrow">Contexto do tema</span>
                  <h2 className="section-title">{context.heading}</h2>
                </div>
                <p className="text-lg leading-8 text-[var(--muted)]">{context.introduction}</p>
              </div>

              <div className="mt-10 grid gap-0 border-y border-[var(--border)] md:grid-cols-3">
                {context.sections.map((section, index) => (
                  <article key={section.title} className="border-b border-[var(--border)] py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                    <span className="font-serif text-3xl text-[var(--olive)]">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-4 font-serif text-2xl text-[var(--navy)]">{section.title}</h3>
                    <p className="mt-3 leading-7 text-[var(--muted)]">{section.description}</p>
                    <p className="mt-4 text-sm font-bold leading-6 text-[var(--olive-dark)]">{section.references.join(" · ")}</p>
                  </article>
                ))}
              </div>

              <div className="mt-8 rounded-lg border border-[var(--gold)]/30 bg-[var(--gold-soft)] p-5 sm:p-6">
                <strong className="text-[var(--navy)]">Dica para a rodada</strong>
                <p className="mt-2 leading-7 text-[var(--olive-dark)]">{context.closingNote}</p>
              </div>
            </section>

            <section className="mt-16 border-t border-[var(--border)] pt-14" aria-labelledby="sample-questions-title">
              <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <span className="eyebrow">Exemplos comentados</span>
                  <h2 id="sample-questions-title" className="section-title">
                    Veja como o conteúdo é apresentado.
                  </h2>
                  <p className="mt-5 leading-7 text-[var(--muted)]">
                    Estes exemplos permanecem visíveis para que o tema, a resposta e a fonte possam ser avaliados antes de iniciar o jogo.
                  </p>
                </div>
                <div className="grid gap-0 border-y border-[var(--border)]">
                  {sampleQuestions.map((question, index) => (
                    <article key={question.id} className="border-b border-[var(--border)] py-6 last:border-0">
                      <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--gold-ink)]">
                        Exemplo {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl leading-tight text-[var(--navy)]">{question.question}</h3>
                      <p className="mt-4 leading-7 text-[var(--muted)]">
                        <strong className="text-[var(--foreground)]">Resposta:</strong> {question.correctAnswer}. {question.explanation}
                      </p>
                      <p className="mt-3 text-sm font-extrabold text-[var(--olive-dark)]">Referência: {question.reference}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

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

        <section className="border-t border-[var(--border)] bg-white py-14 sm:py-20">
          <div className="container-site">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <span className="eyebrow">Dúvidas frequentes</span>
                <h2 className="section-title">Antes de escolher a próxima jornada.</h2>
                <div className="mt-8 grid gap-0 border-y border-[var(--border)]">
                  {faq.map((item) => (
                    <details key={item.question} className="group border-b border-[var(--border)] py-5 last:border-0">
                      <summary className="cursor-pointer list-none pr-8 font-bold leading-7 text-[var(--navy)] marker:hidden">
                        {item.question}
                      </summary>
                      <p className="mt-3 leading-7 text-[var(--muted)]">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
              <div>
                <span className="eyebrow">Continue aprendendo</span>
                <h2 className="section-title">Conteúdos relacionados ao tema.</h2>
                <div className="mt-8 grid gap-0 border-y border-[var(--border)]">
                  {relatedItems.map((item) => (
                    <Link key={item.href} href={item.href} className="group block border-b border-[var(--border)] py-5 text-inherit no-underline last:border-0 hover:border-[var(--gold)]">
                      <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--olive-dark)]">{item.type}</span>
                      <strong className="mt-2 block font-serif text-2xl leading-tight text-[var(--navy)]">{item.title}</strong>
                      <p className="mt-2 leading-7 text-[var(--muted)]">{item.description}</p>
                      <span className="mt-3 inline-flex text-sm font-extrabold text-[var(--navy)]">Abrir <span className="ml-2 transition group-hover:translate-x-1" aria-hidden="true">→</span></span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--border)] bg-white py-10">
          <div className="container-site flex flex-col justify-between gap-4 text-sm leading-6 text-[var(--muted)] sm:flex-row sm:items-center">
            <p>Conteúdo preparado e revisado pelo Bíblia Clube com base nas referências indicadas.</p>
            <Link href="/como-produzimos-conteudos" className="font-bold text-[var(--navy)] no-underline">Conheça nossos critérios editoriais →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
