"use client"

import { motion } from "framer-motion"
import { Users, MailCheck, TrendingUp, DollarSign, Award, Repeat, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"

const SUCCESS_METRICS = [
  {
    id: "metric-traffic",
    title: "Traffic Volume & CTR",
    metric: "High-Intent Hits",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    description: "Measuring Click-Through Rates (CTR), impression volume, and Pay-Per-Click cost efficiency across Meta and Google Ads.",
    impact: "Lowers Cost Per Click (CPC)",
  },
  {
    id: "metric-leads",
    title: "Verified Lead Capture",
    metric: "60s Instant Sync",
    icon: MailCheck,
    color: "from-indigo-500 to-blue-600",
    description: "Tracking qualified phone/email form fills, WhatsApp chats, and instant CRM routing performance.",
    impact: "Predictable Daily Pipeline",
  },
  {
    id: "metric-conversion",
    title: "Landing Page Conversion Rate",
    metric: "3x - 5x Industry Avg",
    icon: TrendingUp,
    color: "from-purple-500 to-indigo-500",
    description: "Optimizing sub-2s mobile loading speeds, headline message match, and friction-free call-to-actions.",
    impact: "Maximized Clicks-to-Leads Ratio",
  },
  {
    id: "metric-sales",
    title: "Pipeline Sales Conversion",
    metric: "Accelerated Close",
    icon: DollarSign,
    color: "from-amber-500 to-orange-500",
    description: "Measuring lead-to-deal conversion rates, sales team call response times, and pre-qualified closing speed.",
    impact: "Higher Lead-to-Sale Conversion",
  },
  {
    id: "metric-roi",
    title: "Return on Ad Spend (ROAS)",
    metric: "Compounding Profit",
    icon: Award,
    color: "from-emerald-500 to-teal-500",
    description: "Tracking direct Return on Ad Spend (ROAS), net profit margins, and Customer Acquisition Cost (CPA).",
    impact: "Transparent Revenue Attribution",
  },
  {
    id: "metric-retention",
    title: "Customer Lifetime Value (LTV)",
    metric: "Repeat Revenue",
    icon: Repeat,
    color: "from-teal-500 to-green-500",
    description: "Automating post-purchase email & WhatsApp sequences to drive repeat buyers and long-term customer retention.",
    impact: "Compounding Business Margin",
  },
]

export function ServicesMetricsSection() {
  return (
    <section id="success-metrics" className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden border-t border-white/10">
      {/* Glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Measurable Growth"
          title="Core Success Metrics We Track"
          description="We don't measure success by vanity likes or passive impressions. We track the exact revenue KPIs that drive your business growth."
          align="center"
          tone="dark"
        />

        {/* 6 Metrics Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SUCCESS_METRICS.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-3xl border border-white/10 bg-slate-900/80 p-7 backdrop-blur-xl hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                    {item.metric}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-slate-400 font-sans">
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="text-slate-500">Target Outcome</span>
                  <span className="text-blue-400 flex items-center gap-1 font-semibold">
                    {item.impact} <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
