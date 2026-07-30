"use client"

import { SectionContainer } from "@/components/common/section-container"
import { MaxWidthContainer } from "@/components/common/max-width-container"
import { StatisticsHeader } from "./statistics-header"
import { StatisticsGrid } from "./statistics-grid"

export function Statistics() {
  return (
    <SectionContainer id="statistics" background="dark">
      <MaxWidthContainer>
        <StatisticsHeader />
        <StatisticsGrid />
      </MaxWidthContainer>
    </SectionContainer>
  )
}
