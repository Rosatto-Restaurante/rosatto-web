// src/app/page.tsx

/**
 * @page Home
 * @description Landing page principal del sitio.
 * * * ESTRUCTURA VISUAL:
 * - <Header>: Navegación fija.
 * - <Main>: Contenedor con 'overflow-x-hidden' para evitar scroll horizontal accidental en móviles.
 * - Secciones: Hero (Video), Historia, Galería, Menú, Reseñas, Contacto, Eventos, Newsletter.
 * - <Footer>: Pie de página con enlaces legales y de contacto.
 * - <WhatsAppCTA>: Botón flotante persistente para conversión rápida.
 * * * SEO TÉCNICO (JSON-LD):
 * - Inyecta datos estructurados 'Restaurant' de Schema.org.
 * - Define la ubicación exacta (Coordenadas), precios, horarios y enlaces para la "Ficha de Conocimiento" de Google.
 * - NOTA: La URL del menú se mantiene apuntando a /menu ya que la ruta existe en el proyecto, aunque el contenido sea preliminar.
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/layout/WhatsAppCTA";
import Hero from "@/components/sections/Hero";
import MenuPreview from "@/components/sections/MenuPreview";
import StoryPanel from "@/components/sections/StoryPanel";
import ContactPanel from "@/components/sections/ContactPanel";
import Newsletter from "@/components/sections/Newsletter";
import ImaginaTuExperiencia from "@/components/sections/ImaginaTuExperiencia";
import TuEvento from "@/components/sections/TuEvento";
import Reviews from "@/components/sections/Reviews";
import { JSONLD } from "@/lib/jsonld"; // Componente utilitario para inyectar Schema de forma segura

export default function Home() {
  // Configuración de Datos Estructurados (Schema.org/Restaurant)
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Rosatto",
    "image": [
      "https://rosatto.com.mx/assets/og/rosatto-home.jpg" // Imagen para compartir en redes
    ],
    "@id": "https://rosatto.com.mx",
    "url": "https://rosatto.com.mx",
    "telephone": "+527444097491",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Capitán Vasco de Gama 295, Plaza Yamaha",
      "addressLocality": "Acapulco",
      "addressRegion": "GRO",
      "postalCode": "39690",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      // COORDENADAS EXACTAS PROPORCIONADAS (Maps)
      "latitude": 16.85148, 
      "longitude": -99.84984
    },
    "servesCuisine": "Mediterránea",
    "priceRange": "$$", // Indicador de precio medio
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "13:15",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "13:15",
        "closes": "00:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "13:15",
        "closes": "22:00"
      }
    ],
    "menu": "https://rosatto.com.mx/menu", // Apunta a la página de menú existente
    "acceptsReservations": "True"
  };

  return (
    <>
      {/* Inyección del JSON-LD en el head para SEO */}
      <JSONLD data={restaurantSchema} />

      <Header />
      
      {/* Contenedor principal */}
      <main className="overflow-x-hidden">
        <Hero />
        <StoryPanel />
        <ImaginaTuExperiencia />
        <MenuPreview />
        <Reviews />
        <ContactPanel />
        <TuEvento/>
        <Newsletter />
      </main>

      <Footer />
      <WhatsAppCTA />
    </>
  );
}