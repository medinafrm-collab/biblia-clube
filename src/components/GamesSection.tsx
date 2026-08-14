import { ScrollReveal } from "./ScrollReveal";

const games = [
  {
    title: "Quiz Bíblico Geral",
    description:
      "Uma seleção variada para aprender sobre personagens, livros e histórias conhecidas.",
    tag: "Disponível",
    href: "/quiz-biblico",
    icon: "✦",
  },
  {
    title: "Desafios por Tema",
    description:
      "Rodadas sobre o Antigo Testamento, Jesus e grandes personagens.",
    tag: "Disponível",
    href: "/quiz-biblico",
    icon: "◎",
  },
  {
    title: "Modo Grupo",
    description: "Perguntas e desafios pensados para jogar em equipes.",
    tag: "Disponível",
    href: "/modo-grupo",
    icon: "♧",
  },
  {
    title: "Ligue os Pares",
    description:
      "Conecte personagens, livros, lugares e acontecimentos.",
    tag: "Novo",
    href: "/ligue-os-pares",
    icon: "↔",
  },
  {
    title: "Complete a Frase",
    description:
      "Escolha a continuação correta de frases e passagens.",
    tag: "Novo",
    href: "/complete-a-frase",
    icon: "✎",
  },
  {
    title: "Jogo da Memória",
    description:
      "Encontre pares entre personagens e símbolos ou versos e referências.",
    tag: "Novo",
    href: "/jogo-da-memoria-biblico",
    icon: "▣",
  },
  {
    title: "Dinâmicas para Células",
    description: "Atividades prontas para quebrar o gelo, conversar e aprender.",
    tag: "Novo",
    href: "/dinamicas-para-celulas",
    icon: "◇",
  },
];

export function GamesSection() {
  return (
    <section id="jogos" className="section-space bg-white">
      <div className="container-site">
        <ScrollReveal>
          <span className="eyebrow">Jogos bíblicos grátis</span>
          <div className="grid items-end gap-6 lg:grid-cols-2">
            <h2 className="section-title">Novas formas de aprender a Bíblia jogando.</h2>
            <p className="section-copy lg:justify-self-end">
              Jogue online sem cadastro. O catálogo reúne quiz, desafios e
              dinâmicas gratuitas para aprender sozinho, em família ou em grupo.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
            <ScrollReveal
              key={game.title}
              className="h-full"
              delay={120 + index * 70}
            >
              <article className="card flex h-full min-h-64 flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className="grid size-12 place-items-center rounded-2xl bg-[var(--surface-soft)] text-xl text-[var(--olive-dark)]"
                  >
                    {game.icon}
                  </span>
                  <span
                    className="rounded-full bg-[var(--gold-soft)] px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[var(--olive-dark)]"
                  >
                    {game.tag}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-2xl text-[var(--navy)]">
                  {game.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {game.description}
                </p>
                {game.href && (
                  <div className="mt-auto pt-7">
                    <a
                      href={game.href}
                      className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-5 text-sm font-extrabold text-white no-underline shadow-sm transition hover:bg-[var(--navy-light)]"
                    >
                      Jogar agora <span aria-hidden="true">→</span>
                    </a>
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
