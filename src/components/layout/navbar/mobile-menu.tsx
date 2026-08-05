"use client"

import { useState, useEffect } from "react"
import { navigationData, navbarConfig } from "@/data/navigation"
import { AnimatedButton } from "@/components/common/animated-button"
import { X } from "lucide-react"

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
    <div className="lg:hidden">
      {/* 3-Line Hamburger Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[10001] flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl p-2.5 transition-all active:scale-95"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <X className="h-7 w-7 text-white" />
        ) : (
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <span className={`h-[2.5px] w-[24px] rounded-full transition-all duration-300 ${isScrolled ? "bg-slate-900" : "bg-white"}`} />
            <span className={`h-[2.5px] w-[24px] rounded-full transition-all duration-300 ${isScrolled ? "bg-slate-900" : "bg-white"}`} />
            <span className={`h-[2.5px] w-[24px] rounded-full transition-all duration-300 ${isScrolled ? "bg-slate-900" : "bg-white"}`} />
          </div>
        )}
      </button>

      {/* Dark Opaque Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md transition-opacity duration-300"
        />
      )}

      {/* Slide-over Solid Mobile Drawer Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-[10000] flex w-[85vw] max-w-xs flex-col justify-between border-l border-white/15 bg-[#060914] p-6 text-white shadow-[0_0_60px_rgba(0,0,0,0.95)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-serif text-lg font-bold text-white">Menu Navigation</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="mt-6 flex flex-col gap-2.5">
            {navigationData.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 font-sans text-base font-extrabold text-white transition-all hover:border-primary/50 hover:bg-primary/20 hover:text-white active:scale-98"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 pt-4">
          <AnimatedButton
            href={navbarConfig.cta.href}
            onClick={() => setIsOpen(false)}
            className="w-full justify-center py-3.5 text-sm font-bold shadow-lg shadow-blue-600/30"
          >
            {navbarConfig.cta.label}
          </AnimatedButton>
        </div>
      </div>
    </div>
  )
}
