"use client"

import { motion } from "framer-motion"
import { Building2, GraduationCap, Utensils, Rocket, Store, ShoppingBag, Stethoscope, ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"

const INDUSTRIES = [
  {
    id: "ind-healthcare",
    name: "Healthcare & Clinics",
    icon: Stethoscope,
    color: "from-cyan-500 to-blue-500",
    strategy: "High-intent Google Search ads + instant WhatsApp patient booking forms for high treatment conversions.",
    badge: "Patient Acquisition",
  },
  {
    id: "ind-realestate",
    name: "Real Estate & Developers",
    icon: Building2,
    color: "from-blue-600 to-indigo-600",
    strategy: "Meta lead ads + high-converting project landing pages + automated CRM sync for site visit bookings.",
    badge: "Site Visit Pipeline",
  },
  {
    id: "ind-education",
    name: "Education & Coaching",
    icon: GraduationCap,
    color: "from-indigo-500 to-purple-600",
    strategy: "Lead magnet funnels + webinar landing pages + drip sequences for student course enrollments.",
    badge: "Student Enrolment",
  },
  {
    id: "ind-restaurants",
    name: "Restaurants & Hospitality",
    icon: Utensils,
    color: "from-amber-500 to-orange-500",
    strategy: "Geo-targeted Instagram Reels ads + instant WhatsApp reservation ordering systems.",
    badge: "Footfall & Orders",
  },
  {
    id: "ind-startups",
    name: "Startups & SaaS",
    icon: Rocket,
    color: "from-purple-500 to-pink-500",
    strategy: "Next.js web applications + automated trial funnels + targeted B2B LinkedIn & Google search acquisition.",
    badge: "MRR & User Growth",
  },
  {
    id: "ind-local",
    name: "Local Service Businesses",
    icon: Store,
    color: "from-emerald-500 to-teal-500",
    strategy: "Google Local Search PPC + click-to-call landing pages + instant automated SMS follow-up.",
    badge: "Local Inquiries",
  },
  {
    id: "ind-ecom",
    name: "E-Commerce & D2C Brands",
    icon: ShoppingBag,
    color: "from-rose-500 to-red-500",
    strategy: "Full-funnel Meta prospecting + Google Shopping ads + automated cart abandonment WhatsApp sequences.",
    badge: "Scale & ROAS",
  },
]

export function IndustriesServedSection() {
  return (
    <section id="industries-served" className="relative py-20 lg:py-28 bg-slate-50 dark:bg-[#060914] overflow-hidden">
      {/* Background Accent */}
      <div className="pointer-events-none absolute left-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Tailored Expertise"
          title="Industries We Scale"
          description="Every industry requires a custom growth architecture. Here is how our digital ecosystem adapts to your specific market."
          align="center"
        />

        {/* 7 Industries Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="group rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 p-6 shadow-md hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${ind.color} text-white shadow-md`}>
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-200 dark:border-blue-800/40">
                      {ind.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {ind.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {ind.strategy}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs font-medium text-slate-500 group-hover:text-primary transition-colors">
                  <span>Custom Strategy Blueprint</span>
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
