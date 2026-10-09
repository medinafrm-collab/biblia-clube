export type GameEditorialExample = {
  title: string;
  explanation: string;
  reference: string;
};

type GameEditorialSectionProps = {
  title: string;
  paragraphs: string[];
  benefits: string[];
  groupTips: string[];
  sourceNote: string;
  examples?: GameEditorialExample[];
};

export function GameEditorialSection({
  title,
  paragraphs,
  benefits,
  groupTips,
  sourceNote,
  examples = [],
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

        {examples.length > 0 && (
          <section className="mt-10 max-w-4xl">
            <h3 className="font-serif text-3xl text-[var(--navy)]">Exemplos comentados</h3>
            <p className="mt-3 leading-7 text-[var(--muted)]">Estes exemplos mostram como conferir uma associação ou resposta. Não garantem a ordem de uma rodada sorteada.</p>
            <div className="mt-6 divide-y divide-[var(--border)]">
              {examples.map((example) => (
                <article key={example.title} className="py-5 first:pt-0">
                  <h4 className="font-serif text-2xl text-[var(--navy)]">{example.title}</h4>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{example.explanation}</p>
                  <p className="mt-3 text-sm font-bold text-[var(--olive-dark)]">Para conferir: {example.reference}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <p className="mt-8 max-w-4xl text-sm leading-7 text-[var(--muted)]">
          <strong className="text-[var(--navy)]">Critério editorial: </strong>
          {sourceNote}
        </p>
      </div>
    </section>
  );
}
