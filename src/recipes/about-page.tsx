import type { SiteConfig } from '~/config/site.types'
import type { WebsiteBrief } from '~/lib/brief'
import { CTASplit, HeroCentered, TeamGrid, TrustBadges } from '~/components/blocks'

export function renderAboutPage(_brief: WebsiteBrief | null, config: SiteConfig) {
  return (
    <>
      <HeroCentered
        headline={`About ${config.businessName}`}
        subheadline={config.tagline}
        primaryCta={config.primaryCta}
      />
      <TeamGrid members={config.team} />
      <TrustBadges badges={config.trustBadges} />
      <CTASplit
        headline="Work with a team you can trust"
        subheadline="Licensed professionals serving the Denver metro for over 15 years."
        cta={config.primaryCta}
      />
    </>
  )
}
