"use client";
import React, { useState, useEffect } from "react";

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

// --- Definición de Colores y Enlaces por Plataforma ---
const platformStyles = {
  Google: {
    barColor: "bg-blue-500/10",
    textColor: "text-blue-600",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="none">
        <path
          d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5.03 16.09 5.03 12.27C5.03 8.45 8.36 5.27 12.19 5.27C14.03 5.27 15.3 6.04 16.03 6.72L18.25 4.59C16.43 2.91 14.28 2 12.19 2C6.98 2 2.73 6.25 2.73 11.45C2.73 16.65 6.98 20.9 12.19 20.9C17.62 20.9 21.6 17.14 21.6 11.45C21.6 10.95 21.52 10.6 21.45 10.3C21.4 10.2 21.35 11.1 21.35 11.1Z"
          fill="#4285F4"
        />
        <path
          d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5.03 16.09 5.03 12.27C5.03 8.45 8.36 5.27 12.19 5.27C14.03 5.27 15.3 6.04 16.03 6.72L18.25 4.59C16.43 2.91 14.28 2 12.19 2C6.98 2 2.73 6.25 2.73 11.45C2.73 16.65 6.98 20.9 12.19 20.9C17.62 20.9 21.6 17.14 21.6 11.45C21.6 10.95 21.52 10.6 21.45 10.3C21.4 10.2 21.35 11.1 21.35 11.1Z"
          fill="url(#paint0_linear_101_13)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_101_13"
            x1="12.18"
            y1="20.9"
            x2="12.18"
            y2="2"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4285F4" />
            <stop offset="1" stopColor="#34A853" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  TripAdvisor: {
    barColor: "bg-green-500/10",
    textColor: "text-green-600",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.5 16.13C16.5 16.5 16.2 16.8 15.83 16.8H13.88C13.5 16.8 13.19 16.5 13.19 16.13V13.88C13.19 13.5 13.5 13.19 13.88 13.19H14.63C15.01 13.19 15.31 12.89 15.31 12.5C15.31 12.13 15.01 11.83 14.63 11.83H13.13C11.18 11.83 9.63 10.28 9.63 8.33C9.63 6.38 11.18 4.83 13.13 4.83H14.63C15.01 4.83 15.31 5.13 15.31 5.5C15.31 5.87 15.01 6.17 14.63 6.17H13.5C12.06 6.17 10.88 7.34 10.88 8.78C10.88 10.21 12.06 11.39 13.5 11.39H15.83C16.2 11.39 16.5 11.69 16.5 12.06V16.13Z"
          fill="#34E0A1"
        />
      </svg>
    ),
  },
  OpenTable: {
    barColor: "bg-red-700/10",
    textColor: "text-red-700",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 11.25C10.21 11.25 8.75 12.71 8.75 14.5C8.75 16.29 10.21 17.75 12 17.75C13.79 17.75 15.25 16.29 15.25 14.5C15.25 12.71 13.79 11.25 12 11.25ZM12 16C11.17 16 10.5 15.33 10.5 14.5C10.5 13.67 11.17 13 12 13C12.83 13 13.5 13.67 13.5 14.5C13.5 15.33 12.83 16 12 16ZM12 6.25C10.21 6.25 8.75 7.71 8.75 9.5C8.75 11.29 10.21 12.75 12 12.75C13.79 12.75 15.25 11.29 15.25 9.5C15.25 7.71 13.79 6.25 12 6.25ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z"
          fill="#DA3743"
        />
      </svg>
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
    <div className="text-sm w-80 border border-gray-200 rounded-lg bg-dl-white shadow-soft overflow-hidden shrink-0 mx-4">
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
        >
          Leer más
        </a>
      </div>
    </div>
  );
};

/**
 * Icono de estrella (usando text-dl-gold)
 */
const StarIcon = () => (
  <svg
    width="20"
    height="19"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-dl-gold" // Color dorado de tu config
  >
    <path
      d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
      fill="currentColor" // Usa el color de texto (text-dl-gold)
    />
  </svg>
);

/**
 * Componente principal de la sección de Reseñas.
 */
export default function Reviews() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // AQUÍ PUEDES MANIPULAR EL RETRASO:
    // Cambiado de 3000 a 5000 (milisegundos)
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 3000); // 5-segundos de retraso
    return () => clearTimeout(timer);
  }, []); // Se ejecuta solo una vez al montar el componente

  // Duplicamos los datos (8 * 2 = 16 tarjetas) para un bucle infinito y fluido
  const row1Reviews = [...reviewsData, ...reviewsData];
  
  // Creamos una segunda lista (desfasada)
  const row2Reviews = [
    ...reviewsData.slice(4), 
    ...reviewsData.slice(0, 4), 
    ...reviewsData.slice(4), 
    ...reviewsData.slice(0, 4),
  ];

  return (
    <section className="bg-dl-cream py-16 md:py-24 overflow-x-hidden">
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner:hover {
           animation-play-state: paused;
        }
        .animate-marquee {
          animation: marqueeScroll 70s linear infinite;
        }
      `}</style>

      {/* Título de la Sección */}
      <h2 className="font-display uppercase text-center text-dl-dark tracking-ultra text-4xl md:text-5xl leading-none mb-12 md:mb-16">
        Lo que nuestros clientes opinan...
      </h2>

      {/* Fila de Marquee */}
      <div className="marquee-row w-full max-w-none overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-dl-cream to-transparent"></div>

        {/* REFACTOR: Añadido 'w-max' para arreglar el salto en móvil */}
        <div
          className={`marquee-inner flex w-max transform-gpu py-4 ${
            isAnimating ? "animate-marquee" : ""
          }`}
        >
          {row1Reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-dl-cream to-transparent"></div>
      </div>

      {/* Segunda fila */}
      <div className="marquee-reverse w-full max-w-none overflow-hidden relative mt-4">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-dl-cream to-transparent"></div>

        {/* REFACTOR: Añadido 'w-max' para arreglar el salto en móvil */}
        <div
          className={`marquee-inner flex w-max transform-gpu py-4 ${
            isAnimating ? "animate-marquee" : ""
          }`}
        >
          {row2Reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-dl-cream to-transparent"></div>
      </div>
    </section>
  );
}

