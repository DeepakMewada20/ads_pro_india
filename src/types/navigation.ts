import type { IconAsset } from "./common"

export interface NavigationLink {
  label: string
  href: string
  icon?: IconAsset
  children?: NavigationLink[]
}

export interface NavigationConfig {
  header: NavigationLink[]
  footer: NavigationLink[]
  social: SocialLink[]
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}
