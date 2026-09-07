import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideHeroPanel } from "@/components/GuideHeroPanel";
import { GuideVisualBlock } from "@/components/GuideVisualBlock";
import { Header } from "@/components/Header";
import { RelatedTools } from "@/components/RelatedTools";

const title = "Dinâmicas bíblicas para jovens";
const description =
  "Ideias e orientações para conduzir dinâmicas bíblicas com jovens, criando participação, conversa e aplicação prática da Palavra.";

const themes = [
  "Identidade em Cristo.",
  "Amizades e influência.",
  "Pressões do mundo e escolhas diárias.",
  "Vida devocional e constância.",
  "Perdão, reconciliação e cuidado com palavras.",
  "Serviço, dons e participação na igreja.",
];

const cautions = [
  "Evite atividades que exponham constrangimentos pessoais.",
  "Explique as regras antes de começar.",
  "Não prolongue demais a competição.",
  "Inclua jovens mais tímidos sem pressionar.",
  "Prefira textos bíblicos curtos e bem contextualizados.",
];

const fictionalSituations = [
  "No grupo da turma, várias pessoas começam a ridicularizar um colega que não está presente.",
  "Um amigo oferece a resposta de uma atividade e diz que todo mundo copia porque a tarefa não vale muitos pontos.",
  "Uma tendência online propõe uma gravação arriscada e promete muitos seguidores para quem participar.",
  "Alguém pede que você guarde segredo sobre uma situação em que uma pessoa pode estar em perigo.",
  "Uma notícia alarmante chega sem fonte, e o grupo pressiona todos a compartilhar imediatamente.",
  "Os amigos mudam um plano para incluir alguém que não teria dinheiro para participar da ideia original.",
];

const adaptations = [
  {
    title: "Grupo tímido",
    text: "Entregue a situação por escrito e dê dois minutos para cada trio anotar respostas antes de falar. O porta-voz lê a síntese do grupo; ninguém precisa dizer o que faria pessoalmente.",
  },
  {
    title: "Grupo agitado",
    text: "Mostre uma situação por vez, use cronômetro visível de três minutos e atribua papéis: leitor, anotador e porta-voz. Pontue clareza e cuidado, não velocidade ou barulho.",
  },
  {
    title: "Mais de 24 jovens",
    text: "Repita as situações entre equipes de quatro a seis pessoas. Recolha somente uma resposta por pergunta e compare duas soluções diferentes no plenário.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/guias/dinamicas-biblicas-para-jovens",
  },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "/guias/dinamicas-biblicas-para-jovens",
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
    "https://www.bibliaclube.com.br/guias/dinamicas-biblicas-para-jovens",
};

