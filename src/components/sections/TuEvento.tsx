// src/components/sections/TuEvento.tsx
"use client"; // <--- Importante agregar esto porque ahora usamos interactividad (onClick)

import Link from "next/link";
import Image from "next/image";
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
    <section className="relative isolate bg-dl-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna de Texto */}
          <div>
            <RevealTitle
              text={te.h2}
              className={[
                "font-display uppercase text-dl-dark",
                "tracking-ultra",
                "text-4xl md:text-5xl leading-none mb-8",
              ].join(" ")}
            />

            {/* Párrafos */}
            <div className="leading-relaxed space-y-4 text-base">
              <p className="reveal-text">{te.p1}</p>
              <p className="reveal-text">{te.p2}</p>
              <p className="reveal-text">{te.p3}</p>
              <p className="reveal-text">{te.p4}</p>
            </div>

            {/* CTA */}
            <div className="mt-8 text-left">
              <Link
                href="https://api.whatsapp.com/send?phone=5217444097491&text=Hola%2C%20quiero%20hacer%20una%20reserva%20en%20Rosatto%20para%20el%20d%C3%ADa%20___%20a%20las%20___.%20Somos%20___%20personas.%20%C2%BFTienen%20disponibilidad%3F"
                target="_blank"
                onClick={handleEventClick}
                className="inline-flex items-center gap-2 rounded-full bg-dl-magenta text-white px-6 py-3 transition hover:opacity-90"
              >
                <span className="font-medium text-sm">{te.cta}</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* Columna de Imagen */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl w-full aspect-[3/2] md:aspect-auto md:h-[65vh] transform transition-transform duration-700 hover:scale-[1.02]">
            <Image
              src="/assets/gallery/postre-de-cumpleanos-rosatto-acapulco.webp"
              alt="Postre de cumpleaños decorado con flores comestibles. Celebración personalizada en Rosatto Acapulco."
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}