import { heroStats } from "@/data/hero"

export function HeroStats() {
  return (
    <div className="mt-10 flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:flex-row">
      {heroStats.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex-1 px-5 py-5 transition-colors duration-300 hover:bg-primary-bg/10 ${
            i < heroStats.length - 1 ? "border-b border-white/10 sm:border-b-0 sm:border-r" : ""
          }`}
        >
          <div className="font-serif text-[2.2rem] font-extrabold leading-none text-white">
            {stat.value}
          </div>
          <div className="mt-1 text-[0.72rem] font-medium text-white/45">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
