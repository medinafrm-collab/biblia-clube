import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionalPage } from "@/components/InstitutionalPage";
import { cellDynamics } from "@/data/cellDynamics";
import { editorialArticles } from "@/data/editorialContent";
import { printableResources } from "@/data/printableResources";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a proposta, a responsabilidade editorial e os canais para enviar sugestões ao Bíblia Clube.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre",
    description:
      "Conheça a proposta, a responsabilidade editorial e os canais para enviar sugestões ao Bíblia Clube.",
    url: "/sobre",
  },
};

export default function SobrePage() {
  return (
    <InstitutionalPage
      eyebrow="Sobre o Bíblia Clube"
      title="Aprender junto pode ser leve, profundo e divertido."
      intro="O Bíblia Clube é um projeto independente que aproxima pessoas da Bíblia por meio de jogos, conteúdos editoriais, materiais e ferramentas gratuitas para preparar encontros."
    >
      <div>
        <h2>Nossa proposta</h2>
        <p className="mt-4">
          Criamos quizzes, jogos, dinâmicas, artigos, materiais para imprimir e
          uma ferramenta de roteiro para quem quer aprender mais sobre a Bíblia
          sozinho ou em comunidade. O conteúdo é pensado para famílias, jovens,
          igrejas, células, escolas bíblicas e pequenos grupos.
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
      </div>
      <div>
        <h2>Quem produz o conteúdo</h2>
        <p className="mt-4">
          O Bíblia Clube é um projeto independente. Os textos, roteiros, perguntas e explicações são preparados e revisados sob a autoria editorial do próprio projeto. Não atribuímos credenciais, equipe ou especialistas que não existem.
        </p>
        <p className="mt-4">
          O acervo atual inclui {editorialArticles.length} artigos editoriais, {cellDynamics.length} dinâmicas completas e {printableResources.length} materiais para imprimir, além dos jogos e guias interativos.
        </p>
      </div>
      <div>
        <h2>Como o conteúdo é preparado</h2>
        <ol className="mt-4">
          <li>1. O tema e o objetivo de aprendizado são definidos.</li>
          <li>2. A pergunta ou dinâmica é confrontada com a passagem indicada.</li>
          <li>3. Alternativas, explicações e referências passam por revisão.</li>
          <li>4. A linguagem é adaptada para ser clara sem infantilizar o conteúdo.</li>
          <li>5. Páginas novas são verificadas em celular e computador antes da publicação.</li>
        </ol>
        <p className="mt-5">
          O processo completo de pesquisa, revisão, uso de ferramentas e
          tratamento de correções está documentado em nossa página de{" "}
          <Link href="/como-produzimos-conteudos">
            critérios e processo editorial
          </Link>
          .
        </p>
      </div>
      <div>
        <h2>Atualização e correções</h2>
        <p className="mt-4">
          Artigos editoriais informam a data da revisão mais recente. Sugestões de atividades são verificadas quanto à clareza, ao contexto bíblico e ao risco de exposição desnecessária de participantes. Correções relevantes são incorporadas ao conteúdo assim que confirmadas.
        </p>
        <p className="mt-4">
          A última revisão geral desta página foi feita em 6 de setembro de 2026.
        </p>
      </div>
      <div>
        <h2>Imagens e licenças</h2>
        <p className="mt-4">
            O site utiliza fotografias de bancos de imagens, com fontes registradas, e imagens ilustrativas geradas ou editadas com inteligência artificial. Essas ilustrações representam situações de uso e não documentam encontros reais. Algumas incluem representações dos jogos; a interface disponível pode ser diferente da ilustração.
        </p>
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
      <div>
        <h2>Contato e participação</h2>
        <p className="mt-4">
          Recados, sugestões de temas, relatos de uso e pedidos de correção são
          bem-vindos. Você pode falar com o Bíblia Clube por um destes canais:
        </p>
        <ul className="mt-4">
          <li>
            E-mail:{" "}
            <a href="mailto:bibliaclubeweb@gmail.com?subject=Recado%20ou%20sugest%C3%A3o%20para%20o%20B%C3%ADblia%20Clube">
              bibliaclubeweb@gmail.com
            </a>
          </li>
          <li>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/bibliaclube.br/"
              target="_blank"
              rel="noreferrer"
            >
              @bibliaclube.br
            </a>
          </li>
        </ul>
        <p className="mt-4">
          Para outros assuntos, consulte também a página de{" "}
          <Link href="/contato">contato</Link>.
        </p>
      </div>
    </InstitutionalPage>
  );
}
