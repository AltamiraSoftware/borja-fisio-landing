# FISIO ESTARELLAS — SEO MASTER PLAN & CONTENT CONTRACT FOR CODEX

**Versión:** 1.0 · **Fecha de referencia:** 2026-11-08  
**Proyecto:** `AltamiraSoftware/borja-fisio-landing` · **rama de referencia:** `main`  
**Web canónica:** `https://fisioestarellas.es`  
**Ámbito:** consulta de fisioterapia en Chamberí / Almagro (Madrid), atención a domicilio en las zonas que Borja confirme.  
**Estado:** DOCUMENTO DE PLANIFICACIÓN. **No ejecutar cambios, crear ramas, hacer commits, publicar ni modificar el repositorio hasta recibir autorización expresa.** Codex está trabajando en diseño y motion en paralelo.

> **Decisión de arquitectura cerrada para la próxima implementación:** **UNA sola página `/patologias` para las patologías y motivos de consulta. NO crear páginas individuales nuevas para cervicalgia, lumbalgia, contracturas, tendinopatías, esguinces o fascitis plantar.** Las páginas antiguas no se eliminan todavía: primero se hace inventario, exportación de GSC y un mapa de redirecciones. Mantener páginas propias para terapia manual (agrupadora), ejercicio terapéutico (agrupadora), ecografía/invasiva (pilar), ecografía musculoesquelética, punción seca, EPI/electrólisis, neuromodulación, drenaje linfático y ATM. Mantener las landings comerciales de consulta en Chamberí y fisioterapia a domicilio. No crear páginas duplicadas de EPI y electrólisis.

---

## 0. Rol, alcance y condiciones de trabajo

Actúa como **SEO senior especializado en SEO local sanitario, estratega de contenidos, UX writer, frontend senior Next.js y revisor de precisión clínica**. Usa este archivo como **contrato de implementación**, no como permiso para tocar el código todavía.

1. **No modificar el código mientras no se cierre el trabajo de Codex en diseño/motion.** Al autorizarse el SEO: inspeccionar el `main` actualizado y los componentes finales antes de empezar. No sobrescribir rediseño, tokens, layout, accesibilidad ni animaciones por aplicar este documento.
2. **No crear ramas adicionales ni hacer cambios destructivos.** No borrar páginas, contenido original ni datos del CMS. No hacer `push` ni deploy sin instrucción expresa. Priorizar parches pequeños, verificables y reversibles.
3. **SEO médico fiable:** toda información médica requiere precisión, riesgos proporcionados, alternativas y beneficios plausibles. Borja debe revisar el copy clínico final. No prometer curación, regeneración tendinosa, resultados seguros ni ausencia de riesgos. No inventar títulos, números de colegiado, certificaciones, marcas de equipo, precios, modalidades ni zonas de cobertura.
4. **Medir antes de consolidar URLs:** las rutas antiguas pueden tener señales SEO que Semrush aún no detecta. Obtener baseline de Search Console (consultas y páginas, preferiblemente últimos 3 meses / 16 meses según disponibilidad), inspección de URLs y enlaces externos antes de activar redirecciones.
5. **No keyword stuffing ni contenido generado a escala de apariencia distinta pero fondo repetido.** Una URL principal por intención y textos originales por contexto. Las keywords son objetivos semánticos, no cadenas que haya que repetir mecánicamente.
6. **Geografía:** `Calle de Caracas, 6, bajo izquierda, 28010 Madrid`, consulta independiente dentro de Meraki Salud Chamberí. Verificar datos contra `src/lib/constants.ts` y Google Business Profile. No representar a Borja como dueño de toda la clínica/coworking.
7. **Producto:** el objetivo es captar consultas de pacientes reales a través del formulario, WhatsApp y Doctoralia. No existe registro de pacientes en la landing. Las páginas clínicas deben guiar al usuario hasta una acción apropiada sin interrumpir la lectura.

**Definición de terminado:** ninguna redirección errónea; contenido y rutas coherentes; un formulario funcional tras el hero en cada landing pública pertinente; SEO técnico validado; build/lint y pruebas móviles; revisión de Borja; y analítica sin PII ni falsas conversiones.

---

## 1. Evidencia de mercado consolidada — Semrush, España, noviembre 2026

Los datos se obtuvieron de capturas y exportaciones compartidas por el responsable del proyecto. Son **estimaciones del volumen mensual de una expresión en la base de datos España**, aunque contenga la palabra `Madrid`; no son búsquedas exclusivamente hechas por usuarios físicamente en Madrid, ni clics recibidos por Borja. `KD` = dificultad estimada; no equivale a probabilidad de posicionar. No sumar variantes como si fueran usuarios únicos.

| Keyword / variante medida | Volumen ES/mes | KD | Intención/lectura | URL objetivo |
|---|---:|---:|---|---|
| `drenaje linfatico madrid` | 480 | 12% | Comercial; mezcla clínica y estética | `/tratamientos/drenaje-linfatico-manual` |
| `fisioterapia chamberi` | 390 | 45% | SEO local competitivo | `/fisioterapia-chamberi` |
| `fisio a domicilio madrid` | 320 | 13% | Alta intención de contratar | Landing domiciliaria **actual** |
| `fisioterapia a domicilio madrid` | 320 | 26% en exportación previa | Variante con idéntica intención | Misma landing domiciliaria |
| `fisioterapia ATM madrid` | 210 | 8% | Comercial específica | `/tratamientos/fisioterapia-atm` |
| `fisio ATM madrid` | 170 | 12% | Mismo clúster ATM | Misma página ATM |
| `puncion seca madrid` | 170 | 9% | Comercial | `/tratamientos/puncion-seca` |
| `neuromodulación fisioterapia` | 110 | 6% | Demanda sin ciudad explícita | `/tratamientos/neuromodulacion-percutanea-ecoguiada` |
| `EPI madrid` | 90 | 13% | Comercial, técnica diferencial | `/tratamientos/electrolisis-percutanea-ecoguiada` |
| `fisioterapia epi madrid` | 90 | 15% | Mismo clúster EPI | Misma página EPI |
| `drenaje linfatico manual madrid` | 70 | 11% | Variante clínica | Página drenaje |
| `readaptacion deportiva madrid` | 70 | 13% | Servicio/readaptación | Categoría ejercicio, contextual |
| `fisio con ecografo madrid` | 40 | 6% | Comercial, equipamiento | Página ecografía musculoesquelética y hub |
| `NMP fisioterapia` | 30 | s/d | Secundaria NMP | Página neuromodulación |
| `neuromodulación ecoguiada` | 20 | s/d | Secundaria NMP | Página neuromodulación |
| `ecografia musculoesqueletica madrid` | 10 | s/d | Poco volumen en variante local | Página ecografía |
| `fisioterapia almagro` | 10 | s/d | Apoyo local, no crear doorway page | `/fisioterapia-chamberi` |

