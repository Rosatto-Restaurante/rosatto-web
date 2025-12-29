"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react"; // Usamos la librería de iconos que ya tienes instalada

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

    // 2. TRIGGER POR SCROLL (Pasar el header)
    const handleScroll = () => {
      // Si el usuario baja más de 120px y el popup no se ha cerrado ni mostrado aún
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
    setHasClosed(true); // Marca como cerrado para que no vuelva a salir en esta carga
  };

  // Si no es visible, no renderizamos nada
  if (!isVisible || hasClosed) return null;

  return (
    // Overlay oscuro (Fondo)
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-300">
      
      {/* Contenedor del Modal */}
      <div className="relative w-full max-w-lg bg-dl-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Botón de Cerrar (Esquina superior derecha) */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
          aria-label="Cerrar promoción"
        >
          <X size={20} />
        </button>

        {/* Imagen de la Promoción */}
        {/* Asegúrate de subir tu imagen a esta ruta */}
        <div className="relative aspect-[4/5] md:aspect-square w-full">
          <Image
            src="/assets/home/Menu-trufa-Rosatto.webp" 
            alt="Promoción del mes Rosatto"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* (Opcional) Pie de foto o botón de acción extra */}
        {/* <div className="p-4 text-center bg-dl-dark">
          <button onClick={closePopup} className="text-dl-gold underline text-sm uppercase tracking-wider">
            Cerrar y ver el sitio
          </button>
        </div> 
        */}
      </div>
    </div>
  );
}