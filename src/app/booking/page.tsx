import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Heading from "@/components/ui/Heading";

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="bg-dl.cream">
        <section className="max-w-3xl mx-auto px-4 py-section md:py-section-lg">
          <Heading as="h1">Reserva en Rosatto</Heading>
          <p className="mt-3 leading-copy">
            La forma más rápida de reservar es por WhatsApp o llamada.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://api.whatsapp.com/send?phone=+527444097491&text=Hola%20quiero%20reservar%20en%20Rosatto"
              className="rounded-pill bg-dl.magenta text-white px-6 py-3"
            >
              Reservar por WhatsApp
            </a>
            <a href="tel:+527444097491" className="rounded-pill border border-dl.magenta text-dl.magenta px-6 py-3">
              Llamar
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
