# Auditoria local do Bíblia Clube

Data: 5 de setembro de 2026. Candidato: código local em `C:\Users\FER\Documents\Codex\BIBLIACLUBE`.

## Parecer executivo

**Ainda não deve publicar**, considerando esta versão como candidata à nova tentativa de aprovação no AdSense.

O build funciona e os defeitos técnicos reproduzidos mais importantes foram corrigidos. Não identifiquei um P0 técnico ainda aberto nos testes realizados. A recomendação de aguardar decorre das pendências P1: revisão do consentimento e das condições de carregamento dos anúncios, promessa de personalização maior que a entrega do criador de roteiro, guias que repetem orientações sem fornecer a atividade prometida e comprovação da revisão editorial, especialmente de assuntos sensíveis.

Isso não significa que o site inteiro seja de baixo valor. Há jogos funcionais, explicações bíblicas visíveis sem interação, materiais utilizáveis e artigos úteis. Também não é possível deduzir, apenas do repositório, a causa exata das recusas anteriores do Google.

Na auditoria inicial não houve deploy nem alteração de domínio, DNS, Vercel, Analytics, Search Console ou configuração do AdSense. Na etapa posterior, explicitamente autorizada pelo responsável, a lógica LOCAL de consentimento do Analytics foi corrigida (P1-01). Contas, IDs, domínios e configurações externas continuam inalterados. Nenhuma página foi excluída, nenhum slug foi alterado e nenhum redirect foi criado. As alterações pré-existentes do usuário foram preservadas.

Relatório complementar: [Inventário das 61 URLs](./inventario-urls-2026-09-05.md).

## 1. Diagnóstico e escopo

O diagnóstico inicial foi apresentado antes das correções. A auditoria considerou o código local, não a versão anteriormente publicada.

| Item | Identificação |
| --- | --- |
| Framework | Next.js 16.3.1, App Router e Turbopack |
| Interface | React/React DOM 19.2.4, TypeScript 5.9.3 instalado |
| Estilos | Tailwind CSS 4.3.3, CSS global, fontes de sistema |
| Dados | Arquivos TypeScript/JSON locais; sem banco, autenticação ou CMS |
| Renderização | Home e conteúdo pré-renderizados; jogos e filtros hidratados no cliente |
| API | `/api/bible-passage`, consulta de texto bíblico local |
| Conteúdo | 11 artigos públicos, 6 guias, 6 materiais e 11 dinâmicas públicas; 3 rascunhos sensíveis pausados |
| Jogos | 290 questões em 8 temas e 3 jornadas; 24 pares de memória em 2 modos; 6 temas de associação; 20 frases; modo em equipes |
| Criador | Combinação determinística de público, duração, objetivo e atividades existentes; não chama uma API de IA |
| URLs | 61 URLs de conteúdo no sitemap; build gera também rotas/artefatos internos |
| Integrações | Google Analytics, AdSense, Vercel Analytics, Speed Insights, link externo opcional para feedback |
| Ambiente | Uso de `NEXT_PUBLIC_FEEDBACK_FORM_URL`; nenhum arquivo `.env` encontrado na inspeção |
| SEO | Metadata, canonical, OG, Twitter, robots, sitemap e JSON-LD próprios do App Router |

Estrutura relevante:

- `src/app`: páginas, layouts, metadata, robots, sitemap, API e `ads.txt`.
- `src/components`: Header, Footer, Quiz, QuizTopicPage, ScriptureReader, MemoryGame, MatchingGame, CompletePhraseGame, GroupMode, LibraryExplorer e MeetingBuilder; componentes editoriais e da Home.
- `src/data`: questões, temas, pares, frases, dinâmicas, artigos, catálogo da Biblioteca e materiais.
- `src/lib`: leitura de referências bíblicas, progresso do quiz e consentimento/eventos de Analytics.
- `public/images`: fotografias e imagens geradas/editadas utilizadas nas páginas.
- `scripts`: validação de conteúdo e testes; `docs`: planejamento e esta auditoria.

Scripts: `dev`, `start`, `build`, `content:check`, `lint`, `typecheck`, novo `test` e `check`. O comando `check` agora inclui conteúdo, regressões, lint, TypeScript e build.

## 2. Achados priorizados

### P0 — Bloqueante

**P0-01 — Referência bíblica podia prender o processo em um laço. CORRIGIDO.**

- Arquivos: `src/lib/bibleReference.ts:247`, `src/app/api/bible-passage/route.ts`, `scripts/test-regressions.mjs`.
- Rota: `/api/bible-passage`.
- Evidência: um capítulo expresso como inteiro fora da faixa segura fazia o incremento deixar de avançar; o teste em processo isolado excedeu o limite de execução antes da correção.
- Impacto/risco: indisponibilidade e consumo de CPU por entrada sem autenticação; alta gravidade se publicado assim.
- Correção: validação de inteiros seguros, limites reais de capítulos, ordem dos intervalos e teto global de 80 versículos, inclusive nas prévias de livros completos.
- Pendente: avaliar limitação de requisições na infraestrutura antes de crescimento de tráfego; não configurada nesta auditoria.
- Recomendação: manter o teste de timeout como bloqueio obrigatório de release. Nenhum P0 permanece aberto nos casos reproduzidos.

