import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Fisioterapia a domicilio en Madrid | Borja Estarellas",
    template: "%s | Borja Estarellas",
  },
  description:
    "Fisioterapia a domicilio en Madrid para dolor, lesiones deportivas y recuperación funcional. Tratamiento personalizado con Borja Estarellas desde 50 €.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fisioterapia a domicilio en Madrid | Borja Estarellas",
    description:
      "Fisioterapia a domicilio en Madrid para dolor, lesiones deportivas y recuperación funcional.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full scroll-smooth">
      <body className="min-h-full bg-[var(--color-off-white)] text-[var(--color-text)] antialiased">
        {children}
      </body>
    </html>
  );
}
