import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MatchingGame } from "@/components/MatchingGame";

export const metadata: Metadata = {
  title: "Ligue os Pares Bíblico — Jogo Grátis Online",
  description:
    "Jogue Ligue os Pares bíblico grátis e conecte personagens, livros, lugares e acontecimentos com explicações e referências.",
  alternates: { canonical: "/ligue-os-pares" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/ligue-os-pares",
    title: "Ligue os Pares Bíblico — Jogo Grátis Online",
    description:
      "Faça conexões entre personagens, livros, lugares e acontecimentos bíblicos.",
  },
};

export default function LigueOsParesPage() {
  return (
    <>
      <Header />
      <main>
        <MatchingGame />
      </main>
      <Footer />
    </>
  );
}
