# Preparação para publicação

Trabalho sequencial autorizado pelo responsável: um ponto por vez, sem deploy automático.

## 1. Consentimento do Analytics: concluído localmente

- Autorização explícita recebida para a correção no código local.
- O botão do rodapé já interrompia a coleta; o diagnóstico inicial foi refinado para distinguir esse caminho das falhas nos helpers, sincronização e armazenamento.
- Revogação agora fica centralizada em `resetAnalyticsConsent()` e na gravação de recusa.
- Estados ausentes/recusados e limpeza em outra aba desabilitam a coleta; inicialização revalida consentimento e hostname antes de carregar a tag.
- Quando a gravação falha, a escolha vale para a página atual. Persistência não pode ser garantida se o navegador impedir armazenamento.
- IDs, lista de domínios, contas externas, anúncios e layout visual não foram alterados.

### Verificação

`npm run check`: conteúdo, nove testes de regressão, lint, TypeScript e build aprovados.

`scripts/test-analytics-browser.mjs`: quatro cenários aprovados:

1. Primeira visita, aceite, recarga com preferência salva, reabertura e recusa persistida.
2. Sincronização entre abas: limpeza do armazenamento, novo aceite e recusa.
3. Storage indisponível: escolha na página atual e recarga sem habilitar automaticamente.
4. Localhost: tag Google não carregada, mesmo após aceite.

O teste usa hostname simulado, requisições do site reencaminhadas exclusivamente a `http://127.0.0.1:3100`, tag Google mockada e terceiros bloqueados. Ele verifica a lógica da aplicação, não a coleta/configuração real da conta. Resultado: `.test-artifacts/audit/analytics-consent.json`.

