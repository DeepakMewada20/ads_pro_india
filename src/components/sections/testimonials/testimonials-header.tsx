export function TestimonialsHeader() {
  return (
    <div className="mb-14 text-center">
      <div className="mb-4 inline-flex justify-center">
        <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 font-mono text-[0.62rem] font-medium uppercase tracking-[0.08em] text-primary-light">
          Client Love
        </span>
      </div>
      <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-white">
        What Our{" "}
        <em className="not-italic text-primary-light">Clients Say</em>
      </h2>
      <p className="mx-auto mt-4 max-w-[480px] text-sm leading-relaxed text-white/50">
        Real feedback from real business owners across India who trust us with their ad spend.
      </p>
    </div>
  )
}
