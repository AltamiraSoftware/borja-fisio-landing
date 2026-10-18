import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["100.119.126.66"],
  // El host y el contenedor montan el mismo proyecto con rutas absolutas distintas.
  // Cada instancia necesita su propia caché de módulos de Next/Webpack.
  distDir: process.cwd().startsWith("/workspace/")
    ? ".next-container"
    : process.cwd().includes("/sandboxes/")
      ? ".next-host"
      : ".next",
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
