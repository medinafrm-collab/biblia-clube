const benefits = [
  "Quizzes e jogos exclusivos",
  "Dinâmicas para grupos",
  "Materiais para líderes",
  "Desafios semanais",
  "Conteúdos para impressão",
  "Acesso antecipado",
];

export function PremiumSection() {
  return (
    <section id="premium" className="section-space">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-[var(--navy)] px-6 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-80 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-40 right-32 size-96 rounded-full border border-[var(--gold)]/20"
          />

          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--gold)]">
                Experiência Premium · Em breve
              </span>
              <h2 className="mt-6 max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                Mais recursos para quem ensina, lidera e ama aprender.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
                Estamos preparando uma área especial com experiências
                completas para famílias, líderes e comunidades.
              </p>
              <a href="/contato" className="button-light mt-8">
                Quero ser avisado
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--gold)] text-sm font-bold text-[var(--navy)]"
                  >
                    ✓
                  </span>
                  <span className="text-sm font-bold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
