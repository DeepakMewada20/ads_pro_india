"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

interface UseRevealOptions {
  amount?: number | "some" | "all"
  once?: boolean
}

export function useReveal({ amount = 0, once = true }: UseRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount, once })

  return { ref, isVisible: isInView }
}
