"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/section-heading"
import { compareHeader } from "@/data/compare"

export function CompareHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <SectionHeading
        tone="dark"
        label={compareHeader.label}
        title={
          <>
            {compareHeader.title}
            <em className="not-italic text-primary-light">{compareHeader.titleHighlight}</em>
            {compareHeader.titleSuffix}
          </>
        }
        description={compareHeader.description}
      />
    </motion.div>
  )
}
