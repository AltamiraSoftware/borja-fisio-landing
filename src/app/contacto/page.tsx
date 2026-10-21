import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { ContactSection } from "@/components/landing/ContactSection";

export const metadata: Metadata = { title: "Contacto | Fisioterapia en Madrid", description: "Consulta a Borja Estarellas la disponibilidad de fisioterapia a domicilio en Madrid y la consulta en Chamberí.", alternates: { canonical: "/contacto" } };

export default function ContactPage() {
  return <><Header /><main className="pt-20"><ContactSection /></main><Footer /><FloatingWhatsApp /></>;
}
