import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { quizTopics } from "@/data/quizTopics";

const title = "Desafios bíblicos por tema";
const description =
  "Escolha um tema e responda jornadas bíblicas com explicações e referências para continuar aprendendo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/desafios-por-tema" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/desafios-por-tema",
    title,
    description,
  },
};

const themedChallenges = quizTopics.filter((topic) => topic.id !== "geral");

export default function ThemedChallengesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="paper-texture border-b border-[var(--border)] py-14 sm:py-20">
          <div className="container-site">
            <nav aria-label="Navegação estrutural" className="flex gap-2 text-sm text-[var(--muted)]">
              <Link href="/" className="font-bold text-[var(--navy)] no-underline">Início</Link>
              <span aria-hidden="true">/</span>
              <span>Desafios por tema</span>
            </nav>

            <div className="mt-9 grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
              <div>
                <span className="eyebrow">Escolha sua jornada</span>
                <h1 className="display-title mt-5 max-w-3xl text-[clamp(2.8rem,5vw,4.4rem)] text-[var(--navy)]">
                  Um tema por vez, com contexto para aprender.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                  Cada desafio reúne perguntas relacionadas, respostas comentadas e referências para você continuar a leitura sem sair do percurso.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/games/desafios-temas-postits-natural.webp"
                  alt="Post-its escritos à mão com os oito temas dos desafios bíblicos"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <div className="container-site">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {themedChallenges.map((topic) => (
                <Link
                  key={topic.id}
                  href={topic.path}
                  className="group flex min-h-72 flex-col rounded-lg border border-[var(--border)] bg-[var(--background)] p-6 text-inherit no-underline transition hover:-translate-y-0.5 hover:border-[var(--gold)] hover:shadow-[0_16px_38px_rgba(37,50,43,0.08)]"
                >
                  <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--olive-dark)]">Desafio por tema</span>
                  <h2 className="mt-5 font-serif text-2xl leading-tight text-[var(--navy)]">{topic.label}</h2>
                  <p className="mt-4 flex-1 leading-7 text-[var(--muted)]">{topic.description}</p>
                  <span className="mt-6 text-sm font-extrabold text-[var(--olive-dark)]">Começar desafio <span aria-hidden="true">→</span></span>
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
