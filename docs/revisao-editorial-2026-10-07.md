# Item 2: revisão dos artigos

Trabalho iniciado em 7 de outubro de 2026. Revisão de um artigo por vez, com conferência do responsável antes de considerar o texto pronto para publicação.

## 1. Roteiro completo de célula em 60 minutos

Rota preservada: `/biblioteca/roteiro-completo-de-celula-em-60-minutos`.

Arquivo: `src/data/editorialContent.ts`.

Status: revisão local e validação técnica concluídas; conferência do responsável pendente. Não publicado.

### Problema tratado

O texto oferecia uma estrutura de horários, mas o visitante precisava criar a dinâmica, escolher a passagem e elaborar as perguntas. A revisão entrega uma sessão completa sobre pequenos gestos de bondade e gratidão, baseada em Colossenses 3:12-17.

### Entregas

- Preparação com materiais e disposição das pessoas.
- Cronograma de seis etapas consecutivas, do minuto 0 ao 60.
- Cinco situações fictícias prontas; duas são utilizadas na dinâmica de sete minutos.
- Contexto da leitura e indicação dos versículos a observar.
- Quatro perguntas com apoio para quem conduz, distinguindo observação do texto e aplicação proposta.
- Uma ação simples para a semana, exemplos de preenchimento e oração sugerida.
- Adaptações para grupos pequenos, maiores e tímidos, e para ajustar o tempo.
- Checklist final e referências de apoio.

O encontro foi proposto editorialmente; não foi apresentado como experiência aplicada a um grupo real. O tema evita pedir exposição de conflitos, dados financeiros ou experiências íntimas.

### Datas e estimativa

Somente este artigo recebeu `updatedAt` e `updatedAtISO` de 07/10/2026. A estimativa permaneceu em nove minutos após o corpo passar a aproximadamente 1.637 palavras, calculadas sobre introdução e seções, com referência aproximada de 200 palavras por minuto. A estimativa de leitura é diferente da duração do encontro.

A comparação das coleções exportadas com o Git confirmou que apenas este artigo mudou; o catálogo mantém 11 artigos. Título, slug e imagem foram preservados.

### Verificações

- Colossenses 3:12-17: os seis versículos foram conferidos na base bíblica local. O contexto anterior do capítulo também foi consultado.
- 1 Coríntios 14:26 e 14:40: conferidos como apoio para preparação e organização; o texto distingue esses princípios das escolhas práticas de tempo e formato.
- `npm run check`: validação estrutural, 12 testes, lint, TypeScript e build aprovados.
- Build final aprovado após recalcular a estimativa de leitura.
- Página em 320, 375, 768, 1024, 1280 e 1440 px: um H1, oito seções, âncoras válidas, imagem carregada, sem overflow horizontal ou erro de página.
- Conteúdo principal disponível no HTML inicial e leitura sem JavaScript confirmada em 320 px.
- Cronograma: intervalos contínuos e total exato de 60 minutos.
- Três links relacionados responderam 200 no servidor local.

Evidências: `tmp/audit-2026-10-07/editorial-roteiro-check.log`, `editorial-roteiro-build.log`, `roteiro-celula-validation.json` e capturas `roteiro-celula-375.png` / `roteiro-celula-1440.png`.

### Conferência do responsável

Ler a passagem na tradução de preferência e conferir a adequação das formulações ao propósito do projeto. Avaliar se as situações, o ritmo e a linguagem servem ao público pretendido. Essa etapa está pendente; a verificação automática da referência não substitui essa leitura.

## Segundo artigo: No lar: um roteiro com crianças

Rota preservada: `/biblioteca/culto-domestico-com-criancas`. Alterado apenas o conteúdo desse artigo nesta rodada, em `src/data/editorialContent.ts`; título e imagem preservados.

- Sessão executável de 15 minutos, com intervalos contínuos, baseada em Marcos 10:13-16.
- Preparação, perguntas com apoio ao adulto e jogo de quatro cenas com gabarito C, B, D, A.
- Contexto distingue acontecimentos registrados de aplicações propostas e detalhes não informados.
- Adaptações por idade, leitura assistida, opção de ouvir e versão de cinco minutos.
- Três encontros seguintes: Lucas 19:1-6, João 6:1-13 e revisão cooperativa das passagens. Evita encenação física, uso de objetos pequenos e promessas não sustentadas pelo texto.
- Referências conferidas na base local. A conferência humana do responsável e o teste prático com crianças continuam pendentes.
- Estimativa de 7 minutos de leitura: 1.377 palavras a aproximadamente 200 palavras por minuto, separada dos 15 minutos de aplicação. Data de revisão local atualizada.

