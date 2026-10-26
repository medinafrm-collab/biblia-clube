# Revalidacao interna - 26/10/2026

## Escopo e resultado

Revisao sem alteracao do aplicativo, sem deploy e sem solicitar revisao AdSense. Codigo rastreado local sem modificacoes antes desta auditoria; main acompanha origin/main. Documentos de investigacao e diretorios marketing/tmp permanecem fora do commit.

Resultado: nao declarar tudo aprovado. Build e testes de codigo passam, mas ha alertas novos de dependencias e a repeticao dos testes de navegador nao concluiu.

## Evidencias atuais

- npm run check: validacao de conteudo, 54 testes de regressao, lint, TypeScript e build aprovados.
- scripts/audit-content.mjs: 403 referencias resolvidas, nenhum paragrafo com mais de 100 caracteres identico entre os artigos verificados. Isso nao equivale a revisao factual integral nem busca de plagio externo.
- Acervo validado: 290 perguntas, 24 pares de memoria, 6 temas de associacao, 20 frases, 24 personagens em 2 jornadas, 10 dinamicas, 11 artigos e 6 materiais.
- Verificacao publica repetida: 58 URLs do sitemap retornam 200, com um h1 e canonical esperado. Tag Search Console, robots, ads.txt e redirecionamento 308 da rota consolidada aprovados.
- Evidencia publica gerada pelo script legado tmp/check-production-2026-10-19.mjs: .test-artifacts/audit/production-release-2026-10-19.json, checkedAt 2026-10-26. O nome do arquivo nao e a data desta execucao.
- Tentativa de tmp/check-release-candidate-2026-10-12.mjs interrompida no inicio do Chrome: browserType.launch, Target page/context/browser closed. Nao classificar responsividade, interacao, impressoes ou E2E como revalidados nesta rodada. Evidencias de outubro anteriores sao historicas.
- Sem nova leitura de GA4/Search Console nesta rodada; estado de indexacao de 19/10 nao foi atualizado.

## P1 - Dependencias de producao

Arquivo: package.json e package-lock.json. Rotas: aplicacao inteira.

npm audit --omit=dev informa um pacote next com severidade critica agregada e tres avisos. Next local 16.3.8, dentro das faixas afetadas. Atualizacao indicada pelo npm: 16.4.3, fora do intervalo ~16.3.8. Nao executado audit fix --force.

- GHSA-2464-fhr4-w9xw: otimizacao de imagens em Linux glibc; o aviso indica sharp >=0.35.5 como mitigacao. npm ls confirma sharp 0.35.5 local. Nao demonstrada explorabilidade no projeto nem conferida a arvore efetiva do deployment.
- GHSA-p3m5-59mp-jv5r: DoS com pelo menos uma Server Action. Busca no src nao encontrou use server.
- GHSA-673q-mjm6-r5xr: RCE com Cache Components e funcao use cache retornando multiplos typed arrays. Busca no src nao encontrou use cache.

Prioridade alta para atualizar Next e eslint-config-next em conjunto, conferir lockfile, repetir testes e publicar apenas com autorizacao. Alertas nao comprovam invasao. Nao os relacionar automaticamente a rejeicao editorial.

## P1 - Lacuna de verificacao funcional atual

Recuperar a execucao de navegador e repetir fluxos dos seis jogos, resultado, feedback, compartilhamento, criador, filtros e responsividade. A falha de inicializacao e do ambiente de teste; nao foi reproduzido defeito funcional do site nesta tentativa.

## Conteudo e AdSense

Base: https://support.google.com/adsense/answer/10015918?hl=pt-BR

- Pontos fortes: os artigos Noite de jogos, Encontro de 60 minutos e No lar apresentam objetivo, exemplos, gabaritos, cronogramas e adaptacoes; nao dependem exclusivamente de clicar no jogo. Contextos tematicos do quiz incluem comparacoes especificas de passagens. Sobre e metodologia explicam responsabilidade institucional, limites, IA e contato sem inventar equipe.
- P2: /desafios-por-tema e os hubs /guias e /materiais concentram cards. Sao paginas de navegacao uteis, mas oferecem pouco valor isolado. Nao aplicar noindex automaticamente: avaliar utilidade e diferenciacao, sem acrescentar texto para volume.
- P2: Guias e Biblioteca ainda tem temas proximos de conducao de grupos. Compartilhar tema nao prova duplicidade; explicitar melhor o resultado e o uso distinto de cada recurso. Nenhuma exclusao, alteracao de slug ou redirect novo proposto como obrigatorio.
- P2: materiais anuncia baixar/PDF no hub, enquanto o fluxo real e imprimir/salvar pelo navegador. A pagina interna explica esse fluxo. Refinar promessa do hub; nao e um download inexistente comprovado.
- Validacao real dos roteiros e feedback de participantes continuam adiados pelo responsavel. Recomendar teste pequeno e registro de melhorias; nao alegar experiencia que nao ocorreu nem requisito numerico oficial de trafego.
- Nenhum paragrafo exato repetido encontrado pelo teste interno nao comprova originalidade externa. Nao foi executada comparacao integral com outros sites.

## CMP e limites

CMP permanece pendencia independente, conforme investigacao de 20/10 e capturas do responsavel. Nao foi retestada nesta rodada. Nao atribuir Conteudo de baixo valor a essa pendencia. Sem garantia ou nota percentual de aprovacao.

## Ordem recomendada

1. Atualizar dependencia com avisos e validar o novo build.
2. Restabelecer E2E/QA visual e repetir fluxos.
3. Refinar promessas dos hubs e revisar diferenciacao editorial, preservando rotas.
4. Conferir indexacao e dados reais atualizados; manter CMP em trilha tecnica separada.

Fontes de seguranca: https://github.com/advisories/GHSA-2464-fhr4-w9xw ; https://github.com/advisories/GHSA-p3m5-59mp-jv5r ; https://github.com/advisories/GHSA-673q-mjm6-r5xr
