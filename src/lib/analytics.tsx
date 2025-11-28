// src/lib/analytics.tsx
"use client";

import { GoogleTagManager } from '@next/third-parties/google';

/**
 * @component Analytics
 * @description Carga el script de Google Tag Manager optimizado para Next.js.
 * Utiliza el ID proporcionado: GTM-WXBV4ZJ3
 */
export function Analytics() {
  // Usamos tu ID específico directamente para asegurar la conexión
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WXBV4ZJ3';

  return <GoogleTagManager gtmId={gtmId} />;
}

/**
 * @function sendGTMEvent
 * @description Utilidad segura para enviar eventos al DataLayer.
 * @param event Nombre del evento (ej. 'conversion_intent')
 * @param value Objeto con parámetros adicionales (ej. { location: 'header' })
 */
export const sendGTMEvent = (event: string, value?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: event,
      ...value
    });
  }
};