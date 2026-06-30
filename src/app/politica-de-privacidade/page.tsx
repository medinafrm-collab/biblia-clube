import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/InstitutionalPage";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como o Bíblia Clube utiliza dados, cookies e métricas de acesso.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <InstitutionalPage
      eyebrow="Transparência"
      title="Política de Privacidade"
      intro="Esta política explica quais informações podem ser tratadas durante o uso do Bíblia Clube, para que servem e quais escolhas estão disponíveis ao visitante."
    >
      <div>
        <h2>Responsável e contato</h2>
        <p className="mt-4">O Bíblia Clube é responsável pelo site e pelo tratamento descrito nesta página. Dúvidas e solicitações podem ser enviadas para <a href="mailto:bibliaclubeweb@gmail.com">bibliaclubeweb@gmail.com</a>.</p>
      </div>
      <div>
        <h2>Dados tratados atualmente</h2>
        <p className="mt-4">Os jogos funcionam no navegador e não exigem cadastro. Respostas, pontuações e nomes informados no Modo Grupo não são enviados para um banco de dados do Bíblia Clube.</p>
        <p className="mt-4">Utilizamos Web Analytics e Speed Insights, da Vercel, para entender acessos e desempenho. Essas ferramentas podem registrar dados técnicos e agregados, como página visitada, origem do acesso, país, dispositivo, navegador e métricas de velocidade. O Web Analytics da Vercel não usa cookies nem cria um histórico que identifique o visitante entre diferentes sites ou dias.</p>
      </div>
      <div>
        <h2>Cookies e preferências</h2>
        <p className="mt-4">Atualmente, usamos o cookie necessário <strong>biblia_clube_consent</strong> para guardar por até 180 dias a escolha feita no aviso de privacidade. Ele evita que a mensagem seja exibida a cada visita.</p>
        <p className="mt-4">A escolha pode ser revista em &quot;Preferências de privacidade&quot;, no rodapé, ou apagando os cookies no navegador.</p>
      </div>
      <div>
        <h2>Finalidades</h2>
        <ul className="mt-4">
          <li>oferecer e proteger o funcionamento dos jogos e páginas;</li>
          <li>lembrar a preferência de privacidade do visitante;</li>
          <li>medir, de forma agregada, acessos e desempenho;</li>
          <li>identificar erros e melhorar conteúdo, navegação e velocidade;</li>
          <li>responder mensagens enviadas voluntariamente por e-mail.</li>
        </ul>
        <p className="mt-4">Conforme o caso, o tratamento se baseia no consentimento, no funcionamento necessário do serviço e no interesse legítimo de manter e melhorar o site, sempre considerando os direitos do usuário.</p>
      </div>
      <div>
        <h2>Serviços de terceiros</h2>
        <p className="mt-4">O site é hospedado na Vercel, que também fornece as métricas mencionadas. Informações técnicas podem ser processadas por sua infraestrutura conforme as políticas e medidas de segurança do fornecedor. O código é armazenado no GitHub, sem que isso implique acesso do GitHub aos dados de navegação.</p>
      </div>
      <div>
        <h2>Publicidade</h2>
        <p className="mt-4">O Bíblia Clube ainda não exibe anúncios. Se o Google AdSense ou outro serviço for ativado, esta política será atualizada e os mecanismos exigidos de consentimento serão configurados antes da publicidade personalizada.</p>
        <p className="mt-4">Serviços de publicidade podem utilizar cookies, endereços IP, web beacons e outros identificadores. Saiba <a href="https://policies.google.com/technologies/partner-sites?hl=pt-BR" target="_blank" rel="noreferrer">como o Google usa dados em sites de parceiros</a>.</p>
      </div>
      <div>
        <h2>Direitos e retenção</h2>
        <p className="mt-4">O visitante pode solicitar informações, correção, exclusão ou outros direitos previstos na legislação aplicável pelo e-mail <a href="mailto:bibliaclubeweb@gmail.com">bibliaclubeweb@gmail.com</a>. Dados enviados por e-mail são mantidos somente pelo período necessário para atender a solicitação e cumprir obrigações aplicáveis.</p>
      </div>
      <div>
        <h2>Atualizações desta política</h2>
        <p className="mt-4">Esta página poderá ser revisada quando novos recursos, fornecedores ou formas de tratamento forem adicionados.</p>
        <p className="mt-4 text-sm">Última atualização: 30 de junho de 2026.</p>
      </div>
    </InstitutionalPage>
  );
}
