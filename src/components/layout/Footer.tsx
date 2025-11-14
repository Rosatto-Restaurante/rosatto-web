import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dl-dark text-dl-cream">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Columna 1: Sede Costa Azul */}
        <div>
          {/* REFACTOR: font-sans (Jost), medium (500), magenta, y tracking-wide2 */}
          <h4 className="font-sans tracking-wide2 uppercase text-dl-magenta text-lg mb-3">Sede Costa Azul</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Cap. Vasco de Gama 295, Plaza Yamaha</li>
            <li>Acapulco, Gro.</li>
            <li><Link href="tel:+527444097491" className="underline hover:opacity-80">+52 744 409 7491</Link></li>
          </ul>
        </div>
        
        {/* Columna 2: Sede Diamante */}
        <div>
          {/* REFACTOR: font-sans (Jost), medium (500), magenta, y tracking-wide2 */}
          <h4 className="font-sans tracking-wide2 uppercase text-dl-magenta text-lg mb-3">Sede Diamante</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Próximamente…</li>
          </ul>
        </div>
        
        {/* Columna 3: Páginas */}
        <div>
          {/* REFACTOR: font-sans (Jost), medium (500), magenta, y tracking-wide2 */}
          <h4 className="font-sans tracking-wide2 uppercase text-dl-magenta text-lg mb-3">Páginas</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link href="/menu" className="hover:opacity-80">Menú</Link></li>
            <li><Link href="/gallery" className="hover:opacity-80">Galería</Link></li>
            <li><Link href="/booking" className="hover:opacity-80">Reservas</Link></li>
            <li><Link href="/contact" className="hover:opacity-80">Contacto</Link></li>
          </ul>
        </div>
        
        {/* Columna 4: Restaurantes */}
        <div>
          {/* REFACTOR: font-sans (Jost), medium (500), magenta, y tracking-wide2 */}
          <h4 className="font-sans tracking-wide2 uppercase text-dl-magenta text-lg mb-3">Restaurantes</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Rosatto Acapulco</li>
            <li>—</li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/10 py-6 text-center text-xs opacity-70 space-y-2">
        <p>© {new Date().getFullYear()} Rosatto</p>
        
        <div className="space-y-1">
          <Link href="/politica-privacidad" className="block hover:text-dl-white">
            Política de privacidad
          </Link>
          <Link href="/politica-cookies" className="block hover:text-dl-white">
            Política de cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}