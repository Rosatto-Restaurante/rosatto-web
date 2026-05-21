"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let fadeTimer: NodeJS.Timeout;
    let removeTimer: NodeJS.Timeout;

    const hideSplash = () => {
      // Damos 400ms extra para que las animaciones iniciales (ScrollReveal) se preparen
      fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
        document.body.style.overflow = ""; // Restaurar scroll
        
        removeTimer = setTimeout(() => {
          setIsVisible(false);
        }, 700); // 700ms de transición de opacidad
      }, 400);
    };

    // Esperar a que las fuentes estén listas (evita saltos en los textos)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(hideSplash);
    } else {
      hideSplash();
    }

    // Fallback de seguridad máximo de 2.5s por si algo falla
    const safetyTimer = setTimeout(() => {
      setIsFadingOut(true);
      document.body.style.overflow = "";
      setTimeout(() => setIsVisible(false), 700);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      clearTimeout(safetyTimer);
      document.body.style.overflow = ""; 
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-dl-dark transition-opacity duration-700 ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Image
        src="/assets/brand/Logo-Rosatto-horizontal_blanco.svg"
        alt="Rosatto Logo"
        width={300}
        height={100}
        className="w-3/4 max-w-[280px] md:max-w-[340px] h-auto object-contain animate-pulse"
        priority
      />
    </div>
  );
}
