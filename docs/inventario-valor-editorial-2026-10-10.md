# Inventário de valor editorial

Data: 10 de outubro de 2026. Etapa 1 do plano de reavaliação para AdSense.

## Atualização de execução — 12 de outubro de 2026

Este documento abaixo é um inventário histórico da versão publicada, não uma lista atual de falhas ainda abertas. As adaptações de jovens/casais/cartões, a consolidação de Rotina, os três artigos principais e as demais diferenciações editoriais foram implementadas localmente. Consulte `fechamento-local-plano-2026-10-12.md` para a matriz atual, evidências e pendências externas. Feedback com pessoas reais foi adiado pelo responsável; identidade pública ainda aguarda confirmação; não houve deploy nem configuração do Search Console nesta rodada.

Atualização posterior à coleta: os guias de jovens/casais e os cartões para casais foram adaptados **localmente**, conforme aprovação do responsável. Consulte `adaptacao-recreativa-2026-10-10.md` para conteúdo e testes. O inventário abaixo preserva a evidência da versão publicada; a aprovação editorial final e o deploy dessas adaptações continuam pendentes.

## Escopo e evidência

Foram coletadas as 59 URLs do sitemap de produção em https://www.bibliaclube.com.br, todas com HTTP 200. A coleta de `main`, headings, parágrafos, links e conteúdo de `details` foi feita com JavaScript desativado e requisições externas bloqueadas, sem executar anúncios. Foi confrontada com os dados e páginas locais da versão publicada `aed7e77`.

Evidência local: `.test-artifacts/audit/value-inventory-2026-10-10.json`. Script temporário: `tmp/inventory-value-2026-10-10.mjs`. Não fazem parte do conteúdo público.

Esta etapa classifica propósito, entrega e sobreposição editorial; não repete a auditoria técnica nem constitui nova conferência integral das 290 perguntas, certificação de direitos autorais, validação de indexação no Google ou avaliação interna do AdSense. Uma página HTTP 200 pode não estar indexada. Texto de `details` foi coletado mesmo quando recolhido; estar no HTML não comprova o peso atribuído pelo Google.

Nenhuma página do site foi alterada, excluída, redirecionada, desindexada ou publicada nesta etapa.

## Critério

- **Manter**: propósito identificável e entrega útil própria. Não significa conteúdo perfeito nem aprovado pelo Google. Melhorias específicas seguem na tabela.
- **Diferenciar**: manter a URL, mas corrigir promessa, escopo ou entrega; evitar acrescentar texto de preenchimento.
- **Consolidação proposta**: conteúdo útil, porém pouco defensável como publicação independente na configuração atual. Depende de autorização e dados de tráfego/links antes de alterar rotas.

Resumo das recomendações primárias: **43 manter, 15 diferenciar, 1 consolidação proposta**. São decisões editoriais, não notas nem probabilidades de aprovação.

Não foi identificada base para excluir em massa artigos ou jogos. Texto curto, template compartilhado, FAQ repetida ou mecânica interativa não são, isoladamente, prova de baixo valor. Conteúdo sensível abaixo é uma divergência do escopo escolhido pelo responsável, não uma alegação de violação automática do AdSense.

## Achados prioritários

### P1 — Escopo leve não foi aplicado a todo o acervo

Arquivo `src/app/guias/quiz-biblico-para-casais/page.tsx`, URL `/guias/quiz-biblico-para-casais`: permanece o heading “Conduza com cuidado pastoral”, além de reconciliação, conflitos e aplicações ao casamento. Exemplos literais: “Conduza com cuidado pastoral”; “pedir perdão, melhorar a comunicação”; “arrependimento” aparece no guia de jovens. Isso excede a proposta recreativa e neutra solicitada, mesmo com avisos sobre limites.

Arquivo `src/app/guias/dinamicas-biblicas-para-jovens/page.tsx`, URL `/guias/dinamicas-biblicas-para-jovens`: a oficina usa Daniel 1:8-16 e situações de gravação arriscada, segredo sobre alguém em perigo e notícia alarmante. A conclusão propõe arrependimento e decisões práticas. A entrega é concreta, mas não se resume a divertimento bíblico leve. Adaptar para observação do texto e desafios cooperativos de baixo risco, preservando o que funciona na oficina; não acrescentar apenas um disclaimer.

