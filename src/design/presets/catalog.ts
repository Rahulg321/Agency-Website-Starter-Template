import presetRegistry from '~/design/presets/registry.json'
import { designPresetIds, type DesignPresetId } from '~/lib/brief'

export type DesignPreset = {
  id: DesignPresetId
  label: string
  description: string
  industries: string[]
  source: 'builtin' | 'tweakcn'
  coverage: 'accent' | 'full'
  cssFile: string
  font: string
  shadcnCode: string
  tweakcnThemeId?: string
  registryCommand?: string
}

export const designPresetCatalog: DesignPreset[] = presetRegistry.presets.map(
  (preset) => ({
    id: preset.id as DesignPresetId,
    label: preset.label,
    description: preset.description,
    industries: preset.industries,
    source: preset.source as DesignPreset['source'],
    coverage: preset.coverage as DesignPreset['coverage'],
    cssFile: preset.cssFile,
    font: preset.font,
    shadcnCode: preset.shadcnCode,
    tweakcnThemeId: preset.tweakcnThemeId,
    registryCommand: preset.registryCommand,
  }),
)

export function getPresetById(id: DesignPresetId): DesignPreset {
  const preset = designPresetCatalog.find((entry) => entry.id === id)
  if (!preset) {
    return designPresetCatalog[0]
  }
  return preset
}

export function getPresetForIndustry(industry: string): DesignPresetId {
  const normalized = industry.toLowerCase()
  const match = designPresetCatalog.find((preset) =>
    preset.industries.some((tag) => normalized.includes(tag) || tag.includes(normalized)),
  )
  return match?.id ?? (presetRegistry.defaultPreset as DesignPresetId)
}

export function listPresetIds(): DesignPresetId[] {
  return [...designPresetIds]
}

export { presetRegistry }
