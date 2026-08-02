import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideHeroPanel } from "@/components/GuideHeroPanel";
import { GuideVisualBlock } from "@/components/GuideVisualBlock";
import { Header } from "@/components/Header";
import { RelatedTools } from "@/components/RelatedTools";

const title = "Como conduzir uma célula participativa | Bíblia Clube";
const description =
  "Orientações para conduzir uma célula cristã mais participativa, com leitura bíblica, conversa, dinâmica e oração aplicada.";

const steps = [
  {
    title: "Prepare o encontro com um objetivo claro",
    text: "Antes de pensar na dinâmica, defina o foco do encontro. Pode ser comunhão, discipulado, evangelismo, cuidado pastoral ou aplicação de um tema estudado pela igreja.",
  },
  {
    title: "Comece com acolhimento, não com pressa",
    text: "Os primeiros minutos ajudam a criar o ambiente. Receba as pessoas, permita uma conversa breve e explique o caminho do encontro de forma simples.",
  },
  {
    title: "Leia a referência bíblica com participação",
    text: "Convide uma ou duas pessoas para lerem os textos principais, ou leia você mesmo quando o grupo estiver mais tímido. O importante é que a Palavra conduza o encontro.",
  },
  {
    title: "Use perguntas que abrem conversa",
    text: "Perguntas boas não servem para constranger. Elas ajudam o grupo a observar o texto, entender a mensagem e pensar em uma aplicação possível.",
  },
  {
    title: "Feche com oração conectada ao tema",
    text: "A oração final pode retomar o que foi conversado e pedir que Deus fortaleça o grupo naquela área específica, sem transformar o momento em uma fórmula fixa.",
  },
];

const participationTips = [
  "Faça perguntas curtas e claras.",
  "Dê tempo para as pessoas pensarem.",
  "Agradeça participações simples.",
  "Evite corrigir em tom de constrangimento.",
  "Convide pessoas diferentes ao longo do encontro.",
  "Respeite quem ainda não se sente à vontade para falar.",
];

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/guias/como-conduzir-uma-celula-participativa",
  },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "/guias/como-conduzir-uma-celula-participativa",
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
    "https://www.bibliaclube.com.br/guias/como-conduzir-uma-celula-participativa",
};

