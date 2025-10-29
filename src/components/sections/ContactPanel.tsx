import Image from "next/image";
import { homeContent } from "@/content/home.es";
import Link from "next/link";

export default function ContactPanel() {
  const c = homeContent.contactTeaser;
  
  // URL de WhatsApp (para no repetirla)
  const waLink = "https://wa.link/1ljf0c"; // O la URL de WhatsApp que prefieras
  // Teléfono limpio para 'tel:'
  const phoneLink = `tel:${c.phone.replace(/[^+\d]/g, "")}`;

  return (
    // Sección principal con fondo navy y padding (Usando clases del Theme)
    <section className="bg-dl-dark text-dl-cream py-16 md:py-24"> {/* ★ CLASES DEL THEME */}
      {/* Contenedor centrado */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Grid de 2 columnas para desktop */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          {/* --- Columna 1: Información de Contacto --- */}
          <div className="flex flex-col h-full">
            {/* Título principal (H2) */}
            <h2 className="font-display uppercase text-3xl md:text-4xl tracking-wide2 text-white">
              {c.h2}
            </h2>
            
            {/* Párrafo de introducción */}
            <p className="mt-4 text-base leading-relaxed opacity-90">{c.p}</p>

            {/* --- Contenido (Contacto, Horarios, Ubicación) --- */}
            <div className="mt-8 md:mt-10 flex-grow">
              
              {/* Bloque: Contacto */}
              <div>
                {/* ★ CLASE DEL THEME */}
                <h3 className="font-display text-lg tracking-ultra uppercase text-dl-gold">
                  CONTACTO
                </h3>
                <div className="mt-2 space-x-4 text-sm">
                  <a href={phoneLink} className="underline hover:opacity-80 transition-opacity">
                    {c.phone}
                  </a>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 transition-opacity">
                    {c.ctas.wa}
                  </a>
                </div>
              </div>

              {/* Bloque: Horarios */}
              <div className="mt-6">
                 {/* ★ CLASE DEL THEME */}
                <h3 className="font-display text-lg tracking-ultra uppercase text-dl-gold">
                  HORARIOS
                </h3>
                <div className="mt-2 space-y-1 text-sm opacity-90">
                  {c.horarios.map(([d, h]) => (
                    <div key={d} className="grid grid-cols-[100px_1fr] gap-2">
                      <span>{d}</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bloque: Ubicación */}
              <div className="mt-6">
                 {/* ★ CLASE DEL THEME */}
                <h3 className="font-display text-lg tracking-ultra uppercase text-dl-gold">
                  UBICACIÓN
                </h3>
                <div className="mt-2 text-sm opacity-90">
                  <p>Capitán Vasco de Gama 295, Plaza Yamaha, Costa Azul, Acapulco, Gro.</p>
                  <div className="mt-2">
                    <Link href="https://maps.google.com/?q=Rosatto%20Acapulco" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 transition-opacity">
                      {c.ctas.maps}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* --- Botones de Acción (al final) --- */}
            <div className="mt-8 md:mt-10 flex flex-wrap gap-4">
              <a
                href={phoneLink}
                // ★ CLASES DEL THEME
                className="inline-block rounded-full bg-dl-gold text-dl-dark px-6 py-3 text-sm font-medium transition hover:opacity-90"
              >
                {c.ctas.call}
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                // ★ CLASES DEL THEME
                className="inline-block rounded-full border border-dl-gold text-dl-gold px-6 py-3 text-sm font-medium transition hover:bg-dl-gold hover:text-dl-dark"
              >
                {c.ctas.wa}
              </a>
            </div>
          </div>
          
          {/* --- Columna 2: Imagen --- */}
          <div className="relative overflow-hidden rounded-lg min-h-[300px] md:min-h-0">
            <Image
              src="/assets/home/contact-photo.jpg"
              alt="Fachada y acceso principal del restaurante"
              fill
              className="w-full h-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}

