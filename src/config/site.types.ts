import type { DesignPresetId } from '~/lib/brief'

export type NavLink = {
  label: string
  href: string
}

export type SiteConfig = {
  businessName: string
  industry: string
  tagline: string
  phone: string
  email: string
  address: string
  hours: string
  designPreset: DesignPresetId
  navigation: NavLink[]
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  seo: {
    title: string
    description: string
    keywords?: string
  }
  services: Array<{
    slug: string
    title: string
    description: string
    icon?: string
  }>
  reviews: Array<{
    quote: string
    author: string
    rating?: number
  }>
  trustBadges: Array<{ label: string; value: string }>
  stats: Array<{ label: string; value: string }>
  team: Array<{ name: string; role: string; bio: string }>
  faqs: Array<{ question: string; answer: string }>
  serviceAreas: string[]
}
