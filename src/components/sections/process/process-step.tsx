import * as IconsModule from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { ProcessStep as ProcessStepType } from "@/types/process"

interface ProcessStepProps {
  step: ProcessStepType
}

export function ProcessStep({ step }: ProcessStepProps) {
  const Icon = ((IconsModule as unknown as Record<string, LucideIcon>)[step.icon] || IconsModule.HelpCircle) as LucideIcon

  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/20 bg-white shadow-[0_8px_32px_rgba(26,111,255,0.1)]">
        <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border-[2px] border-transparent border-t-primary/40" />
        <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[0.7rem] font-bold text-white shadow-sm">
          {step.number}
        </span>
        <Icon className="h-6 w-6 text-primary" />
      </div>

      <h3 className="font-serif text-[1.15rem] font-bold text-ink">{step.title}</h3>

      <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{step.description}</p>

      {step.tag && (
        <span className="mt-4 inline-flex items-center rounded-full bg-primary-bg px-3 py-1 font-mono text-[0.6rem] font-medium uppercase tracking-[0.08em] text-primary">
          {step.tag}
        </span>
      )}
    </div>
  )
}
