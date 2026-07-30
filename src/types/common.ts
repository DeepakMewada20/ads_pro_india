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
