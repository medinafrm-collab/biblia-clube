import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MeetingBuilder } from "@/components/MeetingBuilder";
import { cellDynamics } from "@/data/cellDynamics";

const title = "Monte seu encontro bíblico";
const description = "Crie um roteiro gratuito de encontro com tempo, dinâmica, jogo, referências e perguntas de acordo com o seu público e objetivo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/monte-seu-encontro" },
  openGraph: { type: "website", locale: "pt_BR", url: "/monte-seu-encontro", title, description },
};

export default function MonteSeuEncontroPage() {
  const meetingDynamics = cellDynamics.map((dynamic) => ({
    id: dynamic.id,
    audience: dynamic.audience,
    category: dynamic.category,
    title: dynamic.title,
    summary: dynamic.summary,
    duration: dynamic.duration,
    materials: dynamic.materials,
    objective: dynamic.objective,
    steps: dynamic.steps,
    questions: dynamic.questions,
    references: dynamic.references,
    leaderNote: dynamic.leaderNote,
    prayerSuggestion: dynamic.prayerSuggestion,
  }));

  return (
    <>
      <div className="print:hidden"><Header /></div>
      <main>
        <section className="paper-texture border-b border-[var(--border)] py-10 sm:py-14 print:hidden">
          <div className="container-site">
            <nav aria-label="Navegação estrutural" className="flex gap-2 text-sm text-[var(--muted)]"><Link href="/" className="font-bold text-[var(--navy)] no-underline">Início</Link><span aria-hidden="true">/</span><span>Monte seu encontro</span></nav>
            <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:items-center lg:gap-12">
              <div><span className="eyebrow">Planejador gratuito</span><h1 className="display-title mt-4 max-w-3xl text-[clamp(2.5rem,4.1vw,3.75rem)] text-[var(--navy)]">Um encontro completo, construído a partir do seu contexto.</h1></div>
              <p className="text-base leading-7 text-[var(--muted)]">Escolha público, duração e objetivo. O Bíblia Clube combina uma dinâmica, um jogo, referências e perguntas em um roteiro que você pode imprimir ou compartilhar.</p>
            </div>
          </div>
        </section>
        <MeetingBuilder dynamics={meetingDynamics} />
      </main>
      <div className="print:hidden"><Footer /></div>
    </>
  );
}
