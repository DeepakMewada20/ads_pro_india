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
  Sparkles,
  Building2,
  Link2,
  HelpCircle,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { DetailedService } from "@/data/detailed-services"
import { AnimatedButton } from "@/components/common/animated-button"
import { WhatsAppIcon } from "@/components/common/whatsapp-icon"

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
  const waMessage = `Hi Gautam, I'm interested in learning more about your ${service.title} service on Ads Pro India. Can we discuss?`
  const waUrl = `https://wa.me/916268665115?text=${encodeURIComponent(waMessage)}`

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="scroll-mt-32 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/95 dark:bg-slate-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all duration-300 hover:border-blue-500/30"
    >
      {/* Background Subtle Gradient Glow */}
      <div className={`pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br ${service.accentColor} opacity-10 blur-3xl`} />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-6">
        <div className="flex items-center gap-4">
          <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accentColor} text-white shadow-xl`}>
            <IconComponent className="h-7 w-7" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-primary bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-md border border-blue-200/60 dark:border-blue-800/40">
                {service.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">Service 0{index + 1}</span>
            </div>
            <h2 className="mt-1.5 font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {service.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Tagline Banner */}
      <div className="mt-6 rounded-2xl border border-blue-100 dark:border-blue-500/20 bg-blue-50/60 dark:bg-blue-950/30 p-4 text-xs sm:text-sm font-semibold text-slate-800 dark:text-blue-200 flex items-center gap-2.5">
        <Sparkles className="h-4 w-4 text-amber-500 shrink-0" />
        <span>{service.tagline}</span>
      </div>

      {/* Core Explanation Grid */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* What It Is */}
        <div className="rounded-2xl border border-slate-200/60 dark:border-white/5 bg-slate-50/80 dark:bg-slate-800/50 p-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2 mb-3">
            <HelpCircle className="h-4 w-4 text-primary" />
            What It Is
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
            {service.whatItIs}
          </p>
        </div>

        {/* Why Businesses Need It */}
        <div className="rounded-2xl border border-slate-200/60 dark:border-white/5 bg-slate-50/80 dark:bg-slate-800/50 p-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2 mb-3">
            <Zap className="h-4 w-4 text-amber-500" />
            Why Businesses Need It
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
            {service.whyNeeded}
          </p>
        </div>
      </div>

      {/* Capabilities Subtypes Pills */}
      <div className="mt-8">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
          Key Capabilities & Sub-Services
        </h3>
        <div className="flex flex-wrap gap-2">
          {service.keySubtypes.map((subtype) => (
            <span
              key={subtype}
              className="inline-flex items-center rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 px-3.5 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mr-1.5" />
              {subtype}
            </span>
          ))}
        </div>
      </div>

      {/* Workflow Steps Section */}
      <div className="mt-8 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-950 p-6 text-white">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-6 flex items-center gap-2">
          <ArrowRight className="h-4 w-4 text-amber-400" />
          How It Works (Example Workflow)
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.workflowSteps.map((ws) => (
            <div key={ws.step} className="rounded-xl border border-white/10 bg-slate-900/90 p-4 relative group hover:border-blue-500/40 transition-colors">
              <span className="font-mono text-xs font-extrabold text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-500/30">
                Step {ws.step}
              </span>
              <h4 className="mt-3 font-serif text-sm font-bold text-white">{ws.title}</h4>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">{ws.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits & Business Types Grid */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Benefits */}
        <div className="rounded-2xl border border-emerald-200/80 dark:border-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/20 p-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-4">
            <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
            Quantifiable Business Benefits
          </h3>
          <ul className="space-y-2.5">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-emerald-100 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Types */}
        <div className="rounded-2xl border border-slate-200/80 dark:border-white/5 bg-slate-50/80 dark:bg-slate-800/50 p-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2 mb-4">
            <Building2 className="h-4.5 w-4.5 text-primary" />
            Ideal Business Types & Use Cases
          </h3>
          <div className="grid grid-cols-2 gap-2.5">
            {service.businessTypes.map((bt) => (
              <div key={bt} className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-3 text-xs font-semibold text-slate-800 dark:text-slate-200">
                {bt}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Works Best With (Related Services Interlock) */}
      <div className="mt-8 rounded-2xl border border-blue-200/60 dark:border-blue-500/20 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:from-slate-900 dark:to-indigo-950/60 p-6">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary dark:text-blue-400 flex items-center gap-2 mb-4">
          <Link2 className="h-4 w-4" />
          Works Best With (Ecosystem Interlock)
        </h3>
        <div className="grid gap-3 sm:grid-cols-3">
          {service.worksBestWith.map((rel) => (
            <a
              key={rel.id}
              href={`#${rel.id}`}
              className="group rounded-xl border border-blue-200/80 dark:border-blue-500/30 bg-white/90 dark:bg-slate-900/90 p-3.5 transition-all duration-200 hover:border-blue-500 hover:shadow-md"
            >
              <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center justify-between group-hover:text-primary">
                <span>{rel.title}</span>
                <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 leading-snug">{rel.relationship}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/80 dark:border-white/10">
        <div className="text-xs text-slate-500 dark:text-slate-400">
          Want to deploy <strong className="text-slate-900 dark:text-white">{service.title}</strong> into your growth stack?
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <AnimatedButton href="#contact" variant="primary" className="py-2.5 text-xs justify-center w-full sm:w-auto">
            Book Strategy Call <ArrowRight className="h-3.5 w-3.5" />
          </AnimatedButton>
          <AnimatedButton
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            className="py-2.5 text-xs justify-center w-full sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" fill="#ffffff" />
            WhatsApp Inquiry
          </AnimatedButton>
        </div>
      </div>
    </motion.div>
  )
}
