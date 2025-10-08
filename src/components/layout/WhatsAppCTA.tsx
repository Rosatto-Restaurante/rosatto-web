'use client'
import { trackWhatsAppClick } from '@/lib/analytics'
export default function WhatsAppCTA() {
  const phone = '+527444097491'
  const text = encodeURIComponent('Hola Rosatto, quiero reservar una mesa.')
  const href = `https://wa.me/${phone}?text=${text}`
  return (
    <a
      href={href}
      onClick={() => trackWhatsAppClick('floating_button')}
      className="fixed bottom-4 right-4 z-50 rounded-full bg-rosatto-gold text-rosatto-black px-5 py-3 shadow md:hidden"
      aria-label="Reservar por WhatsApp"
    >
      Reservar
    </a>
  )
}
