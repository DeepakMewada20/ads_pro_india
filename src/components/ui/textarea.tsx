import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import type { TextareaHTMLAttributes } from "react"

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, hasError, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full rounded-lg border bg-white px-4 py-3 font-sans text-sm text-ink outline-none transition-colors duration-200 placeholder:text-muted/60 resize-y min-h-[100px]",
          "focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary",
          hasError ? "border-danger" : "border-border",
          className,
        )}
        {...props}
      />
    )
  },
)
