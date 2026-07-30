"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <AnimatePresence>
      <motion.a
        href="https://wa.me/916268665115"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-6 z-[900] flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366]/60 focus-visible:ring-offset-2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 font-sans text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
          WhatsApp!
        </span>
      </motion.a>
    </AnimatePresence>
  )
}