`npm run check` aprovado com 13 testes, lint, TypeScript e build. Build final aprovado após corrigir a estimativa de leitura. Página HTTP 200, um H1, âncoras válidas, gabarito disponível sem JavaScript e sem overflow em 320, 375, 768, 1024, 1280 e 1440 px. `git diff --check` aprovado. Evidências: `tmp/audit-2026-10-07/no-lar-validation.json` e `no-lar-375.png`.

## Terceiro artigo: Jogos digitais: 7 formatos simples

Rota, título e imagem preservados: `/biblioteca/jogos-biblicos-sem-impressao`. Revisados os sete formatos com regras, duração sugerida, exemplos e apoio para a conferência. Diferenciados jogos disponíveis no site de adaptações orais e do fechamento sem pontuação. Incluída uma combinação pronta de vinte minutos e alternativa em caso de falha de conexão, sem prometer funcionamento offline da aplicação.

Exemplos de Bezalel e Complete a Frase conferidos nos dados dos jogos. Passagens consultadas na base local: Marcos 1:9-11, 1:16-20, 4:35-41, 6:30-44; Êxodo 31:1-6, 19:16-20 e 20:1-17; Salmos 119:105; Rute 1:16-19; João 2:1-11. A ordem das cenas é explicitamente narrativa, não uma reconstrução cronológica externa. A pergunta oral sobre o Jordão não é apresentada como garantia de aparecer em uma rodada do site.

Estimativa de leitura mantida em 7 minutos após cálculo de 1.350 palavras a aproximadamente 200 palavras/minuto. Data atualizada apenas no artigo revisado. Conferência humana e aplicação real com participantes permanecem pendentes.

Correção relacionada de navegação: “Quem sou eu?” incluído em `src/data/libraryItems.ts`, permitindo sua descoberta na Biblioteca e sua renderização entre os relacionados. Nenhuma rota alterada.

`npm run check` aprovado com 13 testes, lint, TypeScript e build. Página HTTP 200, um H1, exemplos disponíveis sem JavaScript e sem overflow nas seis larguras previstas. Cinco links para jogos responderam 200 e a presença de Quem sou eu? na Biblioteca foi conferida. Evidências: `tmp/audit-2026-10-07/jogos-digitais-validation.json` e `jogos-digitais-375.png`. `git diff --check` aprovado.

## Quarto artigo: Plano de quatro encontros no Evangelho de Marcos

Título, rota e imagem preservados. As quatro passagens originais permanecem: Marcos 1:21-39, 2:1-17, 4:35-41 e 10:32-45; todas conferidas na base local nesta rodada.

Cada sessão agora inclui contexto, atividade pronta com gabarito, duas perguntas com apoio em versículos e fechamento. Acrescentados materiais, combinados, cronograma contínuo de 45 minutos e alternativa de 30. O encontro sobre a travessia enfatiza a sequência e a pergunta final, sem convocar relatos de medo ou aconselhamento. O último encontro preserva o contexto do anúncio de sofrimento e ressurreição; não reduz a passagem a tarefas. Hipóteses não são apresentadas como fatos e os jogos orais não são anunciados como recursos automáticos do site.

Estimativa de leitura: 9 minutos, baseada em 1.688 palavras e aproximadamente 200 palavras/minuto. Data atualizada apenas no artigo revisado. Conferência humana e aplicação com participantes permanecem pendentes.

`npm run check` aprovado com 13 testes, lint, TypeScript e build. Build final aprovado após ajuste do tempo de leitura. HTTP 200, um H1, atividades disponíveis sem JavaScript, âncoras válidas e sem overflow nas seis larguras. Três links relacionados responderam 200. `git diff --check` aprovado. Evidências: `tmp/audit-2026-10-07/plano-marcos-validation.json` e `plano-marcos-375.png`.

## Quinto artigo: Como montar uma noite de jogos bíblicos

Título, imagem e rota preservados. Roteiro de 75 minutos para 6 a 16 pessoas, com duas equipes, preparação, três pares comentados, configuração concreta do Modo Grupo (cinco perguntas, tema geral, Sem tempo, sem rebote), quatro perguntas orais alternativas e uma frase de revisão. Inclui adaptação para 45 minutos e regras sem exposição individual.

Opções e pontuação digital conferidas em `src/components/GroupMode.tsx`. Pontuação oral distinguida da digital; colaboração é reconhecida sem bônus subjetivos. O plano sem conexão depende de manter as instruções disponíveis previamente, não promete suporte offline do site. Referências conferidas na base local: Gênesis 6:13-22, Rute 1:16-19, Marcos 1:9-11, Êxodo 3:1-4, João 2:1-11, Salmos 119:105 e Colossenses 3:16.

Estimativa de leitura: 7 minutos para 1.392 palavras, a aproximadamente 200 palavras/minuto. Data atualizada apenas no artigo revisado. Conferência humana e aplicação com participantes continuam pendentes.

