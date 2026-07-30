import * as Icons from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface AboutHighlightItemProps {
  icon: string
  text: string
}

export function AboutHighlightItem({ icon, text }: AboutHighlightItemProps) {
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[icon] || Icons.CheckCircle2

  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-primary-bg/15">
        <IconComponent className="h-3.5 w-3.5 text-primary-light" />
      </span>
      <span className="text-[0.88rem] leading-snug text-white/70">{text}</span>
    </div>
  )
}
