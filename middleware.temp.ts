// middleware.ts
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

// 1) i18n routing (redirige "/" -> "/es" y permite "/es" y "/en")
const i18n = createMiddleware({
  locales: ['es', 'en'],
  defaultLocale: 'es'
})

export default function middleware(request: NextRequest) {
  // Deja que next-intl haga el ruteo i18n
  const response = i18n(request)

  // 2) Security headers
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://www.google-analytics.com",
    "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ')
  response.headers.set('Content-Security-Policy', csp)
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-Frame-Options', 'DENY')

  return response
}

// ¡Clave!: este matcher sí incluye la raíz "/" y las rutas /es/* y /en/*
export const config = {
  matcher: ['/', '/(es|en)/:path*']
}
