# Preparacao de producao: Analytics e feedback

Data: 19/10/2026. Sem deploy ou alteracoes em DNS ou Vercel. Alteracoes anteriores do plano editorial permanecem locais. Aplicacao com participantes reais continua adiada por decisao do responsavel. As atualizacoes autorizadas no Analytics estao registradas abaixo.

## Resultado por jogo

| Jogo | Parametro game | Fluxo conferido | Feedback |
| --- | --- | --- | --- |
| Quiz | quiz | Jornada 2 completa; inicio na primeira resposta | No resultado |
| Ligue os pares | ligue-os-pares | Todos os pares da rodada inicial | No resultado |
| Complete a frase | complete-a-frase | Dez respostas e resultado | No resultado |
| Quem sou eu? | quem-sou-eu | known e intermediate completas, com revelacao de pista | No resultado de ambas |
| Memoria | jogo-da-memoria | Rodada completa usando apenas cartas reveladas na interface | No resultado |
| Modo Grupo | modo-grupo | Cinco perguntas e placar final | No resultado |

Em cada fluxo foram conferidos game_view, game_start, game_finish, game_share e game_feedback_open no dataLayer destinado ao GA4. O quiz pode emitir views de contextos diferentes ao resolver o parametro de jornada; o teste impede duplicacao do mesmo contexto, nao exige uma unica view para toda navegacao.

O feedback usa o componente compartilhado FeedbackPrompt e o parametro source identifica o resultado. Compartilhamento usa ResultShare. Nomes de equipes, respostas textuais e e-mails nao foram encontrados como parametros nos eventos desses fluxos. Isso e um teste focado, nao certificacao integral de privacidade.

## Correcao feita

Arquivo src/lib/googleAnalytics.ts: o primeiro evento autorizado podia ocorrer antes do carregador montar e ser descartado por window.gtag ainda ausente. Um teste de regressao reproduziu a falha. Agora initializeGoogleAnalytics prepara a fila quando necessario, somente no dominio permitido e com consentimento concedido. O script continua sendo carregado pelo componente GoogleAnalytics; nao foi liberado tracking em localhost nem sem consentimento.

## Feedback publico

Destino padrao: https://forms.gle/HAabL26tsRjC17Ab6

Consulta publica em 19/10/2026: HTTP 200, titulo 'Conte para nos sobre sua experiencia', sem indicacao detectada de formulario encerrado. Nenhuma resposta foi preenchida ou enviada. A variavel publica NEXT_PUBLIC_FEEDBACK_FORM_URL pode substituir ou desativar esse destino no build; o ambiente da Vercel nao foi alterado ou inspecionado nesta rodada. Conferir o destino efetivo depois do deploy.

## Limites da verificacao de GA4

- Measurement ID no codigo: G-4YDMW2FM81.
- Host de producao simulado; todas as paginas vieram do build local na porta temporaria 3102.
- Google tag e destinos externos interceptados: nenhum evento real ou resposta de formulario enviado.
- A prova e de emissao dos eventos com parametros no navegador, nao de recebimento/processamento na propriedade GA4.
- Conferir no painel real os eventos e a disponibilidade dos parametros game, journey, topic, theme, mode e source nos relatorios desejados; esta rodada nao verificou nem criou definicoes personalizadas ou eventos principais.
- game_feedback_open mede abertura do link, nao envio da resposta ao Google Forms.
- game_finish mede conclusao natural. Encerrar antecipadamente no Modo Grupo nao emite game_finish; nao confundir abandonos com conclusoes. Um evento separado de saida manual pode ser avaliado depois, sem inflar finalizacoes.

## Evidencias

- npm run check: 54 testes, validacao de conteudo, lint, TypeScript e build aprovados apos a correcao; lint repetido para os scripts finais.
- scripts/test-game-analytics-browser.mjs: sete fluxos completos e verificacoes de feedback/compartilhamento.
- scripts/test-analytics-browser.mjs e scripts/test-privacy-browser.mjs: protecoes de consentimento e isolamento com terceiros simulados.
- .test-artifacts/audit/games-analytics-feedback-2026-10-19.json e logs de consentimento/privacidade de 19/10.

## Pendencias para decidir a publicacao

1. Revisao final do responsavel em localhost e autorizacao de deploy. Pedido atual e preparar, nao publicar automaticamente.
2. Sobre: decidido manter anonimato e identificacao institucional Biblia Clube. Nome pessoal nao e apresentado aqui como requisito universal do AdSense.
3. Search Console: falta confirmacao de propriedade verificada e acesso aos relatorios; configurar com autorizacao e verificar URLs/sitemap depois da publicacao.
4. AdSense: falta validacao real da mensagem CMP publicada e escolhas de consentimento nas regioes aplicaveis. Mock local nao valida CMP de publicidade.
5. Apos deploy autorizado: smoke tests, redirect 308, destino efetivo do feedback, arquivos publicos ads.txt/robots/sitemap e eventos reais no GA4. HTTP 200 do ads.txt nao comprova que o painel Google atualizou o status.
6. Uso e feedback presencial: adiado pelo responsavel; nao impede preparar a versao, mas nao deve ser marcado como realizado.

Nao foi identificada falta de instrumentacao basica ou do link de feedback em nenhum dos seis jogos. Nao ha garantia de aprovacao do AdSense e as verificacoes externas pendentes nao foram declaradas concluidas.

## Atualizacao apos inspecao das contas

- Propriedade GA4 confirmada: Biblia Clube, 550223470. Eventos recentes dos ultimos 28 dias incluem game_view, game_start, game_finish, game_share, game_feedback_open e game_journey_select. Recebimento agregado nao comprova cada jogo individualmente.
- Com autorizacao explicita, cadastradas e conferidas seis dimensoes de escopo Evento: Jogo (game), Jornada (journey), Tema do quiz (topic), Tema da atividade (theme), Modalidade (mode) e Origem da interacao (source). Nao foram criados eventos principais. Sem preenchimento retroativo do historico.
- Search Console: tag de verificacao preparada em src/app/layout.tsx para o prefixo https://www.bibliaclube.com.br/. Verificacao e envio do sitemap aguardam publicacao autorizada; propriedade ainda nao declarada verificada.
- AdSense: mensagem europeia aparece publicada; idioma padrao ingles e portugues entre os idiomas selecionados. Consentir, nao consentir e gerenciar opcoes presentes. Politica de privacidade configurada. Inspecao do editor nao comprova funcionamento da CMP no site; nenhuma configuracao AdSense foi alterada.
