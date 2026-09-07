import Image from "next/image";

const benefits = [
  {
    number: "01",
    title: "Gratuito e sem cadastro",
    description:
      "Abra o jogo no navegador e comece uma rodada sem instalar aplicativos ou criar uma conta.",
  },
  {
    number: "02",
    title: "Respostas que ensinam",
    description:
      "Os quizzes apresentam correção, explicação e referência para continuar a leitura com contexto.",
  },
  {
    number: "03",
    title: "Feito para compartilhar",
    description:
      "Use os jogos em família, células, encontros de jovens ou equipes reunidas no mesmo ambiente.",
  },
  {
    number: "04",
    title: "Guias para quem conduz",
    description:
      "Encontre orientações práticas para transformar perguntas e dinâmicas em boas conversas.",
  },
];

export function BenefitsSection() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--background)] py-14 lg:py-16"
    >
      <div className="container-site">
        <div className="grid overflow-hidden rounded-lg border border-[var(--border)] bg-white lg:grid-cols-[0.9fr_0.7fr_1.4fr] lg:items-stretch">
          <figure className="relative min-h-64 overflow-hidden lg:min-h-full">
            <Image
              src="/images/editorial/grupo-estudo-mesa-preta.webp"
              alt="Grupo reunido para conversar e estudar a Bíblia"
              fill
              sizes="(max-width: 1024px) 100vw, 32vw"
              className="object-cover object-center"
            />
          </figure>

          <div className="flex flex-col justify-center border-b border-[var(--border)] p-6 lg:border-b-0 lg:border-r lg:p-7">
            <span className="eyebrow">Por que usar</span>
            <h2 className="mt-4 font-serif text-[clamp(1.8rem,2.6vw,2.4rem)] leading-[1.08] text-[var(--navy)]">
              Conteúdo que ensina, conecta e transforma.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Recursos para aprender, conduzir conversas e compartilhar a Palavra em diferentes contextos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="grid grid-cols-[1.75rem_1fr] gap-3 border-b border-[var(--border)] p-5 even:sm:border-l sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <span className="pt-1 text-xs font-extrabold text-[var(--gold-ink)]">{benefit.number}</span>
                <div>
                  <h3 className="font-serif text-lg leading-tight text-[var(--navy)]">{benefit.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
