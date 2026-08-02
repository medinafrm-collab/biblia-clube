import Link from "next/link";

type RelatedTool = {
  title: string;
  description: string;
  href: string;
};

type RelatedToolsProps = {
  title?: string;
  description?: string;
  tools: RelatedTool[];
};

export function RelatedTools({
  title = "Ferramentas relacionadas",
  description = "Depois da leitura, você pode aplicar o tema com uma atividade prática do Bíblia Clube.",
  tools,
}: RelatedToolsProps) {
  return (
    <section className="mt-12 rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-6 sm:p-8">
      <div className="max-w-2xl">
        <h2 className="font-serif text-3xl text-[var(--navy)]">{title}</h2>
        <p className="mt-3 leading-7 text-[var(--muted)]">{description}</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="rounded-lg border border-[var(--border)] bg-white p-5 no-underline transition hover:-translate-y-0.5 hover:border-[var(--gold)] hover:shadow-[0_18px_45px_rgba(37,50,43,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--navy)]"
          >
            <h3 className="font-serif text-xl text-[var(--navy)]">
              {tool.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {tool.description}
            </p>
            <span className="mt-4 inline-flex text-sm font-extrabold text-[var(--olive-dark)]">
              Abrir ferramenta <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
