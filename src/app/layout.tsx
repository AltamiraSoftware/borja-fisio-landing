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
    "Fisioterapia a domicilio en Madrid para dolor, lesiones deportivas y recuperación funcional. Tratamiento personalizado con Borja Estarellas desde 50 €. Valoración, terapia manual y ejercicio terapéutico en tu casa.",
  keywords: [
    "fisioterapia a domicilio",
    "fisioterapeuta Madrid",
    "fisioterapia a domicilio Madrid",
    "dolor lumbar",
    "dolor cervical",
    "lesiones deportivas",
    "tendinopatía",
    "esguince",
    "fascitis plantar",
    "terapia manual",
    "ejercicio terapéutico",
    "Borja Estarellas",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fisioterapia a domicilio en Madrid | Borja Estarellas",
    description:
      "Fisioterapia a domicilio en Madrid para dolor, lesiones deportivas y recuperación funcional. Tratamiento personalizado con Borja Estarellas desde 50 €.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Fisioterapia a domicilio en Madrid - Borja Estarellas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fisioterapia a domicilio en Madrid | Borja Estarellas",
    description:
      "Fisioterapia a domicilio en Madrid. Tratamiento personalizado desde 50 €.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="es" className="h-full scroll-smooth">
      {gaId && (
        <head>
          {/* GA4 - only loads when NEXT_PUBLIC_GA_MEASUREMENT_ID is set */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`,
            }}
          />
        </head>
      )}
      <body className="min-h-full bg-[var(--color-off-white)] text-[var(--color-text)] antialiased">
        {children}
      </body>
    </html>
  );
}
