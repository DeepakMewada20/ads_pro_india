"use client"

import { motion } from "framer-motion"
import { IconWrapper } from "@/components/common/icon-wrapper"
import { Users, IndianRupee, TrendingUp, Star } from "lucide-react"
import type { IconStat } from "@/types/icon-stats"

const iconMap = {
  Users,
  IndianRupee,
  TrendingUp,
  Star,
} as const

interface IconStatItemProps {
  stat: IconStat
  index: number
}

export function IconStatItem({ stat, index }: IconStatItemProps) {
  const Icon = iconMap[stat.icon as keyof typeof iconMap]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-7 text-center backdrop-blur-[12px] transition-colors duration-300 hover:border-primary/40 hover:bg-white/[0.06] sm:py-8"
    >
      <IconWrapper variant={stat.variant} size="md" className="shadow-[0_8px_24px_rgba(26,111,255,0.25)]">
        <Icon className="h-5 w-5" />
      </IconWrapper>
      <div className="font-serif text-[clamp(1.4rem,3vw,2rem)] font-extrabold leading-none text-white">
        {stat.value}
      </div>
      <div className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.15em] text-white/40">
        {stat.label}
      </div>
    </motion.div>
  )
}
