"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react"
import { AnimatedButton } from "@/components/common/animated-button"
import { WhatsAppIcon } from "@/components/common/whatsapp-icon"

export function ServicesFinalCTA() {
  const waMessage = `Hi Gautam, I explored your Services Overview page on Ads Pro India and want to get a free strategy consultation for my business.`
  const waUrl = `https://wa.me/916268665115?text=${encodeURIComponent(waMessage)}`

  return (
    <section id="final-cta" className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden border-t border-white/5">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300 mb-5"
        >
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>Transform Your Growth Stack</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
        >
          Ready to Grow Your <span className="text-blue-400">Business?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-xl mx-auto text-xs sm:text-sm text-slate-300 leading-relaxed font-sans"
        >
          Connect your ads, landing pages, CRM, funnels, and retention systems into a single predictable revenue engine.
        </motion.p>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <AnimatedButton href="#contact" variant="primary" className="py-3 px-6 text-xs gap-2">
            <PhoneCall className="h-4 w-4" /> Get Free Consultation
          </AnimatedButton>

          <AnimatedButton
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            className="py-3 px-6 text-xs gap-2"
          >
            <WhatsAppIcon className="h-4 w-4" fill="#ffffff" />
            WhatsApp Gautam
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  )
}
