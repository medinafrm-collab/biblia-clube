import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideHeroPanel } from "@/components/GuideHeroPanel";
import { GuideVisualBlock } from "@/components/GuideVisualBlock";
import { Header } from "@/components/Header";
import { RelatedTools } from "@/components/RelatedTools";
import { couplesRecreationalQuiz as couplesQuiz } from "@/data/recreationalGuides";

const title = "Quiz bíblico para casais";
const description =
  "Seis perguntas bíblicas para jogar em dupla, com alternativas, gabaritos, referências e detalhes para conferir juntos, sem avaliar o relacionamento.";

const principles = [
  {
    title: "Escolham juntos ou alternem",
    text: "Uma pessoa pode ler e a outra procurar a referência; troquem quando quiserem. Também é possível decidir uma resposta em conjunto, sem pontos individuais.",
  },
  {
    title: "Consultem antes de conferir",
    text: "A Bíblia pode ficar aberta durante toda a rodada. Depois de escolher, comparem o gabarito com o versículo, aceitando diferenças de palavras entre traduções.",
  },
  {
    title: "Façam uma pausa quando necessário",
    text: "É possível pular uma pergunta ou apenas acompanhar. Se houver dúvida sobre quem age na cena, releiam o recorte antes de avançar; não há corrida para responder.",
  },
  {
    title: "Encerrem com uma descoberta",
    text: "Escolham um detalhe que conseguiram localizar: um lugar, um nome ou uma ação. Não é necessário compartilhar experiências pessoais nem avaliar o desempenho da dupla.",
  },
];

