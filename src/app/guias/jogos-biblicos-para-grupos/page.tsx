import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideHeroPanel } from "@/components/GuideHeroPanel";
import { GuideVisualBlock } from "@/components/GuideVisualBlock";
import { Header } from "@/components/Header";
import { RelatedTools } from "@/components/RelatedTools";
import { quizQuestions } from "@/data/quizQuestions";

const title = "Jogos bíblicos para grupos";
const description =
  "Veja como escolher e conduzir jogos bíblicos para grupos, células, jovens e equipes de forma leve, participativa e edificante.";

const cautions = [
  "Explique as regras antes da primeira rodada.",
  "Não permita brincadeiras que exponham alguém.",
  "Adapte a dificuldade ao grupo presente.",
  "Use o jogo como ponte para a Palavra, não como fim em si mesmo.",
  "Encerre retomando o aprendizado principal.",
];

const readyRound = [1, 5, 7, 9, 30].map((id) => {
  const question = quizQuestions.find((item) => item.id === id);
  if (!question) throw new Error(`Pergunta ${id} não encontrada.`);
  return question;
});

const groupSetups = [
  {
    size: "12 participantes",
    teams: "3 equipes de 4",
    room: "Três pequenos círculos voltados para a tela. Deixe passagem livre para quem precisa circular ou se sentar em posição diferente.",
    roles: "Em cada equipe: porta-voz, pessoa que consulta a Bíblia, responsável pelo consenso e observador do placar. Troque os papéis após três perguntas.",
    settings: "5 perguntas · 30 segundos · rebote ativado",
    timing: "25 minutos: 4 para regras, 10 para jogo, 7 para leitura e 4 para conversa e oração.",
  },
  {
    size: "30 participantes",
    teams: "6 equipes de 5",
    room: "Seis fileiras ou ilhas identificadas por nome ou cor. A tela precisa ser legível do fundo; teste tamanho do texto e áudio antes da chegada.",
    roles: "Em cada equipe: porta-voz, pessoa que consulta a Bíblia, anotador, guardião do tempo e facilitador do consenso. Alterne o porta-voz a cada pergunta.",
    settings: "5 perguntas · 60 segundos · rebote ativado",
    timing: "30 minutos: 6 para organização, 13 para jogo, 7 para leitura e 4 para conversa e oração.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/guias/jogos-biblicos-para-grupos",
  },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "/guias/jogos-biblicos-para-grupos",
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
    "https://www.bibliaclube.com.br/guias/jogos-biblicos-para-grupos",
};

