import { createFileRoute } from '@tanstack/react-router'
import { siteConfig } from '~/config/site.config'
import { renderContactPage } from '~/recipes/contact-page'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: seo({
      title: `Contact | ${siteConfig.businessName}`,
      description: `Contact ${siteConfig.businessName} for a free quote.`,
    }),
  }),
  component: ContactPage,
})

function ContactPage() {
  return renderContactPage(null, siteConfig)
}
