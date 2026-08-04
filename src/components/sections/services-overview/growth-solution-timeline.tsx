"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Flame, Layers, LineChart, MessageSquare, Repeat, Target, Zap } from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"
import { BackgroundGlow } from "@/components/common/background-glow"

const TIMELINE_STEPS = [
  {
    stepNumber: "01",
    title: "Traffic Generation",
    icon: Target,
    badge: "Paid Media Engine",
    color: "from-blue-500 to-indigo-600",
    description: "Capturing high-intent prospective buyers via targeted Meta (FB & IG) ads, Google Search, Shopping, and YouTube campaigns.",
    keyActions: ["Audience persona targeting", "Scroll-stopping ad copy & UGC", "Continuous A/B testing"],
  },
  {
    stepNumber: "02",
    title: "Lead Capture",
    icon: Zap,
    badge: "Landing Page Architecture",
    color: "from-indigo-500 to-purple-600",
    description: "Directing traffic to speed-optimized, purpose-built landing pages designed for a single action: capturing lead intent.",
    keyActions: ["Sub-2s page load speeds", "Single focused offer & CTA", "Mobile-first UX responsive layout"],
  },
  {
    stepNumber: "03",
    title: "Conversion Funnels",
    icon: Layers,
    badge: "Nurturing Infrastructure",
    color: "from-purple-500 to-pink-600",
    description: "Guiding leads through multi-step qualification forms and instant automated WhatsApp / Email touchpoints within 60 seconds.",
    keyActions: ["Instant WhatsApp automation", "Multi-step qualification forms", "Retargeting pixel triggers"],
  },
  {
    stepNumber: "04",
    title: "Sales Close",
    icon: MessageSquare,
    badge: "Pipeline Conversion",
    color: "from-amber-500 to-orange-600",
    description: "Handing off pre-qualified, warm leads directly to your sales team or CRM with full context so closing rate sky-rockets.",
    keyActions: ["Real-time CRM lead sync", "Lead quality scoring", "Automated appointment booking"],
  },
  {
    stepNumber: "05",
    title: "Customer Retention",
    icon: Repeat,
    badge: "LTV Expansion",
    color: "from-emerald-500 to-teal-600",
    description: "Turning one-time buyers into loyal repeat clients through automated post-purchase email flows and remarketing campaigns.",
    keyActions: ["Post-purchase email sequences", "Cross-sell / Upsell offers", "Dynamic retargeting ads"],
  },
  {
    stepNumber: "06",
    title: "Compounding Growth",
    icon: LineChart,
    badge: "Predictable Scale",
    color: "from-emerald-400 to-green-500",
    description: "Reinvesting profits with data-backed precision to lower Customer Acquisition Cost (CPA) and scale overall business revenue.",
    keyActions: ["Predictable unit economics", "ROAS optimization dashboard", "Sustainable revenue scaling"],
  },
]

export function GrowthSolutionTimeline() {
  return (
    <section id="solution-timeline" className="relative py-20 lg:py-28 bg-white dark:bg-[#060914] overflow-hidden border-t border-b border-slate-200/60 dark:border-white/5">
      <BackgroundGlow variant="blue" position="top-right" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Solution Blueprint"
          title="How Ads Pro India Solves This"
          description="We connect every stage of the customer journey into a synchronized growth pipeline. Here is how your business transforms step by step."
          align="center"
        />

        {/* Process Flow Line + Timeline Container */}
        <div className="mt-16 relative">
          {/* Vertical Connecting Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full opacity-30 pointer-events-none" />

          <div className="space-y-12 lg:space-y-16 relative">
            {TIMELINE_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0
              const Icon = step.icon

              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step Content Box */}
                  <div className="w-full lg:w-1/2">
                    <div className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/80 p-6 sm:p-8 shadow-xl backdrop-blur-md hover:border-blue-500/40 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold tracking-wider text-primary uppercase bg-blue-100 dark:bg-blue-950/60 px-3 py-1 rounded-md border border-blue-200 dark:border-blue-800/40">
                          {step.badge}
                        </span>
                        <span className="text-xl font-extrabold font-mono text-slate-300 dark:text-slate-600">
                          Step {step.stepNumber}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-md`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Key Action Points */}
                      <div className="mt-5 space-y-2 pt-4 border-t border-slate-200/60 dark:border-white/5">
                        {step.keyActions.map((action) => (
                          <div key={action} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                            <span>{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Timeline Badge Indicator */}
                  <div className="relative flex items-center justify-center shrink-0">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 shadow-xl`}>
                      <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950 text-white font-mono font-bold text-sm">
                        {step.stepNumber}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for desktop layout balance */}
                  <div className="hidden lg:block w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
