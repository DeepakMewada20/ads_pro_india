"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/section-heading"
import { whyHeader } from "@/data/why"

export function WhyHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading
        tone="dark"
        label={whyHeader.label}
        title={
          <>
            {whyHeader.title}
            <em className="not-italic text-primary-light">{whyHeader.titleHighlight}</em>
          </>
        }
      />
    </motion.div>
  )
}
