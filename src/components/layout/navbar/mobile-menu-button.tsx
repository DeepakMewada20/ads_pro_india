"use client"

import { Menu } from "lucide-react"

interface MobileMenuButtonProps {
  onClick: () => void
}

export function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer flex-col items-center justify-center gap-[5px] lg:hidden"
      aria-label="Open navigation menu"
    >
      <Menu className="h-5 w-5 text-ink" />
    </button>
  )
}
