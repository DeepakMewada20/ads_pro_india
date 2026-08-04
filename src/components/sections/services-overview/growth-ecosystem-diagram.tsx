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
  Sparkles,
  ChevronRight,
} from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"
import { AnimatedButton } from "@/components/common/animated-button"

const ECOSYSTEM_BLOCKS = [
  {
    id: "creative",
    title: "Creative & Copy",
    icon: PenTool,
    category: "Attraction Engine",
    color: "from-amber-500 to-orange-500",
    description: "Scroll-stopping visual assets, persuasive hooks, video scripts & direct-response copy.",
    status: "Block 01 • Interlocked",
  },
  {
    id: "ads",
    title: "Meta Ads + Google Ads",
    icon: Target,
    category: "Traffic Engine",
    color: "from-blue-500 to-indigo-600",
    description: "High-intent paid media acquisition across Facebook, Instagram, Search & YouTube.",
    status: "Block 02 • Interlocked",
  },
  {
    id: "landing-page",
    title: "Landing Page",
    icon: MousePointerClick,
    category: "Conversion Hub",
    color: "from-purple-500 to-indigo-500",
    description: "Speed-optimized, sub-2s loading pages engineered specifically for high ad conversions.",
    status: "Block 03 • Interlocked",
  },
  {
    id: "lead-gen",
    title: "Lead Generation",
    icon: MailCheck,
    category: "Capture Pipeline",
    color: "from-cyan-500 to-blue-500",
    description: "Multi-channel lead capture, instant CRM synchronization & automated validation.",
    status: "Block 04 • Interlocked",
  },
  {
    id: "funnels",
    title: "Funnels",
    icon: Layers,
    category: "Nurturing Machine",
    color: "from-pink-500 to-rose-500",
    description: "Automated multi-step qualification, WhatsApp automation & follow-up sequences.",
    status: "Block 05 • Interlocked",
  },
  {
    id: "website",
    title: "Website",
    icon: Globe,
    category: "Digital HQ",
    color: "from-teal-500 to-emerald-500",
    description: "Enterprise Next.js web application built for authority, SEO rank & visitor trust.",
    status: "Block 06 • Interlocked",
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    icon: Smartphone,
    category: "Retention Portal",
    color: "from-indigo-600 to-purple-600",
    description: "Native iOS & Android mobile apps to maximize customer LTV & push engagement.",
    status: "Block 07 • Interlocked",
  },
  {
    id: "business-growth",
    title: "Business Growth",
    icon: TrendingUp,
    category: "Ultimate Metric",
    color: "from-emerald-400 to-green-500",
    description: "Predictable monthly pipeline, reduced CPA, and sustainable compounding revenue.",
    status: "Block 08 • Final Target",
  },
]

export function GrowthEcosystemDiagram() {
  return (
    <section id="ecosystem" className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Interlocking Capabilities"
          title="Complete Growth Ecosystem"
          description="Every component in our ecosystem communicates with the rest. Here is how our services assemble into one unified growth engine for your business."
          align="center"
          tone="dark"
        />

        {/* Diagram Interlocking Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ECOSYSTEM_BLOCKS.map((block, idx) => {
            const Icon = block.icon
            const isTarget = block.id === "business-growth"

            return (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative"
              >
                <div
                  className={`h-full rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 ${
                    isTarget
                      ? "border-emerald-500/50 bg-emerald-950/20 hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]"
                      : "border-white/10 bg-slate-900/80 hover:border-blue-500/50 hover:bg-slate-900 hover:shadow-[0_0_25px_rgba(26,111,255,0.15)]"
                  }`}
                >
                  {/* Top Status Header */}
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400 font-medium">{block.category}</span>
                    <span className={`px-2 py-0.5 rounded-full border ${isTarget ? "border-emerald-500/40 text-emerald-400 bg-emerald-950/60" : "border-white/10 text-blue-400 bg-blue-950/40"}`}>
                      {block.status}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mt-5 flex items-center gap-3">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${block.color} text-white shadow-lg`}>
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {block.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                    {block.description}
                  </p>

                  {/* Placeholder indicator for detailed service card expansion */}
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-medium text-slate-500 group-hover:text-blue-400 transition-colors">
                    <span>Ecosystem Module</span>
                    <ChevronRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 p-8 sm:p-10 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-bold text-blue-300 border border-blue-400/30 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              Tailored Ecosystem Build
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Connect Your Digital Growth Infrastructure?
            </h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Stop burning budget on disconnected marketing. Schedule a free strategy call with गौतम to map out your custom growth ecosystem.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <AnimatedButton href="#contact" variant="primary" className="gap-2">
                Book Ecosystem Audit Call <ArrowRight className="h-4 w-4" />
              </AnimatedButton>
              <AnimatedButton href="#calculator" variant="ghost" className="text-white border-white/20 hover:border-white/50">
                Calculate Lead Potential
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
