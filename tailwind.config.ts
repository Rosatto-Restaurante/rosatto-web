// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ahora conectamos con las variables CSS generadas por next/font
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
          colors: {
        dl: {
          cream: "#F7F3EA",   // papel crema
          dark: "#0D141B",    // casi navy profundo
          gold: "#C8A661",    // acento dorado
          magenta: "#A82C55", // acento secundario
          grey: "#6C6F73",
          white: "#FFFFFF",
          black: "#0A0A0A",
        },
      },
      letterSpacing: {
        // tracking para display estilo "Dolores"
        wide2: "0.08em",
        ultra: "0.12em",
      },
      boxShadow: {
        // sombras sutiles y suaves
        soft: "0 6px 22px rgba(0,0,0,0.08)",
        elev: "0 12px 28px rgba(0,0,0,0.12)",
        insetGold: "inset 0 -6px 0 0 #C8A661", // banda dorada inferior
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(.22,.61,.36,1)",
      },
      backgroundImage: {
        // texturas/bandas
        paper: "radial-gradient(rgba(0,0,0,.03) 1px, transparent 1px)",
        goldBand:
          "linear-gradient(to bottom, transparent 0%, transparent calc(100% - 6px), #C8A661 calc(100% - 6px), #C8A661 100%)",
      },
      backgroundSize: {
        paper: "6px 6px",
      },
      maxWidth: {
        proseWide: "78ch",
      },
    },
  },
  plugins: [],
};
export default config;
