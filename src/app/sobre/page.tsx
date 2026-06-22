import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a proposta do Bíblia Clube e nossa visão para jogos e dinâmicas bíblicas.",
};

export default function SobrePage() {
  return (
    <InstitutionalPage
      eyebrow="Sobre o Bíblia Clube"
      title="Aprender junto pode ser leve, profundo e divertido."
      intro="O Bíblia Clube nasceu para aproximar pessoas da Bíblia por meio de experiências simples, acolhedoras e fáceis de compartilhar."
    >
      <div>
        <h2>Nossa proposta</h2>
        <p className="mt-4">
          Criamos quizzes, jogos e dinâmicas para quem quer aprender mais sobre
          a Bíblia sozinho ou em comunidade. O conteúdo é pensado para
          famílias, jovens, igrejas, células, escolas bíblicas e pequenos
          grupos.
        </p>
      </div>
      <div>
        <h2>O que valorizamos</h2>
        <ul className="mt-4">
          <li>Conteúdo claro, respeitoso e acessível.</li>
          <li>Experiências que incentivem conversa e aprendizado.</li>
          <li>Tecnologia simples, rápida e agradável de usar.</li>
          <li>Espaço para diferentes idades e níveis de conhecimento.</li>
        </ul>
      </div>
      <div>
        <h2>Um projeto em construção</h2>
        <p className="mt-4">
          Esta é a primeira versão do Bíblia Clube. Novos quizzes, materiais e
          modos de jogo serão desenvolvidos aos poucos, ouvindo as necessidades
          de quem usa o projeto.
        </p>
      </div>
    </InstitutionalPage>
  );
}
