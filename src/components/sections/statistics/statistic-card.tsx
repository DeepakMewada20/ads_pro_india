"use client"

import { useReveal } from "@/hooks/useReveal"
import { useCounter } from "@/hooks/useCounter"
import type { Stat } from "@/types/common"

interface StatisticCardProps {
  stat: Stat
}

export function StatisticCard({ stat }: StatisticCardProps) {
  const raw = String(stat.value)
  const numMatch = raw.match(/(\d+(?:\.\d+)?)/)
  const numValue = numMatch ? parseFloat(numMatch[1]) : 0
  const isCrore = raw.includes("Cr")
  const isPlus = raw.includes("+")
  const displayValue = String(stat.prefix ?? "") + raw

  const { ref, isVisible } = useReveal({ amount: 0 })
  const counter = useCounter({
    target: numValue,
    duration: 1800,
    suffix: isPlus ? "+" : "",
    prefix: stat.prefix ?? "",
  })

  if (isVisible && !counter.isAnimating && counter.count === 0) {
    counter.animate()
  }

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md transition-colors duration-300 hover:bg-white/10"
    >
      <div className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-none text-white">
        {isCrore ? displayValue : (counter.isAnimating ? counter.display : displayValue)}
      </div>
      <div className="mt-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.06em] text-white/60">
        {stat.label}
      </div>
    </div>
  )
}
