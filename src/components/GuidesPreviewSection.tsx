import Link from "next/link";
import { cellDynamics } from "@/data/cellDynamics";
import { ScrollReveal } from "./ScrollReveal";

const guides = [
  {
    label: "Células",
    title: "Como usar quiz em células",
    text: "Um caminho simples para quebrar o gelo, ler referências e transformar perguntas em conversa.",
    href: "/guias/como-usar-quiz-biblico-em-celulas",
  },
  {
    label: "Jovens",
    title: "Dinâmicas para jovens",
    text: "Ideias para conduzir encontros com participação, cuidado e aplicação prática da Palavra.",
    href: "/guias/dinamicas-biblicas-para-jovens",
  },
  {
    label: "Grupos",
    title: "Jogos para grupos",
    text: "Veja qual formato combina com o momento: quiz, pares, memória ou complete a frase.",
    href: "/guias/jogos-biblicos-para-grupos",
  },
];

export function GuidesPreviewSection() {
  return (
    <section id="guias" className="section-space paper-texture border-y border-[var(--border)]">
      <div className="container-site">
        <ScrollReveal>
          <div className="grid items-end gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <span className="eyebrow">Guias para conduzir</span>
              <h2 className="section-title">
                Conteúdo prático para líderes, famílias e grupos.
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="section-copy">
                Além dos jogos, o Bíblia Clube reúne orientações para preparar
                encontros com mais clareza, participação e cuidado.
              </p>
              <Link href="/guias" className="button-secondary mt-6">
                Ver todos os guias <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <ScrollReveal
              key={guide.href}
              className="h-full"
              delay={120 + index * 90}
            >
              <Link
                href={guide.href}
                className="card group flex h-full min-h-64 flex-col !rounded-lg p-7 no-underline transition hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_20px_55px_rgba(37,50,43,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-[var(--gold-soft)] px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[var(--olive-dark)]">
                    {guide.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid size-10 place-items-center rounded-full border border-[var(--border)] text-[var(--olive-dark)] transition group-hover:border-[var(--gold)] group-hover:bg-white"
                  >
                    →
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-2xl leading-tight text-[var(--navy)]">
                  {guide.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{guide.text}</p>
                <span className="mt-auto pt-6 text-sm font-extrabold text-[var(--olive-dark)]">
                  Ler guia <span aria-hidden="true">→</span>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 grid gap-3 border-t border-[var(--border)] pt-7 sm:grid-cols-3">
          {[
            [String(cellDynamics.length), "dinâmicas para grupos"],
            ["6", "guias de condução"],
            ["0", "cadastro obrigatório"],
          ].map(([value, label], index) => (
            <ScrollReveal key={label} delay={160 + index * 70}>
              <div>
                <strong className="block font-serif text-3xl text-[var(--navy)]">
                  {value}
                </strong>
                <span className="mt-1 block text-sm text-[var(--muted)]">
                  {label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
