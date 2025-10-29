// src/components/sections/StoryPanel.tsx
// ★ 2.2 Fix: fondo claro al estilo “Dolores”, padding visible en el panel,
// ★ tipografía centrada + H2 en MAYÚSCULAS, imagen después del segundo párrafo.

import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home.es";

export default function StoryPanel() {
  const xp = homeContent.experiencia;

  return (
    <section
      className="relative isolate" // ★ isolate evita que padres con -mx afecten visualmente
    >
      <div className="mx-auto max-w-6xl px-[1.5rem] sm:px-10 lg:px-14 py-[5.5rem] md:py-20">
        {/* Panel claro con padding propio (aquí es donde SÍ verás el cambio) ★ */}
        <div
        
        >
          {/* H2 display centrado y en MAYÚSCULAS ★ */}
          <h2
            className={[
              "font-display uppercase text-center text-dl-dark",
              "tracking-[.20rem]", // ★ caps con aire editorial
              "text-[2.3rem] md:text-[2.6rem] leading-[1]",
  
            ].join(" ")}
          >
            {xp.h2a}
          </h2>

          {/* Párrafos 1–2 centrados con ancho de lectura cómodo */}
          <div className="mt-6 md:mt-7 space-y-4 mx-auto max-w-3xl text-center text-[1.05rem] leading-relaxed">
            <p>{xp.p1}</p>
            <p>{xp.p2}</p>
          </div>
        </div> 
      </div>      
          {/* Imagen intermedia: bahía de Acapulco ★
              Sube el archivo a: /public/assets/home/bahia-de-acapulco.jpg */}
          <div className="mt-[0rem] md:mt-10">
            <div className="w-full h-auto ">
              <Image
                src="/assets/home/bahia-de-acapulco.jpg"
                alt="Bahía de Acapulco"
                width={1600}
                height={900}
                className="w-full h-auto"
                priority={false}
              />
            </div>
          </div>

    </section>
  );
}

