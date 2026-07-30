import { footerConfig } from "@/data/footer"
import { FooterSocial } from "./footer-social"

export function FooterBrand() {
  return (
    <div className="flex flex-col gap-4">
      <span className="inline-block bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text font-serif text-xl font-extrabold tracking-[-0.02em] text-transparent">
        {footerConfig.brand.name}
      </span>
      <p className="max-w-xs text-sm leading-relaxed text-white/60">
        {footerConfig.brand.description}
      </p>
      <FooterSocial />
    </div>
  )
}
