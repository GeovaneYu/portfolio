# Portfólio — Geovane Gofredo

Portfólio executivo de Geovane Gofredo — liderança de TI, governança e Service Delivery (ITSM/SDM), em **Neo-Swiss claro** (papel, preto e laranja internacional), com animações fluidas e foco em performance.

**Site:** https://geovaneyu.github.io/portfolio/  
**Currículos (PDF):** [PT](https://geovaneyu.github.io/portfolio/CV-Geovane-Gofredo-2026.pdf) · [EN](https://geovaneyu.github.io/portfolio/CV-Geovane-Gofredo-2026-EN.pdf)  
**Cartão de visita:** https://geovaneyu.github.io/portfolio/cartao-visita.html  
**Assinatura de e-mail:** https://geovaneyu.github.io/portfolio/email-signature.html  
**Banner LinkedIn:** https://geovaneyu.github.io/portfolio/img/linkedin-banner.png

## Identidade (D)

- **Paleta:** papel `#F4F4F0`, preto `#111111`, laranja internacional `#FF4D00`
- **Fontes:** Archivo (títulos), Inter (corpo), JetBrains Mono (dados)
- **Currículos:** visual D em Archivo, 1 página A4, PT e EN
- **Banner/OG/favicon:** mesmo esquema papel/preto/laranja

## Stack

- **Vite 5** + **React 18** + **TypeScript 5**
- **Tailwind CSS 4** (tema em CSS) + **shadcn/ui** + **Framer Motion**
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

Requer Node 20+. Preview de produção (servidor local): `npm run preview -- --host 127.0.0.1 --port 4173`.

## Estrutura

```
src/
  components/sections/   Hero, Bio, Content, Projects, Contact
  components/ui/         shadcn
  data/portfolio-data.ts fonte única de conteúdo
  pages/Index.tsx        JSON-LD + seções
public/
  CV-Geovane-Gofredo-2026.pdf     currículo PT para download
  CV-Geovane-Gofredo-2026-EN.pdf  currículo EN para download
  cartao-visita.html           cartão 85.6×53.98 mm (D)
  email-signature.html         assinatura de e-mail (D)
  img/                         geovane.jpg, geovane.webp, linkedin-banner.png
  og-image.jpg                 imagem Open Graph (D)
  favicon* / apple-touch-icon / site.webmanifest  ícones (D)
cv/
  CV-Geovane-Gofredo-2026.html     fonte HTML do currículo PT
  CV-Geovane-Gofredo-2026-EN.html  fonte HTML do currículo EN
  cv.css                           identidade dos currículos (D)
  Archivo-*.ttf                    fontes Archivo locais
  gerar-pdf.sh                     gera os PDFs PT e EN
social/
  linkedin-banner.html         fonte do banner LinkedIn (D)
linkedin/
  perfil.md                    textos de referência do LinkedIn
```

## Deploy

GitHub Pages via **Actions** (`.github/workflows/deploy.yml`):

- Push em `main` → `npm ci` → `vite build` → `actions/deploy-pages`
- `vite.config.ts` com `base: GITHUB_ACTIONS ? '/portfolio/' : '/'` — funciona em `/` (local) e `/portfolio/` (Pages)
- Habilite em **Settings → Pages → Source: GitHub Actions**

Backup do visual anterior ao D v2: branch `backup/pre-D-v2-2026-11-08`.

## Currículo

Os PDFs em `public/CV-Geovane-Gofredo-2026.pdf` e `public/CV-Geovane-Gofredo-2026-EN.pdf` são gerados a partir dos HTMLs em `cv/`, com a fonte Archivo local e o CSS compartilhado `cv/cv.css`. Para atualizar:

1. Edite o HTML ou o CSS em `cv/`.
2. Rode `./cv/gerar-pdf.sh` (macOS, com Google Chrome instalado).
3. Os PDFs são salvos em `public/`.
4. Faça commit e push.

> Versões pessoais “infra” e cartas de apresentação ficam fora do projeto, em `Documents/02_carreira/curriculo/`.

## Personalização

Edite `src/data/portfolio-data.ts` (bio, experiências, skills) e o currículo em `cv/`. Cores e tipografia em `src/index.css` (`@theme`).

## Licença

**Todos os direitos reservados — Geovane Gofredo (2026).**

Proibida a cópia, reprodução, distribuição ou uso comercial sem autorização prévia por escrito. Veja [`LICENSE`](./LICENSE) para detalhes.
