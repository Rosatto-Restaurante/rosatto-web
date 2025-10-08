'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'es'
  const alt = locale === 'es' ? 'en' : 'es'
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 sticky top-0 bg-rosatto-black/70 backdrop-blur">
      <Link href={`/${locale}`} className="font-semibold">Rosatto</Link>
      <nav className="flex gap-4 text-sm">
        <Link href={`/${locale}/menu`}>Menú</Link>
        <Link href={`/${locale}/booking`}>Reservas</Link>
        <Link href={`/${locale}/gallery`}>Galería</Link>
        <Link href={`/${locale}/contact`}>Contacto</Link>
        <Link className="opacity-60" href={`/${alt}`}>{alt.toUpperCase()}</Link>
      </nav>
    </header>
  )
}
