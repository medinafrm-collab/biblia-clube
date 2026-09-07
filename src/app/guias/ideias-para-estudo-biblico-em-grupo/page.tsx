import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideHeroPanel } from "@/components/GuideHeroPanel";
import { GuideVisualBlock } from "@/components/GuideVisualBlock";
import { Header } from "@/components/Header";
import { RelatedTools } from "@/components/RelatedTools";

const title = "Ideias para estudo bíblico em grupo";
const description =
  "Ideias práticas para organizar estudo bíblico em grupo com perguntas, referências, conversa guiada e atividades bíblicas simples.";

const ideas = [
  "Começar com uma pergunta bíblica simples.",
  "Ler o mesmo texto em voz alta por duas pessoas.",
  "Pedir que o grupo identifique uma palavra-chave.",
  "Dividir em duplas para conversar por poucos minutos.",
  "Usar um quiz como revisão do tema.",
  "Encerrar com uma pergunta de aplicação para a semana.",
];

const readyStudy = {
  passage: "Marcos 10:46-52",
  theme: "Jesus para, escuta e chama Bartimeu",
  purpose: "Observar como a multidão e Jesus reagem ao clamor de Bartimeu e pensar em maneiras concretas de uma comunidade abrir espaço para quem costuma ser silenciado.",
  context: "Jesus está saindo de Jericó a caminho de Jerusalém. Pouco antes, os discípulos discutiram grandeza e Jesus apresentou o serviço como caminho (Marcos 10:32-45). À margem da estrada, Bartimeu reconhece Jesus como Filho de Davi, insiste em clamar e, depois de ser chamado, expressa diretamente o que deseja.",
  observations: [
    "Quem aparece na cena e onde Bartimeu está no início?",
    "Quais verbos descrevem a reação da multidão antes e depois de Jesus parar?",
    "O que Bartimeu chama Jesus e o que ele pede?",
    "O que Jesus faz antes de responder ao pedido?",
    "Onde Bartimeu está no fim da narrativa?",
  ],
  interpretation: [
    {
      question: "O que o contraste entre a multidão e Jesus revela sobre atenção e acolhimento?",
      support: "A multidão inicialmente manda Bartimeu se calar; Jesus para e manda chamá-lo. Depois, as mesmas pessoas dizem que ele tenha coragem e se levante. O grupo pode notar essa mudança sem transformar todos os presentes em personagens inteiramente maus ou bons.",
    },
    {
      question: "Por que a pergunta de Jesus, 'Que queres que eu te faça?', importa se a necessidade parecia visível?",
      support: "Jesus permite que Bartimeu fale por si. A cena oferece um princípio de escuta: reconhecer uma necessidade não dá ao grupo o direito de presumir toda a história ou decidir sem ouvir a pessoa.",
    },
    {
      question: "Como o final conecta restauração e discipulado?",
      support: "Bartimeu recupera a visão e segue Jesus pelo caminho. Marcos não apresenta apenas uma mudança de condição, mas uma resposta que passa a acompanhar a jornada de Jesus.",
    },
  ],
  applications: [
    "Identificar uma prática do grupo que dificulta a participação de visitantes, pessoas tímidas ou quem precisa de mais tempo para falar.",
    "Durante a próxima conversa, fazer uma pergunta e ouvir a resposta sem completá-la pela outra pessoa.",
    "Escolher uma barreira concreta de acesso ou acolhimento que o grupo pode reduzir nesta semana.",
  ],
};

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/guias/ideias-para-estudo-biblico-em-grupo",
  },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "/guias/ideias-para-estudo-biblico-em-grupo",
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
    "https://www.bibliaclube.com.br/guias/ideias-para-estudo-biblico-em-grupo",
};

