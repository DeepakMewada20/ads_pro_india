import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GridContainerProps {
  children: ReactNode
  cols?: 2 | 3 | 4
  gap?: string
  className?: string
}

const colClasses = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
}

export function GridContainer({ children, cols = 3, gap = "gap-6", className }: GridContainerProps) {
  return (
    <div className={cn("grid", colClasses[cols], gap, className)}>
      {children}
    </div>
  )
}
