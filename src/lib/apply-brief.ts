import type { WebsiteBrief } from '~/lib/brief'
import type { SiteConfig } from '~/config/site.types'
import { defaultSiteConfig } from '~/config/site.defaults'
import {
  getPresetById,
  getPresetForIndustry,
  presetRegistry,
  type DesignPreset,
} from '~/design/presets/catalog'
import type { DesignPresetId } from '~/lib/brief'

export type PresetResolution = {
  presetId: DesignPresetId
  source: 'brief' | 'industry-inference' | 'default'
  preset: DesignPreset
}

export function resolveDesignPreset(brief: WebsiteBrief): PresetResolution {
  const registryIds = new Set(presetRegistry.presets.map((preset) => preset.id))

  if (brief.designPreset && registryIds.has(brief.designPreset)) {
    return {
      presetId: brief.designPreset,
      source: 'brief',
      preset: getPresetById(brief.designPreset),
    }
  }

  const inferred = getPresetForIndustry(brief.business.industry)
  return {
    presetId: inferred,
    source: brief.designPreset ? 'default' : 'industry-inference',
    preset: getPresetById(inferred),
  }
}

export function applyBriefToSiteConfig(
  brief: WebsiteBrief,
  base: SiteConfig = defaultSiteConfig,
): SiteConfig {
  const { presetId } = resolveDesignPreset(brief)

  return {
    ...base,
    businessName: brief.business.name,
    industry: brief.business.industry,
    tagline: brief.business.tagline ?? base.tagline,
    phone: brief.business.phone,
    email: brief.business.email,
    address: brief.business.address,
    hours: brief.business.hours ?? base.hours,
    designPreset: presetId,
    navigation: brief.navigation,
    primaryCta: brief.ctas.primary,
    secondaryCta: brief.ctas.secondary,
    seo: {
      title: brief.seo.title,
      description: brief.seo.description,
      keywords: brief.seo.keywords,
    },
    services: brief.services,
    reviews: brief.reviews,
  }
}

export function createAppliedBriefReport(brief: WebsiteBrief) {
  const resolution = resolveDesignPreset(brief)
  const siteConfig = applyBriefToSiteConfig(brief)

  return {
    generatedAt: new Date().toISOString(),
    briefIndustry: brief.business.industry,
    requestedPreset: brief.designPreset ?? null,
    resolvedPreset: resolution.presetId,
    resolutionSource: resolution.source,
    presetLabel: resolution.preset.label,
    presetCoverage: resolution.preset.coverage,
    presetSource: resolution.preset.source,
    htmlDataPreset: siteConfig.designPreset,
    registryPath: 'src/design/presets/registry.json',
    applyCommand: 'bun run apply-brief',
  }
}
