"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, TrendingUp, Users, Target, Layers, Globe, Zap } from "lucide-react"
import { AnimatedButton } from "@/components/common/animated-button"
import { SectionHeading } from "@/components/common/section-heading"
import { BackgroundGlow } from "@/components/common/background-glow"

const FLOW_STEPS = [
  { id: "visitors", label: "Visitors", icon: Users, desc: "Cold Traffic", color: "from-blue-500 to-cyan-400" },
  { id: "ads", label: "Ads", icon: Target, desc: "Meta & Google", color: "from-indigo-500 to-blue-500" },
  { id: "landing", label: "Landing Pages", icon: Globe, desc: "High Intent", color: "from-violet-500 to-indigo-500" },
  { id: "leadgen", label: "Lead Gen", icon: Zap, desc: "Instant Sync", color: "from-amber-500 to-orange-500" },
  { id: "funnels", label: "Funnels", icon: Layers, desc: "Automated Nurture", color: "from-purple-500 to-pink-500" },
  { id: "web-app", label: "Website / App", icon: Globe, desc: "Brand Hub", color: "from-emerald-500 to-teal-400" },
  { id: "customers", label: "Customers", icon: Users, desc: "Paid Conversions", color: "from-blue-600 to-indigo-600" },
  { id: "growth", label: "Business Growth", icon: TrendingUp, desc: "Compounding ROAS", color: "from-emerald-400 to-green-500" },
]

export function ServicesOverviewHero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-slate-950 text-white">
      {/* Dynamic Background Glows */}
      <BackgroundGlow variant="blue" position="top-right" />
      <BackgroundGlow variant="gradient" position="bottom-left" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Unified Growth Infrastructure</span>
          </div>
        </motion.div>

        {/* Hero Title & Subtitle */}
        <div className="mt-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto"
          >
            Everything Your Business Needs to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              Grow Online
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-sans"
          >
            We don't simply build websites or run advertisements. We create complete digital growth systems that attract visitors, generate leads, convert customers and help businesses scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <AnimatedButton href="#ecosystem" variant="primary" className="gap-2">
              Explore Ecosystem <ArrowRight className="h-4 w-4" />
            </AnimatedButton>
            <AnimatedButton href="#why-fail" variant="ghost" className="text-white border-white/20 hover:border-white/50">
              Why Normal Agencies Fail
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Modern Interactive Flow Diagram Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">digital-growth-flow.system</span>
            </div>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              Live Connected Engine
            </span>
          </div>

          {/* Desktop Connected Flow Nodes */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 relative">
            {FLOW_STEPS.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={step.id} className="relative group flex flex-col items-center text-center">
                  <div className="w-full rounded-2xl border border-white/10 bg-slate-800/60 p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-md mb-3`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-xs font-bold text-white tracking-wide">{step.label}</h4>
                    <p className="mt-1 text-[10px] font-medium text-slate-400">{step.desc}</p>
                  </div>

                  {/* Flow Arrow for non-last items */}
                  {idx < FLOW_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <div className="flex items-center text-blue-400/80 animate-pulse">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Bottom Summary Bar */}
          <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-950/40 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
              <span>Each stage is engineered to seamlessly hand off users to the next touchpoint.</span>
            </div>
            <div className="font-mono text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-md">
              Target Outcome: Predictable ROAS & Scale
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
