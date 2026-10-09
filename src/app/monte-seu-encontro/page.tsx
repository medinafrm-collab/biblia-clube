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
    meetingCore: dynamic.meetingCore,
    materials: dynamic.materials,
    objective: dynamic.objective,
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
        <section className="border-t border-[var(--border)] bg-white py-12 print:hidden">
          <div className="container-site max-w-4xl">
            <h2 className="font-serif text-3xl text-[var(--navy)]">Critérios e limites do roteiro</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">As sugestões combinam recursos já publicados no acervo, sem gerar novos textos por IA durante o uso. Primeiro são consideradas as dinâmicas indicadas para o público escolhido; depois, palavras relacionadas ao objetivo ajudam a ordenar as opções. Essa seleção não substitui a avaliação de quem conhece o grupo.</p>
            <p className="mt-4 leading-7 text-[var(--muted)]">Em 30 minutos, a distribuição é 3 para acolhimento, 5 para dinâmica, 5 para jogo, 7 para leitura, 7 para conversa e 3 para encerramento. É uma adaptação curta, não a promessa de executar integralmente uma dinâmica mais longa. Se a conversa crescer, reduza atividades em vez de apressar participantes.</p>
            <p className="mt-4 leading-7 text-[var(--muted)]">As escolhas não criam páginas públicas de resultados e o site não salva o roteiro em uma conta. A cópia compartilhada ou impressa fica sob seu controle. Não inclua informações pessoais sensíveis; confira as referências e use participação voluntária. Para um modelo em branco, consulte <Link href="/materiais/roteiro-de-encontro">Roteiro de encontro para preencher</Link>.</p>
          </div>
        </section>
      </main>
      <div className="print:hidden"><Footer /></div>
    </>
  );
}
