import { SectionBadge } from "@/components/common/section-badge"
import { SectionHeading } from "@/components/common/section-heading"

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
    </div>
  )
}
