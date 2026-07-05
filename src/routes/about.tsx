import { createFileRoute } from '@tanstack/react-router'
import { siteConfig } from '~/config/site.config'
import { renderAboutPage } from '~/recipes/about-page'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: seo({
      title: `About | ${siteConfig.businessName}`,
      description: siteConfig.tagline,
    }),
  }),
  component: AboutPage,
})

function AboutPage() {
  return renderAboutPage(null, siteConfig)
}
