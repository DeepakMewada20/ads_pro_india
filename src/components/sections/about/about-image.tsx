"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { FOUNDER } from "@/constants/site"

export function AboutImage() {
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      className="relative mx-auto max-w-[380px]"
      initial={{ opacity: 1, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      {/* Main Avatar Card */}
      <motion.div
        className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 shadow-[0_20px_50px_rgba(26,111,255,0.2)]"
        style={{
          rotateX: springY,
          rotateY: springX,
          transformStyle: "preserve-3d",
          perspective: 800,
        }}
      >
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0e172a] via-[#1e293b] to-[#0f172a] p-6 text-center">
          <div>
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary font-serif text-[2.2rem] font-extrabold text-white shadow-[0_12px_40px_rgba(26,111,255,0.4)] ring-4 ring-primary/20">
              {FOUNDER.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="font-serif text-xl font-bold text-white">{FOUNDER.name}</div>
            <div className="mt-1 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-primary-light">
              {FOUNDER.role}
            </div>
            <div className="mt-2 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-[0.68rem] font-medium text-emerald-400 border border-emerald-500/20">
              Founder & Strategy Head
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Rating Badge (Positioned Lower) */}
      <div
        className="absolute -bottom-8 -right-2 z-10 animate-[float_4s_ease-in-out_infinite] rounded-xl border border-primary/40 bg-primary px-4.5 py-3 text-white shadow-[0_10px_35px_rgba(26,111,255,0.45)] backdrop-blur-sm"
      >
        <div className="font-serif text-[1.35rem] font-extrabold leading-none">4.9/5</div>
        <div className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-white/80">
          Client Rating
        </div>
      </div>
    </motion.div>
  )
}
