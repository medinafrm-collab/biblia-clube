import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionalPage } from "@/components/InstitutionalPage";

const title = "Como produzimos nossos conteúdos";
const description =
  "Conheça os critérios usados pelo Bíblia Clube para pesquisar, escrever, revisar e corrigir perguntas, jogos, guias e atividades bíblicas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/como-produzimos-conteudos" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "/como-produzimos-conteudos",
    title,
    description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: title,
  description,
  inLanguage: "pt-BR",
  url: "https://www.bibliaclube.com.br/como-produzimos-conteudos",
  publisher: {
    "@type": "Organization",
    name: "Bíblia Clube",
    url: "https://www.bibliaclube.com.br",
  },
};

export default function EditorialProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <InstitutionalPage
        eyebrow="Transparência editorial"
        title="Como produzimos nossos conteúdos."
        intro="O Bíblia Clube é um projeto independente. Esta página registra os critérios usados para transformar pesquisa bíblica em perguntas, explicações, guias, jogos e atividades práticas."
      >
        <div>
          <h2>Responsabilidade editorial</h2>
          <p className="mt-4">
            A autoria institucional dos conteúdos é do Bíblia Clube. Não
            atribuímos formação acadêmica, vínculo denominacional, equipe ou
            credenciais que não possuímos. Quando um conteúdo exigir
            conhecimento profissional específico, deixamos seus limites claros
            e indicamos a busca de ajuda qualificada.
          </p>
        </div>

        <div>
          <h2>Da ideia à publicação</h2>
          <ol className="mt-4">
            <li>1. Definimos o público, o objetivo e a utilidade do conteúdo.</li>
            <li>2. Localizamos as passagens bíblicas que sustentam o tema.</li>
            <li>3. Preparamos um rascunho com linguagem adequada ao contexto.</li>
            <li>4. Conferimos referências, respostas e possíveis ambiguidades.</li>
            <li>5. Revisamos clareza, repetição, acessibilidade e experiência em celular e computador.</li>
            <li>6. Publicamos com autoria institucional e data de revisão quando aplicável.</li>
          </ol>
        </div>

        <div>
          <h2>Como verificamos perguntas e respostas</h2>
          <p className="mt-4">
            Cada pergunta precisa ter uma resposta sustentada pela referência
            indicada e alternativas diferentes entre si. Evitamos enunciados
            dependentes de tradição popular, detalhes não afirmados no texto ou
            interpretações denominacionais apresentadas como fato único.
          </p>
          <p className="mt-4">
            O projeto também executa verificações automáticas de IDs, perguntas,
            respostas, alternativas, referências e similaridade para reduzir
            duplicidades. A automação apoia a revisão, mas não substitui a
            conferência do conteúdo.
          </p>
        </div>

        <div>
          <h2>Traduções e referências bíblicas</h2>
          <p className="mt-4">
            As referências permitem conferir o contexto em qualquer tradução
            de preferência. Quando exibimos o texto integral de uma passagem,
            identificamos a versão utilizada e priorizamos traduções com uso
            permitido, como a Almeida em domínio público.
          </p>
        </div>

        <div>
          <h2>Uso de inteligência artificial</h2>
          <p className="mt-4">
            Ferramentas de inteligência artificial podem apoiar rascunhos,
            organização, revisão linguística, programação e exploração visual.
            O conteúdo não é publicado automaticamente em massa: referências,
            respostas, linguagem e adequação ao propósito precisam ser
            verificadas antes da publicação.
          </p>
        </div>

        <div>
          <h2>Neutralidade e limites</h2>
          <p className="mt-4">
            Buscamos trabalhar com informações diretamente observáveis no texto
            bíblico e com linguagem respeitosa a diferentes comunidades
            cristãs. Isso não elimina todas as diferenças de interpretação;
            quando elas forem relevantes, o conteúdo deve reconhecê-las em vez
            de esconder a ambiguidade.
          </p>
        </div>

        <div>
          <h2>Correções e atualização</h2>
          <p className="mt-4">
            Sugestões de correção são analisadas a partir da referência e do
            contexto. Quando confirmadas, são incorporadas ao conteúdo. Artigos
            e páginas editoriais informam a revisão mais recente sempre que
            possível.
          </p>
          <p className="mt-4">
            Para indicar um erro, envie a página, o trecho e a referência para{" "}
            <a href="mailto:bibliaclubeweb@gmail.com">
              bibliaclubeweb@gmail.com
            </a>
            . Consulte também a página <Link href="/sobre">Sobre</Link> e nossos{" "}
            <Link href="/termos-de-uso">Termos de Uso</Link>.
          </p>
          <p className="mt-4">Última revisão desta página: 1º de setembro de 2026.</p>
        </div>
      </InstitutionalPage>
    </>
  );
}
