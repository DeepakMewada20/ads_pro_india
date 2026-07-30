"use client"

import { SectionContainer } from "@/components/common/section-container"
import { MaxWidthContainer } from "@/components/common/max-width-container"
import { FAQHeader } from "./faq-header"
import { FAQAccordion } from "./faq-accordion"

export function FAQ() {
  return (
    <SectionContainer id="faq" background="off">
      <MaxWidthContainer>
        <FAQHeader />
        <FAQAccordion />
      </MaxWidthContainer>
    </SectionContainer>
  )
}