O bloqueio utiliza `ga-disable-...` junto à atualização de consentimento, conforme a [documentação oficial do Google](https://developers.google.com/tag-platform/security/guides/privacy). A atualização de escolha usa o [comando de consentimento documentado](https://developers.google.com/tag-platform/security/guides/consent).

## 2. AdSense e CMP: parcialmente concluído

As capturas enviadas pelo responsável confirmaram uma mensagem europeia publicada para `bibliaclube.com.br`, com consentir, não consentir e gerenciamento de opções ativados. A URL da política estava apontando para a Home; o responsável confirmou a troca para `https://bibliaclube.com.br/politica-de-privacidade`. Isso não comprova a execução da CMP nem sua integração completa com a versão candidata.

### 2.1. Política sem integrações: concluído localmente

Alteração explicitamente autorizada. `SiteIntegrations.tsx` exclui a rota da política do AdSense (e de sua mensagem de consentimento), Google Analytics, Vercel Analytics e Speed Insights. O código de verificação do AdSense continua no HTML inicial das outras páginas, incluindo a Home; IDs e configurações das contas foram preservados.

Os links da política no rodapé e no banner abrem um novo documento. Isso evita manter scripts executados na página anterior. Há também recarga de segurança quando o pathname muda para a política por navegação no cliente. O controle de preferências não é mostrado na política, onde seu componente de consentimento não está montado; o texto explica que ele permanece disponível nas demais páginas.

Verificação em `scripts/test-privacy-browser.mjs`: sete cenários aprovados, incluindo acesso direto sem escolha/com recusa/com aceite salvo, HTML sem JavaScript, navegação pelo rodapé/banner, Voltar/Avançar e mudança de pathname no cliente. Nenhuma integração foi solicitada no acesso direto à política. Os scripts de terceiros das páginas de origem foram mockados, sem execução real ou envio de dados externos. Evidência: `.test-artifacts/audit/privacy-isolation.json` e captura mobile.

A medida segue a [orientação do Google para páginas de política](https://support.google.com/adsense/answer/10961370?hl=pt-BR). Hospedagem, logs do servidor e recursos essenciais do Next.js continuam existindo; a exclusão é dos scripts de anúncios/consentimento/métricas, não de todo processamento técnico.

Fechamento em 06/09/2026: o servidor local foi reiniciado e os quatro cenários de consentimento passaram novamente, com saída 0. O teste passou a cancelar requisições pendentes no encerramento do contexto, sem aguardar indefinidamente prefetches. Nenhuma alteração adicional na aplicação ou publicação foi necessária.

### Ainda pendente neste ponto

- Validar a execução real da CMP e o acesso à política na futura publicação autorizada; a versão pública antiga não recebeu estas alterações.
- Conferir configurações de anúncios automáticos e exclusões de telas de interação/erro/impressão antes da veiculação.
- Conferir o aviso da conta sobre vinculação do site e informações de pagamento, pelo próprio responsável, sem compartilhar dados sensíveis.

## 3. Criador de roteiro: concluído localmente

- As quatro durações agora geram seis etapas executáveis: acolhimento, dinâmica, jogo, leitura, conversa/aplicação e oração.
- Os passos, a quantidade de perguntas, as referências e o modo de usar o jogo são reduzidos ou ampliados conforme 30, 45, 60 ou 90 minutos. Em 30 minutos, a interface avisa explicitamente que usa apenas o núcleo da dinâmica, e não seu roteiro integral.
- Materiais, objetivo, referências e cuidado para quem conduz passaram a fazer parte do resultado.
- Impressão e compartilhamento levam o roteiro completo, em vez de um resumo genérico.
- O resultado continua sendo estado local na mesma URL; nenhuma combinação automática criou página indexável.

### Verificação

- Testes unitários cobrem as 64 combinações de público, objetivo e duração, variantes negativas/positivas, soma exata do tempo, compatibilidade de público e conteúdo da exportação.
- Fluxo Chromium em 375 px percorreu novamente as 64 combinações, verificou seis etapas, textos executáveis, materiais e cuidado de condução, sem erro de página.
- TypeScript e lint aprovados; captura de impressão conferida sem conteúdo cortado.

## 4. Guia de quiz para casais: concluído localmente

- A página passou de orientações genéricas para uma atividade pronta com seis perguntas, quatro alternativas, resposta, explicação, referência e pergunta de conversa em cada item.
- Foi incluído um roteiro fechado de 15 minutos, com tempos para combinado, quiz, leitura/conversa e oração.
- As aplicações evitam pedir exposição de conflitos e distinguem perdão de ausência de limites ou de busca de ajuda.
- A nota de contexto deixa claro quando textos dirigidos à comunidade cristã são aplicados à convivência do casal, sem apresentá-los como manuais originalmente escritos sobre casamento.
- Nenhuma nova rota foi criada e nenhuma pergunta foi adicionada em escala ao jogo principal.

### Verificação

- Conteúdo estrutural, TypeScript e lint aprovados.
- HTML renderizado contém integralmente as seis perguntas e referências, mesmo sem interação.
- Hierarquia de headings e leitura semântica conferidas no navegador local.

## 5. Guia de estudo bíblico em grupo: concluído localmente

- A incoerência entre “três perguntas” e quatro etapas foi corrigida: o método agora apresenta quatro movimentos consistentes, observar, entender, responder e orar.
- Foi incluído um estudo completo de Marcos 10:46-52, com propósito, contexto narrativo, cinco perguntas de observação, três questões de interpretação e apoio ao condutor.
- O guia oferece três aplicações concretas, oração relacionada à passagem e cronograma fechado de 40 minutos.
- Uma nota pastoral evita associar enfermidade ou deficiência à falta de fé e orienta o grupo a distinguir afirmações do texto de inferências.
- Partes genéricas que ficaram redundantes após a inclusão do estudo foram removidas; nenhuma nova rota foi criada.

### Verificação

- A base bíblica local resolveu Marcos 10:46-52 e Marcos 10:32-45 com os capítulos e versículos esperados.
- Conteúdo estrutural, TypeScript e lint aprovados.
- Testes em 320, 375, 768 e 1440 px: sem overflow, imagens quebradas ou erros de página; hierarquia de headings conferida.

## 6. Guia de dinâmicas para jovens: concluído localmente

- O guia passou a entregar a oficina inédita “Pausa, escolha e apoio”, com 35 minutos, baseada em Daniel 1:8-16.
- Foram incluídos materiais, preparação, seis situações fictícias, quatro perguntas de análise e um roteiro minuto a minuto.
- A condução deixa explícito que ninguém precisa relatar experiências pessoais e inclui caminhos seguros para situações de perigo, fraude, humilhação e pressão digital.
- Há adaptações próprias para grupos tímidos, agitados e com mais de 24 jovens.
- Orientações e formatos genéricos que ficaram redundantes foram removidos; a página continua apontando para as dinâmicas detalhadas já existentes, sem criar nova rota.

### Verificação

- A base bíblica local resolveu Daniel 1:8-16 com os nove versículos esperados.
- Conteúdo estrutural, TypeScript e lint aprovados.
- Testes em 320, 375, 768 e 1440 px: sem overflow, imagens quebradas ou erros de página; capturas mobile e desktop registradas em `.test-artifacts/audit/`.

## 7. Guia de quiz em células: concluído localmente

- O guia agora contém uma sessão pronta de 20 minutos com cinco perguntas selecionadas diretamente da base principal do Quiz Bíblico.
- Cada pergunta inclui alternativas, resposta, explicação, referência, transição para o tema seguinte e pergunta aberta para o grupo.
- O cronograma cobre combinado inicial, rodada, leitura contextual, conversa e oração; também oferece uma frase concreta para tratar respostas incorretas sem constrangimento.
- Respostas e condução ficam em controles nativos recolhidos, permitindo projetar as perguntas sem revelar o gabarito. O conteúdo permanece no HTML inicial e o controle funciona por teclado.
- Orientações e roteiro genéricos redundantes foram removidos; nenhuma nova rota foi criada.

### Verificação

- As cinco perguntas existem na fonte principal e suas referências foram resolvidas pela base bíblica local.
- Testes em 320, 375, 768 e 1440 px: cinco perguntas presentes, sem overflow, imagens quebradas ou erros de página; 320 px também foi testado sem JavaScript.
- Cinco controles de resposta verificados; abertura por teclado exibe o conteúdo corretamente.

## 8. Guia de jogos para grupos: concluído localmente

- O guia agora diferencia operacionalmente encontros com 12 e 30 participantes: equipes, disposição do espaço, papéis, configuração do Modo Grupo e duração total.
- Foi incluída uma rodada fixa de cinco perguntas reais da base, com alternativas, respostas, explicações e referências.
- A pontuação reproduz as regras do jogo: 10 pontos por acerto direto e 5 por rebote, sem punição por erro; o exemplo acompanha o placar até um resultado matematicamente conferido.
- Gabaritos ficam recolhidos para permitir projeção, continuam no HTML inicial e abrem por teclado.
- A página explica que o Modo Grupo sorteia perguntas, enquanto a seleção fixa deve ser conduzida pelo guia; também oferece desempate cooperativo e fechamento com Lucas 10:25-37.
- Blocos genéricos redundantes foram removidos e uma descrição incorreta do Jogo da Memória foi corrigida.

### Verificação

- As cinco perguntas existem na base e todas as referências foram resolvidas localmente.
- Testes em 320, 375, 768 e 1440 px: duas configurações, cinco gabaritos e resultado presentes; sem overflow de página, imagens quebradas ou erros. A tabela usa rolagem interna no mobile.
- Abertura do gabarito por teclado aprovada.

## 9. Guia de condução participativa: concluído localmente

- O guia agora diferencia quatro papéis de apoio: facilitador, guardião do tempo, anfitrião e responsável pelo cuidado.
- Foram incluídas sete intervenções concretas para silêncio, monopolização, interrupções, desvio de tema, interpretação apressada, conflito e revelação de risco, cada uma com frase possível para o facilitador.
- Uma simulação baseada em Lucas 10:38-42 mostra como começar por observação textual, tratar inferências, proteger a privacidade, interromper uma fala longa e retomar após silêncio.
- A página distingue facilitação de atendimento especializado e apresenta canais oficiais brasileiros para urgência de saúde, apoio emocional e violações de direitos.
- Blocos genéricos redundantes foram removidos; nenhuma rota foi criada ou alterada.

### Verificação

- Lucas 10:38-42 foi conferido na base bíblica local, com os cinco versículos esperados.
- As orientações de encaminhamento foram confrontadas com páginas oficiais do Ministério da Saúde e do Ministério dos Direitos Humanos e da Cidadania.
- Testes em 320, 375, 768, 1024, 1280 e 1440 px: quatro papéis, sete intervenções e simulação presentes, sem overflow, imagens quebradas, erro de página ou sobreposição do Next.js. Em 320 px, a página também foi testada sem JavaScript.

## 10. Artigo sobre respostas erradas: concluído localmente

- O placeholder “Pedro faz X” foi substituído por uma questão completa sobre Pedro e André, com quatro alternativas e uma resposta equivocada plausível.
- A correção agora demonstra as quatro etapas do método: acolher a pista válida, consultar Mateus 14:22-33, comparar com João 1:40-42 e reformular a resposta com evidências.
- Foram acrescentadas adaptações específicas para crianças, adolescentes, adultos e grupos mistos, sem alterar o princípio pedagógico.
- A data visível e o `dateModified` dos dados estruturados foram atualizados somente para este artigo.

### Verificação

- As ações atribuídas a Pedro e André foram conferidas na base bíblica local.
- O conteúdo editorial passou de 417 para aproximadamente 688 palavras úteis, distribuídas em seis seções.
- Testes em 320, 375, 768, 1024, 1280 e 1440 px: exemplo e quatro adaptações presentes, sem placeholder, overflow, imagem quebrada, erro de página ou sobreposição do Next.js. Em 320 px, a página também foi testada sem JavaScript.

## 11. Artigo sobre conversas sensíveis: correção técnica concluída

- O conteúdo agora diferencia sofrimento sem perigo relatado, necessidade de apoio especializado e perigo imediato, sem pedir que o líder faça diagnóstico.
- Foram incluídos três exemplos concretos de resposta: luto, relato de violência e fala sobre autoagressão.
- Os limites contra investigação informal, confronto público, diagnóstico, promessa de sigilo absoluto e substituição de atendimento profissional foram preservados e aprofundados.
- A página identifica SAMU 192, Polícia Militar 190, CVV 188, Ligue 180 e Disque 100, explicando a finalidade de cada canal.
- Quatro fontes oficiais do Governo Federal aparecem como links visíveis, e o `dateModified` foi atualizado somente para o artigo revisado.

### Verificação

- Orientações confrontadas com páginas oficiais do Ministério da Saúde, Ministério das Mulheres e Ministério dos Direitos Humanos e da Cidadania.
- O conteúdo passou de 376 para aproximadamente 824 palavras úteis em oito seções, com três situações aplicadas e quatro fontes oficiais.
- Testes em 320, 375, 768, 1024, 1280 e 1440 px: conteúdo e fontes presentes, sem overflow, imagem quebrada, erro de página ou sobreposição do Next.js. Em 320 px, a página também foi testada sem JavaScript.
- Pendência humana: antes da publicação, uma pessoa com experiência em saúde mental e proteção de pessoas vulneráveis deve revisar as formulações. Esta correção técnica não equivale a validação clínica ou jurídica.

## 12. Conteúdos sensíveis pausados: concluído localmente

- Por decisão do responsável, `/biblioteca/como-conduzir-conversas-sensiveis`, `/biblioteca/encontro-de-casais-sobre-financas` e `/dinamicas-para-celulas/quando-a-mente-acelera` foram retirados da versão candidata à publicação.
- Os rascunhos permanecem no código para eventual retomada com assessoria adequada, mas estão excluídos das coleções exportadas, rotas estáticas, Biblioteca, busca, filtros, sitemap e links públicos.
- Na Home, o destaque financeiro foi substituído por “Jogos bíblicos sem impressão”; o caminho de casais agora leva ao quiz bíblico para casais, com texto voltado a jogo e aprendizado.
- O acervo público passa a ter 11 artigos e 11 dinâmicas.

### Verificação

- Os três endereços pausados retornam 404 localmente.
- Biblioteca e sitemap não contêm nenhum dos três caminhos.
- Home mobile contém os dois acessos substitutos, sem link financeiro, overflow ou erro de renderização.
- Estes rascunhos não são pendências para a publicação atual; só devem voltar ao catálogo depois de nova decisão e revisão humana compatível com os temas.

Demais prioridades permanecem no [relatório de auditoria](./auditoria-local-2026-09-05.md): exemplos editoriais incompletos, conteúdos sensíveis e comprovação de revisão humana.

**Publicação ainda não liberada. Nenhum deploy realizado.**
