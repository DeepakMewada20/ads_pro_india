import { aboutContent } from "@/data/about"
import { AnimatedButton } from "@/components/common/animated-button"

export function AboutCta() {
  return (
    <div>
      <AnimatedButton href={aboutContent.cta.href} variant="primary" target="_blank">
        {aboutContent.cta.label}
      </AnimatedButton>
    </div>
  )
}
