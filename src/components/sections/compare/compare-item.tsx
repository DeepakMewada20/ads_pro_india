import {
  Timer,
  Dices,
  CloudFog,
  Ghost,
  Lock,
  Banknote,
  Zap,
  BarChart3,
  TrendingUp,
  MessageCircle,
  Target,
  Handshake,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { ComparisonItem as ComparisonItemType } from "@/types/common"

const iconMap = {
  Timer,
  Dices,
  CloudFog,
  Ghost,
  Lock,
  Banknote,
  Zap,
  BarChart3,
  TrendingUp,
  MessageCircle,
  Target,
  Handshake,
} as const

type IconName = keyof typeof iconMap

interface CompareItemProps {
  item: ComparisonItemType
  muted: boolean
}

export function CompareItem({ item, muted }: CompareItemProps) {
  const Icon = iconMap[item.icon as IconName] ?? Handshake

  return (
    <li className="flex items-start gap-3">
      <Icon
        className={cn(
          "mt-0.5 h-5 w-5 flex-shrink-0",
          muted ? "text-white/30" : "text-primary-light",
        )}
      />
      <span className={cn("text-[0.85rem] leading-relaxed", muted ? "text-white/40" : "text-white/80")}>
        {item.text}
      </span>
    </li>
  )
}
