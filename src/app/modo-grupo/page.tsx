import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { GameEditorialSection } from "@/components/GameEditorialSection";
import { GroupMode } from "@/components/GroupMode";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Modo Grupo — Quiz Bíblico para Equipes",
  description:
    "Crie equipes, escolha um tema e jogue quiz bíblico em grupo com turnos, cronômetro, rebote e placar.",
  alternates: { canonical: "/modo-grupo" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/modo-grupo",
    title: "Modo Grupo — Quiz Bíblico para Equipes",
    description:
      "Quiz bíblico para famílias, células e grupos jogarem no mesmo aparelho.",
  },
};

export default function ModoGrupoPage() {
  return (
    <>
      <Header />
      <main>
        <GroupMode />
        <GameEditorialSection
          title="Uma competição leve que aproxima o grupo."
          paragraphs={[
            "O Modo Grupo transforma uma sequência de perguntas em uma atividade coletiva. As equipes participam por turnos, acompanham o placar e podem usar o rebote para manter todos atentos. O objetivo não é expor quem sabe menos, mas criar uma oportunidade de lembrar histórias, ouvir explicações e conversar sobre as referências apresentadas.",
            "Quem conduz pode escolher a quantidade de perguntas e decidir se haverá limite de tempo. Em células, encontros de jovens ou momentos em família, uma rodada curta costuma funcionar bem como abertura. Para um estudo mais aprofundado, vale pausar depois de algumas respostas e ler a passagem indicada com o grupo.",
          ]}
          benefits={[
            "Participação e escuta entre pessoas com diferentes níveis de conhecimento.",
            "Memória de personagens, acontecimentos e ensinamentos.",
            "Cooperação, tomada de decisão e conversa em equipe.",
          ]}
          groupTips={[
            "Explique que a pontuação serve apenas para deixar a atividade mais dinâmica.",
            "Alterne quem responde para que mais pessoas participem.",
            "Depois de uma pergunta importante, leia a referência e abra uma conversa breve.",
            "Finalize destacando um aprendizado da rodada, e não apenas a equipe vencedora.",
          ]}
          sourceNote="as perguntas apresentam uma única resposta correta, explicação e referência diretamente relacionada. O grupo pode conferir cada passagem na tradução que utiliza habitualmente."
        />
      </main>
      <Footer />
    </>
  );
}
