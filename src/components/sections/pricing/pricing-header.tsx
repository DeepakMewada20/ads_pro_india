export function PricingHeader() {
  return (
    <div className="mb-14 text-center">
      <div className="mb-4 inline-flex justify-center">
        <span className="inline-flex items-center rounded-full bg-primary-bg px-3 py-1 font-mono text-[0.62rem] font-medium uppercase tracking-[0.08em] text-primary">
          Simple Pricing
        </span>
      </div>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-ink">
        Choose the Plan That{" "}
        <em className="not-italic text-primary">Fits You</em>
      </h2>
      <p className="mx-auto mt-4 max-w-[520px] text-sm leading-relaxed text-muted">
        Transparent pricing. No hidden fees. Every plan includes a free 30-minute strategy call with Gautam.
      </p>
    </div>
  )
}
