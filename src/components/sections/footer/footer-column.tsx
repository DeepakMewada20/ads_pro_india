import { cn } from "@/lib/utils"
import type { FooterColumn as FooterColumnType } from "@/types/footer"

interface FooterColumnProps {
  column: FooterColumnType
}

export function FooterColumn({ column }: FooterColumnProps) {
  return (
    <nav aria-label={column.title}>
      <h3 className="mb-4 font-sans text-[0.85rem] font-bold tracking-wide text-white/90">
        {column.title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {column.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={cn(
                "inline-block text-sm text-white/50 transition-colors duration-200",
                "hover:text-white focus-visible:outline-none focus-visible:text-white",
              )}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
