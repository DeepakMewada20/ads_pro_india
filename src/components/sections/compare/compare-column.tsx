"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/common/glass-card"
import { CompareItem } from "./compare-item"
import { X, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ComparisonColumn as ComparisonColumnType } from "@/types/compare"

const headerIcon = {
  others: X,
  us: Star,
} as const

interface CompareColumnProps {
  column: ComparisonColumnType
  index: number
}

export function CompareColumn({ column, index }: CompareColumnProps) {
  const Icon = headerIcon[column.type]
  const isUs = column.type === "us"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <GlassCard
        variant="dark"
        hover="none"
        className={cn(
          "h-full p-6 sm:p-8",
          isUs && "border-primary/40 bg-primary/[0.06]",
        )}
      >
        <div className="mb-6 flex items-center gap-3">
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full",
              isUs ? "bg-primary/20 text-primary-light" : "bg-white/5 text-white/40",
            )}
          >
            <Icon className="h-5 w-5" />
          </span>
          <h3 className={cn("font-sans text-[1.1rem] font-bold", isUs ? "text-primary-light" : "text-white/60")}>
            {column.title}
          </h3>
        </div>
        <ul className="flex flex-col gap-4">
          {column.items.map((item) => (
            <CompareItem key={item.text} item={item} muted={!isUs} />
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  )
}