export default function DinamicasBiblicasParaJovensPage() {
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
                <span>Guias</span>
              </nav>

              <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div>
                  <span className="eyebrow">Guia para ministério jovem</span>
                  <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.7rem,6vw,4.7rem)] text-[var(--navy)]">
                    Dinâmicas bíblicas para jovens.
                  </h1>
                </div>
                <GuideHeroPanel
                  description="Dinâmicas bem conduzidas ajudam os jovens a participar, conversar e perceber que a Bíblia fala com situações reais da vida. O segredo está em unir leveza, cuidado e propósito."
                  chips={["Jovens", "Participação", "Aplicação"]}
                  steps={["Escolher tema", "Criar segurança", "Fechar em oração"]}
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
                  <li>- Oficina completa para 35 minutos.</li>
                  <li>- Seis situações fictícias prontas.</li>
                  <li>- Temas que costumam gerar boas conversas.</li>
                  <li>- Adaptações para grupos tímidos ou agitados.</li>
                </ul>
                <Link href="/dinamicas-para-celulas" className="button-primary mt-6">
                  Ver dinâmicas
                  <span aria-hidden="true">→</span>
                </Link>
              </aside>

              <div className="min-w-0">
                <div className="prose-content">
                  <h2>O que torna uma dinâmica útil para jovens?</h2>
                  <p>
                    Uma dinâmica não deve ser apenas uma brincadeira para ocupar
                    tempo. Ela funciona melhor quando ajuda o grupo a se
                    envolver com um tema, ouvir outras pessoas e chegar ao texto
                    com mais atenção.
                  </p>
                  <p>
                    Jovens costumam responder bem a propostas simples,
                    participativas e conectadas com situações reais. Quando o
                    líder prepara a atividade com clareza, o encontro ganha
                    ritmo sem perder profundidade.
                  </p>

                  <h2>Antes de escolher a atividade, escolha o propósito</h2>
                  <p>
                    A mesma dinâmica pode ter resultados diferentes dependendo
                    do objetivo. Se o grupo está recebendo visitantes, talvez o
                    melhor seja algo leve e inclusivo. Se o grupo já caminha
                    junto há mais tempo, a atividade pode abrir uma conversa
                    mais profunda sobre escolhas, fé e testemunho.
                  </p>
                </div>

                <GuideVisualBlock
                  eyebrow="Antes de escolher"
                  title="O que ajuda a dinâmica funcionar"
                  description="Para jovens, clareza e segurança importam tanto quanto criatividade."
                  variant="checklist"
                  items={[
                    {
                      label: "✓",
                      title: "Tema claro",
                      text: "O grupo entende rapidamente qual assunto será tratado.",
                    },
                    {
                      label: "✓",
                      title: "Baixa exposição",
                      text: "Ninguém precisa revelar algo pessoal para conseguir participar.",
                    },
                    {
                      label: "✓",
                      title: "Texto curto",
                      text: "A referência é lida com calma e conectada à conversa.",
                    },
                    {
                      label: "✓",
                      title: "Aplicação possível",
                      text: "O encontro termina com uma atitude prática para a semana.",
                    },
                  ]}
                />

                <section className="mt-12" aria-labelledby="dinamica-pronta">
                  <span className="eyebrow">Dinâmica pronta · 35 minutos</span>
                  <h2 id="dinamica-pronta" className="section-title mt-4">Pausa, escolha e apoio.</h2>
                  <p className="section-copy max-w-3xl">Uma oficina para analisar pressão e discernimento por meio de situações fictícias. O objetivo é praticar um caminho de decisão, não descobrir histórias particulares dos participantes.</p>

                  <div className="mt-8 grid gap-6 border-y border-[var(--border)] py-7 sm:grid-cols-2">
                    <div>
                      <h3 className="font-serif text-2xl text-[var(--navy)]">Materiais e preparação</h3>
                      <ul className="mt-4 grid gap-2 leading-7 text-[var(--muted)]">
                        <li>- Bíblia ou aplicativo bíblico.</li>
                        <li>- As seis situações impressas ou copiadas em cartões.</li>
                        <li>- Uma folha e uma caneta por equipe.</li>
                        <li>- Cronômetro visível para o condutor.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-[var(--navy)]">Texto e propósito</h3>
                      <p className="mt-4 leading-7 text-[var(--muted)]"><strong className="text-[var(--navy)]">Leia:</strong> Daniel 1:8-16.</p>
                      <p className="mt-2 leading-7 text-[var(--muted)]"><strong className="text-[var(--navy)]">Observe:</strong> Daniel decide, procura a pessoa responsável, apresenta um pedido respeitoso e propõe uma alternativa que pode ser avaliada.</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">O episódio tem contexto próprio e não oferece uma fórmula para toda escolha. A oficina usa o processo de discernimento, diálogo e apoio, sem igualar cada situação moderna à decisão alimentar de Daniel.</p>
                    </div>
                  </div>

                  <section className="mt-9">
                    <h3 className="font-serif text-2xl text-[var(--navy)]">Cartões de situações</h3>
                    <p className="mt-2 leading-7 text-[var(--muted)]">Recorte ou leia um cartão por equipe. Todos analisam personagens fictícios, sem citar nomes ou acontecimentos do próprio grupo.</p>
                    <ol className="mt-5 grid gap-4 sm:grid-cols-2">
                      {fictionalSituations.map((situation, index) => (
                        <li key={situation} className="border-t border-[var(--border)] pt-4 leading-7 text-[var(--muted)]">
                          <span className="mr-2 font-serif text-xl text-[var(--gold-ink)]">{index + 1}.</span>{situation}
                        </li>
                      ))}
                    </ol>
                  </section>

                  <section className="mt-9 border-t border-[var(--border)] pt-7">
                    <h3 className="font-serif text-2xl text-[var(--navy)]">Quatro perguntas para cada equipe</h3>
                    <ol className="mt-4 grid gap-3 leading-7 text-[var(--muted)]">
                      <li><strong className="text-[var(--olive-dark)]">1. Pressão:</strong> o que está tentando apressar, silenciar ou influenciar a decisão?</li>
                      <li><strong className="text-[var(--olive-dark)]">2. Opções:</strong> quais respostas são possíveis, além de simplesmente aceitar ou atacar?</li>
                      <li><strong className="text-[var(--olive-dark)]">3. Consequências:</strong> quem pode ser protegido ou prejudicado por cada opção?</li>
                      <li><strong className="text-[var(--olive-dark)]">4. Apoio:</strong> que pessoa responsável ou fonte confiável pode ajudar?</li>
                    </ol>
                  </section>

                  <section className="mt-9 border-t border-[var(--border)] pt-7">
                    <h3 className="font-serif text-2xl text-[var(--navy)]">Roteiro minuto a minuto</h3>
                    <ol className="mt-5 grid gap-4 leading-7 text-[var(--muted)] sm:grid-cols-2">
                      <li><strong className="text-[var(--navy)]">0–4 min · Combinado:</strong> “Hoje analisaremos casos inventados. Ninguém precisa contar uma experiência pessoal.”</li>
                      <li><strong className="text-[var(--navy)]">4–10 min · Leitura:</strong> leia Daniel 1:8-16 e identifique decisão, conversa, alternativa e acompanhamento.</li>
                      <li><strong className="text-[var(--navy)]">10–13 min · Instruções:</strong> forme equipes de três a cinco pessoas, distribua os cartões e leia as quatro perguntas.</li>
                      <li><strong className="text-[var(--navy)]">13–22 min · Análise:</strong> cada equipe discute duas situações e registra uma resposta possível para cada pergunta.</li>
                      <li><strong className="text-[var(--navy)]">22–31 min · Plenário:</strong> ouça sínteses curtas e compare caminhos respeitosos, seguros e honestos.</li>
                      <li><strong className="text-[var(--navy)]">31–35 min · Resposta:</strong> cada jovem anota em particular uma pessoa segura a quem pode pedir ajuda; encerre em oração.</li>
                    </ol>
                  </section>
                </section>

                <section className="mt-12">
                  <span className="eyebrow">Ajuste ao perfil</span>
                  <h2 className="section-title mt-4">A mesma proposta, três ritmos.</h2>
                  <div className="mt-7 border-y border-[var(--border)]">
                    {adaptations.map((adaptation) => (
                      <div key={adaptation.title} className="grid gap-2 border-b border-[var(--border)] py-6 last:border-0 sm:grid-cols-[12rem_1fr] sm:gap-6">
                        <h3 className="font-serif text-2xl text-[var(--navy)]">{adaptation.title}</h3>
                        <p className="leading-7 text-[var(--muted)]">{adaptation.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="prose-content mt-12">
                  <h2>Temas que funcionam bem com jovens</h2>
                  <p>
                    Bons temas são aqueles que criam conexão entre o texto
                    da Palavra e as decisões que os jovens enfrentam. Eles não
                    precisam ser tratados com peso excessivo, mas precisam ser
                    tratados com verdade e respeito.
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
                    Cuidados para uma condução saudável
                  </h2>
                  <ul className="mt-5 grid gap-3 leading-7 text-[var(--olive-dark)]">
                    {cautions.map((caution) => (
                      <li key={caution}>- {caution}</li>
                    ))}
                  </ul>
                </section>

                <RelatedTools
                  description="Estas ferramentas ajudam a aplicar o tema com participação, sem transformar o encontro em uma aula pesada."
                  tools={[
                    {
                      title: "Dinâmicas para Células",
                      description:
                        "Roteiros prontos que podem ser adaptados para jovens.",
                      href: "/dinamicas-para-celulas",
                    },
                    {
                      title: "Modo Grupo",
                      description:
                        "Perguntas e desafios para jogar em equipes.",
                      href: "/modo-grupo",
                    },
                    {
                      title: "Ligue os Pares",
                      description:
                        "Conexões entre personagens, lugares e acontecimentos.",
                      href: "/ligue-os-pares",
                    },
                    {
                      title: "Complete a Frase",
                      description:
                        "Uma dinâmica leve para trabalhar atenção ao texto.",
                      href: "/complete-a-frase",
                    },
                    {
                      title: "Jogo da Memória",
                      description:
                        "Uma rodada com pares para jogar sozinho ou em equipes.",
                      href: "/jogo-da-memoria-biblico",
                    },
                  ]}
                />

                <div className="prose-content mt-12">
                  <h2>Conclusão</h2>
                  <p>
                    Dinâmicas para jovens são mais fortes quando unem
                    participação e cuidado. Elas ajudam o grupo a se aproximar,
                    mas também podem abrir espaço para arrependimento, fé,
                    oração e decisões práticas diante de Deus.
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
