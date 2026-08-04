"use client"

import { motion } from "framer-motion"
import { AlertTriangle, ArrowUpRight, CheckCircle2, ShieldAlert, XCircle } from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"
import { GlassCard } from "@/components/common/glass-card"

const FAILURE_CARDS = [
  {
    id: "ads-no-landing",
    title: "Running Ads Without a Landing Page",
    tagline: "The Leaky Bucket Trap",
    problem: "Sending expensive paid ad traffic to a generic homepage with 20 navigation links and no single clear call-to-action.",
    impact: "High bounce rates, wasted ad spend, low lead output.",
    systemFix: "Purpose-built, high-converting landing pages tailored to specific ad messaging & intent.",
  },
  {
    id: "website-no-traffic",
    title: "Having a Website But No Traffic",
    tagline: "The Ghost Town Store",
    problem: "Investing lakhs into a stylish website that sits alone in the digital desert with zero steady visitors.",
    impact: "Zero ROI, zero inquiries, stagnant digital presence.",
    systemFix: "Multi-channel Meta & Google search campaigns driving targeted, high-intent traffic daily.",
  },
  {
    id: "leads-no-followup",
    title: "Getting Leads But No Follow-Up",
    tagline: "The Lost Opportunity Crisis",
    problem: "Generating lead forms on Facebook but taking 24-48 hours to call or email them manually.",
    impact: "80% of leads turn cold, competitor steals the deal.",
    systemFix: "Instant automated WhatsApp, SMS & email nurturing sequences within 60 seconds.",
  },
  {
    id: "no-conversion-strategy",
    title: "No Conversion Strategy",
    tagline: "Relying on Hope & Luck",
    problem: "Treating digital marketing as isolated random tasks instead of an interconnected conversion funnel.",
    impact: "Unpredictable revenue, high acquisition costs, scale limits.",
    systemFix: "End-to-end growth funnel tracking every touchpoint from cold view to closed sale.",
  },
]

export function WhyBusinessesFail() {
  return (
    <section id="why-fail" className="relative py-20 lg:py-28 bg-slate-50 dark:bg-[#060914] overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 rounded-full bg-red-500/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Growth Gap"
          title={
            <>
              Why Businesses <span className="text-red-500 dark:text-red-400">Fail Online</span>
            </>
          }
          description="Most agencies sell isolated services. When these components aren't connected, ad budget gets wasted and potential customers slip through the cracks."
          align="center"
        />

        {/* 4 Premium Cards Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {FAILURE_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard
                variant="light"
                className="h-full border-red-200/60 dark:border-red-500/20 bg-white/90 dark:bg-slate-900/90 p-7 shadow-lg hover:border-red-400/60 transition-all duration-300 group"
              >
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-red-100 dark:bg-red-950/60 px-3 py-1 text-xs font-bold text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/40">
                    <XCircle className="h-3.5 w-3.5" />
                    <span>{card.tagline}</span>
                  </div>
                  <span className="font-mono text-xs text-slate-400">0{idx + 1}</span>
                </div>

                {/* Card Title */}
                <h3 className="mt-4 font-serif text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  {card.title}
                </h3>

                {/* Problem & Impact Breakdown */}
                <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="rounded-xl bg-slate-100/80 dark:bg-slate-800/60 p-3.5 border border-slate-200/50 dark:border-white/5">
                    <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                      <ShieldAlert className="h-3.5 w-3.5 text-amber-500" />
                      The Disconnected Problem
                    </div>
                    <p>{card.problem}</p>
                  </div>
                </div>

                {/* System Fix */}
                <div className="mt-5 rounded-xl border border-emerald-200 dark:border-emerald-500/20 bg-emerald-50/60 dark:bg-emerald-950/30 p-3.5">
                  <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    Ads Pro System Solution
                  </div>
                  <p className="text-xs font-medium text-slate-700 dark:text-emerald-200">{card.systemFix}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
