# Fechamento local do plano: 12/10/2026

## Escopo e limites

O responsavel autorizou prosseguir com as pendencias, exceto aplicacao/feedback com pessoas reais, adiado por enquanto. Nao ha garantia de aprovacao no AdSense. Nao houve deploy, alteracao de DNS, dominio, Vercel, Analytics, Search Console ou AdSense nesta rodada. O servidor local foi atualizado para o build candidato.

## Matriz das quinze diferenciacoes do inventario

| Conteudo | Entrega local revisada |
| --- | --- |
| Guia de jovens | Oficina de observacao de Lucas 19, fatos e sequencia com apoio; sem risco/confissao |
| Guia de casais | Seis perguntas factuais com alternativas e referencias |
| Cartoes de casais | Dezoito perguntas recreativas em tres categorias |
| Planejar juntos | Modelo de cinco campos para evento ficticio; Rotina integrada como variacao curta |
| Verdade ou pressao | Jogo limpo: conferir placar, prazo e consulta; mesmo slug |
| Amizades | Comparar atitudes de livro, desenho e marcador, sem diagnostico de pessoas |
| Digital | Convite ficticio com quatro campos, ficha de apoio e revisao de informacao ausente |
| Maos que servem | Distribuir seis itens ficticios em tres categorias e testar instrucoes |
| Boas novas | Uma leitura em uma frase: distinguir observacao, nao informado e aplicacao; mesmo slug |
| Jogos digitais | Cinco formatos de jogos e duas adaptacoes explicitamente distinguidos |
| Encontro de jovens | Instrucao com tres campos testada por outro trio na minirodada do artigo |
| Plano familiar | Sete leituras independentes, apoio para respostas e exemplo completo do dia 1 |
| Home | Mesma estrutura visual; tres pilares e entregas especificas, sem promessa de transformacao |
| Sobre | Limites, autoria institucional e transparencia; nome pessoal ainda pendente |
| Metodologia | Registro concreto de revisoes com links, IA e limites de verificacao |

Os tres artigos prioritarios tambem foram revisados: noite de jogos, encontro de 60 minutos e No lar. O planejador nao pede mais compromisso para a semana. A folha de pontuacao inclui exemplo de soma, sem inventar bonus.

## Verificacao

- `npm run check`: content:check, 53 testes, lint sem erros/avisos, TypeScript e build aprovados.
- 58 paginas do sitemap candidato: HTTP 200, um h1 e canonical esperado; conteudo principal no HTML sem JavaScript.
- 58 destinos internos coletados sem HTTP de erro.
- 13 rotas revisadas em seis larguras: 320, 375, 768, 1024, 1280 e 1440; 78 verificacoes sem overflow.
- Corrigida largura minima em grades de materiais, artigos e dinamicas, alem do botao de impressao.
- Redirecionamento de Rotina: 308 para Planejar juntos; URL antiga fora do sitemap.
- Testes de conteudo editorial/planejador e isolamento de privacidade aprovados. Scripts externos simulados, nao publicidade real.
- Sem excecoes de pagina ou mensagens de hydration capturadas nas rotas desta rodada.
- Home: imagens prioritarias e lazy carregadas com naturalWidth positivo em desktop/mobile apos rolagem; capturas finais `release-home-loaded-1440.png`, `release-home-loaded-375.png` e `release-home-top-1440.png`. As capturas iniciais nao aguardavam todas as imagens abaixo da dobra.
- Producao consultada em modo leitura: ads.txt, robots.txt e sitemap.xml com HTTP 200. ads.txt possui `google.com, pub-8150008386108071, DIRECT, f08c47fec0942fa0`.
- Isso nao comprova processamento de ads.txt pelo Google, indexacao, aprovacao de conta, Core Web Vitals de usuarios reais ou consentimento publicitario em todas as regioes.

Evidencias: `.test-artifacts/audit/release-candidate-2026-10-12.json`, `audit-final-editorial.mjs.log`, `test-privacy-browser.mjs.log`, capturas `release-home-1440.png` e `release-home-375.png`, previsualizacao de impressao `release-family-plan.pdf`. Script: `tmp/check-release-candidate-2026-10-12.mjs`.

## Pendencias por prioridade

| Prioridade | Pendencia | Acao necessaria |
| --- | --- | --- |
| P1 | Identidade publica do responsavel | Confirmar nome e descricao verdadeira autorizados; nao inferir do computador ou conta |
| P1 | Revisao humana final e publicacao | Responsavel revisar localhost e autorizar deploy; depois repetir smoke tests publicos |
| P1 | Search Console ainda sem acesso verificado | Configurar propriedade com autorizacao explicita; preferir prefixo HTTPS e tag/arquivo se nao desejar DNS; obter token do assistente, nao inventar |
| P1 | Consentimento publicitario real | Conferir mensagem publicada, site, politica, idiomas, recusa e gerenciamento no AdSense; testar comportamento real em regiao aplicavel. Teste local de mocks nao certifica CMP |
| P2 | Google ainda pode exibir ads.txt nao encontrado | Apos publicacao, conferir status e solicitar nova busca somente pelo fluxo autorizado; arquivo publico 200 nao garante atualizacao imediata do painel |
| P2 | Aplicacao e feedback real | Adiado pelo usuario; nao apresentar exemplos como encontros realizados |

## Proximas acoes

1. Confirmar identidade e revisar [localhost](http://localhost:3100/).
2. Configurar Search Console e conferir CMP com o responsavel, sem mudar DNS ou contas silenciosamente.
3. Publicar somente com autorizacao, verificar producao e consultar indexacao/ads.txt no Google.
4. Decidir sobre nova solicitacao ao AdSense com base na versao publicada e verificacoes, sem nota artificial de probabilidade.

## Referencias oficiais

O Google destaca conteudo original e relevante e navegacao clara: [paginas prontas para AdSense](https://support.google.com/adsense/answer/7299563?hl=pt-BR). Nao existe garantia decorrente destas alteracoes.

Restricoes de anuncios em telas sem conteudo ou de navegacao: [politica de valor de inventario](https://support.google.com/publisherpolicies/answer/11112688?hl=pt-BR). A lista de rotas elegiveis para anuncios nao foi alterada nesta rodada.

Metodos e limites de propriedade: [verificacao do Search Console](https://support.google.com/webmasters/answer/9008080?hl=pt-BR). Configuracao permite consultar dados, nao garante indexacao ou aprovacao no AdSense.

Requisito de CMP certificada para veiculacao aplicavel no EEE, Reino Unido e Suica: [requisitos de consentimento](https://support.google.com/adsense/answer/13554116?hl=en). O banner de Analytics nao substitui a CMP publicitaria.
