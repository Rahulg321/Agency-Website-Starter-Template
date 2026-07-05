import { Link } from '@tanstack/react-router'
import { PhoneIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import type { SiteConfig } from '~/config/site.types'
import { cn } from '~/lib/utils'

// brief: layout.header
type HeaderStickyProps = {
  config: SiteConfig
  className?: string
}

export function HeaderSticky({ config, className }: HeaderStickyProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80',
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="text-lg font-semibold text-foreground">
          {config.businessName}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {config.navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: 'text-foreground' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" render={<a href={`tel:${config.phone}`} />}>
            <PhoneIcon data-icon="inline-start" />
            {config.phone}
          </Button>
          <Button size="sm" render={<Link to={config.primaryCta.href} />}>
            {config.primaryCta.label}
          </Button>
        </div>
      </div>
    </header>
  )
}
