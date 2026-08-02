import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MemoryGame } from "@/components/MemoryGame";

export const metadata: Metadata = {
  title: "Jogo da Memória Bíblico — Grátis Online",
  description:
    "Jogue memória grátis com pares de personagens e símbolos ou trechos e referências.",
  alternates: { canonical: "/jogo-da-memoria-biblico" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/jogo-da-memoria-biblico",
    title: "Jogo da Memória Bíblico — Grátis Online",
    description:
      "Encontre pares em um jogo da memória gratuito, leve e educativo.",
  },
};

export default function BibleMemoryGamePage() {
  return (
    <>
      <Header />
      <main>
        <MemoryGame />
      </main>
      <Footer />
    </>
  );
}
