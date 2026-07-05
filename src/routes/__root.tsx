/// <reference types="vite/client" />
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { ThemeProvider } from 'next-themes'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'
import { Toaster } from '~/components/ui/sonner'
import { siteConfig } from '~/config/site.config'
import { SiteLayout } from '~/layouts/SiteLayout'
import appCss from '~/styles/app.css?url'
import { seo } from '~/utils/seo'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...seo({
        title: siteConfig.seo.title,
        description: siteConfig.seo.description,
        keywords: siteConfig.seo.keywords,
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-preset={siteConfig.designPreset} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SiteLayout>{children}</SiteLayout>
          <Toaster />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
