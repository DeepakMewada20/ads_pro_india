"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/section-heading"
import { contactConfig } from "@/data/contact"

export function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
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
