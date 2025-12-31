"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  useEffect(() => {
    // Si ya lo cerró, no hacemos nada
    if (hasClosed) return;

    // 1. TRIGGER POR TIEMPO (5 segundos)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // 2. TRIGGER POR SCROLL (Pasar el header aprox 120px)
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza de eventos
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasClosed]);

  const closePopup = () => {
    setIsVisible(false);
    setHasClosed(true);
  };

  if (!isVisible || hasClosed) return null;

  return (
    // Overlay oscuro (Fondo)
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-300">
      
      {/* Contenedor del Modal */}
      {/* CAMBIO 1: max-w-md para que si es vertical no se vea gigante en desktop */}
      <div className="relative w-full max-w-md bg-dl-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Botón de Cerrar */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
          aria-label="Cerrar promoción"
        >
          <X size={20} />
        </button>

        {/* Imagen de la Promoción */}
        {/* CAMBIO 2: Quitamos 'aspect', 'fill' y 'object-cover'. 
           Usamos w-full h-auto para que la altura sea natural según la imagen. */}
        <div className="w-full">
          <Image
            src="/assets/home/Menu-trufa-Rosatto.png" 
            alt="Promoción del mes Rosatto"
            // Estos props permiten que Next.js maneje la imagen responsive respetando su ratio original
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto" 
            priority
          />
        </div>

      </div>
    </div>
  );
}