import { AnimatedButton } from "@/components/common/animated-button"
import type { PricingPlan } from "@/types/pricing"

interface PricingCtaProps {
  plan: PricingPlan
}

export function PricingCta({ plan }: PricingCtaProps) {
  return (
    <AnimatedButton
      href={plan.ctaHref ?? "#"}
      variant={plan.isPopular ? "primary" : "ghost"}
      target="_blank"
      className="w-full justify-center text-center text-[0.84rem]"
    >
      {plan.ctaText ?? "Get Started"}
    </AnimatedButton>
  )
}
