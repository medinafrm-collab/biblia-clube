import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideHeroPanel } from "@/components/GuideHeroPanel";
import { GuideVisualBlock } from "@/components/GuideVisualBlock";
import { Header } from "@/components/Header";
import { RelatedTools } from "@/components/RelatedTools";

const title = "Jogos bíblicos para grupos | Bíblia Clube";
const description =
  "Veja como escolher e conduzir jogos bíblicos para grupos, células, jovens e equipes de forma leve, participativa e edificante.";

const choices = [
  {
    title: "Para quebrar o gelo",
    text: "Prefira jogos rápidos, com regras simples e perguntas acessíveis. O objetivo é fazer o grupo começar a interagir sem medo de errar.",
  },
  {
    title: "Para revisar um tema",
    text: "Escolha perguntas ligadas ao estudo anterior. Depois de cada resposta, reserve alguns minutos para recuperar a ideia principal do texto bíblico.",
  },
  {
    title: "Para trabalhar em equipes",
    text: "Divida o grupo em times pequenos, combine uma pontuação simbólica e deixe claro que o aprendizado vale mais do que o placar.",
  },
  {
    title: "Para aprofundar uma conversa",
    text: "Use menos perguntas e mais tempo de diálogo. Uma única resposta pode abrir uma boa conversa sobre fé, obediência, perdão ou serviço.",
  },
];

const formats = [
  "Quiz bíblico com alternativas.",
  "Ligue os pares com personagens, lugares e acontecimentos.",
  "Complete a frase para trabalhar atenção e memória.",
  "Rodadas em equipe com tempo controlado.",
  "Perguntas abertas após a explicação da resposta.",
];

const cautions = [
  "Explique as regras antes da primeira rodada.",
  "Não permita brincadeiras que exponham alguém.",
  "Adapte a dificuldade ao grupo presente.",
  "Use o jogo como ponte para a Palavra, não como fim em si mesmo.",
  "Encerre retomando o aprendizado principal.",
];

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/guias/jogos-biblicos-para-grupos",
  },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "/guias/jogos-biblicos-para-grupos",
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
    "https://www.bibliaclube.com.br/guias/jogos-biblicos-para-grupos",
};

