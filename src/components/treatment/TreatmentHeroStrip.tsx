import { Home, MapPinned, ShieldCheck, Stethoscope } from "lucide-react";

export function TreatmentHeroStrip() {
  const items = [
    { icon: ShieldCheck, label: "Fisioterapeuta titulado" },
    { icon: MapPinned, label: "Consulta en Arganzuela" },
    { icon: Home, label: "Atención a domicilio" },
    { icon: Stethoscope, label: "Valoración personalizada" },
  ];

  return (
    <div aria-label="Datos de atención" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-3 py-3 text-center shadow-[0_12px_28px_rgba(2,32,45,0.12)] backdrop-blur-sm sm:min-h-16 sm:gap-3 sm:px-4">
          <Icon aria-hidden="true" className="size-5 shrink-0 text-[#8cf3ef]" />
          <span className="text-xs font-semibold leading-5 text-white sm:text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}
