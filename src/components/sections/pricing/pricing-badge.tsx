interface PricingBadgeProps {
  label: string
}

export function PricingBadge({ label }: PricingBadgeProps) {
  return (
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-[0.1em] text-white shadow-[0_4px_16px_rgba(26,111,255,0.35)]">
      {label}
    </div>
  )
}
