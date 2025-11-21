// src/components/sections/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home.es";

export default function Hero() {
  const { h1, h2, cta, video, poster } = homeContent.hero ?? {};
  const posterUrl = poster || "/assets/home/experiencia-cena-y-brindis-en-rosatto-costa-azul.webp";
  const videoUrl =
    (video || "/assets/home/video-Rosatto-desktop_1.mp4") +
    (video?.includes("?") ? "" : "?v=5"); // cache-bust por si re-encodeaste

  const hasHeadline = typeof h2 === "string" && h2.trim().length > 0;

  return (
    <>
      {/* MEDIA full-bleed en bloque (sin absolute + spacer) */}
      <section
        aria-label="Hero video"
        className="relative w-full h-[66svh] md:h-[58svh] overflow-hidden"
      >
        {/* Video ENCIMA del poster, siempre visible */}
        <video
          className="absolute inset-0 h-full w-full object-cover z-10"
          poster={posterUrl}
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Poster debajo (fallback instantáneo) */}
        <Image
          src={posterUrl}
          alt={h1 || "Imagen de portada"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center z-0"
        />

         {/* Overlay de contraste */}
        <div className="absolute inset-0 z-20 bg-black/40" />

        {/* ----- INICIO DE LA MODIFICACIÓN ----- */}
        {/* REFACTOR: Z-index aumentado de 25 a 40 para que esté SOBRE el panel de texto (z-30) */}
        <div className="absolute inset-0 z-40 flex items-center justify-center pb-20 md:pb-24 pointer-events-none">
          <Image
            src="/assets/brand/Logo-Rosatto-horizontal_blanco.svg"
            alt="Rosatto"
            width={200} // Ancho base para Next/Image
            height={200} // Alto base para Next/Image
            priority
            className="w-[200px] md:w-[200px] h-auto" // Clases responsivas
          />
        </div>
        {/* ----- FIN DE LA MODIFICACIÓN ----- */}
      </section>

      

      {/* H1 solo para SEO */}
      {h1 && <h1 className="sr-only">{h1}</h1>}

      {/* PANEL con solape sobre el video */}
      <section className="relative z-30 -mt-6 md:-mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {hasHeadline && (
              <div className="hero-panel">
                <h2 className="hero-title text-center">{h2}</h2>

                {cta && (
                  <div className="mt-6 md:mt-8 text-center">
                    <Link href="https://bit.ly/3JR561v" className="hero-cta">
                      <span className="label">{cta}</span>
                      <span aria-hidden className="arrow">→</span>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
