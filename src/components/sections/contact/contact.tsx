"use client"

import { SectionContainer } from "@/components/common/section-container"
import { MaxWidthContainer } from "@/components/common/max-width-container"
import { BackgroundGlow } from "@/components/common/background-glow"
import { ContactHeader } from "./contact-header"
import { ContactInfo } from "./contact-info"
import { ContactForm } from "./contact-form"

export function Contact() {
  return (
    <SectionContainer id="contact" background="gradient" className="relative overflow-hidden">
      <BackgroundGlow variant="blue" position="top-right" className="opacity-40" />
      <BackgroundGlow variant="gradient" position="bottom-left" className="opacity-30" />
      <MaxWidthContainer>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="flex flex-col gap-8">
            <ContactHeader />
            <ContactInfo />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </MaxWidthContainer>
    </SectionContainer>
  )
}
