"use client"

import * as IconsModule from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceIconProps {
  name: string
}

export function ServiceIcon({ name }: ServiceIconProps) {
  const Icon = ((IconsModule as unknown as Record<string, LucideIcon>)[name] || IconsModule.HelpCircle) as LucideIcon

  return (
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-primary-bg">
      <Icon className="h-5 w-5 text-primary" />
    </div>
  )
}
