import type { AboutContent } from "@/types/about"

export const aboutContent: AboutContent = {
  badge: "About Us",
  title: "We Don't Just Run Ads.\nWe Build ",
  subtitle: "Revenue Engines.",
  paragraphs: [
    "Ads Pro India is a performance marketing agency founded by Gautam Mali. We help Indian businesses turn ad spend into predictable, scalable revenue — not just clicks and impressions.",
    "With 5+ years of hands-on experience managing ₹10Cr+ in ad spend across Meta, Google, and WhatsApp, we've built systems that consistently deliver 3x+ ROAS for our 50+ clients across e-commerce, real estate, coaching, and local services.",
    "Our philosophy is simple: every rupee you spend must earn you more back. No fluff. No vanity metrics. Just growth.",
  ],
  highlights: [
    { icon: "Target", text: "Data-driven campaign strategies that eliminate guesswork" },
    { icon: "TrendingUp", text: "Proven 3x+ average ROAS across all client verticals" },
    { icon: "Users", text: "50+ happy clients from e-commerce, real estate & coaching" },
    { icon: "BarChart3", text: "₹10Cr+ ad spend managed with measurable results" },
    { icon: "MessageCircle", text: "Direct founder access — Gautam handles your account personally" },
  ],
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Clients Served" },
    { value: "10Cr+", label: "Ad Spend Managed", prefix: "₹" },
  ],
  cta: {
    label: "Talk to Gautam Directly",
    href: "https://wa.me/916268665115",
  },
}
