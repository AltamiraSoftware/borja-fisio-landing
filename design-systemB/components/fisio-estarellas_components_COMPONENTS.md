# Componentes

HTML de referencia. Clases definidas en `css/base.css`; atributos `data-reveal*` en `motion/`.

## Logo

```html
<a class="logo" href="/" aria-label="Estarellas Fisioterapia — inicio">
  <span class="logo__name">estarellas</span>
  <span class="logo__dot" aria-hidden="true"></span>
  <span class="logo__desc">fisioterapia</span>
</a>
```
- Tamaño por `font-size` del `.logo` (cabecera 22 px, portada 60 px). Mínimo 120 px de ancho.
- Variante con posicionamiento (web, anuncios, material de derivación):
```html
<div class="logo" style="flex-direction:column;align-items:flex-start;gap:.25em">
  <span class="logo__name">estarellas</span>
  <span class="cluster" style="--cluster-gap:.5em;font-size:.42em">
    <span style="font-weight:500">fisioterapia</span><span class="logo__dot" style="margin:0"></span><span style="font-weight:600">a domicilio · Madrid</span>
  </span>
</div>
```
- Sobre grafito: añadir `.logo--inverse` (o estar dentro de `.section--inverse`).

## Monograma

```html
<span class="brand-icon" style="--size:48px" aria-hidden="true">E</span>
<span class="brand-icon brand-icon--round" style="--size:56px">E</span>
```
Para favicon y redes usar los archivos de `assets/` (se generan en la siguiente pasada).

## Botones

```html
<a class="btn btn--primary" href="#cita">Pedir primera sesión</a>
<a class="btn btn--secondary" href="https://wa.me/34XXXXXXXXX?text=Hola%20Borja%2C%20me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20la%20fisioterapia%20a%20domicilio.">WhatsApp</a>
<a class="btn btn--link" href="#como-trabajo">Cómo es la primera sesión <span class="arrow" aria-hidden="true">→</span></a>
```
Un solo `.btn--primary` por pantalla visible. El CTA primario lleva texto oscuro sobre verde (ver `--cta-fg`).

## Cabecera

```html
<header class="site-header" data-header>
  <div class="container site-header__inner">
    <a class="logo" href="/">…</a>
    <nav class="nav" aria-label="Principal">
      <a href="#deportiva">Fisioterapia deportiva</a>
      <a href="#lesiones">Lesiones y dolor</a>
      <a href="#domicilio">A domicilio</a>
      <a href="#precios">Precios</a>
    </nav>
    <a class="btn btn--primary" href="#cita">Pedir cita</a>
  </div>
</header>
```

## Hero

```html
<section class="container hero">
  <div class="hero__copy">
    <span class="eyebrow" data-reveal="fade" data-reveal-delay="80">Fisioterapia a domicilio · Madrid</span>
    <h1 class="display" data-reveal="lines" data-reveal-delay="140">La consulta de fisio deportiva, <em>en tu casa.</em></h1>
    <p class="lead" data-reveal data-reveal-delay="420">Valoración completa, tratamiento y plan de ejercicio en tu casa, con el criterio de una consulta especializada.</p>
    <div class="cluster" data-reveal data-reveal-delay="520">
      <a class="btn btn--primary" href="#cita">Pedir primera sesión</a>
      <a class="btn btn--secondary" href="https://wa.me/34XXXXXXXXX">WhatsApp</a>
    </div>
  </div>
  <div class="hero__media" data-reveal="mask">
    <img class="sd-parallax" src="/assets/borja-*.webp" alt="Borja Estarellas, fisioterapeuta" width="1066" height="1600" fetchpriority="high">
  </div>
</section>
```

## Servicios

```html
<div class="grid-auto" data-reveal-group>
  <a class="card card--inverse" href="#deportiva" data-reveal>
    <span class="card__kicker">Principal</span>
    <span class="card__title">Fisioterapia deportiva</span>
    <span class="card__body">Valoración, tratamiento y plan de ejercicio para volver a entrenar.</span>
  </a>
  <a class="card card--muted" href="#lesiones" data-reveal>
    <span class="card__kicker">Cervical · lumbar · tendinopatías</span>
    <span class="card__title">Lesiones y dolor</span>
    <span class="card__body">Esguinces, fascitis plantar y contracturas, con valoración previa.</span>
  </a>
  <a class="card card--muted" href="#domicilio" data-reveal>
    <span class="card__kicker">En Madrid</span>
    <span class="card__title">A domicilio</span>
    <span class="card__body">Toda la sesión en tu casa, con material portátil.</span>
  </a>
</div>
```
La tarjeta principal siempre en `card--inverse` y primera.

## Precios

```html
<ul class="price-list">
  <li><span>Primera sesión</span><strong>desde 50 €</strong></li>
  <li><span>Sesión de seguimiento</span><strong>consultar</strong></li>
  <li><span>A domicilio (Madrid)</span><strong>incluido</strong></li>
</ul>
```

## Nota legal / de confianza (obligatoria)

```html
<aside class="legal-note" role="note">
  <strong>Borja Estarellas Botín</strong>
  Fisioterapeuta · Col. nº <!-- TODO: nº colegiado --> · Nº registro sanitario: <!-- TODO: nº registro sanitario (Comunidad de Madrid) -->.
</aside>
```
No animar este componente. Siempre visible sin interacción.

## Pie legal (obligatorio)

```html
<footer class="site-footer">
  <div class="container stack" style="--stack-gap:8px">
    <strong>Borja Estarellas Botín</strong>
    <span>Fisioterapeuta · Col. nº <!-- TODO: nº colegiado --> · <!-- TODO: nº registro sanitario --></span>
    <span>Fisioterapia a domicilio · Madrid</span>
  </div>
</footer>
```
