import Image from "next/image";
import Link from "next/link";
import { editorialArticles } from "@/data/editorialContent";
import { ScrollReveal } from "./ScrollReveal";

export function HomeEditorialHighlights() {
  const featured = editorialArticles.find((article) => article.slug === "roteiro-completo-de-celula-em-60-minutos")!;
  const secondary = editorialArticles.filter((article) => [
    "culto-domestico-com-criancas",
    "como-preparar-um-encontro-para-jovens",
    "jogos-biblicos-sem-impressao",
  ].includes(article.slug));
  const highlights = [featured, ...secondary];
  const highlightImages: Record<string, string> = {
    "como-preparar-um-encontro-para-jovens": "/images/editorial/caminho-jovens-v3.jpg",
  };

  return (
    <section className="border-t border-[var(--border)] bg-white py-14 lg:py-16">
      <div className="container-site">
        <ScrollReveal>
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <span className="eyebrow">Biblioteca em destaque</span>
              <h2 className="mt-3 max-w-xl font-serif text-[clamp(2rem,3.2vw,2.8rem)] leading-[1.1] text-[var(--navy)]">Ideias e roteiros para aplicar hoje.</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] lg:justify-self-end">Artigos, planos completos e orientações práticas para diferentes momentos da vida em comunidade.</p>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((article, index) => (
            <ScrollReveal key={article.slug} delay={index * 70}>
              <Link href={`/biblioteca/${article.slug}`} className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)] text-inherit no-underline transition hover:-translate-y-0.5 hover:border-[var(--gold)]">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={highlightImages[article.slug] ?? article.image} alt={article.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 24vw" className="object-cover transition duration-500 group-hover:scale-[1.025]" />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[var(--olive-dark)]">{index === 0 ? "Guia em destaque" : article.audience}</span>
                  <strong className="mt-2 block font-serif text-xl leading-tight text-[var(--navy)]">{article.title}</strong>
                  <span className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{article.summary}</span>
                  <span className="mt-4 text-sm font-extrabold text-[var(--olive-dark)]">Ler guia <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-7 text-center"><Link href="/biblioteca" className="button-secondary">Explorar toda a biblioteca <span aria-hidden="true">→</span></Link></div>
      </div>
    </section>
  );
}

