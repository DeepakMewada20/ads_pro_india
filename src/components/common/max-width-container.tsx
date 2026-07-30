import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface MaxWidthContainerProps {
  children: ReactNode
  className?: string
}

export function MaxWidthContainer({ children, className }: MaxWidthContainerProps) {
  return <div className={cn("mx-auto w-full max-w-[1200px]", className)}>{children}</div>
}
