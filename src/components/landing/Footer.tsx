import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { navLinks } from "@/data/landing";
import { contactConfig, locationConfig, siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-[#052E3A] px-4 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Image src="/logo.svg" alt={siteConfig.fullName} width={240} height={45} className="h-auto w-60 max-w-full" />
          <p className="mt-2 text-sm text-white/62">
            Fisioterapeuta colegiado en Madrid.
          </p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/54">
            La información de esta web es orientativa y no sustituye una
            valoración sanitaria individualizada. Para diagnósticos o
            tratamientos, consulta siempre con un profesional sanitario
            colegiado.
          </p>
          {process.env.NEXT_PUBLIC_NIF && (
            <p className="mt-3 text-xs text-white/40">
              NIF: {process.env.NEXT_PUBLIC_NIF}
            </p>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8cf3ef]">
            Contacto
          </p>
          <div className="mt-5 grid gap-3 text-sm text-white/68">
            <a
              href={buildWhatsappHref()}
              className="btn btn--whatsapp min-h-10 w-fit justify-self-start px-4 text-sm"
              aria-label="Contactar por WhatsApp"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
            {contactConfig.email ? (
              <a
                href={`mailto:${contactConfig.email}`}
                className="inline-flex items-center gap-3 transition hover:text-white"
              >
                <Mail className="size-4" aria-hidden="true" />
                {contactConfig.email}
              </a>
            ) : (
              <span className="inline-flex items-center gap-3 transition hover:text-white">
                <Mail className="size-4" aria-hidden="true" />
                estarellas11088@gmail.com
              </span>
            )}
            <a href="/fisioterapia-chamberi" className="inline-flex items-start gap-3 transition hover:text-white">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span><strong className="block font-semibold text-white">Consulta en Meraki Salud Chamberí</strong>Coworking sanitario<br />{locationConfig.address}<br />{locationConfig.postalCode} Madrid · Chamberí</span>
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8cf3ef]">
            Navegación
          </p>
          <nav className="mt-5 grid gap-3 text-sm text-white/68">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="/preguntas-frecuentes" className="mt-3 inline-block text-sm text-white/68 transition hover:text-white">Preguntas frecuentes</a>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
        <p>
          © {new Date().getFullYear()} {siteConfig.fullName}. Todos los
          derechos reservados.
        </p>
        <p className="mt-1">
          Fisioterapia en Madrid · Consulta en Chamberí · Atención a domicilio.
        </p>
        <a href="/politica-de-privacidad" className="mt-3 inline-block transition hover:text-white">Política de privacidad</a>
      </div>
    </footer>
  );
}
