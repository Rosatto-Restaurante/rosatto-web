import { DefaultSeoProps } from 'next-seo'

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | Rosatto Acapulco',
  defaultTitle: 'Rosatto – Cocina mediterránea en Costa Azul',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'Rosatto',
    url: 'https://rosatto.com.mx',
    images: [{ url: '/assets/og/rosatto-home.jpg' }],
  },
  additionalLinkTags: [
    { rel: 'alternate', hrefLang: 'es', href: 'https://rosatto.com.mx/' },
    { rel: 'alternate', hrefLang: 'en', href: 'https://rosatto.com.mx/en/' }
  ],
}
