"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { memo } from "react"

interface NavItemProps {
  label: string
  href: string
  isScrolled: boolean
  onClick?: () => void
}

export const NavItem = memo(function NavItem({ label, href, isScrolled, onClick }: NavItemProps) {
  return (
    <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <a
        href={href}
        onClick={onClick}
        className={cn(
          "relative px-1 py-2 font-sans text-[0.84rem] font-medium no-underline transition-colors duration-200",
          isScrolled
            ? "text-muted hover:text-ink"
            : "text-white/65 hover:text-white",
        )}
      >
        {label}
        <motion.span
          className="absolute -bottom-0.5 left-0 h-[1.5px] bg-primary"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </a>
    </motion.li>
  )
})