### P1 — Alta prioridade

**P1-01 — Proteção de consentimento incompleta fora do botão do rodapé. CORRIGIDO NO CÓDIGO LOCAL APÓS AUTORIZAÇÃO.**

- Arquivos: `src/lib/googleAnalytics.ts:52`, `src/components/GoogleAnalytics.tsx:51`.
- Rotas: todas as que carregam o componente.
- Refinamento do diagnóstico: o botão `AnalyticsPreferencesButton.tsx` JÁ chamava `disableGoogleAnalytics()` antes de reabrir. Portanto, o relato anterior era amplo demais ao atribuir a falha ao clique normal nesse botão. As lacunas estavam no helper isolado, estado `null` vindo de outra aba, `storage.clear()` e falha ao remover/salvar consentimento.
- Impacto/risco: divergência entre a escolha e o estado da tag nesses caminhos, especialmente se uma aba conserva uma inicialização anterior.
- Correção feita: revogação síncrona centralizada; todo estado diferente de `granted` desabilita; inicialização confere consentimento atual e hostname; eventos entre abas cobrem remoção e limpeza; fallback em memória mantém a escolha atual se o armazenamento falhar. O botão passou a delegar à função central.
- Verificação: quatro novos grupos unitários, totalizando nove no projeto, e quatro cenários de navegador, incluindo reload, duas abas e Storage bloqueado. No ensaio, o hostname permitido foi simulado com todas as páginas servidas de localhost e a tag Google substituída por um mock; nenhuma chamada real à conta.
- Limite: fallback em memória vale para a página atual e não promete persistência quando o navegador impede gravação. Isso não configura CMP do AdSense, não apaga dados históricos já coletados e não substitui validação autorizada posterior com a tag real. P1-02 continua pendente.

**P1-02 — Script de anúncios global e conformidade de consentimento. PARCIALMENTE CORRIGIDO APÓS AUTORIZAÇÃO.**

- Arquivos: `src/app/layout.tsx`, `src/components/SiteIntegrations.tsx`, `src/app/politica-de-privacidade/page.tsx`, `src/app/ads.txt/route.ts`.
- Rotas: todas, inclusive telas de jogo, páginas inexistentes e ambiente local; a política de privacidade foi posteriormente excluída das integrações.
- Impacto/risco: carregamento global sem exclusão explícita por contexto; possível conflito futuro de anúncios automáticos com áreas de resposta/clique. Script presente não comprova que anúncios estejam sendo exibidos.
- Correção posterior autorizada: a política não inclui AdSense/CMP, Google Analytics nem métricas Vercel. Links para ela abrem novo documento, com proteção adicional para mudanças de pathname no cliente. Sete cenários de isolamento passaram, com scripts de terceiros mockados; nenhuma conta externa foi alterada pelo agente. O script de verificação segue no HTML inicial da Home.
- Evidência posterior: capturas da conta mostram mensagem europeia publicada e três escolhas ativadas. O responsável corrigiu a URL da política, antes apontada à Home. Isso confirma configuração visível, não funcionamento real em todas as regiões. O banner próprio de Analytics não é, por si só, essa CMP.
- Pendente: validação de execução real, geografias e correspondência completa entre política/configuração; exclusões de anúncios em outras telas continuam para etapa própria.
- Recomendação: após autorização, condicionar anúncios ao ambiente correto, ao consentimento aplicável e a páginas elegíveis; excluir erro, impressão, controles e rodada ativa. Não modificar `ads.txt` sem conferir a conta real.

**P1-03 — Criador de roteiro não adaptava a execução à duração prometida. CORRIGIDO LOCALMENTE EM 06/09/2026.**

- Arquivo: `src/components/MeetingBuilder.tsx:43` e `:93`.
- Rota: `/monte-seu-encontro`.
- Evidência: cada combinação gera seis etapas com instruções específicas, e a soma respeita 30/45/60/90 minutos. A versão de 30 minutos reduz expressamente a dinâmica ao seu núcleo; versões maiores incorporam mais passos, perguntas e leitura.
- Impacto/risco tratado: o resultado agora pode ser conduzido sem depender de inferir como comprimir uma dinâmica de 20–65 minutos.
- Correção feita: materiais, referências, cuidado do líder e instruções adaptadas passaram ao resultado; impressão e compartilhamento incluem o roteiro completo. Público geral continua sem receber atividades exclusivas de casais.
- Verificação: 64 combinações em teste unitário e Chromium, variantes, soma de tempo, público e exportação; TypeScript e lint aprovados.
- Risco residual: a utilidade prática ainda deve ser confirmada em aplicação real. Resultados permanecem locais na mesma URL, sem novas páginas indexáveis.

