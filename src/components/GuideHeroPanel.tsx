type GuideHeroPanelProps = {
  description: string;
  chips: string[];
  steps: string[];
};

export function GuideHeroPanel({
  description,
  chips,
  steps,
}: GuideHeroPanelProps) {
  return (
    <div className="guide-hero-panel rounded-lg border border-[var(--border)] bg-white/70 p-5 shadow-[0_18px_60px_rgba(37,50,43,0.055)] backdrop-blur sm:p-6">
      <p className="text-lg leading-8 text-[var(--muted)]">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full bg-[var(--gold-soft)] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.1em] text-[var(--olive-dark)]"
          >
            {chip}
          </span>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="mt-6 grid grid-cols-[auto_1fr] gap-x-3 gap-y-3"
      >
        {steps.map((step, index) => (
          <div key={step} className="contents">
            <span className="relative grid size-8 place-items-center rounded-full border border-[var(--gold)]/40 bg-[var(--background)] text-xs font-extrabold text-[var(--olive-dark)]">
              {index + 1}
              {index === 0 ? (
                <span className="guide-pulse absolute -right-0.5 -top-0.5 size-2 rounded-full bg-[var(--gold)]" />
              ) : null}
            </span>
            <span className="self-center text-sm font-bold text-[var(--navy)]">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
