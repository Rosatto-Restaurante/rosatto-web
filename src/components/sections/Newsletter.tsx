"use client";

// REFACTOR: Importar el contenido desde home.es.ts
import { homeContent } from "@/content/home.es";

export default function Newsletter() {
  // REFACTOR: Usar la variable de contenido 'c'
  const c = homeContent.newsletter;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: GA4 o POST a /api/newsletter
  };

  return (
    <section className="bg-dl-dark text-dl-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-[1fr,420px] gap-12 md:gap-16 items-center">
        
        {/* === Columna 1: Texto === */}
        <div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide2">
            
            {/* REFACTOR: Texto conectado a home.es.ts y dividido en dos partes */}
            <span className="text-dl-cream">
              {c.p}
            </span>
            <br />
            <span className="text-dl-magenta">
              {c.cta1}
            </span>

          </h2>
        </div>

        {/* === Columna 2: Formulario === */}
        <form className="grid gap-4 text-sm" onSubmit={handleSubmit}>
          <label className="grid gap-2">
            <span className="sr-only">Email</span>
            <input
              type="email"
              required
              // REFACTOR: Placeholder conectado a home.es.ts
              placeholder={c.emailPlaceholder}
              className="w-full rounded-md bg-white/5 px-4 py-3 text-dl-cream placeholder:text-dl-cream/60 focus:outline-none focus:ring-2 focus:ring-dl-magenta"
            />
          </label>

          <label className="flex items-center gap-2 text-dl-cream/70">
            <input
              type="checkbox"
              required
              className="rounded text-dl-magenta focus:ring-dl-magenta focus:ring-offset-dl-dark"
            />
            {/* REFACTOR: Texto del checkbox conectado a home.es.ts */}
            <span>{c.checkbox}</span>
          </label>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-dl-cream px-6 py-3 font-medium uppercase text-dl-dark transition hover:opacity-90"
          >
            {/* REFACTOR: CTA conectado a home.es.ts (se verá como "SUSCRIBIRME") */}
            {c.cta}
          </button>
        </form>
      </div>
    </section>
  );
}