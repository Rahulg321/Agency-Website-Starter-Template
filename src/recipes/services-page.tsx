import type { SiteConfig } from '~/config/site.types'
import type { WebsiteBrief } from '~/lib/brief'
import {
  CTABanner,
  FAQAccordion,
  HeroCentered,
  ServicesGrid,
} from '~/components/blocks'

export function renderServicesPage(_brief: WebsiteBrief | null, config: SiteConfig) {
  const serviceItems = config.services.map((service) => ({
    title: service.title,
    description: service.description,
    slug: service.slug,
  }))

  return (
    <>
      <HeroCentered
        headline="Our services"
        subheadline="Professional solutions backed by experience and clear pricing."
        primaryCta={config.primaryCta}
      />
      <ServicesGrid
        headline="What we offer"
        subheadline="Every job is handled by licensed professionals."
        items={serviceItems}
      />
      <FAQAccordion faqs={config.faqs} />
      <CTABanner
        headline="Need help choosing a service?"
        cta={config.primaryCta}
      />
    </>
  )
}
