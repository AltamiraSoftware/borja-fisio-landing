import { buildWhatsappHref } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a href={buildWhatsappHref()} className="btn btn--whatsapp btn--icon-lg fixed bottom-5 right-5 z-50" aria-label="Pedir cita por WhatsApp" target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon className="size-7 text-white" />
    </a>
  );
}
