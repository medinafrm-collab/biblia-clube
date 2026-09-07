# Inventário editorial e de indexação: 61 URLs

Auditoria do código local em 05/09/2026. Complementa [o relatório priorizado](./auditoria-local-2026-09-05.md).

Todas as 61 URLs abaixo responderam 200, tinham conteúdo no HTML inicial e foram encontradas por links internos. A classificação avalia a finalidade da página, não um mínimo de palavras. “Forte” é uma avaliação relativa ao acervo atual, não certificação do Google. “Potencialmente problemática” indica revisão prioritária por promessa, confiança ou sensibilidade; não prova infração.

Base dos caminhos de arquivos: `C:\Users\FER\Documents\Codex\BIBLIACLUBE`.

## A. Entradas, ferramentas e páginas institucionais (16)

| URL | Força | Atenção especial | Arquivo principal | Melhoria concreta / decisão |
| --- | --- | --- | --- | --- |
| `/` | Forte | Home extensa no mobile | `src/app/page.tsx` | Preservar três pilares; avaliar reduzir jogos em destaque e repetição de CTAs, sem mudar o visual sem aprovação |
| `/modo-grupo` | Média | Valor concentrado na interação | `src/components/GroupMode.tsx` | Mostrar uma rodada de exemplo com pontuação/rebote e referência antes de iniciar; nunca pôr anúncio junto às respostas |
| `/desafios-por-tema` | Média | Hub de navegação, não artigo | `src/app/desafios-por-tema/page.tsx` | Explicar diferença entre temas em poucas linhas; manter como hub, sem inflar texto ou monetizar uma tela vazia |
| `/ligue-os-pares` | Média | Explicações completas surgem na rodada | `src/components/MatchingGame.tsx` | Exibir um par comentado com referência específica; referências a livros inteiros podem ser estreitadas |
| `/complete-a-frase` | Média | Contexto anterior à interação limitado | `src/components/CompletePhraseGame.tsx` | Um exemplo contextualizado, identificação da tradução e orientação sobre diferenças de redação |
| `/jogo-da-memoria-biblico` | Média | Relações simbólicas sem referência individual no modelo | `src/data/memoryGamePairs.ts` | Acrescentar referências verificadas aos pares e dois exemplos visíveis, distinguindo símbolo e passagem |
| `/dinamicas-para-celulas` | Forte | Catálogo útil, não substituir detalhes por cards | `src/components/CellDynamics.tsx` | Preservar filtros e descrições; permitir comparação de público, materiais e duração |
| `/biblioteca` | Forte | Sobreposição entre tipos de conteúdo | `src/components/LibraryExplorer.tsx` | Manter filtros por tipo/público; melhorar diferenciação entre guia, artigo e material. Filtro de grupos corrigido |
| `/materiais` | Média | Índice curto adequado à função | `src/app/materiais/page.tsx` | Apresentar miniatura real da folha e formato; não adicionar texto só para contagem |
| `/monte-seu-encontro` | Forte para sua função | Corrigida: duração adapta passos, perguntas, jogo e leitura | `src/components/MeetingBuilder.tsx`, `src/lib/meetingPlan.ts` | Impressão e compartilhamento são autossuficientes; validar em uso real e manter resultados fora de novas URLs indexáveis |
| `/guias` | Média | Índice de uma coleção editorial frágil | `src/app/guias/page.tsx` | Manter coleção secundária da Biblioteca; melhorar os seis destinos antes de ampliar a lista |
| `/sobre` | Média | Responsabilidade editorial pouco verificável | `src/app/sobre/page.tsx` | Identificar responsável e prática real do projeto sem inventar credenciais; transparência das imagens já corrigida |
| `/como-produzimos-conteudos` | Média | Processo descrito não comprova execução | `src/app/como-produzimos-conteudos/page.tsx` | Vincular critérios a registro real de revisão, ambiguidades e correções; não criar uma segunda página equivalente |
| `/contato` | Forte para sua função | Canal não teve entrega externa testada | `src/app/contato/page.tsx` | Confirmar recebimento e rotina de resposta; texto curto não é problema de thin content nesta finalidade |
| `/politica-de-privacidade` | Média | POTENCIALMENTE PROBLEMÁTICA: CMP/configuração precisam coincidir | `src/app/politica-de-privacidade/page.tsx` | Responsável confirmar finalidade, fornecedores, revogação, geografias/CMP e dados efetivamente tratados; revisão adequada, sem promessa jurídica automática |
| `/termos-de-uso` | Média | Termos breves e responsabilidade a confirmar | `src/app/termos-de-uso/page.tsx` | Revisar usos dos materiais, limites e identidade responsável conforme operação real; não ampliar artificialmente |

