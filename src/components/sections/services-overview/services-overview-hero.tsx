"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, TrendingUp, Users, Target, Layers, Globe, Zap } from "lucide-react"
import { AnimatedButton } from "@/components/common/animated-button"

const FLOW_STEPS = [
  { label: "Visitors", icon: Users },
  { label: "Ads", icon: Target },
  { label: "Landing Pages", icon: Globe },
  { label: "Lead Gen", icon: Zap },
  { label: "Customers", icon: Users },
  { label: "Growth", icon: TrendingUp },
]

export function ServicesOverviewHero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-slate-950 text-white border-b border-white/5">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-400">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Unified Growth Infrastructure</span>
          </div>
        </motion.div>

        {/* Hero Title & Subtitle */}
        <div className="mt-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto"
          >
            Everything Your Business Needs to{" "}
            <span className="text-blue-400">Grow Online</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-slate-200 leading-relaxed font-sans"
          >
            We create complete digital growth systems that attract visitors, generate leads, convert customers, and help businesses scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <AnimatedButton href="#ecosystem" variant="primary" className="py-2.5 px-6 text-sm gap-2">
              Explore Ecosystem <ArrowRight className="h-4 w-4" />
            </AnimatedButton>
            <AnimatedButton href="#why-fail" variant="ghost" className="py-2.5 px-6 text-sm text-slate-300 border-white/10 hover:border-white/30">
              Why Agencies Fail
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Minimal Flow Diagram Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 text-xs font-mono">
            <span className="text-slate-400">Digital Growth Flow Pipeline</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" /> Synchronized
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {FLOW_STEPS.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={step.label} className="rounded-xl border border-white/5 bg-slate-950 p-3 text-center">
                  <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-lg bg-blue-950 text-blue-400 border border-blue-500/20 mb-2">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-200 block">{step.label}</span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
