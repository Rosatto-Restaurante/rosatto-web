// src/components/sections/ImaginaTuExperiencia.tsx
"use client"; // Asegura que es cliente

import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home.es";
import { sendGTMEvent } from "@/lib/analytics"; // <--- Importar
import RevealTitle from "@/components/ui/RevealTitle";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function ImaginaTuExperiencia() {
  const xp = homeContent.experiencia;
  const st = homeContent.story;
  const items = xp.galleryGrid; 

  return (
    <section className="relative isolate bg-dl-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        
        <RevealTitle
          text={xp.h2b}
          className="font-display uppercase text-center text-dl-dark tracking-ultra text-4xl md:text-5xl leading-none"
        />

        {/* CTA centrada */}
        <div className="mt-6 text-center">
          <Link
            href="https://api.whatsapp.com/send?phone=5217444097491&text=Hola%2C%20quiero%20hacer%20una%20reserva%20en%20Rosatto%20para%20el%20d%C3%ADa%20___%20a%20las%20___.%20Somos%20___%20personas.%20%C2%BFTienen%20disponibilidad%3F"
            target="_blank"
            onClick={() => sendGTMEvent('click_whatsapp', { location: 'imagina_tu_experiencia' })}
            className="inline-flex items-center gap-2 rounded-full bg-dl-magenta text-white px-6 py-3 transition hover:opacity-90"
          >
            <span className="font-medium text-sm">{xp.cta}</span>
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* --- GALERÍA DINÁMICA (CARRUSEL) --- */}
        <div className="mt-16 w-full relative">
          {/* Contenedor de Scroll Horizontal */}
          <div 
            className="flex overflow-x-auto snap-x snap-mandatory pb-8 pt-4 gap-6 px-[7.5vw] md:px-[4vw]" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* CSS para ocultar el scrollbar en webkit (Safari/Chrome) */}
            <style dangerouslySetInnerHTML={{__html: `
              .flex.overflow-x-auto::-webkit-scrollbar { display: none; }
            `}} />

            {items.map((it, i) => (
              <div 
                key={i} 
                className="shrink-0 w-[85vw] md:w-[35vw] lg:w-[30vw] h-[65vh] md:h-[75vh] snap-center relative rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] group"
              >
                {/* Envoltorio Absoluto para evitar conflictos de posicionamiento */}
                <div className="absolute inset-0 w-full h-full bg-dl-cream">
                  <ParallaxImage
                    src={it.src}
                    alt={it.alt}
                    useNativeImg={true}
                    loading="lazy"
                    containerClassName="w-full h-full"
                    imageClassName="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08] group-active:scale-[1.05]"
                    speed={0.15}
                  />
                </div>
                {/* Sutil sombra interna */}
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] pointer-events-none rounded-3xl"></div>
              </div>
            ))}
          </div>
          <p className="text-center text-dl-grey text-sm md:hidden mt-2 animate-pulse">← Desliza horizontalmente →</p>
        </div>

        <div className="py-16 md:py-24"> 
          <RevealTitle
            text={xp.h2c}
            className="font-display uppercase text-dl-dark tracking-ultra text-4xl md:text-5xl leading-none"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed">
            <p className="reveal-text">{xp.p3}</p>
            <p className="reveal-text">{xp.p4}</p>
          </div>

          <div className="py-16 md:py-24">   
            <RevealTitle
              text={st.h2}
              className="font-display uppercase text-dl-dark tracking-ultra text-4xl md:text-5xl leading-none"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed">
              <p className="reveal-text">{st.p1}</p>
              <p className="reveal-text">{st.p2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}