Arquivo `src/app/guias/como-conduzir-uma-celula-participativa/page.tsx`: instruções de facilitação têm valor próprio. O trecho de sofrimento/risco deve ser uma orientação curta de interromper e encaminhar, não uma oficina de aconselhamento. A presença de números de apoio não é motivo para apagar orientação de segurança.

### P1 — Algumas promessas são mais amplas que a atividade entregue

`/dinamicas-para-celulas/rotina-com-proposito`: o título sugere rotina, mas o exercício é ordenar quatro ações de uma mesa fictícia (B, C, D, A). Reserva 18 minutos para ordenar/testar essas ações, além dos demais blocos, totalizando 40 a 55 minutos. Sem observação real do ritmo, não há base para prometer essa duração como necessária. A entrega é uma variação de cooperação/planejamento, não um tratamento próprio de rotina.

`/dinamicas-para-celulas/planejar-juntos`: entrega melhor delimitada, planejar 20 minutos de jogos com um celular, leitura compartilhada e alternativa sem conexão. Ambas usam Eclesiastes 4:9-10 e trabalho em dupla. Propor incorporar a sequência de tarefas de “Rotina” como variação breve aqui. Não são textos integralmente duplicados; a razão é a pequena diferença de tarefa/resultado para justificar duas publicações longas.

`/dinamicas-para-celulas/amizades-que-edificam`, `/dinamicas-para-celulas/maos-que-servem` e `/biblioteca/como-preparar-um-encontro-para-jovens` usam chegada ao jogo sem regras, convite sem obrigatoriedade, turnos ou aparelho compartilhado para ensinar amizade, serviço e cooperação. São aplicações possíveis, mas o acervo acaba voltando à mesma cena para temas distintos. Diferenciar o produto final e selecionar exemplos próprios de cada proposta, sem retornar a assuntos íntimos.

### P2 — Guias e artigos têm interseção, mas não justificam fusão automática

`/guias/jogos-biblicos-para-grupos` entrega configuração de 12/30 pessoas, funções, regras de pontuação e placar demonstrado. `/biblioteca/como-montar-uma-noite-de-jogos-biblicos` entrega um evento completo de 75 minutos com contingência. `/biblioteca/jogos-biblicos-sem-impressao` compara sete formatos e combina três em 20 minutos. Preservar os três com essas fronteiras explícitas, removendo repetição de benefícios genéricos antes de acrescentar conteúdo novo.

Duas explicações são literalmente compartilhadas entre o guia de grupos e o de quiz em células: maior mandamento (Mateus 22:34-40) e samaritano (Lucas 10). Elas vêm do mesmo banco de questões, não são evidência de dois artigos copiados. Não reescrever respostas corretas apenas para parecerem diferentes; diferenciar a condução e a seleção quando isso servir ao objetivo.

### P2 — Materiais úteis não precisam virar artigos longos

Placar, checklist e formulário em branco atendem tarefas específicas; preservá-los. O plano familiar promete sete encontros de dez minutos, mas oferece principalmente uma passagem e uma pergunta por dia: falta um exemplo de execução e ajuste para leituras extensas. Cartões para casais misturam lazer com retomada de sonhos e conversas do relacionamento: escolher linguagem de preferências/atividades, consistente com o foco leve.

### P2 — Autoria declarada não é revisão demonstrada

Sobre e metodologia não inventam especialistas, o que deve ser preservado. Contudo, repetir “preparado e revisado pelo projeto” não permite saber quem conferiu ou qual correção foi realizada. Identificação do responsável, se consentida, e registro verdadeiro de conferência pertencem ao item 4 do plano. Sem inventar credenciais, revisão humana ou uso prático.

## Inventário por URL

Cada linha identifica a entrega atual e a ação recomendada. As rotas são relativas ao domínio de produção.

### Artigos — 11 URLs

