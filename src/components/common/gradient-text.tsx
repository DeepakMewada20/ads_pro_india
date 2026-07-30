import type { ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  as?: "em" | "span"
}

export function GradientText({ children, as: Tag = "em" }: GradientTextProps) {
  return <Tag className="not-italic text-primary">{children}</Tag>
}
