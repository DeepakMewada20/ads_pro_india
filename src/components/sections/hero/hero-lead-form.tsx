"use client"

import { COMPANY } from "@/constants/site"
import { heroFormFields } from "@/data/hero"

export function HeroLeadForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    const name = data.get("name") as string
    const phone = data.get("phone") as string
    const biz = data.get("business") as string
    const budget = data.get("budget") as string

    if (!name || !phone) return

    const msg = encodeURIComponent(
      `Hi Gautam! 👋 I just filled the form on your website.\n\n` +
        `Name: ${name}\nPhone: ${phone}\n` +
        (biz ? `Business: ${biz}\n` : "") +
        (budget ? `Budget: ${budget}\n` : "") +
        `\nPlease send me a free growth plan!`,
    )
    window.open(`${COMPANY.whatsapp}?text=${msg}`, "_blank")
  }

  return (
    <div className="mt-8 max-w-[480px] rounded-2xl border border-white/15 bg-white/7 p-6 backdrop-blur-md">
      <div className="mb-4 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-white/45">
        Get a Free Growth Plan — Takes 30 Seconds
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          {heroFormFields.slice(0, 2).map((field) => (
            <input
              key={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              aria-label={field.placeholder}
              aria-required={field.required}
              className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-[0.72rem] font-sans text-[0.84rem] text-white placeholder-white/30 outline-none transition-colors focus:border-primary/60 focus:bg-white/15 focus-visible:ring-2 focus-visible:ring-primary/50"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input
            name="business"
            type="text"
            placeholder="Business Type"
            aria-label="Business Type"
            className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-[0.72rem] font-sans text-[0.84rem] text-white placeholder-white/30 outline-none transition-colors focus:border-primary/60 focus:bg-white/15 focus-visible:ring-2 focus-visible:ring-primary/50"
          />
          <select
            name="budget"
            aria-label="Monthly Ad Budget"
            className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-[0.72rem] font-sans text-[0.84rem] text-white/60 outline-none transition-colors focus:border-primary/60 focus:bg-white/15 focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            {heroFormFields[3].options?.map((opt) => (
              <option key={opt} value={opt} className="bg-[#0a0f1e] text-white">
                {opt || "Ad Budget / Month"}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-4 py-[0.82rem] font-sans text-[0.88rem] font-bold text-white shadow-[0_6px_24px_rgba(26,111,255,0.4)] transition-all hover:-translate-y-px hover:bg-primary-dark hover:shadow-[0_10px_32px_rgba(26,111,255,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          Send My Free Growth Plan on WhatsApp
        </button>
        <div className="mt-2 text-center font-mono text-[0.65rem] text-white/30">
          No spam. Gautam personally responds within 2 hours.
        </div>
      </form>
    </div>
  )
}
