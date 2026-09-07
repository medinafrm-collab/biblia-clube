import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const title = "Guias para jogos e células";
const description =
  "Guias práticos para usar jogos, quiz, dinâmicas e estudos em células, grupos de jovens, casais e pequenos grupos cristãos.";

const guides = [
  {
    title: "Como usar quiz bíblico em células",
    description:
      "Um roteiro leve para transformar perguntas em conversa, participação e aprendizado em pequenos grupos.",
    href: "/guias/como-usar-quiz-biblico-em-celulas",
    audience: "Células e grupos",
  },
  {
    title: "Dinâmicas bíblicas para jovens",
    description:
      "Ideias para conduzir encontros com jovens sem constranger, conectando participação, Palavra e aplicação prática.",
    href: "/guias/dinamicas-biblicas-para-jovens",
    audience: "Jovens",
  },
  {
    title: "Jogos bíblicos para grupos",
    description:
      "Como escolher jogos para quebrar o gelo, revisar temas e envolver pessoas com perfis diferentes.",
    href: "/guias/jogos-biblicos-para-grupos",
    audience: "Grupos e equipes",
  },
  {
    title: "Quiz bíblico para casais",
    description:
      "Sugestões para usar perguntas em encontros de casais com cuidado, escuta e edificação.",
    href: "/guias/quiz-biblico-para-casais",
    audience: "Casais",
  },
  {
    title: "Como conduzir uma célula participativa",
    description:
      "Orientações para líderes criarem encontros com mais participação, leitura bíblica e oração aplicada.",
    href: "/guias/como-conduzir-uma-celula-participativa",
    audience: "Liderança",
  },
  {
    title: "Ideias para estudo bíblico em grupo",
    description:
      "Formatos simples para organizar estudos em grupo com perguntas, referências, jogos e conversa guiada.",
    href: "/guias/ideias-para-estudo-biblico-em-grupo",
    audience: "Estudo bíblico",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/guias",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/guias",
    title: `${title} | Bíblia Clube`,
    description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  inLanguage: "pt-BR",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: guides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.title,
      url: `https://www.bibliaclube.com.br${guide.href}`,
    })),
  },
};

export default function GuidesPage() {
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
        <section className="paper-texture border-b border-[var(--border)] py-16 sm:py-20">
          <div className="container-site">
            <nav
              aria-label="Navegação estrutural"
              className="flex flex-wrap gap-2 text-sm text-[var(--muted)]"
            >
              <Link href="/" className="font-bold text-[var(--navy)] no-underline">
                Início
              </Link>
              <span aria-hidden="true">/</span>
              <span>Guias</span>
            </nav>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
              <div>
                <span className="eyebrow">Conteúdo para conduzir melhor</span>
                <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.7rem,5vw,4.25rem)] text-[var(--navy)]">
                  Guias para jogos, células e estudos em grupo.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                  Reunimos orientações práticas para líderes, casais, jovens e
                  pequenos grupos usarem as ferramentas do Bíblia Clube com
                  propósito, leveza e cuidado.
                </p>
              </div>

              <figure className="relative mb-3 mr-3">
                <span
                  aria-hidden="true"
                  className="absolute -bottom-3 -right-3 left-3 top-3 rounded-lg border border-[var(--gold)] opacity-40"
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/images/editorial/grupo-estudo-mesa-preta.webp"
                    alt="Grupo de diferentes idades reunido para preparar e conversar sobre um estudo bíblico"
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

        <section className="bg-white py-16 sm:py-20">
          <div className="container-site grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-6 no-underline transition hover:-translate-y-0.5 hover:border-[var(--gold)] hover:shadow-[0_18px_45px_rgba(37,50,43,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)]"
              >
                <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--olive-dark)]">
                  {guide.audience}
                </span>
                <h2 className="mt-5 font-serif text-2xl leading-tight text-[var(--navy)]">
                  {guide.title}
                </h2>
                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {guide.description}
                </p>
                <span className="mt-6 inline-flex text-sm font-extrabold text-[var(--olive-dark)]">
                  Ler guia <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
