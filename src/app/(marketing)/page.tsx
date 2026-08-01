import { Hero } from "@/components/sections/hero"
import { Marquee } from "@/components/sections/marquee"
import { IconStats } from "@/components/sections/icon-stats"
import { ClientLogos } from "@/components/sections/client-logos"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Statistics } from "@/components/sections/statistics"
import { Process } from "@/components/sections/process"
import { Pricing } from "@/components/sections/pricing"
import { Results } from "@/components/sections/results"
import { Testimonials } from "@/components/sections/testimonials"
import { Why } from "@/components/sections/why"
import { Compare } from "@/components/sections/compare"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <IconStats />
      <ClientLogos />
      <About />
      <Services />
      <Statistics />
      <Process />
      <Pricing />
      <Results />
      <Testimonials />
      <Why />
      <Compare />
      <FAQ />
      <CTA />
      <Contact />
    </>
  )
}
