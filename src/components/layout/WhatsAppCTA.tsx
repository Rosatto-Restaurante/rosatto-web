// src/components/layout/WhatsAppCTA.tsx
"use client";

import { sendGTMEvent } from "@/lib/analytics";

export default function WhatsAppCTA() {
  const handleClick = () => {
    // Enviamos el evento al DataLayer
    sendGTMEvent('click_whatsapp', { 
      location: 'floating_button', 
      destination: 'general' 
    });
  };

  return (
    <a
      href="https://api.whatsapp.com/send?phone=5217444097491&text=Hola%2C%20quiero%20hacer%20una%20reserva%20en%20Rosatto%20para%20el%20d%C3%ADa%20___%20a%20las%20___.%20Somos%20___%20personas.%20%C2%BFTienen%20disponibilidad%3F"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      onClick={handleClick}
      className="fixed right-4 bottom-4 z-50 rounded-full bg-dl-dark/30 backdrop-blur-xs text-dl-cream px-5 py-3 shadow-soft hover:bg-dl-dark/95 transition-all font-medium border border-white/10"
    >
      WhatsApp
    </a>
  );
}