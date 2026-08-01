"use client"

import { motion } from "framer-motion"
import type { WhyItem as WhyItemType } from "@/types/why"

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

interface WhyItemProps {
  item: WhyItemType
}

export function WhyItem({ item }: WhyItemProps) {
  return (
    <motion.li variants={itemAnim} className="flex gap-5">
      <div className="flex-shrink-0 font-mono text-[1.1rem] font-bold text-primary-light">
        {item.number}
      </div>
      <div>
        <h3 className="mb-1.5 font-sans text-[1.05rem] font-bold text-white">{item.title}</h3>
        <p className="max-w-md text-[0.85rem] leading-relaxed text-white/55">{item.description}</p>
      </div>
    </motion.li>
  )
}
