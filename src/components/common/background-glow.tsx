"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BackgroundGlowProps {
  variant?: "blue" | "gradient"
  position?: "top-right" | "bottom-left" | "center"
  className?: string
}

const positions = {
  "top-right": "-top-[200px] -right-[100px]",
  "bottom-left": "-bottom-[200px] -left-[100px]",
  center: "top-1/3 left-1/2 -translate-x-1/2",
}

const variants = {
  blue: "bg-[radial-gradient(circle_at_40%_40%,rgba(26,111,255,0.28),rgba(26,111,255,0.06)_50%,transparent_70%)]",
  gradient:
    "bg-[radial-gradient(circle,rgba(77,148,255,0.15),transparent_65%)]",
}

export function BackgroundGlow({ variant = "blue", position = "top-right", className }: BackgroundGlowProps) {
  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute rounded-full",
        positions[position],
        variants[variant],
        className,
      )}
      animate={{
        scale: [1, 1.08, 1],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}
