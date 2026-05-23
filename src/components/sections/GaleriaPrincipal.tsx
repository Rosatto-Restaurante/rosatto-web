// src/components/sections/GaleriaPrincipal.tsx
"use client";

import { homeContent } from "@/content/home.es";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function GaleriaPrincipal() {
  const xp = homeContent.experiencia;
  const items = xp.galleryGrid;

  return (
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
            className="shrink-0 w-[85vw] md:w-[35vw] lg:w-[30vw] h-[65vh] md:h-[75vh] snap-center snap-always relative rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] group"
            style={{ scrollSnapStop: 'always' }}
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
  );
}
