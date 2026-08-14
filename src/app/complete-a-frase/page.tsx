import type { Metadata } from "next";
import { CompletePhraseGame } from "@/components/CompletePhraseGame";
import { Footer } from "@/components/Footer";
import { GameEditorialSection } from "@/components/GameEditorialSection";
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
        <GameEditorialSection
          title="Reconheça a passagem sem separar frase e contexto."
          paragraphs={[
            "Complete a Frase apresenta o início de uma passagem e quatro possibilidades de continuação. Depois da resposta, o texto completo e a referência ficam disponíveis para conferência. Assim, a atividade não termina no acerto: ela também ajuda a localizar a frase e perceber seu sentido dentro da passagem.",
            "Em grupos, o jogo pode ser usado como revisão de textos estudados ou como início de uma conversa. O condutor pode selecionar uma frase da rodada, ler os versículos próximos e perguntar o que muda quando o trecho é observado em seu contexto.",
          ]}
          benefits={[
            "Memória de frases e referências conhecidas.",
            "Atenção às palavras que completam o sentido do texto.",
            "Hábito de conferir a passagem depois de responder.",
          ]}
          groupTips={[
            "Faça uma rodada curta e permita que todos pensem antes da resposta.",
            "Leia em voz alta a frase completa exibida após cada escolha.",
            "Abra a Bíblia em uma das referências e observe os versículos próximos.",
            "Finalize escolhendo uma frase para recordar durante a semana.",
          ]}
          sourceNote="os trechos reproduzidos no jogo usam a Bíblia Portuguesa Mundial, tradução em domínio público, e permanecem acompanhados de suas referências para conferência."
        />
      </main>
      <Footer />
    </>
  );
}
