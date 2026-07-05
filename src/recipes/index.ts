import type { SiteConfig } from '~/config/site.types'
import type { WebsiteBrief } from '~/lib/brief'

export type PageRecipe = (
  brief: WebsiteBrief | null,
  config: SiteConfig,
) => React.ReactNode

export { renderHomeLocalServicePage } from './home-local-service'
export { renderHomeProfessionalPage } from './home-professional'
export { renderAboutPage } from './about-page'
export { renderServicesPage } from './services-page'
export { renderContactPage } from './contact-page'
