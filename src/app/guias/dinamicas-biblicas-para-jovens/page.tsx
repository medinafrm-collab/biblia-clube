import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideHeroPanel } from "@/components/GuideHeroPanel";
import { GuideVisualBlock } from "@/components/GuideVisualBlock";
import { Header } from "@/components/Header";
import { RelatedTools } from "@/components/RelatedTools";
import { youthReadingWorkshop as workshop } from "@/data/recreationalGuides";

const title = "Dinâmicas bíblicas para jovens";
const description =
  "Uma oficina cooperativa em Lucas 19:1-6 para jovens: localizar informações, ordenar seis cenas e conferir afirmações, com gabaritos e consulta livre.";

const themes = [
  "Personagens identificados pelo próprio texto.",
  "Lugares mencionados na narrativa.",
  "Ações em ordem de apresentação.",
  "Objetos e palavras que pedem explicação.",
  "Diferenças entre uma informação e um detalhe não informado.",
  "Uma descoberta para conferir em dupla.",
];

const cautions = [
  "Evite atividades que exponham constrangimentos pessoais.",
  "Explique as regras antes de começar.",
  "Não prolongue demais a competição.",
  "Inclua jovens mais tímidos sem pressionar.",
  "Prefira textos bíblicos curtos e bem contextualizados.",
];

