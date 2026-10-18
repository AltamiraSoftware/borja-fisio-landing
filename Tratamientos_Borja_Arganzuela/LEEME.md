# Tratamientos de fisioterapia: contenido clínico y SEO local

Actualización: 18 de octubre de 2026.

Los ocho tratamientos actuales conservan sus rutas. Se añade una ficha de ecografía musculoesquelética y su página de Next.js. Se mantienen la plantilla compartida, sus campos y las credenciales del archivo original.

## Archivos y colocación

El ZIP contiene la estructura para copiarla desde la raíz del proyecto:

| Archivo | Destino |
| --- | --- |
| TreatmentPage.jsx | app/fisioterapia/_components/TreatmentPage.jsx |
| tratamientos.js | app/fisioterapia/_data/tratamientos.js |
| page.js de ecografía | app/fisioterapia/ecografia-musculoesqueletica/page.js |

Si el proyecto utiliza `src/app`, coloca la misma estructura dentro de `src`. Instala la página de ecografía junto con los otros dos archivos: varias fichas enlazan con esa nueva ruta.

## Nombres y consultas a las que responde el contenido

| Ruta conservada o nueva | Nombre de tarjeta | Consultas y lenguaje del paciente |
| --- | --- | --- |
| /fisioterapia/dolor-cervical | Cervicalgia y dolor de cuello | dolor de cuello, dolor cervical, rigidez de cuello |
| /fisioterapia/dolor-lumbar | Lumbalgia, dolor lumbar y ciática | dolor lumbar, lumbalgia, fisioterapia para ciática |
| /fisioterapia/tendinopatias | Tendinopatías y tendinitis | tendinitis, tendón de Aquiles, tendón rotuliano, codo de tenista |
| /fisioterapia/contracturas | Dolor miofascial y contracturas musculares | contracturas, dolor muscular, sobrecarga de trapecios |
| /fisioterapia/esguinces | Esguinces y lesiones ligamentosas | esguince de tobillo, tobillo inestable, recuperación de esguince |
| /fisioterapia/lesiones-deportivas | Fisioterapia deportiva y readaptación | fisioterapia deportiva, lesión muscular, volver a entrenar |
| /fisioterapia/fascitis-plantar | Fasciopatía plantar y dolor de talón | fascitis plantar, dolor de talón, dolor al apoyar |
| /fisioterapia/ecografia-musculoesqueletica | Ecografía musculoesquelética | ecografía muscular, ecografía de tendón, fisioterapia con ecografía |
| /fisioterapia/fisioterapia-domicilio | Fisioterapia a domicilio en Madrid | fisio a domicilio, fisioterapia en casa, recuperación de movilidad |

La selección combina intención de consulta y vocabulario clínico con búsquedas revisadas. No es un estudio cuantitativo: no se han obtenido volúmenes, clics ni posiciones geolocalizadas. Para priorizar por demanda, contrasta las consultas de Search Console y Keyword Planner, filtrando Madrid y diferenciando cada problema. No se han creado páginas duplicadas para cada sinónimo o barrio.

La localidad principal de las fichas de consulta es Arganzuela, Madrid. La dirección se concentra en el perfil, el bloque de consulta y las preguntas de ubicación. La ficha a domicilio mantiene su enfoque en Madrid.

## Ecógrafo: cómo se presenta

Se comunica su disponibilidad en consulta y su utilidad para complementar la exploración de músculos, tendones y otros tejidos blandos. En tendinopatías, esguinces, lesiones deportivas y dolor plantar se explica su aplicación al problema concreto. La ficha nueva desarrolla qué permite observar, sus límites y cómo se integra en el plan de fisioterapia.

El uso se decide por indicación clínica. Las páginas de cuello y lumbar explican que la ecografía no estudia adecuadamente discos o médula. La disponibilidad del equipo no se extiende automáticamente al domicilio. Las tarifas de consulta y ecografía quedan para confirmar al reservar; se conserva la primera sesión a domicilio de 50 € publicada en el archivo original.

