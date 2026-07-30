"use client"

import { useRef, useCallback, useEffect, useState } from "react"

interface UseCounterOptions {
  target: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function useCounter({ target, duration = 1600, suffix = "", prefix = "" }: UseCounterOptions) {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const startTimeRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)

  const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

  const animate = useCallback(() => {
    startTimeRef.current = null
    setIsAnimating(true)

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = Math.min((timestamp - startTimeRef.current) / duration, 1)
      const eased = easeOutExpo(elapsed)
      const currentValue = target * eased
      setCount(currentValue)

      if (elapsed < 1) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        setCount(target)
        setIsAnimating(false)
      }
    }

    rafRef.current = requestAnimationFrame(step)
  }, [target, duration])

  const reset = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    setCount(0)
    setIsAnimating(false)
  }, [])

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const display = `${prefix}${target % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}${suffix}`

  return { count, display, animate, reset, isAnimating }
}
