import { aboutContent } from "@/data/about"

export function AboutDescription() {
  return (
    <>
      {aboutContent.paragraphs.map((para, i) => (
        <p key={i} className="text-sm leading-[1.8] text-white/60">
          {para}
        </p>
      ))}
    </>
  )
}
