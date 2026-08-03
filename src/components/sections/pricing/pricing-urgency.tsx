import { pricingUrgency } from "@/data/pricing"

export function PricingUrgencyBanner() {
  return (
    <div className="mb-10 mx-auto max-w-[700px] overflow-hidden rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs sm:text-sm font-medium text-amber-900 flex items-center justify-between gap-3 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
        </span>
        <span>
          <strong className="font-bold text-amber-950">Only 3 client spots left this month.</strong> Gautam personally manages every account — capacity is limited to maintain quality.
        </span>
      </div>
      <span className="shrink-0 font-bold text-amber-800 bg-amber-200/80 px-2.5 py-1 rounded-lg text-xs">
        ⏰ Offer ends soon
      </span>
    </div>
  )
}

export function PricingUrgency() {
  return (
    <div className="mt-10 text-center">
      <p className="mx-auto max-w-xl text-xs sm:text-sm font-medium text-muted">
        {pricingUrgency.note}
      </p>
    </div>
  )
}
