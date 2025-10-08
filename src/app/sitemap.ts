import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://rosatto.com.mx'
  const routes = ['', '/menu', '/booking', '/gallery', '/contact'] as const
  const lastMod = new Date()
  const es = routes.map(r => ({
    url: `${base}${r || '/'}`, lastModified: lastMod,
    changeFrequency: r === '/gallery' || r === '/contact' ? 'monthly' : 'weekly',
    priority: r === '' ? 1.0 : r === '/menu' || r === '/booking' ? 0.9 : 0.7,
    alternates: { languages: { en: `${base}/en${r || '/'}` } }
  }))
  const en = routes.map(r => ({
    url: `${base}/en${r || '/'}`, lastModified: lastMod,
    changeFrequency: r === '/gallery' || r === '/contact' ? 'monthly' : 'weekly',
    priority: r === '' ? 1.0 : r === '/menu' || r === '/booking' ? 0.9 : 0.7,
    alternates: { languages: { es: `${base}${r || '/'}` } }
  }))
  return [...es, ...en]
}
