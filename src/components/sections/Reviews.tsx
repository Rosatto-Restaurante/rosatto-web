// src/components/sections/Reviews.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// --- Datos de Muestra (8 reseñas) ---
const reviewsData = [
  {
    id: 1,
    name: "Ana Laura G.",
    platform: "Google",
    date: "Octubre 2024",
    text: "El lugar es hermoso, la comida deliciosa y la atención inigualable. El pulpo al pesto es una joya. ¡Totalmente recomendado para una cena especial!",
    rating: 5,
    url: "https://www.google.com/maps/place/rosatto+acapulco/data=!4m2!3m1!1s0x85ca5963b376a70f:0x97b8c695aa01d93d?sa=X&ved=1t:242&ictx=111",
  },
  {
    id: 5,
    name: "Miguel Ángel C.",
    platform: "TripAdvisor",
    date: "Agosto 2024",
    text: "¡Increíble ambiente! La decoración es de muy buen gusto y la comida ni se diga. Pedimos varias tapas para compartir y todo delicioso. El servicio 10/10.",
    rating: 5,
    url: "https://www.tripadvisor.com.mx/Restaurant_Review-g150787-d27981585-Reviews-Rosatto-Acapulco_Pacific_Coast.html",
  },
  {
    id: 6,
    name: "Sofía Hernández",
    platform: "OpenTable",
    date: "Julio 2024",
    text: "Una joya escondida en Acapulco. Perfecto para una cita. La música en vivo fue un gran detalle. Recomiendo el Róbalo.",
    rating: 5,
    url: "https://www.opentable.com.mx/r/rosatto-acapulco-de-juarez",
  },
  {
    id: 7,
    name: "Luis R.",
    platform: "Google",
    date: "Noviembre 2024",
    text: "De los mejores restaurantes de Acapulco. La atención de los meseros es sobresaliente. Vale cada peso.",
    rating: 5,
    url: "https://www.google.com/maps/place/rosatto+acapulco/data=!4m2!3m1!1s0x85ca5963b376a70f:0x97b8c695aa01d93d?sa=X&ved=1t:242&ictx=111",
  },
  {
    id: 8,
    name: "Marco Antonio",
    platform: "Google",
    date: "Octubre 2024",
    text: "Excelente lugar, un ambiente muy agradable y la comida de lo mejor, el servicio es de primera. El personal muy atento.",
    rating: 5,
    url: "https://www.google.com/maps/place/rosatto+acapulco/data=!4m2!3m1!1s0x85ca5963b376a70f:0x97b8c695aa01d93d?sa=X&ved=1t:242&ictx=111",
  },
  {
    id: 9,
    name: "ViajeroAcapulco",
    platform: "TripAdvisor",
    date: "Agosto 2024",
    text: "¡El mejor restaurante de Acapulco!!! La comida es espectacular, el servicio increíble... La mixología es de primera.",
    rating: 5,
    url: "https://www.tripadvisor.com.mx/Restaurant_Review-g150787-d27981585-Reviews-Rosatto-Acapulco_Pacific_Coast.html",
  },
  {
    id: 10,
    name: "Comensal OpenTable",
    platform: "OpenTable",
    date: "Septiembre 2024",
    text: "Servicio espectacular y la comida deliciosa. Los cocteles son muy buenos. Sin duda regreso.",
    rating: 5,
    url: "https://www.opentable.com.mx/r/rosatto-acapulco-de-juarez",
  },
  {
    id: 11,
    name: "Daniela V.",
    platform: "Google",
    date: "Octubre 2024",
    text: "Un lugar mágico para cenar en Acapulco. La vista es impresionante y la comida supera las expectativas. No se pierdan los postres.",
    rating: 5,
    url: "https://www.google.com/maps/place/rosatto+acapulco/data=!4m2!3m1!1s0x85ca5963b376a70f:0x97b8c695aa01d93d?sa=X&ved=1t:242&ictx=111",
  },
];
// ---------------------------------

// --- Definición de Colores y Enlaces por Plataforma (CORREGIDO CON SVGs) ---
const platformStyles = {
  Google: {
    barColor: "bg-blue-500/10",
    textColor: "text-blue-600",
    icon: (props: { className?: string }) => (
      <Image
        src="/assets/home/Google_Maps_RosattoAcapulco.svg" // <--- Ruta corregida
        alt="Logo Google Maps"
        width={40}
        height={40}
        className={props.className}
      />
    ),
  },
  TripAdvisor: {
    barColor: "bg-green-500/10",
    textColor: "text-green-600",
    icon: (props: { className?: string }) => (
      <Image
        src="/assets/home/Tripadvisor-RosattoAcapulco.svg" // <--- Ruta corregida
        alt="Logo TripAdvisor"
        width={40}
        height={40}
        className={props.className}
      />
    ),
  },
  OpenTable: {
    barColor: "bg-red-700/10",
    textColor: "text-red-700",
    icon: (props: { className?: string }) => (
      <Image
        src="/assets/home/OpenTable_RosattoAcapulco.svg" // <--- Ruta corregida
        alt="Logo OpenTable"
        width={40}
        height={40}
        className={props.className}
      />
    ),
  },
};
// ---------------------------------

