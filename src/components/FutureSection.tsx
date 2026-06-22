const futureItems = [
  "Quizzes por tema",
  "Rankings e desafios",
  "Modo multiplayer",
  "Materiais para líderes",
  "Jogos educativos",
  "Área de assinantes",
  "Materiais digitais",
  "Conteúdos exclusivos",
];

export function FutureSection() {
  return (
    <section id="futuro" className="section-space border-t border-[var(--border)] bg-white">
      <div className="container-site grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <span className="eyebrow">Futuro do projeto</span>
          <h2 className="section-title">Um clube feito para crescer em comunidade.</h2>
          <p className="section-copy">
            Queremos transformar bons momentos de aprendizado em experiências
            que aproximem pessoas, atravessem gerações e apoiem quem cuida de
            grupos e comunidades.
          </p>
          <a href="/sobre" className="button-secondary mt-8">
            Conheça nossa proposta
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {futureItems.map((item, index) => (
            <div
              key={item}
              className={`card flex min-h-32 flex-col justify-between p-5 sm:p-6 ${
                index === 0 || index === 5 ? "bg-[var(--surface-soft)]" : ""
              }`}
            >
              <span className="text-xs font-bold text-[var(--gold)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong className="mt-5 font-serif text-lg leading-snug text-[var(--navy)] sm:text-xl">
                {item}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
