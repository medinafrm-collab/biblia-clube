export function AdPlaceholder() {
  return (
    <aside
      aria-label="Espaço reservado para apoiadores"
      className="border-y border-[var(--border)] bg-[var(--surface-soft)] py-5"
    >
      <div className="container-site flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
        <span
          aria-hidden="true"
          className="grid size-7 place-items-center rounded-full border border-[var(--border)] bg-white text-xs text-[var(--olive)]"
        >
          ♡
        </span>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
          Espaço reservado para futuros apoiadores do projeto
        </p>
      </div>
    </aside>
  );
}
