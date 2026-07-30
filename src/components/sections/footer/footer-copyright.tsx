import { footerConfig } from "@/data/footer"

export function FooterCopyright() {
  return (
    <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
      <p className="text-sm text-white/50">{footerConfig.copyright}</p>
      <p className="text-sm text-white/50">{footerConfig.founder}</p>
    </div>
  )
}
