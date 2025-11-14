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
          "w-full transition-all duration-300 ease-smooth",
          // REFRACTOR: 'header-glass' reemplazado por utilidades. 'shadow-soft' (de tu config) se mantiene.
          scrolled
            ? "bg-dl-dark/40 backdrop-blur-xs shadow-soft"
            : "bg-transparent",
        ].join(" ")}
      >
        {/* Contenido centrado dentro de la barra */}
        {/* REFRACTOR: Padding arbitrario (px-[1rem] py-[1rem] lg:px-[10rem]) reemplazado por estándar.
            'py-4' añade el espacio vertical solicitado para el logo. */}
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex h-full items-center justify-between" aria-label="Primary">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/assets/brand/Logo-Rosatto-horizontal_blanco.svg"
                alt="Rosatto"
                width={160}
                height={80}
                priority
                // NOTE: 'h-auto' es importante para mantener el aspect ratio de la imagen
                className="transition-transform duration-300 group-hover:scale-[1.02] w-40 h-auto"
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
                        // REFRACTOR: 'text-[15px]' (arbitrario) -> 'text-sm'.
                        "link-gold font-display tracking-wide2 text-sm",
                        // REFRACTOR: Color de texto cambiado a claro (white/cream) para contrastar con 'bg-dl-dark/40'.
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

            {/* CTA desktop */}
            <div className="hidden md:block">
              {/* REFRACTOR: Clases globales '.btn .btn-primary' reemplazadas por utilidades de Tailwind.
                  Se usa 'bg-dl-gold' para mejor contraste. */}
              <Link
                href="https://bit.ly/3WIt1Di"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium transition bg-dl-dark text-dl-white hover:bg-dl-black"
              >
                Reservar
              </Link>
            </div>

            {/* CTA mobile (si no hay menú hamburguesa) */}
            <div className="md:hidden">
              {/* REFRACTOR: Clases globales '.btn .btn-primary' reemplazadas. */}
              <Link
                href="https://bit.ly/3WIt1Di"
                className="inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-medium transition bg-dl-magenta text-dl-white hover:bg-dl-black"
              >
                Reservar
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* REFACTOR: Eliminado el cintillo dorado (`bg-dl-gold`) según la solicitud. */}
    </header>
  );
}