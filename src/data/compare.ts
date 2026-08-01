import type { ComparisonColumn } from "@/types/compare"

export const compareHeader = {
  label: "Why Choose Us",
  title: "Ads Pro India ",
  titleHighlight: "vs",
  titleSuffix: " Others — No Contest.",
  description:
    "Most agencies promise results. We engineer them. Here's what actually separates us.",
} as const

export const comparisonColumns: ComparisonColumn[] = [
  {
    id: "others",
    title: "Other Agencies",
    type: "others",
    icon: "X",
    items: [
      { icon: "Timer", text: "Slow onboarding — takes 2–4 weeks to even launch your first campaign" },
      { icon: "Dices", text: "Gut-feel strategies with no real data or split testing behind decisions" },
      { icon: "CloudFog", text: "Vague monthly reports full of vanity metrics — reach, impressions, likes" },
      { icon: "Ghost", text: "Hard to reach — no dedicated support, slow responses, missed calls" },
      { icon: "Lock", text: "Cookie-cutter templates recycled across every client regardless of niche" },
      { icon: "Banknote", text: "High retainers with hidden markups on ad spend and no accountability" },
    ],
  },
  {
    id: "us",
    title: "Ads Pro India",
    type: "us",
    icon: "Star",
    items: [
      { icon: "Zap", text: "Campaigns live in 3–5 days — we move fast so you start winning fast" },
      { icon: "BarChart3", text: "100% data-driven — every decision backed by testing, analytics and numbers" },
      { icon: "TrendingUp", text: "Transparent weekly reports showing real revenue, ROAS and lead numbers" },
      { icon: "MessageCircle", text: "Dedicated WhatsApp support — Gautam personally responds, fast" },
      { icon: "Target", text: "Custom strategy built for your niche, your audience, your business goals" },
      { icon: "Handshake", text: "Zero hidden fees — clear pricing, full transparency on every rupee spent" },
    ],
  },
]

export const compareCTA = {
  label: "Start with Ads Pro India",
  href: "https://wa.me/916268665115",
} as const
