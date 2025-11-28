// src/app/layout.tsx
import "./globals.css";
import { display, sans } from "./fonts";
import Cursor from "@/components/ui/Cursor";
import { Analytics } from "@/lib/analytics"; // <--- IMPORTANTE

export const metadata = { title: "Rosatto", description: "Restaurante Rosatto – Acapulco" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="overflow-x-hidden">
      {/* Inyectamos GTM aquí para que Next.js lo maneje eficientemente */}
      <Analytics />
      
      <body className={`${display.variable} ${sans.variable} font-sans bg-dl-cream text-dl-gray antialiased overflow-x-hidden`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}