## B. Quizzes (8)

Implementação compartilhada: `src/components/QuizTopicPage.tsx` e `Quiz.tsx`. Entradas: `src/app/quiz-biblico/page.tsx` e `[slug]/page.tsx`. Fontes: `quizTopics.ts`, `quizTopicEditorial.ts`, `quizTopicContext.ts`, `quizQuestions.ts`, `quizQuestionExpansions.ts`, `quizQuestionJourneyThree.ts` em `src/data`.

Todas possuem introdução e contexto próprios, exemplos de perguntas com resposta/explicação/referência no HTML inicial, FAQ e relacionados. Não são telas apenas interativas. Os demais gabaritos aparecem após a resposta. Não foi feita revisão teológica humana integral.

| URL | Força | Perguntas nas jornadas 1/2/3 | Melhoria concreta |
| --- | --- | --- | --- |
| `/quiz-biblico` | Forte | 14/12/12 | Mostrar como revisar os erros e sugerir próximo tema com base no aprendizado, não só mais CTAs |
| `/quiz-biblico/antigo-testamento` | Forte | 11/12/12 | Contextualizar a relação entre livros/acontecimentos em um exemplo; FAQ específico |
| `/quiz-biblico/jesus-e-evangelhos` | Forte | 13/12/12 | Conferir diferenças entre relatos dos Evangelhos e explicitar a fonte em enunciados ambíguos |
| `/quiz-biblico/personagens-biblicos` | Forte | 12/12/12 | Explicar uma confusão recorrente de personagens e dar referência precisa |
| `/quiz-biblico/mulheres-da-biblia` | Forte | 12/12/12 | Aprofundar contexto de uma narrativa e revisar generalizações ou ambiguidades |
| `/quiz-biblico/parabolas-de-jesus` | Forte | 12/12/12 | Diferenciar o que a parábola afirma das interpretações, com exemplo contextualizado |
| `/quiz-biblico/lugares-da-biblia` | Forte | 12/12/12 | Relacionar um lugar à narrativa; mapa opcional apenas com verificação geográfica/fontes |
| `/quiz-biblico/igreja-primitiva` | Forte | 12/12/12 | Explicar cronologia/contexto de Atos em exemplo específico, sem pressupor uniformidade histórica |

O FAQ segue um molde semelhante entre temas; substituir parte das perguntas genéricas por dúvidas reais do assunto. A contagem de questões varia legitimamente por jornada; não prometer sempre 12. Duração e dificuldade pedem validação de uso, não números inventados.

## C. Guias (6)

Cada URL corresponde diretamente a `src/app<URL>/page.tsx`. Não foram removidos nem consolidados. As classificações abaixo consideram repetição entre blocos, promessa do título e falta de exemplos prontos, não apenas extensão.

