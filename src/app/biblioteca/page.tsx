import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LibraryExplorer } from "@/components/LibraryExplorer";
import { editorialArticles } from "@/data/editorialContent";
import { libraryItems } from "@/data/libraryItems";

const title = "Biblioteca de jogos, estudos e dinâmicas bíblicas";
const description =
  "Pesquise artigos, guias, jogos, dinâmicas, quizzes e materiais gratuitos para famílias, jovens, casais, líderes e grupos.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/biblioteca" },
  openGraph: { type: "website", locale: "pt_BR", url: "/biblioteca", title, description },
};

export default function BibliotecaPage() {
  const featured = editorialArticles[0];

  return (
    <>
      <Header />
      <main>
        <section className="paper-texture border-b border-[var(--border)] py-6 sm:py-8">
          <div className="container-site">
            <nav aria-label="Navegação estrutural" className="flex gap-2 text-sm text-[var(--muted)]">
              <Link href="/" className="font-bold text-[var(--navy)] no-underline">Início</Link>
              <span aria-hidden="true">/</span>
              <span>Biblioteca</span>
            </nav>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12">
              <div>
                <h1 className="font-serif text-4xl leading-tight text-[var(--navy)] sm:text-5xl">
                  Biblioteca
                </h1>
                <p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">
                  Artigos, jogos e materiais para aprender e preparar encontros.
                  Busque por assunto ou escolha um tipo de conteúdo e público.
                </p>
              </div>

              <Link href={`/biblioteca/${featured.slug}`} className="group block text-inherit no-underline">
                <figure className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-4 sm:grid-cols-[7rem_minmax(0,1fr)]">
                  <div className="relative aspect-square overflow-hidden rounded-md">
                    <Image
                      src="/images/editorial/grupo-modo-clean.webp"
                      alt="Grupo reunido ao redor de uma mesa com Bíblias e laptop"
                      fill
                      priority
                      sizes="(max-width: 640px) 88px, 112px"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="flex min-w-0 items-start justify-between gap-3">
                    <span>
                      <span className="block text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--olive-dark)]">Leitura em destaque</span>
                      <strong className="mt-2 block font-serif text-xl leading-snug text-[var(--navy)]">{featured.title}</strong>
                    </span>
                    <span className="mt-1 text-xl text-[var(--olive-dark)]" aria-hidden="true">→</span>
                  </figcaption>
                </figure>
              </Link>
            </div>
          </div>
        </section>
        <LibraryExplorer items={libraryItems} />
      </main>
      <Footer />
    </>
  );
}
