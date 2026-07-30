import { heroButtons } from "@/data/hero"
import { AnimatedButton } from "@/components/common/animated-button"

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      {heroButtons.map((btn) => (
        <AnimatedButton
          key={btn.label}
          href={btn.href}
          variant={btn.variant}
          target="_blank"
          className="text-[0.95rem]"
        >
          {btn.variant === "primary" ? "📞" : "💬"} {btn.label}
        </AnimatedButton>
      ))}
    </div>
  )
}
