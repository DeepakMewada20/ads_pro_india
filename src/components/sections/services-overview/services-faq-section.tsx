"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { SERVICES_OVERVIEW_FAQS } from "@/data/services-overview-faq"
import { SectionHeading } from "@/components/common/section-heading"
import { cn } from "@/lib/utils"

export function ServicesFaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1")

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="services-faq" className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Clear Answers"
          title="Frequently Asked Questions"
          description="Everything you need to know about our digital growth ecosystem."
          align="center"
          tone="dark"
        />

        <div className="mt-12 space-y-3">
          {SERVICES_OVERVIEW_FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 100px 0px" }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className={cn(
                  "rounded-xl border transition-all overflow-hidden",
                  isOpen
                    ? "border-blue-500/40 bg-slate-900 shadow-lg"
                    : "border-white/10 bg-slate-900/60 hover:border-white/20",
                )}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  type="button"
                  className="flex w-full items-center justify-between p-4 text-left cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-white flex items-center gap-3">
                    <span className="font-mono text-xs text-blue-400 font-normal">
                      0{idx + 1}
                    </span>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition-transform duration-300",
                    isOpen && "rotate-180 bg-blue-600 text-white"
                  )}>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="border-t border-white/5 px-4 pb-4 pt-3 text-xs text-slate-300 leading-relaxed font-sans">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
