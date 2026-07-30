"use client"

import { navigationData } from "@/data/navigation"
import { NavItem } from "./nav-item"

interface DesktopNavigationProps {
  isScrolled: boolean
}

export function DesktopNavigation({ isScrolled }: DesktopNavigationProps) {
  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {navigationData.map((link) => (
        <NavItem key={link.href} label={link.label} href={link.href} isScrolled={isScrolled} />
      ))}
    </ul>
  )
}
