type GameEditorialSectionProps = {
  title: string;
  paragraphs: string[];
  benefits: string[];
  groupTips: string[];
  sourceNote: string;
};

export function GameEditorialSection({
  title,
  paragraphs,
  benefits,
  groupTips,
  sourceNote,
}: GameEditorialSectionProps) {
  return (
    <section className="border-t border-[var(--border)] bg-white py-16 sm:py-20">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <span className="eyebrow">Aproveite melhor a experiência</span>
            <h2 className="section-title">{title}</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[var(--muted)]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-10 border-y border-[var(--border)] py-10 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-3xl text-[var(--navy)]">
              O que a atividade desenvolve
            </h3>
            <ul className="mt-5 space-y-3 leading-7 text-[var(--muted)]">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <span aria-hidden="true" className="text-[var(--gold-ink)]">
                    ✓
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-[var(--navy)]">
              Como usar em grupo
            </h3>
            <ol className="mt-5 space-y-3 leading-7 text-[var(--muted)]">
              {groupTips.map((tip, index) => (
                <li key={tip} className="flex gap-3">
                  <strong className="text-[var(--gold-ink)]">
                    {String(index + 1).padStart(2, "0")}
                  </strong>
                  <span>{tip}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-7 text-[var(--muted)]">
          <strong className="text-[var(--navy)]">Critério editorial: </strong>
          {sourceNote}
        </p>
      </div>
    </section>
  );
}
