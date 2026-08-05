"use client"

import { motion } from "framer-motion"
import { pricingPlans } from "@/data/pricing"
import { PricingCard } from "./pricing-card"

export function PricingGrid() {
  return (
    <div className="grid items-start gap-6 md:grid-cols-3">
      {pricingPlans.map((plan, i) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={plan.isPopular ? "relative z-10 md:-mx-2 md:scale-105" : ""}
        >
          <PricingCard plan={plan} />
        </motion.div>
      ))}
    </div>
  )
}
