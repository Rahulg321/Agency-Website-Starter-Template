import { Link } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '~/components/ui/field'
import { Input } from '~/components/ui/input'
import type { CTA } from '~/components/blocks/types'

// brief: sections.hero.with-form
type HeroWithFormProps = {
  headline: string
  subheadline: string
  primaryCta: CTA
}

export function HeroWithForm({ headline, subheadline, primaryCta }: HeroWithFormProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center md:py-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{headline}</h1>
          <p className="text-lg text-primary-foreground/80">{subheadline}</p>
        </div>
        <div className="rounded-2xl border border-primary-foreground/20 bg-background p-6 text-foreground">
          <p className="mb-4 text-lg font-semibold">Request a callback</p>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="hero-name">Name</FieldLabel>
              <Input id="hero-name" placeholder="Your name" />
            </Field>
            <Field>
              <FieldLabel htmlFor="hero-phone">Phone</FieldLabel>
              <Input id="hero-phone" type="tel" placeholder="(555) 000-0000" />
            </Field>
            <Button className="w-full" render={<Link to={primaryCta.href} />}>
              {primaryCta.label}
            </Button>
          </FieldGroup>
        </div>
      </div>
    </section>
  )
}
