"use client"

import { motion } from "framer-motion"
import { IconWrapper } from "@/components/common/icon-wrapper"
import * as IconsModule from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceIconProps {
  name: string
  variant?: "gradient-blue" | "gradient-orange" | "gradient-green" | "gradient-purple"
}

export function ServiceIcon({ name, variant = "gradient-blue" }: ServiceIconProps) {
  const Icon = ((IconsModule as unknown as Record<string, LucideIcon>)[name] || IconsModule.HelpCircle) as LucideIcon

  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="flex-shrink-0"
    >
      <IconWrapper variant={variant} size="md" className="shadow-[0_8px_24px_rgba(26,111,255,0.2)]">
        <Icon className="h-5 w-5" />
      </IconWrapper>
    </motion.div>
  )
}
