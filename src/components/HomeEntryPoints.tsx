import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const entryPoints = [
  {
    title: "Jogos bíblicos",
    description: "Quizzes, desafios e dinâmicas para aprender brincando sozinho ou em grupo.",
    action: "Explorar jogos",
    href: "#jogos",
    image: "/images/editorial/jogos-apresentacao-grupo.webp",
    imageAlt: "Apresentadora mostrando o Bíblia Clube para um grupo de jovens",
  },
  {
    title: "Biblioteca",
    description: "Guias, roteiros e conteúdos práticos para aplicar a Bíblia no cotidiano.",
    action: "Ver conteúdos",
    href: "/biblioteca",
    image: "/images/editorial/recursos-estudo-biblico-mesa-cinza.webp",
    imageAlt: "Bíblia aberta ao lado de recursos para estudo",
  },
  {
    title: "Criar roteiro",
    description: "Monte uma atividade com público, duração e objetivo definidos por você.",
    action: "Montar roteiro",
    href: "/monte-seu-encontro",
    image: "/images/editorial/roteiro-folhas.webp",
    imageAlt: "Folhas impressas com um roteiro de encontro ao lado de uma Bíblia",
  },
];

export function HomeEntryPoints() {
  return (
    <section aria-label="Principais áreas do Bíblia Clube" className="bg-white py-10 lg:py-12">
      <div className="container-site grid gap-4 md:grid-cols-3">
        {entryPoints.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 70}>
            <Link
              href={item.href}
              className="group grid h-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)] text-inherit no-underline transition hover:-translate-y-0.5 hover:border-[var(--gold)] hover:shadow-[0_16px_38px_rgba(37,50,43,0.07)]"
            >
              <div className="relative aspect-[16/7] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1191px) calc(33.333vw - 24px), 374px"
                  className="object-cover transition duration-500 group-hover:scale-[1.025]"
                />
              </div>
              <div className="flex flex-col p-5">
                <h2 className="font-serif text-2xl leading-tight text-[var(--navy)]">{item.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
                <span className="mt-4 text-sm font-extrabold text-[var(--olive-dark)]">
                  {item.action} <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export function HomeClosingCta() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--gold-soft)]/45 py-8">
      <div className="container-site flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="eyebrow">Continue explorando</span>
          <h2 className="mt-3 font-serif text-2xl text-[var(--navy)] sm:text-3xl">
            Encontre um conteúdo para o seu próximo momento.
          </h2>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link href="/biblioteca" className="button-primary">Ver biblioteca <span aria-hidden="true">→</span></Link>
          <Link href="/materiais" className="button-secondary">Ver materiais</Link>
        </div>
      </div>
    </section>
  );
}
