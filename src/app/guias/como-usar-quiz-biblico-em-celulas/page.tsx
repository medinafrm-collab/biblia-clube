import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideHeroPanel } from "@/components/GuideHeroPanel";
import { GuideVisualBlock } from "@/components/GuideVisualBlock";
import { Header } from "@/components/Header";
import { RelatedTools } from "@/components/RelatedTools";

const title = "Como usar quiz bíblico em células | Bíblia Clube";
const description =
  "Veja como usar um quiz bíblico em células, grupos pequenos e encontros cristãos de forma leve, participativa e edificante.";

const steps = [
  {
    title: "Escolha o objetivo do encontro",
    text: "Antes de abrir o quiz, defina se a intenção é quebrar o gelo, revisar uma história bíblica, iniciar uma conversa ou encerrar o encontro com uma atividade leve.",
  },
  {
    title: "Explique que não é uma prova",
    text: "O quiz funciona melhor quando todos entendem que a proposta é aprender juntos. Evite expor quem erra e valorize a participação de quem tenta responder.",
  },
  {
    title: "Leia a referência com calma",
    text: "Depois de cada pergunta, use a referência bíblica como ponto de apoio. O grupo pode ler o trecho, comentar o contexto e conversar sobre o aprendizado principal.",
  },
  {
    title: "Transforme respostas em conversa",
    text: "A explicação da resposta pode virar uma pergunta aberta: o que esse texto nos ensina, como aplicar isso durante a semana e que atitude prática podemos assumir?",
  },
];

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
                  <li>- Ideal para células, jovens, casais e famílias.</li>
                  <li>- Funciona melhor como conversa, não como prova.</li>
                  <li>- Pode ser usado no início, meio ou final do encontro.</li>
                  <li>- As referências ajudam a aprofundar cada resposta.</li>
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

                <div className="mt-10 grid gap-4">
                  {steps.map((step, index) => (
                    <section
                      key={step.title}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-6"
                    >
                      <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--gold)]">
                        Passo {index + 1}
                      </span>
                      <h3 className="mt-3 font-serif text-2xl text-[var(--navy)]">
                        {step.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[var(--muted)]">
                        {step.text}
                      </p>
                    </section>
                  ))}
                </div>

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

                <section className="mt-12 rounded-lg border border-[var(--gold)]/30 bg-[var(--gold-soft)] p-6 sm:p-8">
                  <h2 className="font-serif text-3xl text-[var(--navy)]">
                    Sugestão de roteiro rápido
                  </h2>
                  <ol className="mt-5 grid gap-4 leading-7 text-[var(--olive-dark)]">
                    <li>1. Apresente o tema da rodada e explique que todos podem participar.</li>
                    <li>2. Faça de 5 a 8 perguntas, sem pressa para avançar.</li>
                    <li>3. Após cada resposta, leia a referência indicada.</li>
                    <li>4. Escolha uma pergunta para virar conversa em grupo.</li>
                    <li>5. Finalize com uma oração breve relacionada ao aprendizado.</li>
                  </ol>
                </section>

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
