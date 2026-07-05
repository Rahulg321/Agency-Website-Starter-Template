import type { SiteConfig } from '~/config/site.types'
import { Separator } from '~/components/ui/separator'

// brief: layout.footer
type FooterSimpleProps = {
  config: SiteConfig
}

export function FooterSimple({ config }: FooterSimpleProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">{config.businessName}</p>
            <p className="text-sm text-muted-foreground">{config.tagline}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-medium">Contact</p>
            <p className="text-muted-foreground">{config.phone}</p>
            <p className="text-muted-foreground">{config.email}</p>
            <p className="text-muted-foreground">{config.address}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-medium">Hours</p>
            <p className="text-muted-foreground">{config.hours}</p>
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
