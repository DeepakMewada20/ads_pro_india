"use client"

import { motion } from "framer-motion"
import { SectionContainer } from "@/components/common/section-container"
import { MaxWidthContainer } from "@/components/common/max-width-container"
import { processSteps } from "@/data/process"
import { ProcessHeader } from "./process-header"
import { ProcessStep } from "./process-step"
import { ProcessConnector } from "./process-connector"

export function Process() {
  return (
    <SectionContainer id="process" background="off">
      <MaxWidthContainer>
        <ProcessHeader />
        <div className="relative grid gap-8 md:grid-cols-3">
          <ProcessConnector />
          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <ProcessStep step={step} />
            </motion.div>
          ))}
        </div>
      </MaxWidthContainer>
    </SectionContainer>
  )
}
