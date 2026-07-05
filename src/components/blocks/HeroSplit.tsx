import { Link } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import type { CTA } from '~/components/blocks/types'

// brief: sections.hero.split
type HeroSplitProps = {
  headline: string
  subheadline: string
  primaryCta: CTA
  secondaryCta?: CTA
  imageSrc?: string
  imageAlt?: string
}

export function HeroSplit({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  imageSrc = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&auto=format&fit=crop',
  imageAlt = 'Service professional at work',
}: HeroSplitProps) {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {headline}
          </h1>
          <p className="text-lg text-muted-foreground">{subheadline}</p>
          <div className="flex flex-wrap gap-3">
            <Button render={<Link to={primaryCta.href} />}>{primaryCta.label}</Button>
            {secondaryCta ? (
              <Button variant="outline" render={<Link to={secondaryCta.href} />}>
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="aspect-[4/3] size-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
