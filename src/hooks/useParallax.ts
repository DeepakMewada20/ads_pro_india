"use client"

import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface UseParallaxOptions {
  offset?: number
}

export function useParallax({ offset = 0.5 }: UseParallaxOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset * 100, offset * -100])

  return { ref, y }
}
