import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
  as?: "div" | "section"
  id?: string
}

export function ResponsiveContainer({ children, className, as: Tag = "div", id }: ResponsiveContainerProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-0",
        className,
      )}
    >
      {children}
    </Tag>
  )
}
