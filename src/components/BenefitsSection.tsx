import Image from "next/image";

const benefits = [
  {
    number: "01",
    title: "Pergunta, resposta e referência",
    description:
      "No quiz, confirme a escolha, leia a explicação e consulte a passagem. Não precisa decorar antes de jogar.",
  },
  {
    number: "02",
    title: "Pistas para descobrir personagens",
    description:
      "Em Quem sou eu?, revele uma pista por vez ou arrisque uma resposta. Mais pistas reduzem a pontuação, mas ajudam a conferir.",
  },
  {
    number: "03",
    title: "Rodada com equipes",
    description:
      "No Modo Grupo, configure equipes, perguntas, tempo e rebote antes de começar. Quem conduz pode ler para todos.",
  },
  {
    number: "04",
    title: "Roteiros com apoio pronto",
    description:
      "Na Biblioteca, encontre cenas, cronogramas e gabaritos que podem ser usados sem depender de uma rodada aleatória.",
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
            <span className="eyebrow">O que você encontra</span>
            <h2 className="mt-4 font-serif text-[clamp(1.8rem,2.6vw,2.4rem)] leading-[1.08] text-[var(--navy)]">
              Diferentes maneiras de jogar e conferir.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Jogos gratuitos no navegador e instruções para organizar a leitura, sem cadastro nem instalação.
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
