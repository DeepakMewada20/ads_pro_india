export function ProcessHeader() {
  return (
    <div className="mb-14 text-center">
      <div className="mb-4 inline-flex justify-center">
        <span className="inline-flex items-center rounded-full bg-primary-bg px-3 py-1 font-mono text-[0.62rem] font-medium uppercase tracking-[0.08em] text-primary">
          How We Deliver
        </span>
      </div>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-0.03em]">
        From Audit to{" "}
        <em className="not-italic text-primary">Scale</em>
        <br />
        in 3 Simple Steps
      </h2>
      <p className="mx-auto mt-4 max-w-[500px] text-sm leading-relaxed text-muted">
        We follow a proven 3-phase system to turn your ad spend into predictable, scalable revenue.
      </p>
    </div>
  )
}
