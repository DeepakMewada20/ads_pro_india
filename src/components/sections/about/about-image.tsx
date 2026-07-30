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
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className="absolute inset-[-12px] rounded-[50%] border-[2px] border-primary-light/30"
        style={{
          background: "radial-gradient(circle, rgba(26,111,255,0.06), transparent 70%)",
          rotate: springX
        }}
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative aspect-[4/5] overflow-hidden rounded-[24px]"
        style={{
          rotateX: springY,
          rotateY: springX,
          transformStyle: "preserve-3d",
          perspective: 800,
        }}
      >
        <div className="flex h-full w-full items-end justify-center bg-gradient-to-br from-primary-bg to-primary/10 pb-6">
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-[2rem] text-white shadow-[0_12px_40px_rgba(26,111,255,0.3)]">
              {FOUNDER.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="font-semibold text-ink">{FOUNDER.name}</div>
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-muted">
              {FOUNDER.role}
            </div>
          </div>
        </div>
      </motion.div>

      <div
        className="absolute -bottom-3 -right-3 z-10 animate-[float_4s_ease-in-out_infinite] rounded-xl border border-primary/30 bg-primary/95 px-4 py-3 text-white shadow-[0_8px_32px_rgba(26,111,255,0.3)] backdrop-blur-sm"
      >
        <div className="font-serif text-[1.3rem] font-extrabold leading-none">4.9/5</div>
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.06em] text-white/70">
          Client Rating
        </div>
      </div>
    </motion.div>
  )
}
