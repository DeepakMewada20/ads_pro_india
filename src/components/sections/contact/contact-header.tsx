"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/section-heading"
import { contactConfig } from "@/data/contact"

export function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading
        label={contactConfig.label}
        title={contactConfig.title}
        description={contactConfig.description}
      />
    </motion.div>
  )
}