| URL | Força | Classificação editorial | Melhoria concreta |
| --- | --- | --- | --- |
| `/guias/como-usar-quiz-biblico-em-celulas` | Forte / robusto | Corrigida localmente em 06/09/2026 | Sessão de 20 minutos com cinco perguntas reais da base, respostas, referências, transições e fechamento; falta revisão humana antes da publicação |
| `/guias/dinamicas-biblicas-para-jovens` | Forte / robusto | Corrigida localmente em 06/09/2026 | Oficina de 35 minutos com materiais, seis casos fictícios, perguntas, tempos e adaptações para grupo tímido, agitado ou numeroso; falta revisão humana antes da publicação |
| `/guias/jogos-biblicos-para-grupos` | Forte / robusto | Corrigida localmente em 06/09/2026 | Compara 12 e 30 participantes, espaço, papéis e configurações; inclui rodada fixa, pontuação e resultado conferido; falta revisão humana antes da publicação |
| `/guias/quiz-biblico-para-casais` | Forte / robusto | Corrigida localmente em 06/09/2026 | Seis perguntas completas com contexto/referências, aplicação sem exposição e roteiro de 15 minutos; falta revisão humana das referências antes da publicação |
| `/guias/como-conduzir-uma-celula-participativa` | Forte / robusto | Corrigida localmente em 06/09/2026 | Quatro papéis, sete intervenções concretas, simulação em Lucas 10:38-42 e encaminhamentos oficiais para situações de risco; falta revisão humana antes da publicação |
| `/guias/ideias-para-estudo-biblico-em-grupo` | Forte / robusto | Corrigida localmente em 06/09/2026 | Estudo completo de Marcos 10:46-52, perguntas e apoios, aplicações e cronograma de 40 minutos; falta revisão humana das referências antes da publicação |

Não há justificativa para manter seis textos quase iguais apenas com títulos de busca diferentes. A decisão entre aprofundar ou consolidar deve vir após comparar intenção e desempenho de URLs; redirects/noindex dependem de aprovação.

## D. Artigos da Biblioteca (11 públicos e 2 pausados)

Fonte de todos: `src/data/editorialContent.ts`. Template: `src/app/biblioteca/[slug]/page.tsx`. “Palavras” mede o corpo editorial estruturado, sem header/footer/cards de navegação. Os artigos já incluem seções, aplicação/checklists e links a jogos ou materiais; a utilidade e a precisão desses exemplos é que variam.

| URL | Palavras | Força / classificação | Avaliação e melhoria concreta |
| --- | ---: | --- | --- |
| `/biblioteca/como-montar-uma-noite-de-jogos-biblicos` | 459 | Forte / robusto | Roteiro de 75 min, formação de equipes e cuidados concretos; acrescentar uma rodada trabalhada e registro real de aplicação quando existir |
| `/biblioteca/roteiro-completo-de-celula-em-60-minutos` | 423 | Média / aceitável | Estrutura de tempo e manejo de participação são úteis; “completo” pede passagem escolhida, perguntas prontas e fechamento aplicado |
| `/biblioteca/como-incluir-pessoas-timidas-e-visitantes` | 345 | Forte / robusto | Frases de acolhimento e participação opcional resolvem necessidade específica; adicionar caso real anonimizado somente com base verificável |
| `/biblioteca/culto-domestico-com-criancas` | 397 | Forte / robusto | Quinze minutos, adaptações por idade e quatro semanas com passagens; desenvolver um encontro completo de uma faixa etária |
| `/biblioteca/quiz-para-escola-biblica-dominical` | 377 | Média / aceitável | Antes/durante/depois e revisão de 20 min são úteis; entregar três perguntas de exemplo com explicação e uso pedagógico |
| `/biblioteca/jogos-biblicos-sem-impressao` | 350 | Média / aceitável | Sete formatos realmente distintos, mas curtos; fornecer pistas/pares/eventos prontos para o leitor não ter de inventar tudo |
| `/biblioteca/como-adaptar-uma-dinamica-por-idade` | 331 | Fraca / raso | Critérios gerais não mostram a adaptação; aplicar a mesma dinâmica a crianças, jovens e adultos, com passos comparáveis |
| `/biblioteca/plano-de-quatro-encontros-em-marcos` | 374 | Forte / robusto | Quatro passagens e perguntas próprias por encontro; bom exemplo de utilidade sem depender de texto longo; incluir notas contextuais revisadas |
| `/biblioteca/plano-de-leitura-de-atos-com-jogos` | 377 | Média / aceitável | Seis etapas e ritmo semanal funcionam; trocar parte das perguntas comuns por perguntas/contexto específicos de cada semana |
| `/biblioteca/encontro-de-casais-sobre-financas` | 373 | PAUSADO / fora da versão pública | Rascunho preservado, mas excluído de catálogo, rota e sitemap por decisão editorial em 06/09/2026 |
| `/biblioteca/como-conduzir-conversas-sensiveis` | 824 | PAUSADO / fora da versão pública | Rascunho preservado, mas excluído de catálogo, rota e sitemap por decisão editorial em 06/09/2026 |
| `/biblioteca/como-transformar-respostas-erradas-em-aprendizado` | 688 | Forte / robusto após correção local | Questão completa sobre Pedro e André, erro plausível, correção baseada em Mateus 14 e João 1 e adaptações para quatro perfis de grupo; falta revisão humana antes da publicação |
| `/biblioteca/como-preparar-um-encontro-para-jovens` | 363 | Média / aceitável | Roteiro de 70 min e cuidado com linguagem; completar tema/passagem/perguntas para ser aplicável sem criação adicional |

