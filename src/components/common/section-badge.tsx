import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionBadgeProps {
  children: ReactNode
  variant?: "default" | "blue" | "dark" | "success" | "danger"
  className?: string
}

const variants = {
  default: "bg-primary-bg text-primary border-border-blue",
  blue: "bg-primary text-white",
  dark: "bg-ink text-white",
  success: "bg-green-50 text-success",
  danger: "bg-red-50 text-danger",
}

export function SectionBadge({ children, variant = "default", className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.62rem] font-medium uppercase tracking-[0.08em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
