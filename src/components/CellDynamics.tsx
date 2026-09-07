"use client";

import Link from "next/link";
import { useState } from "react";
import { cellDynamics, type CellAudience } from "@/data/cellDynamics";

type FilterId = "todos" | CellAudience | "quebra-gelos";

const filters: { id: FilterId; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "jovens", label: "Jovens" },
  { id: "casais", label: "Casais" },
  { id: "quebra-gelos", label: "Quebra-gelos" },
];

export function CellDynamics() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("todos");
  const visibleDynamics =
    activeFilter === "todos"
      ? cellDynamics
      : activeFilter === "quebra-gelos"
        ? cellDynamics.filter((dynamic) => dynamic.audience === "todos")
        : cellDynamics.filter((dynamic) => dynamic.audience === activeFilter);

  function selectFilter(filter: FilterId) {
    setActiveFilter(filter);
  }

  return (
    <section className="section-space bg-white">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="eyebrow">Encontros prontos para conduzir</span>
            <h2 className="section-title">Escolha uma dinâmica e conduza com leveza.</h2>
          </div>
          <p className="section-copy max-w-xl lg:mb-1">
            Comece por um público ou momento do encontro. Cada roteiro foi pensado para facilitar a conversa, sem exigir materiais complexos.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar dinâmicas por público">
          {filters.map((filter) => {
            const isSelected = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => selectFilter(filter.id)}
                className={`min-h-11 rounded-full border px-5 text-sm font-extrabold transition ${isSelected ? "border-[var(--navy)] bg-[var(--navy)] text-white" : "border-[var(--border)] bg-white text-[var(--navy)] hover:border-[var(--gold)]"}`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleDynamics.map((dynamic) => (
            <article
              key={dynamic.id}
              className="flex min-h-[22rem] flex-col rounded-lg border border-[var(--border)] bg-[var(--background)] p-6 transition hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_18px_45px_rgba(37,50,43,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-[var(--gold-soft)] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--olive-dark)]">
                  {dynamic.audienceLabel}
                </span>
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[var(--border)] text-[var(--olive-dark)]" aria-hidden="true">
                  →
                </span>
              </div>
              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--gold-ink)]">
                {dynamic.category}
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-tight text-[var(--navy)]">
                {dynamic.title}
              </h3>
              <p className="mt-4 flex-1 leading-7 text-[var(--muted)]">
                {dynamic.summary}
              </p>
              <p className="mt-5 text-sm font-bold text-[var(--olive-dark)]">
                {dynamic.duration} · {dynamic.groupSize}
              </p>
              <Link
                href={`/dinamicas-para-celulas/${dynamic.id}`}
                className="mt-5 inline-flex min-h-11 items-center font-extrabold text-[var(--navy)] no-underline"
              >
                Ver dinâmica <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
