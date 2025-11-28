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
      href="https://wa.link/1ljf0c?utm_source=sitio-rosatto&utm_medium=WhatsAppCTA&utm_campaign=general"
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