const adaptations = [
  {
    title: "Grupo tímido",
    text: "Leia uma pergunta por vez e aceite apontar o versículo ou escrever uma letra. O condutor pode apresentar o gabarito se ninguém quiser falar; observar também é uma opção.",
  },
  {
    title: "Grupo agitado",
    text: "Mostre um desafio por vez. Ofereça funções voluntárias de leitor, anotador e conferente; não faça corrida nem pontue velocidade. Mantenha a passagem aberta.",
  },
  {
    title: "Mais de 24 jovens",
    text: "Repita os mesmos desafios entre equipes de quatro a seis pessoas. Confira coletivamente a ordem das letras e ouça até duas justificativas por desafio, em vez de uma apresentação de cada equipe.",
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
                  <span className="eyebrow">Leitura e jogos para jovens</span>
                  <h1 className="display-title mt-5 max-w-4xl text-[clamp(2.7rem,6vw,4.7rem)] text-[var(--navy)]">
                    Dinâmicas bíblicas para jovens.
                  </h1>
                </div>
                <GuideHeroPanel
                  description="Três desafios cooperativos para descobrir detalhes de uma narrativa: encontrar informações, ordenar cenas e conferir o que a passagem realmente diz."
                  chips={["Jovens", "Cooperação", "Consulta livre"]}
                  steps={["Ler", "Resolver juntos", "Conferir"]}
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
                  <li>- Sugestão de oficina de 35 minutos.</li>
                  <li>- Três desafios em Lucas 19:1-6.</li>
                  <li>- Seis cenas e gabaritos comentados.</li>
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
                    Nesta oficina, o grupo acompanha a passagem de Jesus por
                    Jericó e o encontro com Zaqueu. O objetivo é localizar
                    informações e reconstruir a ordem da narrativa, com a Bíblia
                    aberta. Não há eliminação nem avaliação individual.
                  </p>
                  <p>
                    A proposta serve a 6 a 24 participantes em duplas ou trios.
                    Um único exemplar e leitura em voz alta são suficientes;
                    papel ou aparelhos individuais são opcionais. Quem quiser
                    pode responder, acompanhar a consulta ou passar a vez.
                  </p>

                  <h2>Conferir uma descoberta, não contar uma experiência</h2>
                  <p>
                    Cada desafio tem um resultado concreto: uma resposta com
                    versículo de apoio, uma sequência de letras ou uma afirmação
                    conferida. Ninguém precisa falar da própria vida. Os
                    gabaritos abaixo ficam visíveis para preparar a atividade;
                    leia primeiro apenas a pergunta ou as frases misturadas.
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
                      title: "Gabarito conferido",
                      text: "A resposta vem acompanhada do versículo que permite verificá-la.",
                    },
                  ]}
                />

                <section className="mt-12" aria-labelledby="dinamica-pronta">
                  <span className="eyebrow">Oficina cooperativa · tempo sugerido de 35 minutos</span>
                  <h2 id="dinamica-pronta" className="section-title mt-4">Encontre, ordene e confira.</h2>
                  <p className="section-copy max-w-3xl">Os desafios usam somente Lucas 19:1-6. A sequência inclui a apresentação de Zaqueu pelo narrador; não é uma lista de ações que todos os personagens executam.</p>

                  <div className="mt-8 grid gap-6 border-y border-[var(--border)] py-7 sm:grid-cols-2">
                    <div>
                      <h3 className="font-serif text-2xl text-[var(--navy)]">Materiais e preparação</h3>
                      <ul className="mt-4 grid gap-2 leading-7 text-[var(--muted)]">
                        <li>- Bíblia ou aplicativo bíblico.</li>
                        <li>- As seis frases desta página, lidas ou copiadas.</li>
                        <li>- Uma folha e uma caneta por equipe, opcionais.</li>
                        <li>- Relógio para acompanhar o tempo.</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-[var(--navy)]">Texto e propósito</h3>
                      <p className="mt-4 leading-7 text-[var(--muted)]"><strong className="text-[var(--navy)]">Leia:</strong> {workshop.reference}.</p>
                      <p className="mt-2 leading-7 text-[var(--muted)]"><strong className="text-[var(--navy)]">Observe:</strong> o lugar, as ações de Zaqueu e a fala de Jesus. Compare a resposta com os versículos, sem completar detalhes que o recorte não informa.</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">A árvore pode aparecer como sicômoro ou ser descrita de outra forma na tradução. Aceite palavras equivalentes. A atividade acompanha o início do encontro, não resume todo o capítulo nem propõe aconselhamento.</p>
                    </div>
                  </div>

                  <section className="mt-9">
                    <h3 className="font-serif text-2xl text-[var(--navy)]">1. Encontre no texto</h3>
                    <p className="mt-2 leading-7 text-[var(--muted)]">Leia uma pergunta, permita consulta e só então apresente o apoio. Mostrem o versículo, não apenas uma resposta de memória.</p>
                    <ol className="mt-5 grid gap-4">
                      {workshop.facts.map((item) => <li key={item.question} className="border-t border-[var(--border)] pt-4 leading-7"><strong className="text-[var(--navy)]">{item.question}</strong><p className="mt-2 text-[var(--muted)]">Gabarito: {item.answer}</p></li>)}
                    </ol>
                  </section>

                  <section className="mt-9">
                    <h3 className="font-serif text-2xl text-[var(--navy)]">2. Coloque as cenas em ordem</h3>
                    <p className="mt-2 leading-7 text-[var(--muted)]">As letras estão misturadas. Em equipe, ordenem as seis frases conforme sua apresentação nos versículos 1 a 6. Respondam por letras; não é necessário imprimir ou recortar.</p>
                    <ol className="mt-5 grid gap-4 sm:grid-cols-2">
                      {workshop.sequence.map((scene) => (
                        <li key={scene.id} className="border-t border-[var(--border)] pt-4 leading-7 text-[var(--muted)]">
                          <span className="mr-2 font-serif text-xl text-[var(--gold-ink)]">{scene.id}.</span>{scene.text}
                        </li>
                      ))}
                    </ol>
                    <p className="mt-5 leading-7 text-[var(--muted)]"><strong>Gabarito:</strong> {workshop.sequenceAnswer.join(", ")}. Jesus passa por Jericó (1); Zaqueu é apresentado (2), procura vê-lo (3) e sobe (4); Jesus o chama (5); ele desce e o recebe (6). Uma ordem diferente deve ser conferida nesses versículos, sem atribuir o erro a quem respondeu.</p>
                  </section>

                  <section className="mt-9 border-t border-[var(--border)] pt-7">
                    <h3 className="font-serif text-2xl text-[var(--navy)]">3. O texto afirma ou não informa?</h3>
                    <p className="mt-3 leading-7 text-[var(--muted)]">Não informar um detalhe é diferente de afirmar que ele é falso. Confiram cada frase antes de classificá-la.</p>
                    <ol className="mt-4 grid gap-3 leading-7 text-[var(--muted)]">
                      {workshop.comparisons.map((item) => <li key={item.statement} className="border-t border-[var(--border)] pt-4"><strong className="text-[var(--navy)]">{item.statement}</strong><p className="mt-2">Conferência: {item.answer}</p></li>)}
                    </ol>
                  </section>

                  <section className="mt-9 border-t border-[var(--border)] pt-7">
                    <h3 className="font-serif text-2xl text-[var(--navy)]">Roteiro minuto a minuto</h3>
                    <ol className="mt-5 grid gap-4 leading-7 text-[var(--muted)] sm:grid-cols-2">
                      {workshop.schedule.map((step) => <li key={step.title}><strong className="text-[var(--navy)]">{step.minutes} min · {step.title}:</strong> {step.text}</li>)}
                    </ol>
                    <p className="mt-5 text-sm leading-6 text-[var(--muted)]">Os blocos somam 35 minutos sugeridos, não uma duração medida em aplicação real. Para 20 minutos, use 3 de combinado, 5 de leitura, 9 apenas de sequência e 3 de fechamento. Não apresse a consulta para cumprir o cronograma.</p>
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
                  <h2>O que observar em outra passagem</h2>
                  <p>
                    Para repetir o formato, escolha outro trecho curto e prepare
                    seu próprio gabarito antes do encontro. As categorias abaixo
                    ajudam a formular perguntas; não garantem que qualquer
                    passagem contenha todos esses elementos.
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
                    Ao final, o grupo terá localizado três informações, ordenado
                    seis cenas e conferido quatro afirmações. O resultado é uma
                    leitura compartilhada e uma rodada de desafios, sem perguntas
                    íntimas, testes de fé ou compromissos pessoais.
                  </p>
                  <p>Revisão de conteúdo: 10 de outubro de 2026. Gabaritos conferidos na Almeida 1819 (Bíblia Livre); redações equivalentes de outras traduções podem ser usadas.</p>
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
