import type { WhyItem, WhyMetric } from "@/types/why"

export const whyHeader = {
  label: "Our Edge",
  title: "Why Businesses Choose ",
  titleHighlight: "Ads Pro India.",
} as const

export const whyItems: WhyItem[] = [
  {
    id: "roi",
    number: "01",
    title: "ROI-First Thinking, Always",
    description:
      "Every decision filters through one question: does this grow the client's revenue? Likes don't pay your bills — sales do.",
  },
  {
    id: "data",
    number: "02",
    title: "Data-Driven, Not Gut-Driven",
    description:
      "We test, analyse, and optimise based on hard data. No guesswork, no ego — just what the numbers confirm works.",
  },
  {
    id: "speed",
    number: "03",
    title: "Speed of Execution",
    description:
      "Campaigns go live within days. When an ad works, we scale before the opportunity window closes.",
  },
  {
    id: "transparency",
    number: "04",
    title: "Radical Transparency",
    description:
      "Weekly reports, open dashboards, zero hidden markups. You always know where your money goes and what it returns.",
  },
]

export const whyMetrics: WhyMetric[] = [
  { id: "roas", label: "Return on Ad Spend", value: "4.2x", delta: "↑ 18%", direction: "up" },
  { id: "conversions", label: "Conversions This Month", value: "320+", delta: "↑ 2.1x", direction: "up" },
  { id: "leads", label: "Leads This Month", value: "847", delta: "↑ 2.3x", direction: "up" },
]

export const whyCTA = {
  text: "Ready to see numbers like these for your business?",
  button: {
    label: "Book Free Strategy Call",
    href: "https://wa.me/916268665115",
  },
} as const