| URL | Decisão | Entrega própria e próxima ação |
| --- | --- | --- |
| `/biblioteca/como-montar-uma-noite-de-jogos-biblicos` | Manter | Evento de 75 min, duas equipes, pares, perguntas orais e contingência. Candidato principal para teste de aplicação; não duplicar comparação de formatos do artigo digital. |
| `/biblioteca/roteiro-completo-de-celula-em-60-minutos` | Manter | Sessão de Colossenses 3:12-17 com cinco situações, perguntas apoiadas e cronograma. Manter como encontro pronto, não manual geral de liderança. |
| `/biblioteca/como-incluir-pessoas-timidas-e-visitantes` | Manter | Frases de acolhimento e atividade de Marcos 1:16-20 com opções de participação. Diferente do guia de gestão da conversa; cortar benefícios genéricos quando repetirem outras páginas. |
| `/biblioteca/culto-domestico-com-criancas` | Manter | Sessão de 15 min em Marcos 10 e sequência com gabarito, adaptações por idade. Candidato principal; preservar título aprovado “No lar”. Slug não é motivo para mudança agora. |
| `/biblioteca/quiz-para-escola-biblica-dominical` | Manter | Revisão de Marcos 6:30-44 com quatro questões próprias e distinção Marcos/João. Não é outra cópia do guia de quiz em células. |
| `/biblioteca/jogos-biblicos-sem-impressao` | Diferenciar | Sete formatos, exemplos e combinação de 20 min têm utilidade. Título “Jogos digitais” inclui adaptações orais e fechamento sem jogo: explicar essa fronteira na apresentação e reservar comparação de formatos para esta página. |
| `/biblioteca/como-adaptar-uma-dinamica-por-idade` | Manter | Um objetivo no Salmo 100 em versões por público. Preservar como método comparado; não duplicar a dinâmica de bilhetes de gratidão. |
| `/biblioteca/plano-de-quatro-encontros-em-marcos` | Manter | Quatro sessões com recortes, questões apoiadas e sequência de leitura. As cenas não tornam o plano duplicado do estudo de Bartimeu. Não prometer cobertura de todo Marcos. |
| `/biblioteca/plano-de-leitura-de-atos-com-jogos` | Manter | Seis etapas dos 28 capítulos, encontros de 45 min e jogos de conferência. Testar viabilidade da carga de leitura, sem criar seis URLs adicionais. |
| `/biblioteca/como-transformar-respostas-erradas-em-aprendizado` | Manter | Correção demonstrada de Pedro/André, ambiguidade e consulta. Produto é a intervenção diante do erro; ligar à revisão de EBD em vez de repetir os quatro gabaritos. |
| `/biblioteca/como-preparar-um-encontro-para-jovens` | Diferenciar | Sessão de 70 min em Filipenses 2 e quatro cenas. Título de método, entrega de um encontro específico; destacar o resultado concreto e diferenciar cooperação de pressão/amizade. Rever tempo por teste, não alongar o texto. |

### Guias — 6 URLs

| URL | Decisão | Entrega própria e próxima ação |
| --- | --- | --- |
| `/guias/como-usar-quiz-biblico-em-celulas` | Manter | Sessão de 20 min sobre comunidade, cinco perguntas e transições para conversa. Não expandir para outro catálogo de jogos; destacar condução cooperativa. |
| `/guias/dinamicas-biblicas-para-jovens` | Diferenciar | Oficina de 35 min com seis situações. Prioridade alta: retirar o foco em risco/confissão/arrependimento e entregar uma atividade recreativa, de observação e escolhas leves. |
| `/guias/jogos-biblicos-para-grupos` | Manter | Configuração de equipes, tempos, rebote e placar para 12/30 pessoas. É manual de configuração, não noite completa. Mantê-lo separado dos dois artigos de jogos. |
| `/guias/quiz-biblico-para-casais` | Diferenciar | Seis perguntas com aplicação à comunicação/perdão. Prioridade alta: transformar em leitura/jogo em dupla sem enquadramento pastoral nem objetivo de melhorar relacionamento. Não precisa eliminar público casais. |
| `/guias/como-conduzir-uma-celula-participativa` | Manter | Quatro funções, sete intervenções e diálogo simulado. Focar moderação da leitura; resumir encaminhamento de risco e evitar promessa de acompanhamento que o site não presta. |
| `/guias/ideias-para-estudo-biblico-em-grupo` | Manter | Estudo de Bartimeu em 40 min com observação/contexto/aplicação. Dar destaque à sessão específica, preservando o método como apoio, não como introdução repetida em todo guia. |

### Dinâmicas — 11 URLs