**P1-04 — Parte dos guias promete mais conteúdo prático do que entrega. PENDENTE EDITORIAL.**

Atualização de 06/09/2026: `/guias/quiz-biblico-para-casais` foi corrigido localmente com seis perguntas completas, alternativas, respostas, explicações, referências, perguntas não invasivas e roteiro de 15 minutos. `/guias/ideias-para-estudo-biblico-em-grupo` passou a entregar um estudo completo de Marcos 10:46-52, com contexto, observação, interpretação, aplicação, oração e cronograma de 40 minutos. `/guias/dinamicas-biblicas-para-jovens` agora oferece oficina de 35 minutos com materiais, seis situações fictícias, perguntas, tempos e adaptações para perfis distintos de grupo. `/guias/como-usar-quiz-biblico-em-celulas` passou a entregar sessão de 20 minutos com cinco perguntas da base principal, respostas, referências, transições e fechamento. `/guias/jogos-biblicos-para-grupos` agora compara configurações reais para 12 e 30 participantes e inclui rodada fixa com placar e resultado. `/guias/como-conduzir-uma-celula-participativa` foi diferenciado do roteiro cronológico por quatro papéis, sete intervenções concretas, simulação de facilitação e encaminhamentos oficiais para situações de risco. Os seis guias prioritários foram aprofundados localmente; o item permanece aberto apenas para revisão humana das referências e orientações antes da publicação.

- Arquivos: seis páginas em `src/app/guias/*/page.tsx`.
- Rotas prioritárias: `/guias/quiz-biblico-para-casais`, `/guias/dinamicas-biblicas-para-jovens` e `/guias/ideias-para-estudo-biblico-em-grupo`; demais guias no inventário.
- Evidência: orientações corretas de acolhimento e condução se repetem entre blocos. O guia de quiz para casais não entrega um pequeno quiz específico; os de dinâmicas/estudo não apresentam uma atividade/passagem completamente trabalhada. Mais palavras não resolvem essa lacuna.
- Impacto/risco: páginas temáticas percebidas como variações do mesmo molde, com baixa satisfação da intenção de busca.
- Correção feita: os seis guias prioritários agora entregam atividades, perguntas, decisões de condução ou exemplos completos próprios, sem criação de novas rotas nem reescrita em massa do restante do site.
- Pendente/recomendação: realizar revisão humana das referências e orientações, com atenção especial aos trechos de cuidado e situações sensíveis. Avaliar sobreposição com artigos antes de propor consolidação/redirect; nenhuma rota foi removida ou desindexada automaticamente.

**P1-05 — Exemplos incompletos e assuntos que exigem revisão qualificada. RESOLVIDO PARA A VERSÃO CANDIDATA.**

Atualização de 06/09/2026: o exemplo abstrato de `/biblioteca/como-transformar-respostas-erradas-em-aprendizado` foi substituído por uma questão completa sobre Pedro e André. Por decisão do responsável, os rascunhos `/biblioteca/como-conduzir-conversas-sensiveis`, `/biblioteca/encontro-de-casais-sobre-financas` e `/dinamicas-para-celulas/quando-a-mente-acelera` foram retirados da versão candidata. Eles não são gerados como rotas, não aparecem no catálogo nem no sitemap e só devem retornar após decisão editorial e revisão humana adequada.

- Arquivos: `src/data/editorialContent.ts:777`, `src/data/cellDynamics.ts`.
- Rotas: `/biblioteca/como-transformar-respostas-erradas-em-aprendizado`, `/biblioteca/como-conduzir-conversas-sensiveis`, `/biblioteca/encontro-de-casais-sobre-financas`, `/dinamicas-para-celulas/quando-a-mente-acelera`.
- Evidência: o antigo exemplo “Pedro faz X” foi corrigido localmente. O artigo sobre conversas sensíveis recebeu critérios, exemplos e fontes oficiais, mas a revisão por IA não demonstra validação clínica, jurídica ou de proteção. Os conteúdos sobre ansiedade e finanças ainda precisam de conferência proporcional ao risco.
- Impacto/risco: o exemplo incompleto foi corrigido; os conteúdos que exigem apoio especializado não ficam expostos na versão candidata.
- Correção feita: o artigo pedagógico agora entrega um caso real com passagem, explicação e adaptação por público. O artigo sobre conversas sensíveis ganhou triagem não diagnóstica, três casos aplicados, canais públicos e fontes oficiais.
- Pendente/recomendação: nenhuma para a publicação atual. Antes de reativar qualquer um dos três rascunhos, obter revisão humana compatível com o tema e repetir a auditoria editorial.

**P1-06 — Processo editorial descrito, mas execução e responsabilidade pouco verificáveis. PENDENTE DO RESPONSÁVEL.**

