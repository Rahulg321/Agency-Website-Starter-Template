import { Link } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import type { CTA } from '~/components/blocks/types'

// brief: sections.hero.centered
type HeroCenteredProps = {
  headline: string
  subheadline: string
  primaryCta: CTA
  secondaryCta?: CTA
}

export function HeroCentered({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: HeroCenteredProps) {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center md:py-24">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {headline}
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">{subheadline}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button render={<Link to={primaryCta.href} />}>{primaryCta.label}</Button>
          {secondaryCta ? (
            <Button variant="outline" render={<Link to={secondaryCta.href} />}>
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
