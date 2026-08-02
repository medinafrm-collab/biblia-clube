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
        <div className="mt-5 grid gap-3">
          <a
            href="mailto:bibliaclubeweb@gmail.com"
            className="flex w-fit items-center gap-3 font-bold text-[var(--navy)] no-underline hover:text-[var(--olive-dark)]"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-5 text-[var(--gold)]"
            >
              <path
                d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="m5.25 7.25 6.75 5 6.75-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
            bibliaclubeweb@gmail.com
          </a>
          <a
            href="https://www.instagram.com/bibliaclube.br/"
            target="_blank"
            rel="noreferrer"
            className="flex w-fit items-center gap-3 font-bold text-[var(--navy)] no-underline hover:text-[var(--olive-dark)]"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-5 text-[var(--gold)]"
            >
              <rect
                x="5"
                y="5"
                width="14"
                height="14"
                rx="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="12"
                r="3.2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="16.2" cy="7.8" r="1" fill="currentColor" />
            </svg>
            @bibliaclube.br
          </a>
        </div>
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
