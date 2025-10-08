// src/app/layout.tsx
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-[#0d0d0d] text-[#f5efe6]">
        {children}
      </body>
    </html>
  )
}
