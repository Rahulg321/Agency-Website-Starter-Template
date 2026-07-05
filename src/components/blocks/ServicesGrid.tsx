import { Link } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import type { SectionItem } from '~/components/blocks/types'

// brief: sections.services.grid
type ServicesGridProps = {
  headline?: string
  subheadline?: string
  items: SectionItem[]
}

export function ServicesGrid({
  headline = 'Our services',
  subheadline = 'Solutions tailored to your needs.',
  items,
}: ServicesGridProps) {
  return (
    <section className="py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
        <div className="flex max-w-2xl flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight">{headline}</h2>
          <p className="text-muted-foreground">{subheadline}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const slug =
              item.slug ?? item.title.toLowerCase().replace(/\s+/g, '-')
            return (
            <Card key={item.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  to="/services/$slug"
                  params={{ slug }}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Learn more
                </Link>
              </CardContent>
            </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
