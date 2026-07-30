import { heroCertBadges } from "@/data/hero"

export function HeroCertifiedBy() {
  return (
    <div className="mt-8">
      <div className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/35">
        Certified & Trusted By
      </div>
      <div className="flex flex-wrap items-center gap-5">
        {heroCertBadges.map((badge, i) => (
          <div key={badge.name} className="flex items-center gap-2 text-[0.72rem] font-semibold text-white/50">
            <svg width="18" height="18" viewBox="0 0 24 24" className="flex-shrink-0">
              <path d={badge.svg} fill="currentColor" />
            </svg>
            <span>{badge.name}</span>
            {i < heroCertBadges.length - 1 && (
              <span className="ml-2 inline-block h-5 w-px bg-white/15" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
