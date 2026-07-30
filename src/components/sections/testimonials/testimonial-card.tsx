"use client"

import { GlassCard } from "@/components/common/glass-card"
import { TestimonialRating } from "./testimonial-rating"
import type { Testimonial } from "@/types/testimonial"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <GlassCard variant="dark" hover="lift" className="flex h-full flex-col p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-bg/10 font-sans text-[0.85rem] font-bold text-primary-light">
          {initials}
        </div>
        <div>
          <div className="font-sans text-[0.88rem] font-semibold text-white">{testimonial.name}</div>
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.05em] text-white/40">
            {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ""}
          </div>
        </div>
      </div>

      <TestimonialRating rating={testimonial.rating ?? 5} />

      <p className="mt-4 flex-1 text-[0.82rem] leading-[1.7] text-white/55">
        &ldquo;{testimonial.content}&rdquo;
      </p>
    </GlassCard>
  )
}
