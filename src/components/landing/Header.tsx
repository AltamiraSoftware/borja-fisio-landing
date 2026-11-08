"use client";

import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { DoctoraliaLogo } from "@/components/ui/BrandIcons";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { navLinks } from "@/data/landing";
import { treatmentNavigation } from "@/data/treatmentNavigation";
import { siteConfig } from "@/lib/constants";
import { buildWhatsappHref } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [activeTreatmentGroup, setActiveTreatmentGroup] = useState<string | null>(null);
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
    setTreatmentsOpen(false);
    setActiveTreatmentGroup(null);
  };

  const closeTreatments = () => {
    setTreatmentsOpen(false);
    setActiveTreatmentGroup(null);
  };

  const openTreatments = () => {
    setTreatmentsOpen(true);
  };

  const toggleTreatments = () => {
    if (treatmentsOpen) {
      closeTreatments();
      return;
    }

    openTreatments();
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
          <Image src="/logo.png" alt="" width={52} height={52} className="size-11 rounded-full object-cover sm:size-13" priority />
          <span className="whitespace-nowrap text-sm font-semibold tracking-wide sm:text-base">Borja Estarellas</span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1 lg:flex"
          aria-label="Navegación principal"
        >
          <div
            className="relative"
            onMouseEnter={openTreatments}
            onMouseLeave={closeTreatments}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                event.preventDefault();
                closeTreatments();
              }
            }}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-white/74 transition hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white"
              aria-haspopup="menu"
              aria-expanded={treatmentsOpen}
              onClick={toggleTreatments}
              onFocus={openTreatments}
            >
              Tratamientos <ChevronDown className={`size-4 transition ${treatmentsOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>

            {treatmentsOpen && (
              <div className="absolute left-0 top-full z-50 flex items-start gap-2 pt-3">
                <div className="grid max-h-[calc(100dvh-6rem)] w-72 gap-1 overflow-y-auto rounded-2xl border border-white/16 bg-[#052E3A] p-2 shadow-[0_24px_70px_rgba(5,46,58,0.32)]" role="menu" aria-label="Categorías de tratamientos">
                  {treatmentNavigation.map((item, index) => {
                    const isActive = activeTreatmentGroup === item.href;

                    return (
                      <div
                        key={item.href}
                        onMouseEnter={() => setActiveTreatmentGroup(item.children ? item.href : null)}
                        onFocusCapture={() => setActiveTreatmentGroup(item.children ? item.href : null)}
                      >
                        <Link
                          href={item.href}
                          role="menuitem"
                          onClick={handleNavClick}
                          className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white ${index === 0 ? "font-semibold text-[#b7f7f2]" : "text-white/80"} ${isActive ? "bg-white/10 text-white" : ""}`}
                          aria-haspopup={item.children ? "menu" : undefined}
                          aria-expanded={item.children ? isActive : undefined}
                        >
                          <span>{item.label}</span>
                          {item.children && <ChevronRight className="size-4 shrink-0" aria-hidden="true" />}
                        </Link>
                      </div>
                    );
                  })}
                </div>

                {activeTreatmentGroup && treatmentNavigation.find((item) => item.href === activeTreatmentGroup)?.children && (
                  <div className="max-h-[calc(100dvh-6rem)] w-72 overflow-y-auto rounded-2xl border border-white/16 bg-[#052E3A] p-2 shadow-[0_24px_70px_rgba(5,46,58,0.32)]" role="menu" aria-label="Técnicas de tratamiento">
                    <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#b7f7f2]">
                      {treatmentNavigation.find((item) => item.href === activeTreatmentGroup)?.label}
                    </p>
                    {treatmentNavigation.find((item) => item.href === activeTreatmentGroup)?.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        onClick={handleNavClick}
                        className="block rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
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

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={siteConfig.doctoraliaUrl}
            className="btn btn--secondary btn--icon"
            aria-label="Ver el perfil de Doctoralia de Borja Estarellas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DoctoraliaLogo className="size-6" />
          </a>
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
                  <div className="grid gap-1 pb-2 pl-3">
                    {treatmentNavigation.map((item, index) => item.children ? (
                      <details key={item.href} className="group rounded-xl">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 py-2 text-sm text-white/78 hover:bg-white/10 hover:text-white">
                          {item.label} <ChevronDown className="size-4 shrink-0 transition group-open:rotate-180" aria-hidden="true" />
                        </summary>
                        <div className="grid gap-1 border-l border-white/15 py-1 pl-3">
                          <Link href={item.href} onClick={handleNavClick} className="rounded-lg px-3 py-2 text-sm font-semibold text-[#b7f7f2] hover:bg-white/10">
                            Ver {item.label.toLocaleLowerCase("es-ES")}
                          </Link>
                          {item.children.map((child) => (
                            <Link key={child.href} href={child.href} onClick={handleNavClick} className="rounded-lg px-3 py-2 text-sm text-white/72 hover:bg-white/10 hover:text-white">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : <Link key={item.href} href={item.href} onClick={handleNavClick} className={`rounded-xl px-4 py-2 text-sm hover:bg-white/10 ${index === 0 ? "font-semibold text-[#b7f7f2]" : "text-white/78"}`}>{item.label}</Link>)}
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
                <a
                  href={siteConfig.doctoraliaUrl}
                  className="btn btn--secondary mt-2 min-h-12 w-full px-5 py-3 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver el perfil de Doctoralia de Borja Estarellas"
                >
                  <DoctoraliaLogo className="size-5" />
                  Doctoralia
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
