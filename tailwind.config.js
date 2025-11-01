// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: { // <-- En v3, todo va aquí
      fontFamily: { /* ... */ },
      colors: {
        dl: {
          cream: "#F7F3EA",
          dark: "#0D141B",
          gold: "#C8A661",
          magenta: "#A82C55",
          grey: "#6C6F73",
          white: "#FFFFFF",
          black: "#0A0A0A",
        },
      },
      // ...el resto de tu 'extend'
    },
  },
  plugins: [],
};

module.exports = config;