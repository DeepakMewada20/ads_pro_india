import Image from "next/image"
import { heroFloatingBadge, heroFloatingCards } from "@/data/hero"
import { HeroFloatingCard } from "./hero-floating-card"

export function HeroImage() {
  return (
    <div className="relative -mt-6 lg:-mt-24">
      <div className="pointer-events-none absolute -top-4 right-2 sm:right-4 z-30 animate-[float_5s_ease-in-out_infinite] rounded-lg border border-white/30 bg-primary/95 px-4 py-2.5 font-sans text-[0.8rem] font-bold text-white shadow-[0_8px_28px_rgba(26,111,255,0.6)] backdrop-blur-md">
        📈 {heroFloatingBadge}
      </div>

      <div className="relative mx-auto max-w-[460px]">
        <div className="absolute inset-[10%_5%_0] z-0 rounded-[32px] bg-gradient-to-br from-primary-bg to-primary/10" />
        <div className="relative z-10 aspect-[3/4] max-h-[520px] w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-primary to-primary-light drop-shadow-[0_30px_60px_rgba(26,111,255,0.18)]">
          <Image
            src="/images/gautam-mali-1.jpg"
            alt="Gautam Mali – Founder, Ads Pro India"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 460px"
            className="object-cover object-top"
          />
        </div>
      </div>

      {heroFloatingCards.map((card) => (
        <HeroFloatingCard key={card.label} card={card} />
      ))}
    </div>
  )
}
