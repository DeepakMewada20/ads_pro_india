import { marqueeItems } from "@/data/marquee"

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <div className="border-y border-white/10 bg-ink py-4">
      <div className="relative overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-0 hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-0">
              <span className="whitespace-nowrap px-6 font-mono text-[0.8rem] font-medium uppercase tracking-[0.15em] text-white/40">
                {item}
              </span>
              <span className="text-primary-light">✦</span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
      </div>
    </div>
  )
}
