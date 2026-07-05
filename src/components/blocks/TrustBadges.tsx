import { Badge } from '~/components/ui/badge'
import type { TrustBadge } from '~/components/blocks/types'

// brief: sections.trust-badges
type TrustBadgesProps = {
  headline?: string
  badges: TrustBadge[]
}

export function TrustBadges({
  headline = 'Why customers trust us',
  badges,
}: TrustBadgesProps) {
  return (
    <section className="py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4">
        <h2 className="text-2xl font-bold tracking-tight">{headline}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4"
            >
              <Badge variant="secondary">{badge.label}</Badge>
              <p className="text-xl font-semibold">{badge.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
