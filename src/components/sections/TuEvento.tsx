// src/components/sections/TuEvento.tsx
"use client"; // <--- Importante agregar esto porque ahora usamos interactividad (onClick)

import Link from "next/link";
import { homeContent } from "@/content/home.es";
import { sendGTMEvent } from "@/lib/analytics";
import RevealTitle from "@/components/ui/RevealTitle";

export default function TuEvento() {
  const te = homeContent.tuEvento;

  const handleEventClick = () => {
    sendGTMEvent('conversion_intent', { 
      category: 'events', 
      label: 'plan_event_click' 
    });
  };

  return (
    <section className="relative isolate bg-dl-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        <div className="py-16 md:py-24"> 
          {/* Subtítulo 2 */}
          <RevealTitle
            text={te.h2}
            className={[
              "font-display uppercase text-dl-dark",
              "tracking-ultra",
              "text-4xl md:text-5xl leading-none py-10",
            ].join(" ")}
          />

          {/* Párrafos */}
          <div className="leading-relaxed space-y-4 text-base">
            <p className="reveal-text">{te.p1}</p>
            <p className="reveal-text">{te.p2}</p>
            <p className="reveal-text">{te.p3}</p>
            <p className="reveal-text">{te.p4}</p>
          </div>

          {/* CTA centrada */}
          <div className="mt-8 text-center">
            <Link
              href="https://api.whatsapp.com/send?phone=5217444097491&text=Hola%2C%20quiero%20reservar%20en%20Rosatto%20para%20hoy%2010%20de%20mayo.%20Somos%20___%20personas.%20%C2%BFTienen%20disponibilidad%3F"
              target="_blank" // Agregado para abrir en nueva pestaña
              onClick={handleEventClick} // <--- Aquí conectamos GTM
              className="inline-flex items-center gap-2 rounded-full bg-dl-magenta text-white px-6 py-3 transition hover:opacity-90"
            >
              <span className="font-medium text-sm">{te.cta}</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}