"use client";

export function PrintActions() {
  return (
    <div className="print:hidden">
      <button type="button" onClick={() => window.print()} className="button-primary">
        Imprimir ou salvar em PDF <span aria-hidden="true">↓</span>
      </button>
      <p className="mt-3 max-w-sm text-xs leading-5 text-[var(--muted)]">
        Na janela de impressão, escolha “Salvar como PDF” para guardar uma cópia digital.
      </p>
    </div>
  );
}
