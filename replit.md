# [Project name]

_Replace the heading above with the project's name, and this line with one sentence describing what this app does for users._

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

Aurizin Innovations Pvt. Ltd. — a premium dark-themed marketing website for an Indian tech company (tagline "SOFTWARE. AI. CLOUD."). Frontend-only React + Vite artifact at slug `aurizin`.

Pages: Home, About, Services, Industries, Portfolio (+ per-project case studies at `/portfolio/:slug`), Blog (+ articles at `/blog/:slug`), Contact, Careers, Privacy, Terms, and a custom 404. Content (blog articles, project case studies) lives in `src/data/blog.ts` and `src/data/projects.ts`. Every navbar/footer/page link resolves to a real route.

Routing: wouter (base via `BASE_URL`). UI: shadcn/ui + lucide-react + react-icons + framer-motion. `Layout` scrolls to top on route change.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
