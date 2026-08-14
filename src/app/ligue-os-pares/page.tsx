import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { GameEditorialSection } from "@/components/GameEditorialSection";
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
        <GameEditorialSection
          title="Conexões que ajudam a organizar o conhecimento."
          paragraphs={[
            "Ligue os Pares trabalha com relações entre personagens, livros, lugares, acontecimentos e imagens presentes nas narrativas bíblicas. Em vez de depender apenas da memorização de uma resposta isolada, a atividade convida a observar como duas informações se conectam e por que formam um par.",
            "O jogo pode ser realizado individualmente ou projetado para um grupo. Quando uma combinação correta aparece, o condutor pode pedir que alguém explique a relação com suas próprias palavras. Esse pequeno passo transforma a rodada em revisão ativa e ajuda a perceber quais temas merecem uma leitura mais cuidadosa.",
          ]}
          benefits={[
            "Associação entre pessoas, lugares, livros e acontecimentos.",
            "Leitura atenta e comparação de informações.",
            "Organização do conhecimento por temas e contextos.",
          ]}
          groupTips={[
            "Escolha um tema relacionado ao encontro ou estudo do dia.",
            "Permita que o grupo converse antes de confirmar cada combinação.",
            "Peça uma explicação breve quando um par for encontrado.",
            "Use os pares que geraram dúvida como ponto de partida para uma leitura.",
          ]}
          sourceNote="cada combinação é construída a partir de uma relação apresentada diretamente no texto ou de um símbolo amplamente associado à narrativa indicada."
        />
      </main>
      <Footer />
    </>
  );
}
