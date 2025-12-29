// src/app/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/layout/WhatsAppCTA";
import PromoPopup from "@/components/ui/PromoPopup";
import Hero from "@/components/sections/Hero";
import MenuPreview from "@/components/sections/MenuPreview";
import StoryPanel from "@/components/sections/StoryPanel";
import ContactPanel from "@/components/sections/ContactPanel";
import Newsletter from "@/components/sections/Newsletter";
import ImaginaTuExperiencia from "@/components/sections/ImaginaTuExperiencia";
import TuEvento from "@/components/sections/TuEvento";
import Reviews from "@/components/sections/Reviews";
import { JSONLD } from "@/lib/jsonld"; // <--- Asegúrate de tener este componente creado (paso extra abajo si falta)

export default function Home() {
  // Datos estructurados con COORDENADAS EXACTAS
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Rosatto",
    "image": [
      "https://rosatto.com.mx/assets/og/rosatto-home.jpg"
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
      "latitude": 16.85148, 
      "longitude": -99.84984
    },
    "servesCuisine": "Mediterránea",
    "priceRange": "$$",
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
    "acceptsReservations": "True"
  };

  return (
    <>
      <JSONLD data={restaurantSchema} />
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <StoryPanel />
        <ImaginaTuExperiencia />
        <MenuPreview />
        <Reviews />
        <ContactPanel />
        <TuEvento/>
        <Newsletter />
        <PromoPopup />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}