const miniCards = [
  { value: "12", label: "perguntas no quiz" },
  { value: "100%", label: "gratuito para jogar" },
  { value: "1–5", label: "minutos por rodada" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="paper-texture relative overflow-hidden border-b border-[var(--border)]"
    >
      <div
        aria-hidden="true"
        className="absolute -right-32 top-24 size-96 rounded-full border border-[var(--gold)]/25"
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 top-40 size-64 rounded-full border border-[var(--gold)]/20"
      />

      <div className="container-site grid min-h-[calc(100vh-5rem)] items-center gap-14 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <div className="relative z-10">
          <span className="eyebrow">Conhecimento que aproxima</span>
          <h1 className="display-title mt-6 max-w-3xl text-[clamp(3.2rem,7vw,6.2rem)] text-[var(--navy)]">
            Aprenda, jogue e se conecte com a{" "}
            <span className="relative inline-block text-[var(--olive-dark)]">
              Bíblia
              <svg
                aria-hidden="true"
                viewBox="0 0 260 18"
                className="absolute -bottom-1 left-0 w-full text-[var(--gold)]"
              >
                <path
                  d="M4 13C73 2 171 3 256 10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="5"
                />
              </svg>
            </span>{" "}
            de um jeito leve e divertido.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Quizzes, jogos e dinâmicas bíblicas para grupos, famílias,
            jovens e todos que desejam aprender mais sobre a Palavra.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#quiz" className="button-primary">
              Começar Quiz
              <span aria-hidden="true">→</span>
            </a>
            <a href="#como-funciona" className="button-secondary">
              Conhecer o projeto
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-[var(--border)] pt-7">
            {miniCards.map((item) => (
              <div key={item.label}>
                <strong className="block font-serif text-2xl text-[var(--navy)]">
                  {item.value}
                </strong>
                <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[480px]">
          <div className="absolute -inset-5 rotate-3 rounded-[2.5rem] bg-[var(--gold-soft)]" />
          <div className="card relative overflow-hidden !rounded-[2.2rem] border-white/70 p-3 shadow-[0_35px_90px_rgba(32,56,47,0.16)]">
            <div className="rounded-[1.7rem] bg-[var(--navy)] p-7 text-white sm:p-9">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em]">
                  Rodada rápida
                </span>
                <span className="text-sm text-white/70">03 / 12</span>
              </div>
              <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-1/4 rounded-full bg-[var(--gold)]" />
              </div>
              <p className="mt-8 text-sm font-bold text-[var(--gold)]">
                Antigo Testamento
              </p>
              <p className="mt-3 font-serif text-3xl leading-tight">
                Quem recebeu os Dez Mandamentos no monte Sinai?
              </p>
              <div className="mt-7 grid gap-2.5">
                {["Josué", "Moisés", "Elias", "Samuel"].map((option, index) => (
                  <div
                    key={option}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm ${
                      index === 1
                        ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--navy)]"
                        : "border-white/15 bg-white/5"
                    }`}
                  >
                    <span className="grid size-7 place-items-center rounded-full border border-current/30 text-xs font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="font-bold">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-7 -left-6 hidden rounded-2xl border border-[var(--border)] bg-white p-4 shadow-xl sm:flex sm:items-center sm:gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-[var(--success-soft)] text-xl">
              ✓
            </span>
            <span>
              <strong className="block text-sm text-[var(--navy)]">
                Aprenda na hora
              </strong>
              <span className="text-xs text-[var(--muted)]">
                com explicações simples
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
