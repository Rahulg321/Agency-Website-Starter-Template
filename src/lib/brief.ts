import { z } from 'zod'
import presetRegistry from '~/design/presets/registry.json'

const registryPresetIds = presetRegistry.presets.map((preset) => preset.id)

if (registryPresetIds.length === 0) {
  throw new Error('design preset registry must contain at least one preset')
}

export const designPresetIds = registryPresetIds as [
  (typeof registryPresetIds)[number],
  ...(typeof registryPresetIds)[number][],
]

export type DesignPresetId = (typeof designPresetIds)[number]

const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
  variant: z.enum(['default', 'outline']).optional(),
})

const sectionSchema = z.object({
  type: z.string(),
  headline: z.string().optional(),
  subheadline: z.string().optional(),
  items: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string().optional(),
        image: z.string().optional(),
      }),
    )
    .optional(),
})

export const websiteBriefSchema = z.object({
  business: z.object({
    name: z.string(),
    industry: z.string(),
    phone: z.string(),
    email: z.string().email(),
    address: z.string(),
    hours: z.string().optional(),
    tagline: z.string().optional(),
  }),
  designPreset: z.enum(designPresetIds).optional(),
  navigation: z.array(
    z.object({
      label: z.string(),
      href: z.string(),
    }),
  ),
  seo: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.string().optional(),
  }),
  services: z.array(
    z.object({
      slug: z.string(),
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    }),
  ),
  reviews: z.array(
    z.object({
      quote: z.string(),
      author: z.string(),
      rating: z.number().min(1).max(5).optional(),
    }),
  ),
  ctas: z.object({
    primary: ctaSchema,
    secondary: ctaSchema.optional(),
  }),
  pages: z.array(
    z.object({
      slug: z.string(),
      title: z.string(),
      recipe: z
        .enum([
          'home-local-service',
          'home-professional',
          'about-page',
          'services-page',
          'contact-page',
        ])
        .optional(),
      sections: z.array(sectionSchema).optional(),
    }),
  ),
})

export type WebsiteBrief = z.infer<typeof websiteBriefSchema>

export function parseWebsiteBrief(data: unknown): WebsiteBrief {
  return websiteBriefSchema.parse(data)
}
