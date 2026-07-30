import { aboutContent } from "@/data/about"

export function AboutStats() {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-5">
      {aboutContent.stats.map((stat) => (
        <div key={stat.label}>
          <div className="font-serif text-[2rem] font-extrabold leading-none text-white">
            {stat.prefix}{stat.value}{stat.suffix}
          </div>
          <div className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.06em] text-white/40">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
