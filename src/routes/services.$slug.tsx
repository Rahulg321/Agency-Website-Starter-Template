import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import { siteConfig } from '~/config/site.config'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/services/$slug')({
  head: ({ params }) => {
    const service = siteConfig.services.find((item) => item.slug === params.slug)
    return {
      meta: seo({
        title: service
          ? `${service.title} | ${siteConfig.businessName}`
          : `Service | ${siteConfig.businessName}`,
        description: service?.description ?? siteConfig.seo.description,
      }),
    }
  },
  component: ServiceDetailPage,
})

function ServiceDetailPage() {
  const { slug } = Route.useParams()
  const service = siteConfig.services.find((item) => item.slug === slug)

  if (!service) {
    return (
      <section className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-16">
        <h1 className="text-3xl font-bold">Service not found</h1>
        <Button render={<Link to="/services" />}>View all services</Button>
      </section>
    )
  }

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">{service.title}</h1>
      <p className="text-lg text-muted-foreground">{service.description}</p>
      <Button render={<Link to="/contact" />}>{siteConfig.primaryCta.label}</Button>
    </section>
  )
}