`npm run check` aprovado com 13 testes, lint, TypeScript e build. HTTP 200, um H1, conteúdo legível sem JavaScript, âncoras válidas e ausência de overflow nas seis larguras. Quatro links para jogos e material responderam 200. `git diff --check` aprovado. Evidências: `tmp/audit-2026-10-07/noite-jogos-validation.json` e `noite-jogos-375.png`.

## Sexto artigo: Como incluir pessoas tímidas e visitantes — 08/10/2026

Título, imagem e rota preservados. Revisão centrada em escolhas de participação, sem diagnóstico de timidez nem promessa de resultado emocional. Acrescentados exemplo executável de 12 minutos em Marcos 1:16-20, perguntas com apoio, consulta livre, leitura assistida e adaptações sem rotular visitantes. Frases prontas cobrem recusa, interrupção, silêncio e concentração de falas. Retorno pós-encontro é opcional e não exige explicações pessoais.

Marcos 1:16-20, Romanos 15:1-7 e Tiago 1:19-21 conferidos na base local. Aplicações de organização distinguidas dos textos de apoio. Estimativa de leitura: 6 minutos para aproximadamente 1.108 palavras a 200 palavras/minuto. Data de revisão local atualizada para 08/10/2026. Conferência humana e aplicação real permanecem pendentes.

`npm run check` aprovado com 13 testes, lint, TypeScript e build. Uma primeira checagem visual detectou que a alteração do tempo de leitura havia atingido o artigo familiar. Corrigidos os campos: acolhimento 6 minutos; No lar preservado em 7. Build final e nova checagem aprovados. HTTP 200, um H1, conteúdo disponível sem JavaScript, âncoras válidas e sem overflow em 320, 375, 768, 1024, 1280 e 1440 px. Três links relacionados conferidos. Evidências finais: `tmp/audit-2026-10-07/acolhimento-20261008-validation.json` e `acolhimento-20261008-375.png`.

## Sétimo artigo: Como usar quiz na Escola Bíblica Dominical — 08/10/2026

Título, imagem e rota preservados. Sessão de 20 minutos em Marcos 6:30-44, com quatro questões próprias do roteiro, três alternativas por questão, gabaritos comentados e leitura antes de responder. Preparação, objetivo de revisão, exemplo de correção, adaptações por familiaridade e limites de uso do quiz digital explicitados. Não confunde placar com nota ou medida da fé.

Marcos 6:30-44, Neemias 8:1-8 e João 6:9 conferidos na base local. A comparação com João identifica uma informação de outro relato sem atribuí-la ao recorte de Marcos. Neemias usado como apoio à compreensão, não como regra para quizzes. Estimativa de leitura: 7 minutos para aproximadamente 1.258 palavras a 200 palavras/minuto. Data atualizada apenas neste artigo. Conferência humana e aplicação com turma continuam pendentes.

`npm run check` aprovado: 13 testes, lint, TypeScript e build. HTTP 200, um H1, exemplos legíveis sem JavaScript, âncoras válidas e ausência de overflow nas seis larguras. Quatro links conferidos. `git diff --check` aprovado. Evidências: `tmp/audit-2026-10-07/ebd-20261008-validation.json` e `ebd-20261008-375.png`.

## Oitavo artigo: Como adaptar uma dinâmica bíblica por idade — 08/10/2026

Título, imagem e rota preservados. A mesma atividade no Salmo 100 aparece em versões concretas para crianças (7 minutos), jovens (12) e adultos (15), além de uma adaptação para grupos mistos. Objetivo constante: localizar o convite a agradecer e o motivo apresentado no texto. Perguntas, frases, gabaritos, materiais e opções de resposta estão disponíveis sem exigir criação de cartões pelo visitante.

As idades orientam propostas, não avaliações de desenvolvimento. Consulta, escuta e respostas alternativas são legítimas. Não exige relatos de sofrimento, gratidão por situações dolorosas, encenação ou exposição individual. Salmo 100:1-5 e 1 Coríntios 9:19-23 conferidos na base local; o segundo texto é contextualizado no anúncio do evangelho, sem atribuir a ele uma tabela de idades ou duração. Estimativa: 6 minutos de leitura para aproximadamente 1.129 palavras a 200 palavras/minuto. Data de revisão local atualizada. Conferência humana e aplicação prática permanecem pendentes.

`npm run check` aprovado com 13 testes, lint, TypeScript e build. HTTP 200, um H1, exemplos e gabaritos legíveis sem JavaScript, âncoras válidas, sem overflow nas seis larguras. Três links relacionados conferidos. `git diff --check` aprovado. Evidências: `tmp/audit-2026-10-07/adaptacao-20261008-validation.json` e `adaptacao-20261008-375.png`.

## Nono artigo: Plano de leitura de Atos com jogos e conversa — 08/10/2026