- Arquivos: `src/app/como-produzimos-conteudos/page.tsx`, `src/app/sobre/page.tsx`, `src/data/editorialContent.ts`, dados dos jogos.
- Rotas: institucionais e conteúdos editoriais.
- Evidência: já existe “Como produzimos nossos conteúdos”, com pesquisa, ambiguidades, referências, IA, neutralidade e correções. Autoria institucional não é um erro, mas não há evidência no repositório de quem revisou cada conteúdo, quando o aplicou ou quais verificações humanas ocorreram.
- Impacto/risco: confiança limitada, sobretudo após recusas repetidas. Não afirmar revisão humana integral, experiência real ou credenciais sem que tenham ocorrido.
- Correção feita: transparência de `/sobre` atualizada para reconhecer imagens de banco e imagens geradas/editadas, sem apresentá-las como documentação de encontros reais.
- Pendente/recomendação: responsável editorial identificável, registro real de revisões, critérios de aprovação e canal de correções acompanhado. Não é necessário inventar equipe nem publicar dados pessoais excessivos.

**P1-07 — Progresso do quiz e navegação podiam produzir estados inválidos. CORRIGIDO.**

- Arquivos: `src/lib/quizProgress.ts`, `src/components/Quiz.tsx`.
- Rotas: oito quizzes.
- Impacto/risco: falha com armazenamento bloqueado, progresso inválido, jornada da URL ignorada sem progresso salvo e retomada em assunto incoerente.
- Correção: leitura protegida, validação de caminho/tema/jornada/índice/pontuação/data e histórico; URL de jornada processada antes do retorno por ausência de progresso; retomada com navegação real; bloqueio de avanço sem resposta.
- Verificação: testes de regressão e rodadas completas, pontuação, erro, recarga e retomada passaram.
- Pendente: testes adicionais de combinação de abas e alterações futuras da base de perguntas; não há necessidade de grande refatoração para publicar.

### P2 — Média prioridade

| ID | Problema, arquivo e rota | Impacto/risco | Correção feita | Pendente/recomendação |
| --- | --- | --- | --- | --- |
| P2-01 | Contraste insuficiente em textos oliva/cinza/dourados; `globals.css` e componentes editoriais; várias rotas | Leitura e WCAG | Cores de texto ajustadas, dourado decorativo preservado; axe sem violações nos estados auditados | Conferência humana com leitores de tela e condições reais de visão |
| P2-02 | Foco de quiz, diálogo bíblico e menu; `Quiz.tsx`, `ScriptureReader.tsx`, `Header.tsx`, `Logo.tsx` | Teclado, perda de contexto e nome acessível divergente | Foco na pergunta/resultado, Tab no diálogo, Escape/retorno de foco, estados corretos; logo usa nome nativo e alternativas deixam de sobrescrever texto/feedback com aria-label | Testar NVDA/VoiceOver; não foram executados |
| P2-03 | Overflow em 320px; `QuizTopicPage.tsx`, `InstitutionalPage.tsx`, `/contato` | Texto/cartões fora da tela | Tamanho/quebra e flex/grid corrigidos | 131 verificações de viewport sem overflow; testar aparelhos físicos |
| P2-04 | Seis titles com marca duplicada, OG herdado e Twitter genérico; páginas de guias, institucionais, materiais e `layout.tsx` | Snippets/compartilhamento incorretos | Titles normalizados, OG por rota e fallback Twitter para metadata da página | Imagens sociais individuais são refinamento, não requisito de indexação |
| P2-05 | Dois H1 nos materiais e API indexável; materiais e `next.config.ts` | Semântica/SEO | Um H1 na tela, hierarquia da folha corrigida, `X-Robots-Tag: noindex` na API | Verificar cabeçalhos no ambiente publicado posteriormente |
| P2-06 | Filtro “Grupos” não incluía toda a célula; `LibraryExplorer.tsx` | Conteúdo relevante desaparecia | Normalização de sinônimos de público; busca/reset/estado vazio testados | Manter categorias explícitas se o catálogo crescer |
| P2-07 | Cache e requisições do leitor bíblico; `ScriptureReader.tsx` | Acúmulo de memória e resposta obsoleta após fechamento | AbortController, descarte de resposta cancelada e cache limitado a 100 referências | Acompanhar tráfego da API após publicação |
| P2-08 | Dependência transitiva de desenvolvimento vulnerável; `package-lock.json` | Disponibilidade/prototype pollution no processamento de estatísticas pelo Browserslist | Atualização pontual para Browserslist 4.28.9 e dependências compatíveis | `npm audit` final: zero vulnerabilidades reportadas; não é prova de ausência de toda vulnerabilidade |
| P2-09 | Jogos não quiz têm pouco exemplo de conteúdo fora da interação; páginas de memória, pares, frases e grupo | Valor editorial menos evidente ao avaliador | Nenhuma expansão artificial | Acrescentar poucos exemplos completos com contexto; não publicar todas as respostas nem um texto repetido em cada jogo |
| P2-10 | Impressão e contagem de páginas dos materiais; `materiais/[slug]/page.tsx`, `printableResources.ts` | Papel extra e promessa inexata | Compactação somente em impressão para evitar rodapé isolado; título “editável” corrigido para “para preencher”; contagens ajustadas ao A4 testado | Conferir paginação em navegadores/impressoras diferentes, pois escala e margens podem alterá-la |
| P2-11 | LCP mobile da Home e quiz acima de 2,5s no ensaio; Home, imagens e Quiz | Primeira percepção de velocidade | `sizes` de imagens da Home ajustado ao layout real | Investigar principal elemento LCP e entrega real; medir com terceiros e hospedagem reais antes de afirmar Core Web Vitals aprovados |
| P2-12 | Scripts Vercel retornam 404 no `next start` local; `layout.tsx` | Ruído de console local | Nenhuma mudança na integração, por restrição do usuário | Autorizar guarda por ambiente; validar disponibilidade no host final. Não confundir esses 404 com rotas editoriais quebradas |
| P2-13 | CSP ausente; `next.config.ts` | Menor defesa em profundidade contra XSS | Cabeçalhos já existentes preservados | Planejar CSP em modo de relatório e testar Next/JSON-LD/terceiros antes de impor; HSTS só após verificação HTTPS de produção |
| P2-14 | Datas e tempo de leitura pouco fundamentados; `editorialContent.ts`, `biblioteca/[slug]/page.tsx` | Confiança e metadata futura | Não foram inventadas novas datas de revisão | Tempos de 7–10 min para corpos de 331–459 palavras precisam distinguir leitura de aplicação; ligar dateModified à revisão real, não a uma constante |
| P2-15 | Licenças/proveniência visual parcialmente documentadas; `public/images`, dados editoriais e `THIRD_PARTY_NOTICES.md` | Rastreabilidade e credibilidade | Transparência geral melhorada em Sobre | Criar inventário por arquivo com fonte/licença ou geração/edição; não atribuir eventos reais às cenas ilustrativas |

