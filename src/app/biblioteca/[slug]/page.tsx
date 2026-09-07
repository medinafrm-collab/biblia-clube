import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { editorialArticles, getEditorialArticle } from "@/data/editorialContent";
import { libraryItems } from "@/data/libraryItems";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return editorialArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getEditorialArticle(slug);
  if (!article) return {};

  const path = `/biblioteca/${article.slug}`;
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: path,
      title: article.title,
      description: article.summary,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getEditorialArticle(slug);
  if (!article) notFound();

  const related = article.relatedPaths
    .map((path) => libraryItems.find((item) => item.href === path))
    .filter((item) => item !== undefined);
  const url = `https://www.bibliaclube.com.br/biblioteca/${article.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    image: `https://www.bibliaclube.com.br${article.image}`,
    datePublished: "2026-08-29",
    dateModified: article.updatedAtISO ?? "2026-08-29",
    inLanguage: "pt-BR",
    author: { "@type": "Organization", name: "Bíblia Clube", url: "https://www.bibliaclube.com.br/sobre" },
    publisher: { "@type": "Organization", name: "Bíblia Clube" },
    mainEntityOfPage: url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <article>
          <header className="paper-texture border-b border-[var(--border)] py-12 sm:py-16">
            <div className="container-site">
              <nav aria-label="Navegação estrutural" className="flex flex-wrap gap-2 text-sm text-[var(--muted)]">
                <Link href="/" className="font-bold text-[var(--navy)] no-underline">Início</Link>
                <span aria-hidden="true">/</span>
                <Link href="/biblioteca" className="font-bold text-[var(--navy)] no-underline">Biblioteca</Link>
                <span aria-hidden="true">/</span>
                <span>{article.category}</span>
              </nav>

              <div className="mt-9 grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
                <div>
                  <span className="eyebrow">{article.eyebrow}</span>
                  <h1 className="display-title mt-5 max-w-4xl text-[clamp(3rem,6vw,5.2rem)] text-[var(--navy)]">{article.title}</h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{article.summary}</p>
                  <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-[var(--olive-dark)]">
                    <span>{article.audience}</span>
                    <span aria-hidden="true">•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
                  </div>
                  <figcaption className="mt-2 text-xs text-[var(--muted)]">
                    <a href={article.imageSource} target="_blank" rel="noreferrer" className="text-inherit">{article.imageCredit}</a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </header>

          <div className="bg-white py-14 sm:py-20">
            <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div className="min-w-0">
                <div className="border-b border-[var(--border)] pb-10 text-lg leading-8 text-[var(--foreground)]">
                  {article.introduction.map((paragraph) => <p key={paragraph} className="mt-5 first:mt-0">{paragraph}</p>)}
                </div>

                <div className="mt-12 grid gap-14">
                  {article.sections.map((section, sectionIndex) => (
                    <section key={section.heading} id={`secao-${sectionIndex + 1}`} className="scroll-mt-28">
                      <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--gold-ink)]">{String(sectionIndex + 1).padStart(2, "0")}</span>
                      <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight text-[var(--navy)]">{section.heading}</h2>

                      {section.paragraphs && (
                        <div className="mt-5 grid gap-4 text-[1.05rem] leading-8 text-[var(--muted)]">
                          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>
                      )}

                      {section.bullets && (
                        <ul className="mt-6 grid gap-0 border-y border-[var(--border)]">
                          {section.bullets.map((item) => (
                            <li key={item} className="grid grid-cols-[1.5rem_1fr] gap-3 border-b border-[var(--border)] py-4 leading-7 text-[var(--muted)] last:border-0">
                              <span className="font-bold text-[var(--gold-ink)]" aria-hidden="true">✓</span><span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.steps && (
                        <ol className="mt-7 grid gap-0 border-y border-[var(--border)]">
                          {section.steps.map((step, index) => (
                            <li key={step.title} className="grid gap-3 border-b border-[var(--border)] py-6 last:border-0 sm:grid-cols-[3.5rem_1fr]">
                              <span className="font-serif text-3xl text-[var(--olive)]">{String(index + 1).padStart(2, "0")}</span>
                              <div><h3 className="font-serif text-2xl text-[var(--navy)]">{step.title}</h3><p className="mt-2 leading-7 text-[var(--muted)]">{step.text}</p></div>
                            </li>
                          ))}
                        </ol>
                      )}

                      {section.schedule && (
                        <dl className="mt-7 grid gap-0 border-y border-[var(--border)]">
                          {section.schedule.map((slot) => (
                            <div key={`${slot.time}-${slot.title}`} className="grid gap-3 border-b border-[var(--border)] py-5 last:border-0 sm:grid-cols-[6.5rem_1fr]">
                              <dt className="font-extrabold text-[var(--olive-dark)]">{slot.time}</dt>
                              <dd><strong className="font-serif text-xl text-[var(--navy)]">{slot.title}</strong><p className="mt-1 leading-7 text-[var(--muted)]">{slot.text}</p></dd>
                            </div>
                          ))}
                        </dl>
                      )}

                      {section.questions && (
                        <ol className="mt-7 grid gap-3 sm:grid-cols-2">
                          {section.questions.map((question, index) => (
                            <li key={question} className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-5 leading-7 text-[var(--foreground)]">
                              <span className="mr-2 font-serif text-xl text-[var(--gold-ink)]">{String(index + 1).padStart(2, "0")}</span>{question}
                            </li>
                          ))}
                        </ol>
                      )}

                      {section.note && <p className="mt-7 border-l-2 border-[var(--gold)] bg-[var(--gold-soft)] px-5 py-4 leading-7 text-[var(--olive-dark)]"><strong>Em resumo:</strong> {section.note}</p>}
                      {section.reference && <p className="mt-5 text-sm font-extrabold text-[var(--olive-dark)]">Referências para leitura: {section.reference}</p>}
                      {section.sources && (
                        <div className="mt-6 border-t border-[var(--border)] pt-5">
                          <p className="text-sm font-extrabold text-[var(--navy)]">Fontes oficiais consultadas</p>
                          <ul className="mt-3 grid gap-2 text-sm leading-6">
                            {section.sources.map((source) => (
                              <li key={source.href}>
                                <a href={source.href} target="_blank" rel="noreferrer" className="font-bold text-[var(--olive-dark)]">{source.title} ↗</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              </div>

              <aside className="h-fit border-t border-[var(--border)] pt-6 lg:sticky lg:top-28">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--olive-dark)]">Neste conteúdo</p>
                <ol className="mt-5 grid gap-3 text-sm leading-6">
                  {article.sections.map((section, index) => (
                    <li key={section.heading}><a href={`#secao-${index + 1}`} className="text-[var(--muted)] no-underline hover:text-[var(--navy)]">{section.heading}</a></li>
                  ))}
                </ol>
                <div className="mt-8 border-t border-[var(--border)] pt-6 text-sm leading-6 text-[var(--muted)]">
                  <strong className="block text-[var(--navy)]">Autoria e revisão</strong>
                  <p className="mt-2">Conteúdo preparado e revisado pelo projeto independente Bíblia Clube.</p>
                  <p className="mt-3">Atualizado em {article.updatedAt}.</p>
                  <Link href="/sobre" className="mt-4 inline-flex font-extrabold text-[var(--olive-dark)] no-underline">Conheça os critérios editoriais →</Link>
                </div>
              </aside>
            </div>
          </div>

          <section className="paper-texture border-y border-[var(--border)] py-14 sm:py-18">
            <div className="container-site">
              <span className="eyebrow">Próximos passos</span>
              <h2 className="section-title">Coloque o conteúdo em prática.</h2>
              <div className="mt-8 grid gap-x-8 md:grid-cols-3">
                {related.map((item) => (
                  <Link key={item.href} href={item.href} className="group border-t border-[var(--border)] py-6 text-inherit no-underline hover:border-[var(--gold)]">
                    <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--olive-dark)]">{item.type}</span>
                    <strong className="mt-3 block font-serif text-2xl leading-tight text-[var(--navy)]">{item.title}</strong>
                    <span className="mt-5 inline-flex font-extrabold text-[var(--navy)]">Abrir <span className="ml-2 transition group-hover:translate-x-1" aria-hidden="true">→</span></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
