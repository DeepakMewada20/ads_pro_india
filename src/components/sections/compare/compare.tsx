"use client"

import { motion } from "framer-motion"
import { SectionContainer } from "@/components/common/section-container"
import { MaxWidthContainer } from "@/components/common/max-width-container"
import { AnimatedButton } from "@/components/common/animated-button"
import { CompareHeader } from "./compare-header"
import { CompareColumn } from "./compare-column"
import { comparisonColumns, compareCTA } from "@/data/compare"

export function Compare() {
  return (
    <SectionContainer id="compare" background="dark" className="relative overflow-hidden">
      <MaxWidthContainer>
        <CompareHeader />
        <div className="grid gap-6 lg:grid-cols-2">
          {comparisonColumns.map((column, i) => (
            <CompareColumn key={column.id} column={column} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <AnimatedButton href={compareCTA.href} variant="primary">
            {compareCTA.label}
          </AnimatedButton>
        </motion.div>
      </MaxWidthContainer>
    </SectionContainer>
  )
}
