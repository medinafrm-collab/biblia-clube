import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideHeroPanel } from "@/components/GuideHeroPanel";
import { GuideVisualBlock } from "@/components/GuideVisualBlock";
import { Header } from "@/components/Header";
import { RelatedTools } from "@/components/RelatedTools";

const title = "Ideias para estudo bíblico em grupo | Bíblia Clube";
const description =
  "Ideias práticas para organizar estudo bíblico em grupo com perguntas, referências, conversa guiada e atividades bíblicas simples.";

const methods = [
  {
    title: "Observação do texto",
    text: "Comece perguntando o que o texto mostra: personagens, ações, contexto, repetições e ideias principais. Essa etapa ajuda o grupo a não pular direto para opiniões.",
  },
  {
    title: "Entendimento da mensagem",
    text: "Depois, conduza o grupo a pensar no significado. O que o texto ensina sobre Deus, sobre o ser humano, sobre fé, obediência, pecado, graça ou esperança?",
  },
  {
    title: "Aplicação para a vida",
    text: "Por fim, pergunte que atitude prática pode nascer daquela leitura. A aplicação deve ser possível, honesta e conectada ao texto bíblico.",
  },
  {
    title: "Oração relacionada ao tema",
    text: "A oração final ajuda a transformar conversa em resposta diante de Deus. Ela pode pedir força, arrependimento, sabedoria, unidade ou perseverança.",
  },
];

const ideas = [
  "Começar com uma pergunta bíblica simples.",
  "Ler o mesmo texto em voz alta por duas pessoas.",
  "Pedir que o grupo identifique uma palavra-chave.",
  "Dividir em duplas para conversar por poucos minutos.",
  "Usar um quiz como revisão do tema.",
  "Encerrar com uma pergunta de aplicação para a semana.",
];

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
                  <li>- Um caminho simples para estudar o texto.</li>
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

                  <h2>Um caminho de três perguntas</h2>
                  <p>
                    Uma forma prática de conduzir o estudo é passar por três
                    perguntas: o que o texto mostra, o que o texto ensina e como
                    podemos responder. Esse caminho preserva o foco do texto e
                    favorece participação.
                  </p>
                </div>

                <GuideVisualBlock
                  eyebrow="Método simples"
                  title="Três perguntas para conduzir melhor"
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

                <div className="mt-10 grid gap-4">
                  {methods.map((method, index) => (
                    <section
                      key={method.title}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-6"
                    >
                      <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--gold)]">
                        Caminho {index + 1}
                      </span>
                      <h3 className="mt-3 font-serif text-2xl text-[var(--navy)]">
                        {method.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[var(--muted)]">
                        {method.text}
                      </p>
                    </section>
                  ))}
                </div>

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

                <section className="mt-12 rounded-lg border border-[var(--gold)]/30 bg-[var(--gold-soft)] p-6 sm:p-8">
                  <h2 className="font-serif text-3xl text-[var(--navy)]">
                    Sugestão de roteiro
                  </h2>
                  <ol className="mt-5 grid gap-4 leading-7 text-[var(--olive-dark)]">
                    <li>1. Apresente o tema e faça uma pergunta de abertura.</li>
                    <li>2. Leia a referência principal com o grupo.</li>
                    <li>3. Pergunte o que o texto mostra antes de pedir aplicações.</li>
                    <li>4. Use uma atividade curta para revisar ou fixar o tema.</li>
                    <li>5. Encerre com uma oração conectada à resposta prática.</li>
                  </ol>
                </section>

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
                        "Use pares de versos e referências para revisar o estudo.",
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
