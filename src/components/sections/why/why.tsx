"use client"

import { motion } from "framer-motion"
import { SectionContainer } from "@/components/common/section-container"
import { MaxWidthContainer } from "@/components/common/max-width-container"
import { WhyHeader } from "./why-header"
import { WhyItem } from "./why-item"
import { WhyMetrics } from "./why-metrics"
import { whyItems } from "@/data/why"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export function Why() {
  return (
    <SectionContainer id="why" background="dark" className="relative overflow-hidden">
      <MaxWidthContainer>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <WhyHeader />
            <motion.ul
              variants={container}
              initial="show"
              animate="show"
              className="mt-10 flex flex-col gap-8"
            >
              {whyItems.map((item) => (
                <WhyItem key={item.id} item={item} />
              ))}
            </motion.ul>
          </div>
          <WhyMetrics />
        </div>
      </MaxWidthContainer>
    </SectionContainer>
  )
}
