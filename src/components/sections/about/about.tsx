"use client"

import { SectionContainer } from "@/components/common/section-container"
import { AboutBackground } from "./about-background"
import { AboutContent } from "./about-content"
import { AboutImage } from "./about-image"

export function About() {
  return (
    <SectionContainer
      id="about"
      background="dark"
      className="relative"
    >
      <AboutBackground />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <AboutContent />
        <AboutImage />
      </div>
    </SectionContainer>
  )
}
