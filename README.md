# Agency Website Starter Template

Starter repository for an AI-powered agency platform. A coding agent writes `brief.json`, runs `apply-brief`, and deploys a client site to Cloudflare.

See [`PROJECT_PLAN.md`](PROJECT_PLAN.md), [`AGENTS.md`](AGENTS.md), and [`docs/HARNESS.md`](docs/HARNESS.md).

## Harness quick start

```bash
bun install
cp brief.example.json brief.json
bun run apply-brief    # auto-selects theme + writes site.config.ts
bun run build
bun run deploy
```

Check [`brief.applied.json`](brief.applied.json) to see which theme was applied.

## What's included

- **Automated brief → site config** (`bun run apply-brief`)
- **Theme registry** — dozens of coexisting presets ([`src/design/presets/registry.json`](src/design/presets/registry.json))
- **tweakcn import** — `bun run theme:import <id>` auto-registers themes
- **18 marketing blocks** + **5 page recipes**
- **Cloudflare deploy** ready

## Key files for harness

| File | Role |
|---|---|
| [`harness.manifest.json`](harness.manifest.json) | Machine-readable index (start here) |
| `brief.json` | Input |
| `brief.applied.json` | Theme resolution report |
| `src/design/presets/registry.json` | All valid theme IDs |
| `src/config/site.config.ts` | Auto-generated config |
| `docs/HARNESS.md` | Full documentation |

## Add a tweakcn theme

```bash
bun run theme:import nature --industries landscaping,gardening
bun run apply-brief
```

See [`docs/TWEAKCN_THEMES.md`](docs/TWEAKCN_THEMES.md).
