// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
      {/* Capa visual FULL-BLEED de la barra */}
      <div
        className={[
          "w-full h-16 sm:h-[76px] transition-all duration-300 ease-smooth",
          scrolled ? "header-glass shadow-soft" : "bg-transparent",
        ].join(" ")}
      >
        {/* Contenido centrado dentro de la barra */}
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
          <nav className="flex h-full items-center justify-between" aria-label="Primary">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/assets/brand/Logo-Rosatto-horizontal_blanco.svg"
                alt="Rosatto"
                width={160}
                height={80}
                priority
                className="transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <ul className="hidden md:flex items-center gap-7">
              {NAV.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "link-gold font-display tracking-wide2 text-[15px]",
                        active
                          ? "text-dl-dark"
                          : "text-dl-dark/90 hover:text-dl-dark",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA desktop */}
            <div className="hidden md:block">
              <Link href="/booking" className="btn btn-primary rounded-full">
                Reservar
              </Link>
            </div>

            {/* CTA mobile (si no hay menú hamburguesa) */}
            <div className="md:hidden">
              <Link href="/booking" className="btn btn-primary rounded-full text-sm">
                Reservar
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Línea dorada FULL-BLEED al hacer scroll (decorativa, opcional) */}
      {scrolled && (
        <div className="absolute inset-x-0 bottom-0 h-[6px] bg-dl-gold" aria-hidden />
      )}
    </header>
  );
}
