# Elegibilidade local de anúncios — 7 de outubro de 2026

Alteração autorizada pelo responsável. Nenhuma configuração de conta, consentimento, domínio ou produção foi alterada.

## Regra implementada

O loader AdSense aparece somente na Home e nas URLs exatas de artigos, guias e dinâmicas presentes no catálogo local. Páginas de jogos, ferramentas, materiais, índices, contato, institucionais, políticas e URLs desconhecidas ficam sem loader. É uma decisão conservadora de inventário, não uma declaração de infração dessas páginas.

Lista gerada no servidor em `src/app/layout.tsx`, sem enviar textos completos ao cliente. Comparação exata em `src/lib/adEligibility.ts`. Ao navegar de uma página elegível para uma excluída, `SiteIntegrations` recarrega o documento: desmontar um script não desfaz código de terceiros já executado. Analytics mantém seu comportamento anterior, incluindo a exclusão da política de privacidade.

Preservados `ads.txt` e publisher. Acrescentada a meta `google-adsense-account` para identificação da conta sem depender do loader nas páginas excluídas. A confirmação da propriedade dentro da conta continua pendente.

## Testes

- Validação completa: conteúdo, 13 testes, lint, TypeScript e build aprovados.
- Navegador: quatro páginas elegíveis, sete excluídas e duas URLs inexistentes verificadas; loader somente nas elegíveis e 404 nas inexistentes.
- Transição Home → Contato confirmou descarte do script simulado executado no documento anterior.
- Sem erros de página. Planejar juntos sem overflow nas seis larguras previstas.
- Publicidade real bloqueada e substituída por script simulado no teste; não foram geradas impressões publicitárias.
- Evidências: `scripts/audit-ad-eligibility.mjs` e `tmp/audit-2026-10-07/ad-eligibility-validation.json`.

## Pendências e limites

A lista não certifica revisão humana de todo artigo ou dinâmica. Não foram aprovados posicionamentos de anúncios. Anúncios automáticos, CMP, recusa e reabertura das preferências precisam de teste posterior no domínio, mediante autorização. A ausência de loader não foi usada como substituto de revisão editorial.

Não inserir anúncios entre pergunta e alternativas ou junto de controles dos jogos. Qualquer inventário futuro deve ser explicitamente autorizado e testado. Não solicitar nova aprovação apenas por esta mudança.
