import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Borja Estarellas Fisioterapia",
    short_name: "Borja Fisio",
    description: "Fisioterapia en Arganzuela y a domicilio en Madrid.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7faf8",
    theme_color: "#073b4c",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
