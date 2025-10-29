import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dl.dark text-dl.light">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-display tracking-wide5 text-dl.gold text-lg mb-3">Sede Costa Azul</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Cap. Vasco de Gama 295, Plaza Yamaha</li>
            <li>Acapulco, Gro.</li>
            <li><Link href="tel:+527444097491" className="underline">+52 744 409 7491</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display tracking-wide5 text-dl.gold text-lg mb-3">Sede Diamante</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Próximamente…</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display tracking-wide5 text-dl.gold text-lg mb-3">Páginas</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link href="/menu" className="hover:opacity-80">Menú</Link></li>
            <li><Link href="/gallery" className="hover:opacity-80">Galería</Link></li>
            <li><Link href="/booking" className="hover:opacity-80">Reservas</Link></li>
            <li><Link href="/contact" className="hover:opacity-80">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display tracking-wide5 text-dl.gold text-lg mb-3">Restaurantes</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Rosatto Acapulco</li>
            <li>—</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Rosatto
      </div>
    </footer>
  );
}
