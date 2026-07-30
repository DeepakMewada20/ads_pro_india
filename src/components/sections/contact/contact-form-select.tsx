import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import type { SelectHTMLAttributes } from "react"

interface ContactFormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: readonly string[]
  placeholder: string
  hasError?: boolean
}

export const ContactFormSelect = forwardRef<HTMLSelectElement, ContactFormSelectProps>(
  function ContactFormSelect({ options, placeholder, className, hasError, ...props }, ref) {
    return (
      <select
        ref={ref}
        className={cn(
          "w-full rounded-lg border bg-white px-4 py-3 font-sans text-sm text-ink outline-none transition-colors duration-200 appearance-none",
          "focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary",
          "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%237a7f96%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat",
          hasError ? "border-danger" : "border-border",
          className,
        )}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.slice(1).map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    )
  },
)
