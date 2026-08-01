import type { ComparisonItem } from "./common"

export interface ComparisonColumn {
  id: string
  title: string
  type: "us" | "others"
  icon: string
  items: ComparisonItem[]
}
