// src/content/home.es.ts
export const homeContent = {
  hero: {
    // SEO only (oculto visualmente desde el componente con sr-only)
    h1: "Rosatto: Restaurante de alta cocina mediterránea en Acapulco",

    // Texto visible principal del Hero (panel navy)
    h2: "Ubicado en el corazón de la Zona Dorada desde 2024, a minutos de la Costera, Rosatto fusiona la alta cocina mediterránea con la profunda tradición y riqueza culinaria del puerto de Acapulco.",

    // CTA
    cta: "¡Te estamos esperando!",

    // Activos existentes en /public
    video: "/assets/home/video-dolores-desktop.mp4?v=2",
    poster: "/assets/home/hero.jpg",
  }, // <-- COMA AÑADIDA

  experiencia: {
    h2a: "Tradición y vanguardia en un ambiente refinado y de buen gusto.",
    p1: "Acapulco siempre ha sido puerta del mar y de sabores. Conocido desde la época dorada de los 40’s como la “Perla del Pacífico” Mexicano, la belleza del puerto y la calidad de su gente han atraído a este mítico balneario a estrellas de Hollywood y a numerosas personalidades del mundo de la política y la cultura.",
    p2: "Desde 2024 Rosatto abrió sus puertas para reinterpretar esa historia con producto local y gastronomía de fusión internacional. Nuestro menú fusiona sabores mediterráneos con pescados y mariscos frescos, cortes de carne selectos, pastas artesanales, tapas para compartir y opciones veganas y sin gluten, todo preparado con ingredientes premium.",
    h2b: "Vive una experiencia gastronómica que deleitará tus sentidos.",
    cta: "¡Haz tu reserva!",
    h2c: "Imagina tu cena especial…",
    p3: "Luz cálida, texturas naturales y cava a la vista. La bahía se ilumina y llega tu plato favorito. Conversaciones que fluyen, servicio atento y un ritmo que invita a quedarte. Es el lugar perfecto para una cena especial en el puerto. Aquí podrás disfrutar una experiencia pensada y diseñada para los amantes de la buena mesa mientras saboreas un cocktail que se siente como una celebración en sí mismo.",
    p4: "Brinda al atardecer con un spritz; comparte pulpo al pesto, tagliolini al limón o róbalo mediterráneo. Nuestra coctelería de autor y cava de vinos harán el maridaje perfecto con tus mejores momentos.",
  
    // ----- INICIO DE LA MODIFICACIÓN -----
    // REFACTOR: Movido galleryGrid DENTRO del objeto 'experiencia'
    galleryGrid: [
      { 
        src: "/assets/gallery/corte-premium-rosatto-acapulco.jpeg", 
        alt: "Corte premium a la parrilla con vino tinto servido en Rosatto Acapulco.",
        width: 800,
        height: 1200
      },
      { 
        src: "/assets/gallery/entrada-queso-fundido-y chistorra-rosatto-acapulco.jpeg", 
        alt: "Entrada gourmet de queso fundido con chistorra al horno en Rosatto Acapulco.",
        width: 1200,
        height: 800
      },
      { 
        src: "/assets/gallery/tapa-jamon-serrano-rosatto-acapulco.jpeg", 
        alt: "Tapas gourmet para compartir con jamón serrano y queso derretido en Rosatto Acapulco.",
        width: 1200,
        height: 800
      },
      { 
        src: "/assets/gallery/bartender-cocktail-mixologia-artesanal-rosatto.jpeg", 
        alt: "Bartender preparando un cocktail. Mixología artesanal y servicio personalizado en el bar de Rosatto.",
        width: 800,
        height: 1200
      },
      { 
        src: "/assets/gallery/postre-de-cumpleanos-rosatto-acapulco.jpg", 
        alt: "Postre de cumpleaños decorado con flores comestibles. Celebración personalizada en Rosatto Acapulco.",
        width: 1200,
        height: 800
      },
      { 
        src: "/assets/gallery/pasta-gratinada-rosatto.jpeg", 
        alt: "Pasta gratinada al horno con queso fundido y vino en Rosatto, restaurante mediterráneo en Acapulco.",
        width: 800,
        height: 1200
      }
    ]
    // REFACTOR: La llave de 'experiencia' ahora cierra después de 'galleryGrid'
  }, // <-- COMA AÑADIDA

  story: {
    h2: "Una joya en el corazón de Acapulco",
    p1: "Más que un restaurante, Rosatto es una experiencia que querrás compartir. Nuestros visitantes destacan la atención amable y profesional desde que llegan, y cada bocado se encargará de recordarte por qué este lugar se ha convertido en un favorito tanto para locales como para turistas.",
    p2: "Al final de la noche, te das cuenta de que Rosatto no es solo un restaurante, es un destino, es algo que no puedes esperar para contarle a tus amigos y planear con ellos una próxima visita. Ideal para cenas especiales, celebraciones y salidas memorables entre amigas, Rosatto siempre deja buen sabor de boca.",
    ctaWhatsapp: "Reserva fácil en WhatsApp",
  }, // <-- COMA AÑADIDA

  contactTeaser: {
    h2: "Estamos aquí para ayudarte",
    p: "¿Dudas sobre horarios, cómo llegar o reservas? Escríbenos por WhatsApp o llámanos, nuestro equipo estará encantado de ayudarte.",
    phone: "+52 744 409 7491",
    horarios: [
      ["Domingo", "1:15 p.m. – 10:00 p.m."],
      ["Lunes", "1:15 p.m. – 11:00 p.m."],
      ["Martes", "1:15 p.m. – 11:00 p.m."],
      ["Miércoles", "1:15 p.m. – 11:00 p.m."],
      ["Jueves", "1:15 p.m. – 11:00 p.m."],
      ["Viernes", "1:15 p.m. – 12:00 a.m."],
      ["Sábado", "1:15 p.m. – 12:00 a.m."],
    ],
    ctas: { call: "Llamar ahora", wa: "WhatsApp", maps: "Abrir en Maps" },
  }, // <-- COMA AÑADIDA

  tuEvento: {
    h2: "Planea tu evento con nosotros…",
    p1: "¿Estás buscando el lugar ideal para celebrar tu próximo evento? ¡No busques más! Nuestro restaurante ofrece el escenario perfecto para todas tus ocasiones especiales.",
    p2: "Ya sea un cumpleaños, una cena de aniversario, cena para un grupo o cualquier otro evento, nuestro equipo comprometido está aquí para garantizar que todo salga a la perfección de principio a fin.",
    p3: "Con nuestras deliciosas opciones de menú, servicio excepcional y un ambiente sin igual, tus invitados tendrán una experiencia inolvidable.",
    p4: "Diseñamos experiencias a medida con menú curado, maridajes y detalles especiales. ¡Contáctanos hoy para hablar sobre tus necesidades y déjanos ayudarte a crear recuerdos que perdurarán toda la vida!",
    cta: "Reserva tu evento",
  }, // <-- COMA AÑADIDA

  newsletter: {
    p: "¿Quieres recibir nuestras actualizaciones sobre menús de temporada, promociones para tu cumpleaños, eventos, experiencias y catas en cava. Déjanos tu email aquí.",
    emailPlaceholder: "Email*",
    checkbox: "Acepto términos y aviso de privacidad.",
    cta: "Suscribirme",
  }, // <-- COMA AÑADIDA

 menuPreview: {
    categories: [
      {
        tag: "entradas",
        label: "Entradas & Tapas",
        items: [
          { id: "pulpo-pesto", title: "Pulpo al pesto", caption: "A las brasas con pesto verde", price: "$$", src: "/assets/menu/signature-1.jpg", alt: "Pulpo al pesto a la parrilla" },
          { id: "spritz", title: "Brindis con spritz", caption: "Aperitivo cítrico", src: "/assets/home/hero.jpg", alt: "Brindis con spritz en mesa exterior" },
          { id: "tagliolini-limon", title: "Tagliolini al limón", caption: "Mascarpone y limón", src: "/assets/home/hero.jpg", alt: "Tagliolini al limón con mascarpone" },
          { id: "robalo", title: "Róbalo mediterráneo", caption: "Hierbas y aceite de oliva", src: "/assets/home/hero.jpg", alt: "Róbalo al estilo mediterráneo" },
          { id: "cava", title: "Cava & ambiente", caption: "Interior mediterráneo", src: "/assets/home/hero.jpg", alt: "Interior mediterráneo con cava" },
        ],
      },
      {
        tag: "pastas",
        label: "Pastas",
        items: [
          { id: "tagliolini-trufa", title: "Tagliolini con trufa", caption: "Carpaccio & trufa fresca", price: "$$", src: "/assets/home/hero.jpg", alt: "Tagliolini con trufa" },
          { id: "pappardelle-ragu", title: "Pappardelle al ragú", caption: "Res a fuego lento", src: "/assets/home/hero.jpg", alt: "Pappardelle con ragú" },
          { id: "pasta-aglio-olio", title: "Pasta Aglio Olio", caption: "Con camarón", src: "/assets/home/hero.jpg", alt: "Aglio Olio con camarón" },
          { id: "pesto-burrata", title: "Pasta al pesto", caption: "Con burrata y almendras", src: "/assets/home/hero.jpg", alt: "Pasta al pesto con burrata" },
          { id: "mascarpone-limon", title: "Mascarpone & limón", caption: "Toque cítrico", src: "/assets/home/hero.jpg", alt: "Tagliolini mascarpone limón" },
        ],
      },
      // Suma más categorías a partir de 03_Arquitectura_onpage:
      // "risottos", "pescados", "carnes", "cortes", "guarniciones", "cocteleria", "postres"
    ]
  }
  // REFACTOR: Eliminada la llave '}' y la coma ',' fuera de lugar que causaban el error
};