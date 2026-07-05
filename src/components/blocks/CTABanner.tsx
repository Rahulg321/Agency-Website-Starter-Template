import { Link } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import type { CTA } from '~/components/blocks/types'

// brief: sections.cta.banner
type CTABannerProps = {
  headline: string
  subheadline?: string
  cta: CTA
}

export function CTABanner({ headline, subheadline, cta }: CTABannerProps) {
  return (
    <section className="bg-primary py-14 text-primary-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight">{headline}</h2>
        {subheadline ? (
          <p className="max-w-2xl text-primary-foreground/80">{subheadline}</p>
        ) : null}
        <Button variant="secondary" size="lg" render={<Link to={cta.href} />}>
          {cta.label}
        </Button>
      </div>
    </section>
  )
}
