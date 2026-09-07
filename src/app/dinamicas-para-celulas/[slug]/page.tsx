import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScriptureReader } from "@/components/ScriptureReader";
import {
  cellDynamics,
  getCellDynamicById,
} from "@/data/cellDynamics";

type DynamicPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cellDynamics.map((dynamic) => ({ slug: dynamic.id }));
}

export async function generateMetadata({
  params,
}: DynamicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const dynamic = getCellDynamicById(slug);

  if (!dynamic) return {};

  const path = `/dinamicas-para-celulas/${dynamic.id}`;

  return {
    title: `${dynamic.title} — dinâmica bíblica`,
    description: dynamic.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: path,
      title: `${dynamic.title} | Bíblia Clube`,
      description: dynamic.summary,
    },
  };
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { slug } = await params;
  const dynamic = getCellDynamicById(slug);

  if (!dynamic) notFound();

  const relatedDynamics = cellDynamics
    .filter(
      (item) =>
        item.id !== dynamic.id && item.audience === dynamic.audience,
    )
    .slice(0, 3);
  const pageUrl = `https://www.bibliaclube.com.br/dinamicas-para-celulas/${dynamic.id}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: dynamic.title,
    description: dynamic.summary,
    inLanguage: "pt-BR",
    author: { "@type": "Organization", name: "Bíblia Clube" },
    publisher: { "@type": "Organization", name: "Bíblia Clube" },
    mainEntityOfPage: pageUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <article>
          <section className="paper-texture border-b border-[var(--border)] py-14 sm:py-20">
            <div className="container-site">
              <nav aria-label="Navegação estrutural" className="flex flex-wrap gap-2 text-sm text-[var(--muted)]">
                <Link href="/" className="font-bold text-[var(--navy)] no-underline">Início</Link>
                <span aria-hidden="true">/</span>
                <Link href="/dinamicas-para-celulas" className="font-bold text-[var(--navy)] no-underline">Dinâmicas</Link>
                <span aria-hidden="true">/</span>
                <span>{dynamic.audienceLabel}</span>
              </nav>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <div>
                  <span className="eyebrow">Dinâmica para {dynamic.audienceLabel.toLowerCase()}</span>
                  <h1 className="display-title mt-5 text-[clamp(3rem,7vw,5.4rem)] text-[var(--navy)]">
                    {dynamic.title}
                  </h1>
                  <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                    {dynamic.summary}
                  </p>
                </div>

                <aside className="rounded-lg border border-[var(--border)] bg-white/75 p-6 sm:p-7">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--olive-dark)]">Visão rápida</p>
                  <dl className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                    <div>
                      <dt className="text-sm font-bold text-[var(--muted)]">Duração</dt>
                      <dd className="mt-1 font-serif text-2xl text-[var(--navy)]">{dynamic.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-bold text-[var(--muted)]">Tamanho do grupo</dt>
                      <dd className="mt-1 font-serif text-2xl text-[var(--navy)]">{dynamic.groupSize}</dd>
                    </div>
                  </dl>
                  <a href="#conducao" className="button-primary mt-6">Começar a condução <span aria-hidden="true">↓</span></a>
                </aside>
              </div>
            </div>
          </section>

          <section className="bg-white py-14 sm:py-20">
            <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1fr)_19rem]">
              <div className="min-w-0">
                <section>
                  <span className="eyebrow">Antes de começar</span>
                  <div className="mt-7 grid gap-8 border-y border-[var(--border)] py-8 sm:grid-cols-2">
                    <div>
                      <h2 className="font-serif text-3xl text-[var(--navy)]">Objetivo</h2>
                      <p className="mt-4 leading-8 text-[var(--muted)]">{dynamic.objective}</p>
                    </div>
                    <div>
                      <h2 className="font-serif text-3xl text-[var(--navy)]">Materiais</h2>
                      <ul className="mt-4 space-y-2 leading-7 text-[var(--muted)]">
                        {dynamic.materials.map((material) => <li key={material}>- {material}</li>)}
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="conducao" className="scroll-mt-28 pt-14">
                  <span className="eyebrow">Sugestão de condução</span>
                  <h2 className="section-title">Um caminho simples para orientar o encontro.</h2>
                  <ol className="mt-9 grid gap-0 border-y border-[var(--border)]">
                    {dynamic.steps.map((step, index) => (
                      <li key={step.title} className="grid gap-4 border-b border-[var(--border)] py-7 last:border-0 sm:grid-cols-[4.5rem_1fr]">
                        <span className="font-serif text-4xl text-[var(--olive)]">{String(index + 1).padStart(2, "0")}</span>
                        <div>
                          <h3 className="font-serif text-2xl text-[var(--navy)]">{step.title}</h3>
                          <p className="mt-3 leading-8 text-[var(--muted)]">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="pt-14">
                  <span className="eyebrow">Conversa guiada</span>
                  <h2 className="section-title">Perguntas para trazer o tema para a vida.</h2>
                  <ol className="mt-8 grid gap-4">
                    {dynamic.questions.map((question, index) => (
                      <li key={question} className="flex gap-4 rounded-lg border border-[var(--border)] bg-[var(--background)] p-5 sm:p-6">
                        <span className="font-serif text-2xl text-[var(--gold-ink)]">{String(index + 1).padStart(2, "0")}</span>
                        <p className="leading-7 text-[var(--foreground)]">{question}</p>
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="mt-14 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-lg border border-[var(--gold)]/35 bg-[var(--gold-soft)] p-6">
                    <h2 className="font-serif text-2xl text-[var(--navy)]">Cuidado na condução</h2>
                    <p className="mt-3 leading-7 text-[var(--olive-dark)]">{dynamic.leaderNote}</p>
                  </div>
                  <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-6">
                    <h2 className="font-serif text-2xl text-[var(--navy)]">Oração sugerida</h2>
                    <p className="mt-3 leading-7 text-[var(--muted)]">{dynamic.prayerSuggestion}</p>
                  </div>
                </section>
              </div>

              <aside className="h-fit rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-6 lg:sticky lg:top-28">
                <span className="eyebrow">Base bíblica</span>
                <p className="mt-5 text-sm leading-6 text-[var(--muted)]">Abra cada passagem sem sair desta página.</p>
                <div className="mt-5 grid gap-5">
                  {dynamic.references.map((reference) => (
                    <div key={reference} className="border-b border-[var(--border)] pb-5 last:border-0 last:pb-0">
                      <strong className="font-serif text-xl text-[var(--navy)]">{reference}</strong>
                      <ScriptureReader reference={reference} />
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </section>

          <section className="paper-texture border-y border-[var(--border)] py-14 sm:py-20">
            <div className="container-site">
              <span className="eyebrow">Continue explorando</span>
              <h2 className="section-title">Outros roteiros para o mesmo público.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {relatedDynamics.map((item) => (
                  <Link key={item.id} href={`/dinamicas-para-celulas/${item.id}`} className="rounded-lg border border-[var(--border)] bg-white p-6 text-[var(--navy)] no-underline transition hover:border-[var(--gold)]">
                    <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--olive-dark)]">{item.category}</span>
                    <strong className="mt-4 block font-serif text-2xl">{item.title}</strong>
                    <span className="mt-5 inline-block font-bold">Ver dinâmica →</span>
                  </Link>
                ))}
              </div>
              <p className="mt-10 text-sm leading-6 text-[var(--muted)]">Conteúdo preparado e revisado pelo Bíblia Clube. As sugestões podem ser adaptadas à realidade e à faixa etária de cada grupo.</p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
