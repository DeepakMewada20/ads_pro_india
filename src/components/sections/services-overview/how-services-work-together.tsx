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
  Sparkles,
  Zap,
  ChevronRight,
  Info,
} from "lucide-react"
import { SectionHeading } from "@/components/common/section-heading"
import { cn } from "@/lib/utils"

interface EcosystemNode {
  id: string
  stepNumber: string
  title: string
  shortRole: string
  icon: any
  color: string
  badge: string
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
    shortRole: "3-Sec Hook Engine",
    icon: PenTool,
    color: "from-amber-500 to-orange-500",
    badge: "Attraction Stage",
    inputSource: "Market Research & Customer Pain Points",
    outputTarget: "High-CTR Visual Assets & Video Hooks",
    whyItPrecedes:
      "Creative & Copy MUST come first because ad platforms (Meta & Google AI) require high-converting hooks to capture user attention in 3 seconds. Without great creative, your ad campaigns suffer high CPMs and low click-through rates.",
    roasImpact: "Dramatically reduces Cost Per Click (CPC) and prevents ad fatigue before spending budget.",
  },
  {
    id: "paid-ads",
    stepNumber: "02",
    title: "Meta Ads + Google Ads",
    shortRole: "Traffic Acquisition",
    icon: Target,
    color: "from-blue-500 to-indigo-600",
    badge: "Traffic Stage",
    inputSource: "Ad Creatives & Target Buyer Personas",
    outputTarget: "High-Intent Campaign Clicks",
    whyItPrecedes:
      "Paid Ads take your high-converting creative assets and blast them to precision audiences on Facebook, Instagram, Search, and YouTube—generating targeted traffic to fuel the entire growth pipeline.",
    roasImpact: "Generates high-intent traffic on demand with predictable Pay-Per-Click cost efficiency.",
  },
  {
    id: "landing-page",
    stepNumber: "03",
    title: "Landing Page",
    shortRole: "Sub-2s Conversion Hub",
    icon: MousePointerClick,
    color: "from-indigo-500 to-purple-600",
    badge: "Conversion Stage",
    inputSource: "Ad Traffic & Message Match Offer",
    outputTarget: "High-Friction Form Engagements",
    whyItPrecedes:
      "Sending paid traffic to a generic homepage loses 80% of clicks. Dedicated landing pages match ad headlines exactly, load under 2 seconds, and present a single focused call-to-action to convert traffic into leads.",
    roasImpact: "Increases lead conversion rate by 3x - 5x compared to standard company websites.",
  },
  {
    id: "lead-gen",
    stepNumber: "04",
    title: "Lead Generation",
    shortRole: "Intent Capture",
    icon: MailCheck,
    color: "from-purple-500 to-pink-500",
    badge: "Capture Stage",
    inputSource: "Landing Page Form Submissions",
    outputTarget: "Verified Contact Inquiries",
    whyItPrecedes:
      "Lead Generation validates prospect contact details (Name, Phone, Email, Budget), filters out tire-kickers, and captures high-value sales intent before leads leave the page.",
    roasImpact: "Ensures every ad rupee spent results in a verified, contactable prospect inquiry.",
  },
  {
    id: "crm-sync",
    stepNumber: "05",
    title: "CRM Integration",
    shortRole: "Instant Data Route",
    icon: Database,
    color: "from-pink-500 to-rose-500",
    badge: "Data Stage",
    inputSource: "Captured Lead Contact Details",
    outputTarget: "Lead Quality Scoring & Pipeline Sync",
    whyItPrecedes:
      "Manual data entry causes delays. Instant CRM sync routes lead data within 60 seconds to your sales dashboard with automated quality scoring so warm leads are never lost.",
    roasImpact: "Prevents lead drop-off and increases lead-to-call response speed by 10x.",
  },
  {
    id: "funnels",
    stepNumber: "06",
    title: "Funnels",
    shortRole: "Automated Nurture",
    icon: Layers,
    color: "from-rose-500 to-red-500",
    badge: "Nurture Stage",
    inputSource: "CRM Sync & Lead Profile",
    outputTarget: "Automated Drip Sequences",
    whyItPrecedes:
      "Funnels trigger automated instant WhatsApp, SMS, and email sequences that answer objections, share case studies, and qualify leads 24/7 before your sales team reaches out.",
    roasImpact: "Automates 80% of pre-sales qualification and warms up hesitant buyers.",
  },
  {
    id: "website",
    stepNumber: "07",
    title: "Website (Digital HQ)",
    shortRole: "Brand Authority Hub",
    icon: Globe,
    color: "from-cyan-500 to-teal-500",
    badge: "Authority Stage",
    inputSource: "Nurtured Lead Research & Search",
    outputTarget: "Enterprise Trust Verification",
    whyItPrecedes:
      "Interested prospects inevitably research your main corporate website to verify legitimacy, team credibility, and client testimonials before signing high-value contracts.",
    roasImpact: "Establishes market authority that justifies premium pricing and builds domain SEO rank.",
  },
  {
    id: "mobile-app",
    stepNumber: "08",
    title: "Mobile App",
    shortRole: "Direct Mobile Access",
    icon: Smartphone,
    color: "from-teal-500 to-emerald-500",
    badge: "Engagement Stage",
    inputSource: "Active Website Visitors & Power Users",
    outputTarget: "Push Notifications & App Downloads",
    whyItPrecedes:
      "Native mobile apps provide home-screen real estate, enable zero-cost push notification marketing, and give clients direct mobile access to your products and booking portals.",
    roasImpact: "Unlocks zero-ad-cost push re-engagement and maximizes active user retention.",
  },
  {
    id: "sales-close",
    stepNumber: "09",
    title: "Sales Close",
    shortRole: "Revenue Conversion",
    icon: CheckCircle2,
    color: "from-emerald-500 to-green-600",
    badge: "Sales Stage",
    inputSource: "Pre-Qualified Leads & Nurtured Prospects",
    outputTarget: "Paid Client Deals & Revenue",
    whyItPrecedes:
      "Because the lead has been educated by ads, landing pages, WhatsApp drips, and brand authority, your sales team closes deals faster with much higher closing ratios.",
    roasImpact: "Maximizes closing rate per lead, reducing overall Cost Per Acquisition (CPA).",
  },
  {
    id: "retention",
    stepNumber: "10",
    title: "Customer Retention",
    shortRole: "Repeat Purchase Drips",
    icon: Repeat,
    color: "from-emerald-400 to-teal-400",
    badge: "Retention Stage",
    inputSource: "Closed Client Transactions",
    outputTarget: "Cross-Sell & Upsell Orders",
    whyItPrecedes:
      "Acquiring a new customer costs 5x more than retaining an existing one. Retention flows automate post-purchase upsells, review requests, and repeat order cycles.",
    roasImpact: "Dramatically increases Customer Lifetime Value (LTV) and compounding margins.",
  },
  {
    id: "growth-scale",
    stepNumber: "11",
    title: "Business Growth",
    shortRole: "Compounding ROAS Scale",
    icon: TrendingUp,
    color: "from-green-400 to-emerald-500",
    badge: "Scale Stage",
    inputSource: "Compounding LTV & Predictable Pipeline",
    outputTarget: "Sustainable Compounding Revenue",
    whyItPrecedes:
      "When every stage interlocks seamlessly, customer acquisition becomes predictable. Profits are reinvested into higher ad spend, scaling business revenue predictably month after month.",
    roasImpact: "Delivers sustainable, high-ROAS market expansion and business enterprise valuation.",
  },
]