export default function ParticipativeCellGuide() {
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
                  <span className="eyebrow">Guia para liderança de célula</span>
                  <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.7rem,6vw,4.7rem)] text-[var(--navy)]">
                    Como conduzir uma célula participativa.
                  </h1>
                </div>
                <GuideHeroPanel
                  description="Uma célula participativa não depende de muitas atividades. Ela nasce de uma condução atenta e acolhedora, em que as pessoas têm espaço para ouvir, falar e orar."
                  chips={["Liderança", "Células", "Condução"]}
                  steps={["Acolher", "Ler juntos", "Conduzir resposta"]}
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
                  <li>- Como estruturar o encontro sem engessar.</li>
                  <li>- Como incentivar participação com segurança.</li>
                  <li>- Onde entram leitura bíblica, dinâmica e oração.</li>
                  <li>- Ferramentas para apoiar a condução.</li>
                </ul>
                <Link href="/dinamicas-para-celulas" className="button-primary mt-6">
                  Ver dinâmicas
                  <span aria-hidden="true">→</span>
                </Link>
              </aside>

              <div className="min-w-0">
                <div className="prose-content">
                  <h2>Participação não significa falar o tempo todo</h2>
                  <p>
                    Uma célula participativa não é aquela em que todos precisam
                    falar muito. É aquela em que as pessoas se sentem incluídas,
                    compreendem o caminho do encontro e percebem que podem
                    contribuir sem medo de julgamento.
                  </p>
                  <p>
                    O líder tem um papel importante: abrir espaço, organizar o
                    tempo, proteger o ambiente e manter o foco na Palavra. A
                    condução precisa ser leve, mas não improvisada.
                  </p>

                  <h2>Uma estrutura simples ajuda o grupo</h2>
                  <p>
                    Ter uma sequência não significa transformar a célula em um
                    roteiro rígido. Significa oferecer direção. O líder pode
                    adaptar o tempo conforme o grupo, mas uma estrutura básica
                    evita dispersão e ajuda todos a acompanharem.
                  </p>
                </div>

                <GuideVisualBlock
                  eyebrow="Fluxo do encontro"
                  title="Uma sequência que não engessa"
                  description="O líder pode adaptar o tempo, mas uma ordem simples ajuda o grupo a caminhar junto."
                  variant="timeline"
                  items={[
                    {
                      label: "01",
                      title: "Acolhimento",
                      text: "Receba as pessoas e apresente o tema com simplicidade.",
                    },
                    {
                      label: "02",
                      title: "Leitura",
                      text: "Convide participantes para lerem as referências principais.",
                    },
                    {
                      label: "03",
                      title: "Dinâmica",
                      text: "Use uma atividade curta para abrir participação.",
                    },
                    {
                      label: "04",
                      title: "Resposta",
                      text: "Finalize com conversa prática e oração ligada ao tema.",
                    },
                  ]}
                />

                <div className="mt-10 grid gap-4">
                  {steps.map((step, index) => (
                    <section
                      key={step.title}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-6"
                    >
                      <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--gold)]">
                        Etapa {index + 1}
                      </span>
                      <h3 className="mt-3 font-serif text-2xl text-[var(--navy)]">
                        {step.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[var(--muted)]">
                        {step.text}
                      </p>
                    </section>
                  ))}
                </div>

                <div className="prose-content mt-12">
                  <h2>Como incentivar participação com cuidado</h2>
                  <p>
                    A participação cresce quando o grupo percebe que o ambiente
                    é seguro. O líder pode fazer perguntas, mas também precisa
                    ouvir com atenção e administrar o tempo para que poucas
                    pessoas não dominem toda a conversa.
                  </p>
                </div>

                <div className="mt-6 rounded-lg border border-[var(--border)] p-6">
                  <h3 className="font-bold text-[var(--navy)]">
                    Práticas que ajudam
                  </h3>
                  <ul className="mt-4 grid gap-3 leading-7 text-[var(--muted)] sm:grid-cols-2">
                    {participationTips.map((tip) => (
                      <li key={tip}>- {tip}</li>
                    ))}
                  </ul>
                </div>

                <section className="mt-12 rounded-lg border border-[var(--gold)]/30 bg-[var(--gold-soft)] p-6 sm:p-8">
                  <h2 className="font-serif text-3xl text-[var(--navy)]">
                    Sugestão de condução
                  </h2>
                  <ol className="mt-5 grid gap-4 leading-7 text-[var(--olive-dark)]">
                    <li>1. Acolha o grupo e apresente o tema do encontro.</li>
                    <li>2. Convide participantes para lerem as referências bíblicas.</li>
                    <li>3. Faça uma dinâmica curta ou uma pergunta de abertura.</li>
                    <li>4. Conduza a conversa para observação, entendimento e aplicação.</li>
                    <li>5. Finalize com oração relacionada ao tema vivido pelo grupo.</li>
                  </ol>
                </section>

                <RelatedTools
                  description="Estas ferramentas ajudam a variar a participação sem tirar a Palavra do centro do encontro."
                  tools={[
                    {
                      title: "Dinâmicas para Células",
                      description:
                        "Roteiros com objetivo, materiais, referências e sugestão de condução.",
                      href: "/dinamicas-para-celulas",
                    },
                    {
                      title: "Quiz Bíblico",
                      description:
                        "Perguntas para abrir conversa e revisar histórias bíblicas.",
                      href: "/quiz-biblico#quiz",
                    },
                    {
                      title: "Modo Grupo",
                      description:
                        "Atividades pensadas para participação em equipes.",
                      href: "/modo-grupo",
                    },
                  ]}
                />

                <div className="prose-content mt-12">
                  <h2>Conclusão</h2>
                  <p>
                    Conduzir uma célula participativa é unir preparo e
                    sensibilidade. Quando a liderança cria espaço para a
                    Palavra, para a escuta e para a oração, o encontro deixa de
                    ser apenas uma reunião e se torna um ambiente de cuidado e
                    crescimento.
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