### P3 — Baixa prioridade

- **P3-01 — Home extensa no celular.** `src/app/page.tsx` e seções da Home, rota `/`. Os três pilares estão claros, mas sete jogos, entradas, benefícios, artigos, públicos e encerramento repetem caminhos. Propor quatro jogos em destaque e acesso ao catálogo; não alterar o desenho aprovado sem autorização. Risco baixo, principalmente cansaço de navegação.
- **P3-02 — Componentes grandes e repetição de interface.** `Quiz.tsx`, `GroupMode.tsx`; componentes antigos `HowItWorks` e `GuidesPreviewSection` sem uso identificado. Lint/build não indicaram imports quebrados. Extrair somente lógica compartilhada com testes; não remover componentes arbitrariamente.
- **P3-03 — Temporizadores auxiliares.** `Quiz.tsx`, trocas de jornada ainda usam agendamentos curtos para rolagem. Recomenda-se consolidar cancelamento em futura manutenção; não foi reproduzido vazamento persistente. Diálogo e principais subscriptions possuem limpeza.
- **P3-04 — Breadcrumbs estruturados.** Há navegação estrutural visual; `BreadcrumbList` poderia acompanhar páginas de artigo/dinâmica/material. Não é condição de aprovação nem substitui conteúdo.
- **P3-05 — Originais e variantes antigas.** Há PNG de cerca de 2,23 MB e variantes não usadas no carregamento observado. Não excluir sem checar referências. O arquivo grande no repositório, sozinho, não representa download para o visitante.

## 3. Quizzes: conteúdo antes e depois da interação

As oito páginas NÃO dependem exclusivamente do jogo para expor valor. A inspeção com JavaScript desligado encontrou introduções por tema, contexto, três exemplos com resposta/explicação/referência, perguntas frequentes e links relacionados. Os títulos, descrições e canonical existem. O conteúdo principal é pré-renderizado.

| Rota | Perguntas por jornada | Observação editorial prioritária |
| --- | --- | --- |
| `/quiz-biblico` | 14 / 12 / 12 | Explicar como usar a revisão de erros; evitar repetir o catálogo inteiro |
| `/quiz-biblico/antigo-testamento` | 11 / 12 / 12 | Conectar acontecimentos e contexto dos livros, não apenas nomes/datas |
| `/quiz-biblico/jesus-e-evangelhos` | 13 / 12 / 12 | Explicitar qual Evangelho sustenta detalhes que variam entre relatos |
| `/quiz-biblico/personagens-biblicos` | 12 / 12 / 12 | Separar personagens homônimos e interpretar ações no contexto |
| `/quiz-biblico/mulheres-da-biblia` | 12 / 12 / 12 | Manter protagonismo e contexto das narrativas, sem generalizações |
| `/quiz-biblico/parabolas-de-jesus` | 12 / 12 / 12 | Distinguir texto e interpretação, sem transformar uma leitura em resposta única indevida |
| `/quiz-biblico/lugares-da-biblia` | 12 / 12 / 12 | Acrescentar exemplo de relação lugar/acontecimento; mapa só com fonte confiável |
| `/quiz-biblico/igreja-primitiva` | 12 / 12 / 12 | Contextualizar cronologia de Atos e evitar generalização histórica |

