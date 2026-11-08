import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Home, MapPin, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { locationConfig, siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";

export function BlogProfessionalCard({ topic }: { topic: string }) {
  const whatsappHref = buildWhatsappHref(`Hola Borja, he leído tu artículo «${topic}» y me gustaría consultar mi caso.`);

  return (
    <section aria-labelledby="borja-card-title" className="overflow-hidden rounded-[28px] border border-[#8eb9ca] bg-white shadow-[0_18px_44px_rgba(15,83,102,.14),0_2px_8px_rgba(15,83,102,.07)]">
      <div className="grid lg:grid-cols-[.84fr_1.16fr]">
        <div className="premium-dark-bg relative min-h-[22rem] overflow-hidden p-7 text-white sm:p-9">
          <div className="absolute -right-16 -top-14 size-52 rounded-full border border-[#8cf3ef]/20" />
          <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-[#2ec4c6]/12 blur-2xl" />
          <div className="relative flex h-full flex-col items-start">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#9af4ee]"><Stethoscope className="size-4" />Sobre el autor</p>
            <div className="relative mt-7 size-28 overflow-hidden rounded-[1.5rem] border-2 border-[#a6f1eb]/50 shadow-[0_14px_35px_rgba(0,0,0,.24)]">
              <Image src="/borja.png" alt="Borja Estarellas Botín, fisioterapeuta en Madrid" fill sizes="112px" className="object-cover object-[50%_22%]" />
            </div>
            <h2 id="borja-card-title" className="mt-5 text-2xl font-bold tracking-tight">{siteConfig.fullName}</h2>
            <p className="mt-1 text-sm font-semibold text-[#b8faf5]">Fisioterapeuta colegiado · n.º {siteConfig.registrationNumber}</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/74">Fisioterapia musculoesquelética y deportiva, con valoración funcional, terapia manual, ejercicio terapéutico y educación para acompañar cada proceso de recuperación.</p>
            <Link href="/sobre-borja" className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-[#b8faf5] transition hover:gap-3 hover:text-white">Conocer a Borja <ArrowUpRight className="size-4" /></Link>
          </div>
        </div>

        <div className="p-7 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--color-steel)]">Atención en Madrid</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--color-night)]">Elige la modalidad que mejor encaje contigo</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">Si este artículo se parece a lo que te ocurre, puedes explicar brevemente tu caso y valorar el siguiente paso con Borja.</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a href={locationConfig.mapsUrl} target="_blank" rel="noreferrer" className="group flex gap-4 rounded-2xl border border-[#d8e9e5] bg-[#f8fcfb] p-4 transition hover:border-[#9ed9d0] hover:bg-[#f1faf8]">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#dff5f1] text-[var(--color-petrol)]"><MapPin className="size-5" /></span>
              <span><strong className="block text-sm text-[var(--color-night)]">Consulta en {locationConfig.district}</strong><span className="mt-1 block text-sm leading-5 text-[var(--color-muted)]">{locationConfig.venueName} · {locationConfig.address}, {locationConfig.postalCode} {locationConfig.city}</span><span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[var(--color-steel)]">Ver cómo llegar <ArrowUpRight className="size-3.5" /></span></span>
            </a>
            <div className="flex gap-4 rounded-2xl border border-[#d8e9e5] bg-[#f8fcfb] p-4"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#dff5f1] text-[var(--color-petrol)]"><Home className="size-5" /></span><span><strong className="block text-sm text-[var(--color-night)]">Atención a domicilio en Madrid</strong><span className="mt-1 block text-sm leading-5 text-[var(--color-muted)]">Consulta la disponibilidad y la zona de desplazamiento antes de reservar.</span></span></div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3"><Button href={whatsappHref} target="_blank" size="md">Consultar mi caso por WhatsApp</Button><a href="#contacto" className="text-sm font-bold text-[var(--color-steel)] underline decoration-[#79d8d2] decoration-2 underline-offset-4">Prefiero dejar mis datos</a></div>
        </div>
      </div>
    </section>
  );
}
