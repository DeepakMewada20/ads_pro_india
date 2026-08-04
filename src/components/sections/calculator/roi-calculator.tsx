"use client"

import { useState, useId } from "react"
import { motion } from "framer-motion"
import { Calculator, TrendingUp, Users, Target, ArrowRight, Sparkles } from "lucide-react"
import { AnimatedButton } from "@/components/common/animated-button"
import { SectionHeading } from "@/components/common/section-heading"
import { WhatsAppIcon } from "@/components/common/whatsapp-icon"

const INDUSTRIES = [
  { id: "ecom", name: "E-Commerce / D2C", avgCpa: 280, avgAov: 1499, roas: "3.2x - 4.5x", minRoas: 3.2 },
  { id: "realestate", name: "Real Estate", avgCpa: 450, avgAov: 50000, roas: "6x - 9x Pipeline", minRoas: 6.0 },
  { id: "b2b", name: "B2B & Lead Gen", avgCpa: 350, avgAov: 15000, roas: "2.8x - 4.5x", minRoas: 2.8 },
  { id: "local", name: "Local Business / Services", avgCpa: 180, avgAov: 4500, roas: "3.5x - 5.0x", minRoas: 3.5 },
]

export function RoiCalculator() {
  const sliderId = useId()
  const [spend, setSpend] = useState<number>(100000) // Default 1 Lakh
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0])

  const formatCurrency = (val: number) => {
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(val % 100000 === 0 ? 0 : 1)} Lakh`
    }
    return `₹${val.toLocaleString("en-IN")}`
  }

  // Estimations
  const estimatedLeads = Math.round(spend / selectedIndustry.avgCpa)
  const projectedRevenue = Math.round(spend * selectedIndustry.minRoas)

  const waMessage = `Hi Gautam, I calculated my budget (${formatCurrency(spend)}/month) for ${selectedIndustry.name} on your ROI Calculator. I want to discuss achieving ${formatCurrency(projectedRevenue)} projected revenue!`
  const waUrl = `https://wa.me/916268665115?text=${encodeURIComponent(waMessage)}`

  return (
    <section id="calculator" className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-[#f8fafc] via-[#eef2ff] to-[#f8fafc]">
      {/* Soft Glow Background Blurs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-indigo-400/15 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Growth Simulator"
          title="Calculate Your Estimated ROI & Lead Potential"
          description="Select your industry and monthly ad budget to see projected returns based on our historical campaign performance."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Controls Card */}
          <div className="lg:col-span-7 rounded-3xl border border-blue-100 bg-white/95 p-6 sm:p-8 shadow-[0_20px_50px_rgba(26,111,255,0.07)] backdrop-blur-md">
            {/* Step 1: Industry Selection */}
            <div>
              <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Target className="h-4 w-4 text-blue-600" />
                Select Your Industry
              </label>
              <div className="mt-3.5 grid grid-cols-2 gap-2.5 sm:gap-3">
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind)}
                    type="button"
                    className={`rounded-xl border p-3 text-left text-xs sm:text-sm font-medium transition-all duration-200 ${
                      selectedIndustry.id === ind.id
                        ? "border-blue-600 bg-blue-600 text-white font-bold shadow-md shadow-blue-600/25"
                        : "border-slate-200 bg-slate-50/80 text-slate-700 hover:border-blue-300 hover:bg-blue-50/50"
                    }`}
                  >
                    {ind.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Ad Spend Slider */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <label htmlFor={sliderId} className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-blue-600" />
                  Monthly Ad Budget
                </label>
                <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-extrabold text-white shadow-sm shadow-blue-600/20">
                  {formatCurrency(spend)}
                </span>
              </div>

              <input
                id={sliderId}
                type="range"
                min={25000}
                max={1000000}
                step={25000}
                value={spend}
                onChange={(e) => setSpend(Number(e.target.value))}
                className="mt-4 h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600 focus:outline-none"
              />

              <div className="mt-2.5 flex justify-between text-xs font-semibold text-slate-500">
                <span>₹25k / mo</span>
                <span>₹5 Lakh / mo</span>
                <span>₹10 Lakh+ / mo</span>
              </div>
            </div>

            {/* Micro Benchmark Details */}
            <div className="mt-7 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-xs">
              <div>
                <span className="text-slate-600">Target ROAS: </span>
                <strong className="text-emerald-700 font-bold">{selectedIndustry.roas}</strong>
              </div>
              <div>
                <span className="text-slate-600">Est. Cost per Lead/Acquisition: </span>
                <strong className="text-slate-900 font-bold">~₹{selectedIndustry.avgCpa}</strong>
              </div>
            </div>
          </div>

          {/* Results Output Card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#060914] via-[#0f172a] to-[#1e1b4b] p-8 text-white shadow-2xl border border-blue-500/20">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
                <Sparkles className="h-4 w-4 text-amber-400" /> Projected Monthly Outcomes
              </div>

              <div className="mt-7 space-y-6">
                <div>
                  <span className="text-xs font-medium text-slate-400">Estimated Monthly Leads / Orders</span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold sm:text-4xl text-white">
                      ~{estimatedLeads.toLocaleString("en-IN")}
                    </span>
                    <Users className="h-5 w-5 text-blue-400" />
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <span className="text-xs font-medium text-slate-400">Projected Pipeline / Revenue Return</span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold sm:text-4xl text-emerald-400 drop-shadow-[0_2px_10px_rgba(52,211,153,0.3)]">
                      {formatCurrency(projectedRevenue)}
                    </span>
                    <TrendingUp className="h-5 w-5 text-emerald-400" />
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <AnimatedButton
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-950/40 py-3.5 text-sm font-bold border-none"
                >
                  <WhatsAppIcon className="h-5 w-5" fill="#ffffff" />
                  Claim This Strategy via WhatsApp <ArrowRight className="h-4 w-4" />
                </AnimatedButton>
                <p className="mt-3 text-center text-[11px] text-slate-400">
                  *Estimates based on benchmark data from 500+ past client campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
