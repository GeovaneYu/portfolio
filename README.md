# Portfólio — Geovane Gofredo

Especialista Bilíngue em Infraestrutura e Operações de TI — mais de 14 anos de experiência. Portfólio editorial com modo claro/escuro, animações e foco em performance.

**Demo:** https://geovaneyu.github.io/portfolio/ · **Cartão:** [/cartao-visita.html](https://geovaneyu.github.io/portfolio/cartao-visita.html) · **Assinatura:** [/email-signature.html](https://geovaneyu.github.io/portfolio/email-signature.html)

## Stack

- **Vite 5** + **React 18** + **TypeScript 5**
- **Tailwind CSS 4** + **shadcn/ui** + **Framer Motion**
- **React Router** + **next-themes** + **Lucide**

## Rodar local

```sh
git clone https://github.com/GeovaneYu/portfolio.git
cd portfolio
npm install
npm run dev      # http://localhost:8080/
npm run build    # dist/
npm run lint
```

Requer Node 20+.

## Estrutura

```
src/
  components/sections/  Hero, Bio, Content, Projects, Contact
  components/ui/        shadcn
  data/portfolio-data.ts  fonte única de conteúdo
  pages/Index.tsx       JSON-LD + seções
public/
  img/                  geovane.jpg/webp, meme
  CV-Geovane-Gofredo-2026.pdf
  cartao-visita.html    cartão 85.6×53.98mm (public/ para Pages)
```

## Deploy

GitHub Pages via **Actions** (`.github/workflows/deploy.yml`):

- Push em `main` → `bun install` → `vite build` → `actions/deploy-pages`
- `vite.config.ts` com `base: GITHUB_ACTIONS ? '/portfolio/' : '/'` — funciona em `/` (local) e `/portfolio/` (Pages)
- Habilite em **Settings → Pages → Source: GitHub Actions**

## Personalização

Edite `src/data/portfolio-data.ts` (bio, experiências, skills) e `public/CV-*.pdf`. Cores e tipografia em `src/index.css` (`@theme`).

## Licença

**Todos os direitos reservados — Geovane Gofredo (2026).**

Proibida a cópia, reprodução, distribuição ou uso comercial sem autorização prévia por escrito. Veja [`LICENSE`](./LICENSE) para detalhes.
