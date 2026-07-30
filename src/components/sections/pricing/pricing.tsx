"use client"

import { SectionContainer } from "@/components/common/section-container"
import { MaxWidthContainer } from "@/components/common/max-width-container"
import { PricingHeader } from "./pricing-header"
import { PricingGrid } from "./pricing-grid"
import { PricingUrgency } from "./pricing-urgency"

export function Pricing() {
  return (
    <SectionContainer id="pricing" background="off">
      <MaxWidthContainer>
        <PricingHeader />
        <PricingGrid />
        <PricingUrgency />
      </MaxWidthContainer>
    </SectionContainer>
  )
}
