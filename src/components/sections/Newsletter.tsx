"use client";

import { homeContent } from "@/content/home.es";

export default function Newsletter() {
  const c = homeContent.newsletter;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: GA4 o POST a /api/newsletter
  };

  return (
    <section className="bg-dl.dark text-dl.light py-section md:py-section-lg">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-[1fr,420px] gap-10 items-start">
        <div>
          <h2 className="font-display text-h1 md:text-[3.2rem] leading-snug1 tracking-wide20">
            {c.p.split(". ")[0]}.
            <br />
            <span className="text-dl.magenta">{c.p.substring(c.p.indexOf("Déjanos"))}</span>
          </h2>
        </div>

        <form className="grid gap-4 text-sm" onSubmit={handleSubmit}>
          <label className="grid gap-2">
            <span className="sr-only">Email</span>
            <input
              type="email" required placeholder={c.emailPlaceholder}
              className="h-11 rounded-none bg-white/5 px-3 text-dl.light placeholder:text-dl.light/60 focus:outline-none focus:ring-2 focus:ring-dl.magenta"
            />
          </label>
          <label className="flex items-start gap-2">
            <input type="checkbox" required className="mt-0.5" />
            <span>{c.checkbox}</span>
          </label>
          <button type="submit" className="inline-flex w-fit rounded-none bg-dl.cream text-dl.dark px-6 py-3 hover:opacity-90">
            {c.cta}
          </button>
        </form>
      </div>
    </section>
  );
}
