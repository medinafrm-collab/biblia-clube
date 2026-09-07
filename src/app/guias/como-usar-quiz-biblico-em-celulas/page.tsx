import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideHeroPanel } from "@/components/GuideHeroPanel";
import { GuideVisualBlock } from "@/components/GuideVisualBlock";
import { Header } from "@/components/Header";
import { RelatedTools } from "@/components/RelatedTools";
import { quizQuestions } from "@/data/quizQuestions";

const title = "Como usar quiz bíblico em células";
const description =
  "Veja como usar um quiz bíblico em células, grupos pequenos e encontros cristãos de forma leve, participativa e edificante.";

const useCases = [
  "Abertura de célula, para integrar pessoas novas.",
  "Revisão de um estudo bíblico feito anteriormente.",
  "Encontro de jovens, com equipes e pontuação simbólica.",
  "Reunião de casais, usando perguntas como início de conversa.",
  "Momento em família, com adultos e adolescentes participando juntos.",
];

const cautions = [
  "Evite transformar o quiz em competição pesada.",
  "Não ridicularize respostas erradas.",
  "Adapte o ritmo ao perfil do grupo.",
  "Prefira perguntas simples quando houver visitantes ou novos convertidos.",
  "Finalize apontando para a mensagem bíblica, não apenas para o placar.",
];

const sessionQuestionNotes = [
  {
    id: 9,
    transition: "Jesus une amor a Deus e amor ao próximo. A célula não precisa escolher entre devoção e cuidado concreto.",
    conversation: "Que prática simples pode manter essas duas dimensões juntas durante a próxima semana?",
  },
  {
    id: 30,
    transition: "Na parábola, proximidade não é apenas estar no mesmo caminho, mas interromper a rota para cuidar de alguém vulnerável.",
    conversation: "Sem citar casos pessoais, que barreiras costumam impedir uma comunidade de perceber e oferecer ajuda?",
  },
  {
    id: 41,
    transition: "Barnabé é lembrado pelo encorajamento. Palavras e gestos de apoio também ajudam uma comunidade a perseverar.",
    conversation: "Como podemos encorajar alguém sem bajular, controlar ou prometer o que não podemos cumprir?",
  },
  {
    id: 175,
    transition: "Atos descreve ensino, comunhão, refeições e orações como partes relacionadas da vida da primeira comunidade.",
    conversation: "Qual dessas práticas está mais presente em nosso encontro e qual precisa de atenção, sem tentar copiar mecanicamente todos os detalhes?",
  },
  {
    id: 277,
    transition: "Os bereanos receberam a mensagem com interesse e também a examinaram à luz das Escrituras. Abertura e verificação aparecem juntas.",
    conversation: "Que hábito pode nos ajudar a conferir uma afirmação bíblica com respeito e responsabilidade?",
  },
].map((note) => {
  const question = quizQuestions.find((item) => item.id === note.id);
  if (!question) throw new Error(`Pergunta ${note.id} não encontrada.`);
  return { ...question, ...note };
});

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/guias/como-usar-quiz-biblico-em-celulas",
  },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "/guias/como-usar-quiz-biblico-em-celulas",
    title,
    description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  inLanguage: "pt-BR",
  author: {
    "@type": "Organization",
    name: "Bíblia Clube",
  },
  publisher: {
    "@type": "Organization",
    name: "Bíblia Clube",
    logo: {
      "@type": "ImageObject",
      url: "https://www.bibliaclube.com.br/icon.svg",
    },
  },
  mainEntityOfPage:
    "https://www.bibliaclube.com.br/guias/como-usar-quiz-biblico-em-celulas",
};

