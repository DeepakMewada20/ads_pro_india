"use client"

import { motion } from "framer-motion"
import {
  PenTool,
  Target,
  MousePointerClick,
  MailCheck,
  Layers,
  Globe,
  Smartphone,
  TrendingUp,
  ArrowRight,
} from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"
import { AnimatedButton } from "@/components/common/animated-button"

const ECOSYSTEM_BLOCKS = [
  { id: "creative", title: "Creative & Copy", icon: PenTool, category: "Attraction", desc: "Scroll-stopping ad visual hooks & copy." },
  { id: "ads", title: "Meta & Google Ads", icon: Target, category: "Traffic", desc: "High-intent paid acquisition across FB, IG & Google." },
  { id: "landing-page", title: "Landing Page", icon: MousePointerClick, category: "Conversion", desc: "Sub-2s loading pages built for ad conversion." },
  { id: "lead-gen", title: "Lead Generation", icon: MailCheck, category: "Capture", desc: "Multi-channel form capture & 60s CRM sync." },
  { id: "funnels", title: "Funnels", icon: Layers, category: "Nurturing", desc: "Multi-step qualification & WhatsApp automation." },
  { id: "website", title: "Website (Next.js)", icon: Globe, category: "Digital HQ", desc: "Enterprise web application built for authority & SEO." },
  { id: "mobile-app", title: "Mobile App", icon: Smartphone, category: "Retention", desc: "iOS & Android apps for direct push notifications." },
  { id: "business-growth", title: "Business Growth", icon: TrendingUp, category: "Scale", desc: "Predictable pipeline, lower CPA & compounding ROAS." },
]

export function GrowthEcosystemDiagram() {
  return (
    <section id="ecosystem" className="relative py-20 lg:py-28 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Interlocking Capabilities"
          title="Complete Growth Ecosystem"
          description="Every component in our ecosystem communicates with the rest."
          align="center"
          tone="light"
        />

        {/* Minimal White Grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ECOSYSTEM_BLOCKS.map((block, idx) => {
            const Icon = block.icon
            return (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 100px 0px" }}
                transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-primary/40 hover:shadow-md transform-gpu transition-colors duration-300"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>{block.category}</span>
                  <span className="text-primary font-bold">Block 0{idx + 1}</span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-primary border border-blue-200">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {block.title}
                  </h3>
                </div>

                <p className="mt-2 text-xs text-slate-600 font-sans leading-relaxed">
                  {block.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Box */}
        <div className="mt-12 rounded-2xl border border-blue-200 bg-white p-6 text-center shadow-md">
          <h3 className="font-serif text-xl font-bold text-slate-900">
            Ready to Connect Your Digital Growth Infrastructure?
          </h3>
          <p className="mt-2 text-xs text-slate-600">
            Schedule a free strategy call to map out your custom growth ecosystem.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <AnimatedButton href="#contact" variant="primary" className="py-2 px-5 text-xs">
              Book Call <ArrowRight className="h-3.5 w-3.5" />
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
