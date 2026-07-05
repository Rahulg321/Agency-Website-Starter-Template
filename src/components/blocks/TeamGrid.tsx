import { Avatar, AvatarFallback } from '~/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import type { TeamMember } from '~/components/blocks/types'

// brief: sections.team
type TeamGridProps = {
  headline?: string
  members: TeamMember[]
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function TeamGrid({
  headline = 'Meet the team',
  members,
}: TeamGridProps) {
  return (
    <section className="py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
        <h2 className="text-3xl font-bold tracking-tight">{headline}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {members.map((member) => (
            <Card key={member.name}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="size-12">
                  <AvatarFallback>{initials(member.name)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
