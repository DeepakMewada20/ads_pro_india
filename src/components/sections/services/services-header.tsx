import { SectionBadge } from "@/components/common/section-badge"
import { SectionHeading } from "@/components/common/section-heading"
import { AnimatedButton } from "@/components/common/animated-button"
import { ArrowRight } from "lucide-react"

export function ServicesHeader() {
  return (
    <div className="mb-14 text-center">
      <div className="mb-4 inline-flex justify-center">
        <SectionBadge variant="blue">What We Do</SectionBadge>
      </div>
      <SectionHeading
        title={
          <>
            Full-Service Performance Marketing
            <br />
            <em className="not-italic text-primary">Under One Roof</em>
          </>
        }
        description="From strategy to execution — every channel, every funnel, every creative. We handle the entire growth stack so you don't have to."
        align="center"
        className="mx-auto max-w-[650px]"
      />
      <div className="mt-6 flex justify-center">
        <AnimatedButton href="/services-overview#capabilities-breakdown" variant="primary" className="py-2.5 px-6 text-xs gap-2">
          Explore Complete Growth Ecosystem <ArrowRight className="h-3.5 w-3.5" />
        </AnimatedButton>
      </div>
    </div>
  )
}
