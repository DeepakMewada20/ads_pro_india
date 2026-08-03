"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ServiceCtaProps {
  href: string
  label: string
}

export function ServiceCta({ href, label }: ServiceCtaProps) {
  return (
    <motion.a
      href={href}
      className="mt-5 inline-flex items-center gap-1.5 text-[0.8rem] font-extrabold text-primary no-underline transition-colors hover:text-primary-dark"
      whileHover={{ gap: "10px" }}
      transition={{ duration: 0.2 }}
    >
      {label}
      <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
    </motion.a>
  )
}
