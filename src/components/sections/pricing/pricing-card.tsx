"use client"

import { GlassCard } from "@/components/common/glass-card"
import { PricingBadge } from "./pricing-badge"
import { PricingFeatures } from "./pricing-features"
import { PricingCta } from "./pricing-cta"
import type { PricingPlan } from "@/types/pricing"

interface PricingCardProps {
  plan: PricingPlan
}

export function PricingCard({ plan }: PricingCardProps) {
  const formattedPrice = plan.price.toLocaleString("en-IN")

  return (
    <GlassCard
      variant={plan.isPopular ? "light" : "light"}
      hover="lift"
      className={`flex h-full flex-col p-6 ${
        plan.isPopular
          ? "overflow-visible border-primary/40 shadow-[0_8px_40px_rgba(26,111,255,0.12)]"
          : ""
      }`}
    >
      {plan.isPopular && <PricingBadge label="Most Popular" />}

      <div className="mb-2 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary">
        {plan.name}
      </div>

      <div className="flex items-baseline gap-0.5">
        <span className="font-serif text-[2rem] font-extrabold text-ink">
          {plan.currency}{formattedPrice}
        </span>
        <span className="font-mono text-[0.72rem] text-muted">/{plan.interval === "monthly" ? "mo" : "yr"}</span>
      </div>

      {plan.description && (
        <p className="mt-2 text-[0.78rem] leading-relaxed text-muted">{plan.description}</p>
      )}

      <div className="mt-6 flex-1">
        <PricingFeatures features={plan.features} />
      </div>

      <div className="mt-6">
        <PricingCta plan={plan} />
      </div>
    </GlassCard>
  )
}
