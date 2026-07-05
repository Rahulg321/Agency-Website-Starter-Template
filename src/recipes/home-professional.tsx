import type { SiteConfig } from '~/config/site.types'
import type { WebsiteBrief } from '~/lib/brief'
import {
  CTABanner,
  FAQAccordion,
  HeroCentered,
  ServicesGrid,
  StatsBar,
} from '~/components/blocks'

export function renderHomeProfessionalPage(
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
      <HeroCentered
        headline={config.seo.title}
        subheadline={config.tagline}
        primaryCta={config.primaryCta}
        secondaryCta={config.secondaryCta}
      />
      <StatsBar stats={config.stats} />
      <ServicesGrid items={serviceItems} />
      <FAQAccordion faqs={config.faqs} />
      <CTABanner
        headline="Schedule a consultation"
        subheadline="Speak with our team about your project."
        cta={config.primaryCta}
      />
    </>
  )
}
