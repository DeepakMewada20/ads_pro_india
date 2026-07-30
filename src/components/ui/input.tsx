import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import type { InputHTMLAttributes } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, hasError, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-lg border bg-white px-4 py-3 font-sans text-sm text-ink outline-none transition-colors duration-200 placeholder:text-muted/60",
          "focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary",
          hasError ? "border-danger" : "border-border",
          className,
        )}
        {...props}
      />
    )
  },
)
