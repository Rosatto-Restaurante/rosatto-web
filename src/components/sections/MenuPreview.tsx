// src/components/sections/MenuPreview.tsx
"use client";

import { useMemo, useState, useCallback } from "react";

// --- Contenido del Menú (Sin Precios) ---
const homeContent = {
  menuPreview: {
    categories: [
      {
        tag: "entradas",
        label: "Entradas",
        items: [
          { 
            id: "carpaccio-res", 
            title: "Carpaccio De Res", 
            caption: "Láminas finas de res frescas", 
            src: "/assets/menu/carpaccio-de-Res-Rosatto-Acapulco.webp", 
            alt: "Carpaccio de res servido en Rosatto restaurante Acapulco" 
          },
          { 
            id: "fondue-queso", 
            title: "Fondue De Queso", 
            caption: "Ideal para compartir", 
            src: "/assets/menu/fondue-de-queso-Rosatto-Acapulco.webp", 
            alt: "Fondue de queso derretido con pan en Rosatto Acapulco" 
          },
          { 
            id: "atun-pesto", 
            title: "Atún Sellado Al Pesto", 
            caption: "Con costra de pesto fresco", 
            src: "/assets/menu/atun-sellado-al-pesto-Rosatto-Acapulco.webp", 
            alt: "Atún sellado al pesto plato gourmet en Rosatto Acapulco" 
          },
          { 
            id: "tempura-mar", 
            title: "Tempura Del Mar", 
            caption: "Camarón, calamar y verduras fritas", 
            src: "/assets/menu/tempura-de-mar-Rosatto-Acapulco.webp", 
            alt: "Tempura del mar con camarones y calamar en Rosatto Acapulco" 
          },
          { 
            id: "chistorra", 
            title: "Gratinado De Chistorra", 
            caption: "Sartén de queso con chistorra", 
            src: "/assets/menu/gratinado-de-chistorra-Rosatto-Acapulco.webp", 
            alt: "Queso fundido gratinado con chistorra en Rosatto Acapulco" 
          },
          { 
            id: "tapa-salmon", 
            title: "Tapa De Salmón", 
            caption: "Bocado fresco de salmón", 
            src: "/assets/menu/tapa_de_salmon-Rosatto-Acapulco.webp", 
            alt: "Tapa de salmón aperitivo en Rosatto Acapulco" 
          },
          { 
            id: "bolitas-queso", 
            title: "Bolitas De Queso", 
            caption: "Con flores de calabaza", 
            src: "/assets/menu/bolitas-de-queso-y-flores-de-calabaza.webp", 
            alt: "Bolitas de queso fritas con flor de calabaza en Rosatto Acapulco" 
          },
           { 
            id: "sopa-mariscos", 
            title: "Sopa De Mariscos", 
            caption: "Fondo de mariscos selectos", 
            src: "/assets/menu/sopa_De_Mariscos-Rosatto-Acapulco.webp", 
            alt: "Sopa de mariscos caliente en Rosatto Acapulco" 
          },
          {
            id: "ensalada-frutos",
            title: "Ensalada Frutos Rojos",
            caption: "Fresca y ligera",
            src: "/assets/menu/ensalada-de-frutos-rojos-Rosatto-Acapulco.webp",
            alt: "Ensalada fresca con frutos rojos en Rosatto Acapulco"
          }
        ],
      },
      {
        tag: "fuertes",
        label: "Platos Fuertes",
        items: [
          { 
            id: "tomahawk", 
            title: "Tomahawk", 
            caption: "Corte premium a la parrilla", 
            src: "/assets/menu/tomahawk-Rosatto-Acapulco.webp", 
            alt: "Corte de carne Tomahawk a la parrilla en Rosatto Acapulco" 
          },
          { 
            id: "pulpo-parrilla", 
            title: "Pulpo A La Parrilla", 
            caption: "Con aceitunas y aceite de olivo", 
            src: "/assets/menu/pulpo-a-la-parrilla-Rosatto-Acapulco.webp", 
            alt: "Pulpo a la parrilla cocina mediterránea en Rosatto Acapulco" 
          },
           { 
            id: "robalo-confitado", 
            title: "Robalo Confitado", 
            caption: "Con pimientos y papa", 
            src: "/assets/menu/robalo-confitado-Rosatto-Acapulco.webp", 
            alt: "Filete de robalo confitado con guarnición en Rosatto Acapulco" 
          },
          { 
            id: "ribeye", 
            title: "Cortes De Carnes", 
            caption: "Rib eye de 400g con verduras", 
            src: "/assets/menu/experiencia-corte-de-carnes-rosatto-acapulco.webp", 
            alt: "Corte de carne Rib Eye a la parrilla en Rosatto Acapulco" 
          },
          { 
            id: "camarones-ajo", 
            title: "Camarones Crema Ajo", 
            caption: "Clásicos al ajo cremoso", 
            src: "/assets/menu/camarones-a-la-crema-de-ajo-Rosatto-Acapulco.webp", 
            alt: "Camarones preparados a la crema de ajo en Rosatto Acapulco" 
          },
          { 
            id: "robalo-almendrado", 
            title: "Róbalo Almendrado", 
            caption: "Costra crujiente de almendra", 
            src: "/assets/menu/robalo-almendrado-Rosatto-Acapulco.webp", 
            alt: "Róbalo almendrado platillo del mar en Rosatto Acapulco" 
          }
        ],
      },
      {
        tag: "pastas",
        label: "Pastas & Risottos",
        items: [
          { 
            id: "risotto-trufa", 
            title: "Risotto De Trufa", 
            caption: "Con esencia y aceite de trufa", 
            src: "/assets/menu/Risotto-de-Trufa-Rosatto-Acapulco.webp", 
            alt: "Risotto de trufa con hongos y queso en Rosatto Acapulco" 
          },
          { 
            id: "risotto-callo", 
            title: "Risotto Callo de Hacha", 
            caption: "Cremoso y del mar", 
            src: "/assets/menu/Risotto-de-callo-de-hacha-Rosatto-Acapulco.webp", 
            alt: "Risotto con callo de hacha en Rosatto Acapulco" 
          },
          { 
            id: "pasta-panna", 
            title: "Pasta Panna Camarones", 
            caption: "Tagliatele a la crema", 
            src: "/assets/menu/pasta-Panna-Con-Camarones-Rosatto-Acapulco.webp", 
            alt: "Pasta Panna con camarones y queso en Rosatto Acapulco" 
          },
          { 
            id: "pasta-arrabiata", 
            title: "Pasta Mariscos Arrabiata", 
            caption: "Ligeramente picante", 
            src: "/assets/menu/pasta-Mariscos-Arrabiata-Rosatto-Acapulco.webp", 
            alt: "Pasta con mariscos salsa arrabiata en Rosatto Acapulco" 
          },
          { 
            id: "pasta-ragu", 
            title: "Pasta Ragu De Res", 
            caption: "Papardelle con carne al ragú", 
            src: "/assets/menu/pasta-Ragu-de-res-Rosatto-Acapulco.webp", 
            alt: "Pasta Papardelle con ragú de res en Rosatto Acapulco" 
          }
        ],
      },
      {
        tag: "postres",
        label: "Postres & Drinks",
        items: [
          { 
            id: "tiramisu", 
            title: "Tiramisú De Café", 
            caption: "Clásico italiano", 
            src: "/assets/menu/tiramisu-de-cafe-Rosatto-Acapulco.webp", 
            alt: "Postre Tiramisú de café en Rosatto Acapulco" 
          },
          { 
            id: "red-velvet", 
            title: "Pastel Red Velvet", 
            caption: "Con Nutella", 
            src: "/assets/menu/pastel-red-velvet-y-nutella-Rosatto-Acapulco.webp", 
            alt: "Pastel Red Velvet con Nutella en Rosatto Acapulco" 
          },
          { 
            id: "aperol", 
            title: "Aperol Gin", 
            caption: "Refrescante y cítrico", 
            src: "/assets/menu/aperol-gin-Rosatto-Acapulco.webp", 
            alt: "Coctel Aperol Gin bebida en Rosatto Acapulco" 
          },
          { 
            id: "martini", 
            title: "Martini De Lychee", 
            caption: "Dulce y sofisticado", 
            src: "/assets/menu/matini-de-lychee-Rosatto-Acapulco.webp", 
            alt: "Martini de Lychee bebida preparada en Rosatto Acapulco" 
          },
          { 
            id: "cava", 
            title: "Cava de Vinos", 
            caption: "Nuestra selección", 
            src: "/assets/menu/cava-de-vinos-Rosatto-Acapulco.webp", 
            alt: "Cava de vinos selección especial en Rosatto Acapulco" 
          }
        ],
      },
    ]
  }
};

