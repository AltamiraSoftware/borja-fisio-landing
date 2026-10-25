import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const sharedOpenGraph = {
  siteName: siteConfig.name,
  locale: "es_ES",
  type: "website",
  images: [
    {
      url: `${siteConfig.url}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: "Fisio Estarellas - Borja Estarellas, fisioterapeuta en Madrid",
    },
  ],
} satisfies NonNullable<Metadata["openGraph"]>;
