# Institut Efektivity – web

Webová prezentace **Institut pro efektivní veřejnou správu z.ú.** (React + TypeScript + Vite + Tailwind).

## Struktura projektu

- **`/src`** – zdrojové kódy (komponenty, stránky, styly)
- **`/public`** – statické assety (obrázky, PDF, favicon, sitemap)

## Vývoj

```bash
npm install
npm run dev
```

Otevřete [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Výstup je v **`dist`**.

Náhled produkčního buildu:

```bash
npm run preview
```

## Deploy na Vercel

1. **Root Directory**: Kořen repozitáře (ne `app`).
2. **Build**: Vercel detekuje Vite a použije `npm run build`. Výstupní složka je `dist`.
3. **Rewrites**: V `vercel.json` je SPA rewrite – všechny cesty vedou na `index.html`.

### Rychlý deploy (Vercel CLI)

```bash
npx vercel
```

## Technologie

- React 19, React Router 7
- Vite 7, TypeScript
- Tailwind CSS, GSAP
- react-helmet-async (SEO meta tagy)

## SEO

- Meta tagy a Open Graph v `index.html` a v komponentě `SEO` na každé stránce
- Canonical URL a absolutní OG obrázky v `SEO.tsx`
- Sitemap: `public/sitemap.xml`
- Schema.org (Organization, WebSite) v `App.tsx` a `HomePage.tsx`
