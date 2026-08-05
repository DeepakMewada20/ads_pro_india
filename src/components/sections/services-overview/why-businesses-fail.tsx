"use client"

import { motion } from "framer-motion"
import { ShieldAlert, CheckCircle2 } from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"

const FAILURE_CARDS = [
  {
    id: "ads-no-landing",
    title: "Running Ads Without a Landing Page",
    tagline: "The Leaky Bucket Trap",
    problem: "Sending paid ad traffic to a generic homepage with 20 navigation links and no single clear action.",
    systemFix: "Purpose-built, sub-2s landing pages tailored to specific ad messaging.",
  },
  {
    id: "website-no-traffic",
    title: "Having a Website But No Traffic",
    tagline: "The Ghost Town Store",
    problem: "Investing into a website that sits alone in the digital desert with zero steady visitors.",
    systemFix: "Multi-channel Meta & Google search campaigns driving targeted, high-intent traffic daily.",
  },
  {
    id: "leads-no-followup",
    title: "Getting Leads But No Follow-Up",
    tagline: "The Lost Opportunity Crisis",
    problem: "Generating lead forms on Facebook but taking 24-48 hours to call or email them manually.",
    systemFix: "Instant automated WhatsApp & email nurturing sequences within 60 seconds.",
  },
  {
    id: "no-conversion-strategy",
    title: "No Conversion Strategy",
    tagline: "Relying on Hope & Luck",
    problem: "Treating digital marketing as isolated random tasks instead of an interconnected conversion funnel.",
    systemFix: "End-to-end growth funnel tracking every touchpoint from cold click to sale.",
  },
]

export function WhyBusinessesFail() {
  return (
    <section id="why-fail" className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="The Growth Gap"
          title={
            <>
              <span className="text-white">Why Businesses</span>{" "}
              <span className="text-blue-400">Fail Online</span>
            </>
          }
          description="Most agencies sell isolated services. When these components aren't connected, ad budget gets wasted."
          align="center"
          tone="dark"
        />

        {/* 4 Minimal Dark Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {FAILURE_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="rounded-2xl border border-white/10 bg-slate-900/90 p-6 backdrop-blur-md transform-gpu hover:border-blue-500/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-500/30">
                  {card.tagline}
                </span>
                <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
              </div>

              <h3 className="mt-4 font-serif text-lg font-bold text-white">
                {card.title}
              </h3>

              <div className="mt-4 rounded-xl bg-slate-950/60 p-4 border border-white/5 text-sm sm:text-base text-slate-300">
                <div className="text-xs sm:text-sm font-bold text-slate-300 mb-1.5 flex items-center gap-1.5 font-mono">
                  <ShieldAlert className="h-4 w-4 text-amber-500" />
                  The Problem:
                </div>
                <p>{card.problem}</p>
              </div>

              <div className="mt-3 rounded-xl border border-blue-500/20 bg-blue-950/30 p-4 text-sm sm:text-base">
                <div className="text-xs sm:text-sm font-bold text-blue-400 mb-1.5 flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Ads Pro System Solution:
                </div>
                <p className="text-slate-200">{card.systemFix}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