type PreviewItem = {
  id: string;
  title: string;
  caption?: string;
  // PRICE REMOVED
  src: string;
  alt: string;
};

type PreviewCategory = {
  tag: string;
  label: string;
  items: PreviewItem[];
};

export default function MenuPreview() {
  const content = homeContent.menuPreview as { categories?: PreviewCategory[] } | undefined;

  const categories: PreviewCategory[] = content?.categories?.length
    ? content.categories
    : [];

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

  if (!activeCategory) return null;

  return (
    <section
      aria-label="Menú — vista previa"
      className="isolate bg-[#0D141B] overflow-x-hidden"
    >
      <div className="mx-auto max-w-6xl px-[1.5rem] sm:px-[5rem] lg:px-[6rem] py-[3.5rem] md:py-[4.5rem]">
        
        {/* === TÍTULO === */}
        <h2 className="font-display uppercase text-center text-3xl md:text-4xl tracking-wide2 text-white mb-4">
          DESCUBRE NUESTRO MENÚ
        </h2>

        {/* === PÁRRAFO === */}
        <p className="text-center text-white/90 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-sans mb-8 md:mb-12">
          El menú de Rosatto es una invitación a saborear el Mediterráneo desde Acapulco.
          Abre el apetito con tapas y carpaccios para compartir, sigue con nuestras pastas y risottos artesanales para los amantes de lo clásico, y descubre la intensidad de los mariscos frescos preparados con la esencia del mar o alguno de nuestros cortes premium a la parrilla. Para el cierre nuestros postres italianos transformarán cada comida en un recuerdo.
        </p>

        {/* === Filtro === */}
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
                  "transition-all duration-300 ease-[cubic-bezier(.22,.61,.36,1)]", 
                  "font-display uppercase tracking-[0.08em]", 
                  active
                    ? "bg-white text-[#0D141B] border border-white"
                    : "bg-transparent border border-[#C8A661] text-[#C8A661] hover:scale-105", 
                ].join(" ")}
                aria-pressed={active}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* === Hero Slider === */}
        <figure className="w-full overflow-hidden rounded-[14px]">
          <div className="relative w-full h-[56svh] md:h-[64svh] overflow-hidden">
            {activeCategory.items.map((item, i) => {
              const isActive = i === heroIndex;
              return (
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

            {/* Flechas */}
            <button
              aria-label="Anterior"
              onClick={prev}
              className="absolute left-[0.75rem] top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-[2.6rem] h-[2.6rem] rounded-full bg-white/30 hover:bg-white/50 focus:outline-none transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              aria-label="Siguiente"
              onClick={next}
              className="absolute right-[0.75rem] top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-[2.6rem] h-[2.6rem] rounded-full bg-white/30 hover:bg-white/50 focus:outline-none transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Caption */}
            {(() => {
              const item = activeCategory.items[heroIndex];
              return (
                <figcaption
                  className={[
                    "absolute bottom-[1.25rem] left-1/2 -translate-x-1/2",
                    "w-[min(1100px,calc(100%-2rem))]", 
                    "rounded-[12px] border border-white/20 bg-white/80 backdrop-blur-[2px]", 
                    "py-[0.95rem] px-[1rem] md:px-[1.25rem]",
                    "shadow-[0_12px_30px_rgba(0,0,0,.20)]",
                    // Ajustado para centrar el texto ahora que no hay precio a la derecha
                    "flex flex-col items-center justify-center text-center",
                  ].join(" ")}
                >
                  <div className="min-w-0">
                    <h3 className="font-medium text-[1.05rem] md:text-[1.2rem] text-[#0D141B] truncate font-display uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-[0.9rem] text-[#0D141B]/80 truncate font-sans">{item.caption}</p>
                  </div>
                  {/* PRECIO ELIMINADO AQUÍ */}
                </figcaption>
              );
            })()}
          </div>
        </figure>

        {/* === Grid Thumbnails === */}
        <div className="mt-[1rem] md:mt-[1.25rem] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-[0.55rem] md:gap-[0.75rem]">
          {activeCategory.items.map((item, i) => {
            const active = i === heroIndex;
            return (
              <button
                key={item.id}
                aria-label={`Ver ${item.title}`}
                onClick={() => setHeroIndex(i)}
                className={[
                  "group relative aspect-[4/3] overflow-hidden rounded-[10px] focus:outline-none transition",
                  active
                    ? "ring-2 ring-white/90 shadow-[0_8px_24px_rgba(0,0,0,.35)] opacity-100"
                    : "ring-0 hover:ring-2 hover:ring-white/60 opacity-70 hover:opacity-100",
                ].join(" ")}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" aria-hidden />
              </button>
            );
          })}
        </div>

        {/* === Botón Descarga === */}
        <div className="mt-12 text-center">
          <a 
            href="https://drive.google.com/drive/folders/1vCxaNmRzdOzduJBoWtdUuHaXjwhW26sm?utm_source=sitio-rosatto&utm_medium=Menu&utm_campaign=general"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#C8A661] text-[#0D141B] px-8 py-3 text-sm font-medium transition hover:bg-white hover:scale-105"
          >
            Descargar menú completo
          </a>
        </div>

      </div>
    </section>
  );
}