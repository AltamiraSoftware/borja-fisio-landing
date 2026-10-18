import { Activity, Home, Scan } from "lucide-react";
import SharedTreatmentPage from "@/app/psicologia/_components/TreatmentPage";
import { borjaProfile, FISIOTERAPIA_LOCATION } from "../_data/tratamientos";

const serviceConfig = {
  heroIcon: Activity,
  heroLabel: "Fisioterapia en Arganzuela · Madrid",
  backLinkHref: "/fisioterapia",
  backLinkLabel: "Volver a fisioterapia",
  primaryCtaLabel: "Pedir cita con Borja",
  approachEyebrow: "Plan de fisioterapia",
  approachTitle: "Valoración clínica, tratamiento y recuperación funcional",
  modalityEyebrow: "Consulta y seguimiento",
  modalityTitle: "Un plan adaptado a tus síntomas y a la actividad que quieres recuperar",
  primaryModalityTitle: "Consulta presencial en Arganzuela",
  secondaryModalityTitle: "Ejercicio y seguimiento de la evolución",
  modalityNote: `${FISIOTERAPIA_LOCATION}. También puedes consultar la disponibilidad de fisioterapia a domicilio en Madrid.`,
  professionalEyebrow: "Tu fisioterapeuta",
  professionalTitlePrefix: "Valoración y tratamiento con",
  professionalPerspectiveEyebrow: "Cómo trabaja Borja",
  professionalPerspectiveTitle: "Valoración clínica, ejercicio terapéutico y ecografía",
  professionalHighlights: [
    "Borja combina la entrevista clínica y la exploración del movimiento con terapia manual, ejercicio terapéutico y educación para adaptar el tratamiento a tus síntomas y objetivos.",
    "Dispone de ecógrafo en consulta para complementar la valoración de músculos, tendones y otros tejidos blandos cuando está indicado. Las imágenes se interpretan junto con los síntomas y las pruebas funcionales para orientar el plan de recuperación.",
  ],
  contactEyebrow: "Pide tu cita",
  contactTitle: "Reserva tu valoración de fisioterapia en Arganzuela",
  contactDescription:
    "Cuéntanos dónde te duele, desde cuándo y qué actividades te cuesta hacer. Borja te orientará sobre la primera consulta y el tratamiento más adecuado para tu caso.",
  formServiceLabel: "Fisioterapia",
  sideEyebrow: "Primera consulta",
  sideTitlePrefix: "Consulta por",
  sideTitleSuffix: "con un plan adaptado a ti",
  sideDescription:
    "Puedes consultar aunque todavía no tengas un diagnóstico. Si ya dispones de informes o pruebas de imagen, indícalo al pedir cita.",
  relatedEyebrow: "Otros tratamientos y servicios de fisioterapia",
};

const serviceOverrides = {
  "fisioterapia-domicilio": {
    heroIcon: Home,
    heroLabel: "Fisioterapia a domicilio en Madrid",
    primaryCtaLabel: "Solicitar sesión a domicilio",
    approachTitle: "Valoración y tratamiento de fisioterapia en tu domicilio",
    modalityEyebrow: "Atención a domicilio",
    modalityTitle: "Fisioterapia en casa con un plan de recuperación personalizado",
    primaryModalityTitle: "Sesión a domicilio en Madrid",
    secondaryModalityTitle: "Ejercicio y continuidad entre sesiones",
    modalityNote:
      "Consulta la cobertura para tu dirección antes de reservar. La valoración con ecógrafo se ofrece en la consulta de Arganzuela cuando está indicada.",
    professionalTitlePrefix: "Fisioterapia a domicilio con",
    professionalPerspectiveTitle: "Tratamiento y ejercicio adaptados a tu entorno",
    professionalHighlights: [
      "La sesión en casa incluye una valoración del dolor, la movilidad y las actividades que necesitas recuperar. La terapia manual y el ejercicio se ajustan a tu situación y al espacio disponible.",
      "Borja pauta ejercicios y revisa la evolución para dar continuidad a la recuperación. Si puede ser útil una valoración ecográfica, se organiza en la consulta de Arganzuela.",
    ],
    contactTitle: "Solicita fisioterapia a domicilio en Madrid",
    contactDescription:
      "Indica tu zona de Madrid, el motivo de consulta y si tienes dificultades para desplazarte. Te orientamos sobre la disponibilidad y la primera sesión en casa.",
    sideTitlePrefix: "Solicita",
    sideTitleSuffix: "con valoración y tratamiento personalizados",
    sideDescription:
      "Cuéntanos qué necesitas recuperar y en qué zona de Madrid se realizaría la sesión para poder organizar la atención.",
  },
  "ecografia-musculoesqueletica": {
    heroIcon: Scan,
    heroLabel: "Ecografía en fisioterapia · Arganzuela",
    primaryCtaLabel: "Consultar valoración con ecografía",
    approachEyebrow: "Valoración con ecógrafo",
    approachTitle: "Qué aporta la ecografía a tu valoración de fisioterapia",
    modalityEyebrow: "Ecógrafo en consulta",
    modalityTitle: "Imágenes en tiempo real para complementar la exploración clínica",
    primaryModalityTitle: "Ecografía musculoesquelética en Arganzuela",
    secondaryModalityTitle: "Tratamiento y seguimiento funcional",
    modalityNote:
      "La indicación de ecografía depende de la exploración y de si puede aportar información útil para tu caso. Puedes consultar las condiciones de la valoración al reservar.",
    professionalPerspectiveTitle: "Formación en ecografía y una valoración centrada en tu función",
    contactTitle: "Consulta tu valoración con ecografía en Arganzuela",
    contactDescription:
      "Explica tu dolor o lesión y si dispones de informes previos. Borja valorará si el ecógrafo puede aportar información útil durante la consulta de fisioterapia.",
    sideTitlePrefix: "Consulta sobre",
    sideTitleSuffix: "para valorar tu lesión",
    sideDescription:
      "El ecógrafo está disponible en la consulta de Arganzuela. Indica qué zona te preocupa para orientar la valoración.",
  },
};

export default function TreatmentPage({ treatment }) {
  const pageServiceConfig = {
    ...serviceConfig,
    ...serviceOverrides[treatment.slug],
  };

  return (
    <SharedTreatmentPage
      treatment={treatment}
      professional={borjaProfile}
      serviceConfig={pageServiceConfig}
    />
  );
}
