"use client"

import { motion } from "framer-motion"
import { Building2, GraduationCap, Utensils, Rocket, Store, ShoppingBag, Stethoscope } from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"

const INDUSTRIES = [
  { id: "ind-1", name: "Healthcare & Clinics", icon: Stethoscope, badge: "Patient Leads", strategy: "Google Search ads + instant WhatsApp patient booking forms." },
  { id: "ind-2", name: "Real Estate & Developers", icon: Building2, badge: "Site Visits", strategy: "Meta lead ads + high-converting project landing pages." },
  { id: "ind-3", name: "Education & Coaching", icon: GraduationCap, badge: "Enrolments", strategy: "Lead magnet funnels + webinar landing pages." },
  { id: "ind-4", name: "Restaurants & Hospitality", icon: Utensils, badge: "Reservations", strategy: "Geo-targeted IG Reels ads + instant WhatsApp booking." },
  { id: "ind-5", name: "Startups & SaaS", icon: Rocket, badge: "MRR Growth", strategy: "Next.js web apps + automated trial funnels." },
  { id: "ind-6", name: "Local Service Businesses", icon: Store, badge: "Local Calls", strategy: "Google Search PPC + click-to-call landing pages." },
  { id: "ind-7", name: "E-Commerce & D2C Brands", icon: ShoppingBag, badge: "Scale & ROAS", strategy: "Full-funnel Meta ads + Google Shopping feeds." },
]

export function IndustriesServedSection() {
  return (
    <section id="industries-served" className="relative py-20 lg:py-28 bg-[#f8fafc] text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Tailored Strategy"
          title="Industries We Scale"
          description="Custom growth architectures tailored to your specific market."
          align="center"
          tone="light"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 100px 0px" }}
                transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm hover:border-primary/40 hover:shadow-md transform-gpu transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-primary border border-blue-200">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {ind.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {ind.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-sans">
                    {ind.strategy}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
