export type TreatmentNavigationItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

// El menú de técnicas muestra solo páginas principales.
export const treatmentNavigation: TreatmentNavigationItem[] = [
  { label: "Terapia manual", href: "/tratamientos/terapia-manual" },
  { label: "Ejercicio terapéutico", href: "/tratamientos/ejercicio-terapeutico" },
  { label: "Ecografía y técnicas invasivas", href: "/tratamientos/fisioterapia-invasiva-ecoguiada" },
];
