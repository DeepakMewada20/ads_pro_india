import type { ResultCard } from "@/types/results"

export const resultsHeader = {
  label: "Proof of Work",
  title: "Numbers That Speak",
  titleHighlight: "Louder Than Promises.",
} as const

export const resultsData: ResultCard[] = [
  {
    id: "ecommerce",
    tag: "E-Commerce · Fashion Brand",
    stats: [
      { value: "3.8x", label: "ROAS Achieved" },
      { value: "₹12L+", label: "Monthly Revenue" },
      { value: "₹3.2L", label: "Ad Spend" },
    ],
    note: "Scaled Meta Ads from ₹30K/mo to ₹3.2L/mo in 4 months with improved creatives and audience segmentation.",
  },
  {
    id: "realestate",
    tag: "Real Estate · Lead Generation",
    stats: [
      { value: "500+", label: "Leads in 30 Days" },
      { value: "₹18L+", label: "Revenue Generated" },
      { value: "4.1x", label: "ROAS Achieved" },
    ],
    note: "Revamped the entire ad funnel — creative to landing page — tripling lead volume and scaling revenue 3x in 60 days.",
  },
  {
    id: "coach",
    tag: "Online Coach · High-Ticket",
    stats: [
      { value: "$42K", label: "Revenue Generated" },
      { value: "5.2x", label: "ROAS" },
      { value: "120", label: "Calls Booked" },
    ],
    note: "Google + Meta combined funnel for a $5K coaching program. 120 discovery calls booked in 60 days.",
  },
]
