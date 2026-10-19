# Planejar juntos: entrega própria e consolidação pendente

10 de outubro de 2026. Alteração local, sem publicação ou mudança de rotas.

## Implementado

- A oficina entrega cinco campos: Jogo, Tempo do evento, Funções, Participação e Sem internet. Cada campo tem pergunta de preenchimento e exemplo completo. Papel ou resposta oral, sem formulário que sugira armazenamento.
- O cronograma de preparo continua 30 minutos sugeridos (6 + 5 + 12 + 7), com teste ampliado de 15 minutos para a opção de 45. O evento planejado é de 20 minutos (3 + 12 + 5), não executado durante a oficina.
- Organização da mesa incorporada como variação opcional de cinco minutos, substituindo a escolha inicial; nunca somada automaticamente. Gabarito B, C, D, A, cenário fictício e sem manipular objetos pessoais.
- Núcleo curto do planejador prepara só uma decisão do plano, sem acrescentar a variação ou executar o evento. Modelo ampliado não enviado ao componente cliente do planejador.
- Apenas a página que possui `planningWorksheet` exibe o modelo. Outras dinâmicas preservadas.

## Não implementado

“Rotina com propósito” continua com conteúdo, ID, URL, canonical e participação no acervo/planejador preservados. A duplicidade conceitual ainda não foi resolvida por consolidação; esta é preparação da página destinatária, não conclusão da retirada.

Analytics é útil para verificar visualizações e usuários da página nos últimos 90 dias e origem de tráfego. Search Console é complementar para cliques/impressões, indexação e links recebidos. Sem dados não se presume ausência de visitas/backlinks. Antes de retirada/redirecionamento: confirmar esses dados, autorização explícita, mapeamento dos links e efeito nas seleções do planejador. Não foi acessada ou alterada conta Google.

## Validação

- Conteúdo, 48 testes, lint, TypeScript e build aprovados.
- Duas páginas HTTP 200; cinco campos visíveis; 12 checks de largura (320/375/768/1024/1280/1440) sem overflow.
- Axe configurado para WCAG 2 A/AA e 2.1 AA sem violações na oficina; nenhuma exceção JavaScript detectada.
- Planejador em Casais/30 min: sugestão Planejar juntos encontrada; seis etapas mantidas e núcleo sem variação adicional.
- Captura do modelo: `.test-artifacts/audit/planning-worksheet-2026-10-10.png`.

O ganho editorial é tornar a entrega concreta e a duração explícita. A proposta não é requisito específico ou garantia de aprovação no AdSense. Aplicação real e aprovação do responsável permanecem pendentes. Localhost atualizado em http://localhost:3100.
