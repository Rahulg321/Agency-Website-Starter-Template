# Website Generation Playbook

Master workflow for the AI coding agent customizing this starter template.

## Input

1. Write `brief.json` at repo root (see [`brief.example.json`](../../brief.example.json))
2. Read [`AGENTS.md`](../../AGENTS.md) and [`docs/HARNESS.md`](../../docs/HARNESS.md)
3. Load industry skill from `.agents/skills/industries/`
4. Load [`design-presets`](../design-presets/SKILL.md) skill

## Apply brief (automated — do this first)

```bash
bun run apply-brief
```

This automatically:
- Validates `brief.json` against registry
- Resolves theme (`designPreset` or industry inference)
- Writes `src/config/site.config.ts`
- Writes `brief.applied.json` (read this to confirm theme)

**Do not manually edit `site.config.ts` or `__root.tsx` for themes.**

## Customize content

1. Read `brief.applied.json` — confirm `resolvedPreset`
2. Customize copy in recipes/blocks from brief content
3. Add routes only if brief requires pages beyond defaults

## Build and deploy

```bash
bun run build    # prebuild runs apply-brief if brief.json exists
bun run deploy
```

## Theme selection

| Brief field | Behavior |
|---|---|
| `designPreset: "tweakcn-nature"` | Uses that theme |
| `designPreset` omitted | Infers from `business.industry` via registry |
| Invalid preset | Falls back to industry match |

Import new tweakcn themes: `bun run theme:import <id>`

## Rules

- **Use blocks first**, `ui/` primitives second
- **Do not edit** `src/components/ui/`, `src/routeTree.gen.ts`, or `site.config.ts`
- Run `apply-brief` after every `brief.json` change
- Validate brief with `src/lib/brief.ts` schema

## Skills by task

| Task | Skills / docs |
|---|---|
| Theme + brief | `design-presets`, [`docs/HARNESS.md`](../../docs/HARNESS.md) |
| Industry copy | `industries/<industry>`, `business/conversion` |
| Deploy | `wrangler`, `cloudflare` |
