"use client";

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
  const [activeDynamicId, setActiveDynamicId] = useState(cellDynamics[0].id);
  const visibleDynamics =
    activeFilter === "todos"
      ? cellDynamics
      : activeFilter === "quebra-gelos"
        ? cellDynamics.filter((dynamic) => dynamic.audience === "todos")
        : cellDynamics.filter((dynamic) => dynamic.audience === activeFilter);
  const activeDynamic =
    visibleDynamics.find((dynamic) => dynamic.id === activeDynamicId) ??
    visibleDynamics[0];

  function selectFilter(filter: FilterId) {
    setActiveFilter(filter);
    const firstDynamic =
      filter === "todos"
          ? cellDynamics[0]
          : filter === "quebra-gelos"
            ? cellDynamics.find((dynamic) => dynamic.audience === "todos")
          : cellDynamics.find((dynamic) => dynamic.audience === filter);

    if (firstDynamic) setActiveDynamicId(firstDynamic.id);
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

        <div className="mt-6 grid gap-4 lg:grid-cols-[20rem_minmax(0,1fr)]">
          <div className="grid gap-3">
            {visibleDynamics.map((dynamic) => (
              <button
                key={dynamic.id}
                type="button"
                aria-pressed={activeDynamic.id === dynamic.id}
                onClick={() => setActiveDynamicId(dynamic.id)}
                className={`rounded-lg border p-5 text-left transition ${activeDynamic.id === dynamic.id ? "border-[var(--navy)] bg-[var(--navy)] text-white shadow-sm" : "border-[var(--border)] bg-white text-[var(--navy)] hover:border-[var(--gold)]"}`}
              >
                <span className={`text-xs font-extrabold uppercase tracking-[0.12em] ${activeDynamic.id === dynamic.id ? "text-[var(--gold)]" : "text-[var(--olive-dark)]"}`}>
                  {dynamic.audienceLabel}
                </span>
                <strong className="mt-2 block font-serif text-2xl">{dynamic.title}</strong>
                <span className={`mt-3 block text-sm leading-6 ${activeDynamic.id === dynamic.id ? "text-white/80" : "text-[var(--muted)]"}`}>
                  {dynamic.duration} · {dynamic.groupSize}
                </span>
              </button>
            ))}
          </div>

          <div className="grid gap-4">
          <article className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="eyebrow">{activeDynamic.category}</span>
                <h3 className="mt-4 font-serif text-4xl text-[var(--navy)] sm:text-5xl">{activeDynamic.title}</h3>
              </div>
              <div className="flex gap-2 text-sm font-bold text-[var(--olive-dark)]">
                <span className="rounded-full bg-[var(--gold-soft)] px-3 py-2">{activeDynamic.duration}</span>
                <span className="rounded-full bg-[var(--surface-soft)] px-3 py-2">{activeDynamic.groupSize}</span>
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">{activeDynamic.summary}</p>

            <div className="mt-8 grid gap-6 border-y border-[var(--border)] py-6 sm:grid-cols-2">
              <div>
                <h4 className="font-bold text-[var(--navy)]">Objetivo</h4>
                <p className="mt-2 leading-7 text-[var(--muted)]">{activeDynamic.objective}</p>
              </div>
              <div>
                <h4 className="font-bold text-[var(--navy)]">Materiais</h4>
                <ul className="mt-2 space-y-1 leading-7 text-[var(--muted)]">
                  {activeDynamic.materials.map((material) => <li key={material}>- {material}</li>)}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-serif text-3xl text-[var(--navy)]">Como conduzir</h4>
              <ol className="mt-5 grid gap-4">
                {activeDynamic.steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--navy)] text-sm font-extrabold text-white">{index + 1}</span>
                    <div>
                      <strong className="text-[var(--navy)]">{step.title}</strong>
                      <p className="mt-1 leading-7 text-[var(--muted)]">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="font-bold text-[var(--navy)]">Perguntas para conversar</h4>
                <ul className="mt-3 space-y-3 leading-7 text-[var(--muted)]">
                  {activeDynamic.questions.map((question) => <li key={question}>- {question}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[var(--navy)]">Referências bíblicas</h4>
                <p className="mt-3 leading-7 text-[var(--muted)]">{activeDynamic.references.join(" · ")}</p>
                <div className="mt-5 rounded-md border border-[var(--gold)]/30 bg-[var(--gold-soft)] p-4 text-sm leading-6 text-[var(--olive-dark)]">
                  <strong className="block text-[var(--navy)]">Para quem conduz</strong>
                  <span className="mt-1 block">{activeDynamic.leaderNote}</span>
                </div>
                <div className="mt-3 rounded-md border border-[var(--border)] bg-white p-4 text-sm leading-6 text-[var(--muted)]">
                  <strong className="block text-[var(--navy)]">Sugestão de condução</strong>
                  <span className="mt-1 block">{activeDynamic.prayerSuggestion}</span>
                </div>
              </div>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  );
}
