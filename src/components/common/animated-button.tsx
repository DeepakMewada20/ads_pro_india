"use client"

import { motion } from "framer-motion"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedButtonProps {
  children: ReactNode
  href?: string
  variant?: "primary" | "ghost" | "whatsapp" | "dark"
  className?: string
  onClick?: () => void
  target?: string
  type?: "button" | "submit"
  disabled?: boolean
}

const variants = {
  primary:
    "bg-primary text-white shadow-[0_6px_28px_rgba(26,111,255,0.35)] hover:bg-primary-dark hover:shadow-[0_10px_40px_rgba(26,111,255,0.45)]",
  ghost:
    "bg-transparent text-ink border-[1.5px] border-border hover:border-primary hover:text-primary",
  whatsapp:
    "bg-[#25d366] text-white shadow-[0_6px_22px_rgba(37,211,102,0.3)] hover:opacity-90",
  dark: "bg-white text-primary hover:opacity-90",
}

export const AnimatedButton = forwardRef<HTMLAnchorElement | HTMLButtonElement, AnimatedButtonProps>(
  function AnimatedButton({ children, href, variant = "primary", className, onClick, target, type, disabled }, ref) {
    const baseClassName = cn(
      "inline-flex items-center gap-2 rounded-md px-8 py-3.5 font-sans text-[0.9rem] font-semibold no-underline transition-all duration-200",
      variants[variant],
      className,
    )

    const motionProps = {
      whileHover: { scale: 1.02, y: -2 },
      whileTap: { scale: 0.97, y: 0 },
      transition: { type: "spring" as const, stiffness: 400, damping: 17 },
    }

    if (href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          className={baseClassName}
          onClick={onClick}
          {...motionProps}
        >
          {children}
        </motion.a>
      )
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type ?? "button"}
        className={baseClassName}
        onClick={onClick}
        disabled={disabled}
        {...motionProps}
      >
        {children}
      </motion.button>
    )
  },
)
