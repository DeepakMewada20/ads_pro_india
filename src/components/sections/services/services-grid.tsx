"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { servicesData } from "@/data/services"
import { GridContainer } from "@/components/common/grid-container"
import { ServiceCard } from "./service-card"
import { ServiceCategoryTabs } from "./service-category-tabs"
import type { ServiceCategory } from "@/types/service"

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all")

  const filteredServices = useMemo(() => {
    if (activeCategory === "all") return servicesData
    return servicesData.filter((service) => service.category === activeCategory)
  }, [activeCategory])

  const counts = useMemo(() => {
    return {
      all: servicesData.length,
      "paid-media": servicesData.filter((s) => s.category === "paid-media").length,
      "funnels-web": servicesData.filter((s) => s.category === "funnels-web").length,
      "creative-growth": servicesData.filter((s) => s.category === "creative-growth").length,
    }
  }, [])

  return (
    <div>
      <ServiceCategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        counts={counts}
      />

      <motion.div layout className="min-h-[400px]">
        <GridContainer cols={3} gap="gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, i) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 1, scale: 1, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <ServiceCard service={service} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </GridContainer>
      </motion.div>
    </div>
  )
}
