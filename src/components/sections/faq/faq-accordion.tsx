"use client"

import { motion } from "framer-motion"
import { faqData } from "@/data/faq"
import { Accordion } from "@/components/ui/accordion"
import { FAQItem } from "./faq-item"

export function FAQAccordion() {
  const mid = Math.ceil(faqData.length / 2)
  const leftCol = faqData.slice(0, mid)
  const rightCol = faqData.slice(mid)

  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.5 }}
      >
        <Accordion type="single" collapsible className="w-full">
          {leftCol.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </Accordion>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <Accordion type="single" collapsible className="w-full">
          {rightCol.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </Accordion>
      </motion.div>
    </div>
  )
}