As explicações de todas as perguntas não aparecem integralmente antes da rodada, o que é natural para o jogo. Há amostra indexável suficiente para demonstrar o mecanismo; não é necessário expor o gabarito inteiro. A quantidade é derivada dos dados. Duração/nível são estimativas genéricas e devem ser validados com uso real. O FAQ ainda é muito semelhante entre temas; perguntas específicas seriam mais úteis que aumentar o tamanho dos textos.

Foram verificadas estrutura, alternativas, IDs e resolução de 398 referências usadas pelo conjunto auditado. Isso NÃO equivale a uma revisão exegética das 290 questões nem prova que toda referência sustenta exatamente a afirmação. Revisão humana das ambiguidades permanece necessária.

## 4. Biblioteca, IA e originalidade

Os 13 rascunhos originais foram lidos e classificados individualmente no inventário; 11 permanecem públicos na versão candidata e dois foram pausados. A contagem do corpo é apenas uma medida descritiva. Alguns textos curtos resolvem bem uma necessidade; extensão, por si só, não comprova valor.

Não foram encontrados parágrafos longos exatamente repetidos no conjunto de artigos pelo detector utilizado. Há padronização perceptível: abertura curta, cinco blocos de recomendações, checklist/fechamento e links. Isso é sinal para revisão editorial, não prova de origem em IA ou plágio. Não foi feita busca externa de similaridade de todas as frases nem verificação documental de autoria.

Prioridade recomendada:

1. Trabalhar completamente o exemplo de resposta errada e uma dinâmica adaptada em três faixas etárias.
2. Tornar o roteiro “completo em 60 minutos” autossuficiente, com passagem escolhida e perguntas prontas.
3. Entregar um quiz específico no guia de casais e um estudo pronto no guia de estudos em grupo.
4. Revisar conteúdos sensíveis com pessoa adequada; registrar a revisão efetivamente realizada.
5. Documentar aplicações reais, dificuldades e ajustes somente quando esses testes acontecerem, com privacidade e consentimento.

Não foi feita expansão editorial em massa, não foram inventados depoimentos, testes de campo, credenciais ou revisores e nenhum conteúdo foi removido.

## 5. Navegação, SEO e indexação

A navegação principal já se aproxima da arquitetura solicitada: Início, Jogos, Biblioteca, Criar roteiro e Sobre. Jogos pode levar à seção da Home; não é necessário inventar `/jogos` somente para mudar o menu. Guias e Materiais podem continuar como coleções dentro da Biblioteca e acessos secundários. A principal redundância é editorial entre guias e artigos, não um defeito que exija trocar todas as rotas.

- 61 páginas do sitemap responderam 200; links internos e âncoras examinados sem destinos quebrados.
- Nenhuma das 61 URLs ficou órfã no grafo de links encontrado entre essas páginas.
- Todas apresentaram title, description, canonical e um H1 após correções; OG aponta para a rota correta.
- Canonicals continuam apontando ao domínio público previsto. Isso é correto para o candidato local e não significa que o código foi publicado.
- URLs de filtros/busca não são geradas como páginas indexáveis; o estado fica no cliente. Parâmetros de jornada/retomada usam canonical da página base. Não foram criadas páginas de resultado no sitemap.
- A página 404 retorna erro real e noindex; a API recebeu `X-Robots-Tag: noindex`.
- Nenhuma página útil recebeu noindex preventivo indiscriminado. Qualquer consolidação futura requer análise de tráfego, intenção e redirects com autorização.
- Sitemap sem datas inventadas é melhor que indicar revisão diária fictícia. Os artigos devem alimentar suas datas estruturadas a partir de revisão real.

Não foram examinados dados privados do Search Console, cobertura efetiva do índice, penalidades manuais, canônicos escolhidos pelo Google, DNS nem respostas da futura infraestrutura de produção.

## 6. Segurança e privacidade

Não foram encontrados segredos de alta confiança nos arquivos da aplicação/publicação inspecionados pelos padrões de busca utilizados. IDs públicos de GA e publisher do AdSense não são credenciais secretas. Não há banco, login ou endpoints de gravação. Essa inspeção não substitui um scanner completo de histórico Git nem um pentest externo.

Os usos de `dangerouslySetInnerHTML` encontrados na aplicação servem ao JSON-LD construído internamente, com `<` escapado. Não foi encontrada injeção direta de input do visitante em HTML executável, SQL ou comando. A resposta bíblica é JSON e o texto é renderizado por React. Os caminhos de progresso passaram a ser validados por lista de temas; nenhuma URL externa de retomada é aceita.

Os dados locais de progresso não devem ser tratados como confiáveis nem sensíveis. Os testes cobrem armazenamento indisponível e conteúdo corrompido. Nome de equipe possui limite; feedback externo é configuração de build, não input público. Recomenda-se validar esquema HTTPS/host antes de configurar esse link.

