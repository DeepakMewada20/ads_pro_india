"use client"

import { motion } from "framer-motion"

interface NavLogoProps {
  isScrolled: boolean
}

export function NavLogo({ isScrolled }: NavLogoProps) {
  return (
    <a href="#" className="flex items-center gap-0 no-underline">
      <motion.span
        className="bg-gradient-to-r from-ink via-ink via-[40%] via-primary via-[50%] via-ink via-[60%] to-ink bg-[length:200%_auto] bg-clip-text font-sans text-[1.5rem] font-black tracking-[-0.04em] text-transparent"
        style={{
          backgroundImage: isScrolled
            ? "linear-gradient(90deg, #0a0c14 0%, #0a0c14 38%, #1a6fff 50%, #0a0c14 62%, #0a0c14 100%)"
            : "linear-gradient(90deg, #fff 0%, #fff 38%, #4d94ff 50%, #fff 62%, #fff 100%)",
        }}
        animate={{ backgroundPosition: ["200% center", "-200% center"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        AdsProIndia
      </motion.span>
    </a>
  )
}