/**
 * Componente de tarjeta de reseña individual.
 */
const ReviewCard = ({ review }: { review: (typeof reviewsData)[0] }) => {
  const { name, platform, date, text, rating, url } = review;
  const style = platformStyles[platform as keyof typeof platformStyles] || platformStyles.Google;
  const PlatformIcon = style.icon;

  return (
    <div className="text-sm w-80 border border-gray-200 rounded-lg bg-dl-white shadow-soft overflow-hidden shrink-0 mx-4 select-none">
      {/* Barra superior coloreada con icono y nombre */}
      <div className={`flex items-center gap-4 px-5 py-4 ${style.barColor}`}>
        <PlatformIcon className="h-10 w-10" />
        <div>
          <h3 className="text-lg font-medium text-dl-dark">{name}</h3>
          <p className="text-dl-grey">{platform}</p>
        </div>
      </div>

      {/* Cuerpo de la reseña con estrellas y texto */}
      <div className="p-5">
        <div className="flex gap-0.5">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <StarIcon key={i} />
            ))}
        </div>
        <p className="text-dl-grey mt-4 leading-relaxed">{text}</p>
      </div>

      {/* Pie de tarjeta con fecha y enlace "Leer más" */}
      <div className="flex justify-between items-center px-5 pb-5 pt-2">
        <span className="text-xs text-dl-grey/80">{date}</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm font-medium underline ${style.textColor} hover:opacity-80`}
          // Evitar que el click se propague si se está arrastrando
          onClick={(e) => e.stopPropagation()}
        >
          Leer más
        </a>
      </div>
    </div>
  );
};

/**
 * Icono de estrella
 */
const StarIcon = () => (
  <svg
    width="20"
    height="19"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-dl-gold"
  >
    <path
      d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Componente principal de la sección de Reseñas.
 */
export default function Reviews() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Duplicamos los datos para el bucle infinito
  const row1Reviews = [...reviewsData, ...reviewsData];
  
  // Segunda fila con orden diferente (y luego irá en reversa visualmente)
  const row2Reviews = [
    ...reviewsData.slice(4), 
    ...reviewsData.slice(0, 4), 
    ...reviewsData.slice(4), 
    ...reviewsData.slice(0, 4),
  ];

  return (
    <section className="bg-dl-cream py-16 md:py-24 overflow-x-hidden cursor-default">
      {/* --- KEYFRAMES Y ESTILOS DE ANIMACIÓN --- */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeScrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        
        /* Pausa la animación al pasar el mouse O al tocar (active/focus) */
        .marquee-inner:hover,
        .marquee-inner:active,
        .marquee-inner:focus-within {
           animation-play-state: paused;
           cursor: grab;
        }
        
        .animate-marquee {
          animation: marqueeScroll 70s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marqueeScrollReverse 70s linear infinite;
        }
      `}</style>

      {/* Título de la Sección */}
      <h2 className="font-display uppercase text-center text-dl-dark tracking-ultra text-4xl md:text-5xl leading-none mb-12 md:mb-16">
        Lo que nuestros clientes opinan...
      </h2>

      {/* --- Fila 1: Dirección Normal (<-) --- */}
      <div className="marquee-row w-full max-w-none overflow-hidden relative" tabIndex={0}>
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-dl-cream to-transparent"></div>

        <div
          className={`marquee-inner flex w-max transform-gpu py-4 ${
            isAnimating ? "animate-marquee" : ""
          }`}
        >
          {row1Reviews.map((review, index) => (
            <ReviewCard key={`r1-${index}`} review={review} />
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-dl-cream to-transparent"></div>
      </div>

      {/* --- Fila 2: Dirección Inversa (->) --- */}
      <div className="marquee-row w-full max-w-none overflow-hidden relative mt-4" tabIndex={0}>
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-dl-cream to-transparent"></div>

        <div
          className={`marquee-inner flex w-max transform-gpu py-4 ${
            isAnimating ? "animate-marquee-reverse" : ""
          }`}
        >
          {row2Reviews.map((review, index) => (
            <ReviewCard key={`r2-${index}`} review={review} />
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-dl-cream to-transparent"></div>
      </div>
    </section>
  );
}