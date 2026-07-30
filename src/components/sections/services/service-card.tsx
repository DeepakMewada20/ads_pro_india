"use client"

import { GlassCard } from "@/components/common/glass-card"
import { ServiceIcon } from "./service-icon"
import { ServiceFeatures } from "./service-features"
import { ServiceCta } from "./service-cta"
import type { Service } from "@/types/service"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <GlassCard variant="light" hover="lift" className="group flex h-full flex-col p-6">
      <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary to-primary-light transition-all duration-500 group-hover:w-full" />

      <ServiceIcon name={service.icon.name} />

      <h3 className="font-serif text-[1.15rem] font-bold text-ink">{service.title}</h3>

      <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{service.description}</p>

      <ServiceFeatures features={service.features ?? []} />

      <div className="mt-auto">
        <ServiceCta href={`#${service.id}`} label="Learn More" />
      </div>
    </GlassCard>
  )
}