Cabeçalhos presentes: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`; `poweredByHeader` desativado. CSP/HSTS e rate limiting dependem de validação de ambiente. Não foi aplicado bloqueio CSP às cegas nem foram modificados segredos.

O Browserslist transitivo foi atualizado após dois avisos no mesmo pacote, incluindo GHSA-c83g-rgw3-j3cx e GHSA-73wf-gq98-2v4g. O `npm audit` final retornou zero vulnerabilidades nas dependências resolvidas em 05/09/2026; ausência de avisos conhecidos não elimina vulnerabilidades desconhecidas.

## 7. Performance, imagens e responsividade

Ensaio Lighthouse em build de produção local, Chrome headless, uma amostra por cenário; throttling simulado. Hosts externos de anúncios/medição bloqueados no ensaio final. Os scripts Vercel de mesmo host retornaram 404 no servidor local e explicam a nota 96 de boas práticas.

| Página / dispositivo | Performance | Acessibilidade | SEO | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Home / mobile | 95 | 100 | 100 | 2,95 s | 0 | 64 ms |
| Quiz / mobile | 95 | 100 | 100 | 2,81 s | 0 | 119 ms |
| Criador / mobile | 98 | 100 | 100 | 2,23 s | 0 | 92 ms |
| Home / desktop | 100 | 100 | 100 | 0,71 s | 0 | 15 ms |

Essas notas NÃO são medições de usuários reais. INP não foi medido; TBT não é INP. Não há base para afirmar aprovação de Core Web Vitals em produção. Acessibilidade 100 no Lighthouse também não significa conformidade integral; sua regra experimental encontrou o rótulo do logotipo, corrigido no fechamento da auditoria.

As imagens observadas usam Next Image e dimensões/proporções estáveis. `sizes` dos cartões da Home foi corrigido para evitar seleção exagerada de resolução. Não há fonte remota bloqueando renderização. Imagens abaixo da dobra carregam sob demanda; a captura extensa percorreu a página e aguardou decodificação.

O maior chunk observado tinha aproximadamente 229 KB sem compressão / 72 KB gzip; o CSS, 55 KB / 10 KB gzip. Esses são arquivos individuais, não o custo total de toda rota. A base dos jogos e os componentes de quiz/equipes merecem acompanhamento, mas os ensaios não justificaram uma refatoração de bundles às cegas.

Responsividade: todas as 61 páginas em 320px e 14 rotas representativas em 375, 768, 1024, 1280 e 1440px, totalizando 131 verificações. Após as correções não houve overflow horizontal nem imagens quebradas nos estados medidos. Foram feitas capturas dos seis tamanhos de Home e de páginas interativas representativas. Não se testou cada estado possível de cada jogo em cada largura, nem dispositivos físicos/Safari.

## 8. Anúncios: desenho recomendado, não implementado

Áreas candidatas: entre blocos editoriais com conteúdo suficiente; ao final de artigo, depois do conteúdo e separado dos links; depois do resultado completo do quiz, sem deslocar controles; lateral desktop somente se houver largura e separação reais.

Não inserir anúncios entre pergunta e alternativas, perto de “Próxima pergunta”, misturados a botões/cartões de jogo, em estados vazios, impressão, erro ou telas apenas de navegação. Evitar anúncio fixo que encubra o consentimento. Reservar espaço somente depois de definir o formato para reduzir CLS. Não há autorização nesta auditoria para criar posições ou alterar anúncios automáticos.

## 9. Testes e evidências

### Executados

- `npm run check`: validação de conteúdo, 5 grupos de testes de regressão, lint, TypeScript e build de produção aprovados.
- `npm audit`: zero vulnerabilidades reportadas após atualização pontual.
- 61 URLs com JS desligado: HTML inicial, headings, metadata, imagens e grafo de links.
- 131 verificações de responsividade; zero overflow, links internos quebrados ou imagens falhas nos casos medidos.
- Dez fluxos E2E aprovados: menu/âncoras/Escape; quiz completo; erro/recarga/retomada/diálogo; Biblioteca busca/filtros; criador de roteiro; pares; frases; memória; grupo; 404/API.
- Criador: 64 combinações de público/duração/objetivo, total de minutos e variações de público.
- Axe nas 61 páginas em 375px: sem violações nas regras WCAG 2 A/AA e 2.1 A/AA executadas, após ajustes de contraste. Não cobre todos os estados nem todas as regras experimentais.
- PDFs A4 dos seis materiais e inspeção de paginação; captura de impressão do roteiro.
- Paginação final em Chromium/A4: cartões de perguntas 2; pontuação 1; checklist 2; roteiro 2; cartões para casais 2; plano familiar 1. O rodapé da pontuação deixou de gerar página extra.
- Quatro ensaios Lighthouse, descritos acima.

Não houve `pageerror` de JavaScript nos fluxos finais; existem erros de rede/console dos scripts Vercel no servidor local, registrados separadamente. Não há evidência de hydration mismatch nos cenários testados. Não é correto resumir isso como “nenhum erro de console de qualquer tipo”.

### Arquivos para reprodução

- `scripts/test-regressions.mjs`, `scripts/audit-loader.mjs`, `scripts/audit-content.mjs`, `scripts/audit-browser.mjs`, `scripts/audit-flows.mjs`, `scripts/audit-performance.mjs`.
- `.test-artifacts/audit/content.json`, `browser-baseline.json`, `browser-final.json`, `flows.json`.
- `.test-artifacts/audit/home-320.png` e equivalentes de 375/768/1024/1280/1440px.
- `.test-artifacts/audit/lighthouse-*.json` e `print-*.pdf`.

Os artefatos e ferramentas auxiliares estão em diretórios ignorados pelo Git; não pertencem ao site público. Playwright usa `PLAYWRIGHT_MODULE` e `CHROME_PATH`; `AUDIT_ORIGIN` aceita apenas localhost/127.0.0.1. Axe e Lighthouse foram instalados isoladamente em `.tools/audit`, sem adicioná-los às dependências de produção. Os scripts auxiliares de auditoria requerem essas ferramentas; o novo `npm test` usa as dependências normais do projeto.

### Limites explícitos

Não foram testados Safari/iOS/Firefox, leitores de tela reais, entrega de e-mail/feedback, CMP da conta, anúncios reais, métricas de produção, Search Console, carga concorrente/pentest, nem revisão teológica humana de todas as perguntas. Não foram executados envios externos de formulários. Build e testes locais não substituem um smoke test autorizado na futura hospedagem.

## 10. Prontidão para AdSense

Notas de julgamento técnico/editorial, não um algoritmo do Google, probabilidade ou garantia de aprovação. Para os nove primeiros itens, maior é melhor. Na última linha, maior significa MAIOR RISCO.

| Dimensão | Nota / 100 | Fundamentação |
| --- | ---: | --- |
| Qualidade editorial | 67 | Há conteúdo útil, mas alguns guias e exemplos não entregam a promessa |
| Profundidade | 61 | Bons roteiros curtos convivem com orientações genéricas sem aplicação completa |
| Originalidade | 60 | Jogos próprios e combinações úteis; pouca experiência de campo documentada; originalidade externa não verificada |
| Indexabilidade | 94 | Conteúdo no HTML inicial, 61 rotas acessíveis, links e canonical coerentes |
| Confiança | 54 | Institucionais e metodologia existem; revisão efetiva e configuração de consentimento ainda precisam ser comprovadas |
| SEO técnico | 92 | Metadata/hierarquia corrigidas; dados reais de indexação e manutenção de datas pendentes |
| UX | 88 | Jogos funcionam e o criador entrega roteiro executável; falta validação com uso real |
| Mobile | 91 | 131 verificações sem overflow após correções; falta teste em aparelhos/leitores reais |
| Performance | 90 | Bons ensaios locais; LCP de duas páginas acima de 2,5s e terceiros reais não incluídos |
| Risco de “conteúdo de baixo valor” | 62 | Risco relevante, concentrado em guias, promessas incompletas e comprovação editorial; não uniforme em todo o site |

O Google não exige um número mágico de palavras por página. Contato e índices podem ser curtos e cumprir sua função. IA, por si só, não torna um conteúdo inelegível; produzir páginas semelhantes sem valor adicional é o problema. As políticas de anúncios também distinguem páginas com conteúdo de telas vazias/de navegação.

Fontes oficiais consultadas:

- [Google: conteúdo útil, confiável e voltado às pessoas](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
- [Google: uso de IA generativa em conteúdo](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content).
- [Políticas para telas sem conteúdo do editor ou com baixo valor](https://support.google.com/publisherpolicies/answer/11112688?hl=en).
- [Requisitos de CMP certificada para as regiões abrangidas](https://support.google.com/adsense/answer/13554116?hl=en).
- [Políticas do programa AdSense](https://support.google.com/adsense/answer/10502938?hl=en-15).

## 11. Critérios para liberar a publicação

1. A correção local do ciclo de consentimento foi autorizada e testada. Ainda falta conferir CMP, carregamento/exclusão de anúncios e texto da política contra a configuração real, com autorização para cada alteração externa.
2. Concluído localmente: compatibilidade entre duração e instruções do criador, com impressão e compartilhamento autossuficientes.
3. Revisar os guias prioritários e os exemplos incompletos, sem aumentar páginas ou texto apenas para SEO.
4. Realizar e registrar revisão humana das referências, ambiguidades e conteúdos sensíveis; confirmar identidade responsável e contato funcional.
5. Reexecutar `npm run check`, fluxos principais e uma validação autorizada do ambiente de publicação, inclusive headers, scripts de terceiros e mobile.

**Ainda não deve publicar.** A aplicação já está tecnicamente mais segura e testada, mas as pendências de consentimento, entrega do produto e qualidade editorial são relevantes demais para tratar esta versão como pronta para uma nova submissão ao AdSense.
