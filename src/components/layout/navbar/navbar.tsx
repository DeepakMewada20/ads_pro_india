"use client"

import { useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { navbarConfig } from "@/data/navigation"
import { NavLogo } from "./nav-logo"
import { DesktopNavigation } from "./desktop-navigation"
import { AnimatedButton } from "@/components/common/animated-button"
import { MobileMenu } from "./mobile-menu"

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (current) => {
    setIsScrolled(current > 50)
  })

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-[1000] h-[70px] px-[5%] transition-all duration-300 lg:px-[6%]",
        isScrolled
          ? "border-b border-border bg-white/96 shadow-[0_4px_40px_rgba(26,111,255,0.09)] backdrop-blur-2xl"
          : "border-b border-white/10 bg-[rgba(6,9,20,0.85)] backdrop-blur-2xl",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-full max-w-[1200px] items-center justify-between"
      >
        <NavLogo isScrolled={isScrolled} />
        <DesktopNavigation isScrolled={isScrolled} />
        <div className="hidden items-center lg:flex">
          <AnimatedButton
            href={navbarConfig.cta.href}
            variant={isScrolled ? "primary" : "primary"}
            className="px-[1.4rem] py-[0.58rem] text-[0.84rem]"
          >
            {navbarConfig.cta.label}
          </AnimatedButton>
        </div>
        <MobileMenu isScrolled={isScrolled} />
      </nav>
    </header>
  )
}
