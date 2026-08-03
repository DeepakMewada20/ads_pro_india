import type { BaseEntity } from "./common"

export type BillingInterval = "monthly" | "yearly" | "one-time"

export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingPlan extends BaseEntity {
  planNumber?: string
  name: string
  description?: string
  originalPrice?: number
  price: number
  currency: string
  interval: BillingInterval
  discountBadge?: string
  paymentTypeNote?: string
  features: PricingFeature[]
  isPopular?: boolean
  ctaText?: string
  ctaHref?: string
}
