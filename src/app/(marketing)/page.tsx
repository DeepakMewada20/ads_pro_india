import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Statistics } from "@/components/sections/statistics"
import { Process } from "@/components/sections/process"
import { Pricing } from "@/components/sections/pricing"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Statistics />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
