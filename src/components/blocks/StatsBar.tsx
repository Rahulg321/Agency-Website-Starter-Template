import type { Stat } from '~/components/blocks/types'

// brief: sections.stats
type StatsBarProps = {
  stats: Stat[]
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className="border-y border-border bg-primary py-10 text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 text-center">
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm text-primary-foreground/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
