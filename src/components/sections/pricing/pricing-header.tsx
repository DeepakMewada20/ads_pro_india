export function PricingHeader() {
  return (
    <div className="mb-10 text-center">
      <div className="mb-3 inline-flex justify-center">
        <span className="inline-flex items-center rounded-full bg-primary-bg px-3.5 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary">
          Transparent Pricing
        </span>
      </div>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-ink">
        Choose the Plan That{" "}
        <em className="not-italic text-primary">Fits You</em>
      </h2>
      <p className="mx-auto mt-3 max-w-[500px] text-base leading-relaxed text-muted font-medium">
        No hidden fees. No surprises. Pick a plan and let&apos;s start growing your business today.
      </p>
    </div>
  )
}
