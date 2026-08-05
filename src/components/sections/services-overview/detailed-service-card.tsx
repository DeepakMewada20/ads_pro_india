"use client"

import { motion } from "framer-motion"
import {
  ThumbsUp,
  Search,
  Mail,
  Layers,
  MousePointerClick,
  Globe,
  PenTool,
  Smartphone,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Link2,
} from "lucide-react"
import type { DetailedService } from "@/data/detailed-services"
import { AnimatedButton } from "@/components/common/animated-button"
import { WhatsAppIcon } from "@/components/common/whatsapp-icon"
import { FeaturedProjectCard } from "./featured-project-card"

const ICON_MAP: Record<string, any> = {
  ThumbsUp,
  Search,
  Mail,
  Layers,
  MousePointerClick,
  Globe,
  PenTool,
  Smartphone,
  Lightbulb,
}

interface DetailedServiceCardProps {
  service: DetailedService
  index: number
}

export function DetailedServiceCard({ service, index }: DetailedServiceCardProps) {
  const IconComponent = ICON_MAP[service.iconName] || Globe
  const waMessage = `Hi Gautam, I'm interested in learning more about your ${service.title} service on Ads Pro India.`
  const waUrl = `https://wa.me/916268665115?text=${encodeURIComponent(waMessage)}`

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px 100px 0px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.12), ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="scroll-mt-32 rounded-2xl border border-white/10 bg-slate-900/95 p-6 sm:p-8 shadow-xl backdrop-blur-md transform-gpu transition-colors duration-300 hover:border-blue-500/40"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Icon, Title, Tagline, Overview, Subtypes */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <IconComponent className="h-5.5 w-5.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
                  {service.badge}
                </span>
                <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
              </div>
              <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold text-white">
                {service.title}
              </h3>
            </div>
          </div>

          <p className="mt-3 text-sm font-semibold text-blue-300/90">
            {service.tagline}
          </p>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300 font-sans">
            {service.overview}
          </p>

          {/* Subtypes Pills */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {service.keySubtypes.map((sub) => (
              <span
                key={sub}
                className="rounded-lg border border-white/5 bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Key Deliverables & Interlock link */}
        <div className="lg:col-span-5 rounded-xl border border-white/5 bg-slate-950/60 p-5 flex flex-col justify-between h-full">
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
              Key Deliverables
            </h4>
            <ul className="space-y-2">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-slate-300 font-sans">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Works Best With */}
          <div className="mt-6 pt-4 border-t border-white/5">
            <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1 mb-2">
              <Link2 className="h-3 w-3 text-blue-400" /> Works Best With
            </span>
            <div className="flex flex-wrap gap-2">
              {service.worksBestWith.map((rel) => (
                <a
                  key={rel.id}
                  href={`#${rel.id}`}
                  className="inline-flex items-center gap-1 rounded-md bg-blue-950/40 border border-blue-500/20 px-2.5 py-1 text-[11px] font-medium text-blue-300 hover:border-blue-400 transition-colors"
                >
                  <span>{rel.title}</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Project Showcase for App Development */}
      {service.id === "app-dev" && <FeaturedProjectCard />}

      {/* Footer Action */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/5 text-xs">
        <span className="text-slate-400">Deploy {service.title} into your growth stack</span>
        <div className="flex items-center gap-2">
          <AnimatedButton href="#contact" variant="primary" className="py-2 px-4 text-xs">
            Book Call <ArrowRight className="h-3 w-3" />
          </AnimatedButton>
          <AnimatedButton
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            className="py-2 px-4 text-xs"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" fill="#ffffff" />
            WhatsApp
          </AnimatedButton>
        </div>
      </div>
    </motion.div>
  )
}
