export interface ExtendedResultCard {
  id: string
  category: "ecom" | "realestate" | "leadgen" | "local"
  tag: string
  clientName?: string
  beforeMetric: string
  afterMetric: string
  stats: Array<{ value: string; label: string }>
  note: string
}

export const resultsHeader = {
  label: "Verified Proof of Work",
  title: "Real Client Campaign Results",
  titleHighlight: "& Proven ROAS.",
} as const

export const resultsData: ExtendedResultCard[] = [
  {
    id: "ecommerce-fashion",
    category: "ecom",
    tag: "E-Commerce · Apparel & Fashion",
    clientName: "TrendVibe Fashion",
    beforeMetric: "1.2x ROAS (Losing Money)",
    afterMetric: "4.8x ROAS (₹14.5L/mo)",
    stats: [
      { value: "4.8x", label: "ROAS Achieved" },
      { value: "₹14.5L", label: "Monthly Revenue" },
      { value: "₹3.0L", label: "Ad Spend" },
    ],
    note: "Scaled Meta Advantage+ Shopping campaigns with high-converting video UGC creatives and retargeting funnels.",
  },
  {
    id: "realestate-luxury",
    category: "realestate",
    tag: "Real Estate · Luxury Apartments",
    clientName: "Indore Heights Realty",
    beforeMetric: "₹850 Cost Per Lead",
    afterMetric: "₹240 Qualified CPL",
    stats: [
      { value: "620+", label: "Verified Leads" },
      { value: "₹2.4Cr", label: "Sales Pipeline" },
      { value: "5.2x", label: "Estimated ROI" },
    ],
    note: "Revamped real estate lead generation funnel with custom instant forms and automated WhatsApp lead nurture.",
  },
  {
    id: "coach-high-ticket",
    category: "leadgen",
    tag: "High-Ticket Coaching & B2B",
    clientName: "ScaleUp Academy",
    beforeMetric: "15 Calls / Month",
    afterMetric: "140 Calls / Month",
    stats: [
      { value: "$48K", label: "Revenue Generated" },
      { value: "5.4x", label: "ROAS" },
      { value: "140", label: "Calls Booked" },
    ],
    note: "Combined Google Search Ads + Meta Retargeting for high-ticket $3K program with automated VSL funnel.",
  },
  {
    id: "d2c-skincare",
    category: "ecom",
    tag: "D2C · Organic Skincare",
    clientName: "GlowNature Organics",
    beforeMetric: "₹4.2L Monthly Sales",
    afterMetric: "₹18.6L Monthly Sales",
    stats: [
      { value: "4.4x", label: "Average ROAS" },
      { value: "3,400+", label: "Orders Shipped" },
      { value: "34%", label: "Repeat Buyers" },
    ],
    note: "Built scalable Meta ad funnel focusing on before/after video hooks and bundle offer landing pages.",
  },
  {
    id: "local-dental",
    category: "local",
    tag: "Local Clinic · Multi-Location",
    clientName: "Apex Dental Care",
    beforeMetric: "20 Patients / Month",
    afterMetric: "115 Patients / Month",
    stats: [
      { value: "115+", label: "New Appointments" },
      { value: "₹140", label: "Cost Per Booking" },
      { value: "6.5x", label: "ROAS" },
    ],
    note: "Hyper-targeted Google Local Search Ads & Meta Geo-Fencing to drive high-margin dental implant bookings.",
  },
]
