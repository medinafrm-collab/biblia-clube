type AdPlaceholderProps = {
  compact?: boolean;
};

export function AdPlaceholder({ compact = false }: AdPlaceholderProps) {
  return (
    <aside
      aria-label="Espaço reservado para publicidade"
      className="border-y border-[var(--border)] bg-[var(--surface-soft)] py-6"
    >
      <div
        className={`${compact ? "" : "container-site "}flex min-h-20 flex-col items-center justify-center gap-2 text-center`}
      >
        <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[var(--olive-dark)]">
          Publicidade
        </span>
        <p className="text-xs leading-5 text-[var(--muted)]">
          Espaço reservado para anúncios relevantes
        </p>
      </div>
    </aside>
  );
}
