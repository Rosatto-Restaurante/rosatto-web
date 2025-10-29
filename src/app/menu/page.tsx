import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Heading from "@/components/ui/Heading";

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="bg-dl.cream">
        <section className="max-w-6xl mx-auto px-4 py-section md:py-section-lg">
          <Heading as="h1">Menú</Heading>
          <p className="mt-3 leading-copy">
            Entradas • Pastas • Risottos • Carnes • Pescados • Cortes • Guarniciones
          </p>
          {/* Aquí montaremos las categorías (Instancia 3) */}
        </section>
      </main>
      <Footer />
    </>
  );
}
