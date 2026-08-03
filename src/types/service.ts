import type { BaseEntity, IconAsset } from "./common"

export type ServiceCategory = "all" | "paid-media" | "funnels-web" | "creative-growth"

export interface Service extends BaseEntity {
  title: string
  description: string
  icon: IconAsset
  variant?: "gradient-blue" | "gradient-orange" | "gradient-green" | "gradient-purple"
  features?: string[]
  category?: Exclude<ServiceCategory, "all">
  categoryLabel?: string
  badge?: string
}
