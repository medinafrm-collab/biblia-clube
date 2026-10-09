# Revisão local dos jogos

## Quiz geral: página e três exemplos — 08/10/2026

Rota: `/quiz-biblico`. Arquivos: `src/data/quizTopics.ts`, `src/data/quizTopicContext.ts`, `src/data/quizQuestions.ts` e `src/components/QuizTopicPage.tsx`.

Introdução e contexto geral substituídos por orientações concretas sobre organização dos livros, leitura da cena e diferença entre posição no índice e assunto do livro. Pontuação não apresentada como avaliação da fé. Incluída combinação prévia da regra de consulta para uso em grupo.

Conferidos os exemplos de IDs 2, 9 e 11: Gênesis 1:1-5, Mateus 22:34-40 e Apocalipse 1:1-3 na base Almeida 1819 do projeto. Nos exemplos de ordem dos livros, o índice da edição é indicado como fonte da posição; os versículos apenas contextualizam o conteúdo. Respostas, alternativas, IDs e jornadas preservados. A ampliação de Mateus inclui a pergunta do especialista e distingue primeiro e segundo mandamentos.

O texto compartilhado de apresentação dos exemplos deixou de falar em avaliação da página e passou a convidar à leitura e comparação com o contexto. Não houve alterações de rotas, anúncios ou mecânica.

Validação: conteúdo, 14 testes de regressão, lint, TypeScript e build aprovados. Novo teste preserva as respostas dos três exemplos e confirma resolução das referências. Teste de navegador em seis larguras (320, 375, 768, 1024, 1280, 1440) confirmou HTTP 200, um H1, conteúdo sem JavaScript e ausência de overflow. A primeira jornada foi completada com 14 respostas corretas, resultado final, abertura da passagem pela API local e fechamento do diálogo por Escape, sem erros de JavaScript.

Evidências: `tmp/audit-2026-10-07/quiz-geral-20261008-validation.json` e `quiz-geral-20261008-375.png`. Teste reproduzível: `scripts/audit-general-quiz.mjs` com Playwright e Chrome configurados.

Limite: completar o fluxo não equivale a revisar editorialmente todas as 14 perguntas. Apenas os três exemplos receberam conferência substantiva neste passo. Restam as outras 11 da primeira jornada geral, demais jornadas e temas, outros jogos e conferência humana. Nada foi publicado; não há garantia de aprovação no AdSense.

## Quiz geral: restante da primeira jornada — 08/10/2026

Revisados IDs 12, 19, 20, 21, 22, 23, 24, 25, 26, 43 e 44 em `src/data/quizQuestions.ts` e `src/data/quizQuestionExpansions.ts`. Com os três exemplos anteriores, a primeira jornada geral tem 14 de 14 perguntas conferidas localmente. Respostas, alternativas, IDs e ordem preservados; a pergunta de Salmos explicita a numeração adotada no quiz.

Substituídas referências de conjuntos inteiros por passagens curtas de leitura contextual. Perguntas de ordem, agrupamento e contagem indicam o índice como fonte, sem apresentar um versículo como prova de organização editorial. Mantida a delimitação protestante na pergunta sobre 66 livros, sem universalizar essa contagem para outras tradições.

