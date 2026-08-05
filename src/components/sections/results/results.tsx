"use client"

import { useState, useMemo } from "react"
import { SectionContainer } from "@/components/common/section-container"
import { MaxWidthContainer } from "@/components/common/max-width-container"
import { ResultsHeader } from "./results-header"
import { ResultCard } from "./result-card"
import { resultsData } from "@/data/results"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

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

        <Carousel
          key={activeTab}
          opts={{
            align: "start",
            slidesToScroll: 1,
            breakpoints: {
              "(min-width: 768px)": { slidesToScroll: 2 },
              "(min-width: 1024px)": { slidesToScroll: 3 },
            },
          }}
        >
          {/* Header Bar with Category Filter Tabs & Navigation Controls */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
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

            {/* Upper Right Carousel Navigation Buttons */}
            <div className="flex items-center justify-end gap-3 shrink-0">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>

          {/* Cards Carousel Content (Single Row / Line Layout) */}
          <CarouselContent className="-ml-4 py-2">
            {filteredResults.map((result, i) => (
              <CarouselItem key={result.id} className="pl-4">
                <ResultCard result={result} index={i} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </MaxWidthContainer>
    </SectionContainer>
  )
}
