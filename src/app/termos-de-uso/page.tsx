import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso do site Bíblia Clube.",
};

export default function TermosDeUsoPage() {
  return (
    <InstitutionalPage
      eyebrow="Uso responsável"
      title="Termos de Uso"
      intro="Ao acessar o Bíblia Clube, você concorda com as condições básicas apresentadas nesta página."
    >
      <div>
        <h2>Finalidade do conteúdo</h2>
        <p className="mt-4">
          O Bíblia Clube oferece conteúdo educativo e recreativo relacionado à
          Bíblia, incluindo quizzes, jogos e dinâmicas. O material busca
          incentivar o aprendizado e a convivência em grupo.
        </p>
      </div>
      <div>
        <h2>Uso do site</h2>
        <p className="mt-4">
          Você pode acessar e utilizar os recursos gratuitos para fins
          pessoais, familiares, educacionais e em atividades de igrejas e
          pequenos grupos. Não é permitido usar o site de forma que prejudique
          seu funcionamento ou os demais visitantes.
        </p>
      </div>
      <div>
        <h2>Precisão e interpretações</h2>
        <p className="mt-4">
          Trabalhamos para manter as perguntas e explicações claras e corretas.
          Ainda assim, o conteúdo não substitui estudo aprofundado, orientação
          pastoral ou consulta direta às Escrituras. Diferentes tradições
          cristãs podem apresentar formas distintas de interpretação.
        </p>
      </div>
      <div>
        <h2>Recursos futuros</h2>
        <p className="mt-4">
          Serviços pagos, assinaturas ou contas de usuário poderão ter
          condições específicas quando forem lançados. Esses termos serão
          atualizados antes da disponibilização desses recursos.
        </p>
        <p className="mt-4 text-sm">Última atualização: junho de 2026.</p>
      </div>
    </InstitutionalPage>
  );
}
