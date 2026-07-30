export interface FooterLink {
  label: string
  href: string
  external?: boolean
}

export interface FooterColumn {
  id: string
  title: string
  links: FooterLink[]
}