**Datos sin localidad que orientan la semántica:** `puncion seca` ≈ 5.400/mes ES (KD 16 en exportación previa), `ejercicio terapeutico` ≈ 480/mes ES (KD 14), `ecografia musculoesqueletica` ≈ 320/mes ES (KD 14), `readaptacion deportiva` ≈ 480/mes ES (KD 12). No atribuir la demanda nacional íntegra a Madrid.

**Lectura de competidores por URL, exportaciones SERP / Organic Rankings:**

| Tema | Competidor / URL de referencia | Tráfico orgánico estimado de la URL o sección/mes | Observación |
|---|---|---:|---|
| ATM | `https://www.sanjavierfisioterapia.com/atm/` | 63 | Su clúster de `fisioterapia atm madrid` y `fisio atm madrid` concentra buena parte del tráfico detectado |
| ATM | `https://www.clinicadolororofacial.es/` | 328 | Dominio/URL de enfoque orofacial; revisar intención exacta |
| ATM | `https://www.efisio.es/fisioterapia-atm-madrid/` | 52 | Landing específica |
| Drenaje | `https://estudiofisio.es/servicios/drenaje-linfatico/` | 316 | Landing en puesto destacado para el término |
| Drenaje | `https://www.drenajelinfaticomadrid.es/` | 124 en SERP URL; 553 **en informe de dominio completo** | No confundir alcance URL con dominio |
| Domicilio | `https://www.urbanfisio.com/fisioterapia-a-domicilio-en-madrid/` | 651 | Busca términos genéricos (`fisioterapeuta a domicilio`, `fisio a domicilio`) además de Madrid |
| Domicilio | `https://www.fisiodomiciliomadrid.com/` | 310 | Competidor especializado local |

**Importante sobre las métricas:** el tráfico de una URL representa estimación de múltiples keywords de esa página; **no** equivale a clics exactos de una keyword. Los valores de los dominios no son directamente comparables con valores de URL. Semrush puede mostrar `NO DATA` para `fisioestarellas.es` por cobertura insuficiente; eso no demuestra que no haya visitas o indexación. Los datos observados de ATM, drenaje y domicilio avalan invertir en esas landing pages.

**Consulta especialmente competida:** `fisioterapia chamberi` ≈ 390/mes, KD 45. Crear contenido local diferenciador y señales de legitimidad; no crear varias URLs casi idénticas para Chamberí/Almagro.

---

## 2. Decisión sobre arquitectura e indexación

### 2.1. Estructura objetivo (NO implementada aún en su totalidad)

```
/
/fisioterapia-chamberi
/rehabilitacion-a-domicilio-madrid     # mantener URL existente; evaluar nueva slug solo con GSC
/patologias                             # UNA sola página para patologías
/tratamientos/terapia-manual            # UNA página, microtécnicas resumidas
/tratamientos/ejercicio-terapeutico     # UNA página, ejercicios resumidos
/tratamientos/fisioterapia-invasiva-ecoguiada # página pilar comparadora
/tratamientos/ecografia-musculoesqueletica     # verificar slug ya existente
/tratamientos/puncion-seca
/tratamientos/electrolisis-percutanea-ecoguiada
/tratamientos/neuromodulacion-percutanea-ecoguiada
/tratamientos/drenaje-linfatico-manual
/tratamientos/fisioterapia-atm
/blog/[slug]                            # contenidos de preguntas informativas
```

- **`/patologias`**: agrupar cervicalgia/dolor cervical, dolor lumbar, tendinopatías, fascitis plantar, esguinces, contracturas y lesiones deportivas con anclas propias. **No crear nuevas landings individuales** ni mantener duplicados indexables después de la migración aprobada.
- **Terapia manual:** masoterapia, movilizaciones articulares, estiramientos asistidos, kinesiotape, presión isquémica, vendaje funcional y **mención breve del vendaje multicapa**. Páginas propias de **drenaje linfático** y **ATM** con enlaces destacados.
- **Ejercicio terapéutico:** movilidad, estiramientos, control motor, propiocepción y carga progresiva, como componentes de un plan de rehabilitación.
- **Ecografía/invasiva:** página pilar de orientación y enlace a **ecografía musculoesquelética, punción seca, electrólisis percutánea (EPI) y neuromodulación percutánea ecoguiada**; no duplicar sus secciones enteras en el pilar.
- **`EPI` y `electrólisis percutánea ecoguiada`**: una sola URL para ambas búsquedas. EPI® puede ser marca comercial de un dispositivo; no atribuir a Borja una marca concreta si no consta.
- **Servicios y públicos** (fisioterapia de mayores, rehabilitación postoperatoria, fisioterapia deportiva): no son estrictamente patologías. Ubicarlos como contextos o servicios en el contenido que corresponda, sin inventar nuevas páginas ni redirigir su URL a un tema no equivalente.
- **Home vs Chamberí vs domicilio:** intención distinta. Home = marca y oferta general; Chamberí = ubicación presencial; domicilio = servicio y cobertura real. Evitar canibalización por títulos y H1 duplicados.

