"use client";

import { Menu, MessageCircle, Stethoscope, X } from "lucide-react";
import { navLinks } from "@/data/landing";
import { buildWhatsappHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useState, useEffect, useRef } from "react";
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Close menu on link click (mobile)
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const whatsappHref = buildWhatsappHref();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 py-3 transition-all duration-300 ${
        scrolled
          ? "pt-2"
          : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 shadow-[0_18px_50px_rgba(5,46,58,0.18)] backdrop-blur-2xl transition-all duration-300 md:px-5 ${
          scrolled
            ? "border-white/25 bg-[#052E3A]/90"
            : "border-white/18 bg-[#052E3A]/72"
        }`}
      >
        <a
          href="#inicio"
          className="inline-flex items-center gap-3 text-white"
          aria-label="Ir al inicio"
          onClick={handleNavClick}
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
          <a
            href={whatsappHref}
            className="grid size-11 place-items-center rounded-full bg-[#25D366] shadow-[0_8px_32px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
            aria-label="Pedir cita por WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="relative md:hidden" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid size-10 cursor-pointer place-items-center rounded-full border border-white/16 bg-white/10 text-white outline-none transition hover:bg-white/15"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>

          {/* Mobile menu dropdown */}
          {menuOpen && (
            <div className="mobile-menu-enter open absolute right-0 top-12 w-[min(82vw,22rem)] overflow-hidden rounded-[24px] border border-white/16 bg-[#052E3A]/95 p-3 shadow-[0_24px_70px_rgba(5,46,58,0.32)] backdrop-blur-2xl">
              <nav className="grid gap-1" aria-label="Navegación móvil">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-white/78 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={whatsappHref}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(37,211,102,0.4)] transition-all duration-300 hover:bg-[#20bd5e] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pedir cita por WhatsApp"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Contactar por WhatsApp
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
