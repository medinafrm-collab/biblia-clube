import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade do site Bíblia Clube.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <InstitutionalPage
      eyebrow="Transparência"
      title="Política de Privacidade"
      intro="Esta política apresenta, de forma simples, como o Bíblia Clube trata informações durante o uso do site."
    >
      <div>
        <h2>Versão atual do site</h2>
        <p className="mt-4">
          Nesta primeira versão, o quiz funciona diretamente no navegador e
          não exige cadastro. As respostas e a pontuação da rodada não são
          enviadas para um banco de dados do Bíblia Clube.
        </p>
      </div>
      <div>
        <h2>Recursos que poderão ser usados no futuro</h2>
        <p className="mt-4">
          À medida que o projeto evoluir, o site poderá utilizar cookies,
          ferramentas de análise de acesso e serviços de publicidade. Esses
          recursos ajudam a entender o uso do site, melhorar a experiência e
          apoiar a manutenção do projeto.
        </p>
        <p className="mt-4">
          Caso esses serviços sejam ativados, esta política será atualizada
          para informar quais dados são coletados, sua finalidade e as opções
          disponíveis ao visitante.
        </p>
      </div>
      <div>
        <h2>Contato e mensagens</h2>
        <p className="mt-4">
          Quando alguém entra em contato por e-mail, as informações fornecidas
          são usadas apenas para responder à mensagem e manter a comunicação
          necessária.
        </p>
      </div>
      <div>
        <h2>Atualizações desta política</h2>
        <p className="mt-4">
          Esta página poderá ser revisada quando novos recursos forem
          adicionados. A versão publicada no site será sempre a versão
          aplicável.
        </p>
        <p className="mt-4 text-sm">Última atualização: junho de 2026.</p>
      </div>
    </InstitutionalPage>
  );
}