### 2.2. Estado REAL del código revisado (08-11-2026)

El repositorio `main` todavía incluye:

- `src/app/patologias/page.tsx`: índice con tarjetas y rutas individuales.
- `src/app/patologias/[slug]/page.tsx`: sirve páginas individuales indexables de patologías; **contradice la decisión futura de página única**.
- `src/content/treatments.ts`: `getPathologyTreatments()` y `getTreatmentPath()` siguen resolviendo algunas rutas a `/patologias/[slug]`. La tabla `consolidatedTechniqueDestinations` ya agrupa **12 microtécnicas** en terapia manual y ejercicio. Mantener y auditar, no duplicar.
- `src/app/tratamientos/[slug]/page.tsx`: ya contiene redirecciones de rutas antiguas y equivalentes; evitar cadenas.
- `src/app/sitemap.ts`: ya publica `/patologias`, pero aún puede incluir las URLs individuales indexables. Revisar contra la arquitectura final.
- `src/content/treatmentCategories.ts`: contiene las fichas extensas de las técnicas, incluso las consolidadas; se pueden **extraer resúmenes** sin borrar el contenido clínico base.
- `src/components/treatment/TreatmentPage.tsx`: formulario tras el hero en la plantilla de tratamientos; `src/components/common/StandardPage.tsx` también dispone de `contactAfterHero`.

**Regla de implementación:** no dar por finalizada la arquitectura por la existencia de `/patologias` si siguen expuestas, enlazadas y añadidas al sitemap las URL `/patologias/[slug]`. Hacer una migración consciente de URLs, no un ocultamiento visual.

### 2.3. Mapa de migración *propuesto*, pendiente de GSC y aprobación

| URL individual actual o histórica | Acción propuesta tras baseline | Contenido destino obligatorio |
|---|---|---|
| `/patologias/dolor-cervical` | 308 → `/patologias#dolor-cervical` | Sección específica cervicalgia |
| `/patologias/dolor-lumbar` | 308 → `/patologias#dolor-lumbar` | Sección específica lumbalgia |
| `/patologias/tendinopatias` | 308 → `/patologias#tendinopatias` | Sección específica tendinopatías |
| `/patologias/fascitis-plantar` | 308 → `/patologias#fascitis-plantar` | Sección propia dolor plantar |
| `/patologias/esguinces` | 308 → `/patologias#esguinces` | Sección propia esguinces |
| `/patologias/contracturas` | 308 → `/patologias#contracturas` | Sección propia sobrecarga/contracturas |
| `/patologias/lesiones-deportivas` | Considerar 308 → `/patologias#lesiones-deportivas` **solo si cubre intención** | Sección deportiva/readaptación |
| `/patologias/rehabilitacion-postoperatoria` | **No redirigir automáticamente a `#`** | Auditar intención: puede corresponder a servicio postoperatorio o domicilio |
| `/patologias/fisioterapia-mayores` | **No redirigir automáticamente a `#`** | Auditar intención: servicio/público, quizá domicilio |
| URLs históricas `/tratamientos/<patologia>` | **Redirección directa de un solo salto al destino final aprobado**, no a `/patologias/<slug>` si este redirige otra vez | Evitar cadenas 308 → 308 |
| 12 microtécnicas de terapia manual/ejercicio | Mantener sus 308 a hubs | Destino con resumen visible de esa técnica |

**Condición indispensable:** si Search Console indica impresiones/clics relevantes de una URL de patología, o recibe enlaces externos importantes, detener su redirección automática y proponer una excepción razonada. No provocar soft-404 redirigiendo hacia una página general que no trate el asunto en detalle. Los fragmentos `#...` mejoran la experiencia, pero Google considera la URL base como destino canónico.

---

## 3. Matriz de money pages: brief SEO y copy

Los títulos/H1/metadescripciones siguientes son **propuestas iniciales** para revisar con Borja y ajustar al layout final. No crear una keyword nueva si ya queda cubierta por otra URL. El `title` debe priorizar intención y claridad, no una longitud de caracteres rígida; la metadescripción debe describir honestamente la página.

### 3.1. ATM — Prioridad P0

- **URL:** `/tratamientos/fisioterapia-atm`
- **Keyword primaria verificada:** `fisioterapia ATM madrid` (210, KD 8%).
- **Secundarias verificadas:** `fisio ATM madrid` (170, KD 12%). Otras variantes semánticas de uso natural: dolor mandibular, articulación temporomandibular, dolor al masticar, chasquidos dolorosos, bloqueo mandibular, trastorno temporomandibular, Chamberí.
- **SEO title propuesto:** `Fisioterapia ATM en Madrid | Borja Estarellas`
- **H1 propuesto:** `Fisioterapia ATM y tratamiento del dolor mandibular en Madrid`
- **Meta description:** `Fisioterapia para dolor de mandíbula y problemas de ATM en Chamberí, Madrid. Valoración individual, ejercicio mandibular y tratamiento con Borja Estarellas.`
- **Mensaje hero:** `Si te duele la mandíbula al masticar o abrir la boca, valoramos qué estructuras y movimientos están implicados antes de decidir el tratamiento.`
- **H2 específicos:** `Qué síntomas pueden indicar un problema de ATM`; `Qué ocurre en la primera valoración`; `Ejercicios y fisioterapia conservadora`; `Bruxismo y ATM: por qué no son lo mismo`; `Cuándo acudir a odontología o medicina`; `Preguntas sobre ATM`.
- **Diferenciación:** mismo fisioterapeuta en evaluación y seguimiento; consulta en Chamberí; explicar cuándo un chasquido aislado no requiere tratamiento. No prometer curar el bruxismo, corregir la mordida ni resolver todos los bloqueos.
- **CTA después del hero:** `Consultar mi dolor mandibular` → formulario; CTA final `Solicitar valoración de ATM`.
- **Enlaces internos:** `/patologias#dolor-cervical` (solo si aporta contexto), `/tratamientos/terapia-manual`, `/fisioterapia-chamberi`.
- **Competencia de referencia:** San Javier `/atm/`, Clínica Dolor Orofacial, eFISIO `/fisioterapia-atm-madrid/`.
- **Prueba clínica:** revisión profesional de términos TMD vs bruxismo; guía BMJ sobre dolor temporomandibular crónico y fuentes NIDCR/NHS verificadas.

