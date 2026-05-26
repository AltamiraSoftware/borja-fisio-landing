import { MessageCircle } from "lucide-react";
import { buildWhatsappHref } from "@/lib/utils";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsappHref()}
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#2EC4C6] text-[#052E3A] shadow-[0_18px_44px_rgba(46,196,198,0.38)] transition hover:-translate-y-1 hover:bg-[#8cf3ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2EC4C6]"
      aria-label="Pedir cita por WhatsApp"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
