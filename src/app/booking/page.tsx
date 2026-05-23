import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Heading from "@/components/ui/Heading";

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="bg-dl-cream">
        <section className="max-w-3xl mx-auto px-4 py-section md:py-section-lg">
          <Heading as="h1">Reserva en Rosatto</Heading>
          <p className="mt-3 leading-copy">
            La forma más rápida de reservar es por WhatsApp o llamada.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://api.whatsapp.com/send?phone=5217444097491&text=Hola%2C%20quiero%20hacer%20una%20reserva%20en%20Rosatto%20para%20el%20d%C3%ADa%20___%20a%20las%20___.%20Somos%20___%20personas.%20%C2%BFTienen%20disponibilidad%3F"
              className="inline-flex items-center justify-center rounded-full bg-dl-magenta text-white px-6 py-3 font-medium transition-colors duration-200 hover:bg-dl-black"
            >
              Reservar por WhatsApp
            </a>
            <a 
              href="tel:+527444097491" 
              className="inline-flex items-center justify-center rounded-full border border-dl-magenta text-dl-magenta px-6 py-3 font-medium transition-all duration-200 hover:bg-dl-magenta hover:text-white"
            >
              Llamar
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