### 3.2. Drenaje linfático — Prioridad P0

- **URL:** `/tratamientos/drenaje-linfatico-manual`
- **Principal verificada:** `drenaje linfatico madrid` (480, KD 12%).
- **Secundarias:** `drenaje linfatico manual madrid` (70, KD 11%), drenajes linfáticos, masaje linfático (solo contextualizado), linfedema, edema, vendaje multicapa, terapia descongestiva, Chamberí.
- **SEO title:** `Drenaje linfático manual en Madrid | Fisio Estarellas`
- **H1:** `Drenaje linfático manual en Madrid, Chamberí`
- **Meta:** `Drenaje linfático manual con Borja Estarellas en Chamberí. Valoración del edema, linfedema y compresión terapéutica según indicación. Solicita cita.`
- **Hero:** `Un tratamiento especializado que empieza por comprender la causa del edema y decidir si el drenaje manual está indicado.`
- **H2:** `Qué es el drenaje linfático manual`; `Linfedema y otras causas de hinchazón`; `Drenaje, compresión y vendaje multicapa`; `Cómo se desarrolla la valoración`; `Cuándo no realizarlo`; `Preguntas frecuentes`.
- **Competencia:** EstudioFisio; Drenaje Linfático Madrid. Parte de su tráfico responde a búsquedas de masajes estéticos; **no prometer “detox”, eliminación de toxinas, adelgazamiento, curación ni estética que Borja no presta**.
- **Especialidad confirmada por cliente:** Borja realiza drenaje y vendaje multicapa; reflejar la prestación de forma afirmativa. El vendaje multicapa queda explicado en esta landing y brevemente en terapia manual; sin landing independiente por defecto salvo futuras pruebas de demanda.
- **CTA:** `Consultar drenaje linfático` → formulario. Precio, número de sesiones y modalidades solo si datos reales confirmados.
- **Riesgos:** sospecha de trombosis, infección, hinchazón súbita y otros diagnósticos que requieren evaluación, precauciones de compresión, posible valoración vascular previa.

### 3.3. Fisioterapia a domicilio — Prioridad P0

- **URL actual:** `/rehabilitacion-a-domicilio-madrid`; **NO cambiarla todavía** sin revisar GSC y enlaces. Puede optimizarse para consultas genéricas, incluso si la slug actual usa “rehabilitación”.
- **Primaria medida:** `fisio a domicilio madrid` (320, KD 13%).
- **Variante medida:** `fisioterapia a domicilio madrid` (320, KD 26% en otra exportación). `fisioterapeuta a domicilio` y `fisio a domicilio` sin localidad son términos importantes observados en el competidor.
- **SEO title propuesto:** `Fisioterapeuta a domicilio en Madrid | Borja Estarellas`
- **H1 propuesto:** `Fisioterapia a domicilio en Madrid con Borja Estarellas`
- **Meta:** `Fisioterapia y rehabilitación a domicilio en Madrid con el mismo profesional en cada sesión. Consulta zonas de cobertura, disponibilidad y condiciones con Borja.`
- **Hero:** `Recibe fisioterapia en casa con valoración y seguimiento directo, sin desplazarte a una clínica.`
- **H2:** `A quién va dirigida`; `Qué se puede valorar y tratar en casa`; `Cómo funciona la primera visita`; `Zonas de Madrid a las que se desplaza`; `Qué material se necesita`; `Tarifas y reserva`; `Preguntas frecuentes`.
- **No inventar:** barrios atendidos, disponibilidad 24/7, urgencias, precios, recargos, duración o material concreto. Registrar preguntas para Borja antes de publicación.
- **Diferencial:** atención personal por Borja, continuidad profesional, seguimiento individual. No titularlo como una empresa de múltiples fisioterapeutas.
- **Competidor clave:** UrbanFisio `/fisioterapia-a-domicilio-en-madrid/`. Su tráfico muestra valor de keywords genéricas sin ciudad.
- **CTA:** `Consultar disponibilidad a domicilio`.
- **Decisión posterior:** si Search Console muestra poca señal en la URL antigua y una migración aporta claridad, plantear `/fisioterapia-a-domicilio-madrid` con redirección en un cambio separado; nunca hacerlo automáticamente dentro de cambios de copy.

### 3.4. Punción seca — Prioridad P1

- **URL:** `/tratamientos/puncion-seca`
- **Principal verificada:** `puncion seca madrid` (170, KD 9%). **Variante nacional genérica:** `puncion seca` (≈ 5.400/mes ES, KD 16).
- **SEO title:** `Punción seca en Madrid | Fisio Estarellas`
- **H1:** `Punción seca en Madrid, con valoración fisioterapéutica`
- **Meta:** `Punción seca en Chamberí, Madrid. Conoce sus posibles indicaciones para determinadas molestias musculares, límites, precauciones y valoración con Borja.`
- **H2:** `Qué es y qué no es la punción seca`; `Cuándo puede estar indicada`; `Puntos gatillo y dolor muscular`; `Diferencias con acupuntura y EPI`; `Riesgos, consentimiento y cuidados`; `Ejercicio y recuperación funcional`.
- **Formación confirmada:** Borja dispone de formación específica en punción seca. No inventar el nombre del curso, año o acreditación.
- **Beneficios posibles:** contextualizados y no universales; evidencia heterogénea, revisar antes de publicar estudios y afirmaciones.
- **Riesgos:** dolor local, sangrado/hematoma, infección y neumotórax en determinadas regiones anatómicas. Señales de alarma expresadas con criterio clínico.
- **CTA:** `Consultar si la punción seca está indicada para mí`.

