import type { ContactInfoItem } from "@/types/contact"

export const contactConfig = {
  label: "Contact Us",
  title: "Ready to Scale Your Business?",
  description:
    "Take the first step toward predictable growth. Share your details and we'll map out a custom ad strategy for your business.",
  submitLabel: "Book Free Strategy Call on WhatsApp",
} as const

export const budgetOptions = [
  { value: "", label: "Select Budget Range" },
  { value: "Under ₹25,000/mo", label: "Under ₹25,000/mo" },
  { value: "₹25K – ₹1L/mo", label: "₹25K – ₹1L/mo" },
  { value: "₹1L – ₹5L/mo", label: "₹1L – ₹5L/mo" },
  { value: "₹5L+/mo", label: "₹5L+/mo" },
] as const

export const contactInfoItems: ContactInfoItem[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+91 6268665115",
    href: "https://wa.me/916268665115",
    icon: "MessageCircle",
    variant: "green",
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@its.gautammali",
    href: "https://www.instagram.com/its.gautammali",
    icon: "Globe",
    variant: "orange",
  },
  {
    id: "strategy-call",
    label: "Strategy Call",
    value: "Free 30-Min Session",
    href: "#contact",
    icon: "Phone",
    variant: "purple",
  },
]
