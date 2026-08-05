"use client"

import { motion } from "framer-motion"
import { contactInfoItems } from "@/data/contact"
import { ContactInfoItem } from "./contact-info-item"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const itemAnim = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export function ContactInfo() {
  return (
    <motion.address
      variants={container}
      initial="show"
      animate="show"
      className="not-italic"
    >
      <ul className="flex flex-col gap-4">
        {contactInfoItems.map((info) => (
          <motion.li key={info.id} variants={itemAnim}>
            <ContactInfoItem info={info} />
          </motion.li>
        ))}
      </ul>
    </motion.address>
  )
}
