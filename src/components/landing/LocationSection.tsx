import { MapPin } from "lucide-react";
import { locationConfig, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function LocationSection() {
  return (
    <section id="ubicacion" className="px-4 py-20 scroll-mt-28" aria-labelledby="location-title">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
        <div className="flex flex-col rounded-[30px] border border-[#8eb9ca] bg-white p-8 text-center shadow-[0_14px_38px_rgba(15,83,102,0.13),0_2px_8px_rgba(15,83,102,0.07)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-[#1d7898] hover:shadow-[0_24px_52px_rgba(15,83,102,0.23)] motion-reduce:hover:translate-y-0 md:p-10">
          <span className="mx-auto inline-flex w-fit items-center gap-2 rounded-full bg-[#e6f7f3] px-4 py-2 text-sm font-bold text-[#0F5366]"><MapPin className="size-4" aria-hidden="true" /> Consulta en Chamberí</span>
          <h2 id="location-title" className="mt-6 text-balance text-3xl font-semibold leading-tight text-[#073B4C] md:text-4xl">Cómo llegar a la consulta en Almagro</h2>
          <p className="mt-5 leading-8 text-[var(--color-muted)]">Borja atiende con cita previa en una consulta independiente dentro del coworking sanitario Meraki Salud Chamberí.</p>
          <address className="mt-6 not-italic font-semibold leading-7 text-[#073B4C]">{siteConfig.name} · consulta de Borja Estarellas<br />{locationConfig.venueName}<br />{locationConfig.address}<br />{locationConfig.postalCode} {locationConfig.city}</address>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:mt-auto lg:pt-8">
            <Button href="/fisioterapia-chamberi" size="sm">Conocer la consulta</Button>
            <Button href={locationConfig.mapsUrl} target="_blank" size="sm" variant="ghost">Abrir mapa</Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-[30px] border border-[#8eb9ca] bg-[#e4efeb] shadow-[0_14px_38px_rgba(15,83,102,0.13),0_2px_8px_rgba(15,83,102,0.07)]">
          <iframe title="Mapa interactivo de la consulta en la calle de Caracas, 6, bajo izquierda" src={locationConfig.embedUrl} className="min-h-[360px] w-full lg:h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </div>
    </section>
  );
}