### 3.5. Electrólisis percutánea ecoguiada (EPI) — Prioridad P1

- **URL única:** `/tratamientos/electrolisis-percutanea-ecoguiada`.
- **Medidas:** `epi madrid` (90, KD 13%), `fisioterapia epi madrid` (90, KD 15%).
- **SEO title:** `EPI y electrólisis percutánea ecoguiada en Madrid`
- **H1:** `Electrólisis percutánea ecoguiada (EPI) en Madrid`
- **Meta:** `Electrólisis percutánea ecoguiada en Chamberí con Borja Estarellas. Conoce cómo se utiliza el ecógrafo, cuándo puede valorarse y sus precauciones.`
- **H2:** `Qué es la electrólisis percutánea`; `Qué aporta la guía ecográfica`; `En qué tendinopatías se ha estudiado`; `Cómo es la sesión`; `EPI frente a ejercicio y carga progresiva`; `Riesgos y contraindicaciones`; `Preguntas frecuentes`.
- **Formación/equipamiento:** Borja cuenta con formación y ecógrafo. No afirmar que utiliza la marca EPI® o un generador concreto sin confirmarlo.
- **Límite científico:** evidencia de resultados variable y dependiente de tendón, protocolos y calidad de estudios; no prometer regeneración ni superioridad universal frente al ejercicio.
- **CTA:** `Solicitar valoración para EPI ecoguiada`.

### 3.6. Neuromodulación percutánea ecoguiada — Prioridad P1

- **URL:** `/tratamientos/neuromodulacion-percutanea-ecoguiada`
- **Primaria cuantificada:** `neuromodulación fisioterapia` (110, KD 6%).
- **Variantes cuantificadas:** `NMP fisioterapia` (30), `neuromodulación ecoguiada` (20). `neuromodulación percutánea Madrid` puede figurar sin datos: **no interpretarlo como cero demanda**.
- **SEO title:** `Neuromodulación percutánea ecoguiada en Madrid`
- **H1:** `Neuromodulación percutánea ecoguiada en Chamberí`
- **Meta:** `Neuromodulación percutánea ecoguiada en Madrid con Borja Estarellas. Conoce cómo se realiza la estimulación, posibles indicaciones, riesgos y alternativas.`
- **H2:** `Qué es la neuromodulación percutánea`; `Qué estructuras se estimulan`; `Cómo ayuda el ecógrafo`; `Diferencias con TENS, punción seca y EPI`; `En qué casos se valora`; `Evidencia y límites`; `Riesgos y contraindicaciones`.
- **No usar:** `resetea el sistema nervioso`, `regenera el nervio`, `cura la ciática`, `resultados garantizados`.
- **CTA:** `Consultar valoración para neuromodulación`.

### 3.7. Ecografía musculoesquelética — Prioridad P2

- **URL:** verificar en `src/content/importedTreatments.ts` y `getTreatmentPath()` el slug actual; **no crear duplicado**.
- **Keyword medida:** `fisio con ecografo madrid` (40, KD 6%), `ecografia musculoesqueletica madrid` (10, KD s/d); genérica `ecografia musculoesqueletica` (≈ 320/mes ES según exportación previa).
- **SEO title:** `Ecografía musculoesquelética en Madrid | Fisio Estarellas`
- **H1:** `Ecografía musculoesquelética en fisioterapia en Madrid`
- **Meta:** `Fisioterapia con ecógrafo en Chamberí. Borja Estarellas utiliza la ecografía como apoyo a la valoración y a determinadas técnicas ecoguiadas.`
- **H2:** `Qué puede aportar la ecografía`; `Qué tejidos pueden visualizarse`; `Cómo se integra con la exploración`; `Guía de procedimientos como EPI y neuromodulación`; `Limitaciones y cuándo derivar`.
- **Cautela:** la ecografía no sustituye una valoración médica/radiológica cuando se requiera. No prometer diagnóstico concluyente ni “detectar cualquier lesión”.

### 3.8. Fisioterapia Chamberí — Prioridad P1/P2

- **URL:** `/fisioterapia-chamberi`
- **Principal medida:** `fisioterapia chamberi` (390, KD 45%).
- **Variantes:** centro fisioterapia Chamberí, fisio Chamberí; Almagro como barrio contextual (volumen muy reducido para consulta exacta).
- **SEO title:** `Fisioterapia en Chamberí, Madrid | Borja Estarellas`
- **H1:** `Tu fisioterapeuta en Chamberí, Madrid`
- **Meta:** `Fisioterapia con Borja Estarellas en su consulta independiente en Calle de Caracas, 6, Chamberí. Valoración, ejercicio y técnicas ecoguiadas previa cita.`
- **H2:** `Dónde estamos y cómo llegar`; `Qué servicios ofrece Borja`; `Cómo es tu primera visita`; `Tratamientos especializados`; `Tarifas y horarios confirmados`; `Preguntas frecuentes`.
- **Diferenciación local:** consulta independiente dentro de Meraki Salud Chamberí, fotografías reales, acceso, horario verificable, contacto, NAP coherente con GBP.
- **No crear** `/fisioterapia-almagro`, `/fisioterapia-chamberi-barato` ni otras páginas doorway por barrio.

