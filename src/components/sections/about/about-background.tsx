"use client"

import { BackgroundGlow } from "@/components/common/background-glow"

export function AboutBackground() {
  return (
    <>
      <BackgroundGlow variant="blue" position="top-right" className="h-[600px] w-[600px] opacity-80" />
      <BackgroundGlow variant="gradient" position="bottom-left" className="h-[400px] w-[400px]" />
    </>
  )
}
