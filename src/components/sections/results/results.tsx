import { SectionContainer } from "@/components/common/section-container"
import { MaxWidthContainer } from "@/components/common/max-width-container"
import { ResultsHeader } from "./results-header"
import { ResultCard } from "./result-card"
import { resultsData } from "@/data/results"

export function Results() {
  return (
    <SectionContainer id="results" background="dark" className="relative overflow-hidden">
      <MaxWidthContainer>
        <ResultsHeader />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resultsData.map((result, i) => (
            <ResultCard key={result.id} result={result} index={i} />
          ))}
        </div>
      </MaxWidthContainer>
    </SectionContainer>
  )
}
