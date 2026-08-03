"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X, Video, ShieldCheck, Sparkles } from "lucide-react"

interface VideoModalProps {
  title?: string
  videoUrl?: string
  thumbnailText?: string
}

export function VideoTestimonialButton({
  title = "Watch Live Client Campaign Breakdown (3 Mins)",
  thumbnailText = "See how we scaled a fashion brand to ₹14.5L/mo",
}: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="mt-8 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary-bg/20 to-primary/10 p-5 dark:bg-[#0f1524]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
              <Video className="h-6 w-6" />
              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Video Case Study
              </div>
              <h4 className="text-sm font-bold text-ink dark:text-white mt-0.5">{title}</h4>
              <p className="text-xs text-muted mt-0.5">{thumbnailText}</p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-primary-dark shrink-0"
          >
            <Play className="h-4 w-4 fill-white" /> Watch Video Case Study
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-[#0a0c14] p-4 sm:p-6 text-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2 text-sm font-bold text-primary-light">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" /> Verified Ads Manager Strategy Walkthrough
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-white/10 p-1.5 text-white/70 hover:bg-white/20 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Embedded Video Placeholder / Player */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black flex items-center justify-center border border-white/10">
                <iframe
                  className="h-full w-full rounded-2xl"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Ads Pro India Campaign Case Study"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
                <span>Want similar results for your business?</span>
                <a
                  href="https://wa.me/916268665115?text=Hi%20Gautam%2C%20I%20watched%20your%20video%20case%20study%20and%20want%20to%20discuss%20Meta%20Ads!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-white transition-all hover:bg-emerald-600"
                >
                  Book 1-on-1 Strategy Call
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
