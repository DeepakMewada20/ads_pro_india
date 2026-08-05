"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/common/glass-card"
import { TrendingUp, ArrowRight } from "lucide-react"

interface ExtendedResultCard {
  id: string
  category: string
  tag: string
  clientName?: string
  beforeMetric?: string
  afterMetric?: string
  stats: Array<{ value: string; label: string }>
  note: string
}

interface ResultCardProps {
  result: ExtendedResultCard
  index: number
}

export function ResultCard({ result, index }: ResultCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="h-full"
    >
      <GlassCard variant="dark" hover="lift" className="relative flex h-full flex-col p-6 rounded-2xl border border-white/10 bg-[#0d121f]">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-primary-light">
            {result.tag}
          </span>
          {result.clientName && (
            <span className="text-xs text-gray-400 font-medium">{result.clientName}</span>
          )}
        </div>

        {/* Before vs After Metric Banner */}
        {result.beforeMetric && result.afterMetric && (
          <div className="my-3 flex items-center justify-between rounded-xl bg-white/5 p-3 text-xs border border-white/10">
            <div className="text-gray-400">
              <span className="block text-[10px] uppercase font-bold text-red-400">Before</span>
              <span className="line-through">{result.beforeMetric}</span>
            </div>
            <ArrowRight className="h-4 w-4 text-emerald-400 shrink-0" />
            <div className="text-right">
              <span className="block text-[10px] uppercase font-bold text-emerald-400">After Ads Pro</span>
              <span className="font-bold text-white flex items-center gap-1 justify-end">
                <TrendingUp className="h-3 w-3 text-emerald-400" /> {result.afterMetric}
              </span>
            </div>
          </div>
        )}

        <ul className="my-3 space-y-2.5">
          {result.stats.map((stat) => (
            <li key={stat.label} className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
              <span className="text-gray-400">{stat.label}</span>
              <span className="font-serif text-base font-extrabold text-white">{stat.value}</span>
            </li>
          ))}
        </ul>

        <p className="mt-auto pt-3 text-xs leading-relaxed text-gray-400">{result.note}</p>
      </GlassCard>
    </motion.div>
  )
}
