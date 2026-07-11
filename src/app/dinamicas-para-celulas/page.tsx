import type { Metadata } from "next";
import { CellDynamics } from "@/components/CellDynamics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Dinâmicas para Células | Bíblia Clube",
  description:
    "Dinâmicas para células, grupos de jovens e casais. Encontros prontos para quebrar o gelo, conversar e aprender juntos.",
  alternates: { canonical: "/dinamicas-para-celulas" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/dinamicas-para-celulas",
    title: "Dinâmicas para Células | Bíblia Clube",
    description:
      "Roteiros prontos para jovens, casais e células que desejam conversar e aprender juntos.",
  },
};

export default function DinamicasParaCelulasPage() {
  return (
    <>
      <Header />
      <main>
        <section className="paper-texture border-b border-[var(--border)] py-20 sm:py-28">
          <div className="container-site">
            <span className="eyebrow">Dinâmicas para células</span>
            <h1 className="display-title mt-5 max-w-4xl text-[clamp(3rem,7vw,5.5rem)] text-[var(--navy)]">
              Encontros que ajudam pessoas a se aproximarem.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Roteiros simples para jovens, casais e células conversarem com profundidade, leveza e propósito.
            </p>
          </div>
        </section>
        <CellDynamics />
      </main>
      <Footer />
    </>
  );
}
