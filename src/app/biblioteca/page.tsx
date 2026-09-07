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
        <section className="paper-texture border-b border-[var(--border)] py-14 sm:py-20">
          <div className="container-site">
            <nav aria-label="Navegação estrutural" className="flex gap-2 text-sm text-[var(--muted)]">
              <Link href="/" className="font-bold text-[var(--navy)] no-underline">Início</Link>
              <span aria-hidden="true">/</span>
              <span>Biblioteca</span>
            </nav>

            <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
              <div>
                <span className="eyebrow">Biblioteca Bíblia Clube</span>
                <h1 className="display-title mt-5 max-w-4xl text-[clamp(3rem,6.8vw,5.5rem)] text-[var(--navy)]">
                  Conteúdo para aprender, preparar e compartilhar.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                  Um acervo organizado para quem joga, ensina, conduz grupos ou deseja criar uma rotina bíblica em família.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#acervo-title" className="button-primary">Explorar o acervo <span aria-hidden="true">↓</span></a>
                  <Link href="/monte-seu-encontro" className="button-secondary">Montar um encontro</Link>
                </div>
              </div>

              <Link href={`/biblioteca/${featured.slug}`} className="group block text-inherit no-underline">
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src="/images/editorial/grupo-modo-clean.webp"
                      alt="Grupo reunido ao redor de uma mesa com Bíblias e laptop"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="mt-4 flex items-start justify-between gap-5">
                    <span>
                      <span className="block text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--olive-dark)]">Leitura em destaque</span>
                      <strong className="mt-2 block font-serif text-2xl leading-tight text-[var(--navy)]">{featured.title}</strong>
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
