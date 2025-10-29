// src/components/sections/MenuPreview.tsx
// ★ FIX ALIGN: Revertido a 'mx-auto' (centrado estándar). El fix real está en 'page.tsx'.
// ★ FIX PREVIEW: Valores arbitrarios para que el preview del Canvas se vea bien.
// ★ FIX CAPTION: Opacidad aumentada a `bg-white/80` (valor arbitrario).

"use client";

import { useMemo, useState, useCallback } from "react";
// import Image from "next/image"; // Removido para el preview
// import { homeContent } from "@/content/home.es"; // Removido para el preview

// --- Contenido inyectado para el preview ---
const homeContent = {
  menuPreview: {
    categories: [
      {
        tag: "entradas",
        label: "Entradas & Tapas",
        items: [
          { id: "pulpo-pesto", title: "Pulpo al pesto", caption: "A las brasas con pesto verde", price: "$$", src: "/assets/menu/signature-1.jpg", alt: "Pulpo al pesto a la parrilla" },
          { id: "spritz", title: "Brindis con spritz", caption: "Aperitivo cítrico", src: "/assets/home/hero.jpg", alt: "Brindis con spritz en mesa exterior" },
          { id: "tagliolini-limon", title: "Tagliolini al limón", caption: "Mascarpone y limón", src: "/assets/home/hero.jpg", alt: "Tagliolini al limón con mascarpone" },
          { id: "robalo", title: "Róbalo mediterráneo", caption: "Hierbas y aceite de oliva", src: "/assets/home/hero.jpg", alt: "Róbalo al estilo mediterráneo" },
          { id: "cava", title: "Cava & ambiente", caption: "Interior mediterráneo", src: "/assets/home/hero.jpg", alt: "Interior mediterráneo con cava" },
        ],
      },
      {
        tag: "pastas",
        label: "Pastas",
        items: [
          { id: "tagliolini-trufa", title: "Tagliolini con trufa", caption: "Carpaccio & trufa fresca", price: "$$", src: "/assets/home/hero.jpg", alt: "Tagliolini con trufa" },
          { id: "pappardelle-ragu", title: "Pappardelle al ragú", caption: "Res a fuego lento", src: "/assets/home/hero.jpg", alt: "Pappardelle con ragú" },
          { id: "pasta-aglio-olio", title: "Pasta Aglio Olio", caption: "Con camarón", src: "/assets/home/hero.jpg", alt: "Aglio Olio con camarón" },
          { id: "pesto-burrata", title: "Pasta al pesto", caption: "Con burrata y almendras", src: "/assets/home/hero.jpg", alt: "Pasta al pesto con burrata" },
          { id: "mascarpone-limon", title: "Mascarpone & limón", caption: "Toque cítrico", src: "/assets/home/hero.jpg", alt: "Tagliolini mascarpone limón" },
        ],
      },
    ]
  }
};
// --- Fin del contenido inyectado ---


type PreviewItem = {
  id: string;
  title: string;
  caption?: string;
  price?: string;
  src: string;
  alt: string;
};

type PreviewCategory = {
  tag: string;
  label: string;
  items: PreviewItem[]; // 5 items
};

