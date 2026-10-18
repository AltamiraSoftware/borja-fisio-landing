# Sistema de animación

La marca es **directa y activa**. La animación existe para guiar la lectura y dar sensación de precisión, nunca para impresionar. Si una animación se nota más que el contenido, sobra.

## 1. Principios

1. **Llegar y posarse.** Todo entra con `--ease-out` (deceleración larga). Nada rebota, nada sobrepasa su posición final, nada gira.
2. **Distancias cortas.** Desplazamientos de 8–28 px. Opacidad de 0 a 1. Nunca escalas por debajo de 0,96 ni por encima de 1,02.
3. **Una sola coreografía por pantalla.** Al cargar, el hero se revela en secuencia; el resto de la página aparece al hacer scroll, bloque a bloque. No hay dos cosas compitiendo a la vez.
4. **El contenido crítico nunca espera.** La nota legal, el pie, los precios y los formularios se ven sin animación. El LCP (foto o H1 del hero) debe pintarse aunque el JS no cargue.
5. **Movimiento reducido = sin desplazamiento.** Con `prefers-reduced-motion: reduce` solo se permiten fundidos ≤ 200 ms o nada. Los tokens ya se anulan solos.
6. **Solo propiedades compuestas:** `transform`, `opacity`, `clip-path`, `filter: blur()` (con moderación). Nunca animar `width`, `height`, `top`, `left`, `margin`, `box-shadow` grande ni `background-position`.

## 2. Tokens

| Token | Valor | Uso |
| --- | --- | --- |
| `--dur-instant` | 120 ms | `:active`, pulsación |
| `--dur-quick` | 200 ms | hover, color, foco |
| `--dur-base` | 320 ms | menús, acordeones, cambios de estado |
| `--dur-slow` | 560 ms | reveals al hacer scroll |
| `--dur-slower` | 900 ms | reveal del H1 y de la foto del hero |
| `--ease-out` | `cubic-bezier(.22,1,.36,1)` | entradas |
| `--ease-in-out` | `cubic-bezier(.65,0,.35,1)` | transiciones de página, cambios de layout |
| `--ease-in` | `cubic-bezier(.55,0,1,.45)` | salidas (más rápidas que las entradas: ×0,7) |
| `--ease-soft` | `cubic-bezier(.33,1,.68,1)` | hovers |
| `--stagger` | 50 ms | retardo entre elementos hermanos (máx. 6 escalones = 300 ms) |
| `--distance-sm/md/lg` | 8 / 16 / 28 px | desplazamiento de entrada |

Regla de duración: cuanto mayor es el elemento o la distancia, más larga la duración, dentro del rango. Las salidas duran ~70 % de la entrada.

## 3. API declarativa (`motion.css` + `motion.js`)

Añadir en `<head>`, antes de cualquier CSS, para evitar parpadeo:

```html
<script>document.documentElement.classList.add('js-motion')</script>
```

Sin esa clase (JS desactivado) todo se ve estático. Atributos:

| Atributo | Efecto |
| --- | --- |
| `data-reveal` | Fundido + subida `--distance-md` al entrar en viewport |
| `data-reveal="fade"` | Solo fundido |
| `data-reveal="lines"` | Titulares: cada línea sube desde una máscara, en cascada. Respeta `<em>` |
| `data-reveal="mask"` | Imágenes: se descubre de abajo arriba con `clip-path` + leve zoom de 1,04 a 1 |
| `data-reveal-group` | En el contenedor: sus hijos `data-reveal` reciben `--i` y se escalonan |
| `data-reveal-delay="120"` | Retardo extra en ms |
| `data-header` | En la cabecera: `data-scrolled="true"` tras 8 px de scroll |
| `.logo[data-intro]` | El punto verde cae y se posa tras el nombre (solo en la carga inicial del hero) |

JS expuesto: `window.EFMotion.refresh()` (re-escanea DOM tras renderizado de cliente) y `window.EFMotion.reduced` (boolean).

