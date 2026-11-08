import { Plus } from "lucide-react";
import type { FaqItem } from "@/types/content";

export function FaqList({ items, openFirst = false }: { items: ReadonlyArray<FaqItem>; openFirst?: boolean }) {
  return (
    <div className="border-t border-[#102A33]">
      {items.map((item, index) => (
        <details key={item.question} className="group border-b border-[#d6e3df]" open={openFirst && index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold leading-snug text-[#073B4C] [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <Plus className="size-5 shrink-0 text-[#0F5366] transition-transform duration-200 ease-out group-open:rotate-45 motion-reduce:transition-none" aria-hidden="true" />
          </summary>
          <p className="max-w-[62ch] pb-6 pr-10 leading-7 text-[var(--color-muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
