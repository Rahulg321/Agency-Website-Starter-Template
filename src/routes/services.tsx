import { createFileRoute } from '@tanstack/react-router'
import { siteConfig } from '~/config/site.config'
import { renderServicesPage } from '~/recipes/services-page'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: seo({
      title: `Services | ${siteConfig.businessName}`,
      description: `Professional ${siteConfig.industry} services in Denver.`,
    }),
  }),
  component: ServicesPage,
})

function ServicesPage() {
  return renderServicesPage(null, siteConfig)
}
