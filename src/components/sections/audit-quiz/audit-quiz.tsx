"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, ChevronRight, ChevronLeft, Send, Sparkles, ShieldCheck, Rocket } from "lucide-react"
import { toast } from "sonner"
import { SectionHeading } from "@/components/common/section-heading"

const GOALS = [
  { id: "leads", title: "Generate High-Quality Leads", desc: "For Real Estate, B2B, Services or Coaching" },
  { id: "ecom", title: "Scale E-commerce Sales & ROAS", desc: "D2C brands seeking 3x-6x return on Meta & Google" },
  { id: "google", title: "Google Search & Shopping Ads", desc: "High-intent buyer traffic from Google & YouTube" },
  { id: "funnel", title: "Complete Ad Funnel & Landing Page", desc: "High-converting website + retargeting sequence" },
]

const SPENDS = [
  "Less than ₹50,000 / month",
  "₹50,000 - ₹2,000,000 / month",
  "₹2,000,000 - ₹5,000,000 / month",
  "More than ₹5,000,000 / month",
]

const CHALLENGES = [
  "High Cost Per Lead / High CAC",
  "Ad Account Bans & Tracking Issues",
  "Low Lead Quality / Unqualified Calls",
  "Want to Scale Up Profitably",
]

export function AuditQuiz() {
  const [step, setStep] = useState(1)
  const [selectedGoal, setSelectedGoal] = useState(GOALS[0])
  const [selectedSpend, setSelectedSpend] = useState(SPENDS[1])
  const [selectedChallenge, setSelectedChallenge] = useState(CHALLENGES[0])
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid WhatsApp phone number")
      return
    }

    setIsSubmitting(true)

    // Simulate quick processing
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast.success("Audit Request Received! Redirecting to WhatsApp...")

      const message = `Hi Gautam! I requested a Free 60-Sec Ad Audit on your website.\n\n*Name:* ${name || "Client"}\n*Phone:* ${phone}\n*Goal:* ${selectedGoal.title}\n*Monthly Spend:* ${selectedSpend}\n*Main Challenge:* ${selectedChallenge}`
      const waUrl = `https://wa.me/916268665115?text=${encodeURIComponent(message)}`

      window.open(waUrl, "_blank")
    }, 600)
  }

  return (
    <section id="audit-quiz" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Free 60-Second Audit"
          title="Get a Custom Ad Audit & Growth Action Plan"
          description="Answer 3 quick questions to receive a tailored performance marketing roadmap for your business."
          align="center"
        />

        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-white dark:bg-[#0f1422] shadow-2xl">
          {/* Progress Bar Header */}
          <div className="border-b border-border bg-off/50 dark:bg-[#090d16] p-4 sm:p-6">
            <div className="flex items-center justify-between text-xs font-semibold text-muted">
              <span>Step {step} of 3</span>
              <span>{step === 1 ? "Goal Selection" : step === 2 ? "Campaign Context" : "Audit Delivery"}</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-border">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "33%" }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Quiz Content Body */}
          <div className="p-6 sm:p-10">
            {isSubmitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-ink dark:text-white">Audit Request Submitted!</h3>
                <p className="mt-2 text-sm text-muted">
                  We are opening WhatsApp so you can receive your audit findings directly from Gautam Mali.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs text-primary font-semibold hover:underline"
                >
                  Submit another response
                </button>
              </motion.div>
            ) : (
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-lg font-bold text-ink dark:text-white flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-primary" /> What is your primary growth goal right now?
                    </h3>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {GOALS.map((goal) => (
                        <button
                          key={goal.id}
                          onClick={() => setSelectedGoal(goal)}
                          type="button"
                          className={`rounded-2xl border p-4 text-left transition-all ${
                            selectedGoal.id === goal.id
                              ? "border-primary bg-primary-bg dark:bg-primary/20 ring-2 ring-primary"
                              : "border-border hover:border-primary/40"
                          }`}
                        >
                          <div className="font-semibold text-ink dark:text-white text-sm">{goal.title}</div>
                          <div className="mt-1 text-xs text-muted">{goal.desc}</div>
                        </button>
                      ))}
                    </div>

                    <div className="mt-8 flex justify-end">
                      <button
                        onClick={handleNext}
                        type="button"
                        className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark shadow-md"
                      >
                        Next Step <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-lg font-bold text-ink dark:text-white">Current Ad Budget & Main Challenge</h3>

                    <div className="mt-6">
                      <label className="text-xs font-semibold text-muted uppercase tracking-wider">Monthly Ad Spend</label>
                      <div className="mt-2 grid gap-2 sm:grid-cols-2">
                        {SPENDS.map((sp) => (
                          <button
                            key={sp}
                            onClick={() => setSelectedSpend(sp)}
                            type="button"
                            className={`rounded-xl border p-3 text-xs text-left font-medium transition-all ${
                              selectedSpend === sp
                                ? "border-primary bg-primary-bg dark:bg-primary/20 text-primary dark:text-primary-light font-semibold"
                                : "border-border text-ink/80 dark:text-gray-300 hover:border-primary/40"
                            }`}
                          >
                            {sp}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="text-xs font-semibold text-muted uppercase tracking-wider">Primary Bottleneck / Challenge</label>
                      <div className="mt-2 grid gap-2 sm:grid-cols-2">
                        {CHALLENGES.map((ch) => (
                          <button
                            key={ch}
                            onClick={() => setSelectedChallenge(ch)}
                            type="button"
                            className={`rounded-xl border p-3 text-xs text-left font-medium transition-all ${
                              selectedChallenge === ch
                                ? "border-primary bg-primary-bg dark:bg-primary/20 text-primary dark:text-primary-light font-semibold"
                                : "border-border text-ink/80 dark:text-gray-300 hover:border-primary/40"
                            }`}
                          >
                            {ch}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button
                        onClick={handleBack}
                        type="button"
                        className="flex items-center gap-1 text-sm font-semibold text-muted hover:text-ink dark:hover:text-white"
                      >
                        <ChevronLeft className="h-4 w-4" /> Back
                      </button>
                      <button
                        onClick={handleNext}
                        type="button"
                        className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark shadow-md"
                      >
                        Continue <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-lg font-bold text-ink dark:text-white flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-emerald-500" /> Where should we send your Free Audit Report?
                    </h3>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div>
                        <label className="text-xs font-semibold text-muted">Your Name (Optional)</label>
                        <input
                          type="text"
                          placeholder="e.g. Rahul Sharma"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="mt-1 w-full rounded-xl border border-border bg-transparent p-3 text-sm text-ink dark:text-white placeholder:text-muted focus:border-primary focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-muted">WhatsApp Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="mt-1 w-full rounded-xl border border-border bg-transparent p-3 text-sm text-ink dark:text-white placeholder:text-muted focus:border-primary focus:outline-none"
                        />
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted pt-2">
                        <ShieldCheck className="h-4 w-4 text-emerald-500" /> No spam. Your contact info is 100% confidential.
                      </div>

                      <div className="mt-8 flex justify-between items-center pt-4">
                        <button
                          onClick={handleBack}
                          type="button"
                          className="flex items-center gap-1 text-sm font-semibold text-muted hover:text-ink dark:hover:text-white"
                        >
                          <ChevronLeft className="h-4 w-4" /> Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 px-7 py-3 text-sm font-semibold text-white transition-all shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50"
                        >
                          {isSubmitting ? "Generating..." : "Get Free Audit Report"} <Send className="h-4 w-4" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
