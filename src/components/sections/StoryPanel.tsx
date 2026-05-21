// src/components/sections/StoryPanel.tsx
// ★ 2.2 Fix: fondo claro al estilo “Dolores”, padding visible en el panel,
// ★ tipografía centrada + H2 en MAYÚSCULAS, imagen después del segundo párrafo.

import Link from "next/link";
import { homeContent } from "@/content/home.es";
import RevealTitle from "@/components/ui/RevealTitle";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function StoryPanel() {
  const xp = homeContent.experiencia;

  return (
    <section
      className="relative isolate" // ★ isolate evita que padres con -mx afecten visualmente
    >
      {/* REFACTOR: Paddings arbitrarios (px-[1.5rem], py-[5.5rem], etc.) reemplazados por utilidades estándar. */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Panel claro con padding propio (aquí es donde SÍ verás el cambio) ★ */}
        <div>
          {/* H2 display centrado y en MAYÚSCULAS ★ */}
          <RevealTitle
            text={xp.h2a}
            className={[
              "font-display uppercase text-center text-dl-dark",
              // REFACTOR: 'tracking-[.20rem]' (arbitrario) -> 'tracking-ultra' (de tu config).
              "tracking-ultra",
              // REFACTOR: 'text-[2.3rem] md:text-[2.6rem] leading-[1]' (arbitrario) -> utilidades estándar.
              "text-4xl md:text-5xl leading-none",
            ].join(" ")}
          />

          {/* Párrafos 1–2 centrados con ancho de lectura cómodo */}
          {/* REFACTOR: 'text-[1.05rem]' (arbitrario) -> 'text-base'. 'space-y-4' ya estaba (¡bien!). */}
          <div className="mt-6 md:mt-7 space-y-4 mx-auto max-w-3xl text-center text-base leading-relaxed">
            <p className="reveal-text">{xp.p1}</p>
            <p className="reveal-text">{xp.p2}</p>
          </div>
        </div>
      </div>
      {/* Imagen intermedia: bahía de Acapulco ★
          Sube el archivo a: /public/assets/home/bahia-de-acapulco.jpg */}
      {/* REFACTOR: 'mt-[0rem]' (arbitrario) -> 'mt-0'. */}
      <div className="mt-0 md:mt-10">
        <ParallaxImage
          src="/assets/home/bahia-de-acapulco.jpg"
          alt="Bahía de Acapulco"
          fill
          sizes="100vw"
          containerClassName="w-full h-[35svh] sm:h-[45vh] md:h-[65vh]"
          priority={false}
          speed={0.15}
        />
      </div>
    </section>
  );
}