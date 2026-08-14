import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { GameEditorialSection } from "@/components/GameEditorialSection";
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
        <GameEditorialSection
          title="Memória visual com significado e contexto."
          paragraphs={[
            "O Jogo da Memória propõe dois modos de associação. No primeiro, personagens são relacionados a símbolos que ajudam a recordar suas histórias. No segundo, trechos são conectados às respectivas referências. As cartas foram pensadas para que o par encontrado também revele uma informação útil.",
            "A atividade funciona bem para diferentes idades porque não exige velocidade nem cadastro. Em família ou em pequenos grupos, cada pessoa pode virar uma carta por vez. Quando um par for encontrado, vale conversar brevemente sobre o personagem ou localizar a referência antes de continuar.",
          ]}
          benefits={[
            "Memória visual e atenção à posição das cartas.",
            "Associação entre personagens, símbolos, textos e referências.",
            "Curiosidade para recordar ou conhecer a narrativa relacionada.",
          ]}
          groupTips={[
            "Escolha o modo e a dificuldade de acordo com o tempo disponível.",
            "Organize turnos para que todos possam virar cartas.",
            "Ao encontrar um par, convide alguém a explicar a conexão.",
            "Use uma referência da rodada para encerrar com uma leitura breve.",
          ]}
          sourceNote="os pares são revisados para apresentar relações claras. No modo de referências, os trechos utilizam conteúdo em domínio público e permanecem identificados."
        />
      </main>
      <Footer />
    </>
  );
}
