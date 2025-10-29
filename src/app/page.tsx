// src/app/page.tsx
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

export default function Home() {
  return (
    <>
      <Header />
      {/*
        ★ FIX GLOBAL: 
        Añadimos 'overflow-x-hidden' al tag <main> para "cortar" 
        cualquier desbordamiento horizontal de los componentes hijos 
        (como Hero o StoryPanel) y asegurar que el centrado (mx-auto) 
        funcione correctamente en todas las secciones.
      */}
      <main className="overflow-x-hidden">
        <Hero />
        {/* Primero la experiencia (StoryPanel) como en el sitio de referencia */}
        <StoryPanel />
        {/* Luego la galería / menú */}
        <ImaginaTuExperiencia />
        <MenuPreview />
        <TuEvento/>
        <ContactPanel />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
