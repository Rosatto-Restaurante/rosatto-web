// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://rosatto.com.mx'
  const routes = [''] as const
  const lastMod = new Date()

  // Solo generamos la versión en Español
  const es = routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: lastMod,
    changeFrequency: 'weekly' as 'weekly',
    priority: 1.0,
    // Eliminamos la propiedad 'alternates' por ahora
  }))

  // Retornamos solo el array de español
  return [...es]
}
