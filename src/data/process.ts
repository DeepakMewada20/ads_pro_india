import type { ProcessStep } from "@/types/process"

export const processSteps: ProcessStep[] = [
  {
    id: "strategy",
    number: 1,
    icon: "Search",
    title: "Audit & Strategy",
    description:
      "We analyse your current ads, funnel, and competitors. Then we build a data-backed growth plan tailored to your business goals and budget.",
    tag: "Free Audit",
  },
  {
    id: "execution",
    number: 2,
    icon: "Zap",
    title: "Execute & Optimize",
    description:
      "Our team launches campaigns, tests creatives, and optimises in real-time. We iterate fast to find winning combinations that drive ROI.",
    tag: "Ongoing",
  },
  {
    id: "scale",
    number: 3,
    icon: "TrendingUp",
    title: "Scale & Report",
    description:
      "Once we find a profitable system, we scale spend intelligently while you get transparent weekly reports with actionable insights.",
    tag: "Results-Driven",
  },
]
