import { Link } from '@tanstack/react-router'
import type { SiteConfig } from '~/config/site.types'
import { Separator } from '~/components/ui/separator'

// brief: layout.footer (expanded)
type FooterMultiColumnProps = {
  config: SiteConfig
}

export function FooterMultiColumn({ config }: FooterMultiColumnProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2 md:col-span-2">
            <p className="text-lg font-semibold">{config.businessName}</p>
            <p className="text-sm text-muted-foreground">{config.tagline}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Services</p>
            <ul className="flex flex-col gap-1">
              {config.services.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Service areas</p>
            <ul className="flex flex-col gap-1">
              {config.serviceAreas.map((area) => (
                <li key={area} className="text-sm text-muted-foreground">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator />
        <p className="text-sm text-muted-foreground">
          © {year} {config.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
