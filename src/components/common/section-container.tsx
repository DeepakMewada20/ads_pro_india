import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionContainerProps {
  children: ReactNode
  id?: string
  className?: string
  background?: "white" | "off" | "dark" | "gradient"
}

const backgrounds = {
  white: "bg-white",
  off: "bg-off",
  dark: "bg-ink text-white",
  gradient: "bg-gradient-to-b from-off to-white",
}

export function SectionContainer({ children, id, className, background = "white" }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 py-[70px] sm:px-6 lg:px-0 lg:py-[110px]",
        backgrounds[background],
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </section>
  )
}
