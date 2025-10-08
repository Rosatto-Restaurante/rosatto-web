import { APP } from '@/config/app'
export default function Footer() {
  return (
    <footer className="px-6 py-10 mt-16 border-t border-white/10 text-sm">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold mb-2">{APP.name}</div>
          <div className="opacity-80">{APP.address}</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Contacto</div>
          <div>Tel: {APP.phone}</div>
          <div>WhatsApp: {APP.whatsapp}</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <div>© Rosatto 2025 · <a className="underline" href="/es/privacy">Aviso de Privacidad</a></div>
        </div>
      </div>
    </footer>
  )
}
