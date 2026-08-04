"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, PhoneCall, ShieldCheck, Zap } from "lucide-react"
import { AnimatedButton } from "@/components/common/animated-button"
import { WhatsAppIcon } from "@/components/common/whatsapp-icon"

export function ServicesFinalCTA() {
  const waMessage = `Hi Gautam, I explored your Services Overview page on Ads Pro India and want to get a free strategy consultation for my business.`
  const waUrl = `https://wa.me/916268665115?text=${encodeURIComponent(waMessage)}`

  return (
    <section id="final-cta" className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden border-t border-blue-500/20">
      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-emerald-500/15 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-md mb-6"
        >
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>Transform Your Digital Growth Engine</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] max-w-3xl mx-auto"
        >
          Ready to Grow Your{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
            Business?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-sans"
        >
          Stop burning ad budget on disconnected marketing. Connect your ads, landing pages, CRM, funnels, and retention systems into a single predictable revenue engine.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <AnimatedButton href="#contact" variant="primary" className="py-4 px-8 text-base font-bold gap-2 shadow-2xl shadow-blue-600/40">
            <PhoneCall className="h-4.5 w-4.5" /> Get Free Consultation
          </AnimatedButton>

          <AnimatedButton href="#calculator" variant="ghost" className="py-4 px-8 text-base font-bold text-white border-white/20 hover:border-white/50">
            Book Strategy Call <ArrowRight className="h-4.5 w-4.5" />
          </AnimatedButton>

          <AnimatedButton
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            className="py-4 px-8 text-base font-bold gap-2"
          >
            <WhatsAppIcon className="h-5 w-5" fill="#ffffff" />
            WhatsApp Gautam Directly
          </AnimatedButton>
        </motion.div>

        {/* Guarantee Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Zero Long-Term Lock-in</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-amber-400" />
            <span>7-10 Day Quick Launch</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span>500+ Client Success Records</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
