// src/lib/analytics.tsx
'use client'

import { GoogleTagManager } from '@next/third-parties/google'

export function Analytics() {
  // Usamos tu ID específico
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WXBV4ZJ3'

  return <GoogleTagManager gtmId={gtmId} />
}

// Utilidad segura para enviar eventos (conversiones, clicks, etc.)
// Úsala en cualquier componente: sendGTMEvent('nombre_evento', { ...datos })
export const sendGTMEvent = (event: string, value?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: event,
      ...value
    });
  }
}
