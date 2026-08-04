"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { id: "hero", label: "01. Overview", href: "#hero" },
  { id: "why-fail", label: "02. Why Ads Fail", href: "#why-fail" },
  { id: "solution-timeline", label: "03. Growth Timeline", href: "#solution-timeline" },
  { id: "ecosystem", label: "04. Complete Ecosystem", href: "#ecosystem" },
  { id: "capabilities-breakdown", label: "05. All Services", href: "#capabilities-breakdown" },
]

export function ServicesOverviewStickyNav() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0
    const diff = current - previous

    if (current <= 10) {
      setIsVisible(true)
    } else if (diff > 2) {
      setIsVisible(false)
    } else if (diff < -2) {
      setIsVisible(true)
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-[70px] z-40 border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#060914]/85"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between overflow-x-auto px-4 py-3 sm:px-6 lg:px-8 no-scrollbar">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
          <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
          Growth System Architecture
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "relative rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-200",
                  isActive
                    ? "text-primary dark:text-white"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeStickyNav"
                    className="absolute inset-0 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-500/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
