"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/section-heading"
import { resultsHeader } from "@/data/results"

export function ResultsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <SectionHeading
        tone="dark"
        label={resultsHeader.label}
        title={
          <>
            {resultsHeader.title}{" "}
            <em className="not-italic text-primary-light">{resultsHeader.titleHighlight}</em>
          </>
        }
      />
    </motion.div>
  )
}
