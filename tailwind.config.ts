// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        rosatto: {
          black: '#0d0d0d',
          cream: '#f5efe6',
          gold:  '#c5a46d',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
