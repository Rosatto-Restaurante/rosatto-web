// src/components/layout/Header.tsx

/**
 * @component Header
 * @description Navegación principal del sitio.
 * * DATOS REALES RESTAURADOS:
 * - Enlace de reserva: https://bit.ly/3WIt1Di (Diferente al del Hero)
 * - Menú: Menú, Reservas, Contacto
 * * FUNCIONALIDAD GTM:
 * - Rastrea clics en "Reservar" diferenciando si fue en Desktop o Mobile.
 */

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { sendGTMEvent } from "@/lib/analytics"; // Tracking

const NAV = [
  { href: "/menu", label: "Menú" },
  { href: "/booking", label: "Reservas" },
  { href: "/contact", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
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

            {/* Navegación Desktop */}
            <ul className="hidden md:flex items-center gap-7">
              {NAV.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "link-gold font-display tracking-wide2 text-sm",
                        active
                          ? "text-dl-white"
                          : "text-dl-cream/90 hover:text-dl-white",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA Desktop */}
            <div className="hidden md:block">
              <Link
                href="https://bit.ly/3WIt1Di" // ENLACE ORIGINAL
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium transition bg-dl-dark text-dl-white hover:bg-dl-black"
                onClick={() => sendGTMEvent('conversion_intent', { 
                  location: 'header_desktop', 
                  type: 'reservation_click' 
                })}
              >
                Reservar
              </Link>
            </div>

            {/* CTA Mobile */}
            <div className="md:hidden">
              <Link
                href="https://bit.ly/3WIt1Di" // ENLACE ORIGINAL
                className="inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-medium transition bg-dl-magenta text-dl-white hover:bg-dl-black"
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