---

## 4. Brief de copy para las TRES páginas agrupadoras

### 4.1. `/patologias`: intención de descubrimiento y captación

- **Objetivo:** que el paciente reconozca su motivo de consulta, vea que Borja lo valora y solicite una valoración sin navegar entre nueve fichas repetitivas.
- **SEO title:** `Patologías y problemas que tratamos | Fisio Estarellas Madrid`
- **H1:** `Patologías y lesiones que tratamos en fisioterapia`
- **Meta:** `Conoce los problemas musculoesqueléticos que valora Borja Estarellas en Madrid: cervicalgia, lumbalgia, tendinopatías, esguinces, fascitis plantar y más.`
- **Estructura:** hero → **formulario único** → navegación a secciones → bloques de patologías → cómo se realiza la valoración → servicios relacionados → clínica/contacto.
- **Secciones propias con ancla:** `#dolor-cervical`, `#dolor-lumbar`, `#tendinopatias`, `#contracturas`, `#esguinces`, `#fascitis-plantar`, `#lesiones-deportivas`.
- **Cada bloque:** nombre en lenguaje corriente, síntomas orientativos sin autodiagnóstico, qué actividades puede limitar, enfoque de valoración y enlace a **técnicas** relevantes; un pequeño texto original de 100–180 palabras es un punto de partida, sin imponer longitud artificial.
- **No hacer:** una tarjeta de 25 palabras por patología seguida de un redireccionamiento desde una landing larga: podría no ser un destino SEO equivalente. Mantener información suficiente para el usuario procedente del contenido original, pero resumida y bien jerarquizada.
- **No duplicar** el mismo párrafo de evaluación, ejercicio y seguimiento en cada condición. Una sección transversal `Cómo abordamos tu problema` es suficiente.
- **Los servicios postoperatorios, de mayores y deportivos** pueden aparecer en un bloque `Situaciones especiales`, diferenciados de diagnósticos, con revisión de intención y enlaces adecuados.
- **CTA:** `Cuéntame qué te ocurre` y botón hacia el formulario.

### 4.2. `/tratamientos/terapia-manual`

- **Keyword principal de trabajo:** `terapia manual madrid`. Variantes: masaje terapéutico Madrid (sin volumen confirmado en esta investigación), masoterapia, movilidad articular, vendaje, fisioterapia manual.
- **Title:** `Terapia manual y masaje terapéutico en Madrid`
- **H1:** `Terapia manual en Chamberí: técnicas adaptadas a tu caso`
- **Secciones resumidas:** masoterapia, movilizaciones, estiramientos asistidos, presión isquémica, kinesiotape, vendaje funcional y mención breve del vendaje multicapa. **ATM y drenaje** enlazados en tarjetas destacadas con CTA a sus páginas especializadas.
- **No crear ni indexar** una URL individual para cada microtécnica de la categoría. Conservar rutas históricas redirigidas de forma directa.
- **Tono clínico:** la terapia manual es un posible componente, no el único tratamiento ni una alternativa universal al ejercicio.

### 4.3. `/tratamientos/ejercicio-terapeutico`

- **Keyword principal:** `ejercicio terapéutico Madrid`; semánticas: rehabilitación activa, readaptación deportiva, fuerza, control motor, propiocepción, movilidad, carga progresiva.
- **Title:** `Ejercicio terapéutico y readaptación en Madrid`
- **H1:** `Ejercicio terapéutico para recuperar movimiento y función`
- **Secciones resumidas:** movilidad y estiramientos; control motor; propiocepción/equilibrio; fuerza/carga progresiva; ejemplos de retorno a tareas cotidianas y deporte.
- **No crear** páginas individuales por ejercicio. **No convertir en promesa de curación la progresión de cargas**; dosificación y objetivos personalizados.

### 4.4. `/tratamientos/fisioterapia-invasiva-ecoguiada` — página pilar

- **Title:** `Fisioterapia invasiva y ecografía en Madrid`
- **H1:** `Ecografía y técnicas invasivas de fisioterapia en Madrid`
- **Rol:** comparar brevemente cuatro opciones: ecografía, punción seca, EPI y neuromodulación. Cada una tiene su landing específica.
- **Estructura:** cuadro comparativo de objetivos y herramientas, cómo decide Borja, seguridad transversal, enlaces CTA de cada técnica, formulario tras hero. **No copiar 1.000 palabras de cada money page en el hub.**

---

## 5. Orden y requisitos de UX/UI después del rediseño

**Orden de la página pública comercial:**

1. **Hero** con H1 único, valor concreto, ubicación/modo y CTA accesible.
2. **Formulario de contacto REAL e inmediatamente después del hero**, como segundo bloque principal. Debe existir una sola instancia del formulario; los CTAs posteriores vuelven a su `id` o abren WhatsApp/Doctoralia.
3. Contenido de servicio/patología, diseñado para lectura rápida (H2 jerarquizados, bullets moderados, comparaciones útiles, FAQs).
4. Pruebas de confianza (Borja, formación verificable, fotos reales, lugar de consulta, proceso, condiciones).
5. Enlaces internos contextuales y CTA final sin segundo formulario duplicado.

**Pautas para Codex:**

- El motion no debe ocultar el contenido a bots ni usuarios con `prefers-reduced-motion`. No dejar opacidad cero hasta que cargue JavaScript para textos SEO esenciales.
- Formularios correctamente etiquetados, con validación y accesibilidad; verificar teclado, estados de foco, errores y responsive.
- Revisar H1/H2, lectura en móvil, imágenes `alt` descriptivas, Core Web Vitals, CLS, carga de fuentes e imágenes y enlaces accesibles.
- Evitar bloques de copy inflados por repetir componentes: **modularidad no implica plantillas con el mismo texto**.
- Las imágenes de ecógrafo/consulta/ profesional deben ser reales, no stock presentado como Borja o su equipamiento. Si no hay material, dejar requerimiento editorial, no atribuir imágenes falsas.

