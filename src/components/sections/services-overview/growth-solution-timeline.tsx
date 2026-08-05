"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Target, Zap, Layers, MessageSquare, Repeat, LineChart } from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"

const TIMELINE_STEPS = [
  {
    stepNumber: "01",
    title: "Traffic Generation",
    icon: Target,
    badge: "Paid Media",
    description: "Capturing commercial intent on Meta (FB & IG) and Google Search/YouTube with scroll-stopping ad copy.",
    keyActions: ["Audience targeting", "3s hook video creatives", "Continuous A/B testing"],
  },
  {
    stepNumber: "02",
    title: "Lead Capture",
    icon: Zap,
    badge: "Landing Pages",
    description: "Directing clicks to speed-optimized landing pages engineered for a single focused action.",
    keyActions: ["Sub-2s page load speed", "Single focused CTA", "Mobile-first UX"],
  },
  {
    stepNumber: "03",
    title: "Conversion Funnels",
    icon: Layers,
    badge: "Automation",
    description: "Guiding leads through qualification forms and instant automated WhatsApp/email touchpoints.",
    keyActions: ["Instant WhatsApp automation", "Multi-step qualification", "Retargeting triggers"],
  },
  {
    stepNumber: "04",
    title: "Sales Close",
    icon: MessageSquare,
    badge: "CRM Sync",
    description: "Handing pre-qualified leads directly to your sales team or CRM for fast closing.",
    keyActions: ["Real-time CRM sync", "Lead quality scoring", "Automated appointment booking"],
  },
  {
    stepNumber: "05",
    title: "Customer Retention",
    icon: Repeat,
    badge: "LTV Expansion",
    description: "Turning buyers into repeat clients through automated email flows and remarketing.",
    keyActions: ["Post-purchase email flows", "Cross-sell / Upsell offers", "Dynamic retargeting"],
  },
  {
    stepNumber: "06",
    title: "Compounding Growth",
    icon: LineChart,
    badge: "Predictable Scale",
    description: "Reinvesting profits with data precision to lower CPA and scale overall revenue.",
    keyActions: ["Predictable unit economics", "ROAS dashboard", "Sustainable revenue scale"],
  },
]

export function GrowthSolutionTimeline() {
  return (
    <section id="solution-timeline" className="relative py-20 lg:py-28 bg-[#f8fafc] text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="The Blueprint"
          title="How Ads Pro India Solves This"
          description="We connect every stage of the customer journey into a synchronized growth pipeline."
          align="center"
          tone="light"
        />

        {/* Timeline Container */}
        <div className="mt-14 space-y-6">
          {TIMELINE_STEPS.map((step, idx) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 100px 0px" }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-primary/40 hover:shadow-md transform-gpu transition-colors duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-primary border border-blue-200 font-mono font-extrabold text-sm">
                    {step.stepNumber}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {step.badge}
                      </span>
                    </div>
                    <h3 className="mt-1 font-serif text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Icon className="h-4.5 w-4.5 text-primary" />
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-slate-600 font-sans max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col gap-1.5 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 shrink-0">
                  {step.keyActions.map((act) => (
                    <span key={act} className="inline-flex items-center gap-1 text-xs sm:text-sm text-slate-700 font-mono font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> {act}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
