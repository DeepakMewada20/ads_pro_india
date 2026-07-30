import type { BaseEntity } from "./common"

export interface FAQItem extends BaseEntity {
  question: string
  answer: string
  category?: string
}