Título, imagem e rota preservados. Mantido o percurso dos 28 capítulos em seis etapas, agora com distribuição explícita da leitura e alternativas para quem leu menos. Cada etapa tem contexto, jogo oral pronto, gabarito, duas perguntas com apoio e passagem central. Cronograma contínuo de 45 minutos e adaptação de 30 minutos. O planejamento não obriga leitura semanal nem promete que o quiz digital ofereça exatamente esses exemplos.

Passagens conferidas na base local: Atos 2:42-47, 6:1-7, 9:1-19, 16:6-15, 17:16-34, 27:13-26 e 1:8. Cuidados explícitos contra exposição financeira, julgamento de participantes, diagnóstico, interpretação de sonhos, ataques a pessoas ou religiões e universalização da promessa da viagem marítima. Atividades observam o texto e não pretendem esgotar debates especializados.

Estimativa de leitura: 9 minutos para aproximadamente 1.779 palavras a 200 palavras/minuto. Data atualizada apenas neste artigo. Conferência humana e aplicação real permanecem pendentes.

`npm run check` aprovado com 13 testes, lint, TypeScript e build. HTTP 200, um H1, conteúdo legível sem JavaScript, âncoras válidas e ausência de overflow nas seis larguras. Três links relacionados conferidos. `git diff --check` aprovado. Evidências: `tmp/audit-2026-10-07/atos-20261008-validation.json` e `atos-20261008-375.png`.

## Décimo artigo: Como transformar respostas erradas em aprendizado — 08/10/2026

Preservados título, imagem, rota e exemplo central já existente. Revisão pontual: situação identificada como fictícia, justificativa do erro e reformulação voluntárias, cronograma de cinco minutos, tratamento de questões ambíguas e canal de correção. Corrigida a orientação sobre rebote: deve ocorrer antes de revelar resposta e explicação, não após a correção. Nenhuma lógica do jogo foi alterada.

Conferidos na base local Mateus 14:22-33, João 1:40-42, Provérbios 18:13 e Atos 17:10-12. Resposta Pedro localizada em Mateus 14:28-29; relação de André com Simão e sua ação distinguidas em João. Referências de apoio contextualizadas sem usar o erro como julgamento da fé ou capacidade. Estimativa de leitura: 6 minutos para aproximadamente 1.131 palavras a 200 palavras/minuto. Data de revisão local atualizada. Conferência humana permanece pendente.

`npm run check` aprovado com 13 testes, lint, TypeScript e build. HTTP 200, um H1, conteúdo disponível sem JavaScript, âncoras válidas e sem overflow nas seis larguras. Quatro links conferidos. `git diff --check` aprovado. Evidências: `tmp/audit-2026-10-07/correcao-20261008-validation.json` e `correcao-20261008-375.png`.

## Décimo primeiro artigo: Como preparar um encontro bíblico para jovens — 08/10/2026

Título, imagem e rota preservados. Sessão demonstrada de 70 minutos em Filipenses 2:1-4, com preparação, materiais, quatro situações fictícias, perguntas comentadas, minirodada de conferência e alternativa de 45 minutos. A escolha de cada atividade é explicada; não exige que o líder crie cartões ou perguntas essenciais. Relacionado alterado de Verdade ou pressão? para Amizades que edificam, já revisado neste ciclo.

Filipenses 2:1-11 e 1 Timóteo 4:12-16 conferidos na base local. Contexto de Cristo mencionado sem reduzir a passagem a técnica de organização; regra e tempos distinguidos do texto. Participação e funções voluntárias; não atribui maturidade a rapidez ou extroversão, não recolhe relatos íntimos nem promete acompanhamento especializado. Estimativa: 8 minutos de leitura para aproximadamente 1.409 palavras a 200 palavras/minuto. Data de revisão local atualizada.

`npm run check` aprovado com 13 testes, lint, TypeScript e build. HTTP 200, um H1, exemplos legíveis sem JavaScript, âncoras válidas e ausência de overflow nas seis larguras. Três links relacionados conferidos. `git diff --check` aprovado. Evidências: `tmp/audit-2026-10-07/jovens-20261008-validation.json` e `jovens-20261008-375.png`.

## Fila de revisão

Os onze artigos passaram pela revisão local: dez reescritos e um conferido com ajustes pontuais. Não há artigo pendente dessa primeira passagem técnica e editorial assistida.

Todos continuam pendentes da conferência humana pelo responsável. Aplicação prática dos roteiros não foi realizada neste ciclo. Revisão local não equivale a aprovação editorial, publicação ou garantia de aprovação no AdSense.

O item 2 permanece pendente de aprovação do responsável, conforme seu critério de conclusão. Revisões feitas individualmente e registradas. Nenhuma publicação foi feita; os demais itens do plano permanecem independentes desta etapa.
