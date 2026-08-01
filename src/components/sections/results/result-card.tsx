"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/common/glass-card"
import type { ResultCard as ResultCardType } from "@/types/results"

interface ResultCardProps {
  result: ResultCardType
  index: number
}

export function ResultCard({ result, index }: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <GlassCard variant="dark" hover="lift" className="h-full p-6">
        <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.12em] text-primary-light">
          {result.tag}
        </span>
        <ul className="mb-4 flex flex-col gap-3">
          {result.stats.map((stat) => (
            <li key={stat.label} className="flex items-center justify-between gap-4">
              <span className="text-[0.78rem] text-white/55">{stat.label}</span>
              <span className="font-serif text-[1.05rem] font-bold text-white">{stat.value}</span>
            </li>
          ))}
        </ul>
        <hr className="mb-4 border-white/10" />
        <p className="text-[0.82rem] leading-relaxed text-white/45">{result.note}</p>
      </GlassCard>
    </motion.div>
  )
}
