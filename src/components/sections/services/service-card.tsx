"use client"

import { GlassCard } from "@/components/common/glass-card"
import { ServiceIcon } from "./service-icon"
import { ServiceFeatures } from "./service-features"
import { ServiceCta } from "./service-cta"
import type { Service } from "@/types/service"
import { Sparkles } from "lucide-react"

interface ServiceCardProps {
  service: Service
  index: number
}

const variantGradients: Record<string, { line: string; bgGlow: string; badgeBg: string }> = {
  "gradient-orange": {
    line: "from-orange-500 via-amber-500 to-rose-500",
    bgGlow: "group-hover:shadow-[0_12px_40px_rgba(249,115,22,0.12)] border-orange-500/20",
    badgeBg: "bg-orange-500/10 text-orange-600 border-orange-200/50",
  },
  "gradient-blue": {
    line: "from-blue-600 via-sky-500 to-indigo-600",
    bgGlow: "group-hover:shadow-[0_12px_40px_rgba(37,99,235,0.12)] border-blue-500/20",
    badgeBg: "bg-blue-500/10 text-blue-600 border-blue-200/50",
  },
  "gradient-green": {
    line: "from-emerald-500 via-teal-500 to-green-600",
    bgGlow: "group-hover:shadow-[0_12px_40px_rgba(16,185,129,0.12)] border-emerald-500/20",
    badgeBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200/50",
  },
  "gradient-purple": {
    line: "from-purple-600 via-violet-500 to-pink-500",
    bgGlow: "group-hover:shadow-[0_12px_40px_rgba(147,51,234,0.12)] border-purple-500/20",
    badgeBg: "bg-purple-500/10 text-purple-600 border-purple-200/50",
  },
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const styles = variantGradients[service.variant || "gradient-blue"] || variantGradients["gradient-blue"]

  return (
    <GlassCard
      variant="light"
      hover="lift"
      className={`group relative flex h-full flex-col p-6.5 transition-all duration-500 hover:border-slate-300/80 ${styles.bgGlow}`}
    >
      {/* Top Animated Accent Border Line */}
      <div className={`pointer-events-none absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r ${styles.line} transition-all duration-500 group-hover:w-full`} />

      {/* Subtle Background Glow Blob on Hover */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Header Row: Category Badge / Highlight Badge / Index Counter */}
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          {service.categoryLabel && (
            <span className="rounded-md bg-slate-200/70 px-2.5 py-1 text-[0.7rem] font-bold tracking-wider text-slate-800 uppercase border border-slate-300/60">
              {service.categoryLabel}
            </span>
          )}
          {service.badge && (
            <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.8 text-[0.68rem] font-bold tracking-wide border ${styles.badgeBg}`}>
              <Sparkles className="h-2.5 w-2.5" />
              {service.badge}
            </span>
          )}
        </div>
        <span className="font-mono text-xs font-extrabold text-slate-500 transition-colors group-hover:text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Icon & Title Row */}
      <div className="mb-3 flex items-start gap-3.5">
        <ServiceIcon name={service.icon.name} variant={service.variant} />
        <div>
          <h3 className="font-serif text-[1.22rem] font-extrabold text-ink leading-snug transition-colors duration-300 group-hover:text-primary">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="mt-1 text-[0.86rem] leading-relaxed text-ink-2 font-medium">
        {service.description}
      </p>

      {/* Features List */}
      <div className="my-4 border-t border-slate-200/80 pt-3">
        <ServiceFeatures features={service.features ?? []} />
      </div>

      {/* Footer CTA */}
      <div className="mt-auto pt-2">
        <ServiceCta href={`#${service.id}`} label="Explore Service" />
      </div>
    </GlassCard>
  )
}
