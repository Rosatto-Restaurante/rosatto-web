// src/components/layout/Header.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { sendGTMEvent } from "@/lib/analytics"; // Tracking

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      role="banner"
      aria-label="Navegación principal"
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className={[
          "w-full transition-all duration-300 ease-smooth",
          scrolled
            ? "bg-dl-dark/40 backdrop-blur-xs shadow-soft"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex h-full items-center justify-between" aria-label="Primary">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/assets/brand/Logo-Rosatto-horizontal_blanco.svg"
                alt="Rosatto"
                width={160}
                height={80}
                priority
                className="transition-transform duration-300 group-hover:scale-[1.02] w-40 h-auto"
              />
            </Link>

            {/* CTA Desktop (Botón Reservar) */}
            <div className="hidden md:block">
              <Link
                href="https://wa.link/1ljf0c?utm_source=sitio-rosattoDesktop&utm_medium=header&utm_campaign=general"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium transition bg-dl-dark text-dl-white hover:bg-dl-black border border-dl-gold/20"
                onClick={() => sendGTMEvent('conversion_intent', { 
                  location: 'header_desktop', 
                  type: 'reservation_click' 
                })}
              >
                Reservar
              </Link>
            </div>

            {/* CTA Mobile (Botón Reservar) */}
            <div className="md:hidden">
              <Link
                href="https://wa.link/1ljf0c?utm_source=sitio-rosattoMobile&utm_medium=header&utm_campaign=general"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition bg-dl-magenta text-dl-white hover:bg-dl-black"
                onClick={() => sendGTMEvent('conversion_intent', { 
                  location: 'header_mobile', 
                  type: 'reservation_click' 
                })}
              >
                Reservar
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}