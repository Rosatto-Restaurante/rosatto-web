"use client";
export default function WhatsAppCTA() {
  return (
    <a
      href="wa.link/1ljf0c"
      aria-label="Escríbenos por WhatsApp"
      onClick={() => window?.gtag?.('event','whatsapp_click',{source:'floating_button'})}
      className="fixed right-4 bottom-4 z-50 rounded-pill bg-dl.gold text-dl.dark px-5 py-3 shadow-soft hover:bg-dl.goldHover transition-colors"
    >
      WhatsApp
    </a>
  );
}
