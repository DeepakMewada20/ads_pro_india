"use client"

import { motion } from "framer-motion"
import type { ServiceCategory } from "@/types/service"
import { Grid, Target, Layers, Sparkles } from "lucide-react"

interface ServiceCategoryTabsProps {
  activeCategory: ServiceCategory
  onCategoryChange: (category: ServiceCategory) => void
  counts: Record<ServiceCategory, number>
}

const categories: { id: ServiceCategory; label: string; icon: typeof Grid }[] = [
  { id: "all", label: "All Services", icon: Grid },
  { id: "paid-media", label: "Paid Media & Ads", icon: Target },
  { id: "funnels-web", label: "Funnels & Web", icon: Layers },
  { id: "creative-growth", label: "Creative & Growth", icon: Sparkles },
]

export function ServiceCategoryTabs({ activeCategory, onCategoryChange, counts }: ServiceCategoryTabsProps) {
  return (
    <div className="mb-10 flex flex-wrap items-center justify-center gap-2 px-2">
      {categories.map((tab) => {
        const Icon = tab.icon
        const isActive = activeCategory === tab.id
        const count = counts[tab.id] ?? 0

        return (
          <button
            key={tab.id}
            onClick={() => onCategoryChange(tab.id)}
            className={`group relative flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 sm:px-5 sm:text-sm ${
              isActive
                ? "text-white shadow-lg shadow-primary/25"
                : "bg-white/60 text-muted hover:bg-white/90 hover:text-ink border border-slate-200/60"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabBadge"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary-light to-blue-600"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Icon className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-white" : "text-primary"}`} />
              <span>{tab.label}</span>
              <span
                className={`ml-1 flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[0.7rem] font-bold ${
                  isActive ? "bg-white/20 text-white" : "bg-slate-100 text-muted group-hover:bg-slate-200"
                }`}
              >
                {count}
              </span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
