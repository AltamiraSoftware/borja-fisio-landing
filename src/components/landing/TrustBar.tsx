import {
  HandHeart,
  MapPinned,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { trustItems } from "@/data/landing";
import { GlassCard } from "@/components/ui/GlassCard";

const icons = {
  shield: ShieldCheck,
  scan: ScanSearch,
  hand: HandHeart,
  map: MapPinned,
} as const;

export function TrustBar() {
  return (
    <section className="relative px-4 py-16">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => {
          const Icon = icons[item.icon];

          return (
            <GlassCard key={item.title} className="p-6">
              <div className="mb-5 grid size-11 place-items-center rounded-2xl bg-[#2EC4C6]/12 text-[#0F5366]">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-[#073B4C]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {item.text}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
