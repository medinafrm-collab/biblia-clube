import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Bíblia Clube — página inicial"
      className="inline-flex items-center gap-3 text-[var(--navy)] no-underline"
    >
      <span
        aria-hidden="true"
        className="grid size-10 place-items-center rounded-full bg-[var(--navy)] text-lg text-white shadow-lg shadow-slate-900/10"
      >
        ✦
      </span>
      <span className="leading-none">
        <span className="block font-serif text-xl font-bold tracking-[-0.03em]">
          Bíblia Clube
        </span>
        <span className="mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--olive)]">
          Aprender & compartilhar
        </span>
      </span>
    </Link>
  );
}
