---
name: design-presets
description: Select and apply design presets/themes for agency websites. Use when choosing colors, applying brief.json, or importing tweakcn themes.
---

# Design Presets

Themes are managed via [`src/design/presets/registry.json`](../../src/design/presets/registry.json). The harness applies them automatically via `bun run apply-brief`.

## Harness commands (use these)

```bash
bun run apply-brief          # brief.json → site.config.ts + theme
bun run theme:import nature  # add tweakcn theme to registry
bun run presets:sync         # regenerate CSS index from registry
```

Read [`docs/HARNESS.md`](../../docs/HARNESS.md) for the full workflow.

## Theme selection logic

1. If `brief.designPreset` is set and valid → use it (`resolutionSource: brief`)
2. Else match `brief.business.industry` against registry `industries[]` (`industry-inference`)
3. Else use `registry.defaultPreset` (`default`)

Confirm result in `brief.applied.json` after running `apply-brief`.

## Registry

| Preset ID | Industries | Coverage |
|---|---|---|
| `trustworthy-blue` | plumber, hvac, electrician | accent |
| `forest-green` | landscaping, lawn-care | accent |
| `clinical-clean` | dentist, medical | accent |
| `premium-slate` | lawyer, finance | accent |
| `warm-amber` | restaurant, salon | accent |
| `bold-orange` | roofing, construction | accent |
| `elegant-rose` | spa, beauty | accent |
| `modern-violet` | creative, agency | accent |
| `classic-stone` | real-estate | accent |
| `energetic-red` | emergency, towing | accent |
| `tweakcn-nature` | landscaping, gardening | full |
| `tweakcn-ocean-breeze` | marine, pool, coastal | full |

Full list: `src/design/presets/registry.json`

## TypeScript API

```ts
import { resolveDesignPreset, applyBriefToSiteConfig } from '~/lib/apply-brief'
import { getPresetForIndustry, designPresetCatalog } from '~/design/presets'
```

## Adding tweakcn themes

```bash
bun run theme:import clean-slate --industries dentist,medical
bun run apply-brief
```

No manual registry/catalog/brief.ts edits needed.

## Do not

- Manually edit `site.config.ts` (use `apply-brief`)
- Run `shadcn add @tweakcn/...` without snapshotting (overwrites `:root`)
- Hardcode colors in components (use semantic tokens)