---

## 6. SEO técnico: contratos verificables

**Archivos iniciales a inspeccionar tras el rediseño** (pueden haber cambiado):

```
src/content/treatments.ts
src/content/treatmentCategories.ts
src/content/importedTreatments.ts
src/app/patologias/page.tsx
src/app/patologias/[slug]/page.tsx
src/app/tratamientos/[slug]/page.tsx
src/app/sitemap.ts
src/app/robots.ts
src/app/fisioterapia-chamberi/page.tsx
src/app/rehabilitacion-a-domicilio-madrid/page.tsx
src/components/treatment/TreatmentPage.tsx
src/components/common/StandardPage.tsx
src/components/landing/Header.tsx
src/components/landing/ContactSection.tsx
src/data/treatmentNavigation.ts
src/lib/seo.ts
src/lib/metadata.ts
src/lib/constants.ts
```

### 6.1. Metadatos y canonicals

- Una URL indexable principal por intención de búsqueda; title y description únicos, H1 consistente. No manipular `meta keywords` (no es factor de ranking de Google).
- `alternates.canonical` autoreferrente en cada URL definitiva que dé `200`. Los redirects no deben terminar indexados ni aparecer en sitemap.
- Canonical y `openGraph.url` al mismo destino. Open Graph específico cuando haya imagen real representativa; formato/ratio adecuado.
- Mantener `robots: noindex` **solo** para entornos o URLs que realmente deben permanecer visibles y fuera del índice; no usar `noindex` como sustituto de una consolidación decidida.
- Fechas `lastModified` solo cuando corresponde a contenido realmente modificado; no cambiar todos los registros a la misma fecha para simular frescura.

### 6.2. Sitemap y robots

- `sitemap.xml` incluye **solo URL 200, canónicas, indexables y que se quieren posicionar**.
- Excluir `/patologias/[slug]` tras las redirecciones aprobadas, las 12 microtécnicas consolidadas y cualquier URL con redirect/noindex.
- Mantener CMS blog robusto si Supabase falla (ya existe `try/catch`). Evitar duplicados generados por `getAllTreatments()`.
- Confirmar `robots.txt` de producción, la no indexación de preview/staging y que ninguna ruta comercial importante esté bloqueada por error.

### 6.3. Redirecciones y enlaces internos

- Auditar URLs antiguas (`/tratamientos/<patologia>` y `/patologias/<slug>`) antes de migrar; un único 301/308 directo al destino más equivalente. Nada de dos redirecciones consecutivas.
- `getTreatmentPath()` debe resolver la URL definitiva coherente con la nueva taxonomía. Ajustar `getPathologyTreatments()` y rutas dinámicas para impedir generación de nuevas páginas indexables individuales tras consolidación.
- Enlazar desde categorías a money pages, desde el hub de patologías a categorías pertinentes y desde páginas comerciales hacia valoración/contacto. Evitar enlaces a rutas antiguas, redireccionadas o `noindex`.
- Breadcrumbs visuales y `BreadcrumbList` deben reflejar la jerarquía real, no el historial de rutas antiguas.

### 6.4. Schema

- `MedicalBusiness`/`LocalBusiness`, `Person` y `Service` solo con datos reales y relaciones correctas; dirección del profesional en coworking, no de la marca del coworking como si fuera suya.
- Mantener `CollectionPage`/`ItemList` de `/patologias` **sin apuntar a páginas de patologías redirigidas**. Para cada bloque del índice, usar elementos HTML con ancla, no `ItemList` de URLs inexistentes.
- No inventar `AggregateRating`, testimonios, reseñas, diplomas o `FAQPage` elegibles para rich results. Las FAQs visibles pueden permanecer sin schema o aplicarse según documentación vigente.
- Comprobar URLs y tipos con prueba de resultados enriquecidos y validador Schema.org; el marcado no garantiza rich results.

### 6.5. Pruebas técnicas obligatorias

```
git status
pnpm lint
pnpm build
```

Probar en despliegue de preview: `200` canónicos, `308` antiguas, URL 404 no inventadas, `sitemap.xml` sin redirecciones, canonical/metadata correctos, CTA/formulario tras el hero y funcionamiento móvil. Anotar diferencias entre lo observado en preview y producción; no publicar antes de aprobación.

---

## 7. Analítica y conversiones

**Fuente de verdad orgánica:** Google Search Console: clics, impresiones, CTR, posición media por URL/consulta y estado de indexación. **Fuente de estimación de mercado:** Semrush. No intercambiarlas.

**Eventos recomendados** (verificar nomenclatura existente en GA4/GTM antes de duplicar):

| Evento | Cuándo se registra | ¿Conversión? |
|---|---|---|
| `page_view` | carga de página | No |
| `cta_click` | clic en CTA específico | Interacción; no lead |
| `contact_form_valid_submit` | validación completa del formulario | Microconversión; no necesariamente contacto recibido |
| `whatsapp_open` | apertura del enlace de WhatsApp | Microconversión, **no** lead confirmado |
| `doctoralia_click` | clic hacia Doctoralia | Microconversión |
| `lead_confirmed` | contacto efectivamente recibido, con sistema fiable | Sí, si existe verificación real |
| `booking_confirmed` | cita realmente reservada | Sí, solo si la fuente lo confirma |

- No enviar a GA4/GTM datos sanitarios personales, nombres, teléfonos, mensajes ni texto libre del formulario.
- UTM/source/medium/campaign capturados con consentimiento válido, minimización y cumplimiento normativo; no afirmar integraciones antes de probarlas.
- Revisar `src/components/analytics/AnalyticsEvents.tsx`: en una versión anterior podía detectar `submit` incluso cuando el formulario no era válido. Evitar inflar conversiones.
- Google Ads y Meta Ads: cada campaña envía a su landing comercial exacta; evitar mezclar la conversión de clic con solicitud real.

