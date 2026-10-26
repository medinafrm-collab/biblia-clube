# Testes de navegador - 26/10/2026

Segunda pendencia da revalidacao, executada no build local com Next 16.4.3. Sem deploy.

## Inicializacao recuperada

O canal chrome do Playwright iniciou Chrome 156.0.8078.47. A tentativa anterior pelo executavel falhou; causa interna dessa falha nao determinada. Os scripts passaram a aceitar CHROME_CHANNEL, mantendo CHROME_PATH como alternativa. Nenhuma protecao do navegador do usuario foi modificada.

Scripts ajustados: audit-final-editorial.mjs, audit-flows.mjs, test-analytics-browser.mjs, test-game-analytics-browser.mjs e test-privacy-browser.mjs. audit-flows agora aceita LOCAL_ORIGIN. Auxiliares tmp continuam locais.

## Resultados aprovados

- 58 paginas: HTTP, um h1, canonical e conteudo no HTML sem JavaScript.
- 58 destinos internos verificados; sitemap, robots, ads.txt e redirect 308 conferidos.
- 78 combinacoes de largura: 13 rotas em 320, 375, 768, 1024, 1280 e 1440 px, sem overflow detectado. Nao significa teste visual de todas as 58 paginas em todas as larguras.
- Home: imagens carregadas, capturas 375/1440 inspecionadas, menu movel, Escape e foco, ancora Jogos.
- Quiz: jornada completa, placar, limpeza de progresso, resposta errada, retomada apos recarregar e dialogo de referencia por teclado.
- Ligue os pares, Complete a frase, Memoria e Modo Grupo: rodada completa e resultado.
- Quem sou eu: jornadas conhecida e intermediaria completas, pistas e teclado.
- Nos sete fluxos de jogo: game_view, game_start, game_finish, game_share e game_feedback_open, destino HTTPS do feedback e nova aba.
- Biblioteca: busca, ausencia de resultado, limpeza de filtros, publico e abertura de artigo.
- Criador: 64 combinacoes, soma de tempos e variantes; compartilhamento por copia, sucesso, cancelamento, erro e APIs indisponiveis.
- Tabela de guia: foco e rolagem por teclado.
- Politica de Privacidade isolada, consentimento e restricao de host aprovados com servicos terceiros simulados.
- Rotas inexistentes e entradas invalidas na API de referencias conferidas.
- Sem excecoes capturadas nos testes que as monitoram. Lint e diff --check aprovados apos ajustar scripts.

## Evidencias e limites

- .test-artifacts/audit/release-candidate-2026-10-12.json: rerodado nesta data; 58 paginas, 78 larguras, 58 destinos, errors vazio.
- .test-artifacts/audit/games-analytics-feedback-2026-10-19.json: rerodado nesta data; sete fluxos aprovados, errors vazio, realGoogleRequests false.
- .test-artifacts/audit/extra-{home,library,meeting,quiz,invalid}-2026-10-26.log: cinco verificacoes adicionais aprovadas.
- Capturas home-final-375.png e home-final-1440.png atualizadas e inspecionadas.
- Os nomes legados de alguns arquivos nao indicam a data desta execucao. Servidores temporarios 3102/3103 encerrados pelos auxiliares.
- Nenhuma resposta de feedback enviada; Google tag e destinos externos interceptados nos testes de eventos. Emissao local nao comprova processamento na conta Google.
- PDFs gerados automaticamente nao representam revisao humana de cada pagina impressa. Nao realizada nova auditoria completa axe de todas as rotas nesta etapa.
- CMP de publicidade continua em investigacao separada; esses mocks nao comprovam sua entrega real.

Proxima pendencia: refinamento editorial dos hubs/promessas e diferenciacao de Guias/Biblioteca. Atualizacao de seguranca e ajustes dos testes seguem apenas locais.
