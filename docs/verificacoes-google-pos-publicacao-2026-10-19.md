# Verificacoes Google apos publicacao

Data: 19/10/2026. Producao: commit 53dccf301e67da3dc411d259277be40a20ece300, deployment dpl_B7hqjheSBExE5215ffcTNipxfiPs READY.

## Search Console

- Prefixo https://www.bibliaclube.com.br/ verificado pelo responsavel usando Tag HTML.
- Sitemap enviado e processado; 58 paginas encontradas, nao necessariamente indexadas.
- Home, Biblioteca, artigo como-montar-uma-noite-de-jogos-biblicos e quiz-biblico: indexados no registro consultado; canonical selecionado corresponde ao inspecionado. Testes ao vivo aprovados.
- quem-sou-eu e monte-seu-encontro: detectados, mas nao indexados, sem rastreamento registrado. Testes ao vivo aprovados, rastreamento e indexacao permitidos e canonical declarado correto. Solicitacoes de indexacao aceitas na fila prioritaria; sem garantia de indexacao.
- Acoes manuais: nenhum problema detectado no painel.
- Problemas de seguranca: nenhum problema detectado no painel. Isso nao substitui auditoria integral de seguranca.

## Consentimento em producao

- Preferencias reabrem na Home e no Quiz.
- Apos selecionar Apenas necessarios e recarregar, a tag gtag do GA4 nao estava no DOM.
- Apos aceitar, a tag G-4YDMW2FM81 apareceu no DOM. Presenca da tag nao comprova processamento de todos os eventos no GA4.
- Politica de Privacidade acessada depois de aceitar: nenhum script externo Google/funding/Vercel encontrado na verificacao DOM de script[src].
- Quiz: tag GA4 presente apos aceitar; nenhum script de publicidade encontrado na verificacao realizada.
- Teste oficial https://www.bibliaclube.com.br/?fc=alwaysshow&fctype=gdpr: mensagem europeia nao apareceu no navegador utilizado, apesar de o script AdSense carregar. Causa nao estabelecida. Nao declarar CMP validada nem inferir que a recusa editorial se deve a isso.
- Painel AdSense: mensagem europeia permanece publicada, ingles e mais 31 idiomas, consentir/nao consentir/gerenciar opcoes presentes na previa. Nenhuma configuracao alterada.

Procedimento oficial de teste: https://support.google.com/adsense/answer/10924669?hl=en

## ads.txt e revisao

- Painel ainda apresenta Conteudo de baixo valor e ads.txt Nao encontrado, ultima atualizacao 18/09/2026.
- Consulta publica atual: https://bibliaclube.com.br/ads.txt redireciona a https://www.bibliaclube.com.br/ads.txt; resposta final 200, text/plain; conteudo google.com, pub-8150008386108071, DIRECT, f08c47fec0942fa0.
- Divergencia registrada; nao ha prova de ausencia atual do arquivo ou de leitura atualizada pelo Google.
- Nao marcado Confirmo que corrigi os problemas e nao solicitada revisao.
- Pendente: confirmar entrega real da CMP em navegador/ambiente de teste adequado, investigar a causa se continuar ausente e acompanhar processamento do ads.txt e das duas URLs.
- Configuracoes de conta, pagamentos, DNS, permissoes e anuncios nao foram alteradas nesta rodada.
