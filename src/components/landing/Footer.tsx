import { Mail, MapPin, MessageCircle } from "lucide-react";
import { navLinks } from "@/data/landing";
import { contactConfig, siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-[#052E3A] px-4 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-xl font-semibold">{siteConfig.fullName}</p>
          <p className="mt-2 text-sm text-white/62">
            Fisioterapeuta en Madrid.
          </p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/54">
            La información de esta web es orientativa y no sustituye una
            valoración sanitaria individualizada.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8cf3ef]">
            Contacto
          </p>
          <div className="mt-5 grid gap-3 text-sm text-white/68">
            <a
              href={buildWhatsappHref()}
              className="inline-flex items-center gap-3 transition hover:text-white"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </a>
            <span className="inline-flex items-center gap-3">
              <Mail className="size-4" aria-hidden="true" />
              {contactConfig.email || "Email pendiente de confirmar"}
            </span>
            <span className="inline-flex items-center gap-3">
              <MapPin className="size-4" aria-hidden="true" />
              Zona de atención: Madrid
            </span>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8cf3ef]">
            Navegación
          </p>
          <nav className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/68">
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
        </div>
      </div>
    </footer>
  );
}
