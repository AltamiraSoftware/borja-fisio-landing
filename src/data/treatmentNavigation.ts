export type TreatmentNavigationItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

// El header ofrece solo las tres categorías y el catálogo principal.
// Las patologías y las técnicas individuales se descubren dentro de /tratamientos
// y en sus hubs; añadir fichas no debe ampliar el menú global.
export const treatmentNavigation: TreatmentNavigationItem[] = [
  { label: "Todos los tratamientos", href: "/tratamientos" },
  { label: "Terapia manual", href: "/tratamientos/terapia-manual" },
  { label: "Ejercicio terapéutico", href: "/tratamientos/ejercicio-terapeutico" },
  { label: "Ecografía y técnicas invasivas", href: "/tratamientos/fisioterapia-invasiva-ecoguiada" },
];
