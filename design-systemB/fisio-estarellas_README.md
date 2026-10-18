# Sistema de diseño — Estarellas Fisioterapia

Instrucciones para agentes de programación. Lee este archivo entero antes de escribir código. Si una decisión no está aquí, consulta `BRAND.md`; si tampoco está, elige la opción más sobria y déjalo anotado.

## Mapa de archivos

| Archivo | Qué contiene | Cuándo leerlo |
| --- | --- | --- |
| `README.md` | Reglas duras, flujo de trabajo, checklist | Siempre, primero |
| `BRAND.md` | Posicionamiento, servicios, tono de voz, copy aprobado, legal | Antes de escribir cualquier texto |
| `tokens/tokens.css` | Variables CSS (color, tipo, espacio, radios, sombras, motion) | Importar en todo proyecto |
| `tokens/tokens.json` | Mismos tokens en JSON (Tailwind, Style Dictionary, apps) | Si el stack no es CSS plano |
| `css/base.css` | Reset, tipografía, layout y componentes base | Importar después de tokens |
| `components/COMPONENTS.md` | HTML de referencia de cada componente | Al maquetar |
| `motion/MOTION.md` | Sistema de animación: principios, recetas, rendimiento | Antes de animar nada |
| `motion/motion.css` + `motion/motion.js` | Implementación lista para usar | Importar si hay animación |

> `assets/` (logo, monograma, foto de Borja) y `examples/index.html` (home montada) se generan en la siguiente pasada, junto con la primera home. Esta carpeta es solo la cimentación.

## Orden de carga

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400..700&family=Barlow+Condensed:wght@500;600;700&family=Inter+Tight:wght@400..700&family=JetBrains+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="motion/motion.css">
<script src="motion/motion.js" defer></script>
```

En producción, **autoalojar las fuentes** (p. ej. `@fontsource-variable/space-grotesk`, `@fontsource-variable/inter-tight`). Cargar Google Fonts desde sus servidores transmite la IP del visitante a terceros, lo que en la UE tiene implicaciones RGPD. Precargar solo los dos archivos del primer pantallazo (Barlow Condensed y Inter Tight).

## Reglas duras (no negociables)

1. **Nunca usar colores fuera de `tokens.css`.** Si hace falta un tono intermedio, usar `color-mix()` sobre tokens existentes.
2. **Verde eléctrico (`--color-verde`) solo para: relleno del CTA, el monograma/punto del logo y acentos sobre grafito.** Sobre fondo claro, el texto verde usa `--color-verde-oscuro` (el lima no pasa AA sobre claro). Nunca verde lima como fondo de sección ni como texto de párrafo.
3. **Tres fuentes, tres papeles.** Barlow Condensed = titulares (H1–H3, frase de marca). Space Grotesk = identidad (logo, antetítulo, botón, navegación). Inter Tight = lectura (párrafos, formularios, precios). JetBrains Mono = datos, precios, captions. Space Grotesk nunca en párrafos de más de una línea.
4. **El logo es texto en Space Grotesk, en minúsculas**: `estarellas` · monograma verde · `fisioterapia`. Ver componente `.logo`. No cambiar a mayúsculas en la cabecera de escritorio.
5. **Contraste AA mínimo** (4,5:1 texto, 3:1 titulares ≥ 24 px). Combinaciones aprobadas en `tokens.css`.
6. **Nunca imágenes ni iconografía cliché**: esqueletos, columnas vertebrales en 3D, manos con aceite, cruz médica, estética de spa (velas, piedras, lavanda), stock de deportistas de élite que no son pacientes reales, azul hospital + blanco clínico.
7. **Legal obligatorio en todas las páginas**: nombre legal, nº colegiado, nº de registro sanitario de la Comunidad de Madrid (pendiente: dejar `<!-- TODO: nº colegiado -->` y `<!-- TODO: nº registro sanitario -->`).
8. **Testimonios**: sin plazos ni resultados concretos ("en 3 sesiones ya estaba mejor" queda prohibido). Solo reseñas reales verificables (Google Business Profile). Ver `BRAND.md › Marco legal`.
9. **Copy**: no inventar textos de marketing. Usar `BRAND.md › Biblioteca de copy`. Si falta un texto, escribirlo siguiendo las reglas de tono y marcarlo `<!-- COPY PROVISIONAL -->`.
10. **WhatsApp enlaza a `https://wa.me/34XXXXXXXXX` con mensaje prerrellenado.** Nunca `wa.me/?text=…` sin número.
11. **Animación**: solo `transform` y `opacity` (y `clip-path` en reveals). Respetar `prefers-reduced-motion`. Ver `motion/MOTION.md`.

## Layout

- Contenedor: `max-width: var(--container)` (1120 px), padding lateral `var(--gutter)`.
- Ancho de lectura: `max-width: var(--measure)` (68ch).
- Secciones: padding vertical `var(--space-section)` (fluido 64→120 px).
- Patrón de sección del manual: columna de etiqueta (240 px) + contenido. En móvil se apila.
- Mobile first. Breakpoints: 640 / 960 / 1200 px.
- Botones y enlaces táctiles: mínimo 44 × 44 px.

## Checklist antes de entregar

- [ ] Lighthouse accesibilidad ≥ 95, rendimiento ≥ 90 en móvil
- [ ] LCP < 2,5 s (la foto del hero lleva `fetchpriority="high"`, `width`/`height` y formato AVIF/WebP)
- [ ] CLS < 0,05 (reservar espacio de imágenes y fuentes con `size-adjust` si hace falta)
- [ ] Navegable solo con teclado, `:focus-visible` visible
- [ ] Con `prefers-reduced-motion: reduce` no hay desplazamientos
- [ ] Nº colegiado y nº de registro sanitario presentes en hero y pie
- [ ] Ningún texto insinúa que el lector tiene una lesión o un problema de salud (aplica a Meta Ads también)
- [ ] Ningún testimonio promete plazos ni resultados
- [ ] WhatsApp enlaza a `https://wa.me/34XXXXXXXXX` con mensaje prerrellenado
- [ ] Canonical y `og:url` apuntan a `https://www.fisioestarellas.es` (no al subdominio de Vercel)
