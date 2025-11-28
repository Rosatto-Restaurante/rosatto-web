// src/components/layout/Footer.tsx

/**
 * @component Footer
 * @description Pie de página con enlaces completos y tracking.
 * * DATOS REALES RESTAURADOS:
 * - Teléfono: +52 744 409 7491
 * - Dirección: Cap. Vasco de Gama 295...
 * - Redes: Links completos con UTMs originales.
 * * FUNCIONALIDAD GTM:
 * - Rastrea clics salientes (Social, Mapas, Reviews, Teléfono).
 */

"use client";

import Link from "next/link";
import { sendGTMEvent } from "@/lib/analytics";

export default function Footer() {
  
  const trackClick = (type: string, label: string) => {
    sendGTMEvent('click_footer', { type, label });
  };

  return (
    <footer className="bg-dl-dark text-dl-cream">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Columna 1: Contacto */}
        <div>
          <h4 className="font-sans tracking-wide2 uppercase text-dl-magenta text-lg mb-3">Sede Costa Azul</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Cap. Vasco de Gama 295, Plaza Yamaha</li>
            <li>Acapulco, Gro.</li>
            <li>
              <Link 
                href="tel:+527444097491" // TELÉFONO ORIGINAL
                className="underline hover:opacity-80"
                onClick={() => trackClick('contact', 'phone')}
              >
                +52 744 409 7491
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Columna 2 */}
        <div>
          <h4 className="font-sans tracking-wide2 uppercase text-dl-magenta text-lg mb-3">Sede Diamante</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Próximamente…</li>
          </ul>
        </div>
        
        {/* Columna 3: Social & Opiniones */}
        <div>
          <h4 className="font-sans tracking-wide2 uppercase text-dl-magenta text-lg mb-3">Social</h4>
          <ul className="space-y-2 text-sm opacity-90 mb-6">
            <li>
              <a 
                href="https://www.facebook.com/p/Rosatto-61557160864819/?utm_source=sitio-rosatto&utm_medium=footer&utm_campaign=general" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-dl-white transition-colors"
                onClick={() => trackClick('social', 'facebook')}
              >
                Facebook
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/rosatto_acapulco/?utm_source=sitio-rosatto&utm_medium=footer&utm_campaign=general" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-dl-white transition-colors"
                onClick={() => trackClick('social', 'instagram')}
              >
                Instagram
              </a>
            </li>
            <li>
              <a 
                href="https://www.tiktok.com/@rosatto.acapulco?utm_source=sitio-rosatto&utm_medium=footer&utm_campaign=general" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-dl-white transition-colors"
                onClick={() => trackClick('social', 'tiktok')}
              >
                TikTok
              </a>
            </li>
          </ul>

          <h4 className="font-sans tracking-wide2 uppercase text-dl-magenta text-lg mb-3">Opiniones</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <a 
                href="https://www.tripadvisor.com.mx/Restaurant_Review-g150787-d27981585-Reviews-Rosatto-Acapulco_Pacific_Coast.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-dl-white transition-colors"
                onClick={() => trackClick('review', 'tripadvisor')}
              >
                TripAdvisor
              </a>
            </li>
            <li>
              <a 
                href="https://www.opentable.com.mx/r/rosatto-acapulco-de-juarez" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-dl-white transition-colors"
                onClick={() => trackClick('review', 'opentable')}
              >
                OpenTable
              </a>
            </li>
            <li>
              <a 
                href="https://maps.app.goo.gl/WYEhL87o5nDMqrWGA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-dl-white transition-colors"
                onClick={() => trackClick('map', 'google_maps')}
              >
                Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs opacity-70 space-y-2">
        <p>© {new Date().getFullYear()} Rosatto</p>
        <div className="space-y-1">
          <Link href="/politica-privacidad" className="block hover:text-dl-white">
            Política de privacidad
          </Link>
          <Link href="/politica-cookies" className="block hover:text-dl-white">
            Política de cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}