"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/common/glass-card"
import { AnimatedButton } from "@/components/common/animated-button"
import { TrendingDown, TrendingUp } from "lucide-react"
import { whyMetrics, whyCTA } from "@/data/why"
import { cn } from "@/lib/utils"

export function WhyMetrics() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
    >
      <GlassCard variant="dark" hover="none" className="p-7 sm:p-8">
        <ul className="flex flex-col gap-6">
          {whyMetrics.map((metric) => {
            const Trending = metric.direction === "up" ? TrendingUp : TrendingDown
            return (
              <li key={metric.id} className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[0.78rem] text-white/50">{metric.label}</div>
                  <div className="font-serif text-[1.6rem] font-extrabold leading-tight text-white">
                    {metric.value}
                  </div>
                </div>
                <span
                  className={cn(
                    "flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[0.7rem] font-medium",
                    metric.direction === "up"
                      ? "bg-success/15 text-[#4de38a]"
                      : "bg-danger/15 text-[#ff8a8a]",
                  )}
                >
                  <Trending className="h-3.5 w-3.5" />
                  {metric.delta}
                </span>
              </li>
            )
          })}
        </ul>
        <hr className="my-6 border-white/10" />
        <p className="mb-4 text-[0.85rem] leading-relaxed text-white/55">{whyCTA.text}</p>
        <AnimatedButton href={whyCTA.button.href} variant="dark" className="w-full justify-center">
          {whyCTA.button.label}
        </AnimatedButton>
      </GlassCard>
    </motion.div>
  )
}
