"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { LibraryItem } from "@/data/libraryItems";

const types = ["Todos", "Artigo", "Guia", "Dinâmica", "Quiz", "Jogo", "Ferramenta", "Material"];
const audiences = ["Todos", "Famílias", "Jovens", "Casais", "Grupos", "Líderes"];
const audienceTerms: Record<string, string[]> = {
  "Famílias": ["famil"], "Jovens": ["joven"], "Casais": ["casais"],
  "Grupos": ["grupo", "celula"], "Líderes": ["lider"],
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

type LibraryExplorerProps = { items: LibraryItem[] };

export function LibraryExplorer({ items }: LibraryExplorerProps) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Todos");
  const [audience, setAudience] = useState("Todos");

  const visibleItems = useMemo(() => {
    const term = normalize(query.trim());

    return items.filter((item) => {
      const matchesQuery =
        !term ||
        normalize(`${item.title} ${item.description} ${item.topic}`).includes(term);
      const matchesType = type === "Todos" || item.type === type;
      const matchesAudience =
        audience === "Todos" ||
        audienceTerms[audience]?.some((term) => normalize(item.audience).includes(term)) ||
        item.audience === "Todos";

      return matchesQuery && matchesType && matchesAudience;
    });
  }, [audience, items, query, type]);

  return (
    <section className="bg-white py-6 sm:py-8" aria-labelledby="acervo-title">
      <div className="container-site">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <div>
            <h2 id="acervo-title" className="font-serif text-2xl text-[var(--navy)]">Explore o acervo</h2>
          </div>
          <p className="text-sm leading-6 text-[var(--muted)]">
            {items.length} recursos gratuitos
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 border-y border-[var(--border)] py-4 md:grid-cols-[minmax(0,1fr)_13rem_13rem]">
          <label className="col-span-2 grid min-w-0 gap-2 text-sm font-bold text-[var(--navy)] md:col-span-1">
            Buscar por palavra
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ex.: jovens, Marcos, acolhimento"
              className="min-h-12 min-w-0 rounded-md border border-[var(--border)] bg-white px-4 font-normal text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)]"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-[var(--navy)]">
            Tipo de conteúdo
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              className="min-h-12 min-w-0 rounded-md border border-[var(--border)] bg-white px-3 font-normal text-[var(--foreground)] outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)]"
            >
              {types.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-[var(--navy)]">
            Público
            <select
              value={audience}
              onChange={(event) => setAudience(event.target.value)}
              className="min-h-12 min-w-0 rounded-md border border-[var(--border)] bg-white px-3 font-normal text-[var(--foreground)] outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)]"
            >
              {audiences.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <p className="mt-4 text-sm font-bold text-[var(--muted)]" aria-live="polite" aria-atomic="true">
          {visibleItems.length} {visibleItems.length === 1 ? "resultado" : "resultados"}
        </p>

        {visibleItems.length > 0 ? (
          <div className="mt-5 grid gap-x-8 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <Link
                key={`${item.type}-${item.href}`}
                href={item.href}
                className="group flex min-h-64 flex-col border-t border-[var(--border)] py-7 text-[var(--foreground)] no-underline transition hover:border-[var(--gold)]"
              >
                <div className="flex items-center justify-between gap-4 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--olive-dark)]">
                  <span>{item.type}</span>
                  <span className="normal-case tracking-normal text-[var(--muted)]">{item.meta}</span>
                </div>
                <h3 className="mt-5 font-serif text-2xl leading-tight text-[var(--navy)] transition group-hover:text-[var(--olive-dark)]">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 leading-7 text-[var(--muted)]">{item.description}</p>
                <div className="mt-6 flex items-center justify-between gap-3 text-sm font-extrabold text-[var(--navy)]">
                  <span>{item.audience}</span>
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-8 border-y border-[var(--border)] py-12 text-center">
            <h3 className="font-serif text-2xl text-[var(--navy)]">Nenhum recurso encontrado.</h3>
            <p className="mt-3 text-[var(--muted)]">Tente uma palavra mais ampla ou altere os filtros.</p>
            <button
              type="button"
              onClick={() => { setQuery(""); setType("Todos"); setAudience("Todos"); }}
              className="button-secondary mt-6"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
