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
      id="beneficios"
      className="section-space border-t border-[var(--border)] bg-white"
    >
      <div className="container-site grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <span className="eyebrow">Por que usar</span>
          <h2 className="section-title">
            Recursos simples para aprender e compartilhar.
          </h2>
          <p className="section-copy">
            O Bíblia Clube reúne jogos e conteúdos que ajudam pessoas de
            diferentes idades a participar, conversar e aprender com leveza.
          </p>
          <a href="/sobre" className="button-secondary mt-8">
            Conheça nossa proposta
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="border-t border-[var(--border)] pt-5"
            >
              <span className="text-xs font-extrabold text-[var(--gold)]">
                {benefit.number}
              </span>
              <h3 className="mt-3 font-serif text-2xl text-[var(--navy)]">
                {benefit.title}
              </h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