export default function MenuPreview() {
  const content = homeContent.menuPreview as { categories?: PreviewCategory[] } | undefined;

  // Fallback (¡asegúrate de que las rutas de src: sean correctas!)
  const fallbackCategories: PreviewCategory[] = [
    {
      tag: "entradas",
      label: "Entradas & Tapas",
      items: [
        { id: "pulpo-pesto", title: "Pulpo al pesto", caption: "A las brasas con pesto verde", price: "$$", src: "/assets/menu/signature-1.jpg", alt: "Pulpo al pesto a la parrilla" },
        // ★★★ FIX BUILD: Corregido el typo aquí ★★★
        { id: "spritz", title: "Brindis con spritz", caption: "Aperitivo cítrico", src: "/assets/home/hero.jpg", alt: "Brindis con spritz en mesa exterior" },
        { id: "tagliolini-limon", title: "Tagliolini al limón", caption: "Mascarpone y limón", src: "/assets/home/hero.jpg", alt: "Tagliolini al limón con mascarpone" },
        { id: "robalo", title: "Róbalo mediterráneo", caption: "Hierbas y aceite de oliva", src: "/assets/home/hero.jpg", alt: "Róbalo al estilo mediterráneo" },
        { id: "cava", title: "Cava & ambiente", caption: "Interior mediterráneo", src: "/assets/home/hero.jpg", alt: "Interior mediterráneo con cava" },
      ],
    },
    {
      tag: "pastas",
      label: "Pastas",
      items: [
        { id: "tagliolini-trufa", title: "Tagliolini con trufa", caption: "Carpaccio & trufa fresca", price: "$$", src: "/assets/home/hero.jpg", alt: "Tagliolini con trufa" },
        { id: "pappardelle-ragu", title: "Pappardelle al ragú", caption: "Res a fuego lento", src: "/assets/home/hero.jpg", alt: "Pappardelle con ragú" },
        { id: "pasta-aglio-olio", title: "Pasta Aglio Olio", caption: "Con camarón", src: "/assets/home/hero.jpg", alt: "Aglio Olio con camarón" },
        { id: "pesto-burrata", title: "Pasta al pesto", caption: "Con burrata y almendras", src: "/assets/home/hero.jpg", alt: "Pasta al pesto con burrata" },
        { id: "mascarpone-limon", title: "Mascarpone & limón", caption: "Toque cítrico", src: "/assets/home/hero.jpg", alt: "Tagliolini mascarpone limón" },
      ],
    },
  ];

  const categories: PreviewCategory[] = content?.categories?.length
    ? content.categories
    : fallbackCategories;

  const [activeTag, setActiveTag] = useState<string>(categories[0]?.tag ?? "entradas");
  const activeCategory = useMemo(
    () => categories.find((c) => c.tag === activeTag) ?? categories[0],
    [categories, activeTag]
  );
  const [heroIndex, setHeroIndex] = useState<number>(0);

  const next = useCallback(() => {
    setHeroIndex((i) => (i + 1) % activeCategory.items.length);
  }, [activeCategory.items.length]);

  const prev = useCallback(() => {
    setHeroIndex((i) => (i - 1 + activeCategory.items.length) % activeCategory.items.length);
  }, [activeCategory.items.length]);

  const onChangeCategory = (tag: string) => {
    setActiveTag(tag);
    setHeroIndex(0);
  };

  return (
    // ★ FIX ALIGN: Quitamos 'grid' y 'justify-items-center'.
    // ★ FIX PREVIEW: Usando valor arbitrario `bg-[#0D141B]` (dl-dark)
    <section
      aria-label="Menú — vista previa"
      className="isolate bg-[#0D141B] overflow-x-hidden"
    >
      {/* ★ FIX ALIGN: 'mx-auto' (margen automático) ahora funcionará gracias al fix en page.tsx */}
      <div className="mx-auto max-w-6xl px-[1.5rem] sm:px-[5rem] lg:px-[6rem] py-[3.5rem] md:py-[4.5rem]">
        
        {/* === Filtro de categorías === */}
        <div className="flex flex-wrap items-center justify-center gap-[0.6rem] md:gap-[0.8rem] mb-[1.75rem] md:mb-[2rem]">
          {categories.map((cat) => {
            const active = cat.tag === activeTag;
            return (
              <button
                key={cat.tag}
                type="button"
                onClick={() => onChangeCategory(cat.tag)}
                className={[
                  "rounded-full focus:outline-none focus-visible:ring-2",
                  "px-[1.05rem] py-[0.65rem] text-[0.98rem]",
                  // ★ FIX PREVIEW: Valores arbitrarios para theme
                  "transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)]", 
                  "font-['var(--font-display)'] uppercase tracking-[0.08em]", 
                  active
                    ? "bg-white text-[#0D141B] border border-white"
                    : "bg-transparent border border-[#C8A661] text-[#C8A661] hover:scale-105", // dl-gold
                ].join(" ")}
                aria-pressed={active}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* === Hero slider con caption === */}
        <figure className="w-full overflow-hidden rounded-[14px]">
          {/* Wrapper centrado */}
          <div className="relative w-full h-[56svh] md:h-[64svh] overflow-hidden">
            {activeCategory.items.map((item, i) => {
              const isActive = i === heroIndex;
              return (
                // ★ FIX PREVIEW: Reemplazado <Image> por <img>
                <img
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                  className={[
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                    isActive ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                />
              );
            })}

            {/* Flecha izquierda */}
            <button
              aria-label="Anterior"
              onClick={prev}
              className="absolute left-[0.75rem] top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-[2.6rem] h-[2.6rem] rounded-full bg-white/30 hover:bg-white/50 focus:outline-none"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Flecha derecha */}
            <button
              aria-label="Siguiente"
              onClick={next}
              className="absolute right-[0.75rem] top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-[2.6rem] h-[2.6rem] rounded-full bg-white/30 hover:bg-white/50 focus:outline-none"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Caption del item activo */}
            {(() => {
              const item = activeCategory.items[heroIndex];
              return (
                <figcaption
                  className={[
                    "absolute bottom-[1.25rem] left-1/2 -translate-x-1/2",
                    "w-[min(1100px,calc(100%-2rem))]", // ancho seguro
                    // ★ FIX CAPTION: Opacidad aumentada a 80% (arbitrario)
                    // ★ FIX PREVIEW: Usando `backdrop-blur-[2px]` (arbitrario)
                    "rounded-[12px] border border-white/20 bg-white/80 backdrop-blur-[2px]", 
                    "py-[0.95rem] px-[1rem] md:px-[1.25rem]",
                    "shadow-[0_12px_30px_rgba(0,0,0,.20)]",
                    "flex items-center justify-between gap-[1rem]",
                  ].join(" ")}
                >
                  <div className="min-w-0">
                    <h3 className="font-medium text-[1.05rem] md:text-[1.2rem] text-[#0D141B] truncate">
                      {item.title}
                    </h3>
                    <p className="text-[0.9rem] text-[#0D141B]/80 truncate">{item.caption}</p>
                  </div>
                  {item.price && (
                    <span className="text-[1rem] md:text-[1.1rem] font-medium text-[#0D141B]">
                      {item.price}
                    </span>
                  )}
                </figcaption>
              );
            })()}
          </div>
        </figure>

        {/* === Grid 5 thumbnails === */}
        <div className="mt-[1rem] md:mt-[1.25rem] grid grid-cols-5 gap-[0.55rem] md:gap-[0.75rem]">
          {activeCategory.items.map((item, i) => {
            const active = i === heroIndex;
            return (
              <button
                key={item.id}
                aria-label={`Ver ${item.title}`}
                onClick={() => setHeroIndex(i)}
                className={[
                  "group relative overflow-hidden rounded-[10px] focus:outline-none transition",
                  active
                    ? "ring-2 ring-white/90 shadow-[0_8px_24px_rgba(0,0,0,.35)]"
                    : "ring-0 hover:ring-2 hover:ring-white/60",
                ].join(" ")}
              >
                {/* ★ FIX PREVIEW: Reemplazado <Image> por <img> */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" aria-hidden />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}


