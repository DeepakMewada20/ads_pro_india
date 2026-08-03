"use client"

import { motion } from "framer-motion"
import { statisticsData } from "@/data/statistics"
import { StatisticCard } from "./statistic-card"

export function StatisticsGrid() {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {statisticsData.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <StatisticCard stat={stat} />
        </motion.div>
      ))}
    </div>
  )
}
