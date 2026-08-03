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
  const formattedOriginalPrice = plan.originalPrice?.toLocaleString("en-IN")

  return (
    <GlassCard
      variant={plan.isPopular ? "light" : "light"}
      hover="lift"
      className={`relative flex h-full flex-col p-7 ${
        plan.isPopular
          ? "overflow-visible border-2 border-primary ring-2 ring-primary/20 shadow-[0_12px_45px_rgba(26,111,255,0.18)]"
          : "border border-border"
      }`}
    >
      {plan.isPopular && <PricingBadge label="Most Popular" />}

      {plan.planNumber && (
        <div className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary">
          {plan.planNumber}
        </div>
      )}

      <h3 className="mt-1 font-serif text-xl font-extrabold text-ink">
        {plan.name}
      </h3>

      <div className="mt-4 flex flex-wrap items-baseline gap-2">
        {plan.originalPrice && (
          <span className="text-sm font-semibold text-muted line-through">
            {plan.currency}{formattedOriginalPrice}{plan.interval === "monthly" ? "/mo" : ""}
          </span>
        )}
        {plan.discountBadge && (
          <span className="rounded-md bg-rose-500/10 px-2 py-0.5 font-mono text-[0.68rem] font-extrabold text-rose-600 border border-rose-200">
            {plan.discountBadge}
          </span>
        )}
      </div>

      <div className="mt-1 flex items-baseline gap-1">
        <span className="font-serif text-[2.4rem] font-extrabold leading-none text-ink">
          {plan.currency}{formattedPrice}
        </span>
        {plan.interval === "monthly" && (
          <span className="font-mono text-xs font-semibold text-muted">/mo</span>
        )}
      </div>

      {plan.paymentTypeNote && (
        <div className="mt-1 text-[0.72rem] font-medium text-muted">
          {plan.paymentTypeNote}
        </div>
      )}

      {plan.description && (
        <p className="mt-3 text-[0.8rem] leading-relaxed text-ink-2 font-medium">{plan.description}</p>
      )}

      <div className="my-6 border-t border-border/80 pt-5 flex-1">
        <PricingFeatures features={plan.features} />
      </div>

      <div className="mt-auto">
        <PricingCta plan={plan} />
      </div>
    </GlassCard>
  )
}
