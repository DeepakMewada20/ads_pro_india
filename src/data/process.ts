import type { ProcessStep } from "@/types/process"

export const processSteps: ProcessStep[] = [
  {
    id: "strategy",
    number: 1,
    icon: "Target",
    title: "Plan Your Growth",
    description:
      "Book a free 30-min strategy call. We audit your current marketing, identify leaks, and build a custom growth blueprint for your business — no strings attached.",
    tag: "Free Strategy Call",
  },
  {
    id: "execution",
    number: 2,
    icon: "Rocket",
    title: "We Launch & Optimise",
    description:
      "We build your campaigns, creatives, and funnels — then launch within days, not weeks. Every rupee is tracked, tested, and optimised in real time.",
    tag: "Launch in 3–5 Days",
  },
  {
    id: "scale",
    number: 3,
    icon: "TrendingUp",
    title: "Count Your Profits",
    description:
      "Watch your leads, sales and revenue grow week by week. You get full transparent reporting — so you always know exactly what your money is doing.",
    tag: "Real ROI. Always.",
  },
]
