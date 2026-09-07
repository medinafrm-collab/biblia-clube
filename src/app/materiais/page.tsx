import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { printableResources } from "@/data/printableResources";

const title = "Materiais bíblicos gratuitos para imprimir";
const description =
  "Cartões, checklists, roteiros e planos gratuitos para usar em células, famílias, encontros de casais e jogos bíblicos.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/materiais" },
  openGraph: { type: "website", locale: "pt_BR", url: "/materiais", title, description },
};

export default function MateriaisPage() {
  return (
    <>
      <Header />
      <main>
        <section className="paper-texture border-b border-[var(--border)] py-16 sm:py-22">
          <div className="container-site">
            <nav aria-label="Navegação estrutural" className="flex gap-2 text-sm text-[var(--muted)]">
              <Link href="/" className="font-bold text-[var(--navy)] no-underline">Início</Link>
              <span aria-hidden="true">/</span>
              <span>Materiais</span>
            </nav>
            <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
              <div>
                <span className="eyebrow">Baixe, imprima e compartilhe</span>
                <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.7rem,5vw,4.25rem)] text-[var(--navy)]">Materiais prontos para o próximo encontro.</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                  Recursos sem cadastro, preparados para funcionar em folha A4 ou como PDF no celular.
                </p>
              </div>

              <figure className="relative mb-3 mr-3">
                <span
                  aria-hidden="true"
                  className="absolute -bottom-3 -right-3 left-3 top-3 rounded-lg border border-[var(--gold)] opacity-40"
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/images/editorial/materiais-preparacao.webp"
                    alt="Pessoas organizando materiais impressos, Bíblia e tablet para um encontro"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <div className="container-site">
            <div className="grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
              {printableResources.map((resource, index) => (
                <Link key={resource.slug} href={`/materiais/${resource.slug}`} className="group flex min-h-80 flex-col border-t border-[var(--border)] py-7 text-inherit no-underline hover:border-[var(--gold)]">
                  <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--olive-dark)]">
                    <span>{String(index + 1).padStart(2, "0")}</span><span>{resource.pages}</span>
                  </div>
                  <h2 className="mt-6 font-serif text-3xl leading-tight text-[var(--navy)]">{resource.title}</h2>
                  <p className="mt-4 flex-1 leading-7 text-[var(--muted)]">{resource.summary}</p>
                  <div className="mt-6 flex items-center justify-between font-extrabold text-[var(--navy)]"><span>{resource.audience}</span><span aria-hidden="true">→</span></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
