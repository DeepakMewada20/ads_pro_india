import { heroStats } from "@/data/hero"

export function HeroStats() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:grid-cols-4">
      {heroStats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center p-4 text-center bg-[#070c1a]/90 transition-colors duration-300 hover:bg-primary-bg/20"
        >
          <div className="font-serif text-[clamp(1.6rem,4vw,2.2rem)] font-extrabold leading-none text-white">
            {stat.value}
          </div>
          <div className="mt-1.5 text-[0.72rem] font-semibold tracking-wide text-white/70">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
