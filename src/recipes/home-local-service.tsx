import type { SiteConfig } from '~/config/site.types'
import type { WebsiteBrief } from '~/lib/brief'
import {
  CTABanner,
  HeroSplit,
  ServicesGrid,
  TestimonialsCarousel,
  TrustBadges,
} from '~/components/blocks'

export function renderHomeLocalServicePage(
  _brief: WebsiteBrief | null,
  config: SiteConfig,
) {
  const serviceItems = config.services.map((service) => ({
    title: service.title,
    description: service.description,
    slug: service.slug,
  }))

  return (
    <>
      <HeroSplit
        headline={`${config.businessName} — Denver's trusted ${config.industry}`}
        subheadline={config.tagline}
        primaryCta={config.primaryCta}
        secondaryCta={config.secondaryCta}
      />
      <TrustBadges badges={config.trustBadges} />
      <ServicesGrid items={serviceItems} />
      <TestimonialsCarousel testimonials={config.reviews} />
      <CTABanner
        headline="Ready to get started?"
        subheadline="Free estimates. Same-day appointments available."
        cta={config.primaryCta}
      />
    </>
  )
}
