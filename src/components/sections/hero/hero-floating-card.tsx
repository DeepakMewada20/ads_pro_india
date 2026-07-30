import { cn } from "@/lib/utils"
import type { FloatingCard } from "@/types/hero"

interface HeroFloatingCardProps {
  card: FloatingCard
}

const positionClasses: Record<string, string> = {
  "top-left": "top-[8%] left-[-14%] lg:left-[-14%]",
  "bottom-left": "bottom-[22%] left-[-16%] lg:left-[-16%]",
  "top-right": "top-[14%] right-[-12%] lg:right-[-12%]",
}

const delayClasses: Record<string, string> = {
  "top-left": "animate-[float_4s_ease-in-out_infinite]",
  "bottom-left": "animate-[float_4s_ease-in-out_infinite_1.5s]",
  "top-right": "animate-[float_4s_ease-in-out_infinite_3s]",
}

export function HeroFloatingCard({ card }: HeroFloatingCardProps) {
  return (
    <div
      className={cn(
        "absolute z-10 inline-flex items-center gap-3 whitespace-nowrap rounded-xl border border-border bg-white px-[1.1rem] py-3 shadow-[0_8px_32px_rgba(26,111,255,0.14)]",
        positionClasses[card.position],
        delayClasses[card.position],
      )}
    >
      <span className="text-[1.3rem]">{card.icon}</span>
      <div>
        <div className="font-serif text-[1.1rem] font-extrabold leading-none tracking-[-0.02em] text-ink">
          {card.value}
        </div>
        <div className="mt-px font-mono text-[0.65rem] uppercase tracking-[0.06em] text-muted">
          {card.label}
        </div>
      </div>
    </div>
  )
}
