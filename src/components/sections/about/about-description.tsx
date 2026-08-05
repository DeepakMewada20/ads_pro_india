import { aboutContent } from "@/data/about"

export function AboutDescription() {
  return (
    <>
      {aboutContent.paragraphs.map((para, i) => (
        <p key={i} className="text-base leading-[1.75] text-white/70">
          {para}
        </p>
      ))}
    </>
  )
}

