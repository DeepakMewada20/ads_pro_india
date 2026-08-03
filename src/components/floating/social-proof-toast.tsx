"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, TrendingUp, Calendar, X } from "lucide-react"

const NOTIFICATIONS = [
  {
    id: 1,
    title: "Strategy Call Booked",
    subtitle: "Rahul from Mumbai just scheduled a 1-on-1 strategy call",
    icon: Calendar,
    color: "text-blue-500 bg-blue-500/10",
    time: "2 mins ago",
  },
  {
    id: 2,
    title: "Campaign Milestone",
    subtitle: "Fashion Client hit 4.8x ROAS on Meta Ads today",
    icon: TrendingUp,
    color: "text-emerald-500 bg-emerald-500/10",
    time: "15 mins ago",
  },
  {
    id: 3,
    title: "Free Audit Requested",
    subtitle: "A Real Estate brand from Jaipur submitted an ad audit form",
    icon: CheckCircle2,
    color: "text-purple-500 bg-purple-500/10",
    time: "Just now",
  },
]

export function SocialProofToast() {
  const [current, setCurrent] = useState<number | null>(null)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Show first toast after 4 seconds
    const initialTimer = setTimeout(() => {
      if (!dismissed) setCurrent(0)
    }, 4000)

    // Cycle through toasts every 18 seconds
    const interval = setInterval(() => {
      if (!dismissed) {
        setCurrent((prev) => (prev === null ? 0 : (prev + 1) % NOTIFICATIONS.length))
      }
    }, 18000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [dismissed])

  if (current === null || dismissed) return null

  const item = NOTIFICATIONS[current]
  const Icon = item.icon

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-6 left-6 z-[999] max-w-sm overflow-hidden rounded-2xl border border-border/80 bg-white/95 dark:bg-[#0f1422]/95 p-4 shadow-2xl backdrop-blur-md"
      >
        <div className="flex items-start gap-3">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-ink dark:text-white">{item.title}</span>
              <span className="text-[10px] text-muted">{item.time}</span>
            </div>
            <p className="mt-0.5 text-xs leading-snug text-ink-2 dark:text-gray-300 line-clamp-2">
              {item.subtitle}
            </p>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="text-muted hover:text-ink dark:hover:text-white p-1"
            aria-label="Dismiss notification"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
