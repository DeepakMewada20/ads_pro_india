"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionContainer } from "@/components/common/section-container"
import { MaxWidthContainer } from "@/components/common/max-width-container"
import { ResultsHeader } from "./results-header"
import { ResultCard } from "./result-card"
import { resultsData } from "@/data/results"

const CATEGORIES = [
  { id: "all", label: "All Campaigns" },
  { id: "ecom", label: "E-Commerce & D2C" },
  { id: "realestate", label: "Real Estate" },
  { id: "leadgen", label: "B2B & High-Ticket" },
  { id: "local", label: "Local Businesses" },
]

export function Results() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredResults = useMemo(() => {
    if (activeTab === "all") return resultsData
    return resultsData.filter((r) => r.category === activeTab)
  }, [activeTab])

  return (
    <SectionContainer id="results" background="dark" className="relative overflow-hidden">
      <MaxWidthContainer>
        <ResultsHeader />

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 min-h-[350px]">
          <AnimatePresence mode="popLayout">
            {filteredResults.map((result, i) => (
              <ResultCard key={result.id} result={result} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </MaxWidthContainer>
    </SectionContainer>
  )
}
