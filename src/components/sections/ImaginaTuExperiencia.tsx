
import Link from "next/link"; // ★ import faltante
import Image from "next/image";
// import Heading from "@/components/ui/Heading"; // (opcional) no se usa en este snippet
import { homeContent } from "@/content/home.es";

// Dataset temporal de imágenes (cámbialo cuando tengas las reales)
const items = [
  { src: "/assets/menu/signature-1.jpg", alt: "Pulpo al pesto a la parrilla" },
  { src: "/assets/home/hero.jpg", alt: "Brindis con spritz en mesa exterior" },
  { src: "/assets/home/hero.jpg", alt: "Tagliolini al limón con mascarpone" },
  { src: "/assets/home/hero.jpg", alt: "Róbalo al estilo mediterráneo" },
  { src: "/assets/home/hero.jpg", alt: "Interior mediterráneo con cava" },
];

export default function ImaginaTuExperiencia() {
  const xp = homeContent.experiencia; // ★ define xp (antes faltaba)
  const st = homeContent.story;
  return (
    <section className="relative isolate bg-dl-cream"> {/* ★ fondo claro, sin puntos en el token */}
      <div className="mx-auto max-w-6xl px-[1.5rem] sm:px-[2.5rem] lg:px-[3.5rem] py-[4rem] md:py-[6rem]"> {/* ★ espaciado arbitrario */}
        
        {/* Subtítulo 1 (viene de experiencia.h2b) */}
        <h2
          className={[
            "font-display uppercase text-center text-dl-dark",
            "tracking-[.20rem]",             // ★ caps con aire editorial (rem aquí por consistencia con el H2 previo)
            "text-[2.3rem] md:text-[2.6rem] leading-[1]",
          ].join(" ")}
        >
          {xp.h2b}
        </h2>

        {/* CTA centrada */}
        <div className="mt-[1.5rem] text-center">
          <Link
            href="/booking"
            className="inline-flex items-center gap-[0.5rem] rounded-full bg-dl-magenta text-white px-[1.5rem] py-[0.75rem] transition hover:opacity-90"
          >
            <span className="font-medium text-[0.95rem]">{xp.cta}</span>
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Grid de imágenes */}
        <div className="mt-[1.5rem] grid grid-cols-2 md:grid-cols-3 gap-[1rem]">
          {items.map((it, i) => (
            <figure key={i} className="group overflow-hidden rounded-[12px] bg-white"> {/* ★ evitamos token inexistente */}
              <Image
                src={it.src}
                alt={it.alt}
                width={640}
                height={640}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-auto transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                loading="lazy"
              />
              <figcaption className="sr-only">{it.alt}</figcaption>
            </figure>
          ))}
      </div>

      <div className = "py-[4rem] md:py-[6rem]"> 
        {/* Subtítulo 2 */}
        <h2
          className={[
            "font-display uppercase text-dl-dark",
            "tracking-[.20rem]",             // ★ caps con aire editorial (rem aquí por consistencia con el H2 previo)
            "text-[2.3rem] md:text-[2.6rem] leading-[1]",
          ].join(" ")}
        >
          {xp.h2c}
        </h2>

        {/* Párrafos 3–4 */}
        <div className = "leading-[1.3]">
          <p>{xp.p3}</p>
          <p>{xp.p4}</p>
        </div>

      <div className = "py-[6rem] md:py-[6rem]">   
         <h2
          className={[
            "font-display uppercase text-dl-dark",
            "tracking-[.20rem]",             // ★ caps con aire editorial (rem aquí por consistencia con el H2 previo)
            "text-[2.3rem] md:text-[2.6rem] leading-[1]",
          ].join(" ")}
        >
          {st.h2}
        </h2>

        {/* Párrafos 3–4 */}
        <div className = "leading-[1.3]">
          <p>{st.p1}</p>
          <p>{st.p2}</p>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}