export function HomeAudiencePaths() {
  const paths = [
    {
      label: "Família",
      title: "Leitura e jogos que cabem na rotina",
      text: "Roteiros curtos, memória bíblica e um plano familiar para imprimir.",
      href: "/biblioteca/culto-domestico-com-criancas",
      image: "/images/editorial/caminho-familia.jpg",
      imageAlt: "Pai e filho lendo a Bíblia durante uma atividade em família",
    },
    {
      label: "Jovens",
      title: "Participação sem respostas artificiais",
      text: "Dinâmicas sobre identidade, escolhas e conversas que respeitam o grupo.",
      href: "/biblioteca/como-preparar-um-encontro-para-jovens",
      image: "/images/editorial/caminho-jovens-v3.jpg",
      imageAlt: "Jovens reunidos em uma conversa ao redor da Bíblia",
    },
    {
      label: "Casais",
      title: "Perguntas para aprender em parceria",
      text: "Um quiz bíblico breve para jogar, conferir referências e conversar juntos.",
      href: "/guias/quiz-biblico-para-casais",
      image: "/images/editorial/caminho-casais.jpg",
      imageAlt: "Casal planejando em um caderno ao lado de uma Bíblia aberta",
    },
    {
      label: "Liderança",
      title: "Planejamento claro para quem conduz",
      text: "Checklists, roteiros e critérios para acolher e acompanhar pessoas.",
      href: "/biblioteca/roteiro-completo-de-celula-em-60-minutos",
      image: "/images/editorial/caminho-lideranca.jpg",
      imageAlt: "Mesa preparada para liderança com Bíblia, laptop, roteiro e caderno",
    },
  ];

  return (
    <section className="paper-texture border-y border-[var(--border)] py-14 lg:py-16">
      <div className="container-site">
        <ScrollReveal>
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
            <span className="eyebrow">Comece pelo seu momento</span>
              <h2 className="mt-3 max-w-2xl font-serif text-[clamp(2rem,3.2vw,2.8rem)] leading-[1.1] text-[var(--navy)]">Caminhos diferentes, a mesma Palavra no centro.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[var(--muted)] lg:justify-self-end">Escolha um contexto para encontrar conteúdos e atividades preparados com linguagem, ritmo e cuidados adequados.</p>
          </div>
        </ScrollReveal>
        <div className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((path, index) => (
            <ScrollReveal key={path.label} delay={80 + index * 70}>
              <Link href={path.href} className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-white text-inherit no-underline transition hover:-translate-y-0.5 hover:border-[var(--gold)] hover:shadow-[0_16px_38px_rgba(37,50,43,0.07)]">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={path.image}
                    alt={path.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 45vw, 14vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col p-4">
                  <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--olive-dark)]">{path.label}</span>
                  <h3 className="mt-2 font-serif text-lg leading-tight text-[var(--navy)]">{path.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-[var(--muted)]">{path.text}</p>
                  <span className="mt-4 text-sm font-extrabold text-[var(--navy)]">Explorar <span className="ml-2 inline-block transition group-hover:translate-x-1" aria-hidden="true">→</span></span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeGameFocus() {
  return (
    <section className="section-space overflow-hidden bg-[var(--navy)] text-white">
      <div className="container-site grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <ScrollReveal>
          <span className="eyebrow !text-[var(--gold)]">Veja como funciona</span>
          <h2 className="mt-5 max-w-xl font-serif text-[clamp(2.5rem,5vw,4.2rem)] leading-[1.06]">Uma resposta abre a próxima leitura.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">O quiz corrige na hora, explica o contexto e deixa a passagem disponível sem tirar o jogador da página.</p>
          <Link href="/quiz-biblico" className="button-light mt-8">Experimentar o quiz <span aria-hidden="true">→</span></Link>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="rounded-lg bg-white p-4 text-[var(--foreground)] shadow-[0_28px_80px_rgba(0,0,0,0.22)] sm:p-7">
            <div className="rounded-t-md bg-[var(--navy)] px-5 py-5 text-white sm:px-7">
              <div className="flex items-center justify-between text-xs"><span className="font-bold text-[var(--gold)]">Jesus e Evangelhos</span><span>4 de 12</span></div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/15"><div className="home-demo-progress h-full rounded-full bg-[var(--gold)]" /></div>
            </div>
            <div className="px-2 pb-2 pt-6 sm:px-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--olive-dark)]">Escolha uma alternativa</p>
              <h3 className="mt-3 font-serif text-[clamp(1.7rem,4vw,2.6rem)] leading-tight text-[var(--navy)]">Qual foi o primeiro milagre de Jesus narrado no Evangelho de João?</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Multiplicar pães", "Curar um cego", "Transformar água em vinho", "Acalmar a tempestade"].map((option, index) => <div key={option} className={`flex min-h-14 items-center gap-3 rounded-md border px-4 text-sm font-bold ${index === 2 ? "home-demo-answer border-[var(--success)] bg-[var(--success-soft)] text-[var(--success)]" : "border-[var(--border)]"}`}><span className="grid size-7 shrink-0 place-items-center rounded-full border border-current/25">{index === 2 ? "✓" : String.fromCharCode(65 + index)}</span>{option}</div>)}
              </div>
              <div className="home-demo-explanation mt-5 rounded-md border border-[var(--success)]/25 bg-[var(--success-soft)] p-5">
                <strong className="text-[var(--navy)]">Resposta correta!</strong><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Em Caná, Jesus transformou água em vinho. Este sinal manifestou sua glória.</p><p className="mt-2 text-xs font-extrabold text-[var(--olive-dark)]">Referência: João 2:1–11</p>
              </div>
            </div>
          </div>
          <p className="mt-3 text-right text-xs text-white/55">Demonstração fiel à interface do quiz.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function HomePracticalResources() {
  return (
    <section className="border-y border-[var(--border)] bg-white py-16 lg:py-20">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_1.58fr] lg:items-center">
          <ScrollReveal>
            <figure className="max-w-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image src="/images/editorial/familia-lendo.jpg" alt="Família reunida para uma leitura compartilhada" fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover" />
              </div>
            </figure>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <span className="eyebrow">Para grupos e famílias</span>
            <h2 className="mt-4 max-w-2xl font-serif text-[clamp(2rem,3.2vw,2.8rem)] leading-[1.1] text-[var(--navy)]">Prepare uma atividade bíblica com um roteiro claro.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">Escolha o público, a duração e o objetivo para receber um roteiro. Depois, imprima cartões, checklists ou planos familiares sem cadastro.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/monte-seu-encontro" className="button-primary">Criar meu roteiro <span aria-hidden="true">→</span></Link><Link href="/materiais" className="button-secondary">Ver materiais</Link></div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
