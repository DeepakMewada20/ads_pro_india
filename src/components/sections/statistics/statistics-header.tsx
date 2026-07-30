export function StatisticsHeader() {
  return (
    <div className="mb-12 text-center">
      <div className="mb-4 inline-flex justify-center">
        <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 font-mono text-[0.62rem] font-medium uppercase tracking-[0.08em] text-primary-light">
          By The Numbers
        </span>
      </div>
      <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-white">
        Results That{" "}
        <em className="not-italic text-primary-light">Speak</em>
      </h2>
      <p className="mx-auto mt-4 max-w-[480px] text-sm leading-relaxed text-white/50">
        Cold, hard numbers from 5+ years of managing performance marketing campaigns.
      </p>
    </div>
  )
}
