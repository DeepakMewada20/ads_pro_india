import { aboutContent } from "@/data/about"
import { AboutHighlightItem } from "./about-highlight-item"

export function AboutHighlights() {
  return (
    <div className="space-y-3">
      {aboutContent.highlights.map((item) => (
        <AboutHighlightItem key={item.text} icon={item.icon} text={item.text} />
      ))}
    </div>
  )
}
