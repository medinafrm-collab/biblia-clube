import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Bíblia Clube para sugestões, dúvidas e parcerias.",
};

export default function ContatoPage() {
  return (
    <InstitutionalPage
      eyebrow="Fale com a gente"
      title="Boas ideias ficam melhores quando são compartilhadas."
      intro="Tem uma sugestão de quiz, quer usar o projeto com seu grupo ou deseja conversar sobre uma parceria? Escreva para nós."
    >
      <div className="card !bg-[var(--surface-soft)] p-7 sm:p-9">
        <h2>Canal de contato</h2>
        <p className="mt-4">
          Envie sua mensagem para{" "}
          <a href="mailto:bibliaclubeweb@gmail.com">
            bibliaclubeweb@gmail.com
          </a>
          .
        </p>
      </div>
      <div>
        <h2>Você pode escrever sobre</h2>
        <ul className="mt-4">
          <li>Sugestões de perguntas e temas.</li>
          <li>Relatos de uso em famílias, células e igrejas.</li>
          <li>Correções ou melhorias no conteúdo.</li>
          <li>Interesse em novidades e na futura área premium.</li>
          <li>Possíveis parcerias com o projeto.</li>
        </ul>
      </div>
    </InstitutionalPage>
  );
}
