import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface IconWrapperProps {
  children: ReactNode
  variant?: "blue" | "orange" | "green" | "purple"
  size?: "sm" | "md" | "lg"
  className?: string
}

const bgVariants = {
  blue: "bg-primary-bg border-border-blue",
  orange: "bg-[#fff3e8]",
  green: "bg-[#e8fff2]",
  purple: "bg-[#f3e8ff]",
}

const sizes = {
  sm: "h-10 w-10 text-base rounded-[10px]",
  md: "h-12 w-12 text-lg rounded-[12px]",
  lg: "h-14 w-14 text-xl rounded-[14px]",
}

export function IconWrapper({ children, variant = "blue", size = "md", className }: IconWrapperProps) {
  return (
    <div
      className={cn(
        "flex flex-shrink-0 items-center justify-center",
        bgVariants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  )
}
