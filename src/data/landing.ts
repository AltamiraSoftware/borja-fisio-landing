export const navLinks = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Modalidades", href: "/#modalidades" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Precio", href: "/#precio" },
  { label: "Contacto", href: "/#contacto" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const trustItems = [
  {
    icon: "shield",
    title: "Profesional sanitario",
    text: "Sesiones realizadas por fisioterapeuta titulado, con criterio clínico y comunicación clara.",
  },
  {
    icon: "scan",
    title: "Valoración individual",
    text: "Antes de tratar, se analiza tu movimiento, síntomas, contexto y objetivo de recuperación.",
  },
  {
    icon: "hand",
    title: "Terapia manual + ejercicio",
    text: "Tratamiento práctico y pautas activas para que la mejora continúe después de la sesión.",
  },
  {
    icon: "map",
    title: "Domicilio o gabinete",
    text: "Atención principal a domicilio en Madrid, con opción de gabinete bajo cita previa.",
  },
] as const;

export const problemChecklist = [
  "Dolor lumbar.",
  "Dolor cervical.",
  "Lesiones deportivas.",
  "Contracturas.",
  "Tendinopatías.",
  "Esguinces.",
  "Fascitis plantar.",
  "Recuperación funcional.",
] as const;

export const services = [
  {
    icon: "home",
    title: "Fisioterapia a domicilio",
    href: "/fisioterapia/fisioterapia-domicilio",
    text: "Sesiones completas en tu casa, con valoración, tratamiento y pautas adaptadas a tu entorno.",
  },
  {
    icon: "neck",
    title: "Dolor cervical",
    href: "/fisioterapia/dolor-cervical",
    text: "Abordaje de rigidez, molestias cervicales, tensión y limitaciones de movimiento.",
  },
  {
    icon: "spine",
    title: "Dolor lumbar",
    href: "/fisioterapia/dolor-lumbar",
    text: "Tratamiento y educación para dolor lumbar, sobrecargas y episodios recurrentes.",
  },
  {
    icon: "dumbbell",
    title: "Lesiones deportivas",
    href: "/fisioterapia/lesiones-deportivas",
    text: "Recuperación y progresión funcional para volver a entrenar con más seguridad.",
  },
  {
    icon: "activity",
    title: "Tendinopatías",
    href: "/fisioterapia/tendinopatias",
    text: "Planificación de carga, tratamiento manual cuando procede y ejercicio terapéutico.",
  },
  {
    icon: "hand",
    title: "Contracturas y sobrecargas",
    href: "/fisioterapia/contracturas",
    text: "Trabajo específico sobre molestias musculares, movilidad y hábitos que influyen en el dolor.",
  },
  {
    icon: "footprints",
    title: "Esguinces",
    href: "/fisioterapia/esguinces",
    text: "Recuperación de movilidad, fuerza, estabilidad y confianza tras lesión ligamentosa.",
  },
  {
    icon: "route",
    title: "Fascitis plantar",
    href: "/fisioterapia/fascitis-plantar",
    text: "Valoración del apoyo, carga y tejido para mejorar dolor y tolerancia al movimiento.",
  },
] as const;

export const whoIsFor = [
  "Personas con dolor lumbar, cervical o articular.",
  "Deportistas con molestias o lesiones.",
  "Personas con movilidad reducida.",
  "Personas que prefieren recibir tratamiento en casa.",
  "Pacientes que necesitan pautas claras.",
  "Personas que buscan fisioterapia seria, no un masaje genérico.",
] as const;

export const processSteps = [
  {
    title: "Me cuentas tu caso",
    text: "Compartes qué te ocurre, tu zona de Madrid y la modalidad que prefieres.",
  },
  {
    title: "Valoración inicial",
    text: "Se revisa dolor, movilidad, fuerza, contexto y objetivos antes de intervenir.",
  },
  {
    title: "Tratamiento personalizado",
    text: "Terapia manual, ejercicio terapéutico y educación según lo que necesites.",
  },
  {
    title: "Seguimiento",
    text: "Te llevas pautas claras y una orientación honesta sobre próximos pasos.",
  },
] as const;

export const educationItems = [
  "Grado en Fisioterapia - Universidad Antonio de Nebrija.",
  "Máster en Fisioterapia Manual Avanzada y Ejercicio Terapéutico - UCM.",
  "Máster Experto en ecografía, anatomía palpatoria e investigación del cuerpo humano en vivo - UCM.",
  "Formación complementaria en punción seca, pilates suelo, ATM/disfunción craneomandibular y drenaje linfático manual.",
] as const;

export const aboutBadges = [
  "Terapia manual",
  "Ejercicio terapéutico",
  "Deportiva",
  "Domicilio",
  "Ecografía",
] as const;

export const pricingIncludes = [
  "Valoración funcional.",
  "Tratamiento manual si está indicado.",
  "Ejercicio terapéutico.",
  "Pautas para casa.",
  "Orientación sobre próximos pasos.",
] as const;

export const faqItems = [
  {
    question: "¿Cuánto dura una sesión?",
    answer:
      "La duración puede variar según el caso, pero la primera sesión está planteada como una sesión completa con valoración, tratamiento y pautas. La duración concreta se confirma al reservar.",
  },
  {
    question: "¿Atiendes a domicilio?",
    answer:
      "Sí. La fisioterapia a domicilio en Madrid es la modalidad principal. Borja se desplaza para realizar la sesión en un espacio cómodo y seguro.",
  },
  {
    question: "¿También tienes consulta o gabinete?",
    answer:
      "Puede valorarse la atención en gabinete o sala alquilada bajo cita previa, siempre según disponibilidad, zona y necesidades del caso.",
  },
  {
    question: "¿Qué necesito preparar para la sesión en casa?",
    answer:
      "Un espacio tranquilo donde puedas moverte con comodidad. Si hace falta material básico, se confirma antes de la sesión.",
  },
  {
    question: "¿Qué tipo de lesiones tratas?",
    answer:
      "Dolor cervical y lumbar, lesiones deportivas, tendinopatías, contracturas, esguinces, fascitis plantar y procesos de recuperación funcional.",
  },
  {
    question: "¿Cuánto cuesta una sesión?",
    answer:
      "La primera sesión de fisioterapia a domicilio en Madrid parte desde 50 €. La zona, disponibilidad y modalidad se pueden confirmar antes de reservar.",
  },
  {
    question: "¿Cómo reservo cita?",
    answer:
      "La forma más directa es escribir por WhatsApp. También puedes dejar una consulta en el formulario y se revisará tu caso para orientarte.",
  },
] as const;
