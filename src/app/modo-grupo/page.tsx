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
          examples={[{"title":"Um exemplo de placar com rebote","explanation":"Imagine duas equipes, Alfa e Beta, sem cronômetro. Alfa acerta na sua vez: soma 10 pontos. Depois Beta erra e Alfa acerta o rebote: soma mais 5, ficando com 15. Se o rebote estiver desativado, essa segunda tentativa não existe. O exemplo é fictício; combine as regras antes da primeira pergunta.","reference":"Regras do Modo Grupo: acerto normal 10; rebote 5"},{"title":"Conferência sem transformar pontos em julgamento","explanation":"Na pergunta sobre quem construiu a arca, a resposta é Noé. Gênesis 6:13-22 registra a orientação e a execução. Após a tentativa e eventual rebote, leia a explicação e permita conferir a passagem. Saber essa resposta não mede a fé da equipe; a leitura serve para aprender, não para constranger quem errou.","reference":"Gênesis 6:13-22"}]}
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
