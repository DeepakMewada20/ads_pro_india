import { cn } from "@/lib/utils"

interface DividerProps {
  className?: string
  variant?: "light" | "dark"
}

const variants = {
  light: "border-border",
  dark: "border-white/10",
}

export function Divider({ className, variant = "light" }: DividerProps) {
  return <hr className={cn("border-t", variants[variant], className)} />
}
