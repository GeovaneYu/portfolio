# Portfólio — Geovane Gofredo

Portfólio profissional de Geovane Gofredo — mais de 14 anos em coordenação, governança e operações de TI. Site editorial com modo claro/escuro, animações e foco em performance.

**Site:** https://geovaneyu.github.io/portfolio/  
**Currículo (PDF):** https://geovaneyu.github.io/portfolio/CV-Geovane-Gofredo-2026.pdf  
**Cartão de visita:** https://geovaneyu.github.io/portfolio/cartao-visita.html  
**Assinatura de e-mail:** https://geovaneyu.github.io/portfolio/email-signature.html

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
  components/sections/   Hero, Bio, Content, Projects, Contact
  components/ui/         shadcn
  data/portfolio-data.ts fonte única de conteúdo
  pages/Index.tsx        JSON-LD + seções
public/
  CV-Geovane-Gofredo-2026.pdf  currículo para download
  cartao-visita.html           cartão 85.6×53.98 mm
  email-signature.html         assinatura de e-mail
  img/                         geovane.jpg/webp e meme
cv/
  CV-Geovane-Gofredo-2026.html fonte HTML do currículo
  DidactGothic-Regular.ttf     fonte usada no currículo
  gerar-pdf.sh                 gera o PDF a partir do HTML
backup/
  planos-antigos/              histórico de planejamento
```

## Deploy

GitHub Pages via **Actions** (`.github/workflows/deploy.yml`):

- Push em `main` → `npm ci` → `vite build` → `actions/deploy-pages`
- `vite.config.ts` com `base: GITHUB_ACTIONS ? '/portfolio/' : '/'` — funciona em `/` (local) e `/portfolio/` (Pages)
- Habilite em **Settings → Pages → Source: GitHub Actions**

## Currículo

O PDF em `public/CV-Geovane-Gofredo-2026.pdf` é gerado a partir de `cv/CV-Geovane-Gofredo-2026.html`, usando a fonte Didact Gothic local. Para atualizar:

1. Edite o HTML em `cv/`.
2. Rode `./cv/gerar-pdf.sh` (macOS, com Google Chrome instalado).
3. O PDF é salvo em `public/CV-Geovane-Gofredo-2026.pdf`.
4. Faça commit e push.

## Personalização

Edite `src/data/portfolio-data.ts` (bio, experiências, skills) e o currículo em `cv/`. Cores e tipografia em `src/index.css` (`@theme`).

## Licença

**Todos os direitos reservados — Geovane Gofredo (2026).**

Proibida a cópia, reprodução, distribuição ou uso comercial sem autorização prévia por escrito. Veja [`LICENSE`](./LICENSE) para detalhes.
