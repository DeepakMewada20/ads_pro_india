import type { BaseEntity, IconAsset } from "./common"

export interface Service extends BaseEntity {
  title: string
  description: string
  icon: IconAsset
  features?: string[]
}
