import Image from "next/image";

const photos = [
  { src: "/assets/gallery/1.jpg", w: 600, h: 800, alt: "Ambiente 1" },
  { src: "/assets/gallery/2.jpg", w: 600, h: 600, alt: "Ambiente 2" },
  { src: "/assets/gallery/3.jpg", w: 600, h: 700, alt: "Plato 1" },
  { src: "/assets/gallery/4.jpg", w: 600, h: 900, alt: "Plato 2" },
  { src: "/assets/gallery/5.jpg", w: 600, h: 600, alt: "Barra" },
  { src: "/assets/gallery/6.jpg", w: 600, h: 800, alt: "Terraza" },
];

export default function GalleryMasonry() {
  return (
    <section className="bg-dl.cream py-14">
      <div className="mx-auto max-w-6xl px-4 columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        {photos.map((p, i) => (
          <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-card">
            <Image
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              className="w-full h-auto transition-transform duration-700 ease-expoOut hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
