import { heroContent } from "@/data/hero"

export function HeroBadge() {
  return (
    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/35 bg-primary/18 px-[1.1rem] py-[0.42rem] font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[#7fb3ff] backdrop-blur-sm">
      <span
        className="inline-block h-[6px] w-[6px] animate-pulse rounded-full bg-primary-light"
      />
      {heroContent.badge}
    </div>
  )
}