export default function BiblicalGamesForGroupsGuide() {
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
                  <span className="eyebrow">Guia para grupos e equipes</span>
                  <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.7rem,6vw,4.7rem)] text-[var(--navy)]">
                    Jogos bíblicos para grupos.
                  </h1>
                </div>
                <GuideHeroPanel
                  description="Eles podem aproximar pessoas, tornar o encontro mais participativo e ajudar o grupo a lembrar histórias e temas da Palavra com naturalidade."
                  chips={["Equipes", "Famílias", "Sem cadastro"]}
                  steps={["Escolher formato", "Jogar em grupo", "Conversar sobre o tema"]}
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
                  <li>- Como escolher o jogo certo para cada momento.</li>
                  <li>- Formatos simples para grupos pequenos ou grandes.</li>
                  <li>- Cuidados para manter a dinâmica saudável.</li>
                  <li>- Ferramentas do Bíblia Clube para aplicar na prática.</li>
                </ul>
                <Link href="/modo-grupo" className="button-primary mt-6">
                  Abrir modo grupo
                  <span aria-hidden="true">→</span>
                </Link>
              </aside>

              <div className="min-w-0">
                <div className="prose-content">
                  <h2>Por que esses jogos funcionam bem em grupo?</h2>
                  <p>
                    Em um grupo, nem todo mundo participa do mesmo jeito. Há
                    pessoas comunicativas, pessoas tímidas, visitantes e membros
                    que ainda estão se aproximando da fé. Um jogo bem escolhido
                    cria uma porta de entrada simples para todos.
                  </p>
                  <p>
                    A força do jogo não está apenas na resposta correta. Ela
                    aparece quando a pergunta ajuda o grupo a lembrar uma
                    história, abrir a Bíblia, conversar sobre o texto e perceber
                    uma aplicação para a vida.
                  </p>

                  <h2>Escolha o jogo a partir do objetivo</h2>
                  <p>
                    Antes de decidir a dinâmica, pense no que o encontro precisa
                    naquele dia. Um grupo novo talvez precise de integração. Um
                    grupo mais maduro pode aproveitar melhor uma conversa
                    mais aprofundada. O formato deve acompanhar esse
                    propósito.
                  </p>
                </div>

                <GuideVisualBlock
                  eyebrow="Escolha do formato"
                  title="Qual jogo combina com o momento?"
                  description="O formato certo depende do objetivo do encontro e do perfil do grupo."
                  variant="compare"
                  items={[
                    {
                      label: "QZ",
                      title: "Quiz",
                      text: "Bom para revisar histórias e iniciar conversas com respostas comentadas.",
                    },
                    {
                      label: "LP",
                      title: "Ligue os pares",
                      text: "Funciona bem para conectar personagens, lugares e acontecimentos.",
                    },
                    {
                      label: "CF",
                      title: "Complete a frase",
                      text: "Ajuda o grupo a prestar atenção em trechos e referências.",
                    },
                    {
                      label: "JM",
                      title: "Jogo da memória",
                      text: "Traz ritmo visual e pode ser jogado sozinho, em família ou em equipes.",
                    },
                  ]}
                />

                <div className="mt-10 grid gap-4">
                  {choices.map((choice, index) => (
                    <section
                      key={choice.title}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-6"
                    >
                      <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--gold)]">
                        Uso {index + 1}
                      </span>
                      <h3 className="mt-3 font-serif text-2xl text-[var(--navy)]">
                        {choice.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[var(--muted)]">
                        {choice.text}
                      </p>
                    </section>
                  ))}
                </div>

                <div className="prose-content mt-12">
                  <h2>Formatos que ajudam o grupo a participar</h2>
                  <p>
                    O ideal é variar os formatos ao longo dos encontros. Assim,
                    o grupo não fica preso a uma única dinâmica e pessoas com
                    estilos diferentes encontram formas diferentes de participar.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-[var(--border)] p-6">
                    <h3 className="font-bold text-[var(--navy)]">
                      Ideias de formato
                    </h3>
                    <ul className="mt-4 space-y-3 leading-7 text-[var(--muted)]">
                      {formats.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-[var(--border)] p-6">
                    <h3 className="font-bold text-[var(--navy)]">
                      Cuidados na condução
                    </h3>
                    <ul className="mt-4 space-y-3 leading-7 text-[var(--muted)]">
                      {cautions.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <RelatedTools
                  description="Escolha uma ferramenta conforme o perfil do grupo e o tempo disponível para a atividade."
                  tools={[
                    {
                      title: "Modo Grupo",
                      description:
                        "Perguntas pensadas para equipes, com condução leve e participação coletiva.",
                      href: "/modo-grupo",
                    },
                    {
                      title: "Quiz Bíblico",
                      description:
                        "Rodadas com alternativas e explicações para aprender a cada resposta.",
                      href: "/quiz-biblico#quiz",
                    },
                    {
                      title: "Ligue os Pares",
                      description:
                        "Conecte personagens, lugares e acontecimentos bíblicos.",
                      href: "/ligue-os-pares",
                    },
                    {
                      title: "Complete a Frase",
                      description:
                        "Uma dinâmica de atenção, memória e reflexão bíblica.",
                      href: "/complete-a-frase",
                    },
                    {
                      title: "Jogo da Memória",
                      description:
                        "Encontre pares com cartas de personagens, símbolos, versos e referências.",
                      href: "/jogo-da-memoria-biblico",
                    },
                  ]}
                />

                <div className="prose-content mt-12">
                  <h2>Conclusão</h2>
                  <p>
                    Jogos para grupos são mais úteis quando têm
                    propósito claro. Eles podem divertir, mas também podem
                    conduzir o grupo para uma conversa mais atenta sobre a
                    Palavra e sobre a vida com Deus.
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
