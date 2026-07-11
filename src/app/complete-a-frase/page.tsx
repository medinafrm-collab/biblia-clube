import type { Metadata } from "next";
import { CompletePhraseGame } from "@/components/CompletePhraseGame";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Complete a Frase Bíblica — Jogo Grátis Online",
  description:
    "Complete frases bíblicas online, escolha a continuação correta e confira a passagem e a referência. Jogo grátis e sem cadastro.",
  alternates: { canonical: "/complete-a-frase" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/complete-a-frase",
    title: "Complete a Frase Bíblica — Jogo Grátis Online",
    description:
      "Teste seus conhecimentos completando frases da Bíblia em rodadas rápidas e gratuitas.",
  },
};

export default function CompleteAFrasePage() {
  return (
    <>
      <Header />
      <main>
        <CompletePhraseGame />
      </main>
      <Footer />
    </>
  );
}