## 4. Coreografía del hero (carga inicial)

Total ≤ 1,2 s. Empieza en `DOMContentLoaded`, no espera a imágenes.

| t (ms) | Elemento | Animación |
| --- | --- | --- |
| 0 | Foto | `mask`, 900 ms |
| 80 | Antetítulo | `fade`, 560 ms |
| 140 | H1 | `lines`, 900 ms por línea, +80 ms por línea |
| 420 | Subtítulo | `data-reveal`, 560 ms |
| 520 | CTAs | `data-reveal`, 560 ms |
| 600 | Punto del logo | `data-intro`, 560 ms |

Implementación: dentro del hero, usar `data-reveal-delay` con estos valores. Los elementos en el primer viewport se disparan inmediatamente.

## 5. Recetas

### 5.1 Reveal al hacer scroll (CSS nativo, sin JS)

Para navegadores con *scroll-driven animations*. `motion.css` ya lo incluye como mejora progresiva bajo `@supports`; JS sigue siendo el método principal porque permite reveal único (no se revierte al subir).

```css
@supports (animation-timeline: view()) {
  .sd-fade { animation: ef-rise linear both; animation-timeline: view(); animation-range: entry 0% entry 40%; }
}
@keyframes ef-rise { from { opacity: 0; translate: 0 var(--distance-md); } }
```

Uso permitido: progreso de lectura en artículos del blog, detalles decorativos. No para contenido clave.

### 5.2 Transiciones entre páginas (View Transitions)

Web multipágina (MPA, p. ej. Astro, WordPress):

```css
@view-transition { navigation: auto; }
::view-transition-old(root) { animation: var(--dur-base) var(--ease-in) both ef-out; }
::view-transition-new(root) { animation: var(--dur-slow) var(--ease-out) both ef-in; }
@keyframes ef-out { to { opacity: 0; } }
@keyframes ef-in { from { opacity: 0; translate: 0 var(--distance-sm); } }
.site-header { view-transition-name: header; }   /* la cabecera permanece fija entre páginas */
.hero__media img { view-transition-name: borja; } /* la foto "viaja" si aparece en ambas páginas */
@media (prefers-reduced-motion: reduce) { ::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*) { animation: none !important; } }
```

SPA (React/Next/Vue): envolver el cambio de ruta en `document.startViewTransition(() => updateDOM())` con fallback si no existe.

Nombres de `view-transition-name` únicos por página.

### 5.3 Hover y estados

- Botón primario: cambio de color 200 ms `--ease-soft`; `:active` escala 0,98 durante 120 ms. Sin sombras que crecen.
- Enlace con flecha: la flecha se desplaza 4 px.
- Tarjeta enlazada: borde a grafito + `translateY(-2px)` 320 ms.
- Solo en `@media (hover: hover)` para efectos que no sean de color, para no dejar estados pegados en móvil.

### 5.4 Acordeón (FAQ)

Usar `<details>` nativo. Animar con `interpolate-size: allow-keywords` donde exista:

```css
:root { interpolate-size: allow-keywords; }
details::details-content { block-size: 0; overflow: clip; transition: block-size var(--dur-base) var(--ease-in-out), content-visibility var(--dur-base) allow-discrete; }
details[open]::details-content { block-size: auto; }
```

Sin soporte: abre al instante (aceptable). No recurrir a animar `height` con JS.

### 5.5 Menú móvil

Panel a pantalla completa en `--bg`. Entrada: `opacity` 0→1 + enlaces con `data-reveal` escalonados (stagger 40 ms). Salida: `opacity` en 200 ms `--ease-in`, sin escalonar. Bloquear scroll del body, devolver foco al botón al cerrar, cerrar con `Esc`.

### 5.6 Formulario de contacto

- Foco: borde a grafito en 200 ms.
- Error: sin sacudidas. Mensaje que aparece con `fade` 200 ms y texto en `--color-verde-oscuro`.
- Envío: el botón muestra "Enviando…" (sin spinner giratorio); éxito con fundido del mensaje de confirmación. Nada de confeti.

