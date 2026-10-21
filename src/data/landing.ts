import { importedTreatments, treatmentCatalogSlugs } from "@/content/importedTreatments";

export const navLinks = [
  { label: "Tratamientos", href: "/tratamientos" },
  { label: "Consulta en Chamberí", href: "/fisioterapia-chamberi" },
  { label: "A domicilio", href: "/rehabilitacion-a-domicilio-madrid" },
  { label: "Sobre Borja", href: "/sobre-borja" },
  { label: "Tarifas", href: "/tarifas" },
  { label: "Contacto", href: "/contacto" },
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
    title: "Consulta y domicilio",
    text: "Consulta en Chamberí y atención a domicilio en Madrid.",
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

const serviceIcons: Record<(typeof treatmentCatalogSlugs)[number], "dumbbell" | "scan" | "neck" | "spine" | "activity" | "hand" | "footprints" | "route" | "home"> = {
  "lesiones-deportivas": "dumbbell",
  "ecografia-musculoesqueletica": "scan",
  "dolor-cervical": "neck",
  "dolor-lumbar": "spine",
  "tendinopatias": "activity",
  "contracturas": "hand",
  "esguinces": "footprints",
  "fascitis-plantar": "route",
  "fisioterapia-domicilio": "home",
};

export const services = treatmentCatalogSlugs.map((slug) => {
  const treatment = importedTreatments[slug];
  return {
    icon: serviceIcons[slug],
    title: treatment.navLabel,
    text: treatment.cardDescription,
    href: treatment.path,
  };
});

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
    title: "Valoración funcional",
    text: "Primero escucho qué te ocurre y reviso movilidad, fuerza, síntomas y objetivos para entender qué limita tu actividad.",
  },
  {
    title: "Plan de tratamiento",
    text: "Con la valoración, selecciono las técnicas indicadas para tu caso y te explico el objetivo de cada paso del tratamiento.",
  },
  {
    title: "Ejercicio terapéutico",
    text: "Trabajamos movimiento, fuerza y control con ejercicios ajustados a tu capacidad para recuperar función de forma progresiva.",
  },
  {
    title: "Seguimiento y prevención",
    text: "Te llevas pautas para casa y revisamos tu evolución para ajustar el plan y reducir el riesgo de que vuelvan las molestias.",
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
      "Sí. Borja también ofrece fisioterapia a domicilio en Madrid. Confirma tu zona y disponibilidad antes de reservar.",
  },
  {
    question: "¿También tienes consulta o gabinete?",
    answer:
      "Sí. Borja atiende en el espacio Meraki Salud Chamberí de la calle de Caracas, 6, bajo izquierda, en Chamberí. También ofrece atención a domicilio en Madrid; confirma disponibilidad antes de reservar.",
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
      "La primera sesión en consulta cuesta 50 € y a domicilio 60 €. Confirma disponibilidad y zona de desplazamiento antes de reservar.",
  },
  {
    question: "¿Cómo reservo cita?",
    answer:
      "La forma más directa es escribir por WhatsApp. También puedes dejar una consulta en el formulario y se revisará tu caso para orientarte.",
  },
] as const;