export default function GroupBibleStudyIdeasGuide() {
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
                <Link href="/guias" className="font-bold text-[var(--navy)] no-underline">
                  Guias
                </Link>
              </nav>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div>
                  <span className="eyebrow">Guia para estudo bíblico</span>
                  <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.7rem,6vw,4.7rem)] text-[var(--navy)]">
                    Ideias para estudo bíblico em grupo.
                  </h1>
                </div>
                <GuideHeroPanel
                  description="O encontro pode ser simples, participativo e profundo quando há perguntas claras, leitura cuidadosa e aplicação prática."
                  chips={["Estudo", "Grupo", "Perguntas"]}
                  steps={["Observar", "Entender", "Responder"]}
                />
              </div>
            </div>
          </section>

          <section className="bg-white py-16 sm:py-20">
            <div className="container-site grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <aside className="h-fit rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-6">
                <h2 className="font-serif text-2xl text-[var(--navy)]">
                  Neste guia
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
                  <li>- Um caminho de quatro movimentos para estudar o texto.</li>
                  <li>- Estudo completo de Marcos 10:46-52.</li>
                  <li>- Ideias para aumentar participação do grupo.</li>
                  <li>- Como usar jogos sem perder profundidade.</li>
                  <li>- Ferramentas relacionadas para aplicar o estudo.</li>
                </ul>
                <Link href="/quiz-biblico#quiz" className="button-primary mt-6">
                  Abrir quiz
                  <span aria-hidden="true">→</span>
                </Link>
              </aside>

              <div className="min-w-0">
                <div className="prose-content">
                  <h2>O estudo precisa de direção simples</h2>
                  <p>
                    Em grupos pequenos, o estudo pode perder ritmo
                    quando não há uma direção clara. Algumas pessoas falam muito,
                    outras se calam, e o texto pode acabar ficando em segundo
                    plano. Uma estrutura simples ajuda o grupo a caminhar junto.
                  </p>
                  <p>
                    Não é necessário transformar o encontro em uma aula longa.
                    O grupo pode ler, observar, conversar e aplicar o texto com
                    perguntas bem escolhidas e tempo suficiente para ouvir as
                    pessoas.
                  </p>

                  <h2>Um caminho de quatro movimentos</h2>
                  <p>
                    Uma forma prática de conduzir o estudo é observar o que o
                    texto mostra, buscar sua mensagem no contexto, escolher uma
                    resposta possível e orar a partir do que foi lido. Esse
                    caminho preserva o foco do texto e favorece participação.
                  </p>
                </div>

                <GuideVisualBlock
                  eyebrow="Método simples"
                  title="Quatro movimentos para conduzir melhor"
                  description="Esse caminho ajuda o grupo a observar o texto antes de partir para opiniões e aplicações."
                  variant="timeline"
                  items={[
                    {
                      label: "01",
                      title: "O que aparece?",
                      text: "Observe personagens, ações, contexto e palavras importantes.",
                    },
                    {
                      label: "02",
                      title: "O que ensina?",
                      text: "Identifique a mensagem central antes de avançar.",
                    },
                    {
                      label: "03",
                      title: "Como responder?",
                      text: "Conecte a leitura a uma atitude possível e honesta.",
                    },
                    {
                      label: "04",
                      title: "Como orar?",
                      text: "Transforme a conversa em uma resposta diante de Deus.",
                    },
                  ]}
                />

                <section className="mt-12" aria-labelledby="estudo-pronto">
                  <span className="eyebrow">Estudo pronto · 40 minutos</span>
                  <h2 id="estudo-pronto" className="section-title mt-4">{readyStudy.theme}</h2>
                  <p className="section-copy max-w-3xl"><strong>Texto principal:</strong> {readyStudy.passage}</p>
                  <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]"><strong className="text-[var(--navy)]">Propósito:</strong> {readyStudy.purpose}</p>

                  <div className="mt-8 border-y border-[var(--border)] py-7">
                    <h3 className="font-serif text-2xl text-[var(--navy)]">Contexto para quem conduz</h3>
                    <p className="mt-3 leading-7 text-[var(--muted)]">{readyStudy.context}</p>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Leia toda a passagem antes do encontro. Durante o estudo, diferencie o que o texto afirma das inferências feitas pelo grupo e evite usar a cura para culpar pessoas por enfermidade ou deficiência.</p>
                  </div>

                  <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    <section>
                      <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--gold-ink)]">1 · Observar</p>
                      <h3 className="mt-2 font-serif text-2xl text-[var(--navy)]">Perguntas respondidas pelo próprio texto</h3>
                      <ol className="mt-4 grid gap-3 leading-7 text-[var(--muted)]">
                        {readyStudy.observations.map((question, index) => <li key={question} className="flex gap-3"><span className="font-bold text-[var(--olive-dark)]">{index + 1}.</span><span>{question}</span></li>)}
                      </ol>
                    </section>

                    <section>
                      <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--gold-ink)]">2 · Entender</p>
                      <h3 className="mt-2 font-serif text-2xl text-[var(--navy)]">Perguntas e apoio ao condutor</h3>
                      <div className="mt-4 grid gap-5">
                        {readyStudy.interpretation.map((item) => (
                          <div key={item.question} className="border-l-2 border-[var(--gold)] pl-4">
                            <p className="font-bold leading-7 text-[var(--navy)]">{item.question}</p>
                            <p className="mt-2 text-sm leading-6 text-[var(--muted)]"><strong>Apoio:</strong> {item.support}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <section className="mt-9 border-t border-[var(--border)] pt-7">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--gold-ink)]">3 · Responder</p>
                    <h3 className="mt-2 font-serif text-2xl text-[var(--navy)]">Escolha uma aplicação, não todas</h3>
                    <ul className="mt-4 grid gap-3 leading-7 text-[var(--muted)]">
                      {readyStudy.applications.map((application) => <li key={application} className="flex gap-3"><span aria-hidden="true" className="text-[var(--gold-ink)]">•</span><span>{application}</span></li>)}
                    </ul>
                  </section>

                  <section className="mt-9 border-t border-[var(--border)] pt-7">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--gold-ink)]">4 · Orar</p>
                    <h3 className="mt-2 font-serif text-2xl text-[var(--navy)]">Oração ligada ao texto</h3>
                    <p className="mt-3 leading-7 text-[var(--muted)]">Agradeça porque Jesus percebe pessoas que a multidão ignora. Peça atenção para ouvir antes de presumir, coragem para remover barreiras e disposição para seguir Jesus no caminho do serviço.</p>
                  </section>
                </section>

                <section className="mt-12 border-y border-[var(--border)] py-8">
                  <h2 className="font-serif text-3xl text-[var(--navy)]">Cronograma do encontro</h2>
                  <ol className="mt-5 grid gap-4 leading-7 text-[var(--muted)] sm:grid-cols-2">
                    <li><strong className="text-[var(--navy)]">5 min · Acolhimento:</strong> apresente o propósito e combine participação voluntária.</li>
                    <li><strong className="text-[var(--navy)]">8 min · Leitura:</strong> leia Marcos 10:46-52 duas vezes, com leitores diferentes.</li>
                    <li><strong className="text-[var(--navy)]">10 min · Observação:</strong> trabalhe as cinco perguntas sem antecipar aplicações.</li>
                    <li><strong className="text-[var(--navy)]">10 min · Interpretação:</strong> escolha duas perguntas e use os apoios apenas depois de ouvir o grupo.</li>
                    <li><strong className="text-[var(--navy)]">4 min · Aplicação:</strong> o grupo escolhe uma prática pequena e verificável.</li>
                    <li><strong className="text-[var(--navy)]">3 min · Oração:</strong> encerre respondendo ao texto, sem pressionar pedidos pessoais.</li>
                  </ol>
                </section>

                <div className="prose-content mt-12">
                  <h2>Ideias simples para variar o encontro</h2>
                  <p>
                    A variação ajuda o grupo a manter atenção, mas precisa
                    continuar servindo ao texto. Atividades curtas podem
                    preparar o coração para a leitura ou ajudar a revisar o que
                    foi aprendido.
                  </p>
                </div>

                <div className="mt-6 rounded-lg border border-[var(--border)] p-6">
                  <h3 className="font-bold text-[var(--navy)]">
                    Ideias para aplicar
                  </h3>
                  <ul className="mt-4 grid gap-3 leading-7 text-[var(--muted)] sm:grid-cols-2">
                    {ideas.map((idea) => (
                      <li key={idea}>- {idea}</li>
                    ))}
                  </ul>
                </div>

                <RelatedTools
                  description="Estas ferramentas podem ajudar a transformar o estudo em participação, revisão e conversa guiada."
                  tools={[
                    {
                      title: "Quiz por Tema",
                      description:
                        "Escolha uma temática e use perguntas para revisar o assunto.",
                      href: "/quiz-biblico#quiz",
                    },
                    {
                      title: "Complete a Frase",
                      description:
                        "Trabalhe atenção ao texto com uma dinâmica simples.",
                      href: "/complete-a-frase",
                    },
                    {
                      title: "Ligue os Pares",
                      description:
                        "Conecte personagens, livros, lugares e acontecimentos.",
                      href: "/ligue-os-pares",
                    },
                    {
                      title: "Dinâmicas para Células",
                      description:
                        "Roteiros prontos para conduzir conversa, leitura e oração.",
                      href: "/dinamicas-para-celulas",
                    },
                    {
                      title: "Jogo da Memória",
                      description:
                        "Relacione personagens e símbolos para revisar associações bíblicas.",
                      href: "/jogo-da-memoria-biblico",
                    },
                  ]}
                />

                <div className="prose-content mt-12">
                  <h2>Conclusão</h2>
                  <p>
                    Ideias para estudo em grupo são boas quando ajudam
                    as pessoas a olhar para o texto com atenção e responder com
                    fé. A simplicidade, nesse caso, não diminui a profundidade;
                    ela torna a participação mais possível.
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
