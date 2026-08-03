"use client"

import { motion } from "framer-motion"
import { footerConfig } from "@/data/footer"
import { FooterBrand } from "./footer-brand"
import { FooterColumn } from "./footer-column"
import { FooterCopyright } from "./footer-copyright"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Footer() {
  return (
    <footer className="bg-[#1c1f2e] px-5 pb-8 pt-16 text-white sm:px-6 lg:px-0">
      <div className="mx-auto w-full max-w-[1200px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px" }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12"
        >
          <motion.div variants={itemAnim}>
            <FooterBrand />
          </motion.div>
          {footerConfig.columns.map((column) => (
            <motion.div key={column.id} variants={itemAnim}>
              <FooterColumn column={column} />
            </motion.div>
          ))}
        </motion.div>
        <FooterCopyright />
      </div>
    </footer>
  )
}
