// src/components/sections/Hero.tsx

/**
 * @component Hero
 * @description Componente de portada principal (Above the fold).
 * * DATOS REALES RESTAURADOS:
 * - Enlace de reserva: https://bit.ly/3JR561v
 * - Video/Poster: Carga dinámica desde home.es.ts con fallback local.
 * * FUNCIONALIDAD GTM:
 * - Evento: 'click_hero_cta' cuando se pulsa el botón "Reservar".
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home.es";
import { sendGTMEvent } from "@/lib/analytics"; // Tracking

export default function Hero() {
  const { h1, h2, cta, video, poster } = homeContent.hero ?? {};
  
  // Fallbacks originales restaurados
  const posterUrl = poster || "/assets/home/experiencia-cena-y-brindis-en-rosatto-costa-azul.webp";
  // Cache-busting original (?v=5)
  const videoUrl =
    (video || "/assets/home/video-Rosatto-desktop_1.mp4") +
    (video?.includes("?") ? "" : "?v=5"); 

  const hasHeadline = typeof h2 === "string" && h2.trim().length > 0;

  return (
    <>
      {/* Contenedor del video full-screen */}
      <section
        aria-label="Hero video"
        className="relative w-full h-[66svh] md:h-[58svh] overflow-hidden"
      >
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

        <Image
          src={posterUrl}
          alt={h1 || "Imagen de portada"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center z-0"
        />

        <div className="absolute inset-0 z-20 bg-black/40" />

        {/* Logo centrado restaurado */}
        <div className="absolute inset-0 z-40 flex items-center justify-center pb-20 md:pb-24 pointer-events-none">
          <Image
            src="/assets/brand/Logo-Rosatto-horizontal_blanco.svg"
            alt="Rosatto"
            width={200} 
            height={200} 
            priority
            className="w-[200px] md:w-[200px] h-auto" 
          />
        </div>
      </section>

      {h1 && <h1 className="sr-only">{h1}</h1>}

      {/* Panel de texto */}
      <section className="relative z-30 -mt-6 md:-mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {hasHeadline && (
              <div className="hero-panel">
                <h2 className="hero-title text-center">{h2}</h2>

                {cta && (
                  <div className="mt-6 md:mt-8 text-center">
                    <Link 
                      href="https://wa.link/1ljf0c?utm_source=sitio-rosatto&utm_medium=hero&utm_campaign=general" // ENLACE ORIGINAL
                      target="_blank"
                      className="hero-cta"
                      // Tracking de GTM
                      onClick={() => sendGTMEvent('click_hero_cta', { label: cta })}
                    >
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