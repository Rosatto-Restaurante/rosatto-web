// middleware.ts

/**
 * @middleware Seguridad y Routing
 * @description Maneja cabeceras de seguridad y redirecciones de idioma.
 * * * FUNCIONALIDADES DE SEGURIDAD (CSP):
 * - Define una "Lista Blanca" de dominios permitidos para ejecutar scripts.
 * - PERMITE: Google Tag Manager, Analytics, Facebook Pixel, Vercel Analytics.
 * - BLOQUEA: Cualquier otro script no autorizado (anti-XSS).
 */

import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

// Configuración i18n (Español por defecto)
const i18n = createMiddleware({
  locales: ['es', 'en'],
  defaultLocale: 'es'
})

export default function middleware(request: NextRequest) {
  const response = i18n(request)

  // Política de Seguridad de Contenido (CSP)
  // Aquí listamos los dominios de Marketing permitidos.
  const csp = [
    "default-src 'self'",
    
    // Scripts permitidos: GTM, GA4, Meta Pixel
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://connect.facebook.net https://*.facebook.com https://va.vercel-scripts.com",
    
    // Estilos permitidos (Google Fonts)
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    
    // Imágenes permitidas (Pixels de seguimiento usan imágenes de 1px)
    "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com https://*.facebook.com https://www.facebook.com https://*.google.com https://*.google.com.mx",
    
    // Conexiones permitidas (Envío de eventos)
    "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.facebook.com https://connect.facebook.net",
    
    // Fuentes
    "font-src 'self' https://fonts.gstatic.com",
    
    // Iframes permitidos (Mapas)
    "frame-src 'self' https://*.google.com https://*.facebook.com", 
    
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ')

  // Inyección de cabeceras
  response.headers.set('Content-Security-Policy', csp)
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')

  return response
}

// Configuración del Matcher para evitar procesar archivos estáticos
export const config = {
  matcher: ['/', '/(es|en)/:path*']
}