## Portada y menú

Estos archivos actualizan las fichas. Si las tarjetas de `/fisioterapia` y el menú están escritos de forma independiente, necesitan leer el catálogo o actualizar sus textos para mostrar los mismos nombres y enlazar la ecografía.

Se exporta `tratamientosList`, que coloca primero fisioterapia deportiva y ecografía, y deja domicilio al final. En `app/fisioterapia/page.js`, este adaptador permite conservar los campos del listado actual y sus iconos:

```jsx
import { tratamientosList } from "./_data/tratamientos";

// Reutiliza los iconos que ya importa la portada.
const treatmentIcons = {
  "fisioterapia-domicilio": Home,
  "dolor-cervical": Activity,
  "dolor-lumbar": Scan,
  tendinopatias: Dumbbell,
  contracturas: ClipboardList,
  esguinces: CalendarDays,
  "lesiones-deportivas": MessageSquareHeart,
  "fascitis-plantar": CheckCircle,
  "ecografia-musculoesqueletica": Scan,
};

const servicios = tratamientosList.map((treatment) => ({
  icon: treatmentIcons[treatment.slug] ?? Activity,
  title: treatment.cardTitle,
  description: treatment.cardDescription,
  href: treatment.path,
}));
```

Para los enlaces del menú, reutiliza `navLabel` y `path`. En una portada que aún anuncie el domicilio como modalidad principal, el título y descripción recomendados son:

```js
title: "Fisioterapia en Arganzuela, Madrid | Bivalente Salud",
description:
  "Fisioterapia musculoesquelética y deportiva en Arganzuela con Borja Estarellas. Ejercicio terapéutico y ecografía cuando está indicada.",
```

Añade la nueva ruta de ecografía al sitemap si este utiliza una lista manual. La creación del índice `/fisioterapia/tratamientos` requiere su propia página; estos archivos no generan ese índice.

## Metadatos y comprobaciones

`metaTitle` contiene el título sin marca. Al usarlo directamente con `buildMetadata`, añade ` | Bivalente Salud` una sola vez, como hace la página nueva. El helper `getTreatmentMetadata` ya devuelve el título con marca y una canonical relativa; no añadas la marca otra vez a su resultado.

Se han comprobado la sintaxis JS/JSX de los tres módulos, la conservación de las ocho rutas anteriores, los campos que consume la plantilla, las variantes de configuración, las preguntas sin duplicados y los enlaces internos. La prueba del módulo de página usa sustitutos de las dependencias del proyecto: el build y la revisión visual completos de Next.js deben ejecutarse al integrarlo con la plantilla y el resto de la web.

## Referencias consultadas

- Google Search Central: [títulos descriptivos y concisos](https://developers.google.com/search/docs/appearance/title-link?hl=es) y [contenido útil centrado en las personas](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=es).
- ACR/RSNA, RadiologyInfo: [ecografía musculoesquelética, aplicaciones y límites](https://www.radiologyinfo.org/en/info/musculous).
- NICE: [dolor lumbar y ciática, valoración y tratamiento](https://www.nice.org.uk/guidance/ng59/chapter/Recommendations).
- NHS: [dolor cervical](https://www.nhs.uk/symptoms/neck-pain-and-stiff-neck/), [esguinces](https://www.nhs.uk/conditions/sprains-and-strains/) y [fascitis plantar](https://www.nhs.uk/conditions/plantar-fasciitis/).
- Cambridge University Hospitals: [tendinopatía de Aquiles](https://www.cuh.nhs.uk/patient-information/achilles-tendinopathy-management-advice/).
- Perfil público de [Borja en Bivalente Salud](https://bivalentesalud.es/fisioterapia) y dirección publicada por [Meraki Terapias](https://www.merakiterapias.es/). El catálogo de servicios actualizado parte de los archivos aportados y de tu confirmación de que Borja dispone de ecógrafo.
