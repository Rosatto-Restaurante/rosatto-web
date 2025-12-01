// src/content/home.es.ts

/**
 * @file Contenido en Español
 * @description Fuente de verdad para todos los textos del sitio.
 * Centraliza textos de Hero, Experiencia, Historia, Menú, Eventos y Newsletter.
 */

export const homeContent = {
  hero: {
    // Texto oculto para SEO
    h1: "Rosatto: Restaurante de alta cocina mediterránea en Acapulco",

    // Título visible en el panel oscuro
    h2: "Ubicado en el corazón de la Zona Dorada desde 2024, a minutos de la Costera, Rosatto fusiona la alta cocina mediterránea con la profunda tradición y riqueza culinaria del puerto de Acapulco.",

    // Botón del Hero
    cta: "¡Te estamos esperando!",

    // Video y Poster (Rutas en /public)
    video: "/assets/home/video-Rosatto-desktop_1.mp4?v=2",
    poster: "/assets/home/experiencia-cena-y-brindis-en-rosatto-costa-azul.webp",
  },

  experiencia: {
    h2a: "Tradición y vanguardia en un ambiente refinado y de buen gusto.",
    p1: "Acapulco siempre ha sido puerta del mar y de sabores. Conocido desde la época dorada de los 40’s como la “Perla del Pacífico” Mexicano, la belleza del puerto y la calidad de su gente han atraído a este mítico balneario a estrellas de Hollywood y a numerosas personalidades del mundo de la política y la cultura.",
    p2: "Desde 2024 Rosatto abrió sus puertas para reinterpretar esa historia con producto local y gastronomía de fusión internacional. Nuestro menú fusiona sabores mediterráneos con pescados y mariscos frescos, cortes de carne selectos, pastas artesanales, tapas para compartir y opciones veganas y sin gluten, todo preparado con ingredientes premium.",
    h2b: "Vive una experiencia gastronómica que deleitará tus sentidos.",
    cta: "¡Haz tu reserva!",
    h2c: "Imagina tu cena especial…",
    p3: "Luz cálida, texturas naturales y cava a la vista. La bahía se ilumina y llega tu plato favorito. Conversaciones que fluyen, servicio atento y un ritmo que invita a quedarte. Es el lugar perfecto para una cena especial en el puerto. Aquí podrás disfrutar una experiencia pensada y diseñada para los amantes de la buena mesa mientras saboreas un cocktail que se siente como una celebración en sí mismo.",
    p4: "Brinda al atardecer con un spritz; comparte pulpo al pesto, tagliolini al limón o róbalo mediterráneo. Nuestra coctelería de autor y cava de vinos harán el maridaje perfecto con tus mejores momentos.",
  
    // Imágenes para la galería tipo Masonry
    galleryGrid: [
      { 
        src: "/assets/gallery/corte-premium-rosatto-acapulco.webp", 
        alt: "Corte premium a la parrilla con vino tinto servido en Rosatto Acapulco.",
        width: 800,
        height: 1200
      },
      { 
        src: "/assets/gallery/pasta-Rosatto-Acapulco.webp", 
        alt: "Pasta Artesanal servida en Rosatto Acapulco.",
        width: 1200,
        height: 800
      },
      { 
        src: "/assets/gallery/tapa-de-atun-Rosatto-Acapulco.jpeg", 
        alt: "Tapas gourmet para compartir con jamón serrano y queso derretido en Rosatto Acapulco.",
        width: 1200,
        height: 800
      },
      { 
        src: "/assets/gallery/bartender-cocktail-mixologia-artesanal-rosatto.webp", 
        alt: "Bartender preparando un cocktail. Mixología artesanal y servicio personalizado en el bar de Rosatto.",
        width: 800,
        height: 1200
      },
      { 
        src: "/assets/gallery/postre-de-cumpleanos-rosatto-acapulco.webp", 
        alt: "Postre de cumpleaños decorado con flores comestibles. Celebración personalizada en Rosatto Acapulco.",
        width: 1200,
        height: 800
      },
      { 
        src: "/assets/gallery/pasta-gratinada-rosatto.webp", 
        alt: "Pasta gratinada al horno con queso fundido y vino en Rosatto, restaurante mediterráneo en Acapulco.",
        width: 800,
        height: 1200
      }
    ]
  },

  story: {
    h2: "Una joya en el corazón de Acapulco",
    p1: "Más que un restaurante, Rosatto es una experiencia que querrás compartir. Nuestros visitantes destacan la atención amable y profesional desde que llegan y cada bocado se encargará de recordarte por qué este lugar se ha convertido en un favorito tanto para locales como para turistas.",
    p2: "Al final de la noche, te das cuenta de que Rosatto no es solo un restaurante, es un destino, es algo que no puedes esperar para contarle a tus amigos y planear con ellos una próxima visita. Ideal para cenas especiales, celebraciones y salidas memorables entre amigas, Rosatto siempre deja buen sabor de boca.",
    ctaWhatsapp: "Reserva fácil en WhatsApp",
  },

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
  },

  tuEvento: {
    h2: "Planea tu evento con nosotros…",
    p1: "¿Estás buscando el lugar ideal para celebrar tu próximo evento? ¡No busques más! Nuestro restaurante ofrece el escenario perfecto para todas tus ocasiones especiales.",
    p2: "Ya sea un cumpleaños, una cena de aniversario, cena para un grupo o cualquier otro evento, nuestro equipo comprometido está aquí para garantizar que todo salga a la perfección de principio a fin.",
    p3: "Con nuestras deliciosas opciones de menú, servicio excepcional y un ambiente sin igual, tus invitados tendrán una experiencia inolvidable.",
    p4: "Diseñamos experiencias a medida con menú curado, maridajes y detalles especiales. ¡Contáctanos hoy para hablar sobre tus necesidades y déjanos ayudarte a crear recuerdos que perdurarán toda la vida!",
    cta: "Reserva tu evento",
  },

  newsletter: {
    p: "¿Quieres recibir nuestras actualizaciones sobre menús de temporada, promociones para tu cumpleaños, eventos, experiencias y catas en cava?",
    // CORRECCIÓN: Agregamos 'cta1' que es la segunda parte del título en color magenta
    cta1: "Déjanos tu email aquí.", 
    emailPlaceholder: "Email*",
    checkbox: "Acepto términos y aviso de privacidad.",
    cta: "Suscribirme",
  },

 menuPreview: {
    categories: [
      {
        tag: "entradas",
        label: "Entradas",
        items: [
          { 
            id: "carpaccio-res", 
            title: "Carpaccio De Res", 
            caption: "Láminas finas de res frescas", 
            src: "/assets/menu/carpaccio-de-Res-Rosatto-Acapulco.webp", 
            alt: "Carpaccio de res servido en Rosatto restaurante Acapulco" 
          },
          { 
            id: "fondue-queso", 
            title: "Fondue De Queso", 
            caption: "Ideal para compartir", 
            src: "/assets/menu/fondue-de-queso-Rosatto-Acapulco.webp", 
            alt: "Fondue de queso derretido con pan en Rosatto Acapulco" 
          },
          { 
            id: "atun-pesto", 
            title: "Atún Sellado Al Pesto", 
            caption: "Con costra de pesto fresco", 
            src: "/assets/menu/atun-sellado-al-pesto-Rosatto-Acapulco.webp", 
            alt: "Atún sellado al pesto plato gourmet en Rosatto Acapulco" 
          },
          { 
            id: "tempura-mar", 
            title: "Tempura Del Mar", 
            caption: "Camarón, calamar y verduras fritas", 
            src: "/assets/menu/tempura-de-mar-Rosatto-Acapulco.webp", 
            alt: "Tempura del mar con camarones y calamar en Rosatto Acapulco" 
          },
          { 
            id: "chistorra", 
            title: "Gratinado De Chistorra", 
            caption: "Sartén de queso con chistorra", 
            src: "/assets/menu/gratinado-de-chistorra-Rosatto-Acapulco.webp", 
            alt: "Queso fundido gratinado con chistorra en Rosatto Acapulco" 
          },
          { 
            id: "tapa-salmon", 
            title: "Tapa De Salmón", 
            caption: "Bocado fresco de salmón", 
            src: "/assets/menu/tapa_de_salmon-Rosatto-Acapulco.webp", 
            alt: "Tapa de salmón aperitivo en Rosatto Acapulco" 
          },
          { 
            id: "bolitas-queso", 
            title: "Bolitas De Queso", 
            caption: "Con flores de calabaza", 
            src: "/assets/menu/bolitas-de-queso-y-flores-de-calabaza.webp", 
            alt: "Bolitas de queso fritas con flor de calabaza en Rosatto Acapulco" 
          },
           { 
            id: "sopa-mariscos", 
            title: "Sopa De Mariscos", 
            caption: "Fondo de mariscos selectos", 
            src: "/assets/menu/sopa_De_Mariscos-Rosatto-Acapulco.webp", 
            alt: "Sopa de mariscos caliente en Rosatto Acapulco" 
          },
          {
            id: "ensalada-frutos",
            title: "Ensalada Frutos Rojos",
            caption: "Fresca y ligera",
            src: "/assets/menu/ensalada-de-frutos-rojos-Rosatto-Acapulco.webp",
            alt: "Ensalada fresca con frutos rojos en Rosatto Acapulco"
          }
        ],
      },
      {
        tag: "fuertes",
        label: "Platos Fuertes",
        items: [
          { 
            id: "tomahawk", 
            title: "Tomahawk", 
            caption: "Corte premium a la parrilla", 
            src: "/assets/menu/tomahawk-Rosatto-Acapulco.webp", 
            alt: "Corte de carne Tomahawk a la parrilla en Rosatto Acapulco" 
          },
          { 
            id: "pulpo-parrilla", 
            title: "Pulpo A La Parrilla", 
            caption: "Con aceitunas y aceite de olivo", 
            src: "/assets/menu/pulpo-a-la-parrilla-Rosatto-Acapulco.webp", 
            alt: "Pulpo a la parrilla cocina mediterránea en Rosatto Acapulco" 
          },
           { 
            id: "robalo-confitado", 
            title: "Robalo Confitado", 
            caption: "Con pimientos y papa", 
            src: "/assets/menu/robalo-confitado-Rosatto-Acapulco.webp", 
            alt: "Filete de robalo confitado con guarnición en Rosatto Acapulco" 
          },
          { 
            id: "ribeye", 
            title: "Cortes De Carnes", 
            caption: "Rib eye de 400g con verduras", 
            src: "/assets/menu/experiencia-corte-de-carnes-rosatto-acapulco.webp", 
            alt: "Corte de carne Rib Eye a la parrilla en Rosatto Acapulco" 
          },
          { 
            id: "camarones-ajo", 
            title: "Camarones Crema Ajo", 
            caption: "Clásicos al ajo cremoso", 
            src: "/assets/menu/camarones-a-la-crema-de-ajo-Rosatto-Acapulco.webp", 
            alt: "Camarones preparados a la crema de ajo en Rosatto Acapulco" 
          },
          { 
            id: "robalo-almendrado", 
            title: "Róbalo Almendrado", 
            caption: "Costra crujiente de almendra", 
            src: "/assets/menu/robalo-almendrado-Rosatto-Acapulco.webp", 
            alt: "Róbalo almendrado platillo del mar en Rosatto Acapulco" 
          }
        ],
      },
      {
        tag: "pastas",
        label: "Pastas & Risottos",
        items: [
          { 
            id: "risotto-trufa", 
            title: "Risotto De Trufa", 
            caption: "Con esencia y aceite de trufa", 
            src: "/assets/menu/Risotto-de-Trufa-Rosatto-Acapulco.webp", 
            alt: "Risotto de trufa con hongos y queso en Rosatto Acapulco" 
          },
          { 
            id: "risotto-callo", 
            title: "Risotto Callo de Hacha", 
            caption: "Cremoso y del mar", 
            src: "/assets/menu/Risotto-de-callo-de-hacha-Rosatto-Acapulco.webp", 
            alt: "Risotto con callo de hacha en Rosatto Acapulco" 
          },
          { 
            id: "pasta-panna", 
            title: "Pasta Panna Camarones", 
            caption: "Tagliatele a la crema", 
            src: "/assets/menu/pasta-Panna-Con-Camarones-Rosatto-Acapulco.webp", 
            alt: "Pasta Panna con camarones y queso en Rosatto Acapulco" 
          },
          { 
            id: "pasta-arrabiata", 
            title: "Pasta Mariscos Arrabiata", 
            caption: "Ligeramente picante", 
            src: "/assets/menu/pasta-Mariscos-Arrabiata-Rosatto-Acapulco.webp", 
            alt: "Pasta con mariscos salsa arrabiata en Rosatto Acapulco" 
          },
          { 
            id: "pasta-ragu", 
            title: "Pasta Ragu De Res", 
            caption: "Papardelle con carne al ragú", 
            src: "/assets/menu/pasta-Ragu-de-res-Rosatto-Acapulco.webp", 
            alt: "Pasta Papardelle con ragú de res en Rosatto Acapulco" 
          }
        ],
      },
      {
        tag: "postres",
        label: "Postres & Drinks",
        items: [
          { 
            id: "tiramisu", 
            title: "Tiramisú De Café", 
            caption: "Clásico italiano", 
            src: "/assets/menu/tiramisu-de-cafe-Rosatto-Acapulco.webp", 
            alt: "Postre Tiramisú de café en Rosatto Acapulco" 
          },
          { 
            id: "red-velvet", 
            title: "Pastel Red Velvet", 
            caption: "Con Nutella", 
            src: "/assets/menu/pastel-red-velvet-y-nutella-Rosatto-Acapulco.webp", 
            alt: "Pastel Red Velvet con Nutella en Rosatto Acapulco" 
          },
          { 
            id: "aperol", 
            title: "Aperol Gin", 
            caption: "Refrescante y cítrico", 
            src: "/assets/menu/aperol-gin-Rosatto-Acapulco.webp", 
            alt: "Coctel Aperol Gin bebida en Rosatto Acapulco" 
          },
          { 
            id: "martini", 
            title: "Martini De Lychee", 
            caption: "Dulce y sofisticado", 
            src: "/assets/menu/matini-de-lychee-Rosatto-Acapulco.webp", 
            alt: "Martini de Lychee bebida preparada en Rosatto Acapulco" 
          },
          { 
            id: "cava", 
            title: "Cava de Vinos", 
            caption: "Nuestra selección", 
            src: "/assets/menu/cava-de-vinos-Rosatto-Acapulco.webp", 
            alt: "Cava de vinos selección especial en Rosatto Acapulco" 
          }
        ],
      },
    ]
  }
};