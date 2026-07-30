"use client"

import { useMotionValueEvent, useScroll as useFramerScroll } from "framer-motion"
import { useState } from "react"

export function useScroll() {
  const { scrollY, scrollYProgress } = useFramerScroll()
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")
  let lastScrollY = 0

  useMotionValueEvent(scrollY, "change", (current) => {
    setIsScrolling(true)
    setScrollDirection(current > lastScrollY ? "down" : "up")
    lastScrollY = current

    clearTimeout((useScroll as unknown as { timeout: ReturnType<typeof setTimeout> }).timeout)
    ;(useScroll as unknown as { timeout: ReturnType<typeof setTimeout> }).timeout = setTimeout(() => {
      setIsScrolling(false)
    }, 150)
  })

  return {
    scrollY,
    scrollYProgress,
    isScrolling,
    scrollDirection,
  }
}