### 5.7 Contadores, carruseles, parallax

- **Contadores animados:** no. Los números se muestran tal cual.
- **Carruseles automáticos:** no. Si hay carrusel, es manual con `scroll-snap`.
- **Parallax:** solo uno, sutil, en la foto del hero en escritorio (máx. 24 px de recorrido), con scroll-driven animations y nunca en móvil ni con movimiento reducido.

### 5.8 Librerías

CSS + `motion.js` cubre el 90 % de la web. Si el proyecto necesita secuencias complejas:

- **Motion (motion.dev)**, preferida: ligera, usa WAAPI. Mapear tokens: `{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }`.
- **GSAP**: solo si ya está en el proyecto. `CustomEase.create("ef-out", "0.22,1,0.36,1")`. Matar timelines en `unmount`.
- En React, Framer Motion/Motion: `transition={{ duration: 0.56, ease: [0.22,1,0.36,1] }}` y `useReducedMotion()` obligatorio.

Nunca cargar una librería solo para un fade.

## 6. Piezas sociales (Reels, Stories, anuncios en vídeo)

Si el agente genera vídeo o animaciones para Instagram/Meta:

- 1080 × 1350 (feed 4:5) o 1080 × 1920 (Stories/Reels). Zona segura: 250 px arriba y abajo en 9:16.
- Duración: 6–15 s. El mensaje se entiende sin sonido y en el primer segundo.
- Ritmo: un texto por plano, mínimo 1,5 s en pantalla por cada 5 palabras.
- Texto: Barlow Condensed para el mensaje, Space Grotesk para el logo de cierre. Mínimo 48 px en 1080 de ancho.
- Entradas con `--ease-out` a 500–700 ms; cortes secos entre planos (no transiciones de PowerPoint).
- Cierre (últimos 2 s): fondo grafito, logo centrado, el punto verde cae y se posa (misma animación que `data-intro`).
- Copy compatible con Meta: hablar del servicio, nunca del problema del espectador.

## 7. Rendimiento

- Objetivo: 60 fps en un móvil Android de gama media. Probar con CPU ×4 en DevTools.
- `will-change` solo durante la animación (el JS lo quita al terminar). Nunca en CSS global.
- No más de ~12 elementos animando a la vez.
- `IntersectionObserver` con `rootMargin: "0px 0px -10% 0px"`; desconectar cada elemento tras revelarlo.
- No ligar animaciones a `scroll` con listeners; usar `IntersectionObserver` o scroll-driven animations. El listener de la cabecera usa `requestAnimationFrame` y `passive: true`.
- Las animaciones no deben aumentar el CLS: los elementos ocupan su espacio desde el inicio (solo cambian `transform`/`opacity`).
- El LCP no puede depender de una animación: la foto del hero empieza visible al 92 % con `clip-path`, nunca `opacity: 0`.

## 8. Accesibilidad

- `prefers-reduced-motion: reduce` → tokens a 1 ms y distancias a 0 (en `tokens.css`); `motion.js` no divide líneas y muestra todo.
- Nada parpadea más de 3 veces por segundo.
- Nada se mueve más de 5 s sin control de pausa (WCAG 2.2.2).
- El orden de aparición sigue el orden de lectura del DOM.
- Los textos divididos por `lines` conservan el texto accesible original vía `aria-label` en el contenedor y `aria-hidden` en los fragmentos.

## 9. QA de animación

- [ ] Recargar con caché vacía en 3G lento: el hero se lee aunque el JS tarde
- [ ] Activar movimiento reducido en el sistema: nada se desplaza
- [ ] Desactivar JS: todo visible
- [ ] Scroll rápido hasta el final y vuelta: nada queda invisible
- [ ] Redimensionar ventana tras el reveal del H1: las líneas no se rompen
- [ ] Performance panel: sin tareas largas > 50 ms por animación
