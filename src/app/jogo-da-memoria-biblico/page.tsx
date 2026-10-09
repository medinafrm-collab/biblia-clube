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
          examples={[{"title":"Davi e a harpa: uma ligação específica","explanation":"Em 1 Samuel 16:23, Davi toca a harpa quando Saul é atormentado. Esse episódio explica o símbolo usado no par; a harpa não resume toda a biografia de Davi. Depois de localizar as cartas, confira quem toca e para quem.","reference":"1 Samuel 16:14-23"},{"title":"Noé e a arca: orientação e execução","explanation":"Gênesis 6 descreve instruções sobre a arca e termina afirmando que Noé fez o que Deus ordenou. A associação vem desse relato, não da ideia de que qualquer barco representa Noé.","reference":"Gênesis 6:13-22"}]}
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
