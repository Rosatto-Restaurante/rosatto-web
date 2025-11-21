// src/components/sections/ContactPanel.tsx
import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home.es";

export default function ContactPanel() {
  const c = homeContent.contactTeaser;
  
  // URL de WhatsApp
  const waLink = "https://wa.link/1ljf0c"; 
  // Teléfono limpio para 'tel:'
  const phoneLink = `tel:${c.phone.replace(/[^+\d]/g, "")}`;

  return (
    <section className="bg-dl-dark text-dl-cream w-full">
      
      {/* Grid de 2 columnas que abarca todo el ancho */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        
        {/* --- Columna 1: Contenido (Izquierda) --- */}
        <div className="flex flex-col justify-center px-6 py-16 md:p-16 lg:p-24 order-1">
          
          {/* Título principal */}
          <h2 className="font-display uppercase text-3xl md:text-4xl tracking-wide2 text-white">
            {c.h2}
          </h2>
          
          <p className="mt-4 text-base leading-relaxed opacity-90 max-w-md">
            {c.p}
          </p>

          {/* --- Bloques de Información --- */}
          <div className="mt-10 space-y-8">
            
            {/* 1. Bloque Horarios */}
            <div>
              <h3 className="font-display text-lg tracking-ultra uppercase text-dl-gold mb-2">
                HORARIOS
              </h3>
              <div className="space-y-1 text-sm opacity-90">
                {c.horarios.map(([d, h]) => (
                  <div key={d} className="grid grid-cols-[100px_1fr] gap-2">
                    <span>{d}</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Bloque Ubicación */}
            <div>
              <h3 className="font-display text-lg tracking-ultra uppercase text-dl-gold mb-2">
                UBICACIÓN
              </h3>
              <div className="text-sm opacity-90 max-w-sm">
                <p>Capitán Vasco de Gama 295, Plaza Yamaha, Costa Azul, Acapulco, Gro.</p>
                <div className="mt-3">
                  <Link 
                    href="https://maps.google.com/?q=Rosatto%20Acapulco" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline hover:text-dl-gold transition-colors"
                  >
                    {c.ctas.maps}
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Bloque Contacto con BOTONES */}
            <div>
              <h3 className="font-display text-lg tracking-ultra uppercase text-dl-gold mb-4">
                CONTACTO
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href={phoneLink}
                  className="inline-block rounded-full bg-dl-gold text-dl-dark px-6 py-3 text-sm font-medium transition hover:bg-white hover:scale-105"
                >
                  {c.ctas.call}
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-dl-gold text-dl-gold px-6 py-3 text-sm font-medium transition hover:bg-dl-gold hover:text-dl-dark"
                >
                  {c.ctas.wa}
                </a>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* --- Columna 2: Imagen (Derecha) --- */}
        <div 
          // REFACTOR:
          // aspect-[9/16]: Fuerza una proporción vertical en móvil para ver la foto completa.
          // md:aspect-auto: En desktop deja que la altura la defina la columna de texto de al lado.
          // md:h-auto: Asegura que llene la columna verticalmente en desktop.
          className="relative w-full aspect-[9/16] md:aspect-auto md:h-auto order-2"
        >
          <Image
            src="/assets/home/rosatto-terraza-bienvenida.webp"
            alt="Fachada y acceso principal del restaurante Rosatto"
            fill
            className="object-cover"
            priority={false}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
      </div>
    </section>
  );
}