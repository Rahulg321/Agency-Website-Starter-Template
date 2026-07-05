import { Link } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import type { CTA } from '~/components/blocks/types'

// brief: sections.cta.split
type CTASplitProps = {
  headline: string
  subheadline: string
  cta: CTA
  imageSrc?: string
  imageAlt?: string
}

export function CTASplit({
  headline,
  subheadline,
  cta,
  imageSrc = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop',
  imageAlt = 'Team at work',
}: CTASplitProps) {
  return (
    <section className="py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight">{headline}</h2>
          <p className="text-muted-foreground">{subheadline}</p>
          <Button render={<Link to={cta.href} />}>{cta.label}</Button>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border">
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
