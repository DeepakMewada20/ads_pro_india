"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navigationData, navbarConfig } from "@/data/navigation"
import { AnimatedButton } from "@/components/common/animated-button"
import { motion } from "framer-motion"

interface MobileMenuProps {
  isScrolled: boolean
}

export function MobileMenu({ isScrolled }: MobileMenuProps) {
  const handleClick = () => {
    const closeBtn = document.querySelector<HTMLButtonElement>('[data-state="open"] [data-close-button]')
    closeBtn?.click()
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="flex cursor-pointer flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-label="Open navigation menu"
        >
          <span className={`h-[2px] w-[22px] rounded-full transition-all duration-300 ${isScrolled ? "bg-ink" : "bg-white"}`} />
          <span className={`h-[2px] w-[22px] rounded-full transition-all duration-300 ${isScrolled ? "bg-ink" : "bg-white"}`} />
          <span className={`h-[2px] w-[22px] rounded-full transition-all duration-300 ${isScrolled ? "bg-ink" : "bg-white"}`} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col bg-white/98 backdrop-blur-2xl">
        <nav aria-label="Mobile navigation" className="mt-16 flex flex-1 flex-col items-center justify-center gap-10">
          {navigationData.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className="font-sans text-[1.4rem] font-bold no-underline text-ink"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navigationData.length * 0.08 + 0.1, duration: 0.3 }}
          >
            <AnimatedButton href={navbarConfig.cta.href} onClick={handleClick}>
              {navbarConfig.cta.label}
            </AnimatedButton>
          </motion.div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
