import { socialLinks } from "@/data/social-links"
import { MessageCircle, Globe } from "lucide-react"

const iconMap = {
  MessageCircle,
  Globe,
} as const

export function FooterSocial() {
  return (
    <div className="flex gap-3">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap]
        return (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all duration-200 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <Icon className="h-4 w-4" />
          </a>
        )
      })}
    </div>
  )
}
