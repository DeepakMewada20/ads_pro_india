import { FAQHeader } from "./faq-header"
import { FAQAccordion } from "./faq-accordion"

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-[#f8fafc] via-[#eef2ff] to-[#f8fafc]">
      {/* Soft Glow Background Blurs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-indigo-400/15 blur-3xl" />

      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-0">
        <FAQHeader />
        <FAQAccordion />
      </div>
    </section>
  )
}
