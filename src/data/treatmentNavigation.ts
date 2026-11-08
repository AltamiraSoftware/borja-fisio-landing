export type TreatmentNavigationItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

// Configuración deliberadamente independiente del catálogo: el menú principal
// se mantiene estable aunque se amplíen fichas o patologías en el futuro.
export const treatmentNavigation: TreatmentNavigationItem[] = [
  {
    label: "Patologías",
    href: "/tratamientos#patologias",
    children: [
      { label: "Fisioterapia deportiva y readaptación", href: "/tratamientos/lesiones-deportivas" },
      { label: "Dolor cervical", href: "/tratamientos/dolor-cervical" },
      { label: "Lumbalgia, dolor lumbar y ciática", href: "/tratamientos/dolor-lumbar" },
      { label: "Tendinopatías", href: "/tratamientos/tendinopatias" },
      { label: "Dolor miofascial y contracturas musculares", href: "/tratamientos/contracturas" },
      { label: "Esguinces y lesiones ligamentosas", href: "/tratamientos/esguinces" },
      { label: "Fasciopatía plantar y dolor de talón", href: "/tratamientos/fascitis-plantar" },
      { label: "Rehabilitación postoperatoria", href: "/tratamientos/rehabilitacion-postoperatoria" },
      { label: "Fisioterapia para mayores", href: "/tratamientos/fisioterapia-mayores" },
    ],
  },
  {
    label: "Terapia manual",
    href: "/tratamientos/terapia-manual",
    children: [
      { label: "Masoterapia", href: "/tratamientos/masoterapia" },
      { label: "Estiramientos asistidos", href: "/tratamientos/estiramientos-asistidos" },
      { label: "Movilizaciones articulares", href: "/tratamientos/movilizaciones-articulares" },
      { label: "Kinesiotape", href: "/tratamientos/kinesiotape" },
      { label: "Vendaje funcional", href: "/tratamientos/vendaje-funcional" },
      { label: "Presión isquémica", href: "/tratamientos/presion-isquemica" },
      { label: "Drenaje linfático manual", href: "/tratamientos/drenaje-linfatico-manual" },
      { label: "Vendaje multicapa", href: "/tratamientos/vendaje-multicapa" },
      { label: "Fisioterapia ATM", href: "/tratamientos/fisioterapia-atm" },
    ],
  },
  {
    label: "Ejercicio terapéutico",
    href: "/tratamientos/ejercicio-terapeutico",
    children: [
      { label: "Ejercicios de estiramiento", href: "/tratamientos/ejercicios-estiramiento" },
      { label: "Control motor", href: "/tratamientos/ejercicios-control-motor" },
      { label: "Propiocepción", href: "/tratamientos/ejercicios-propiocepcion" },
      { label: "Carga progresiva", href: "/tratamientos/ejercicios-carga-progresiva" },
      { label: "Ejercicios de movilidad", href: "/tratamientos/ejercicios-movilidad" },
    ],
  },
  {
    label: "Ecografía y técnicas invasivas",
    href: "/tratamientos/fisioterapia-invasiva-ecoguiada",
    children: [
      { label: "Ecografía musculoesquelética", href: "/tratamientos/ecografia-musculoesqueletica" },
      { label: "Punción seca", href: "/tratamientos/puncion-seca" },
      { label: "Electrólisis percutánea ecoguiada", href: "/tratamientos/electrolisis-percutanea-ecoguiada" },
      { label: "Neuromodulación percutánea ecoguiada", href: "/tratamientos/neuromodulacion-percutanea-ecoguiada" },
    ],
  },
];
