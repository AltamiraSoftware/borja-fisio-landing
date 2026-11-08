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
  {
    label: "Tratamientos especializados",
    href: "/tratamientos/fisioterapia-atm",
    children: [
      { label: "Fisioterapia ATM", href: "/tratamientos/fisioterapia-atm" },
      { label: "Drenaje linfático manual", href: "/tratamientos/drenaje-linfatico-manual" },
      { label: "Punción seca", href: "/tratamientos/puncion-seca" },
      { label: "Electrólisis percutánea (EPI)", href: "/tratamientos/electrolisis-percutanea-ecoguiada" },
      { label: "Neuromodulación ecoguiada", href: "/tratamientos/neuromodulacion-percutanea-ecoguiada" },
      { label: "Ecografía musculoesquelética", href: "/tratamientos/ecografia-musculoesqueletica" },
    ],
  },
];
