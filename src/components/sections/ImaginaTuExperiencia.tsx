import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home.es";

// REFACTOR: Eliminado el dataset temporal de imágenes
// const items = [ ... ];

export default function ImaginaTuExperiencia() {
  const xp = homeContent.experiencia;
  const st = homeContent.story;
  
  // REFACTOR: Leemos las imágenes desde la ubicación correcta (xp.galleryGrid)
  const items = xp.galleryGrid; 

  return (
    <section className="relative isolate bg-dl-cream">
      {/* REFACTOR: Paddings arbitrarios -> estándar (px-4, py-20, etc.) */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        
        {/* Subtítulo 1 (viene de experiencia.h2b) */}
        <h2
          className={[
            "font-display uppercase text-center text-dl-dark",
            // REFACTOR: tracking-[.20rem] -> tracking-ultra (de tu config)
            "tracking-ultra",
            // REFACTOR: text-[...] y py-20 -> text-4xl/5xl estándar
            "text-4xl md:text-5xl leading-none",
          ].join(" ")}
        >
          {xp.h2b}
        </h2>

        {/* CTA centrada */}
        {/* REFACTOR: Paddings y texto arbitrarios -> estándar (px-6, py-3, text-sm) */}
        <div className="mt-6 text-center">
          <Link
            href="https://wa.link/1ljf0c?utm_source=sitio-rosatto&utm_medium=ImaginaTuExperiencia&utm_campaign=general"
            className="inline-flex items-center gap-2 rounded-full bg-dl-magenta text-white px-6 py-3 transition hover:opacity-90"
          >
            <span className="font-medium text-sm">{xp.cta}</span>
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* ----- INICIO DE LA MODIFICACIÓN: Grid Masonry ----- */}
        {/* REFACTOR: Cambiado 'grid' por 'columns-' para layout masonry */}
        <div className="mt-8 columns-2 md:columns-3 gap-4">
          {items.map((it, i) => (
            // REFACTOR: Añadido 'mb-4' y 'break-inside-avoid' para masonry
            <figure key={i} className="group overflow-hidden rounded-[12px] bg-white mb-4 break-inside-avoid">
              <Image
                src={it.src}
                alt={it.alt}
                // REFACTOR: Usamos 'width' y 'height' del content file
                width={it.width}
                height={it.height}
                sizes="(max-width: 768px) 50vw, 33vw" // Sigue siendo vital para móvil
                // REFACTOR: 'w-full h-auto' es correcto para masonry
                className="w-full h-auto transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                loading="lazy"
              />
              <figcaption className="sr-only">{it.alt}</figcaption>
            </figure>
          ))}
        </div>
        {/* ----- FIN DE LA MODIFICACIÓN ----- */}

        {/* REFACTOR: Paddings y texto arbitrarios -> estándar */}
        <div className = "py-16 md:py-24"> 
          {/* Subtítulo 2 */}
          <h2
            className={[
              "font-display uppercase text-dl-dark",
              "tracking-ultra",
              "text-4xl md:text-5xl leading-none",
            ].join(" ")}
          >
            {xp.h2c}
          </h2>

          {/* Párrafos 3–4 */}
          {/* REFACTOR: 'leading-[1.3]' -> 'leading-relaxed' (estándar) */}
          <div className = "mt-6 space-y-4 text-base leading-relaxed">
            <p>{xp.p3}</p>
            <p>{xp.p4}</p>
          </div>

          {/* REFACTOR: Paddings y texto arbitrarios -> estándar */}
          <div className = "py-16 md:py-24">   
            <h2
              className={[
                "font-display uppercase text-dl-dark",
                "tracking-ultra",
                "text-4xl md:text-5xl leading-none",
              ].join(" ")}
            >
              {st.h2}
            </h2>

            {/* Párrafos 3–4 */}
            <div className = "mt-6 space-y-4 text-base leading-relaxed">
              <p>{st.p1}</p>
              <p>{st.p2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}