"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { navLinks, services } from "@/data/landing";
import { buildWhatsappHref } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
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
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-white"
          aria-label="Ir al inicio"
          onClick={handleNavClick}
        >
          <Image src="/logo.svg" alt="" width={215} height={40} className="h-auto w-[clamp(160px,54vw,215px)]" priority />
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1 lg:flex"
          aria-label="Navegación principal"
        >
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-white/74 transition hover:bg-white/10 hover:text-white">
              Tratamientos <ChevronDown className="size-4 transition group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="absolute left-0 top-[calc(100%+12px)] z-50 grid max-h-[calc(100dvh-6rem)] w-72 gap-1 overflow-y-auto rounded-2xl border border-white/16 bg-[#052E3A] p-2 shadow-[0_24px_70px_rgba(5,46,58,0.32)]">
              <Link href="/tratamientos" className="rounded-xl px-3 py-2 text-sm font-semibold text-[#b7f7f2] hover:bg-white/10">Ver todos los tratamientos</Link>
              {services.map((service) => <Link key={service.href} href={service.href} className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white">{service.title}</Link>)}
            </div>
          </details>
          {navLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-white/74 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappHref}
            className="btn btn--whatsapp btn--icon"
            aria-label="Pedir cita por WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="size-5 text-white" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="relative lg:hidden" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn--secondary btn--icon cursor-pointer"
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
            <div className="mobile-menu-enter open absolute right-0 top-12 max-h-[calc(100dvh-6rem)] w-[min(82vw,22rem)] overflow-y-auto rounded-[24px] border border-white/16 bg-[#052E3A]/95 p-3 shadow-[0_24px_70px_rgba(5,46,58,0.32)] backdrop-blur-2xl">
              <nav className="grid gap-1" aria-label="Navegación móvil">
                <details className="group rounded-2xl text-white/78">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium hover:bg-white/10">Tratamientos <ChevronDown className="size-4 transition group-open:rotate-180" aria-hidden="true" /></summary>
                  <div className="grid gap-1 pl-3 pb-2">
                    <Link href="/tratamientos" onClick={handleNavClick} className="rounded-xl px-4 py-2 text-sm font-semibold text-[#b7f7f2] hover:bg-white/10">Ver todos</Link>
                    {services.map((service) => <Link key={service.href} href={service.href} onClick={handleNavClick} className="rounded-xl px-4 py-2 text-sm text-white/78 hover:bg-white/10">{service.title}</Link>)}
                  </div>
                </details>
                {navLinks.slice(1).map((link) => (
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
                  className="btn btn--whatsapp mt-2 min-h-12 w-full px-5 py-3 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pedir cita por WhatsApp"
                >
                  <WhatsAppIcon className="size-5 text-white" />
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
