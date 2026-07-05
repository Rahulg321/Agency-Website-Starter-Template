#!/usr/bin/env node
import {
  loadRegistry,
  syncVarsIndex,
  ensureAppCssImportsRegistry,
} from './lib/preset-registry.mjs'

const registry = loadRegistry()
const indexPath = syncVarsIndex(registry)
ensureAppCssImportsRegistry(registry)

console.log(`Synced ${registry.presets.length} presets`)
console.log(`  → ${indexPath}`)
console.log(`  → src/styles/app.css`)
