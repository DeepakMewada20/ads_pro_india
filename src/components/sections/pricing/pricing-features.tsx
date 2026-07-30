import { Check, X } from "lucide-react"
import type { PricingFeature } from "@/types/pricing"

interface PricingFeaturesProps {
  features: PricingFeature[]
}

export function PricingFeatures({ features }: PricingFeaturesProps) {
  return (
    <ul className="space-y-3">
      {features.map((feature) => (
        <li key={feature.text} className="flex items-start gap-2.5 text-[0.8rem]">
          {feature.included ? (
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
          ) : (
            <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted/60" />
          )}
          <span className={feature.included ? "text-ink" : "text-muted/70"}>
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
  )
}
