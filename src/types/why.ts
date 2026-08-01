export interface WhyItem {
  id: string
  number: string
  title: string
  description: string
}

export interface WhyMetric {
  id: string
  label: string
  value: string
  delta: string
  direction: "up" | "down"
}
