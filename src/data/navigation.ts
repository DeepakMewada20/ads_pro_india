export interface NavLink {
  label: string
  href: string
}

export const navigationData: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export const navbarConfig = {
  logoText: "AdsProIndia",
  cta: {
    label: "Book Free Call",
    href: "#contact",
  },
}
