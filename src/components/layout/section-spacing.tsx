import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionSpacingProps {
  children: ReactNode
  className?: string
}

export function SectionSpacing({ children, className }: SectionSpacingProps) {
  return <div className={cn("px-5 sm:px-6 lg:px-0", className)}>{children}</div>
}
