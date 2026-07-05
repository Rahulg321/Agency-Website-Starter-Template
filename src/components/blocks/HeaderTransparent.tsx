import { Link } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import type { SiteConfig } from '~/config/site.types'
import { cn } from '~/lib/utils'

// brief: layout.header (hero overlay)
type HeaderTransparentProps = {
  config: SiteConfig
  className?: string
}

export function HeaderTransparent({ config, className }: HeaderTransparentProps) {
  return (
    <header className={cn('absolute inset-x-0 top-0 z-40', className)}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="text-lg font-semibold text-primary-foreground">
          {config.businessName}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {config.navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button
          size="sm"
          variant="secondary"
          render={<Link to={config.primaryCta.href} />}
        >
          {config.primaryCta.label}
        </Button>
      </div>
    </header>
  )
}
