import type { BaseEntity, ImageAsset } from "./common"

export interface Testimonial extends BaseEntity {
  name: string
  role: string
  company?: string
  avatar?: ImageAsset
  content: string
  rating?: number
}
