# Bíblia Clube

Site **bibliaclube.com.br**, criado com Next.js, React, TypeScript e Tailwind
CSS e publicado na Vercel.

## O que está incluído

- página inicial responsiva;
- quizzes organizados em temas e jornadas;
- Modo Grupo, Ligue os Pares, Complete a Frase e Jogo da Memória;
- dinâmicas para células e guias práticos;
- integração com Vercel Analytics, Speed Insights e Google AdSense;
- páginas Sobre, Contato, Política de Privacidade e Termos de Uso;
- metadados de SEO, sitemap e robots.txt.

## Rodar localmente

É necessário instalar o Node.js LTS.

```bash
npm install
npm run dev
```

Depois, acesse `http://localhost:3000`.

## Verificações

```bash
npm run lint
npm run typecheck
npm run build
```

Para executar as três verificações em sequência, use `npm run check`.

## Publicação

Cada envio para a branch `main` inicia uma publicação na Vercel. Desenvolva em
uma branch separada, valide localmente e só depois integre as alterações à
`main`. Consulte `GUIA_PUBLICACAO.md` para os detalhes de publicação.
