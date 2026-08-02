import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideHeroPanel } from "@/components/GuideHeroPanel";
import { GuideVisualBlock } from "@/components/GuideVisualBlock";
import { Header } from "@/components/Header";
import { RelatedTools } from "@/components/RelatedTools";

const title = "Dinâmicas bíblicas para jovens | Bíblia Clube";
const description =
  "Ideias e orientações para conduzir dinâmicas bíblicas com jovens, criando participação, conversa e aplicação prática da Palavra.";

const principles = [
  {
    title: "Comece com uma pergunta simples",
    text: "Uma boa dinâmica para jovens não precisa começar com uma explicação longa. Uma pergunta direta ajuda o grupo a entrar no tema sem pressão e abre espaço para respostas sinceras.",
  },
  {
    title: "Conecte a atividade ao texto bíblico",
    text: "A dinâmica deve servir como ponte para a Palavra. Depois da participação inicial, leia uma referência bíblica curta e ajude os jovens a perceberem a relação entre o texto e a vida diária.",
  },
  {
    title: "Valorize participação, não exposição",
    text: "Alguns jovens falam com facilidade, outros precisam de tempo. Evite forçar testemunhos ou respostas pessoais demais. Crie um ambiente em que participar seja seguro.",
  },
  {
    title: "Finalize com uma aplicação prática",
    text: "Antes de encerrar, conduza o grupo para uma atitude concreta: uma oração, uma decisão simples, um cuidado durante a semana ou uma conversa que precisa continuar.",
  },
];

const themes = [
  "Identidade em Cristo.",
  "Amizades e influência.",
  "Pressões do mundo e escolhas diárias.",
  "Vida devocional e constância.",
  "Perdão, reconciliação e cuidado com palavras.",
  "Serviço, dons e participação na igreja.",
];

const formats = [
  {
    title: "Quiz em equipes",
    text: "Divida o grupo em times pequenos, escolha uma rodada bíblica e use cada resposta como ponto de conversa. Funciona bem para quebrar o gelo e revisar temas.",
  },
  {
    title: "Ligue os pares",
    text: "Peça que os jovens conectem personagens, lugares ou acontecimentos. Depois, converse sobre o que cada conexão ensina sobre obediência, coragem ou fé.",
  },
  {
    title: "Complete a frase",
    text: "Use frases bíblicas curtas para estimular memória, atenção e reflexão. O foco não precisa ser decorar, mas perceber o sentido do texto.",
  },
];

const cautions = [
  "Evite atividades que exponham constrangimentos pessoais.",
  "Explique as regras antes de começar.",
  "Não prolongue demais a competição.",
  "Inclua jovens mais tímidos sem pressionar.",
  "Prefira textos bíblicos curtos e bem contextualizados.",
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
                  <li>- Como escolher uma dinâmica para jovens.</li>
                  <li>- Temas que costumam gerar boas conversas.</li>
                  <li>- Cuidados para conduzir sem constranger.</li>
                  <li>- Ideias usando jogos do Bíblia Clube.</li>
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

                <div className="mt-10 grid gap-4">
                  {principles.map((principle, index) => (
                    <section
                      key={principle.title}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-6"
                    >
                      <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--gold)]">
                        Princípio {index + 1}
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

                <div className="prose-content mt-12">
                  <h2>Formatos simples para aplicar no encontro</h2>
                  <p>
                    O formato deve servir ao grupo, não o contrário. É melhor
                    fazer uma dinâmica curta e bem conectada ao texto do
                    que uma atividade longa que perde o foco no meio do caminho.
                  </p>
                </div>

                <div className="mt-6 grid gap-4">
                  {formats.map((format) => (
                    <section
                      key={format.title}
                      className="rounded-lg border border-[var(--border)] p-6"
                    >
                      <h3 className="font-serif text-2xl text-[var(--navy)]">
                        {format.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[var(--muted)]">
                        {format.text}
                      </p>
                    </section>
                  ))}
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
