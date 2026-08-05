"use client"

import { useState, useEffect } from "react"
import { navigationData, navbarConfig } from "@/data/navigation"
import { AnimatedButton } from "@/components/common/animated-button"
import { X, ChevronRight } from "lucide-react"

interface MobileMenuProps {
  isScrolled: boolean
}

export function MobileMenu({ isScrolled }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <div className="lg:hidden" suppressHydrationWarning>
      {/* 3-Line Hamburger Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[10001] flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl p-2 transition-all active:scale-95"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <div className="flex flex-col items-center justify-center gap-[4.5px]">
            <span className={`h-[2px] w-[22px] rounded-full transition-all duration-300 ${isScrolled ? "bg-slate-900" : "bg-white"}`} />
            <span className={`h-[2px] w-[22px] rounded-full transition-all duration-300 ${isScrolled ? "bg-slate-900" : "bg-white"}`} />
            <span className={`h-[2px] w-[22px] rounded-full transition-all duration-300 ${isScrolled ? "bg-slate-900" : "bg-white"}`} />
          </div>
        )}
      </button>

      {/* Dark Opaque Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      {/* Compact Slide-over Mobile Drawer Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-[10000] flex w-[72vw] max-w-[250px] flex-col justify-between border-l border-white/10 bg-[#090d16] p-4.5 text-white shadow-[0_0_60px_rgba(0,0,0,0.9)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-serif text-base font-bold text-white tracking-wide">
              Navigation
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="mt-4 flex flex-col gap-1.5">
            {navigationData.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between rounded-lg bg-white px-3.5 py-2 font-sans text-xs sm:text-sm font-extrabold text-slate-950 shadow-sm transition-all hover:bg-blue-600 hover:text-white active:scale-98"
              >
                <span>{link.label}</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 pt-3">
          <AnimatedButton
            href={navbarConfig.cta.href}
            onClick={() => setIsOpen(false)}
            className="w-full justify-center py-2.5 text-xs font-bold shadow-md shadow-blue-600/30 bg-blue-600 hover:bg-blue-500 text-white"
          >
            {navbarConfig.cta.label}
          </AnimatedButton>
        </div>
      </div>
    </div>
  )
}
