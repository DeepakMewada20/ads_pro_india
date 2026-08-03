"use client"

import { motion } from "framer-motion"
import { SectionContainer } from "@/components/common/section-container"
import { MaxWidthContainer } from "@/components/common/max-width-container"
import { AnimatedButton } from "@/components/common/animated-button"
import { WhatsAppIcon } from "@/components/common/whatsapp-icon"
import { ctaContent } from "@/data/cta"
import { Phone } from "lucide-react"

export function CTA() {
  return (
    <SectionContainer id="cta" background="gradient" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,111,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,111,255,0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <MaxWidthContainer>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-[720px] rounded-[28px] border border-primary/15 bg-gradient-to-br from-ink via-ink-2 to-[#1a2a52] px-6 py-14 text-center text-white shadow-[0_20px_80px_rgba(26,111,255,0.2)] sm:px-10 sm:py-16"
        >
          <div className="mb-5 inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary-light">
            <span className="inline-block h-px w-[22px] bg-primary-light" />
            {ctaContent.badge}
          </div>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.03em]">
            {ctaContent.title}
            <em className="not-italic text-primary-light">Scale</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-sm leading-relaxed text-white/55">
            {ctaContent.subtitle}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <AnimatedButton href={ctaContent.buttons.primary.href} variant="primary">
              <Phone className="h-4 w-4" />
              {ctaContent.buttons.primary.label}
            </AnimatedButton>
            <AnimatedButton href={ctaContent.buttons.secondary.href} variant="whatsapp">
              <WhatsAppIcon className="h-4.5 w-4.5" fill="#ffffff" />
              {ctaContent.buttons.secondary.label}
            </AnimatedButton>
          </div>
        </motion.div>
      </MaxWidthContainer>
    </SectionContainer>
  )
}
