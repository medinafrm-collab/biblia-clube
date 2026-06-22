import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type InstitutionalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function InstitutionalPage({
  eyebrow,
  title,
  intro,
  children,
}: InstitutionalPageProps) {
  return (
    <>
      <Header />
      <main>
        <section className="paper-texture border-b border-[var(--border)] py-20 sm:py-28">
          <div className="container-site">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="display-title mt-5 max-w-4xl text-[clamp(3rem,7vw,5.5rem)] text-[var(--navy)]">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              {intro}
            </p>
          </div>
        </section>
        <section className="section-space bg-white">
          <div className="container-site">
            <div className="prose-institutional max-w-3xl space-y-9 text-[var(--muted)] [&_a]:font-bold [&_a]:text-[var(--navy)] [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-[var(--navy)] [&_li]:mb-2 [&_p]:leading-8 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
