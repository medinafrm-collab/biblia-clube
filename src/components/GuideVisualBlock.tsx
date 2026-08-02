type GuideVisualItem = {
  label: string;
  title: string;
  text: string;
};

type GuideVisualBlockProps = {
  eyebrow: string;
  title: string;
  description?: string;
  variant?: "timeline" | "checklist" | "compare" | "flow";
  items: GuideVisualItem[];
};

export function GuideVisualBlock({
  eyebrow,
  title,
  description,
  variant = "timeline",
  items,
}: GuideVisualBlockProps) {
  const isCompact = variant === "checklist" || variant === "compare";

  return (
    <section className="guide-visual-block mt-12 rounded-lg border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--olive-dark)]">
            {eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-[var(--navy)] sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 leading-7 text-[var(--muted)]">{description}</p>
          ) : null}
          <div aria-hidden="true" className="mt-7 hidden h-16 items-center sm:flex">
            <span className="guide-motion-line relative block h-px flex-1 bg-[var(--gold)]/45">
              <span className="guide-motion-dot absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-[var(--gold)]" />
            </span>
          </div>
        </div>

        <div
          className={`grid gap-3 ${
            isCompact ? "sm:grid-cols-2" : "sm:grid-cols-2"
          }`}
        >
          {items.map((item, index) => (
            <article
              key={`${item.label}-${item.title}`}
              className={`rounded-lg border border-[var(--border)] bg-white p-5 ${
                variant === "flow" && index === items.length - 1
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--gold-soft)] text-xs font-extrabold text-[var(--olive-dark)]">
                  {item.label}
                </span>
                <div>
                  <h3 className="font-serif text-xl leading-tight text-[var(--navy)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {item.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