Passagens conferidas na base local: Romanos 1:1-7, 1 Coríntios 1:1-3, Atos 1:1-8, Salmos 150:1-6, Deuteronômio 6:4-9, Lucas 1:1-4, João 20:30-31, Judas 1:1-3, Provérbios 1:1-7 e Êxodo 1:1-7. Para organização e numeração, consultados também [índice da USCCB](https://www.usccb.org/offices/new-american-bible/books-bible), [introdução a Salmos da USCCB](https://bible.usccb.org/bible/psalms/0) e [apresentação da Bíblia da Biblica](https://www.biblica.com/bible-faqs/what-is-the-bible/). Essas fontes representam edições e tradições identificáveis; não são usadas para afirmar uma contagem universal.

Validação: conteúdo, 15 testes, lint, TypeScript e build aprovados. Novo teste cobre os 14 IDs, alternativas únicas e referências resolvíveis. Navegador: seis larguras sem overflow; jornada concluída com 14 acertos; todas as referências abertas, chamadas inéditas da API com HTTP 200 e reutilização do cache nas repetidas; fechamento por Escape e ausência de erros de JavaScript. O teste foi ajustado porque exigir uma nova chamada para referências já armazenadas produzia um falso negativo.

Evidência atualizada em `tmp/audit-2026-10-07/quiz-geral-20261008-validation.json`. Próximo passo: primeira jornada de Antigo Testamento, seguindo a prioridade de uma jornada por tema antes das restantes. Conferência pelo responsável, demais temas/jornadas e outros jogos continuam pendentes. Nada foi publicado.

## Antigo Testamento: primeira jornada — 08/10/2026

Rota: `/quiz-biblico/antigo-testamento`. Revisados os 11 itens de IDs 1, 3, 4, 7, 8, 13, 14, 27, 28, 29 e 45 nos arquivos `src/data/quizQuestions.ts` e `src/data/quizQuestionExpansions.ts`. Preservados enunciados, alternativas, respostas, IDs e ordem. Acrescentado contexto útil, sem transformar os episódios em promessas pessoais de resultado.

Referências conferidas na base local: Gênesis 6:13-22; Êxodo 31:18 e Deuteronômio 10:1-5; 1 Samuel 17:45-50; Daniel 6:10-13 e 6:16-23; Jonas 1:15-17; Ester 4:10-16 e 5:1-3; Gênesis 37:26-28 e 41:39-43; Êxodo 16:23-31; Josué 6:1-7; Juízes 7:2-7; 1 Reis 6:1-3.

Correções principais: maná recolhido em seis dias, não aparecendo indistintamente todos os dias; entrega das tábuas distinguida da apresentação dos mandamentos em Êxodo 20; duas etapas da trajetória de José com referências específicas; risco assumido por Ester e recepção pelo rei em trechos separados; grande peixe em Jonas sem atribuir espécie. Referências compostas permitem conferir as duas partes da explicação no leitor local.

Validação: conteúdo, 16 testes, lint, TypeScript e build aprovados. Novo teste preserva os 11 IDs, alternativas únicas e todas as seções das referências compostas. Navegador: HTTP 200, um H1, exemplos visíveis sem JavaScript, seis larguras sem overflow, rodada com 11 acertos até o resultado, leitura de todas as referências e fechamento por Escape, sem erros de JavaScript. Evidência: `tmp/audit-2026-10-07/quiz-antigo-20261008-validation.json`; captura em `quiz-antigo-20261008-375.png`. Teste com `AUDIT_QUIZ_TOPIC=antigo-testamento` em `scripts/audit-general-quiz.mjs`.

Progresso: primeiras jornadas de Geral (14) e Antigo Testamento (11) revisadas localmente, total 25 perguntas. As introduções e demais jornadas do tema ainda precisam de revisão substantiva; o teste de renderização não comprova essa revisão. Próximo: primeira jornada de Jesus e Evangelhos. Conferência pelo responsável e demais etapas continuam pendentes. Nada foi publicado.

## Jesus e Evangelhos: primeira jornada — 08/10/2026

Rota: `/quiz-biblico/jesus-e-evangelhos`. Revisados 13 itens: IDs 5, 6, 10, 15, 16, 17, 18, 30, 31, 32, 46, 47 e 48 em `src/data/quizQuestions.ts` e `src/data/quizQuestionExpansions.ts`. Respostas, alternativas, IDs e ordem preservados. Quatro enunciados delimitados: grupo dos doze em Marcos 3, bem-aventuranças em Mateus 5, aviso inicial de Maria Madalena em João 20 e alimentos iniciais da multidão em Mateus 14.

Passagens conferidas na base local: Mateus 2:1-6; Marcos 3:13-19; Lucas 22:54-62; João 2:1-11; Mateus 3:13-17; Mateus 5:1-12; João 20:1-9; Lucas 10:30-37; Mateus 14:13-21; Marcos 4:35-41; João 3:1-8; João 20:24-29; Lucas 7:11-17.

Explicações distinguem os doze do total de seguidores, localização da consulta a Herodes da cidade do nascimento, descoberta inicial de Maria dos acontecimentos posteriores, quantidades iniciais de alimentos dos cestos de sobras e personagem de parábola de relato histórico. Não atribuído motivo não explícito à visita noturna de Nicodemos; não afirmado que Tomé efetivamente tocou as feridas. Mantido o foco no texto, sem ampliar interpretações denominacionais.

Validação: conteúdo, 17 testes, lint, TypeScript e build aprovados. Novo teste cobre IDs, alternativas únicas, referências e delimitação das cenas. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 13 respostas até o resultado, abertura de todas as referências e fechamento por Escape, sem erros de JavaScript. Evidências: `tmp/audit-2026-10-07/quiz-evangelhos-20261008-validation.json` e `quiz-evangelhos-20261008-375.png`. Teste com `AUDIT_QUIZ_TOPIC=jesus-evangelhos`.

Progresso: três primeiras jornadas revisadas localmente, total 38 perguntas. Próximo: primeira jornada de Personagens bíblicos. Demais jornadas, introduções temáticas, outros jogos e conferência pelo responsável continuam pendentes. Nada foi publicado.

## Personagens bíblicos: primeira jornada — 08/10/2026

Rota: `/quiz-biblico/personagens-biblicos`. Revisados 12 itens: IDs 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 49 e 50 em `src/data/quizQuestions.ts` e `src/data/quizQuestionExpansions.ts`. Respostas, alternativas, IDs e ordem preservados. Enunciados de Abraão e Neemias delimitados para identificar a passagem e a liderança coletiva, respectivamente.

Passagens conferidas na base local: Gênesis 12:1-5; Rute 1:3-5 e 1:14-18; 1 Samuel 3:1-10; 1 Reis 3:5-12; 1 Reis 18:19-24; 2 Reis 2:9-15; Juízes 4:4-7; Atos 16:11-15; Atos 4:36-37; Lucas 19:1-6; Gênesis 41:25-36; Neemias 2:17-18 e 6:15-16.

Explicações distinguem Abrão/Abraão no momento do relato, relação entre Rute e Noemi, chamado de Samuel e orientação de Eli, pedido de discernimento de Salomão, nomes de Elias e Eliseu, função de Débora, origem de Lídia em Tiatira e encontro em Filipos, José chamado Barnabé e José de Gênesis, interpretação dos sonhos e recomendação prática, reconstrução coletiva dos muros e reconstrução do templo. Referências extensas substituídas por trechos adequados às respostas, com duas seções quando necessário.

Validação: conteúdo, 18 testes, lint, TypeScript e build aprovados. Novo teste preserva os 12 IDs e respostas e verifica alternativas únicas e todas as seções das referências. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, rodada com 12 acertos até o resultado, abertura de todas as referências e fechamento por Escape, sem erros de JavaScript. Evidências: `tmp/audit-2026-10-07/quiz-personagens-20261008-validation.json` e `quiz-personagens-20261008-375.png`. Teste com `AUDIT_QUIZ_TOPIC=personagens`.

Progresso: quatro primeiras jornadas revisadas localmente, total 50 perguntas. Próximo: primeira jornada de Mulheres da Bíblia. Demais jornadas, introduções temáticas, outros jogos e conferência pelo responsável continuam pendentes. Nada foi publicado.

## Mulheres da Bíblia: primeira jornada — 08/10/2026

Rota: `/quiz-biblico/mulheres-da-biblia`. Revisados 12 itens, IDs 99 a 110, em `src/data/quizQuestionExpansions.ts`. Respostas, alternativas, IDs e ordem preservados. Corrigido o enunciado de Raabe: ela pede proteção para a família, enquanto os espias indicam o cordão de escarlate, em vez de ela pedir esse cordão.

Passagens conferidas na base local: Gênesis 18:9-15 e 21:1-7; Gênesis 24:15-20; Gênesis 29:6-12; Gênesis 29:31-35; Êxodo 2:4-9 e Números 26:59; Josué 2:12-21; Juízes 4:4-10; Rute 2:1-8; 1 Samuel 1:9-20; 1 Samuel 25:18-19 e 25:32-35; Ester 2:5-7; 2 Reis 22:8-14.

Incluídas distinções entre os dois momentos do riso de Sara, pedido de água e oferta adicional de Rebeca, identificação de Raquel como pastora, quatro filhos de Lia no trecho e genealogias posteriores, irmã não nomeada em Êxodo e identificação de Miriã em Números, orientação de Débora e mobilização por Baraque, chegada de Rute ao campo e orientação de Boaz, oração de Ana e sua interpretação inicial por Eli, provisões de Abigail e resposta de Davi, grafias Mordecai/Mardoqueu e funções de Hilquias, Safã e Hulda. Episódios de sofrimento e proteção não apresentados como promessas pessoais ou aconselhamento.

Validação: conteúdo, 19 testes, lint, TypeScript e build aprovados. Novo teste preserva IDs e respostas, verifica alternativas únicas e todas as seções das referências e protege a correção de Raabe e a fonte do nome de Miriã. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Evidências: `tmp/audit-2026-10-07/quiz-mulheres-20261008-validation.json` e `quiz-mulheres-20261008-375.png`. Teste com `AUDIT_QUIZ_TOPIC=mulheres-da-biblia`.

Progresso: cinco primeiras jornadas revisadas localmente, total 62 perguntas. Próximo: primeira jornada de Parábolas de Jesus. Demais jornadas, introduções temáticas, outros jogos e conferência pelo responsável continuam pendentes. Nada foi publicado.

## Parábolas de Jesus: primeira jornada — 08/10/2026

Rota: `/quiz-biblico/parabolas-de-jesus`. Revisados 12 itens, IDs 123 a 134, em `src/data/quizQuestionExpansions.ts`. Respostas, alternativas, IDs e ordem preservados. Corrigido o enunciado do servo impiedoso para perguntar o que acontece após a súplica: o perdão não é a primeira ação do rei, que anteriormente ordena a venda dos bens.

Passagens conferidas na base local: Lucas 10:30-37; Lucas 15:11-13; Lucas 18:9-14; Mateus 21:28-32; Mateus 18:23-30; Lucas 12:16-21; Lucas 16:19-23; Lucas 15:3-7; Lucas 15:8-10; Lucas 18:1-8; Mateus 22:8-10; Lucas 7:40-47.

Explicações diferenciam rota do samaritano e ensino da misericórdia, pedido inicial do filho e retorno posterior, ação dos dois filhos e promessa verbal, misericórdia recebida e negada pelo servo, celeiros e confiança nos bens, Lázaro nesta narrativa e Lázaro de Betânia, ovelhas deixadas e ovelha perdida, busca e celebração da moeda, juiz injusto como contraste e não representação do caráter de Deus, grupo convidado às bodas e etapas posteriores, resposta de Simão e aprovação por Jesus. Não acrescentadas interpretações escatológicas ou regras práticas de finanças.

Validação: conteúdo, 20 testes, lint, TypeScript e build aprovados. Novo teste cobre os 12 IDs, alternativas únicas, referências resolvíveis e a sequência correta no enunciado do servo. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Evidências: `tmp/audit-2026-10-07/quiz-parabolas-20261008-validation.json` e `quiz-parabolas-20261008-375.png`. Teste com `AUDIT_QUIZ_TOPIC=parabolas-de-jesus`.

Progresso: seis primeiras jornadas revisadas localmente, total 74 perguntas. Próximo: primeira jornada de Lugares da Bíblia. Demais jornadas, introduções temáticas, outros jogos e conferência pelo responsável continuam pendentes. Nada foi publicado.

## Lugares da Bíblia: primeira jornada — 08/10/2026

Rota: `/quiz-biblico/lugares-da-biblia`. Revisados 12 itens, IDs 147 a 158, em `src/data/quizQuestionExpansions.ts`. Respostas, alternativas, IDs e ordem preservados. Delimitado o enunciado de Davi ao reinado sobre todo Israel e Judá, distinguindo Jerusalém da etapa anterior em Hebrom. Corrigida a formulação da jovem de Atos 16: o relato informa a saída de um espírito, não sua emancipação jurídica.

Passagens conferidas na base local: 2 Samuel 5:4-10; Mateus 2:8-11; Mateus 2:19-23 e Lucas 2:39-40; Lucas 19:1-6; João 11:1 e 12:1-3; Mateus 8:5-13; João 4:4-9; Atos 9:1-9; Atos 19:1 e 19:8-10; Atos 18:1-4; Atos 16:12 e 16:16-24; Atos 11:25-26.

Explicações distinguem visita dos magos e outros relatos, nascimento e criação de Jesus, Samaria como região e Sicar como cidade, destino de Saulo e encontro no caminho, origem anterior de Áquila e Priscila e encontro em Corinto, Tarso e Antioquia. Incluídos os versículos que nomeiam Éfeso e Filipos, ausentes das referências anteriores. Não adicionadas coordenadas modernas ou identificação arqueológica controversa.

Validação: conteúdo, 21 testes, lint, TypeScript e build aprovados. Novo teste preserva IDs e respostas, verifica alternativas únicas e todas as seções das referências e protege as duas correções de enunciado. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Evidências: `tmp/audit-2026-10-07/quiz-lugares-20261008-validation.json` e `quiz-lugares-20261008-375.png`. Teste com `AUDIT_QUIZ_TOPIC=lugares-da-biblia`.

Progresso: sete primeiras jornadas revisadas localmente, total 86 perguntas. Próximo: primeira jornada de Igreja Primitiva. Demais jornadas, introduções temáticas, outros jogos e conferência pelo responsável continuam pendentes. Nada foi publicado.

## Igreja Primitiva: primeira jornada — 08/10/2026

Rota: `/quiz-biblico/igreja-primitiva`. Revisados 12 itens, IDs 171 a 182, em `src/data/quizQuestionExpansions.ts`. Respostas, alternativas, enunciados, IDs e ordem preservados. Explicações ampliadas apenas para contextualizar os fatos perguntados; referências longas substituídas por trechos que permitem conferir a resposta.

Passagens conferidas na base local: Atos 1:6-8; 1:21-26; 2:1-4; 2:14-18; 2:42-47; 3:1-10; 5:1-9; 6:1-6; 6:5, 7:1-2 e 7:54-60; 8:1-4; 8:26-35; 10:1-2 e 10:23-27.

Explicações distinguem poder para testemunhar e promessa de ausência de perseguição, candidato e escolhido na substituição de Judas, Pedro e os demais apóstolos, nome da Porta Formosa e identificação arqueológica, mentira de Ananias e Safira e liberdade de dispor dos bens, tarefa dos sete e substituição dos apóstolos, dispersão dos discípulos e permanência dos apóstolos, dúvida do oficial e explicação de Filipe, Jope e Cesareia. Referência de Estêvão reúne sua escolha, início do discurso e desfecho, sem afirmar que esses trechos substituem o discurso completo.

Validação: conteúdo, 22 testes, lint, TypeScript e build aprovados. Novo teste preserva os 12 IDs, verifica alternativas únicas e todas as seções das referências e protege a distinção sobre a mentira da oferta. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Evidências: `tmp/audit-2026-10-07/quiz-igreja-20261008-validation.json` e `quiz-igreja-20261008-375.png`. Teste com `AUDIT_QUIZ_TOPIC=igreja-primitiva`.

Progresso: primeiras jornadas dos oito temas revisadas localmente, total 98 das 290 perguntas. Restam 192 perguntas das outras jornadas, introduções temáticas, outros jogos e conferência pelo responsável. Próximo passo: segunda jornada do quiz geral. A etapa dos jogos e o plano completo ainda não estão concluídos. Nada foi publicado; sem garantia de aprovação no AdSense.

## Quiz geral: segunda jornada — 08/10/2026

Rota: `/quiz-biblico?jornada=2`. Revisados 12 itens, IDs 51 a 62, em `src/data/quizQuestionExpansions.ts`. Respostas, alternativas, IDs e ordem preservados. Três enunciados delimitados: organização da seção dos Profetas, último livro do Antigo Testamento na edição do quiz e atribuição tradicional de Lucas e Atos.

Passagens conferidas na base local: Êxodo 12:31-42; Salmos 13:1-6 e 100:1-5; Mateus 1:1-6; Atos 1:1-8; Isaías 1:1-4; Josué 1:1-6; 1 Coríntios 13; Malaquias 1:1-5; Rute 1:14-18; Neemias 2:17-18 e 6:15-16; Lucas 1:1-4 e Atos 1:1-2; Apocalipse 1:10-11 e 2:1-7. Preservado 1 Coríntios 13 inteiro por ser curto e diretamente relacionado ao assunto perguntado.

Perguntas de organização apontam o índice como fonte; passagens selecionadas contextualizam os livros, sem provar sua posição. Exemplos de Salmos mostram lamento e louvor. Distinguida a atribuição tradicional de Lucas da ligação textual das introduções, que não nomeiam o autor. Consultadas [introdução de Lucas da USCCB](https://bible.usccb.org/bible/luke/0?bk=Luke&ch=), [introdução de Atos](https://bible.usccb.org/bible/acts/0) e [índice organizado dos livros](https://bible.usccb.org/bible?orderby=0). Não introduzida cronologia de autoria, interpretação escatológica das sete igrejas ou aconselhamento de relacionamentos.

Validação: conteúdo, 23 testes, lint, TypeScript e build aprovados. Novo teste cobre IDs, respostas, alternativas únicas, todas as seções de referências e delimitação da atribuição tradicional. Teste de navegador admite segunda jornada geral com `AUDIT_QUIZ_JOURNEY=2`, preservando evidências separadas. HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, leitura de todas as referências e fechamento por Escape, sem erros de JavaScript. Evidências: `tmp/audit-2026-10-07/quiz-geral-jornada2-20261008-validation.json` e `quiz-geral-jornada2-20261008-375.png`.

Progresso: 110 de 290 perguntas revisadas localmente; restam 180. Próximo: segunda jornada de Antigo Testamento. Introduções temáticas, outros jogos e conferência pelo responsável continuam pendentes. Nada foi publicado.

## Antigo Testamento: segunda jornada — 08/10/2026

Revisados IDs 63 a 74 em `src/data/quizQuestionExpansions.ts`. Respostas, alternativas, IDs e ordem preservados. Três enunciados ajustados: cesto de Moisés à margem do rio, nome do mar conforme a tradução do leitor e unção/apresentação de Saul em 1 Samuel 10.

Passagens conferidas na base local: Gênesis 9:8-17; 32:24-30; Êxodo 2:1-10; 13:18 e 14:21-22; Josué 2:1-6; Juízes 15:14-20; 1 Samuel 10:1 e 10:17-24; 2 Reis 2:9-12; 20:1-6; Daniel 3:16-23; Ezequiel 37:1-14; Jonas 3:1-10.

Explicações distinguem sinal da aliança e ausência de inundações locais, Israel como nome e Peniel como lugar, cesto entre os juncos e correnteza, tradução e coordenadas modernas, carro que separa os profetas e redemoinho em que Elias sobe, anúncio da morte de Ezequias e diagnóstico de enfermidade. Grafia Abednego/Abede-Nego esclarecida; visão dos ossos situada pela explicação sobre Israel no próprio texto. Cura, força e respostas de personagens não apresentadas como garantias pessoais ou recomendações de imitar violência.

Conteúdo, 24 testes, lint, TypeScript e build aprovados. Teste protege IDs, respostas e resolução de todas as seções das referências. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Evidências: `tmp/audit-2026-10-07/quiz-antigo-jornada2-20261008-validation.json` e `quiz-antigo-jornada2-20261008-375.png`.

Progresso: 122 de 290 perguntas revisadas localmente; restam 168. Próximo: segunda jornada de Jesus e Evangelhos. Conferência pelo responsável, introduções temáticas e outros jogos continuam pendentes. Nada foi publicado.

## Jesus e Evangelhos: segunda jornada — 08/10/2026

Revisados IDs 75 a 86 em `src/data/quizQuestionExpansions.ts`. Respostas, alternativas, IDs e ordem preservados. Três enunciados delimitados: local inicial do relato da tentação em Mateus 4, Simão obrigado a carregar a cruz segundo Marcos e expressão novo mandamento em João 13.

Passagens conferidas na base local: Mateus 3:1-6; 4:1-11; 9:9-13; Lucas 15:17-24; Mateus 14:28-33; João 11:1 e 11:38-44; João 13:1-17; Marcos 15:21-22; Mateus 27:57-61; Lucas 24:13-18; João 13:34-35; Lucas 22:39-46.

Explicações distinguem início no deserto e outros locais da tentação, ofício de Mateus e grupo dos fariseus, retorno do filho e narrativa completa com o irmão mais velho, pedido de Pedro e socorro de Jesus, localização de Lázaro e cena do túmulo, ceia anterior à prisão e Emaús, obrigação de Simão e oferta voluntária, autorização de Pilatos e sepultamento por José, destino Emaús e origem Jerusalém. Retirado Getsêmani da explicação apoiada apenas em Lucas 22, que nomeia o Monte das Oliveiras. Não acrescentada cronologia harmonizada entre Evangelhos nem interpretação denominacional do gesto de lavar os pés.

Conteúdo, 25 testes, lint, TypeScript e build aprovados. Novo teste cobre IDs, respostas, alternativas únicas, todas as seções de referências e delimitação da tentação. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Evidências: `tmp/audit-2026-10-07/quiz-evangelhos-jornada2-20261008-validation.json` e `quiz-evangelhos-jornada2-20261008-375.png`.

Progresso: 134 de 290 perguntas revisadas localmente; restam 156. Próximo: segunda jornada de Personagens bíblicos. Conferência pelo responsável, introduções temáticas e outros jogos continuam pendentes. Nada foi publicado.

## Personagens bíblicos: segunda jornada — 08/10/2026

Revisados IDs 87 a 98 em `src/data/quizQuestionExpansions.ts`. Respostas, alternativas, IDs e ordem preservados. Corrigida a sequência do enunciado de Abigail: aconselha Davi antes da morte de Nabal. Delimitados outros três enunciados: unção de Davi entre os filhos de Jessé, sonho explicado por Daniel em Daniel 2 e Timóteo como acompanhante escolhido em Atos 16 e destinatário de carta.

Passagens conferidas na base local: Gênesis 21:1-7; Êxodo 4:14-16 e 28:1; Josué 1:1-9; Rute 1:16-18; 1 Samuel 16:10-13; 25:23-35; Daniel 2:26-30; Ester 7:1-6; Lucas 1:26-33; 1:5 e 1:57-63; Atos 1:21-26; Atos 16:1-5 e 1 Timóteo 1:1-2.

Explicações distinguem mãe de Isaque e etapa posterior de sua história, parentesco e função de Arão, sucessão imediata de Moisés e líderes posteriores, unção de Davi e início do reinado, intervenção de Abigail e morte posterior de Nabal, Daniel/Beltessazar e origem atribuída à revelação, anúncio a Maria e anúncio a Zacarias, pais de João e escolha de seu nome, candidato e escolhido entre os apóstolos, filho na fé e parentesco biológico. Nenhuma orientação de colocar-se em perigo a partir do episódio de Abigail foi acrescentada.

Conteúdo, 26 testes, lint, TypeScript e build aprovados. Novo teste preserva IDs, respostas, alternativas únicas e todas as seções das referências, protegendo a cronologia de Abigail. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Evidências: `tmp/audit-2026-10-07/quiz-personagens-jornada2-20261008-validation.json` e `quiz-personagens-jornada2-20261008-375.png`.

Progresso: 146 de 290 perguntas revisadas localmente; restam 144. Próximo: segunda jornada de Mulheres da Bíblia. Conferência pelo responsável, introduções temáticas e outros jogos continuam pendentes. Nada foi publicado.

## Mulheres da Bíblia: segunda jornada — 08/10/2026

Revisados IDs 111 a 122 em `src/data/quizQuestionExpansions.ts`. Respostas, alternativas, IDs e ordem preservados. Quatro enunciados delimitados: Marta na cena de Lucas 10, afirmação de Lucas sobre Maria Madalena, lugar do encontro de Lídia e fé de Loide e Eunice no versículo indicado.

Passagens conferidas na base local: Lucas 1:39-45 e 1:56; Lucas 1:5 e 1:11-13; Lucas 2:36-38; Lucas 10:38-42; João 12:1-3; Lucas 8:1-3; João 4:4-9 e 4:39-42; Atos 18:24-26; Atos 16:11-15; Atos 9:36-39; Romanos 16:1-2; 2 Timóteo 1:5.

Distinguida Maria, mãe de Jesus, de Maria Madalena e de Maria de Betânia; Ana da apresentação de Jesus e mãe de Samuel; Tabita e Dorcas como nomes da mesma pessoa; Filipos como local do encontro e Tiatira como origem de Lídia. Não atribuída a Lucas 10 a identificação de Betânia, ausente do trecho. Texto de Loide e Eunice não tratado como transmissão automática de crença; recomendação de Febe mantida sem decidir questões denominacionais de títulos e cargos. Enunciado de Lídia não depende de detalhe de margem do rio que a edição local não explicita em Atos 16:13.

Conteúdo, 27 testes, lint, TypeScript e build aprovados. Novo teste preserva IDs e respostas, verifica alternativas únicas e todas as seções das referências. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Evidências: `tmp/audit-2026-10-07/quiz-mulheres-jornada2-20261008-validation.json` e `quiz-mulheres-jornada2-20261008-375.png`.

Progresso: 158 de 290 perguntas revisadas localmente; restam 132. Próximo: segunda jornada de Parábolas de Jesus. Conferência pelo responsável, introduções temáticas e outros jogos continuam pendentes. Nada foi publicado.

## Parábolas de Jesus: segunda jornada — 08/10/2026

Revisados IDs 135 a 146 em `src/data/quizQuestionExpansions.ts`. Respostas, enunciados, IDs e ordem preservados. Corrigida apenas a gramática de uma alternativa incorreta no item 141: Vendiam a rede passou a Vendem a rede, mantendo seu significado e posição.

Passagens conferidas na base local: Mateus 13:18-23; 13:24-30; 13:31-32; 13:33; 13:44; 13:45-46; 13:47-50; 25:1-13; 25:14-18 e 25:24-25; 20:1-9; 5:14-16; 7:24-27.

Explicações diferenciam imagem e explicação do semeador, semeadura do inimigo e separação na colheita, cena da mostarda e classificação botânica, localização do tesouro e compra do campo, busca do negociante e encontro do tesouro, ação dos pescadores e aplicação da rede, preparação das jovens e sono de todas, talento como dinheiro e habilidade no sentido moderno, décima primeira hora e relógio moderno, velador da alternativa e luminária na edição do leitor. Casas enfrentam dificuldades em ambas as situações; a firmeza não foi apresentada como ausência de dificuldades. Não acrescentadas interpretações escatológicas, financeiras ou alegorias não necessárias às respostas.

Conteúdo, 28 testes, lint, TypeScript e build aprovados. Novo teste protege IDs, respostas, alternativas únicas e todas as seções das referências. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Evidências: `tmp/audit-2026-10-07/quiz-parabolas-jornada2-20261008-validation.json` e `quiz-parabolas-jornada2-20261008-375.png`.

Progresso: 170 de 290 perguntas revisadas localmente; restam 120. Próximo: segunda jornada de Lugares da Bíblia. Conferência pelo responsável, introduções temáticas e outros jogos continuam pendentes. Nada foi publicado.

## Lugares da Bíblia: segunda jornada — 08/10/2026

Revisados IDs 159 a 170 em `src/data/quizQuestionExpansions.ts`. Respostas, alternativas, IDs e ordem preservados. Corrigida a sequência do item 164: os discípulos retornam do Monte das Oliveiras após a ascensão, não saem com Jesus antes dela. Item 167 pergunta pela descrição do vale, pois o texto não lhe dá nome geográfico.

Passagens conferidas na base local: 2 Reis 5:10-14; Mateus 4:18-22; Deuteronômio 34:1-5; Gênesis 8:1-5; 2 Crônicas 3:1-2; Atos 1:9-12; Mateus 3:1-6; 1 Reis 17:2-7; Ezequiel 37:1-14; Números 13:23-24; Josué 3:14-17; Gênesis 2:8-15.

Explicações diferenciam rio solicitado a Naamã e rios de sua objeção, Nebo e Sinai, montes de Ararate e pico específico, local preparado por Davi e construção por Salomão, público de João e lugar de pregação, Querite e Jordão, descrição do vale e identificação geográfica, travessia do Jordão e travessia do mar, jardim nomeado e coordenadas modernas. Não acrescentadas alegações arqueológicas ou promessa de tratamento por banho no Jordão.

Conteúdo, 29 testes, lint, TypeScript e build aprovados. Novo teste preserva IDs e respostas, verifica alternativas únicas e todas as seções das referências e protege a sequência após a ascensão. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Evidências: `tmp/audit-2026-10-07/quiz-lugares-jornada2-20261008-validation.json` e `quiz-lugares-jornada2-20261008-375.png`.

Progresso: 182 de 290 perguntas revisadas localmente; restam 108. Próximo: segunda jornada de Igreja Primitiva. Conferência pelo responsável, introduções temáticas e outros jogos continuam pendentes. Nada foi publicado.

## Igreja Primitiva: segunda jornada — 08/10/2026

Revisados IDs 183 a 194 em `src/data/quizQuestionExpansions.ts`. Respostas, alternativas, IDs e ordem preservados. Dois enunciados ajustados: Ananias impõe as mãos sobre Saulo no trecho citado, e a escolha de Timóteo não depende de idade não informada nessa passagem.

Passagens conferidas na base local: Atos 9:10-19; 9:26-28; 13:1-3; 14:8-18; 15:1-29; 16:12 e 16:19-25; 16:1-5; 17:16-34; 18:18-21; 19:23-41; 27:39-44 e 28:1; 28:14-16 e 28:30-31.

Explicações distinguem os dois personagens chamados Ananias, nome Barnabé e variante Barnabás do leitor, comunidade de envio e destinos da viagem, cura em Listra e recusa de sacrifícios, assunto da reunião de Jerusalém e práticas denominacionais atuais, reações distintas ao discurso em Atenas, permanência do casal em Éfeso e continuação da viagem de Paulo, Ártemis e Diana na edição local, naufrágio e identificação de Malta, encerramento de Atos e permanência de Paulo sob guarda. Não acrescentada narrativa de sua morte ou liberação ausente do encerramento do livro.

Conteúdo, 30 testes, lint, TypeScript e build aprovados. Novo teste protege IDs, respostas, alternativas únicas e todas as seções das referências, além da ação de Ananias e situação de Paulo em Roma. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, rodada completa de 12 acertos, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Evidências: `tmp/audit-2026-10-07/quiz-igreja-jornada2-20261008-validation.json` e `quiz-igreja-jornada2-20261008-375.png`.

Progresso: 194 de 290 perguntas revisadas localmente; primeiras e segundas jornadas completas. Restam 96 perguntas da terceira jornada. Próximo: terceira jornada de Geral. Conferência pelo responsável, introduções temáticas e outros jogos continuam pendentes. Nada foi publicado.

## Geral: terceira jornada — 08/10/2026

Revisados IDs 195 a 206 em `src/data/quizQuestionJourneyThree.ts`. Respostas, alternativas, IDs e ordem preservados. Quatro enunciados delimitados: pedido de Paulo em Filemom, viagem de Esdras no sétimo ano de Artaxerxes, apresentação de Amós entre os pastores e expressões específicas de Hebreus sobre a palavra de Deus. Evitada ambiguidade com Neemias e com a espada de Efésios.

Passagens conferidas na base local: Eclesiastes 3:1-8; Filemom 1:8-21; Esdras 7:6-10; Amós 1:1; Hebreus 4:12-13; Lamentações 1:1-5 e 3:21-24; Tiago 2:14-26; Efésios 6:10-18; Ezequiel 1:1-28; Gálatas 5:16-25; Hebreus 4:14-16; 1 Crônicas 4:9-10.

Explicações distinguem reflexão sobre os tempos e previsão pessoal, pedido de recepção de Onésimo e desfecho não narrado, viagem de Esdras e outras cenas de ensino, identificação inicial de Amós e data moderna não informada, imagem da espada em Hebreus e em Efésios, lamento e esperança, exemplo concreto de cuidado em Tiago, armadura figurada e violência contra pessoas, visão de Ezequiel e descrição tecnológica moderna, fruto do Espírito e pontuação do caráter, oração de Jabez e fórmula de prosperidade. Não acrescentadas garantias de riqueza, ausência de sofrimento ou avaliação da fé do jogador.

Conteúdo, 31 testes, lint, TypeScript e build aprovados. Novo teste protege IDs, respostas, alternativas únicas, todas as seções das referências e enunciados delimitados. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Log de erros do servidor vazio. Evidências: `tmp/audit-2026-10-07/quiz-geral-jornada3-20261008-validation.json` e `quiz-geral-jornada3-20261008-375.png`.

Progresso: 206 de 290 perguntas revisadas localmente; restam 84. Próximo: terceira jornada de Antigo Testamento. Conferência pelo responsável, introduções temáticas e outros jogos continuam pendentes. Nada foi publicado.

## Antigo Testamento: terceira jornada — 08/10/2026

Revisados IDs 207 a 218 em `src/data/quizQuestionJourneyThree.ts`. Respostas, alternativas, IDs e ordem preservados. Quatro enunciados ajustados: nome Abrão na saída de Harã, contagem dos filhos homens da lista de Gênesis 35, identificação de Josué segundo o relato e desfecho de Jó sem sugerir o retorno à vida de seus filhos anteriores.

Passagens conferidas na base local: Gênesis 11:1-9; 12:4-5 e 13:5-12; 24:58-67; 35:22-26 e 49:28; Números 22:21-35; Josué 10:6-14; Juízes 3:12-15 e 3:27-30; 6:36-40; 1 Samuel 18:1-4 e 20:12-17; 2 Reis 6:1-7; Jó 42:7-17; Daniel 5:1-5, 5:12-13 e 5:25-30.

Explicações distinguem nome de Babel e altura de construção, Abrão e Abraão, acompanhante da viagem de Rebeca e marido, lista de filhos homens e outras contagens das tribos, Balaão e Balaque, narrativa de Josué e explicação astronômica, Eúde e Eglom, velo de lã e vasilha, aliança de Jônatas e ação concreta de lealdade, Eliseu e Elias, desfecho de Jó e promessa de compensação universal, Belsazar e Beltessazar. Em Eúde, referências selecionadas preservam identidade e desfecho sem os detalhes violentos intermediários. Não removida a pergunta. Não apresentada a experiência de Gideão como método obrigatório de decisão.

Conteúdo, 32 testes, lint, TypeScript e build aprovados. Novo teste protege IDs, respostas, alternativas únicas, todas as seções das referências e os esclarecimentos sobre Jacó e Jó. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Log de erros do servidor vazio. Evidências: `tmp/audit-2026-10-07/quiz-antigo-jornada3-20261008-validation.json` e `quiz-antigo-jornada3-20261008-375.png`.

Progresso: 218 de 290 perguntas revisadas localmente; restam 72. Próximo: terceira jornada de Jesus e Evangelhos. Conferência pelo responsável, introduções temáticas e outros jogos continuam pendentes. Nada foi publicado.

## Jesus e Evangelhos: terceira jornada — 08/10/2026

Revisados IDs 219 a 230 em `src/data/quizQuestionJourneyThree.ts`. Respostas, alternativas, IDs, ordem e referências preservados. Oito enunciados ajustados: declaração de João Batista sem gesto não descrito, pedido de Jairo conforme Marcos, carregadores do homem sem relação de amizade afirmada, orientação sobre a moeda em vez de execução não narrada, dez homens na cena de Lucas, servo curado segundo Lucas, título dentro da inscrição conforme João e pesca específica de João 21.

Passagens conferidas na base local: Lucas 2:41-52; João 1:29-37; Marcos 5:21-43; Marcos 2:1-12; Mateus 17:1-8; Mateus 17:24-27; Lucas 17:11-19; Marcos 10:46-52; Lucas 22:47-53; João 19:19-22; João 21:1-14; Lucas 24:44-53.

Explicações distinguem templo em Jerusalém e volta a Nazaré, João Batista e nome do evangelho, pedido de Jairo e notícia posterior, carregadores sem nomes e proprietário não identificado, discípulos e Moisés/Elias na transfiguração, moeda prevista e pagamento não narrado, dez beneficiados e um agradecimento, cena de Bartimeu na saída de Jericó, função do servo e nomes ausentes de Lucas, título pedido e inscrição inteira, contagem de peixes e simbolismo não explicado, Jerusalém como cidade da espera e Betânia na despedida. Não acrescentados nomes, diagnóstico médico moderno, nome do monte da transfiguração ou promessa de cura universal.

Conteúdo, 33 testes, lint, TypeScript e build aprovados. Novo teste protege IDs, respostas, alternativas únicas, todas as seções das referências e a distinção entre orientação e ação narrada na moeda. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Log de erros do servidor vazio. Evidências: `tmp/audit-2026-10-07/quiz-evangelhos-jornada3-20261008-validation.json` e `quiz-evangelhos-jornada3-20261008-375.png`.

Progresso: 230 de 290 perguntas revisadas localmente; restam 60. Próximo: terceira jornada de Personagens bíblicos. Conferência pelo responsável, introduções temáticas e outros jogos continuam pendentes. Nada foi publicado.

## Personagens bíblicos: terceira jornada — 08/10/2026

Revisados IDs 231 a 242 em `src/data/quizQuestionJourneyThree.ts`. Respostas, alternativas, IDs e ordem preservados. Enunciado de Bezalel delimitado pela tribo e pelos trabalhos nomeados em Êxodo 31, sem sugerir atuação solitária.

Passagens conferidas na base local: Gênesis 14:17-20; Êxodo 18:1-5 e 18:13-27; Êxodo 31:1-11; Números 13:25-33 e 14:6-9; Josué 7:1 e 7:19-23; Rute 4:13-22; 2 Samuel 12:1-9 e 12:13; 2 Reis 5:1-14; Neemias 8:1-12; Ester 3:1-6; Lucas 2:25-35; Atos 20:5-12.

Explicações distinguem Melquisedeque e rei de Sodoma, nome Abrão e Abraão, delegação de Moisés e manutenção dos casos difíceis, Bezalel e equipe com Aoliabe, resposta de Calebe e Josué e informações observadas, confissão de Acã e localização dos objetos, Boaz como bisavô e Obede como avô, cordeirinha da história de Natã e ação literal de Davi, mensageiro de Eliseu e resistência de Naamã, escriba Esdras e governador Neemias, Mordecai e variante Mardoqueu, Simeão e José, queda de Êutico e desfecho vivo. Não atribuídos idade ou sacerdócio a Simeão, idade exata a Êutico ou benefício médico ao banho no Jordão.

Referências de Jetro e Êutico incluem explicitamente seus dados de identificação; Trôade está no versículo 5 da edição local, não no 6. Em Acã e Natã, a seleção mantém identificação, confissão e confronto sem exigir a exibição dos trechos posteriores mais sensíveis; perguntas não removidas.

Conteúdo, 34 testes, lint, TypeScript e build aprovados na versão final. Novo teste protege IDs, respostas, alternativas únicas, todas as seções das referências, trabalho de Aoliabe, sequência familiar de Boaz e presença de Trôade na referência. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Log de erros do servidor vazio. Evidências: `tmp/audit-2026-10-07/quiz-personagens-jornada3-20261008-validation.json` e `quiz-personagens-jornada3-20261008-375.png`.

Progresso: 242 de 290 perguntas revisadas localmente; restam 48. Próximo: terceira jornada de Mulheres da Bíblia. Conferência pelo responsável, introduções temáticas e outros jogos continuam pendentes. Nada foi publicado.

## Mulheres da Bíblia: terceira jornada — 08/10/2026

Revisados IDs 243 a 254 em `src/data/quizQuestionJourneyThree.ts`. Respostas, alternativas, IDs e ordem preservados. Dois enunciados ajustados: Zípora identificada conforme o nome Reuel usado na passagem e Jael pela oferta de leite a Sísera, sem exigir o desfecho violento para reconhecer a personagem.

Passagens conferidas na base local: Êxodo 2:1-10, 6:20 e Números 26:59; Êxodo 2:15-22; Números 27:1-11; Juízes 4:17-20; Juízes 16:4-6 e 16:15-18; Rute 1:19-22; 2 Samuel 12:24-25 e 1 Reis 1:11-31; 1 Reis 17:8-16; 2 Reis 4:8-17; 1 Reis 10:1-13; Lucas 8:1-3; Atos 12:12-17.

Explicações distinguem mãe não nomeada na cena de Moisés e genealogias que identificam Joquebede e seus filhos, Reuel no trecho do casamento, filhas de Zelofeade e regra narrada em Israel, Jael e Débora, condição de nazireu de Sansão e mera extensão do cabelo, Noemi e nome Mara solicitado, reafirmação da sucessão de Salomão e cerimônia posterior, viúva que acolhe Elias e sunamita que acolhe Eliseu, designação pelo reino ou cidade e nome pessoal não informado, Joana e outras contribuintes, reconhecimento da voz por Rode e abertura posterior da porta. Não acrescentadas idades, valores de contribuições, regra legal moderna ou promessa material universal.

Perguntas não removidas. Referências de Jael e Dalila foram selecionadas para confirmar identidade e ação perguntada sem exigir os detalhes violentos posteriores; a explicação de Jael informa esse recorte.

Conteúdo, 35 testes, lint, TypeScript e build aprovados. Novo teste protege IDs, respostas, alternativas únicas, todas as seções das referências e os enunciados de Reuel e Jael. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Log de erros do servidor vazio. Evidências: `tmp/audit-2026-10-07/quiz-mulheres-jornada3-20261008-validation.json` e `quiz-mulheres-jornada3-20261008-375.png`.

Progresso: 254 de 290 perguntas revisadas localmente; restam 36. Próximo: terceira jornada de Parábolas de Jesus. Conferência pelo responsável, introduções temáticas e outros jogos continuam pendentes. Nada foi publicado.

## Parábolas de Jesus: terceira jornada — 08/10/2026

Revisados IDs 255 a 266 em `src/data/quizQuestionJourneyThree.ts`. IDs, ordem e posição das respostas corretas preservados. Dois enunciados ajustados: sequência dos lavradores conforme Mateus e autoridade recebida pelo homem nobre no retorno. Na questão 264, alternativas passaram de finalidades da viagem a objetos recebidos, acompanhando a nova pergunta: Uma vinha, Autoridade real, O perdão de uma dívida, Novos trabalhadores. Autoridade real permanece correta na segunda posição. Demais alternativas e respostas preservadas.

Passagens conferidas na base local: Mateus 21:33-46; Lucas 13:6-9; 11:5-13; 12:35-40; 12:41-44; 14:7-11; 14:15-24; 14:28-33; 16:1-9; 19:11-15; Marcos 4:26-29; Mateus 9:14-17.

Explicações distinguem lavradores da história e destinatários do confronto, pedido de prazo para a figueira e resultado não narrado, três pães e quantidade de orações, preparação dos servos e previsão de data, função de mordomo e tarefa arbitrária, lugar escolhido e convite do anfitrião, desculpa de casamento e casamento em si, cálculo de custo e compromisso do discípulo, elogio à prudência e aprovação de falsificação, autoridade no retorno e recursos entregues aos servos, rotina do agricultor e ausência completa de trabalho, vinho novo e odres novos no contexto do jejum. Corrigido romperaria para romperia.

Na edição local, Lucas 19:12 não explicita o propósito de receber o reino na partida; o versículo 15 registra o retorno tendo tomado o reino. Pergunta e resposta foram ancoradas nesse dado disponível no leitor. Recortes de Lucas 12, 14 e 19 mantêm o conteúdo necessário às perguntas e explicações sem exigir trechos posteriores mais sensíveis. Nenhuma pergunta removida.

Conteúdo, 36 testes, lint, TypeScript e build aprovados. Novo teste protege IDs, respostas na redação final, alternativas únicas, todas as seções das referências e autoridade no retorno. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Log de erros do servidor vazio. Evidências: `tmp/audit-2026-10-07/quiz-parabolas-jornada3-20261008-validation.json` e `quiz-parabolas-jornada3-20261008-375.png`.

Progresso: 266 de 290 perguntas revisadas localmente; restam 24. Próximo: terceira jornada de Lugares da Bíblia. Conferência pelo responsável, introduções temáticas e outros jogos continuam pendentes. Nada foi publicado.

## Lugares da Bíblia: terceira jornada — 09/10/2026

Revisados IDs 267 a 278 em `src/data/quizQuestionJourneyThree.ts`. Respostas, alternativas, IDs e ordem preservados. Dois enunciados delimitados pelos trechos: partida de Abrão de Harã segundo Gênesis 12:4-5 e acampamento de Saul no vale de Elá segundo 1 Samuel 17:1-3. Não atribuído ao trecho inicial do vale o relato posterior dos desafios de Golias e participação de Davi.

Passagens conferidas na base local: Gênesis 11:27-32; 12:1-5; 28:10-22; 32:22-32; 1 Samuel 17:1-3; Ester 1:1-9; Mateus 16:13-17; João 19:16-18; Apocalipse 1:9-11; Atos 21:37-39 e 22:3; Atos 17:10-12; Atos 20:15-18, 20:28 e 20:36-38.

Explicações distinguem Ur e Harã como etapas, Harã pessoa e lugar, nomes Abrão/Sarai na narrativa, Luz e Betel, nome Israel e lugar Peniel, posição dos exércitos e eventos posteriores, Susã como fortaleza e banquetes distintos, Cesareia de Filipe e Cesareia de outra visita, Gólgota como local nomeado sem aparência presumida, ilha de Patmos e cidades destinatárias, Tarso cidade e Cilícia região, exame das Escrituras em Bereia e comparação com Tessalônica, origem dos líderes em Éfeso e encontro em Mileto. Não acrescentadas coordenadas arqueológicas, data moderna de Apocalipse ou identidade adicional de João não dada no trecho.

Referências de Cesareia de Filipe e Mileto foram delimitadas para acompanhar as informações usadas nas perguntas e explicações. Nenhuma pergunta removida. Roteiro de navegador aceita data de evidência via AUDIT_DATE; evidências desta etapa datadas de 09/10/2026, preservando arquivos anteriores.

Conteúdo, 37 testes, lint, TypeScript e build aprovados. Novo teste protege IDs, respostas, alternativas únicas, todas as seções das referências e distinções de partida e reunião. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Log de erros do servidor vazio. Evidências: `tmp/audit-2026-10-07/quiz-lugares-jornada3-20261009-validation.json` e `quiz-lugares-jornada3-20261009-375.png`.

Progresso: 278 de 290 perguntas revisadas localmente; restam 12. Próximo: terceira jornada de Igreja Primitiva. Conferência pelo responsável, introduções temáticas e outros jogos continuam pendentes. Nada foi publicado.

## Igreja Primitiva: terceira jornada — 09/10/2026

Revisados IDs 279 a 290 em `src/data/quizQuestionJourneyThree.ts`. Respostas, alternativas, IDs e ordem preservados. Quatro enunciados delimitados: ouvintes das regiões em Atos 2, prioridade de obediência no conflito de Atos 5, libertação específica de Atos 5:19 e fome que o narrador situa no tempo de Cláudio César.

Passagens conferidas na base local: Atos 2:1-12; 2:37-41; 5:27-32; 5:17-25; 8:9-24; 9:23-25; 9:36-43; 10:1-8; 11:27-30; 12:1-5; 13:4-12; 23:12-22.

Explicações distinguem fala em outras línguas e compreensão dos ouvintes, quase três mil acrescentados e total de ouvintes não informado, prioridade de obediência e sequência de atos, libertação dos apóstolos e outras prisões, Simão de Samaria e Simão Pedro, cesto e passagem por portas vigiadas, nomes Tabita/Dorcas e cidades Lida/Jope, função militar de Cornélio e envio de mensageiros, anúncio de Ágabo e transporte do auxílio por Barnabé/Saulo, Tiago irmão de João e homônimos, nomes Barjesus/Elimas e anúncio de cegueira temporária sem recuperação narrada, sobrinho sem nome e centurião que o conduz ao comandante. Não acrescentadas idades, dimensões do cesto, práticas denominacionais obrigatórias ou licença genérica de desobediência.

Referência do Pentecostes ampliada para incluir a declaração de que começaram a falar em outras línguas, além da reação da multidão. Nenhuma pergunta removida.

Conteúdo, 38 testes, lint, TypeScript e build aprovados. Novo teste protege IDs, respostas, alternativas únicas, todas as seções das referências e os episódios delimitados. Navegador: HTTP 200, um H1, exemplos sem JavaScript, seis larguras sem overflow, 12 acertos até o resultado, todas as referências abertas e fechamento por Escape, sem erros de JavaScript. Log de erros do servidor vazio. Evidências: `tmp/audit-2026-10-07/quiz-igreja-jornada3-20261009-validation.json` e `quiz-igreja-jornada3-20261009-375.png`.

Progresso: 290 de 290 perguntas revisadas localmente. As três jornadas dos oito temas passaram por revisão e validação individual nos registros acima. Isso não representa conferência humana pelo responsável nem garantia de aprovação no AdSense. Próximo: introdução e contexto editorial de Antigo Testamento; depois os demais temas e outros jogos. Etapa 4 permanece em andamento. Nada foi publicado.

## Antigo Testamento: introdução e contexto — 09/10/2026

Revisados somente os dados deste tema em `src/data/quizTopics.ts` e `src/data/quizTopicContext.ts`. Descrição, introdução, destaques, contexto e orientação final agora relacionam pessoas, lugares e ações dos episódios. Mantidos título, rota, layout, perguntas, respostas, FAQ e links relacionados. Sem mudanças em outros temas.

Substituídos os três resumos amplos por comparações concretas: entrega das tábuas a Moisés; mar em Êxodo e Jordão em Josué; templo de Salomão e muro reconstruído com Neemias e a comunidade. A introdução diferencia reconhecimento do episódio e compreensão de toda a narrativa, evitando garantias universais ou avaliação da fé pela pontuação. Os novos exemplos são apoio para leitura, não um panorama completo de todos os livros do Antigo Testamento.

Fontes conferidas na edição local: Êxodo 19:1-8; Êxodo 31:18; Deuteronômio 10:1-5; Êxodo 14:21-22; Josué 3:14-17; 1 Reis 6:1-2; Neemias 2:17-18; Neemias 6:15-16. As fontes estão visíveis junto a cada comparação. As 35 perguntas e três jornadas do tema permanecem intactas.

Conteúdo, 39 testes, lint, TypeScript e build aprovados. Novo teste confere referências completas e diferenças entre episódios, sem mínimo artificial de palavras. Roteiro de navegador passou a verificar a presença integral das introduções, descrições, referências e orientação final no HTML sem JavaScript. Na página de Antigo Testamento: seis larguras sem overflow, HTTP 200, um H1, textos editoriais completos presentes, primeira jornada concluída com 11 acertos, todas as referências abertas e fechadas por Escape, sem erros de JavaScript. Log de erros do servidor vazio.

Evidências: `tmp/audit-2026-10-07/quiz-antigo-20261009-validation.json` e `quiz-antigo-20261009-375.png`. Renderização sem JavaScript não é confirmação de indexação no Google. Não acessados Search Console ou AdSense e não publicada alteração.

Progresso: 290/290 perguntas revisadas localmente; introduções e contextos de 2/8 páginas revisados (Geral e Antigo Testamento). Próximo: Jesus e Evangelhos. Restam seis páginas temáticas, outros jogos e conferência pelo responsável. Etapa 4 em andamento.

## Jesus e Evangelhos: introdução e contexto — 09/10/2026

Revisados somente os dados deste tema em `src/data/quizTopics.ts` e `src/data/quizTopicContext.ts`: descrição, introdução, destaques, contexto e orientação final. Mantidos título, rota, layout, perguntas, respostas, FAQ e links relacionados. Sem mudança em outros temas.

Introdução conecta perguntas a cenas reais da base e distingue a informação de um momento da narrativa de notícias posteriores, usando Jairo. Contexto desenvolve três apoios: propósitos declarados em Lucas e João, orientação sobre a moeda em Mateus sem execução narrada, e diferença entre a fala inicial de Maria Madalena e seu anúncio posterior. Orientação final propõe observar quem fala, o que sabe naquele momento e o que é narrado depois, mantendo a origem dos detalhes de cada Evangelho.

Fontes conferidas na edição local: Lucas 1:1-4; João 20:30-31; Marcos 5:22-24 e 5:35-43; Mateus 17:24-27; João 20:1-2 e 20:11-18. Referências dos exemplos aparecem junto aos textos. Não acrescentadas harmonização obrigatória, autoria individual não declarada pelos trechos ou garantia universal de cura. As 37 perguntas e três jornadas permanecem intactas.

Conteúdo, 40 testes, lint, TypeScript e build aprovados. Novo teste confere as fontes e as distinções entre orientação e acontecimento e entre momentos da narrativa. Navegador: textos editoriais completos no HTML sem JavaScript, seis larguras sem overflow, HTTP 200, um H1 e exemplos comentados presentes. Primeira jornada concluída com 13 acertos, todas as referências abertas e fechadas por Escape, sem erros de JavaScript. Log de erros do servidor vazio.

Evidências: `tmp/audit-2026-10-07/quiz-evangelhos-20261009-validation.json` e `quiz-evangelhos-20261009-375.png`. Presença no HTML não confirma indexação pelo Google. Nada publicado; nenhum acesso a Search Console ou AdSense.

Progresso: 290/290 perguntas revisadas localmente; introduções e contextos de 3/8 páginas revisados (Geral, Antigo Testamento e Jesus e Evangelhos). Próximo: Personagens bíblicos. Restam cinco páginas temáticas, outros jogos e conferência pelo responsável. Etapa 4 em andamento.

## Personagens bíblicos: introdução e contexto — 09/10/2026

Revisados somente os dados deste tema em `src/data/quizTopics.ts` e `src/data/quizTopicContext.ts`: descrição, introdução, destaques, contexto e orientação final. Mantidos título, rota, layout, perguntas, respostas, FAQ e links relacionados. Sem mudanças em outros temas.

Substituídos resumos genéricos por três comparações: José de Gênesis e José chamado Barnabé, com contraste de Tabita/Dorcas como a mesma pessoa; sequência Boaz, Obede, Jessé e Davi; funções de Esdras, Neemias e dos levitas na leitura pública. Orientação final propõe ficha de identificação com dados explícitos, sem completar biografias ou tratar uma atitude como resumo de uma vida inteira.

Fontes conferidas na edição local: Gênesis 41:39-41; Atos 4:36-37; Atos 9:36-39; Rute 4:13-22; Neemias 8:1-9. As referências estão visíveis junto aos exemplos. Não atribuída toda ação ao personagem que dá título ao livro nem alterado parentesco pelo cuidado de Noemi com Obede. As 36 perguntas e três jornadas do tema permanecem intactas.

Conteúdo, 41 testes, lint, TypeScript e build aprovados. Novo teste confere fontes completas e distinções de nomes, genealogia e funções. Roteiro de navegador atualizado para o novo título da primeira seção. Navegador: textos editoriais completos presentes sem JavaScript, seis larguras sem overflow, HTTP 200, um H1 e exemplos comentados presentes. Primeira jornada concluída com 12 acertos, todas as referências abertas e fechadas por Escape, sem erros de JavaScript. Log de erros do servidor vazio.

Evidências: `tmp/audit-2026-10-07/quiz-personagens-20261009-validation.json` e `quiz-personagens-20261009-375.png`. Presença no HTML não confirma indexação pelo Google. Nada publicado e nenhum acesso a Search Console ou AdSense.

Progresso naquele ponto: 290/290 perguntas revisadas localmente; introduções e contextos de 4/8 páginas revisados (Geral, Antigo Testamento, Jesus e Evangelhos e Personagens bíblicos). A conclusão local está registrada a seguir.

## Fechamento local dos jogos: 09/10/2026

Concluídas as introduções e comparações textuais de Mulheres da Bíblia, Parábolas de Jesus, Lugares da Bíblia e Igreja Primitiva. As oito páginas agora têm três parágrafos introdutórios e exemplos próprios de contexto; nenhuma pergunta nova foi criada. Conferidos parentesco e cuidado em Rute, funções de Débora e Ester, contexto e desfecho das parábolas, partida e destino de viajantes e decisões coletivas em Atos. As fontes permanecem visíveis; o teste verifica a resolução das referências de todos os contextos.

As páginas de Memória, Ligue os Pares, Complete a Frase, Quem sou eu? e Modo Grupo receberam dois exemplos comentados cada, disponíveis sem jogar e no HTML sem JavaScript. São exercícios de conferência, não uma promessa da ordem da rodada. Memória distingue o símbolo da biografia inteira; Pares compara locais e ações; Frase mostra contexto e limites dos recortes; Quem sou eu? demonstra como diferenciar pistas compartilhadas; Grupo apresenta um placar fictício de 10 pontos por acerto e 5 no rebote.

Corrigidos: referência de Áquila que o leitor não reconhecia, inclusão do versículo 30 na referência de Marta, mistura dos momentos em que Jeoseba esconde Joás, afirmação não narrada sobre ausência de ferimentos no resgate de Jeremias, inferência sobre os sentimentos de Tomé, descrição de Malaquias 3:1 como encerramento do livro e pontuação da frase de João 14:6. A apresentação de Complete a Frase agora identifica trechos selecionados, sem prometer sempre o versículo inteiro. Links de Personagens e Mulheres apontam para jogos diretamente relacionados.

Validação: 44 testes de regressão, conteúdo, lint, TypeScript e build aprovados; textos completos dos oito contextos e dez exemplos dos cinco jogos conferidos sem JavaScript. Fluxos dos jogos até o resultado, retomada, leitura bíblica por teclado e entradas inválidas da API aprovados. As revisões anteriores das 290 perguntas e suas jornadas permanecem registradas acima.

Evidências adicionais: `.test-artifacts/audit/editorial-final-2026-10-09.json`, `browser-2026-10-09.json` e `flows.json`. Foram usados navegador local e terceiros bloqueados/simulados. Não houve revisão humana presumida, acesso às contas Google ou publicação. Etapa 4 concluída no escopo local; leitura e aprovação pelo responsável continuam pendentes.
