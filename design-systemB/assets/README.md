# Assets

| Archivo | Uso |
| --- | --- |
| `logo.svg` | Logo principal (marino sobre claro). Para web, preferir el componente HTML `.logo` |
| `icono-dl-marino.svg` | Avatar Instagram, WhatsApp, Doctoralia, Google Business (recorte circular) |
| `icono-dl-claro.svg` | Icono sobre fondos oscuros |
| `favicon.svg` | Favicon (sin punto coral) |
| `daniela-recorte.png` | Foto recortada provisional, fondo transparente, 1066 × 1600 |

## Tareas para el agente

1. **Los SVG usan texto en Jost, no contornos.** Funcionan abiertos en el navegador; como `<img>` o favicon el navegador puede no cargar la fuente. Antes de producción: convertir texto a contornos (o generar con `opentype.js` / `fonttools` a partir de Jost 500). Mientras tanto, usar los componentes HTML `.logo` y `.brand-icon`.
2. Exportar favicon: `favicon.svg` (contorneado) + `favicon.ico` 32 px + `apple-touch-icon.png` 180 px + `icon-512.png` para el manifest.
3. Foto: generar `daniela-recorte.avif` y `.webp` en 640, 960 y 1280 px de alto; usar `<picture>` con `srcset`. El recorte tiene un halo claro de 1 px en bordes; sobre fondo marino, pedir recorte profesional.