---

## 8. Fases de implementación con aceptación y dependencias

### FASE 0 — Freeze de diseño / baseline (sin cambios de SEO)

**Entradas:** el rediseño de Codex debe estar terminado; se dispone de baseline GSC, sitemap y lista de rutas actuales; Borja valida servicios y zonas. **Salida:** inventario URL y matriz de cambios aprobados.

- [ ] Confirmar `main` final y nueva jerarquía de componentes.
- [ ] Registrar sitemap y URL indexadas en Search Console.
- [ ] Exportar GSC consultas+páginas (3 meses y hasta 16 meses si hay datos).
- [ ] Identificar rutas con backlinks externos/impresiones relevantes.
- [ ] Obtener de Borja fotografías reales, precio, horarios, zonas domicilio, nomenclatura de titulaciones y marca del ecógrafo solo si se va a mostrar.

### FASE 1 — Documento de contenidos aprobado

**Sin cambios de router.** Cerrar por escrito copys y metadata de **ATM, drenaje, domicilio, punción, EPI, neuromodulación, ecografía y Chamberí**. Validación clínica y comercial por Borja. **Salida:** cada URL tiene keyword primaria, semántica secundaria, intención, title, H1, intro, H2, FAQs, CTA, enlaces, restricciones y referencias verificadas.

### FASE 2 — Copy sobre el diseño final

Usar componentes terminados. Cambiar datos y texto, no rehacer estética. Confirmar formulario tras hero y CTAs. Pruebas de legibilidad en móvil. **Salida:** money pages mejoradas sin alterar URLs.

### FASE 3 — Agrupadoras y migración de patologías

Crear la página `/patologias` definitiva **antes** de redirigir sus fichas. Usar secciones con anclas y suficiente contenido propio. Revisar servicios que no son patologías. Tras aprobación, activar redirecciones directas y eliminar URLs antiguas del sitemap; ajustar enlaces y schemas. **Salida:** no hay canibalización ni cadenas.

### FASE 4 — SEO técnico y navegación

Titles/canonicals/OpenGraph/JSON-LD/breadcrumbs/sitemap/robots/enlazado. Validar canonicidad. **Salida:** auditoría técnica pasada.

### FASE 5 — Analítica, QA y publicación

Integración GA4/GTM, consentimiento y eventos sin PII; Lighthouse/Core Web Vitals; accesibilidad; `pnpm lint`, `pnpm build`, inspección de rutas y QA visual. Tras autorización, publicación y solicitud de indexación/sitemap. **Salida:** release registrado, sin cambios no autorizados.

### FASE 6 — Seguimiento 30/60/90 días

Comparar GSC (clics/impr/CTR/pos), GA4, leads verificados y conversiones de campañas, distinguiendo cambios de demanda y de posición. Abrir una página específica de patología **solo si** los datos muestran oportunidad real no satisfecha por `/patologias` y existe contenido propio suficiente.

---

## 9. Instrucción que se pasará a Codex cuando haya autorización

> **No ejecutes todavía.** Este archivo es la especificación del futuro sprint SEO. Cuando se autorice la implementación:
>
> 1. Lee este documento completo y los archivos actuales de `main`; confirma qué cambió el rediseño antes de editar.
> 2. Entrega primero un **diff plan** por fases: rutas, archivos afectados, riesgos, redirecciones y tests; señala contradicciones con el código y pregunta solo por datos empresariales no verificables (precios, cobertura, títulos).
> 3. No crees ramas ni commits sin autorización, ni borres contenido, ni despliegues. No sobreescribas design tokens, motion, estructura visual ni UI completada por otro agente.
> 4. Implementa el **copy final validado** y el formulario segundo tras el hero, después la agrupación y migración de URLs **solo tras baseline GSC y aprobación**.
> 5. Asegura que EPI/electrólisis comparten URL, ATM y drenaje siguen como money pages, y las patologías funcionan como **una sola página**.
> 6. Muestra verificación objetiva de `lint`, `build`, rutas, canonicals, sitemap, links, redirecciones, accesibilidad y responsive. No declares éxito sin pruebas.

---

## 10. Decisiones cerradas vs pendientes

| Tema | Estado |
|---|---|
| Una sola página `/patologias` | **DECIDIDO** |
| Terapia manual y ejercicio: técnicas resumidas en sus hubs | **DECIDIDO** |
| Páginas individuales de ATM y drenaje | **DECIDIDO** |
| Páginas de ecografía, punción, EPI y neuromodulación | **DECIDIDO** |
| Una sola URL EPI/electrólisis | **DECIDIDO** |
| Formulario como segundo bloque tras hero | **DECIDIDO** |
| Redirección efectiva de las antiguas patologías | **PENDIENTE de baseline GSC y aprobación** |
| Ubicación de rehabilitación postoperatoria / mayores | **PENDIENTE de análisis de intención y tráfico** |
| Eventual slug nueva de fisioterapia a domicilio | **NO ejecutar sin justificación** |
| Precios, horarios, cobertura y marcas del equipo | **VALIDAR CON BORJA** |
| Revisiones científicas y referencias en páginas clínicas | **VALIDAR ANTES DE PUBLICAR** |
| Desarrollo, merge, push, deploy | **BLOQUEADO hasta autorización** |

### Principio rector

**Una página por intención útil, no una página por etiqueta médica ni por herramienta técnica.** El SEO debe facilitar que una persona encuentre su problema, entienda cómo puede ayudarle Borja, reciba información sanitaria responsable y contacte sin fricciones. La prioridad es **calidad de demanda y conversión**, no volumen bruto de URLs.