const themes = [
  "Lugares de chegada e de passagem.",
  "Nomes e parentescos mencionados no texto.",
  "Objetos presentes em uma cena.",
  "Trabalhos e atividades dos personagens.",
  "Ações realizadas com outras pessoas.",
  "Sequência dos acontecimentos narrados.",
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
  dateModified: "2026-10-10",
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
                  <span className="eyebrow">Leitura e lazer em dupla</span>
                  <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.7rem,6vw,4.7rem)] text-[var(--navy)]">
                    Quiz bíblico para casais.
                  </h1>
                </div>
                <GuideHeroPanel
                  description="Uma rodada para descobrir nomes, lugares e acontecimentos juntos. Consultem a Bíblia, escolham uma alternativa e confiram um detalhe da narrativa."
                  chips={["Casais", "Jogo em dupla", "Consulta livre"]}
                  steps={["Escolher", "Responder juntos", "Conferir"]}
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
                  <li>- Uma rodada cooperativa para jogar em dupla.</li>
                  <li>- Personagens, lugares, objetos e ações.</li>
                  <li>- Rodada pronta com seis perguntas e respostas.</li>
                  <li>- Sugestão de 15 minutos para três perguntas.</li>
                  <li>- Links para atividades relacionadas.</li>
                </ul>
                <Link href="/dinamicas-para-celulas" className="button-primary mt-6">
                  Ver dinâmicas
                  <span aria-hidden="true">→</span>
                </Link>
              </aside>

              <div className="min-w-0">
                <div className="prose-content">
                  <h2>Uma rodada para descobrir juntos</h2>
                  <p>
                    Escolham três das seis perguntas desta página. Uma pessoa
                    lê o enunciado e as alternativas; a outra pode procurar a
                    referência. Decidam juntas ou alternem quem responde. Um
                    exemplar compartilhado é suficiente, sem impressão ou cadastro.
                  </p>
                  <p>
                    As respostas estão visíveis para preparação: leiam primeiro
                    somente a pergunta e as opções. O gabarito explica o detalhe
                    pedido e sugere uma segunda observação. Esta seleção é do
                    guia; o quiz digital não garante as mesmas perguntas nem a mesma ordem.
                  </p>

                  <h2>Lazer compartilhado, sem avaliação do casal</h2>
                  <p>
                    O público deste guia são casais, mas as perguntas tratam
                    das narrativas, não do relacionamento de quem joga. Não há
                    comparação entre duplas nem perguntas sobre intimidade.
                    Consultar, pular uma questão e apenas acompanhar são opções
                    durante toda a atividade.
                  </p>
                </div>

                <GuideVisualBlock
                  eyebrow="Rodada cooperativa"
                  title="Da alternativa ao versículo"
                  description="Uma resposta pode ser conferida por ambos, sem cronômetro de disputa ou placar individual."
                  variant="flow"
                  items={[
                    {
                      label: "01",
                      title: "Pergunta",
                      text: "Leiam o enunciado e as quatro alternativas.",
                    },
                    {
                      label: "02",
                      title: "Escolha",
                      text: "Proponham uma resposta, com consulta livre.",
                    },
                    {
                      label: "03",
                      title: "Referência",
                      text: "Localizem quem age, o lugar ou o objeto pedido.",
                    },
                    {
                      label: "04",
                      title: "Descoberta",
                      text: "Confiram o detalhe complementar antes de avançar.",
                    },
                  ]}
                />

                <section className="mt-12" aria-labelledby="rodada-pronta">
                  <span className="eyebrow">Atividade pronta</span>
                  <h2 id="rodada-pronta" className="section-title mt-4">Seis perguntas para jogar em dupla.</h2>
                  <p className="section-copy max-w-3xl">
                    A seleção passa por viagens, pesca, um casamento, um ofício e funções em uma cena. O tema casais descreve o público, não uma interpretação das histórias como regras de casamento.
                  </p>

                  <div className="mt-8 border-y border-[var(--border)]">
                    {couplesQuiz.map((item, index) => (
                      <section key={item.reference} className="border-b border-[var(--border)] py-8 last:border-0">
                        <div className="grid gap-5 sm:grid-cols-[2.5rem_1fr]">
                          <span className="font-serif text-2xl text-[var(--gold-ink)]" aria-hidden="true">{index + 1}</span>
                          <div>
                            <h3 className="font-serif text-2xl leading-tight text-[var(--navy)]">{item.question}</h3>
                            <ol className="mt-4 grid gap-2 text-[var(--muted)] sm:grid-cols-2">
                              {item.options.map((option, optionIndex) => <li key={option}><strong className="mr-2 text-[var(--olive-dark)]">{String.fromCharCode(65 + optionIndex)}.</strong>{option}</li>)}
                            </ol>
                            <div className="mt-5 border-l-2 border-[var(--gold)] pl-4">
                              <p className="font-bold text-[var(--navy)]">Resposta: {item.answer}</p>
                              <p className="mt-2 leading-7 text-[var(--muted)]">{item.explanation}</p>
                              <p className="mt-2 text-sm font-bold text-[var(--olive-dark)]">Leia: {item.reference}</p>
                            </div>
                            <p className="mt-4 leading-7 text-[var(--foreground)]"><strong>Para conferir juntos:</strong> {item.observation}</p>
                          </div>
                        </div>
                      </section>
                    ))}
                  </div>
                </section>

                <section className="mt-12 border-y border-[var(--border)] py-8">
                  <h2 className="font-serif text-3xl text-[var(--navy)]">Uma rodada de 15 minutos</h2>
                  <ol className="mt-5 grid gap-4 leading-7 text-[var(--muted)] sm:grid-cols-2">
                    <li><strong className="text-[var(--navy)]">2 min · Combinado:</strong> escolham três perguntas e decidam como alternar leitura e consulta. Pontuação é dispensável.</li>
                    <li><strong className="text-[var(--navy)]">6 min · Quiz:</strong> use três perguntas, com até dois minutos para resposta e explicação.</li>
                    <li><strong className="text-[var(--navy)]">5 min · Texto e descoberta:</strong> releiam um recorte indicado e confiram seu detalhe complementar.</li>
                    <li><strong className="text-[var(--navy)]">2 min · Fechamento:</strong> escolham uma informação que localizaram e encerrem. Uma oração breve é opcional.</li>
                  </ol>
                  <p className="mt-6 text-sm leading-6 text-[var(--muted)]">
                    Os blocos somam 15 minutos sugeridos, não uma duração medida em uso real. Para jogar as seis perguntas, reservem mais tempo ou façam duas sessões. A rodada não oferece aconselhamento nem propõe mudanças no relacionamento; seu objetivo é ler e brincar juntos.
                  </p>
                </section>

                <div className="mt-10 grid gap-4">
                  {principles.map((principle, index) => (
                    <section
                      key={principle.title}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-6"
                    >
                      <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--gold-ink)]">
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
                  <h2>O que procurar na próxima rodada</h2>
                  <p>
                    Para continuar, escolham um tema do quiz digital ou outra
                    passagem curta. As categorias abaixo ajudam a observar a
                    narrativa. Não transformem cada personagem em modelo de
                    casal nem exijam respostas sobre a vida de quem joga.
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
                    <li>1. Separem uma Bíblia e escolham três perguntas.</li>
                    <li>2. Leiam apenas o enunciado e as alternativas antes da escolha.</li>
                    <li>3. Confiram a resposta e o versículo de apoio.</li>
                    <li>4. Revezem as funções se desejarem, sem obrigação de responder.</li>
                    <li>5. Encerrem com um detalhe descoberto na leitura, sem relatos pessoais.</li>
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
                    Esta rodada oferece seis perguntas e seis observações
                    complementares para lazer e leitura em dupla. O resultado
                    esperado é conferir informações das passagens, não medir
                    conhecimento, fé ou qualidade do relacionamento.
                  </p>
                  <p>Revisão de conteúdo: 10 de outubro de 2026. Gabaritos conferidos na Almeida 1819 (Bíblia Livre); palavras equivalentes de outras traduções são aceitas.</p>
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