export default function ComoUsarQuizBiblicoEmCelulasPage() {
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
        <article>
          <section className="paper-texture border-b border-[var(--border)] py-16 sm:py-20">
            <div className="container-site">
              <nav
                aria-label="Navegação estrutural"
                className="flex flex-wrap gap-2 text-sm text-[var(--muted)]"
              >
                <Link href="/" className="font-bold text-[var(--navy)] no-underline">
                  Início
                </Link>
                <span aria-hidden="true">/</span>
                <span>Guias</span>
              </nav>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div>
                  <span className="eyebrow">Guia para líderes e grupos</span>
                  <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.7rem,6vw,4.7rem)] text-[var(--navy)]">
                    Como usar quiz bíblico em células.
                  </h1>
                </div>
                <GuideHeroPanel
                  description="Esse recurso pode ser mais do que um jogo rápido. Quando é bem conduzido, ele ajuda a quebrar o gelo, aproximar pessoas e criar conversas naturais em torno da Palavra."
                  chips={["Células", "Grupos", "10 a 20 min"]}
                  steps={["Abrir conversa", "Responder juntos", "Ler referência"]}
                />
              </div>
            </div>
          </section>

          <section className="bg-white py-16 sm:py-20">
            <div className="container-site grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <aside className="h-fit rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-6">
                <h2 className="font-serif text-2xl text-[var(--navy)]">
                  Resumo do guia
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
                  <li>- Sessão pronta com cinco perguntas.</li>
                  <li>- Respostas, referências e transições.</li>
                  <li>- Perguntas abertas sem exposição pessoal.</li>
                  <li>- Cronograma completo de 20 minutos.</li>
                </ul>
                <Link href="/quiz-biblico#quiz" className="button-primary mt-6">
                  Abrir quiz
                  <span aria-hidden="true">→</span>
                </Link>
              </aside>

              <div className="min-w-0">
                <div className="prose-content">
                  <h2>Por que usar quiz em uma célula?</h2>
                  <p>
                    Em muitos encontros, os primeiros minutos são os mais
                    difíceis. Algumas pessoas chegam cansadas, outras ainda não
                    conhecem o grupo, e nem sempre é simples iniciar uma
                    conversa espiritual de forma natural. O jogo ajuda nesse
                    momento porque cria participação imediata sem exigir
                    que alguém faça uma exposição longa.
                  </p>
                  <p>
                    A proposta não é descobrir quem sabe mais. O objetivo é
                    criar uma ponte para a conversa. Uma pergunta simples pode
                    relembrar uma história, apresentar uma personagem, despertar
                    curiosidade e conduzir o grupo para uma leitura mais atenta
                    do texto.
                  </p>

                  <h2>Como conduzir sem transformar em competição pesada</h2>
                  <p>
                    A competição pode ser divertida, especialmente com jovens e
                    equipes, mas precisa estar a serviço do aprendizado. O
                    condutor pode combinar desde o início que o mais importante
                    é participar, ouvir a explicação e perceber o que a
                    referência ensina.
                  </p>
                </div>

                <GuideVisualBlock
                  eyebrow="Aplicação rápida"
                  title="Um caminho simples para usar no encontro"
                  description="A dinâmica fica mais leve quando o grupo entende o fluxo antes da primeira pergunta."
                  variant="flow"
                  items={[
                    {
                      label: "01",
                      title: "Abrir",
                      text: "Apresente o tema e explique que a proposta é aprender juntos.",
                    },
                    {
                      label: "02",
                      title: "Responder",
                      text: "Faça poucas perguntas e permita que todos participem sem pressão.",
                    },
                    {
                      label: "03",
                      title: "Conversar",
                      text: "Use a explicação como ponte para uma pergunta aberta ao grupo.",
                    },
                    {
                      label: "04",
                      title: "Orar",
                      text: "Finalize pedindo que Deus fortaleça a prática do aprendizado.",
                    },
                  ]}
                />

                <section className="mt-12" aria-labelledby="sessao-pronta">
                  <span className="eyebrow">Sessão pronta · 20 minutos</span>
                  <h2 id="sessao-pronta" className="section-title mt-4">Comunidade que aprende e cuida.</h2>
                  <p className="section-copy max-w-3xl">Esta sequência usa cinco perguntas que já fazem parte do Quiz Bíblico. Leia as alternativas, aceite uma resposta por equipe e revele a explicação sem destacar quem errou. Se a conversa crescer, use três perguntas e preserve a leitura final.</p>

                  <div className="mt-8 border-y border-[var(--border)]">
                    {sessionQuestionNotes.map((item, index) => (
                      <section key={item.id} className="border-b border-[var(--border)] py-8 last:border-0">
                        <div className="grid gap-5 sm:grid-cols-[2.5rem_1fr]">
                          <span className="font-serif text-2xl text-[var(--gold-ink)]" aria-hidden="true">{index + 1}</span>
                          <div>
                            <h3 className="font-serif text-2xl leading-tight text-[var(--navy)]">{item.question}</h3>
                            <ol className="mt-4 grid gap-2 text-[var(--muted)] sm:grid-cols-2">
                              {item.options.map((option, optionIndex) => <li key={option}><strong className="mr-2 text-[var(--olive-dark)]">{String.fromCharCode(65 + optionIndex)}.</strong>{option}</li>)}
                            </ol>
                            <details className="mt-5 border-l-2 border-[var(--gold)] pl-4">
                              <summary className="cursor-pointer font-bold text-[var(--olive-dark)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--navy)]">Ver resposta e condução</summary>
                              <div className="pt-4">
                                <p className="font-bold text-[var(--navy)]">Resposta: {item.correctAnswer}</p>
                                <p className="mt-2 leading-7 text-[var(--muted)]">{item.explanation}</p>
                                <p className="mt-2 text-sm font-bold text-[var(--olive-dark)]">Leia: {item.reference}</p>
                                <p className="mt-4 leading-7 text-[var(--muted)]"><strong className="text-[var(--navy)]">Transição:</strong> {item.transition}</p>
                                <p className="mt-2 leading-7 text-[var(--foreground)]"><strong>Para conversar:</strong> {item.conversation}</p>
                              </div>
                            </details>
                          </div>
                        </div>
                      </section>
                    ))}
                  </div>
                </section>

                <section className="mt-12 border-y border-[var(--border)] py-8">
                  <h2 className="font-serif text-3xl text-[var(--navy)]">Como conduzir os 20 minutos</h2>
                  <ol className="mt-5 grid gap-4 leading-7 text-[var(--muted)] sm:grid-cols-2">
                    <li><strong className="text-[var(--navy)]">0–2 min · Combinado:</strong> “Não é prova. Podemos pensar juntos e aprender também com uma resposta incorreta.”</li>
                    <li><strong className="text-[var(--navy)]">2–10 min · Rodada:</strong> faça as cinco perguntas, com até 90 segundos para resposta e explicação.</li>
                    <li><strong className="text-[var(--navy)]">10–16 min · Leitura:</strong> escolha a referência que mais despertou interesse, leia a passagem completa e localize seu contexto.</li>
                    <li><strong className="text-[var(--navy)]">16–19 min · Conversa:</strong> use uma pergunta aberta e recolha duas ou três contribuições breves.</li>
                    <li><strong className="text-[var(--navy)]">19–20 min · Fechamento:</strong> retome uma ideia do texto e faça uma oração de resposta, sem transformar pedidos pessoais em obrigação.</li>
                  </ol>
                  <p className="mt-6 text-sm leading-6 text-[var(--muted)]"><strong className="text-[var(--navy)]">Quando alguém errar:</strong> diga “vamos conferir no texto” e leia a explicação. Evite perguntar quem marcou a alternativa incorreta ou usar o resultado para medir maturidade espiritual.</p>
                </section>

                <div className="prose-content mt-12">
                  <h2>Em quais momentos o quiz pode ser usado?</h2>
                  <p>
                    O mesmo recurso pode servir para diferentes públicos. O que
                    muda é o tom da condução, a quantidade de perguntas e o
                    tempo dedicado às explicações.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-[var(--border)] p-6">
                    <h3 className="font-bold text-[var(--navy)]">Boas ocasiões</h3>
                    <ul className="mt-4 space-y-3 leading-7 text-[var(--muted)]">
                      {useCases.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-[var(--border)] p-6">
                    <h3 className="font-bold text-[var(--navy)]">Cuidados importantes</h3>
                    <ul className="mt-4 space-y-3 leading-7 text-[var(--muted)]">
                      {cautions.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <RelatedTools
                  description="Use estas ferramentas para transformar o guia em uma atividade prática durante a célula."
                  tools={[
                    {
                      title: "Quiz Bíblico",
                      description:
                        "Perguntas com alternativas, explicações e referências para conduzir a conversa.",
                      href: "/quiz-biblico#quiz",
                    },
                    {
                      title: "Modo Grupo",
                      description:
                        "Uma forma mais coletiva de usar perguntas bíblicas em equipes.",
                      href: "/modo-grupo",
                    },
                    {
                      title: "Dinâmicas para Células",
                      description:
                        "Roteiros prontos com objetivo, materiais e sugestão de condução.",
                      href: "/dinamicas-para-celulas",
                    },
                  ]}
                />

                <div className="prose-content mt-12">
                  <h2>Conclusão</h2>
                  <p>
                    Um quiz simples pode abrir espaço para comunhão,
                    escuta e aprendizado. Quando o foco está na edificação, a
                    dinâmica deixa de ser apenas uma brincadeira e se torna uma
                    ferramenta útil para líderes, famílias e pequenos grupos.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
