import { Home } from "lucide-react";
import SharedTreatmentPage from "@/app/psicologia/_components/TreatmentPage";
import { borjaProfile } from "../_data/tratamientos";

const serviceConfig = {
  heroIcon: Home,
  heroLabel: "Fisioterapia Bivalente Salud",
  backLinkHref: "/fisioterapia",
  backLinkLabel: "Volver a fisioterapia",
  primaryCtaLabel: "Reservar cita",
  approachEyebrow: "Tratamiento en Bivalente",
  approachTitle: "Cómo trabajamos esta lesión o este dolor",
  modalityEyebrow: "Domicilio y seguimiento",
  modalityTitle: "Tratamiento adaptado a tu dolor, tu rutina y tu recuperación",
  primaryModalityTitle: "Fisioterapia a domicilio",
  secondaryModalityTitle: "Seguimiento y progresión",
  modalityNote:
    "Si no sabes si encaja mejor una atención a domicilio o qué tratamiento necesitas primero, puedes escribirnos y orientamos contigo el siguiente paso.",
  professionalEyebrow: "Profesional",
  professionalTitlePrefix: "Tratamiento con",
  professionalPerspectiveEyebrow: "Enfoque fisioterapéutico",
  professionalPerspectiveTitle: "Fisioterapia basada en evidencia y movimiento",
  professionalHighlights: [
    "Borja combina terapia manual, ejercicio terapéutico y educación del paciente para adaptar el tratamiento al dolor, a la función y al contexto real de cada persona.",
    "El objetivo es que mejores síntomas y movimiento, pero también que entiendas mejor tu lesión y tengas herramientas para mantener resultados.",
  ],
  contactEyebrow: "Contacto",
  contactTitle: "Reserva o consulta tu sesión de fisioterapia",
  contactDescription:
    "Cuéntanos tu caso y te orientamos sobre el tratamiento, la atención a domicilio y el primer paso más adecuado para ti.",
  formServiceLabel: "Fisioterapia",
  sideEyebrow: "Primer paso",
  sideTitlePrefix: "Empieza a tratar",
  sideTitleSuffix: "con fisioterapia adaptada a tu caso",
  sideDescription:
    "Este formulario está pensado para que puedas explicar tu dolor o lesión con claridad y recibir una orientación inicial antes de reservar.",
  relatedEyebrow: "Tratamientos relacionados",
};

export default function TreatmentPage({ treatment }) {
  const pageServiceConfig =
    treatment.slug === "fisioterapia-domicilio"
      ? {
          ...serviceConfig,
          primaryCtaLabel: "Solicitar sesión a domicilio",
          approachTitle: "Cómo trabajamos la fisioterapia a domicilio en Madrid",
          modalityEyebrow: "Atención principal en Madrid",
          modalityTitle: "Un servicio centrado en tratarte en casa con comodidad y criterio clínico",
          primaryModalityTitle: "Sesión a domicilio en Madrid",
          secondaryModalityTitle: "Seguimiento online si hace falta",
          modalityNote:
            "El foco principal es la atención a domicilio en Madrid. Si necesitas resolver dudas antes de reservar, puedes escribirnos y orientamos contigo el siguiente paso.",
          professionalTitlePrefix: "Fisioterapia a domicilio con",
          professionalPerspectiveTitle: "Atención profesional, personalizada y adaptada a tu caso",
          contactTitle: "Reserva o consulta tu sesión de fisioterapia a domicilio en Madrid",
          contactDescription:
            "Cuéntanos tu dolor, tu lesión o tu situación actual y te orientamos sobre si la atención a domicilio es el mejor siguiente paso para ti.",
          sideTitlePrefix: "Empieza tu",
          sideTitleSuffix: "con atención fisioterapéutica a domicilio",
          sideDescription:
            "Este formulario está pensado para que puedas explicar tu caso con claridad y valorar una primera sesión cómoda, profesional y adaptada a tu situación en Madrid.",
        }
      : serviceConfig;

  return (
    <SharedTreatmentPage
      treatment={treatment}
      professional={borjaProfile}
      serviceConfig={pageServiceConfig}
    />
  );
}
