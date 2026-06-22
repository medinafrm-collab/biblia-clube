const games = [
  {
    title: "Quiz Bíblico Geral",
    description:
      "Uma seleção variada para aprender sobre personagens, livros e histórias conhecidas.",
    tag: "Disponível",
    featured: true,
    icon: "✦",
  },
  {
    title: "Desafios por Tema",
    description: "Rodadas sobre Jesus, profetas, mulheres da Bíblia e muito mais.",
    tag: "Em breve",
    icon: "◎",
  },
  {
    title: "Modo Grupo",
    description: "Perguntas e desafios pensados para jogar em equipes.",
    tag: "Em breve",
    icon: "♧",
  },
  {
    title: "Ranking Bíblico",
    description: "Acompanhe pontuações e celebre a evolução da comunidade.",
    tag: "Em breve",
    icon: "♜",
  },
  {
    title: "Dinâmicas para Células",
    description: "Atividades prontas para quebrar o gelo, conversar e aprender.",
    tag: "Em breve",
    icon: "◇",
  },
];

export function GamesSection() {
  return (
    <section id="jogos" className="section-space bg-white">
      <div className="container-site">
        <span className="eyebrow">Jogos disponíveis</span>
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <h2 className="section-title">Uma biblioteca que vai crescer com você.</h2>
          <p className="section-copy lg:justify-self-end">
            Este é só o começo. O catálogo foi pensado para receber novas
            dinâmicas sem perder a simplicidade.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <article
              key={game.title}
              className={`card flex min-h-64 flex-col p-7 ${
                game.featured
                  ? "border-[var(--navy)] bg-[var(--navy)] text-white md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  aria-hidden="true"
                  className={`grid size-12 place-items-center rounded-2xl text-xl ${
                    game.featured
                      ? "bg-white/10 text-[var(--gold)]"
                      : "bg-[var(--surface-soft)] text-[var(--olive-dark)]"
                  }`}
                >
                  {game.icon}
                </span>
                <span
                  className={`rounded-full px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] ${
                    game.featured
                      ? "bg-[var(--gold)] text-[var(--navy)]"
                      : "bg-[var(--gold-soft)] text-[var(--olive-dark)]"
                  }`}
                >
                  {game.tag}
                </span>
              </div>
              <h3
                className={`mt-8 font-serif text-2xl ${
                  game.featured ? "text-white" : "text-[var(--navy)]"
                }`}
              >
                {game.title}
              </h3>
              <p
                className={`mt-3 leading-7 ${
                  game.featured ? "text-white/70" : "text-[var(--muted)]"
                }`}
              >
                {game.description}
              </p>
              {game.featured && (
                <a
                  href="#quiz"
                  className="mt-auto pt-7 text-sm font-extrabold text-[var(--gold)] no-underline"
                >
                  Jogar agora <span aria-hidden="true">→</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
