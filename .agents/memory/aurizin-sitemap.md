---
name: aurizin sitemap generation
description: How the aurizin artifact's sitemap.xml is produced and the constraints behind it
---

# Aurizin sitemap

The aurizin site (`slug aurizin`, served at root `/`) has a build-time sitemap generator, not a runtime/SSR one.

- Source of truth: `scripts/generate-sitemap.mjs` (pure Node, regex-based — does NOT import the TS modules because the data files use `@/` asset aliases that won't resolve outside Vite).
- It regex-discovers `<Route path="...">` from `src/App.tsx`, so new **static** public pages are picked up automatically. The 404 catch-all has no `path` and is naturally excluded.
- Dynamic detail routes (`/x/:slug`) are enumerated by regex-reading `slug:` fields from data files via the `DYNAMIC_SOURCES` map (industries→data/industries.ts, portfolio→data/projects.ts, blog→data/blog.ts).
- Wired as `sitemapPlugin()` in `vite.config.ts` (runs on `buildStart` + `configureServer`). It writes `public/sitemap.xml`, which Vite copies to the dist root → served at `/sitemap.xml`.

**Why fail-fast:** the plugin throws (fails the build) only when `command === "build"` if a dynamic route is found that has no `DYNAMIC_SOURCES` entry, so a new dynamic page type can never silently drop out of the sitemap. Dev only warns.

**How to apply:** when adding a new dynamic `:slug` route, add it to `DYNAMIC_SOURCES`. SEO URLs are hardcoded to `https://www.aurizin.com`; update `SITE_URL` if the live domain changes. `vite.config.ts` is NOT in the tsconfig typecheck scope (`include: ["src/**/*"]`), so importing the `.mjs` there is fine.
