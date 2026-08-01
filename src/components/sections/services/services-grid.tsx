"use client"

import { motion } from "framer-motion"
import { servicesData } from "@/data/services"
import { GridContainer } from "@/components/common/grid-container"
import { ServiceCard } from "./service-card"

export function ServicesGrid() {
  return (
    <GridContainer cols={3} gap="gap-6">
      {servicesData.map((service, i) => (
        <motion.div
          key={service.id}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          <ServiceCard service={service} index={i} />
        </motion.div>
      ))}
    </GridContainer>
  )
}
