import type { Service } from "@/types/service"

export const servicesData: Service[] = [
  {
    id: "meta-ads",
    title: "Meta Ads",
    description:
      "Facebook & Instagram ad campaigns engineered for conversions. From prospecting to retargeting, we build full-funnel systems that scale.",
    icon: { name: "ThumbsUp" },
    variant: "gradient-orange",
    category: "paid-media",
    categoryLabel: "Paid Media",
    badge: "Popular",
    features: [
      "Audience research & lookalike building",
      "Conversion-optimized creative strategy",
      "A/B testing at scale",
      "Daily bid & budget management",
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads",
    description:
      "Search, Shopping, Display & YouTube campaigns that capture intent and drive qualified leads at the lowest possible CPA.",
    icon: { name: "Search" },
    variant: "gradient-blue",
    category: "paid-media",
    categoryLabel: "Paid Media",
    badge: "High Intent",
    features: [
      "High-intent keyword strategy",
      "Shopping feed optimization",
      "Landing page conversion audits",
      "Negative keyword & spend hygiene",
    ],
  },
  {
    id: "lead-gen",
    title: "Lead Generation",
    description:
      "End-to-end lead generation systems combining paid ads, organic content, and automated follow-up to fill your pipeline.",
    icon: { name: "Mail" },
    variant: "gradient-orange",
    category: "paid-media",
    categoryLabel: "Paid Media",
    features: [
      "Multi-channel lead sourcing",
      "Automated lead nurturing flows",
      "CRM & tracking setup",
      "Lead quality scoring",
    ],
  },
  {
    id: "funnels",
    title: "Funnel Building",
    description:
      "High-converting landing pages and multi-step funnels designed to turn cold traffic into paying customers on autopilot.",
    icon: { name: "Layers" },
    variant: "gradient-green",
    category: "funnels-web",
    categoryLabel: "Funnels & Web",
    badge: "Top ROAS",
    features: [
      "Lead capture & nurture sequences",
      "A/B tested landing page variants",
      "WhatsApp & email integration",
      "Retargeting pixel infrastructure",
    ],
  },
  {
    id: "landing-page",
    title: "Landing Page Development",
    description:
      "High-converting landing pages purpose-built for paid traffic. Every section engineered to capture attention, build trust, and drive action.",
    icon: { name: "MousePointerClick" },
    variant: "gradient-purple",
    category: "funnels-web",
    categoryLabel: "Funnels & Web",
    features: [
      "Conversion-focused page structure",
      "A/B tested headline & offer variants",
      "WhatsApp, form & payment integrations",
      "Speed & mobile optimised builds",
    ],
  },
  {
    id: "web-dev",
    title: "Website Development",
    description:
      "Fast, conversion-optimized websites built on modern stacks. We design for speed, clarity, and maximum lead generation.",
    icon: { name: "Globe" },
    variant: "gradient-blue",
    category: "funnels-web",
    categoryLabel: "Funnels & Web",
    features: [
      "Next.js & Tailwind development",
      "SEO-optimized structure",
      "Mobile-first responsive design",
      "Sub-2s load time guarantee",
    ],
  },
  {
    id: "creative",
    title: "Creative & Copy",
    description:
      "Scroll-stopping ad creatives, video scripts, and copy that speaks directly to your ideal customer and drives action.",
    icon: { name: "PenTool" },
    variant: "gradient-purple",
    category: "creative-growth",
    categoryLabel: "Creative & Growth",
    badge: "High Engagement",
    features: [
      "Ad creative design & video editing",
      "Persuasive copywriting frameworks",
      "UGC-style content production",
      "Creative performance analysis",
    ],
  },
  {
    id: "app-dev",
    title: "App Development",
    description:
      "iOS, Android & web apps built to scale. From MVP to full product, we ship fast, modern apps that align with your growth goals.",
    icon: { name: "Smartphone" },
    variant: "gradient-orange",
    category: "creative-growth",
    categoryLabel: "Creative & Growth",
    features: [
      "Cross-platform iOS & Android apps",
      "Fast MVP launches",
      "API & backend integration",
      "Analytics & push notification setup",
    ],
  },
  {
    id: "consulting",
    title: "Ad Consulting",
    description:
      "For businesses with in-house teams who need expert guidance. Strategy audits, team training, and growth roadmapping.",
    icon: { name: "Lightbulb" },
    variant: "gradient-green",
    category: "creative-growth",
    categoryLabel: "Creative & Growth",
    features: [
      "Full account audit & gap analysis",
      "Scalable growth roadmap",
      "Team training & SOP creation",
      "Monthly strategy reviews",
    ],
  },
]
