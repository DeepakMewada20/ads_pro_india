import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionHeadingProps {
  label?: string
  title: ReactNode
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({ label, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {label && (
        <div className="mb-5 inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary">
          <span className="inline-block h-px w-[22px] bg-primary" />
          {label}
        </div>
      )}
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.03em]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-[500px] text-sm leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  )
}
