export interface BaseEntity {
  id: string
}

export interface ImageAsset {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface IconAsset {
  name: string
  className?: string
}

export interface Stat {
  value: string | number
  label: string
  suffix?: string
  prefix?: string
}

export interface ComparisonItem {
  icon: string
  text: string
}
