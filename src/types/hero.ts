export interface HeroContent {
  badge: string
  title: string
  titleHighlight: string
  titleSuffix: string
  subtitle: string
  subtitleHighlights: string[]
}

export interface HeroButton {
  label: string
  href: string
  variant: "primary" | "whatsapp"
}

export interface HeroStat {
  value: string
  label: string
}

export interface FloatingCard {
  icon: string
  value: string
  label: string
  position: "top-left" | "bottom-left" | "top-right"
}

export interface CertBadge {
  name: string
  svg: string
}

export interface FormField {
  name: string
  placeholder: string
  type: "text" | "tel" | "select"
  required?: boolean
  options?: string[]
}
