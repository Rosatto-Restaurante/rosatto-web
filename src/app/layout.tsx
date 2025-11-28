// src/app/layout.tsx
import "./globals.css";
import { display, sans } from "./fonts";
import Cursor from "@/components/ui/Cursor";
import { Analytics } from "@/lib/analytics"; // <--- 1. Importar

export const metadata = { title: "Rosatto", description: "Restaurante Rosatto – Acapulco" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="overflow-x-hidden">
      {/* 2. Insertar Analytics aquí (Next.js lo colocará automáticamente donde mejor rinda) */}
      <Analytics />
      
      <body className={`${display.variable} ${sans.variable} font-sans bg-dl-cream text-dl-gray antialiased overflow-x-hidden`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}