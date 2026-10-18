import type { Metadata } from "next";
import { StandardPage } from "@/components/common/StandardPage";
import { faqItems } from "@/data/landing";

export const metadata: Metadata = { title: "Preguntas frecuentes sobre fisioterapia a domicilio", description: "Resuelve dudas sobre las sesiones, el precio, la atención a domicilio, el material y la reserva de fisioterapia en Madrid.", alternates: { canonical: "/preguntas-frecuentes" } };

export default function FaqPage() {
  return <StandardPage eyebrow="Antes de reservar" title="Preguntas frecuentes" intro="Información práctica sobre la consulta en Arganzuela y la atención a domicilio en Madrid. Si no encuentras tu duda, puedes consultar tu caso directamente."><div className="mx-auto grid max-w-4xl gap-4">{faqItems.map((item, index) => <details key={item.question} className="rounded-[24px] border border-[#8eb9ca] bg-white p-6 text-center shadow-[0_14px_38px_rgba(15,83,102,0.13)]" open={index === 0}><summary className="cursor-pointer font-semibold text-[#073B4C]">{item.question}</summary><p className="mt-4 leading-7 text-[var(--color-muted)]">{item.answer}</p></details>)}</div></StandardPage>;
}
