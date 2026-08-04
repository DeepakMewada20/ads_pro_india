"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  PenTool,
  Target,
  MousePointerClick,
  MailCheck,
  Database,
  Layers,
  Globe,
  Smartphone,
  CheckCircle2,
  TrendingUp,
  Repeat,
  ArrowRight,
  Info,
} from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"
import { cn } from "@/lib/utils"

interface EcosystemNode {
  id: string
  stepNumber: string
  title: string
  icon: any
  inputSource: string
  outputTarget: string
  whyItPrecedes: string
  roasImpact: string
}

const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: "creative-copy",
    stepNumber: "01",
    title: "Creative & Copy",
    icon: PenTool,
    inputSource: "Market Research & Pain Points",
    outputTarget: "High-CTR Visual Hooks",
    whyItPrecedes: "High-converting visual hooks capture attention in 3 seconds, lowering CPMs and driving high click-through rates.",
    roasImpact: "Dramatically reduces Cost Per Click (CPC).",
  },
  {
    id: "paid-ads",
    stepNumber: "02",
    title: "Meta & Google Ads",
    icon: Target,
    inputSource: "Ad Creatives & Personas",
    outputTarget: "High-Intent Campaign Clicks",
    whyItPrecedes: "Paid Ads blast your creative assets to targeted audiences on FB, IG, Search, and YouTube.",
    roasImpact: "Generates high-intent traffic on demand.",
  },
  {
    id: "landing-page",
    stepNumber: "03",
    title: "Landing Page",
    icon: MousePointerClick,
    inputSource: "Ad Clicks & Message Match",
    outputTarget: "Frictionless Form Submissions",
    whyItPrecedes: "Dedicated landing pages match ad headlines, load under 2 seconds, and feature a single focused CTA.",
    roasImpact: "Increases lead conversion rate by 3x - 5x.",
  },
  {
    id: "lead-gen",
    stepNumber: "04",
    title: "Lead Generation",
    icon: MailCheck,
    inputSource: "Form Submissions",
    outputTarget: "Verified Prospect Contact",
    whyItPrecedes: "Lead Generation validates contact details and filters out tire-kickers before leads leave.",
    roasImpact: "Ensures every ad rupee spent results in verified leads.",
  },
  {
    id: "crm-sync",
    stepNumber: "05",
    title: "CRM Integration",
    icon: Database,
    inputSource: "Contact Details",
    outputTarget: "60s Pipeline Sync",
    whyItPrecedes: "Instant CRM sync routes lead data within 60 seconds with automated quality scoring.",
    roasImpact: "Increases lead response speed by 10x.",
  },
  {
    id: "funnels",
    stepNumber: "06",
    title: "Funnels",
    icon: Layers,
    inputSource: "CRM Lead Sync",
    outputTarget: "Automated Drips",
    whyItPrecedes: "Funnels trigger automated instant WhatsApp and email sequences to qualify leads 24/7.",
    roasImpact: "Automates 80% of pre-sales qualification.",
  },
  {
    id: "website",
    stepNumber: "07",
    title: "Website (Next.js)",
    icon: Globe,
    inputSource: "Nurtured Lead Research",
    outputTarget: "Brand Trust Verification",
    whyItPrecedes: "Prospects research your main corporate website to verify legitimacy and testimonials.",
    roasImpact: "Establishes market authority & SEO rank.",
  },
  {
    id: "mobile-app",
    stepNumber: "08",
    title: "Mobile App",
    icon: Smartphone,
    inputSource: "Website Visitors",
    outputTarget: "Push Notifications",
    whyItPrecedes: "Native mobile apps provide home-screen access and zero-cost push notification marketing.",
    roasImpact: "Maximizes active user retention.",
  },
  {
    id: "sales-close",
    stepNumber: "09",
    title: "Sales Close",
    icon: CheckCircle2,
    inputSource: "Pre-Qualified Leads",
    outputTarget: "Paid Client Deals",
    whyItPrecedes: "Nurtured leads enable your sales team to close deals faster with higher closing ratios.",
    roasImpact: "Reduces overall Cost Per Acquisition (CPA).",
  },
  {
    id: "retention",
    stepNumber: "10",
    title: "Customer Retention",
    icon: Repeat,
    inputSource: "Closed Client Deals",
    outputTarget: "Repeat Purchase Drips",
    whyItPrecedes: "Retention flows automate post-purchase upsells and repeat order cycles.",
    roasImpact: "Dramatically increases Customer Lifetime Value (LTV).",
  },
  {
    id: "growth-scale",
    stepNumber: "11",
    title: "Business Growth",
    icon: TrendingUp,
    inputSource: "Compounding LTV",
    outputTarget: "Compounding Scale",
    whyItPrecedes: "Profits are reinvested into higher ad spend, scaling revenue month after month.",
    roasImpact: "Delivers sustainable high-ROAS expansion.",
  },
]

