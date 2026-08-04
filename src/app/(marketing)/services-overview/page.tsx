import type { Metadata } from "next"
import {
  ServicesOverviewStickyNav,
  ServicesOverviewHero,
  WhyBusinessesFail,
  GrowthSolutionTimeline,
  GrowthEcosystemDiagram,
  HowServicesWorkTogether,
  DetailedServicesList,
  ServicesMetricsSection,
  IndustriesServedSection,
  ServicesFaqSection,
  ServicesFinalCTA,
} from "@/components/sections/services-overview"
import { RoiCalculator } from "@/components/sections/calculator"
import { Contact } from "@/components/sections/contact"

export const metadata: Metadata = {
  title: "Services Overview | Complete Digital Growth Ecosystem | Ads Pro India",
  description:
    "We don't simply build websites or run ads. Explore how Ads Pro India connects traffic, landing pages, funnels, lead generation, and mobile apps into a unified digital growth engine.",
  openGraph: {
    title: "Services Overview | Complete Digital Growth Ecosystem | Ads Pro India",
    description:
      "Explore how Ads Pro India connects traffic, landing pages, funnels, lead generation, and mobile apps into a unified digital growth engine.",
  },
}

export default function ServicesOverviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-900 dark:text-slate-100">
      <ServicesOverviewStickyNav />
      <ServicesOverviewHero />
      <WhyBusinessesFail />
      <GrowthSolutionTimeline />
      <GrowthEcosystemDiagram />
      <HowServicesWorkTogether />
      <DetailedServicesList />
      <ServicesMetricsSection />
      <IndustriesServedSection />
      <RoiCalculator />
      <ServicesFaqSection />
      <ServicesFinalCTA />
      <Contact />
    </div>
  )
}
