import { createFileRoute } from '@tanstack/react-router'
import { siteConfig } from '~/config/site.config'
import { renderHomeLocalServicePage } from '~/recipes/home-local-service'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: seo({
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      keywords: siteConfig.seo.keywords,
    }),
  }),
  component: HomePage,
})

function HomePage() {
  return renderHomeLocalServicePage(null, siteConfig)
}
