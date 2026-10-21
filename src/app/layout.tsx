import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/constants";
import { AnalyticsEvents } from "@/components/analytics/AnalyticsEvents";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: "Borja Estarellas Fisioterapia",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "Borja Fisio", statusBarStyle: "black-translucent" },
  title: {
    default: "Fisioterapia en Chamberí y Madrid | Borja Estarellas",
    template: "%s | Borja Estarellas",
  },
  description:
    "Fisioterapia con Borja Estarellas en Madrid. Consulta en Almagro, Chamberí, y atención a domicilio. Valoración, tratamiento y ejercicio terapéutico.",
  keywords: [
    "fisioterapia a domicilio",
    "fisioterapeuta Madrid",
    "fisioterapia a domicilio Madrid",
    "fisioterapia Chamberí",
    "fisioterapeuta Almagro",
    "fisioterapia Almagro Madrid",
    "dolor lumbar",
    "dolor cervical",
    "lesiones deportivas",
    "tendinopatía",
    "esguince",
    "fascitis plantar",
    "ecografía musculoesquelética",
    "terapia manual",
    "ejercicio terapéutico",
    "Borja Estarellas",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fisioterapia en Chamberí y Madrid | Borja Estarellas",
    description:
      "Consulta de fisioterapia en Chamberí y atención a domicilio en Madrid con Borja Estarellas.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Fisioterapia en Chamberí y Madrid - Borja Estarellas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fisioterapia en Chamberí y Madrid | Borja Estarellas",
    description:
      "Consulta en Chamberí y fisioterapia a domicilio en Madrid.",
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

export const viewport: Viewport = { themeColor: "#073b4c" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="es" className="h-full scroll-smooth">
      <head>
        {gaId && (
          <>
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
          </>
        )}
      </head>
      <body className="min-h-full bg-[var(--color-off-white)] text-[var(--color-text)] antialiased">
        {children}
        <AnalyticsEvents />
      </body>
    </html>
  );
}