| URL | Decisão | Entrega própria e próxima ação |
| --- | --- | --- |
| `/dinamicas-para-celulas/verdade-ou-pressao` | Diferenciar | Quatro cenas de placar, consulta e regras. Definir como jogo limpo; não apresentar como abordagem ampla de pressões da juventude. Diferenciar da oficina no guia de jovens. |
| `/dinamicas-para-celulas/escuta-que-aproxima` | Manter | Exercício de resumir/confirmar preferências com troca de funções. Manter leve, sem pontuação ou diagnóstico conjugal; conferir duração em teste. |
| `/dinamicas-para-celulas/pontes-de-gratidao` | Manter | Bilhetes anônimos, leitura e conexão de gestos, diferente da comparação por idade. Testar tamanho/ritmo do grupo e preservar alternativa sem relato pessoal. |
| `/dinamicas-para-celulas/planejar-juntos` | Diferenciar | Plano fictício de 20 min com um celular e contingência; resultado é um plano utilizável, não só conversa. Reforçar como oficina de planejamento recreativo, destinatária possível da variação “Rotina”. |
| `/dinamicas-para-celulas/rotina-com-proposito` | Consolidação proposta | Sequência B/C/D/A de organizar mesa e auxílio em dupla. Incorporar como exercício curto em “Planejar juntos”, se autorizado e após avaliar tráfego/backlinks e planejador. Alternativa: reconstruir entrega própria e título fiel; não manter dois textos extensos apenas trocando cenário. |
| `/dinamicas-para-celulas/casa-que-cresce` | Manter | Oficina para adultos prepararem leitura de 7 min em Deuteronômio 6. Diferenciar da sessão infantil de Marcos 10: aqui se aprende a preparar, lá a aplicar. |
| `/dinamicas-para-celulas/amizades-que-edificam` | Diferenciar | Semáforo de quatro cenas, porém muitas retomam jogo/convite. Reservar seu diferencial à comparação de atitudes; usar exemplos leves próprios, não orientação psicológica sobre amizades. |
| `/dinamicas-para-celulas/digital-com-proposito` | Diferenciar | Conferência de convite, autorização de imagem e comentário. Manter como desafio de preparar um convite fictício verificável; evitar promessa ampla de orientação sobre hábitos digitais. |
| `/dinamicas-para-celulas/maos-que-servem` | Diferenciar | Ajuda com regras, celular, cadeiras e papéis. Produzir uma pequena tarefa cooperativa claramente diferente da oficina de planejar jogos; não ampliar para trabalho social ou necessidades íntimas. |
| `/dinamicas-para-celulas/uma-mesa-muitas-historias` | Manter | Seis perguntas e afinidades, resultado de integração. Preferências leves já são adequadas; não acrescentar outras páginas por variação de pergunta. |
| `/dinamicas-para-celulas/boas-novas-em-uma-frase` | Diferenciar | Explicar leitura/convite/recusa em três cenas. Promessa do título pode sugerir ensino evangelístico mais amplo; alinhar para comunicação clara em um convite recreativo, com critérios próprios de clareza. |

### Materiais — 6 URLs

| URL | Decisão | Entrega própria e próxima ação |
| --- | --- | --- |
| `/materiais/cartoes-de-perguntas` | Manter | 24 cartões temáticos para imprimir. Não exigir relato pessoal e não transformar cartões genéricos em novos artigos por pergunta. |
| `/materiais/folha-de-pontuacao` | Manter | Placar para seis equipes/cinco rodadas, distinto do controle digital. Uma demonstração preenchida seria útil, mas não é preciso um ensaio longo. |
| `/materiais/checklist-do-lider` | Manter | Checklist de antes/depois, imprimível. Uso complementar ao manual de facilitação; não duplicar cada item em outra URL. |
| `/materiais/roteiro-de-encontro` | Manter | Formulário em branco e exemplo já preenchido de Lucas 19. Não é duplicação do planejador automático: permite plano próprio em papel. |
| `/materiais/cartoes-para-casais` | Diferenciar | 18 perguntas, parte recreativa e parte de relacionamento/futuro. Adaptar os itens que sugerem conflitos, sonhos ou conversas íntimas para preferências e atividades leves. |
| `/materiais/plano-familiar-semanal` | Diferenciar | Sete passagens/perguntas e registro semanal. Demonstrar ao menos um dia completo, consulta e síntese; esclarecer como ajustar a promessa de 10 min a textos/idades distintos. |

### Quizzes — 8 URLs

