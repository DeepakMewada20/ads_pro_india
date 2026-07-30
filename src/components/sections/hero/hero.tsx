import { HeroBackground } from "./hero-background"
import { HeroBadge } from "./hero-badge"
import { HeroHeading } from "./hero-heading"
import { HeroActions } from "./hero-actions"
import { HeroStats } from "./hero-stats"
import { HeroImage } from "./hero-image"
import { HeroCertifiedBy } from "./hero-certified-by"
import { HeroLeadForm } from "./hero-lead-form"
import { ResponsiveContainer } from "@/components/layout/responsive-container"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 bg-gradient-to-br from-[#060914] via-[#0a0f1e] to-[#0d1630] pb-16 pt-10 sm:pt-16"
    >
      <HeroBackground />

      <ResponsiveContainer className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <HeroBadge />
            <HeroHeading />
            <HeroActions />

            <div className="hidden lg:block">
              <HeroLeadForm />
              <HeroCertifiedBy />
              <HeroStats />
            </div>
          </div>

          <div className="hidden lg:block">
            <HeroImage />
          </div>
        </div>

        <div className="mt-10 lg:hidden">
          <HeroStats />
          <HeroLeadForm />
          <HeroCertifiedBy />
        </div>
      </ResponsiveContainer>
    </section>
  )
}
