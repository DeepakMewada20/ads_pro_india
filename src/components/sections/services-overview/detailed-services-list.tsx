"use client"

import { DETAILED_SERVICES_DATA } from "@/data/detailed-services"
import { DetailedServiceCard } from "./detailed-service-card"
import { SectionHeading } from "@/components/common/section-heading"

export function DetailedServicesList() {
  return (
    <section id="capabilities-breakdown" className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden border-t border-white/5">
      {/* Soft Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Capabilities Breakdown"
          title="Explore Every Service in Our Growth Engine"
          description="A sleek overview of how each service functions, key deliverables, and ecosystem integration."
          align="center"
          tone="dark"
        />

        {/* 9 Services */}
        <div className="mt-14 space-y-8">
          {DETAILED_SERVICES_DATA.map((service, idx) => (
            <DetailedServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