| URL | Decisão | Entrega própria e próxima ação |
| --- | --- | --- |
| `/quiz-biblico` | Manter | Rodada geral, índice/mandamento/livro e exemplos estáticos. Sobreposição com temas é esperada; não vender questões gerais como exclusivas. |
| `/quiz-biblico/antigo-testamento` | Manter | Recorte próprio de narrativas, lei/travessias/obras e jornadas. Não criar páginas para cada pergunta ou resultado. |
| `/quiz-biblico/jesus-e-evangelhos` | Manter | Recorte dos Evangelhos e diferença de momento/relato. Valor inclui interação e conferência, não apenas introdução. |
| `/quiz-biblico/personagens-biblicos` | Manter | Identidade, parentesco e funções; distinto das pistas progressivas de Quem sou eu?. Referenciar a diferença, não fundir os jogos. |
| `/quiz-biblico/mulheres-da-biblia` | Manter | Recorte de mulheres com família/função/testemunho. Compartilhar pessoas com Personagens não basta para afirmar duplicação. |
| `/quiz-biblico/parabolas-de-jesus` | Manter | Recorte de personagens/falas/desfechos das parábolas. Preservar contexto e evitar interpretações universais na correção. |
| `/quiz-biblico/lugares-da-biblia` | Manter | Identificação de lugar e direção da viagem. Não prometer mapas/arqueologia que o jogo não possui. |
| `/quiz-biblico/igreja-primitiva` | Manter | Atos: cidades, sinais e decisões; contexto distinto. Usar ligação com percurso de leitura de Atos, sem copiar seus seis encontros. |

### Jogos e ferramenta — 6 URLs

| URL | Decisão | Entrega própria e próxima ação |
| --- | --- | --- |
| `/quem-sou-eu` | Manter | 24 personagens, pistas progressivas, decisão e pontuação. Interação própria é valor, não mera interface. Teste real pertence ao item 3. |
| `/ligue-os-pares` | Manter | Associação entre categorias e conferência de relações; diferente da mecânica de memória. Não inflar o texto nem fundir por usar personagens iguais. |
| `/complete-a-frase` | Manter | Reconhecer continuação, conferir versão/recorte e contexto. Não exigir redação idêntica entre traduções como critério de conhecimento. |
| `/jogo-da-memoria-biblico` | Manter | Cartas ocultas, modos e dificuldade, com associações apoiadas. Não confundir reaproveitamento de pares com falta de utilidade da mecânica. |
| `/modo-grupo` | Manter | Configuração, turnos, tempo, rebote e placar coletivo; produto diferente do quiz individual. Explicações editoriais são apoio, não substituto do jogo. |
| `/monte-seu-encontro` | Manter | Plano por público/tempo/objetivo, impressão e compartilhamento. Combinar recursos existentes é utilidade própria; não indexar combinações/resultados como artigos novos. |

### Entradas e catálogos — 6 URLs

| URL | Decisão | Entrega própria e próxima ação |
| --- | --- | --- |
| `/` | Diferenciar | Entrada de três pilares, mas muitos cards/benefícios genéricos. Destacar entregas específicas existentes, sem redesign automático; item 5 do plano. |
| `/biblioteca` | Manter | Busca e filtros de todo o acervo: função de descoberta. Não precisa receber texto artificial para ter tamanho de artigo. |
| `/guias` | Manter | Seleção dos seis guias. Deixar clara a diferença entre esta seleção e o catálogo completo; medir uso antes de propor remoção. |
| `/dinamicas-para-celulas` | Manter | Catálogo com filtro por público. Deve permitir escolher uma atividade, não repetir seu roteiro integral. |
| `/materiais` | Manter | Acesso aos seis recursos imprimíveis. Não adicionar um segundo artigo genérico de planejamento. |
| `/desafios-por-tema` | Manter | Escolha dos sete temas específicos; geral está no quiz. Catálogo é navegação, não oito artigos duplicados. Manter restrição atual de anúncios. |

### Institucionais — 5 URLs

