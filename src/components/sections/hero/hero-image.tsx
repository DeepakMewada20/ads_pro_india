import { heroFloatingBadge, heroFloatingCards } from "@/data/hero"
import { HeroFloatingCard } from "./hero-floating-card"

export function HeroImage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -top-[18px] right-[10px] z-10 animate-[float_5s_ease-in-out_infinite] rounded-lg border border-white/20 bg-primary/90 px-[1.1rem] py-[0.65rem] font-sans text-[0.78rem] font-bold text-white shadow-[0_8px_28px_rgba(26,111,255,0.6)] backdrop-blur-sm">
        📈 {heroFloatingBadge}
      </div>

      <div className="relative mx-auto max-w-[460px]">
        <div className="absolute inset-[10%_5%_0] z-0 rounded-[32px] bg-gradient-to-br from-primary-bg to-primary/10" />
        <div className="relative z-10 aspect-[3/4] max-h-[520px] w-full rounded-[28px] bg-gradient-to-br from-primary to-primary-light object-cover object-top drop-shadow-[0_30px_60px_rgba(26,111,255,0.18)]" />
      </div>

      {heroFloatingCards.map((card) => (
        <HeroFloatingCard key={card.label} card={card} />
      ))}
    </div>
  )
}