export default function BiblicalGamesForGroupsGuide() {
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
                  <span className="eyebrow">Guia para grupos e equipes</span>
                  <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.7rem,6vw,4.7rem)] text-[var(--navy)]">
                    Jogos bíblicos para grupos.
                  </h1>
                </div>
                <GuideHeroPanel
                  description="Eles podem aproximar pessoas, tornar o encontro mais participativo e ajudar o grupo a lembrar histórias e temas da Palavra com naturalidade."
                  chips={["Equipes", "Famílias", "Sem cadastro"]}
                  steps={["Escolher formato", "Jogar em grupo", "Conversar sobre o tema"]}
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
                  <li>- Configuração para 12 participantes.</li>
                  <li>- Configuração para 30 participantes.</li>
                  <li>- Rodada pronta com cinco perguntas.</li>
                  <li>- Pontuação, desempate e resultado de exemplo.</li>
                </ul>
                <Link href="/modo-grupo" className="button-primary mt-6">
                  Abrir modo grupo
                  <span aria-hidden="true">→</span>
                </Link>
              </aside>

              <div className="min-w-0">
                <div className="prose-content">
                  <h2>Por que esses jogos funcionam bem em grupo?</h2>
                  <p>
                    Em um grupo, nem todo mundo participa do mesmo jeito. Há
                    pessoas comunicativas, pessoas tímidas, visitantes e membros
                    que ainda estão se aproximando da fé. Um jogo bem escolhido
                    cria uma porta de entrada simples para todos.
                  </p>
                  <p>
                    A força do jogo não está apenas na resposta correta. Ela
                    aparece quando a pergunta ajuda o grupo a lembrar uma
                    história, abrir a Bíblia, conversar sobre o texto e perceber
                    uma aplicação para a vida.
                  </p>

                  <h2>Escolha o jogo a partir do objetivo</h2>
                  <p>
                    Antes de decidir a dinâmica, pense no que o encontro precisa
                    naquele dia. Um grupo novo talvez precise de integração. Um
                    grupo mais maduro pode aproveitar melhor uma conversa
                    mais aprofundada. O formato deve acompanhar esse
                    propósito.
                  </p>
                </div>

                <GuideVisualBlock
                  eyebrow="Escolha do formato"
                  title="Qual jogo combina com o momento?"
                  description="O formato certo depende do objetivo do encontro e do perfil do grupo."
                  variant="compare"
                  items={[
                    {
                      label: "QZ",
                      title: "Quiz",
                      text: "Bom para revisar histórias e iniciar conversas com respostas comentadas.",
                    },
                    {
                      label: "LP",
                      title: "Ligue os pares",
                      text: "Funciona bem para conectar personagens, lugares e acontecimentos.",
                    },
                    {
                      label: "CF",
                      title: "Complete a frase",
                      text: "Ajuda o grupo a prestar atenção em trechos e referências.",
                    },
                    {
                      label: "JM",
                      title: "Jogo da memória",
                      text: "Traz ritmo visual e pode ser jogado sozinho, em família ou em equipes.",
                    },
                  ]}
                />

                <section className="mt-12" aria-labelledby="tamanho-do-grupo">
                  <span className="eyebrow">Organização prática</span>
                  <h2 id="tamanho-do-grupo" className="section-title mt-4">O que muda entre 12 e 30 pessoas.</h2>
                  <p className="section-copy max-w-3xl">Nos dois casos, use um computador ou celular para controlar a partida e uma TV ou projetor para o grupo. O número de pessoas por equipe, o tempo de consenso e a organização do espaço precisam mudar.</p>
                  <div className="mt-8 border-y border-[var(--border)]">
                    {groupSetups.map((setup) => (
                      <section key={setup.size} className="border-b border-[var(--border)] py-8 last:border-0">
                        <div className="grid gap-6 lg:grid-cols-[12rem_1fr]">
                          <div>
                            <h3 className="font-serif text-2xl text-[var(--navy)]">{setup.size}</h3>
                            <p className="mt-2 font-bold text-[var(--olive-dark)]">{setup.teams}</p>
                          </div>
                          <dl className="grid gap-4 text-[var(--muted)]">
                            <div><dt className="font-bold text-[var(--navy)]">Espaço</dt><dd className="mt-1 leading-7">{setup.room}</dd></div>
                            <div><dt className="font-bold text-[var(--navy)]">Papéis</dt><dd className="mt-1 leading-7">{setup.roles}</dd></div>
                            <div><dt className="font-bold text-[var(--navy)]">Configuração no Modo Grupo</dt><dd className="mt-1 leading-7">{setup.settings}</dd></div>
                            <div><dt className="font-bold text-[var(--navy)]">Tempo total</dt><dd className="mt-1 leading-7">{setup.timing}</dd></div>
                          </dl>
                        </div>
                      </section>
                    ))}
                  </div>
                </section>

                <section className="mt-12" aria-labelledby="rodada-pronta">
                  <span className="eyebrow">Rodada pronta · nível inicial</span>
                  <h2 id="rodada-pronta" className="section-title mt-4">Cinco perguntas para conduzir do guia.</h2>
                  <p className="section-copy max-w-3xl">Esta seleção fixa serve para uma primeira experiência com participantes de repertórios diferentes. O Modo Grupo usa perguntas sorteadas do tema escolhido; para repetir exatamente esta sequência, conduza a partir desta página.</p>

                  <div className="mt-8 border-y border-[var(--border)]">
                    {readyRound.map((item, index) => (
                      <section key={item.id} className="border-b border-[var(--border)] py-7 last:border-0">
                        <div className="grid gap-4 sm:grid-cols-[2.5rem_1fr]">
                          <span className="font-serif text-2xl text-[var(--gold-ink)]" aria-hidden="true">{index + 1}</span>
                          <div>
                            <h3 className="font-serif text-2xl leading-tight text-[var(--navy)]">{item.question}</h3>
                            <ol className="mt-4 grid gap-2 text-[var(--muted)] sm:grid-cols-2">
                              {item.options.map((option, optionIndex) => <li key={option}><strong className="mr-2 text-[var(--olive-dark)]">{String.fromCharCode(65 + optionIndex)}.</strong>{option}</li>)}
                            </ol>
                            <details className="mt-5 border-l-2 border-[var(--gold)] pl-4">
                              <summary className="cursor-pointer font-bold text-[var(--olive-dark)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--navy)]">Ver resposta e referência</summary>
                              <div className="pt-4">
                                <p className="font-bold text-[var(--navy)]">Resposta: {item.correctAnswer}</p>
                                <p className="mt-2 leading-7 text-[var(--muted)]">{item.explanation}</p>
                                <p className="mt-2 text-sm font-bold text-[var(--olive-dark)]">Leia: {item.reference}</p>
                              </div>
                            </details>
                          </div>
                        </div>
                      </section>
                    ))}
                  </div>
                </section>

                <section className="mt-12 border-y border-[var(--border)] py-8">
                  <h2 className="font-serif text-3xl text-[var(--navy)]">Pontuação e resultado de exemplo</h2>
                  <p className="mt-3 leading-7 text-[var(--muted)]">Resposta direta vale 10 pontos; após um erro, a equipe seguinte pode usar o rebote por 5. Não desconte pontos por erro. Em caso de empate, peça que as equipes localizem uma das referências da rodada; todas que encontrarem participam da leitura, sem “morte súbita”.</p>
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
                      <caption className="sr-only">Exemplo de pontuação de uma rodada com três equipes</caption>
                      <thead><tr className="border-b border-[var(--border)] text-[var(--navy)]"><th className="py-3 pr-4">Pergunta</th><th className="py-3 pr-4">Equipe da vez</th><th className="py-3 pr-4">Resultado</th><th className="py-3">Placar acumulado</th></tr></thead>
                      <tbody className="text-[var(--muted)]">
                        <tr className="border-b border-[var(--border)]"><td className="py-3 pr-4">1</td><td className="py-3 pr-4">Caminho</td><td className="py-3 pr-4">Acerto, +10</td><td className="py-3">10 · 0 · 0</td></tr>
                        <tr className="border-b border-[var(--border)]"><td className="py-3 pr-4">2</td><td className="py-3 pr-4">Ponte</td><td className="py-3 pr-4">Acerto, +10</td><td className="py-3">10 · 10 · 0</td></tr>
                        <tr className="border-b border-[var(--border)]"><td className="py-3 pr-4">3</td><td className="py-3 pr-4">Luz</td><td className="py-3 pr-4">Acerto, +10</td><td className="py-3">10 · 10 · 10</td></tr>
                        <tr className="border-b border-[var(--border)]"><td className="py-3 pr-4">4</td><td className="py-3 pr-4">Caminho</td><td className="py-3 pr-4">Erro; Ponte no rebote, +5</td><td className="py-3">10 · 15 · 10</td></tr>
                        <tr><td className="py-3 pr-4">5</td><td className="py-3 pr-4">Ponte</td><td className="py-3 pr-4">Acerto, +10</td><td className="py-3">10 · 25 · 10</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-5 font-bold text-[var(--navy)]">Resultado: Ponte, 25 pontos; Caminho e Luz, 10 cada. Leia Lucas 10:25-37 e encerre perguntando: “Que forma concreta de cuidado está ao alcance do nosso grupo?”</p>
                </section>

                <section className="mt-12">
                  <h2 className="font-serif text-3xl text-[var(--navy)]">Cinco cuidados na condução</h2>
                  <ul className="mt-5 grid gap-3 border-y border-[var(--border)] py-6 leading-7 text-[var(--muted)] sm:grid-cols-2">
                    {cautions.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-[var(--gold-ink)]">•</span><span>{item}</span></li>)}
                  </ul>
                </section>

                <RelatedTools
                  description="Escolha uma ferramenta conforme o perfil do grupo e o tempo disponível para a atividade."
                  tools={[
                    {
                      title: "Modo Grupo",
                      description:
                        "Perguntas pensadas para equipes, com condução leve e participação coletiva.",
                      href: "/modo-grupo",
                    },
                    {
                      title: "Quiz Bíblico",
                      description:
                        "Rodadas com alternativas e explicações para aprender a cada resposta.",
                      href: "/quiz-biblico#quiz",
                    },
                    {
                      title: "Ligue os Pares",
                      description:
                        "Conecte personagens, lugares e acontecimentos bíblicos.",
                      href: "/ligue-os-pares",
                    },
                    {
                      title: "Complete a Frase",
                      description:
                        "Uma dinâmica de atenção, memória e reflexão bíblica.",
                      href: "/complete-a-frase",
                    },
                    {
                      title: "Jogo da Memória",
                      description:
                        "Encontre pares de personagens e símbolos em uma rodada visual.",
                      href: "/jogo-da-memoria-biblico",
                    },
                  ]}
                />

                <div className="prose-content mt-12">
                  <h2>Conclusão</h2>
                  <p>
                    Jogos para grupos são mais úteis quando têm
                    propósito claro. Eles podem divertir, mas também podem
                    conduzir o grupo para uma conversa mais atenta sobre a
                    Palavra e sobre a vida com Deus.
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
