// src/components/sections/Newsletter.tsx

/**
 * @component Newsletter
 * @description Formulario de suscripción.
 * * FUNCIONALIDAD GTM:
 * - Envía el evento 'form_submit' al completar el formulario (simulado).
 */

"use client";

import { homeContent } from "@/content/home.es";
import { sendGTMEvent } from "@/lib/analytics"; 

export default function Newsletter() {
  const c = homeContent.newsletter;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // TRACKING: Evento de conversión
    sendGTMEvent('form_submit', { 
      form_id: 'newsletter_home', 
      status: 'success' 
    });

    alert("¡Gracias por suscribirte!"); 
  };

  return (
    <section className="bg-dl-dark text-dl-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-[1fr,420px] gap-12 md:gap-16 items-center">
        
        <div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide2">
            <span className="text-dl-cream">{c.p}</span>
            <br />
            <span className="text-dl-magenta">{c.cta1}</span>
          </h2>
        </div>

        <form className="grid gap-4 text-sm" onSubmit={handleSubmit}>
          <label className="grid gap-2">
            <span className="sr-only">Email</span>
            <input
              type="email"
              required
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
            <span>{c.checkbox}</span>
          </label>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-dl-cream px-6 py-3 font-medium uppercase text-dl-dark transition hover:opacity-90"
          >
            {c.cta}
          </button>
        </form>
      </div>
    </section>
  );
}