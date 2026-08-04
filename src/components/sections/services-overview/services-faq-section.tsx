"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react"
import { SERVICES_OVERVIEW_FAQS } from "@/data/services-overview-faq"
import { SectionHeading } from "@/components/common/section-heading"
import { cn } from "@/lib/utils"

export function ServicesFaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1")
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const categories = ["All", "General", "Ads & Traffic", "Landing Pages & Funnels", "CRM & Automation"]

  const filteredFaqs =
    activeCategory === "All"
      ? SERVICES_OVERVIEW_FAQS
      : SERVICES_OVERVIEW_FAQS.filter((f) => f.category === activeCategory)

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="services-faq" className="relative py-20 lg:py-28 bg-slate-900 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Clear Answers"
          title="Frequently Asked Questions"
          description="Everything you need to know about our digital growth ecosystem, service delivery, tracking, and campaign timelines."
          align="center"
          tone="dark"
        />

        {/* Category Tabs Filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
              className={cn(
                "rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer",
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-white border border-white/5",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 15 Accordion Items */}
        <div className="mt-12 space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "border-blue-500/50 bg-slate-800/90 shadow-xl"
                    : "border-white/10 bg-slate-950/80 hover:border-white/20 hover:bg-slate-900/80",
                )}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  type="button"
                  className="flex w-full items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="font-mono text-xs text-blue-400 font-normal shrink-0">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition-transform duration-300",
                    isOpen && "rotate-180 bg-blue-600 text-white"
                  )}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm text-slate-300 leading-relaxed font-sans">
                        <p>{faq.answer}</p>
                        <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 pt-3 border-t border-white/5">
                          <span>Category: {faq.category}</span>
                          <span className="text-blue-400">Ads Pro System Standard</span>
                        </div>
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
