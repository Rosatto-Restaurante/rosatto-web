"use client";

// REFACTOR: Añadimos la definición global de 'gtag' para TypeScript.
// Esto soluciona el error "Property 'gtag' does not exist on type 'Window'".
declare global {
  interface Window {
    gtag?: (
      type: 'event',
      eventName: string,
      eventParams?: { [key: string]: any }
    ) => void;
  }
}

export default function WhatsAppCTA() {
  return (
    <a
      // REFACTOR: Corregido el enlace a URL absoluta con UTMs
      href="https://wa.link/1ljf0c?utm_source=sitio-rosatto&utm_medium=WhatsAppCTA&utm_campaign=general"
      // REFACTOR: Añadido target="_blank" para enlaces externos
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      onClick={() => window.gtag?.('event','whatsapp_click',{source:'floating_button'})}
      
      // Estilos sin cambios (semitransparente con blur)
      className="fixed right-4 bottom-4 z-50 rounded-full bg-dl-dark/30 backdrop-blur-xs text-dl-cream px-5 py-3 shadow-soft hover:bg-dl-dark/95 transition-all"
    >
      WhatsApp
    </a>
  );
}