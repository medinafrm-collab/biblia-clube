import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Bíblia Clube — página inicial"
      className="inline-flex items-center gap-3 text-[var(--navy)] no-underline"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 64 52"
        className="h-11 w-12 shrink-0 drop-shadow-sm"
      >
        <path
          d="M30 10C23 5 13 4 4 7v32c10-2 19 0 26 6V10Z"
          fill="var(--navy)"
        />
        <path
          d="M34 10c7-5 17-6 26-3v32c-10-2-19 0-26 6V10Z"
          fill="var(--navy)"
        />
        <path
          d="M4 43c10-2 19 0 27 6M60 43c-10-2-19 0-27 6"
          fill="none"
          stroke="var(--navy)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="m32 16 2.8 7.2L42 26l-7.2 2.8L32 36l-2.8-7.2L22 26l7.2-2.8L32 16Z"
          fill="var(--gold)"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <span className="leading-none">
        <span className="block font-serif text-xl font-bold">
          Bíblia Clube
        </span>
        <span className="mt-1 block text-[0.62rem] font-bold uppercase text-[var(--olive)]">
          Aprender & compartilhar
        </span>
      </span>
    </Link>
  );
}