export function HowServicesWorkTogether() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const activeNode = ECOSYSTEM_NODES[selectedIndex]

  return (
    <section id="how-services-work-together" className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden border-t border-white/5">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Blueprint"
          title="How Every Service Works Together"
          description="Click any stage below to explore why each service comes before the next."
          align="center"
          tone="dark"
        />

        {/* Minimal Flow Buttons */}
        <div className="mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-11 gap-2">
            {ECOSYSTEM_NODES.map((node, idx) => {
              const Icon = node.icon
              const isSelected = selectedIndex === idx

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedIndex(idx)}
                  type="button"
                  className={cn(
                    "flex flex-col items-center rounded-xl border p-2.5 text-center transition-all cursor-pointer",
                    isSelected
                      ? "border-blue-400 bg-blue-950/60 shadow-md"
                      : "border-white/10 bg-slate-900/60 hover:border-white/20 hover:bg-slate-800/80",
                  )}
                >
                  <span className={cn(
                    "font-mono text-[10px] font-bold px-1.5 py-0.5 rounded mb-1.5",
                    isSelected ? "bg-blue-600 text-white" : "bg-white/10 text-slate-400"
                  )}>
                    {node.stepNumber}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-blue-400 border border-white/5 mb-1.5">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4 className="text-[11px] font-bold tracking-tight line-clamp-1 text-slate-300">
                    {node.title}
                  </h4>
                </button>
              )
            })}
          </div>
        </div>

        {/* Connection Explanation Card */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-xl backdrop-blur-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <activeNode.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
                      Stage {activeNode.stepNumber}
                    </span>
                    <h3 className="mt-1 font-serif text-lg font-bold text-white">
                      {activeNode.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedIndex((prev) => Math.max(0, prev - 1))}
                    disabled={selectedIndex === 0}
                    className="rounded-lg border border-white/10 bg-slate-800 px-3 py-1 text-xs text-slate-300 disabled:opacity-40 hover:bg-slate-700"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={() => setSelectedIndex((prev) => Math.min(ECOSYSTEM_NODES.length - 1, prev + 1))}
                    disabled={selectedIndex === ECOSYSTEM_NODES.length - 1}
                    className="rounded-lg border border-blue-500/40 bg-blue-600 px-3 py-1 text-xs text-white disabled:opacity-40 hover:bg-blue-500"
                  >
                    Next →
                  </button>
                </div>
              </div>

              {/* Inbound & Outbound */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2 text-xs">
                <div className="rounded-xl bg-slate-950 p-3 border border-white/5">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">
                    [INBOUND] Source Input
                  </span>
                  <p className="text-slate-200">{activeNode.inputSource}</p>
                </div>
                <div className="rounded-xl bg-slate-950 p-3 border border-white/5">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">
                    [OUTBOUND] Target Output
                  </span>
                  <p className="text-slate-200">{activeNode.outputTarget}</p>
                </div>
              </div>

              {/* Rationale */}
              <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-950/20 p-4 text-xs text-slate-200">
                <span className="font-mono font-bold text-blue-400 flex items-center gap-1 mb-1">
                  <Info className="h-3.5 w-3.5" /> Why This Stage Precedes The Next:
                </span>
                <p className="leading-relaxed">{activeNode.whyItPrecedes}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
