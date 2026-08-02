import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideHeroPanel } from "@/components/GuideHeroPanel";
import { GuideVisualBlock } from "@/components/GuideVisualBlock";
import { Header } from "@/components/Header";
import { RelatedTools } from "@/components/RelatedTools";

const title = "Quiz bíblico para casais | Bíblia Clube";
const description =
  "Orientações para usar quiz bíblico em encontros de casais, células e reuniões com foco em diálogo, cuidado e edificação.";

const principles = [
  {
    title: "Use perguntas como início de conversa",
    text: "O quiz não precisa testar conhecimento. Ele pode abrir um tema sobre aliança, perdão, serviço, paciência, comunicação e vida espiritual no lar.",
  },
  {
    title: "Evite expor histórias pessoais",
    text: "Em grupos de casais, algumas conversas exigem cuidado. O condutor deve evitar perguntas que obriguem alguém a revelar conflitos íntimos diante de todos.",
  },
  {
    title: "Valorize escuta e respeito",
    text: "Depois de uma resposta, convide o grupo a refletir sobre o princípio bíblico sem transformar o momento em comparação entre casais.",
  },
  {
    title: "Finalize apontando para prática e oração",
    text: "Uma boa rodada pode terminar com uma decisão simples: pedir perdão, melhorar a comunicação, orar juntos ou cultivar mais serviço dentro de casa.",
  },
];

const themes = [
  "Comunicação e escuta.",
  "Perdão e reconciliação.",
  "Aliança e fidelidade.",
  "Cuidado com palavras.",
  "Serviço mútuo.",
  "Oração no lar.",
];

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/guias/quiz-biblico-para-casais",
  },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "/guias/quiz-biblico-para-casais",
    title,
    description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  inLanguage: "pt-BR",
  author: {
    "@type": "Organization",
    name: "Bíblia Clube",
  },
  publisher: {
    "@type": "Organization",
    name: "Bíblia Clube",
    logo: {
      "@type": "ImageObject",
      url: "https://www.bibliaclube.com.br/icon.svg",
    },
  },
  mainEntityOfPage:
    "https://www.bibliaclube.com.br/guias/quiz-biblico-para-casais",
};

