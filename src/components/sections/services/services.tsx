"use client"

import { SectionContainer } from "@/components/common/section-container"
import { MaxWidthContainer } from "@/components/common/max-width-container"
import { ServicesHeader } from "./services-header"
import { ServicesGrid } from "./services-grid"

export function Services() {
  return (
    <SectionContainer id="services" background="off">
      <MaxWidthContainer>
        <ServicesHeader />
        <ServicesGrid />
      </MaxWidthContainer>
    </SectionContainer>
  )
}
