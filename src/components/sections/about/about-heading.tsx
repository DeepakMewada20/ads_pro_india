import { aboutContent } from "@/data/about"

export function AboutHeading() {
  return (
    <div>
      <div className="mb-5 inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary-light">
        <span className="inline-block h-px w-[22px] bg-primary-light" />
        {aboutContent.badge}
      </div>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-white">
        {aboutContent.title}
        <em className="not-italic text-primary-light">{aboutContent.subtitle}</em>
      </h2>
    </div>
  )
}
