import { useEffect } from 'react'
import { FooterSimple } from '~/components/blocks/FooterSimple'
import { HeaderSticky } from '~/components/blocks/HeaderSticky'
import { siteConfig } from '~/config/site.config'
import { applyDesignPreset } from '~/design/presets'

type SiteLayoutProps = {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  useEffect(() => {
    applyDesignPreset(siteConfig.designPreset)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderSticky config={siteConfig} />
      <main className="flex-1">{children}</main>
      <FooterSimple config={siteConfig} />
    </div>
  )
}
