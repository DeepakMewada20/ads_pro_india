"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  variant?: "light" | "dark"
  hover?: "lift" | "none"
  className?: string
  onClick?: () => void
}

export function GlassCard({ children, variant = "light", hover = "lift", className, onClick }: GlassCardProps) {
  const baseStyles =
    "rounded-2xl border backdrop-blur-[16px] relative overflow-hidden transition-colors duration-300"

  const variantStyles = {
    light:
      "bg-white/70 border-white/90 shadow-[0_4px_24px_rgba(26,111,255,0.06)]",
    dark:
      "bg-[rgba(10,12,20,0.85)] border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
  }

  return (
    <motion.div
      className={cn(baseStyles, variantStyles[variant], className)}
      whileHover={hover === "lift" ? { y: -6, boxShadow: "0 20px 60px rgba(26,111,255,0.1)" } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
