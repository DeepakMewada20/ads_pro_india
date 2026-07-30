import type { Stat } from "./common"

export interface AboutHighlight {
  icon: string
  text: string
}

export interface AboutContent {
  badge: string
  title: string
  subtitle: string
  paragraphs: string[]
  highlights: AboutHighlight[]
  stats: Stat[]
  cta: {
    label: string
    href: string
  }
}
