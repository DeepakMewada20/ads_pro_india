import { iconStatsData } from "@/data/icon-stats"
import { IconStatItem } from "./icon-stat-item"

export function IconStats() {
  return (
    <div className="bg-ink py-10 sm:py-14">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-4 px-5 sm:gap-6 sm:px-6 lg:grid-cols-4 lg:px-0">
        {iconStatsData.map((stat, i) => (
          <IconStatItem key={stat.id} stat={stat} index={i} />
        ))}
      </div>
    </div>
  )
}
