"use client"

import { motion } from "framer-motion"
import { BackgroundGlow } from "@/components/common/background-glow"

export function HeroBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(26,111,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <BackgroundGlow variant="blue" position="top-right" className="h-[800px] w-[800px]" />
      <BackgroundGlow variant="gradient" position="bottom-left" className="h-[500px] w-[500px]" />
      <motion.div
        className="pointer-events-none absolute left-[40%] top-[30%] h-[300px] w-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(26,111,255,0.08), transparent 65%)",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  )
}