Nenhum artigo foi classificado como duplicado literal pelo exame e detector interno usados. Isso não garante originalidade externa. O padrão de estrutura repetido e estimativas de leitura de 7–10 min devem ser revistos por utilidade e honestidade, não por tentativa de disfarçar IA.

## E. Dinâmicas detalhadas (11 públicas e 1 pausada)

Fonte: `src/data/cellDynamics.ts`. Template: `src/app/dinamicas-para-celulas/[slug]/page.tsx`. Todas apresentam propósito, público/duração, materiais, passos, questões e referências. O formato comum não torna os roteiros duplicados: há situações e atividades distintas. A melhoria principal é tornar os insumos e a condução mais prontos para uso.

| URL | Força | Risco/necessidade | Melhoria concreta |
| --- | --- | --- | --- |
| `/dinamicas-para-celulas/verdade-ou-pressao` | Média | Participante precisa inventar cenários | Fornecer quatro situações fictícias prontas e exemplo de conversa sem exposição |
| `/dinamicas-para-celulas/escuta-que-aproxima` | Média | Casais e privacidade | Dar uma simulação de escuta com falas adequadas/inadequadas; preservar recusa de participação |
| `/dinamicas-para-celulas/pontes-de-gratidao` | Forte | Tempo por passo e acessibilidade | Incluir alternativa oral para quem não escreve e tempo de cada etapa |
| `/dinamicas-para-celulas/planejar-juntos` | Média | Finanças/decisões do casal | Dar exemplo fictício de planejamento sem números pessoais; revisar limites de aconselhamento |
| `/dinamicas-para-celulas/rotina-com-proposito` | Média | Aplicação ainda genérica | Mostrar um combinado semanal preenchido e revisão depois de sete dias |
| `/dinamicas-para-celulas/casa-que-cresce` | Média | Metáfora depende da condução | Entregar exemplo preenchido e orientações para não julgar a família do outro |
| `/dinamicas-para-celulas/amizades-que-edificam` | Média | Adolescentes e exposição | Situações fictícias e conversa sobre atitudes, sem nomear/coagir colegas |
| `/dinamicas-para-celulas/quando-a-mente-acelera` | PAUSADA | Fora da versão pública | Rascunho preservado, mas excluído de catálogo, rota e sitemap por decisão editorial em 06/09/2026 |
| `/dinamicas-para-celulas/digital-com-proposito` | Média | Privacidade digital | Não solicitar telas/histórico pessoais; oferecer exemplo fictício e meta prática verificável |
| `/dinamicas-para-celulas/maos-que-servem` | Forte | Viabilidade e proteção | Exemplo de ação pequena com responsáveis, prazo e cuidado com dados de beneficiários |
| `/dinamicas-para-celulas/uma-mesa-muitas-historias` | Forte | Grupos mistos e inclusão | Exemplo de perguntas por idade e opção de observar sem relato pessoal |
| `/dinamicas-para-celulas/boas-novas-em-uma-frase` | Média | Correção teológica e pressão de desempenho | Exemplo comentado de síntese com referência, deixando claro que não é fórmula única |

