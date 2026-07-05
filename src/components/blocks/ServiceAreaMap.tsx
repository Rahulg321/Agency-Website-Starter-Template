import { Badge } from '~/components/ui/badge'

// brief: sections.service-areas
type ServiceAreaMapProps = {
  headline?: string
  areas: string[]
}

export function ServiceAreaMap({
  headline = 'Areas we serve',
  areas,
}: ServiceAreaMapProps) {
  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4">
        <h2 className="text-3xl font-bold tracking-tight">{headline}</h2>
        <div className="flex flex-wrap gap-2">
          {areas.map((area) => (
            <Badge key={area} variant="outline" className="px-3 py-1 text-sm">
              {area}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
