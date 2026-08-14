import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a proposta, a responsabilidade editorial e os critérios usados nos jogos, guias e dinâmicas do Bíblia Clube.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <InstitutionalPage
      eyebrow="Sobre o Bíblia Clube"
      title="Aprender junto pode ser leve, profundo e divertido."
      intro="O Bíblia Clube é um projeto independente que aproxima pessoas da Bíblia por meio de jogos, guias e dinâmicas gratuitas, simples de usar e fáceis de compartilhar."
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
        <h2>Responsabilidade editorial</h2>
        <p className="mt-4">
          Os conteúdos são preparados e revisados pelo projeto Bíblia Clube.
          Nosso compromisso é apresentar informações claras, referências
          verificáveis e atividades respeitosas para diferentes contextos
          cristãos.
        </p>
        <p className="mt-4">
          Dúvidas, sugestões e pedidos de correção podem ser enviados para{" "}
          <a
            href="mailto:bibliaclubeweb@gmail.com"
            className="font-bold text-[var(--navy)]"
          >
            bibliaclubeweb@gmail.com
          </a>
          .
        </p>
      </div>
      <div>
        <h2>Como o conteúdo é preparado</h2>
        <ol className="mt-4">
          <li>1. O tema e o objetivo de aprendizado são definidos.</li>
          <li>2. A pergunta ou dinâmica é confrontada com a passagem indicada.</li>
          <li>3. Alternativas, explicações e referências passam por revisão.</li>
          <li>4. A linguagem é adaptada para ser clara sem infantilizar o conteúdo.</li>
        </ol>
      </div>
      <div>
        <h2>Fontes e critérios</h2>
        <p className="mt-4">
          As perguntas se concentram em fatos apresentados diretamente no texto
          bíblico. Evitamos questões que dependam de uma interpretação
          denominacional específica ou que possam admitir mais de uma resposta
          correta.
        </p>
        <p className="mt-4">
          Quando uma atividade reproduz trechos completos, identificamos a
          tradução utilizada e priorizamos textos em domínio público. As
          referências permitem que cada pessoa confira a passagem e continue o
          estudo em sua versão de preferência.
        </p>
      </div>
      <div>
        <h2>O que valorizamos</h2>
        <ul className="mt-4">
          <li>Conteúdo claro, respeitoso e acessível.</li>
          <li>Experiências que incentivem conversa e aprendizado.</li>
          <li>Referências que aproximem o jogo da leitura bíblica.</li>
          <li>Tecnologia simples, rápida e agradável de usar.</li>
        </ul>
      </div>
    </InstitutionalPage>
  );
}
