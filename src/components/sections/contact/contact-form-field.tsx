import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ContactFormFieldProps {
  label: string
  children: ReactNode
  error?: string
  required?: boolean
  htmlFor?: string
  errorId?: string
  className?: string
}

export function ContactFormField({ label, children, error, required, htmlFor, errorId, className }: ContactFormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="font-sans text-[0.8rem] font-semibold text-ink">
        {label}
        {required && <span className="ml-0.5 text-danger" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={errorId} className="font-sans text-[0.75rem] text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
