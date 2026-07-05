#!/usr/bin/env node
/**
 * Import a tweakcn theme and register it for harness auto-selection.
 *
 * Usage:
 *   node scripts/tweakcn-theme-to-preset.mjs nature
 *   node scripts/tweakcn-theme-to-preset.mjs ocean-breeze --label "Ocean Breeze" --industries marine,pool,coastal
 */
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  loadRegistry,
  saveRegistry,
  upsertPreset,
  syncVarsIndex,
  ensureAppCssImportsRegistry,
  VARS_DIR,
} from './lib/preset-registry.mjs'

const args = process.argv.slice(2)
const themeId = args[0]

if (!themeId || themeId.startsWith('--')) {
  console.error('Usage: node scripts/tweakcn-theme-to-preset.mjs <tweakcn-theme-id> [--label "..."] [--industries a,b,c]')
  process.exit(1)
}

function readFlag(name, fallback) {
  const index = args.indexOf(name)
  if (index === -1) return fallback
  return args[index + 1] ?? fallback
}

const presetId = `tweakcn-${themeId}`
const url = `https://tweakcn.com/r/themes/${themeId}.json`
const response = await fetch(url)
if (!response.ok) {
  console.error(`Failed to fetch ${url}: ${response.status}`)
  process.exit(1)
}

const theme = await response.json()
const light = theme.cssVars?.light ?? {}
const dark = theme.cssVars?.dark ?? {}

function varsBlock(vars) {
  return Object.entries(vars)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join('\n')
}

const css = `/* Generated from tweakcn registry: @tweakcn/${themeId} */
/* Source: ${url} */

[data-preset='${presetId}'] {
${varsBlock(light)}
}

[data-preset='${presetId}'].dark,
.dark [data-preset='${presetId}'] {
${varsBlock(dark)}
}
`

const __dirname = dirname(fileURLToPath(import.meta.url))
const cssFile = `${presetId}.css`
const outPath = resolve(VARS_DIR, cssFile)
writeFileSync(outPath, css)

const label = readFlag('--label', themeId.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join(' '))
const industries = readFlag('--industries', 'general').split(',').map((item) => item.trim()).filter(Boolean)

const registry = loadRegistry()
upsertPreset(registry, {
  id: presetId,
  label: `${label} (tweakcn)`,
  description: `Imported from tweakcn theme "${themeId}".`,
  industries,
  source: 'tweakcn',
  coverage: 'full',
  cssFile,
  font: light['font-sans']?.split(',')[0]?.trim().toLowerCase() ?? 'inter',
  shadcnCode: 'b0',
  tweakcnThemeId: themeId,
  registryCommand: `bunx shadcn add @tweakcn/${themeId} -y`,
})
saveRegistry(registry)
syncVarsIndex(registry)
ensureAppCssImportsRegistry(registry)

console.log(`Imported tweakcn theme "${themeId}"`)
console.log(`  CSS:      src/design/presets/vars/${cssFile}`)
console.log(`  Preset:   ${presetId}`)
console.log(`  Registry: src/design/presets/registry.json (updated)`)
console.log('')
console.log('Next: run `bun run apply-brief` after setting brief.designPreset if needed')
