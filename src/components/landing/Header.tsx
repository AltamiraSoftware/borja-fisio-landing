import { Menu, MessageCircle, Stethoscope } from "lucide-react";
import { navLinks } from "@/data/landing";
import { buildWhatsappHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Header() {
  const whatsappHref = buildWhatsappHref();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/18 bg-[#052E3A]/72 px-4 py-3 shadow-[0_18px_50px_rgba(5,46,58,0.18)] backdrop-blur-2xl md:px-5">
        <a
          href="#inicio"
          className="inline-flex items-center gap-3 text-white"
          aria-label="Ir al inicio"
        >
          <span className="grid size-10 place-items-center rounded-full border border-white/16 bg-white/10">
            <Stethoscope className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">
              Borja Estarellas
            </span>
            <span className="hidden text-xs text-white/58 sm:block">
              Fisioterapia en Madrid
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1 md:flex"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-white/74 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={whatsappHref}
            size="sm"
            icon={<MessageCircle className="size-4" aria-hidden="true" />}
            aria-label="Pedir cita por WhatsApp"
          >
            WhatsApp
          </Button>
        </div>

        <details className="group relative md:hidden">
          <summary
            className="grid size-10 cursor-pointer place-items-center rounded-full border border-white/16 bg-white/10 text-white outline-none transition hover:bg-white/15"
            aria-label="Abrir menú"
          >
            <Menu className="size-5" aria-hidden="true" />
          </summary>
          <div className="absolute right-0 top-12 w-[min(82vw,22rem)] overflow-hidden rounded-[24px] border border-white/16 bg-[#052E3A]/95 p-3 shadow-[0_24px_70px_rgba(5,46,58,0.32)] backdrop-blur-2xl">
            <nav className="grid gap-1" aria-label="Navegación móvil">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-white/78 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={whatsappHref}
                size="md"
                className="mt-2 w-full"
                icon={<MessageCircle className="size-4" aria-hidden="true" />}
                aria-label="Pedir cita por WhatsApp"
              >
                WhatsApp
              </Button>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
