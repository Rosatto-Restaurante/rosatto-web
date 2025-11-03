import Link from "next/link"; // ★ import faltante
import Image from "next/image";
// import Heading from "@/components/ui/Heading"; // (opcional) no se usa en este snippet
import { homeContent } from "@/content/home.es";

export default function ImaginaTuExperiencia() {
  const te = homeContent.tuEvento; // define tuEvento
  return (
    <section className="relative isolate bg-dl-cream"> {/* ★ fondo claro, sin puntos en el token */}
      <div className="mx-auto max-w-6xl px-[1.5rem] sm:px-[2.5rem] lg:px-[3.5rem] py-[1rem] md:py-[6rem]"> {/* ★ espaciado arbitrario */}
        
      <div className = "py-[4rem] md:py-[6rem]"> 
        {/* Subtítulo 2 */}
        <h2
          className={[
            "font-display uppercase text-dl-dark",
            "tracking-[.20rem]",             // ★ caps con aire editorial (rem aquí por consistencia con el H2 previo)
            "text-[2.3rem] md:text-[2.6rem] leading-[1] py-10",
          ].join(" ")}
        >
          {te.h2}
        </h2>

        {/* Párrafos 3–4 */}
        <div className = "leading-[1.3] space-y-4">
        <p>{te.p1}</p>
        <p>{te.p2}</p>
        <p>{te.p3}</p>
        <p>{te.p4}</p>
        </div>

    {/* CTA centrada */}
        <div className="mt-[1.5rem] text-center">
          <Link
            href="/booking"
            className="inline-flex items-center gap-[0.5rem] rounded-full bg-dl-magenta text-white px-[1.5rem] py-[0.75rem] transition hover:opacity-90"
          >
            <span className="font-medium text-[0.95rem]">{te.cta}</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
        
                
      </div>
      </div>
    </section>
  );
}
