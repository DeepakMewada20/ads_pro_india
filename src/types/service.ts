import type { BaseEntity, IconAsset } from "./common"

export interface Service extends BaseEntity {
  title: string
  description: string
  icon: IconAsset
  variant?: "gradient-blue" | "gradient-orange" | "gradient-green" | "gradient-purple"
  features?: string[]
}