export default function CouplesQuizGuide() {
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
                <Link href="/guias" className="font-bold text-[var(--navy)] no-underline">
                  Guias
                </Link>
              </nav>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div>
                  <span className="eyebrow">Guia para casais e células</span>
                  <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.7rem,6vw,4.7rem)] text-[var(--navy)]">
                    Quiz bíblico para casais.
                  </h1>
                </div>
                <GuideHeroPanel
                  description="Perguntas bem escolhidas podem ajudar casais a conversar com mais leveza sobre temas importantes, desde que a condução seja respeitosa e pastoral."
                  chips={["Casais", "Escuta", "Cuidado"]}
                  steps={["Perguntar", "Refletir", "Aplicar no lar"]}
                />
              </div>
            </div>
          </section>

          <section className="bg-white py-16 sm:py-20">
            <div className="container-site grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <aside className="h-fit rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-6">
                <h2 className="font-serif text-2xl text-[var(--navy)]">
                  Neste guia
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
                  <li>- Como usar quiz sem expor o casal.</li>
                  <li>- Temas que favorecem diálogo e oração.</li>
                  <li>- Sugestão de condução para encontros de casais.</li>
                  <li>- Links para atividades relacionadas.</li>
                </ul>
                <Link href="/dinamicas-para-celulas" className="button-primary mt-6">
                  Ver dinâmicas
                  <span aria-hidden="true">→</span>
                </Link>
              </aside>

              <div className="min-w-0">
                <div className="prose-content">
                  <h2>O quiz pode servir a uma conversa mais profunda</h2>
                  <p>
                    Em encontros de casais, nem sempre é simples começar uma
                    conversa sobre fé, rotina, comunicação e cuidado mútuo. Uma
                    pergunta simples pode funcionar como porta de
                    entrada, tirando o peso de uma abordagem direta demais.
                  </p>
                  <p>
                    O objetivo não é avaliar quem conhece mais a Bíblia, nem
                    apontar falhas no relacionamento. O melhor uso do quiz é
                    conduzir o casal e o grupo a perceber princípios da Palavra
                    que podem ser praticados no lar.
                  </p>

                  <h2>Conduza com cuidado pastoral</h2>
                  <p>
                    Casais vivem realidades diferentes. Alguns estão em fases
                    leves, outros enfrentam cansaço, conflitos ou dores
                    silenciosas. Por isso, a condução precisa ser acolhedora,
                    sem brincadeiras que diminuam alguém ou exponham situações
                    delicadas.
                  </p>
                </div>

                <GuideVisualBlock
                  eyebrow="Condução com cuidado"
                  title="Do jogo para a conversa"
                  description="Em encontros de casais, o melhor resultado vem de perguntas que aproximam sem expor."
                  variant="flow"
                  items={[
                    {
                      label: "01",
                      title: "Pergunta",
                      text: "Use o quiz como início leve, não como avaliação do casal.",
                    },
                    {
                      label: "02",
                      title: "Princípio",
                      text: "Converse sobre o valor da Palavra presente na resposta.",
                    },
                    {
                      label: "03",
                      title: "Prática",
                      text: "Convide cada casal a pensar em um gesto simples para a semana.",
                    },
                    {
                      label: "04",
                      title: "Oração",
                      text: "Ore por unidade, perdão, escuta e cuidado dentro do lar.",
                    },
                  ]}
                />

                <div className="mt-10 grid gap-4">
                  {principles.map((principle, index) => (
                    <section
                      key={principle.title}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-6"
                    >
                      <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--gold)]">
                        Orientação {index + 1}
                      </span>
                      <h3 className="mt-3 font-serif text-2xl text-[var(--navy)]">
                        {principle.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[var(--muted)]">
                        {principle.text}
                      </p>
                    </section>
                  ))}
                </div>

                <div className="prose-content mt-12">
                  <h2>Temas que combinam com encontros de casais</h2>
                  <p>
                    Os temas mais úteis são aqueles que levam a atitudes
                    possíveis. Em vez de terminar apenas com uma reflexão geral,
                    o condutor pode propor uma pergunta prática: que gesto de
                    cuidado podemos cultivar nesta semana?
                  </p>
                </div>

                <div className="mt-6 rounded-lg border border-[var(--border)] p-6">
                  <h3 className="font-bold text-[var(--navy)]">
                    Sugestões de temas
                  </h3>
                  <ul className="mt-4 grid gap-3 leading-7 text-[var(--muted)] sm:grid-cols-2">
                    {themes.map((theme) => (
                      <li key={theme}>- {theme}</li>
                    ))}
                  </ul>
                </div>

                <section className="mt-12 rounded-lg border border-[var(--gold)]/30 bg-[var(--gold-soft)] p-6 sm:p-8">
                  <h2 className="font-serif text-3xl text-[var(--navy)]">
                    Sugestão de condução
                  </h2>
                  <ol className="mt-5 grid gap-4 leading-7 text-[var(--olive-dark)]">
                    <li>1. Abra com uma oração breve pelo encontro.</li>
                    <li>2. Escolha poucas perguntas e leia as referências com calma.</li>
                    <li>3. Depois de uma resposta, pergunte qual princípio aparece no texto.</li>
                    <li>4. Evite pedir relatos pessoais diante de todos.</li>
                    <li>5. Encerre orando por unidade, perdão, escuta e serviço no lar.</li>
                  </ol>
                </section>

                <RelatedTools
                  description="Use estas ferramentas para preparar encontros de casais com perguntas, conversa e atividades leves."
                  tools={[
                    {
                      title: "Quiz Bíblico",
                      description:
                        "Perguntas com explicações para iniciar boas conversas.",
                      href: "/quiz-biblico#quiz",
                    },
                    {
                      title: "Dinâmicas para Células",
                      description:
                        "Roteiros prontos que podem ser adaptados para casais.",
                      href: "/dinamicas-para-celulas",
                    },
                    {
                      title: "Modo Grupo",
                      description:
                        "Perguntas para equipes quando o encontro pede mais participação coletiva.",
                      href: "/modo-grupo",
                    },
                  ]}
                />

                <div className="prose-content mt-12">
                  <h2>Conclusão</h2>
                  <p>
                    Um quiz para casais pode ser simples e ainda assim
                    profundo. Quando há cuidado na condução, as perguntas ajudam
                    o grupo a conversar melhor, ouvir a Palavra e orar por
                    relacionamentos mais saudáveis.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
