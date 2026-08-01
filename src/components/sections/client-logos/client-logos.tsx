import { clientLogos } from "@/data/client-logos"

export function ClientLogos() {
  const logos = [...clientLogos, ...clientLogos]

  return (
    <div className="border-t border-white/10 bg-ink py-8">
      <p className="mb-6 text-center font-mono text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/35">
        Trusted by 50+ Brands Across India
      </p>
      <div className="relative overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee-slow items-center hover:[animation-play-state:paused]">
          {logos.map((logo, i) => (
            <span
              key={i}
              className="mx-3 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 font-serif text-[1rem] font-bold tracking-[-0.02em] text-white/40 transition-colors duration-300 hover:border-primary/40 hover:text-white"
            >
              {logo}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
      </div>
    </div>
  )
}