## F. Materiais (6)

Fonte: `src/data/printableResources.ts`. Template: `src/app/materiais/[slug]/page.tsx`. Materiais curtos não são automaticamente fracos: preencher, imprimir ou usar uma ficha é a finalidade principal. Os PDFs A4 foram gerados e a contagem abaixo foi conferida no Chromium após correção do rodapé; outros parâmetros de impressão podem alterar a paginação.

| URL | Força | A4 testado | Melhoria concreta |
| --- | --- | ---: | --- |
| `/materiais/cartoes-de-perguntas` | Média | 2 páginas | Adicionar referência/apoio ao facilitador quando a pergunta exigir resposta bíblica; conferir recorte dos cartões |
| `/materiais/folha-de-pontuacao` | Forte para sua função | 1 página | Rodapé isolado corrigido; manter área de escrita e testar impressão física |
| `/materiais/checklist-do-lider` | Média | 2 páginas | Diferenciar preparação, condução e acompanhamento; evitar repetir literalmente o guia |
| `/materiais/roteiro-de-encontro` | Média | 2 páginas | Título corrigido: é para preencher, não editor digital; oferecer exemplo preenchido junto à folha em branco |
| `/materiais/cartoes-para-casais` | Média | 2 páginas | Preservar escolha de não responder e privacidade; incorporar sugestão de uso em encontro concreto |
| `/materiais/plano-familiar-semanal` | Média | 1 página | Exemplo de semana preenchida e adaptação por idade, sem ocupar o espaço destinado à família |

## G. Rotas e estados fora das 61 páginas

| Rota/estado | Tratamento / recomendação |
| --- | --- |
| `/api/bible-passage` | API pública de leitura, validação e teto de trabalho corrigidos; noindex via header; não é página editorial |
| `/ads.txt` | Identificação do publisher; preservada, requer confirmação da conta pelo responsável, não inserir conteúdo editorial |
| `/robots.txt` e `/sitemap.xml` | Saídas técnicas conferidas; não contam como artigos |
| 404 e slug desconhecido | Erro real e noindex; retirar elegibilidade de anúncios após autorização |
| `?jornada=` / `?continuar=` | Estado de jogo, canonical da rota base; não gerar sitemap próprio |
| Filtros/busca da Biblioteca | Estado local; não criar centenas de combinações indexáveis sem demanda/conteúdo próprio |
| Resultado do quiz | Estado da mesma página; não precisa de URL indexável exclusiva |
| Roteiro gerado | Estado local; se houver salvamento público futuro, começar privado/noindex até haver curadoria e consentimento |

## Fila editorial recomendada

1. Concluído localmente: criador de roteiro com execução compatível com duração e exportação autossuficiente.
2. Guias de casais, jovens e estudo em grupo: entregar atividades realmente prontas.
3. Exemplo de resposta errada e adaptação por idade: desenvolver aplicações completas.
4. Conteúdos sensíveis: revisão humana adequada e registro verificável.
5. Demais guias: diferenciar da Biblioteca e remover repetição dentro da própria página, sem apagar URLs automaticamente.
6. Jogos não quiz: poucos exemplos visíveis e referenciados; melhorar contexto, não esconder o jogo sob texto artificial.

Nenhuma classificação desta lista autoriza, por si só, excluir ou desindexar a página. Qualquer alteração estrutural deve ser aprovada e considerar a versão já existente no índice.
