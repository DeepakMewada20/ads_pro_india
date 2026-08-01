import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface IconWrapperProps {
  children: ReactNode
  variant?: "blue" | "orange" | "green" | "purple" | "gradient-blue" | "gradient-orange" | "gradient-green" | "gradient-purple"
  size?: "sm" | "md" | "lg"
  className?: string
}

const bgVariants = {
  blue: "bg-primary-bg border-border-blue",
  orange: "bg-[#fff3e8]",
  green: "bg-[#e8fff2]",
  purple: "bg-[#f3e8ff]",
  "gradient-blue": "bg-gradient-to-br from-[#4d94ff] to-[#1a6fff] text-white",
  "gradient-orange": "bg-gradient-to-br from-[#ffb066] to-[#f57c00] text-white",
  "gradient-green": "bg-gradient-to-br from-[#4de38a] to-[#00a854] text-white",
  "gradient-purple": "bg-gradient-to-br from-[#c49bff] to-[#7c3aed] text-white",
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
