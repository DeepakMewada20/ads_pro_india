import { pricingUrgency } from "@/data/pricing"

export function PricingUrgency() {
  return (
    <div className="mt-12 text-center">
      <div className="mx-auto max-w-[650px] rounded-2xl border border-primary/15 bg-primary-bg/50 px-6 py-5">
        <p className="text-[0.82rem] font-medium text-primary/80">
          {pricingUrgency.strip}
        </p>
      </div>
      <p className="mt-4 text-[0.72rem] text-muted">{pricingUrgency.note}</p>
    </div>
  )
}