export function HowServicesWorkTogether() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const activeNode = ECOSYSTEM_NODES[selectedIndex]
  const prevNode = selectedIndex > 0 ? ECOSYSTEM_NODES[selectedIndex - 1] : null
  const nextNode = selectedIndex < ECOSYSTEM_NODES.length - 1 ? ECOSYSTEM_NODES[selectedIndex + 1] : null

  return (
    <section id="how-services-work-together" className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Master Blueprint"
          title="How Every Service Works Together"
          description="A complete digital growth ecosystem is not random. Click or hover over any stage below to explore why each service comes before the next and how they interlock to drive revenue."
          align="center"
          tone="dark"
        />

        {/* Interactive Flow Nodes Horizontal Scroll / Grid */}
        <div className="mt-14 relative">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 px-2">
            <span className="flex items-center gap-1.5 text-blue-400">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" /> Click any stage to inspect the connection logic
            </span>
            <span className="hidden sm:block text-slate-500">Stage {selectedIndex + 1} of 11</span>
          </div>

          {/* Connected Flow Node Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-11 gap-2 relative z-10">
            {ECOSYSTEM_NODES.map((node, idx) => {
              const Icon = node.icon
              const isSelected = selectedIndex === idx
              const isPrev = selectedIndex > 0 && selectedIndex - 1 === idx
              const isNext = selectedIndex < ECOSYSTEM_NODES.length - 1 && selectedIndex + 1 === idx
              const isConnected = isSelected || isPrev || isNext

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedIndex(idx)}
                  type="button"
                  className={cn(
                    "relative flex flex-col items-center rounded-2xl border p-3 text-center transition-all duration-300 group cursor-pointer",
                    isSelected
                      ? "border-blue-400 bg-blue-900/40 shadow-[0_0_25px_rgba(26,111,255,0.35)] scale-105 z-20"
                      : isPrev
                        ? "border-amber-500/50 bg-amber-950/20 shadow-md z-10"
                        : isNext
                          ? "border-emerald-500/50 bg-emerald-950/20 shadow-md z-10"
                          : "border-white/10 bg-slate-900/60 hover:border-white/30 hover:bg-slate-800/80",
                  )}
                >
                  {/* Step Number Tag */}
                  <span className={cn(
                    "font-mono text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 transition-colors",
                    isSelected
                      ? "bg-blue-500 text-white"
                      : isPrev
                        ? "bg-amber-500/30 text-amber-300"
                        : isNext
                          ? "bg-emerald-500/30 text-emerald-300"
                          : "bg-white/10 text-slate-400"
                  )}>
                    {node.stepNumber}
                  </span>

                  {/* Icon */}
                  <div className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform group-hover:scale-110",
                    node.color
                  )}>
                    <Icon className="h-4.5 w-4.5" />
                  </div>

                  {/* Title */}
                  <h4 className={cn(
                    "mt-2 text-[11px] font-bold tracking-tight line-clamp-1 transition-colors",
                    isSelected ? "text-white font-extrabold" : "text-slate-300 group-hover:text-white"
                  )}>
                    {node.title}
                  </h4>

                  {/* Indicator Line underneath */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeGlowLine"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-8 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Node Connection Rationale Drawer */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-blue-500/30 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden"
            >
              {/* Top Bar Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${activeNode.color} text-white shadow-xl`}>
                    <activeNode.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider bg-blue-950/80 px-2.5 py-0.5 rounded border border-blue-500/30">
                        Stage {activeNode.stepNumber} • {activeNode.badge}
                      </span>
                    </div>
                    <h3 className="mt-1 font-serif text-2xl font-extrabold text-white">
                      {activeNode.title}
                    </h3>
                  </div>
                </div>

                {/* Next/Prev Navigation controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedIndex((prev) => Math.max(0, prev - 1))}
                    disabled={selectedIndex === 0}
                    className="rounded-xl border border-white/10 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-300 disabled:opacity-40 hover:bg-slate-700 transition-colors"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setSelectedIndex((prev) => Math.min(ECOSYSTEM_NODES.length - 1, prev + 1))}
                    disabled={selectedIndex === ECOSYSTEM_NODES.length - 1}
                    className="rounded-xl border border-blue-500/40 bg-blue-600/80 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-40 hover:bg-blue-600 transition-colors"
                  >
                    Next Stage →
                  </button>
                </div>
              </div>

              {/* Connected Handshake Flow Display */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/80 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Upstream Source */}
                <div className="w-full md:w-5/12 rounded-xl bg-slate-900/90 border border-amber-500/30 p-3.5">
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-400 block mb-1">
                    [INBOUND] Powered By
                  </span>
                  <span className="text-xs font-bold text-white block">
                    {prevNode ? prevNode.title : "Market Research & Buyer Persona"}
                  </span>
                  <p className="mt-1 text-[11px] text-slate-400">{activeNode.inputSource}</p>
                </div>

                {/* Arrow Flow */}
                <div className="flex items-center gap-1 text-blue-400 font-mono text-xs font-bold py-1">
                  <ArrowRight className="h-5 w-5 animate-pulse" />
                </div>

                {/* Downstream Target */}
                <div className="w-full md:w-5/12 rounded-xl bg-slate-900/90 border border-emerald-500/30 p-3.5">
                  <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 block mb-1">
                    [OUTBOUND] Hands Off To
                  </span>
                  <span className="text-xs font-bold text-white block">
                    {nextNode ? nextNode.title : "Compounding Revenue Growth"}
                  </span>
                  <p className="mt-1 text-[11px] text-slate-400">{activeNode.outputTarget}</p>
                </div>
              </div>

              {/* Why This Service Precedes Rationale Box */}
              <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-950/30 p-5">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase font-mono mb-2">
                  <Info className="h-4 w-4 text-amber-400" />
                  Why {activeNode.title} Comes Before {nextNode ? nextNode.title : "Scale"}
                </div>
                <p className="text-sm text-slate-200 leading-relaxed font-sans">
                  {activeNode.whyItPrecedes}
                </p>
              </div>

              {/* Business & ROAS Impact */}
              <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 flex items-center gap-3">
                <Zap className="h-5 w-5 text-emerald-400 shrink-0" />
                <div className="text-xs text-emerald-200">
                  <strong className="text-emerald-400 font-bold block mb-0.5">ROAS & Unit Economic Impact:</strong>
                  {activeNode.roasImpact}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
