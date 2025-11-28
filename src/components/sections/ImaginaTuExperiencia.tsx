// src/components/sections/ImaginaTuExperiencia.tsx
"use client"; // Asegura que es cliente

import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home.es";
import { sendGTMEvent } from "@/lib/analytics"; // <--- Importar

export default function ImaginaTuExperiencia() {
  const xp = homeContent.experiencia;
  const st = homeContent.story;
  const items = xp.galleryGrid; 

  return (
    <section className="relative isolate bg-dl-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        
        <h2 className="font-display uppercase text-center text-dl-dark tracking-ultra text-4xl md:text-5xl leading-none">
          {xp.h2b}
        </h2>

        {/* CTA centrada */}
        <div className="mt-6 text-center">
          <Link
            href="https://wa.link/1ljf0c?utm_source=sitio-rosatto&utm_medium=ImaginaTuExperiencia&utm_campaign=general"
            target="_blank"
            onClick={() => sendGTMEvent('click_whatsapp', { location: 'imagina_tu_experiencia' })}
            className="inline-flex items-center gap-2 rounded-full bg-dl-magenta text-white px-6 py-3 transition hover:opacity-90"
          >
            <span className="font-medium text-sm">{xp.cta}</span>
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Grid Masonry */}
        <div className="mt-8 columns-2 md:columns-3 gap-4 space-y-4">
          {items.map((it, i) => (
            <figure key={i} className="group overflow-hidden rounded-[12px] bg-white break-inside-avoid">
              <Image
                src={it.src}
                alt={it.alt}
                width={it.width}
                height={it.height}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-auto transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        <div className="py-16 md:py-24"> 
          <h2 className="font-display uppercase text-dl-dark tracking-ultra text-4xl md:text-5xl leading-none">
            {xp.h2c}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed">
            <p>{xp.p3}</p>
            <p>{xp.p4}</p>
          </div>

          <div className="py-16 md:py-24">   
            <h2 className="font-display uppercase text-dl-dark tracking-ultra text-4xl md:text-5xl leading-none">
              {st.h2}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed">
              <p>{st.p1}</p>
              <p>{st.p2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}