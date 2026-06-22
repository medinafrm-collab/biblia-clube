const steps = [
  {
    number: "01",
    title: "Escolha uma dinâmica",
    text: "Comece pelo Quiz Bíblico Geral e, em breve, explore novos temas e formatos.",
  },
  {
    number: "02",
    title: "Responda e aprenda",
    text: "Marque uma alternativa e receba uma explicação curta com a referência bíblica.",
  },
  {
    number: "03",
    title: "Compartilhe a experiência",
    text: "Jogue individualmente ou use a rodada com sua família, célula, igreja ou grupo de jovens.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-space bg-white">
      <div className="container-site">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Como funciona</span>
            <h2 className="section-title">
              Uma pausa leve para aprender algo que permanece.
            </h2>
          </div>
          <p className="section-copy lg:justify-self-end">
            Não precisa instalar nada nem criar conta. Abra, escolha sua
            resposta e acompanhe sua pontuação. Simples para jogar sozinho,
            melhor ainda para compartilhar.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="card group p-7 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl text-[var(--gold)]">
                  {step.number}
                </span>
                <span
                  aria-hidden="true"
                  className="grid size-11 place-items-center rounded-full bg-[var(--surface-soft)] text-[var(--olive-dark)] transition group-hover:bg-[var(--gold-soft)]"
                >
                  ↗
                </span>
              </div>
              <h3 className="mt-10 font-serif text-2xl text-[var(--navy)]">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
