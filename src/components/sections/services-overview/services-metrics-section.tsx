"use client"

import { motion } from "framer-motion"
import { Users, MailCheck, TrendingUp, DollarSign, Award, Repeat } from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"

const SUCCESS_METRICS = [
  { id: "m1", title: "Traffic & CTR", metric: "High Intent", icon: Users, desc: "Measuring CTR and PPC cost efficiency across Meta and Google Ads." },
  { id: "m2", title: "Verified Leads", metric: "60s Sync", icon: MailCheck, desc: "Tracking qualified form fills, WhatsApp chats, and instant CRM routing." },
  { id: "m3", title: "Conversion Rate", metric: "3x - 5x Avg", icon: TrendingUp, desc: "Optimizing sub-2s mobile loading speeds and headline message match." },
  { id: "m4", title: "Sales Close", metric: "Fast Pipeline", icon: DollarSign, desc: "Measuring lead-to-deal conversion rates and call response times." },
  { id: "m5", title: "ROAS & Margin", metric: "Direct ROI", icon: Award, desc: "Tracking direct Return on Ad Spend and net profit margins." },
  { id: "m6", title: "Customer LTV", metric: "Repeat Orders", icon: Repeat, desc: "Automating post-purchase sequences for repeat customer retention." },
]

export function ServicesMetricsSection() {
  return (
    <section id="success-metrics" className="relative py-20 lg:py-28 bg-white text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Measurable Growth"
          title="Core Success Metrics We Track"
          description="We measure success by net profit KPIs that scale your business."
          align="center"
          tone="light"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUCCESS_METRICS.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 100px 0px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-primary border border-blue-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {item.metric}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
