# Investigacao da CMP - 20/10/2026

## Confirmado

- Mensagem europeia publicada e associada a bibliaclube.com.br no seletor de sites do AdSense.
- Politica configurada: https://bibliaclube.com.br/politica-de-privacidade.
- Publisher da mensagem e da unica tag AdSense na Home: pub-8150008386108071.
- Home de teste retorna 200 e preserva fc=alwaysshow&fctype=gdpr.
- Referrer-Policy publico: strict-origin-when-cross-origin; Content-Security-Policy ausente no cabecalho consultado.
- Codigo local nao define controlledMessagingFunction nem outro supressor googlefc.
- Painel: 198 parceiros comuns, cobertura automatica de mensagens ativada, modo de consentimento para publicidade desativado.
- Painel informa que ativar modo de consentimento nao afeta a mensagem do usuario final. Nao foi ativado como tentativa de corrigir exibicao.
- Novo teste no navegador integrado: tag adsbygoogle presente, nenhuma mensagem europeia visivel, nenhum iframe de CMP identificado pela verificacao DOM focada e nenhum erro/warning capturado pela ferramenta de console. Ausencia de erros capturados nao comprova sucesso da rede.
- Captura enviada pelo responsavel em Chrome anonimo tambem mostrou somente o banner proprio de analise.

## Limites e decisoes

Nao foi confirmada a causa. Nao atribuir automaticamente a falha ao www, cookies de terceiros ou falta de aprovacao do site. Nenhuma configuracao foi modificada, nenhuma protecao desativada, nenhum novo script injetado e nenhum deploy executado.

Nao adicionar uma segunda CMP nem copiar script Funding Choices de fonte nao validada. A documentacao oficial indica que a tag AdSense existente normalmente entrega as mensagens publicadas.

## Proxima evidencia necessaria

Capturar, no DevTools do Chrome convencional, a aba Rede ao recarregar a URL de teste e filtrar por fundingchoices, googlefc e adsbygoogle. Conferir status e motivo de bloqueio das requisicoes, sem compartilhar cookies, tokens ou um HAR bruto. Se nao houver solicitacao da CMP apesar da tag carregada, levar a evidencia ao canal de ajuda do AdSense para investigar entrega da mensagem da conta.

## Texto preparado para ajuda do AdSense (nao enviado)

No site https://www.bibliaclube.com.br/, a mensagem de regulamentacoes europeias consta como publicada e associada a bibliaclube.com.br. A tag usa ca-pub-8150008386108071, igual a conta da mensagem. A URL https://www.bibliaclube.com.br/?fc=alwaysshow&fctype=gdpr preserva os parametros e retorna HTTP 200, com Referrer-Policy strict-origin-when-cross-origin. Nao ha CSP no cabecalho consultado nem funcao de supressao googlefc no codigo do projeto. O teste nao exibe a mensagem no navegador integrado e a captura em Chrome anonimo mostra apenas nosso banner independente de Analytics. Como podemos diagnosticar a entrega da CMP para esse site antes de ativar publicidade? Nao queremos desativar protecoes nem instalar uma segunda CMP sem necessidade.

## Fontes oficiais

- https://developers.google.com/funding-choices/fc-api-docs
- https://support.google.com/adsense/answer/14660912?hl=en-GB
- https://support.google.com/adsense/answer/10960768?hl=en
