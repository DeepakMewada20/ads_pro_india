import { AboutHeading } from "./about-heading"
import { AboutDescription } from "./about-description"
import { AboutHighlights } from "./about-highlights"
import { AboutStats } from "./about-stats"
import { AboutCta } from "./about-cta"

export function AboutContent() {
  return (
    <div className="space-y-6">
      <AboutHeading />
      <AboutDescription />
      <AboutHighlights />
      <AboutStats />
      <AboutCta />
    </div>
  )
}
