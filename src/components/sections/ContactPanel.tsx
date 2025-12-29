// src/components/sections/ContactPanel.tsx

/**
 * @component ContactPanel
 * @description Panel de información de contacto detallada con VIDEO DE FONDO.
 * * DATOS REALES RESTAURADOS:
 * - WhatsApp Link: https://wa.link/1ljf0c
 * - Google Maps: https://maps.google.com/?q=Rosatto%20Acapulco
 * - Lógica de teléfono: Extrae números de la cadena del CMS.
 * * FUNCIONALIDAD GTM:
 * - Rastrea clics específicos en botones de contacto.
 */

"use client";

// import Image from "next/image"; // <--- Ya no necesitamos Image
import Link from "next/link";
import { homeContent } from "@/content/home.es";
import { sendGTMEvent } from "@/lib/analytics";

export default function ContactPanel() {
  const c = homeContent.contactTeaser;
  
  // ENLACES ORIGINALES
  const waLink = "https://wa.link/1ljf0c"; 
  const phoneLink = `tel:${c.phone.replace(/[^+\d]/g, "")}`;

  const track = (action: string) => {
    sendGTMEvent('contact_click', { method: action, location: 'contact_panel' });
  };

  return (
    <section className="bg-dl-dark text-dl-cream w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        
        {/* Columna Texto */}
        <div className="flex flex-col justify-center px-6 py-16 md:p-16 lg:p-24 order-1">
          <h2 className="font-display uppercase text-3xl md:text-4xl tracking-wide2 text-white">
            {c.h2}
          </h2>
          <p className="mt-4 text-base leading-relaxed opacity-90 max-w-md">
            {c.p}
          </p>

          <div className="mt-10 space-y-8">
            {/* Horarios */}
            <div>
              <h3 className="font-display text-lg tracking-ultra uppercase text-dl-gold mb-2">
                HORARIOS
              </h3>
              <div className="space-y-1 text-sm opacity-90">
                {c.horarios.map(([d, h]) => (
                  <div key={d} className="grid grid-cols-[100px_1fr] gap-2">
                    <span>{d}</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ubicación */}
            <div>
              <h3 className="font-display text-lg tracking-ultra uppercase text-dl-gold mb-2">
                UBICACIÓN
              </h3>
              <div className="text-sm opacity-90 max-w-sm">
                <p>Capitán Vasco de Gama 295, Plaza Yamaha, Costa Azul, Acapulco, Gro.</p>
                <div className="mt-3">
                  <Link 
                    href="https://maps.app.goo.gl/WYEhL87o5nDMqrWGA"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline hover:text-dl-gold transition-colors"
                    onClick={() => track('maps')}
                  >
                    {c.ctas.maps}
                  </Link>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="font-display text-lg tracking-ultra uppercase text-dl-gold mb-4">
                CONTACTO
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href={phoneLink}
                  className="inline-block rounded-full bg-dl-gold text-dl-dark px-6 py-3 text-sm font-medium transition hover:bg-white hover:scale-105"
                  onClick={() => track('call')}
                >
                  {c.ctas.call}
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-dl-gold text-dl-gold px-6 py-3 text-sm font-medium transition hover:bg-dl-gold hover:text-dl-dark"
                  onClick={() => track('whatsapp')}
                >
                  {c.ctas.wa}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Columna Video (Reemplaza a Columna Imagen) */}
        {/* Conservamos aspect-[9/16] para móvil y clases de layout */}
        <div className="relative w-full aspect-[9/16] md:aspect-auto md:h-auto order-2 bg-black overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            // Opcional: poster="/assets/home/terraza-Bienvenida-Rosatto.webp"
          >
            <source src="/assets/home/Rosatto-Acapulco-Restaurante.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
        </div>
      </div>
    </section>
  );
}