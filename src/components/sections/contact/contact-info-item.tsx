"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { IconWrapper } from "@/components/common/icon-wrapper"
import { MessageCircle, Globe, Phone } from "lucide-react"
import type { ContactInfoItem as ContactInfoItemType } from "@/types/contact"

const iconMap = {
  MessageCircle,
  Globe,
  Phone,
} as const

interface ContactInfoItemProps {
  info: ContactInfoItemType
}

export function ContactInfoItem({ info }: ContactInfoItemProps) {
  const Icon = iconMap[info.icon as keyof typeof iconMap]

  return (
    <motion.a
      href={info.href}
      target={info.href.startsWith("http") ? "_blank" : undefined}
      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cn(
        "group flex items-center gap-4 rounded-xl border border-border/60 bg-white/70 p-4 transition-all duration-300",
        "hover:border-primary/30 hover:bg-white hover:shadow-[0_4px_20px_rgba(26,111,255,0.08)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
      )}
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <IconWrapper variant={info.variant} size="md">
        <Icon className="h-5 w-5" />
      </IconWrapper>
      <div>
        <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.15em] text-muted">
          {info.label}
        </p>
        <p className="font-sans text-sm font-semibold text-ink">{info.value}</p>
      </div>
    </motion.a>
  )
}
