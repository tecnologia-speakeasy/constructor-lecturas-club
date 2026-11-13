import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Constructor de lecturas — Speak Easy",
  description: "Genera lecturas en inglés a partir de una ficha y las entrega maquetadas en PDF.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