| URL | Decisão | Entrega própria e próxima ação |
| --- | --- | --- |
| `/sobre` | Diferenciar | Propósito e contatos verdadeiros; responsável não identificado pessoalmente. Acrescentar identidade/contexto consentidos, sem currículos ou equipe inventados; item 4. |
| `/como-produzimos-conteudos` | Diferenciar | Processo e limites de IA existem. Acrescentar registro verdadeiro de revisão/correções, não mais declarações genéricas; item 4. |
| `/contato` | Manter | E-mail e canal de participação atendem propósito; não há obrigação de comentários públicos nem necessidade de criar formulário para aprovação. |
| `/politica-de-privacidade` | Manter | Documento de transparência, não artigo editorial. Validar comportamento real de cookies/serviços no item 6, não usar contagem de palavras como qualidade. |
| `/termos-de-uso` | Manter | Limites de uso e responsabilidade. Não expandir para parecer acervo nem monetizar como conteúdo principal. |

## Repetição: o que a evidência permite concluir

A comparação de parágrafos de ao menos 100 caracteres encontrou **43 textos exatos em mais de uma URL**, sem contar repetição na mesma URL. O número inclui descrições reutilizadas em cards de catálogos/relacionados, avisos, FAQs de jogo, autoria e reutilização intencional no planejador. Não corresponde a 43 páginas duplicadas.

Exemplos que não justificam fusão: resumo do artigo no catálogo e na página; instrução idêntica de quiz; gabarito comum do mesmo banco de perguntas; resumo da dinâmica no roteiro gerado. Não se deve mudar fatos corretos ou FAQ funcional só para reduzir esse número.

Há repetição conceitual que o teste literal não detecta: ampliar vários temas para “uma pessoa chega ao jogo sem regras”, “um aparelho para todos” e “um convite que aceita recusa”. O próximo trabalho é atribuir função e produto final diferentes, não perseguir percentuais automáticos de similaridade.

## Ordem de execução sugerida depois desta etapa

1. **Corrigir escopo pendente:** guias de jovens/casais e cartões para casais, com aprovação do responsável e sem aconselhamento. É uma prioridade encontrada, não uma garantia de resolver o AdSense.
2. **Resolver a candidata à consolidação:** decidir entre incorporar “Rotina” como variação ou redesenhar sua entrega. Antes de alterar URL: Search Console, links recebidos e internos, histórico de tráfego, IDs usados pelo planejador e testes. Redirect só após autorização; canonical/noindex não são atalhos para valor editorial.
3. **Diferenciar o núcleo de dinâmicas:** produto distinto em planejamento, jogo limpo, semáforo, convite verificável, serviço cooperativo e clareza de comunicação. Reduzir introduções/avisos repetidos quando não forem necessários, preservando segurança.
4. **Fortalecer três páginas principais sem criar novas:** noite de jogos, roteiro de 60 min e atividade infantil. Esse é o item 2 do plano; aplicação/feedback real são o item 3. Não apresentar simulações como encontros realizados.
5. **Concluir confiança/Home/verificação Google:** itens 4 a 6 do plano, com mudanças e acessos autorizados separadamente.

## Critérios de saída e limites

- Cada conteúdo sinalizado deve ter promessa fiel, tarefa concreta e resultado diferente de sua página vizinha.
- Uma repetição necessária deve ter função identificável, não reescrita cosmética.
- Tempos de propostas ainda não aplicadas devem ser sugestões, não resultados observados.
- Nenhum relato de uso, revisão humana ou credencial será inventado.
- As 59 decisões acima devem continuar rastreáveis; eventual consolidação precisa preservar links e comportamento da ferramenta.
- Não há mínimo de artigos/palavras/tráfego ou percentual de aprovação estabelecido por este inventário. Testes, `ads.txt` e fontes não substituem valor útil e original.

As recomendações são inferências editoriais, não conhecimento do processo interno de rejeição. Para AdSense, manter suspensa a recomendação de reenvio até realizar mudanças substantivas e as verificações externas pendentes.

## Referências de política

- [Páginas prontas para AdSense](https://support.google.com/adsense/answer/7299563?hl=pt-BR): conteúdo exclusivo, relevante, navegação e contribuição original.
- [Telas sem conteúdo do editor](https://support.google.com/publisherpolicies/answer/11112688?hl=pt-BR): restrições de veiculação em telas sem conteúdo/baixo valor ou destinadas à navegação. Não significa que todo catálogo deva desaparecer.
- [Conteúdo útil da Pesquisa](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-br): apoio à autoavaliação; inclui jogos e ferramentas como conteúdo principal. Não é checklist de aprovação do AdSense.
