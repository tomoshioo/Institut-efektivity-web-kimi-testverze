# Institut Efektivity – web

Webová prezentace **Institut pro efektivní veřejnou správu z.ú.** (React + TypeScript + Vite + Tailwind).

## Struktura projektu

- **`/app`** – kořen frontend aplikace (Vite)
- **`/app/src`** – zdrojové kódy (komponenty, stránky, styly)
- **`/app/public`** – statické assety (obrázky, PDF, favicon, sitemap)

## Vývoj

```bash
cd app
npm install
npm run dev
```

Otevřete [http://localhost:5173](http://localhost:5173).

## Build

```bash
cd app
npm run build
```

Výstup je v **`app/dist`**.

Náhled produkčního buildu:

```bash
npm run preview
```

## Deploy na Vercel

1. **Root Directory**: V nastavení projektu na Vercel nastavte **Root Directory** na **`app`** (ne kořen repozitáře).
2. **Build**: Vercel detekuje Vite a použije `npm run build`. Výstupní složka je `dist`.
3. **Rewrites**: V `vercel.json` je SPA rewrite – všechny cesty vedou na `index.html`.

### Rychlý deploy (Vercel CLI)

```bash
cd app
npx vercel
```

Při prvním deployi zadejte Root Directory: **app**.

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
