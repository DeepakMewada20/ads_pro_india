"use client"

import { DETAILED_SERVICES_DATA } from "@/data/detailed-services"
import { DetailedServiceCard } from "./detailed-service-card"
import { SectionHeading } from "@/components/common/section-heading"

export function DetailedServicesList() {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-100/70 dark:bg-[#060914] overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Capabilities Breakdown"
          title="Explore Every Service in Our Growth Engine"
          description="Detailed breakdown of how each core service functions, why your business needs it, and how it interlocks with our complete digital ecosystem."
          align="center"
        />

        {/* 9 Services Rendered sequentially */}
        <div className="mt-16 space-y-16 lg:space-y-24">
          {DETAILED_SERVICES_DATA.map((service, idx) => (
            <DetailedServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
