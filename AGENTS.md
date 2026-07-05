# AGENTS.md

Starter template for an AI agency platform. An agent clones this repo, reads a website brief, customizes the project, builds, and deploys to Cloudflare.

See [`PROJECT_PLAN.md`](PROJECT_PLAN.md) for the full platform vision.

## Quick start (harness)

```bash
bun install
cp brief.example.json brief.json   # or write client brief.json
bun run apply-brief                # applies brief + auto-selects theme
bun run build
bun run deploy
```

`bun run build` automatically runs `apply-brief` if `brief.json` exists (`prebuild` hook).

## Harness automation

| Step | Command / file | What it does |
|---|---|---|
| Manifest | [`harness.manifest.json`](harness.manifest.json) | **Machine-readable index** — paths, commands, workflow |
| Input | `brief.json` | Client website brief |
| Apply | `bun run apply-brief` | Writes `site.config.ts` + `brief.applied.json` |
| Theme | `brief.designPreset` or industry inference | See [`docs/HARNESS.md`](docs/HARNESS.md) |
| Registry | `src/design/presets/registry.json` | All valid theme IDs |
| Report | `brief.applied.json` | Confirms which theme was applied and why |

**Do not manually edit `src/config/site.config.ts`** after `apply-brief` — it is auto-generated.

## Agent workflow

1. Write or receive `brief.json` (see [`brief.example.json`](brief.example.json))
2. Load skills: `template/website-generation`, industry skill, `design-presets`
3. Run `bun run apply-brief` (or let `prebuild` run it)
4. Read `brief.applied.json` to confirm theme resolution
5. Customize copy in recipes/blocks if needed
6. `bun run build` → `bun run deploy`

Theme is applied automatically — no manual `data-preset` editing required (`__root.tsx` reads `siteConfig.designPreset`).

## Stack

- **TanStack Start** — SSR React, file-based routing, Nitro build
- **Tailwind CSS v4** — tokens in [`src/styles/app.css`](src/styles/app.css)
- **shadcn/react** — `base-nova` style, `@base-ui/react` primitives
- **Cloudflare** — [`wrangler.jsonc`](wrangler.jsonc), `@cloudflare/vite-plugin`
- **Bun** — package manager

## Key directories

| Path | Purpose |
|---|---|
| [`brief.json`](brief.json) | Harness input (not committed; use `brief.example.json` as template) |
| [`brief.applied.json`](brief.applied.json) | Generated report after apply-brief |
| [`src/config/site.config.ts`](src/config/site.config.ts) | **Auto-generated** from brief |
| [`src/config/site.defaults.ts`](src/config/site.defaults.ts) | Demo defaults before brief applied |
| [`src/design/presets/registry.json`](src/design/presets/registry.json) | **Theme registry** — single source of truth |
| [`src/lib/apply-brief.ts`](src/lib/apply-brief.ts) | Brief → config + theme resolution logic |
| [`src/components/blocks/`](src/components/blocks/) | Marketing section blocks |
| [`src/recipes/`](src/recipes/) | Page composition recipes |
| [`docs/HARNESS.md`](docs/HARNESS.md) | Full harness + theme documentation |

## Design presets / themes

All themes live in [`src/design/presets/registry.json`](src/design/presets/registry.json).

- **Explicit:** set `designPreset` in `brief.json`
- **Inferred:** omit `designPreset`; matched from `business.industry`
- **Import tweakcn:** `bun run theme:import <theme-id>` (auto-registers)

See [`docs/HARNESS.md`](docs/HARNESS.md) and [`docs/TWEAKCN_THEMES.md`](docs/TWEAKCN_THEMES.md).

## Rules

- **Blocks first**, `ui/` second
- **Do not edit** `src/components/ui/`, `src/routeTree.gen.ts`, or `site.config.ts` manually
- Run `bun run apply-brief` after changing `brief.json`
- Use semantic Tailwind tokens (`bg-primary`, not `bg-blue-500`)

## Default routes

| Route | Recipe |
|---|---|
| `/` | `home-local-service` |
| `/about` | `about-page` |
| `/services` | `services-page` |
| `/services/$slug` | service detail |
| `/contact` | `contact-page` |

## Skills to load

| Task | Skills |
|---|---|
| Full site generation | `template/website-generation`, industry skill, `design-presets` |
| Theme selection | `design-presets`, [`docs/HARNESS.md`](docs/HARNESS.md) |
| Styling / components | `shadcn`, `frontend-design` |
| Deploy | `wrangler`, `cloudflare` |
