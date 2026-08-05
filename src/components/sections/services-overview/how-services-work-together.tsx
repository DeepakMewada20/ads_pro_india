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
    whyItPrecedes:
      "Ad chalane se pehle sabse pehla aur zaroori kaam hota hai ek aisa Image/Video (Creative) aur Headline/Text (Copy) tayyar karna jo target audience ka dhyan turant kheenchein. Agar Ad attractive nahi hoga to log scroll karke aage badh jayenge. Achha creative pehle 3 seconds me customer ko rokta hai, jisse Ad cost (CPM/CPC) kam hoti hai aur kam kharche me high-intent clicks milte hain.",
    roasImpact: "Dramatically reduces Cost Per Click (CPC) & CPM.",
  },
  {
    id: "paid-ads",
    stepNumber: "02",
    title: "Meta & Google Ads",
    icon: Target,
    inputSource: "Ad Creatives & Personas",
    outputTarget: "High-Intent Campaign Clicks",
    whyItPrecedes:
      "Jab aapka High-Converting Creative & Copy ready ho jata hai, tab paid Ads ke zariye use Facebook, Instagram, Google Search aur YouTube par targeted buyers tak pahunchaya jata hai. Paid Ads aapke poor sales engine ka wo petrol hain jo aapki website aur funnel me naye aur interested prospects ki continuous supply laate hain.",
    roasImpact: "Generates high-intent traffic on demand.",
  },
  {
    id: "leadgen-landing-page",
    stepNumber: "03",
    title: "Lead Gen & Landing Page",
    icon: MailCheck,
    inputSource: "Ad Clicks & Message Match",
    outputTarget: "Verified Leads & Submissions",
    whyItPrecedes:
      "Ad par click karne ke baad customer ko kisi normal confuse karne wali website par bhejne ke bajaye ek fast-loading Landing Page par bheja jata hai. Landing Page par ek dedicated Lead Form hota hai jahan customer apna verified Name, Phone Number aur Email submit karta hai. Simple message-match se normal website ke muqable 3x se 5x zyaada verified leads milti hain.",
    roasImpact: "Increases lead conversion rate by 3x - 5x with verified data.",
  },
  {
    id: "funnels",
    stepNumber: "04",
    title: "Funnels",
    icon: Layers,
    inputSource: "Verified Lead Submissions",
    outputTarget: "Automated Drips",
    whyItPrecedes:
      "Har customer pehle hi din purchase karne ke liye ready nahi hota. Automated WhatsApp aur Email Funnels aapke prospects ko 24/7 client case studies, video reviews aur FAQs bhejkar warm-up karte hain. Isse customer ka trust build hota hai aur sales call connect hone se pehle hi unke zyaadatar objections automatically clear ho jate hain.",
    roasImpact: "Automates 80% of pre-sales qualification.",
  },
  {
    id: "website",
    stepNumber: "05",
    title: "Website (Next.js)",
    icon: Globe,
    inputSource: "Nurtured Lead Research",
    outputTarget: "Brand Trust Verification",
    whyItPrecedes:
      "High-ticket deals ya badi services lene se pehle zyaadatar buyers aapki main company website par jakar aapki legitimacy aur past client work verify karte hain. Ek super-fast Next.js website aapki brand authority, client proof aur corporate setup dikhakar customer ko 100% buying confidence deti hai.",
    roasImpact: "Establishes market authority & SEO rank.",
  },
  {
    id: "mobile-app",
    stepNumber: "06",
    title: "Mobile App",
    icon: Smartphone,
    inputSource: "Website Visitors",
    outputTarget: "Push Notifications",
    whyItPrecedes:
      "E-commerce aur repeat service businesses ke liye customer ke phone me Mobile App hona sabse bada asset hai. Mobile App hone se aap bina ek bhi rupya Ad par dobara kharch kiye free Push Notifications bhejkar purane customers ko naye offers, product updates aur repeat purchases ke liye instantly bring-back kar sakte hain.",
    roasImpact: "Maximizes active user retention & repeat purchases.",
  },
  {
    id: "sales-close",
    stepNumber: "07",
    title: "Sales Close",
    icon: CheckCircle2,
    inputSource: "Pre-Qualified Leads",
    outputTarget: "Paid Client Deals",
    whyItPrecedes:
      "Kyunki leads pehle se hi Ad Creatives, Landing Pages aur Automated Funnels ke zariye educated aur warmed-up ho chuki hoti hain, aapki Sales Team ka kaam convince karna nahi balki sirf deal close karna reh jata hai. Warm buyers se baat karne se sales cycle chhota ho jata hai aur deal closing rate boht fast badhta hai.",
    roasImpact: "Reduces overall Cost Per Acquisition (CPA).",
  },
  {
    id: "retention",
    stepNumber: "08",
    title: "Customer Retention",
    icon: Repeat,
    inputSource: "Closed Client Deals",
    outputTarget: "Repeat Purchase Drips",
    whyItPrecedes:
      "Naya customer laana purane customer ko retain karne se 5x zyaada mehenga hota hai. Automated post-sales WhatsApp/Email flows aur loyalty offers purane clients ko continuous engaged rakhte hain, jisse ek baar khareedne wala customer baar-baar repeat purchases karta hai aur Customer Lifetime Value (LTV) multiply hoti hai.",
    roasImpact: "Dramatically increases Customer Lifetime Value (LTV).",
  },
  {
    id: "growth-scale",
    stepNumber: "09",
    title: "Business Growth",
    icon: TrendingUp,
    inputSource: "Compounding LTV",
    outputTarget: "Compounding Scale",
    whyItPrecedes:
      "Jab saare steps (High Conversion, Automatic Funnels, Sales Close & Repeat Customer Retention) ek saath smooth chalne lagte hain, to aapka business ek predictable growth engine ban jata hai. Iske baad aap bina kisi darr ke Ad Budget badhate hain aur har mahine business revenue compounding rate par multiply (scale) hota hai.",
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
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-2">
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
