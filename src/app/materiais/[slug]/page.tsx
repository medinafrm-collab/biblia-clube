import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PrintActions } from "@/components/PrintActions";
import { getPrintableResource, printableResources } from "@/data/printableResources";

type MaterialPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return printableResources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: MaterialPageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getPrintableResource(slug);
  if (!resource) return {};
  return {
    title: resource.title,
    description: resource.summary,
    alternates: { canonical: `/materiais/${resource.slug}` },
    openGraph: { title: resource.title, description: resource.summary, url: `/materiais/${resource.slug}`, type: "article" },
  };
}

export default async function MaterialPage({ params }: MaterialPageProps) {
  const { slug } = await params;
  const resource = getPrintableResource(slug);
  if (!resource) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: resource.title,
    description: resource.summary,
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    author: { "@type": "Organization", name: "Bíblia Clube" },
    url: `https://www.bibliaclube.com.br/materiais/${resource.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <div className="print:hidden"><Header /></div>
      <main>
        <section className="paper-texture border-b border-[var(--border)] py-12 sm:py-16 print:hidden">
          <div className="container-site">
            <nav aria-label="Navegação estrutural" className="flex flex-wrap gap-2 text-sm text-[var(--muted)]">
              <Link href="/" className="font-bold text-[var(--navy)] no-underline">Início</Link><span aria-hidden="true">/</span>
              <Link href="/materiais" className="font-bold text-[var(--navy)] no-underline">Materiais</Link><span aria-hidden="true">/</span><span>{resource.title}</span>
            </nav>
            <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className="eyebrow">{resource.eyebrow}</span>
                <h1 className="display-title mt-5 max-w-4xl text-[clamp(3rem,6vw,5rem)] text-[var(--navy)]">{resource.title}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{resource.summary}</p>
                <p className="mt-5 text-sm font-bold text-[var(--olive-dark)]">{resource.audience} · {resource.pages}</p>
              </div>
              <PrintActions />
            </div>
          </div>
        </section>

        <section className="bg-[#eef1eb] py-12 print:bg-white print:py-0">
          <div className="container-site print:w-full">
            <div className="mb-8 grid gap-6 rounded-lg border border-[var(--border)] bg-white p-6 md:grid-cols-[0.6fr_1fr] print:hidden">
              <h2 className="font-serif text-2xl text-[var(--navy)]">Como usar</h2>
              <ol className="grid gap-2 leading-7 text-[var(--muted)]">
                {resource.instructions.map((instruction, index) => <li key={instruction}>{index + 1}. {instruction}</li>)}
              </ol>
            </div>

            <article className="print-sheet mx-auto max-w-[900px] rounded-sm bg-white p-8 shadow-[0_18px_55px_rgba(37,50,43,0.12)] sm:p-12 print:max-w-none print:p-0 print:shadow-none">
              <header className="border-b-2 border-[var(--navy)] pb-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--olive-dark)]">Bíblia Clube · Material gratuito</p>
                <h2 className="mt-3 font-serif text-4xl leading-tight text-[var(--navy)]">{resource.title}</h2>
                <p className="mt-3 leading-7 text-[var(--muted)]">{resource.summary}</p>
              </header>

              <div className="mt-8 grid gap-9">
                {resource.sections.map((section) => (
                  <section key={section.title} className="print-section break-inside-avoid">
                    <h3 className="font-serif text-2xl text-[var(--navy)]">{section.title}</h3>
                    {section.description && <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{section.description}</p>}
                    <ul className="mt-4 grid gap-0 border-y border-[var(--border)]">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="min-w-0 break-words border-b border-[var(--border)] py-3 leading-6 text-[var(--foreground)] [overflow-wrap:anywhere] last:border-0 print:py-2 print:[overflow-wrap:normal]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              <footer className="mt-10 border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)] print:mt-4 print:pt-2">
                bibliaclube.com.br · Preparado e revisado pelo Bíblia Clube.
              </footer>
            </article>
          </div>
        </section>
      </main>
      <div className="print:hidden"><Footer /></div>
    </>
  );
}
