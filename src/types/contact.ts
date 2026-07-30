export interface ContactInfoItem {
  id: string
  label: string
  value: string
  href: string
  icon: string
  variant: "blue" | "orange" | "green" | "purple"
}

export interface ContactFormData {
  name: string
  phone: string
  business?: string
  budget?: string
  goal?: string
}
