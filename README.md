# dhruvpatel — personal site

Next.js 16 (App Router), fully static. All content lives in `app/data.ts`.

## Run
    nvm use          # Node 22 (see .nvmrc) — Node 14 is too old
    npm install
    npm run dev      # http://localhost:3000

## Deploy (Vercel)
1. Push this folder to a GitHub repo, import it on vercel.com.
2. Set env var `NEXT_PUBLIC_SITE_URL` to your real domain (e.g. https://dhruvpatel.dev).
3. Add the custom domain in Vercel.

## Ranking for "Dhruv Patel" — checklist
- [ ] Buy a domain with your name in it (dhruvpatel.dev / .in / dhruvpatel.me) — the single biggest lever.
- [ ] Add your LinkedIn URL in `app/data.ts` (feeds the `sameAs` graph Google uses to link your profiles).
- [ ] Put the site URL in your GitHub bio, LinkedIn "website" field, X bio — backlinks + identity confirmation.
- [ ] Google Search Console: verify the domain, submit `/sitemap.xml`, request indexing.
- [ ] Add project links (`url` fields in `data.ts`) — each outbound GitHub/live link helps.
- [ ] Write a post or two later (a `/writing` route) — fresh content on your own domain compounds.

Already built in: title/description/keywords, canonical URL, OpenGraph + Twitter cards (generated image),
JSON-LD Person + ProfilePage + WebSite schema, sitemap.xml, robots.txt, manifest, icon, `rel="me"` links.
