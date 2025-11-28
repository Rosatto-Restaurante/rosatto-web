// src/components/sections/TuEvento.tsx
"use client"; // <--- Importante agregar esto porque ahora usamos interactividad (onClick)

import Link from "next/link";
import { homeContent } from "@/content/home.es";
import { sendGTMEvent } from "@/lib/analytics";

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
          <h2
            className={[
              "font-display uppercase text-dl-dark",
              "tracking-ultra",
              "text-4xl md:text-5xl leading-none py-10",
            ].join(" ")}
          >
            {te.h2}
          </h2>

          {/* Párrafos */}
          <div className="leading-relaxed space-y-4 text-base">
            <p>{te.p1}</p>
            <p>{te.p2}</p>
            <p>{te.p3}</p>
            <p>{te.p4}</p>
          </div>

          {/* CTA centrada */}
          <div className="mt-8 text-center">
            <Link
              href="https://wa.link/dw9cxl?utm_source=sitio-rosatto&utm_medium=TuEvento&utm_campaign=general"
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