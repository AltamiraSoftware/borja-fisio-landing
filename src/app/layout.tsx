import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/constants";
import { sharedOpenGraph } from "@/lib/metadata";
import { AnalyticsEvents } from "@/components/analytics/AnalyticsEvents";
import { Archivo, DM_Sans } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], display: "swap", variable: "--font-archivo" });
const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dm-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "192x192", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "Borja Fisio", statusBarStyle: "black-translucent" },
  title: {
    default: "Borja Estarellas | Fisioterapeuta en Madrid",
    template: "%s | Borja Estarellas",
  },
  description:
    "Fisioterapia con Borja Estarellas en Madrid. Consulta independiente dentro del centro Meraki Salud Chamberí, en Almagro, y atención a domicilio.",
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
  openGraph: sharedOpenGraph,
  twitter: {
    card: "summary_large_image",
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
    <html lang="es" className={`${archivo.variable} ${dmSans.variable} h-full scroll-smooth`}>
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
