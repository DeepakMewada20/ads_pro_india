import type { BaseEntity } from "./common"

export type BillingInterval = "monthly" | "yearly"

export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingPlan extends BaseEntity {
  name: string
  description?: string
  price: number
  currency: string
  interval: BillingInterval
  features: PricingFeature[]
  isPopular?: boolean
  ctaText?: string
  ctaHref?: string
}
