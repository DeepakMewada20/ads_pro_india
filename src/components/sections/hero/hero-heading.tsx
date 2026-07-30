import { heroContent } from "@/data/hero"

export function HeroHeading() {
  return (
    <>
      <h1 className="mb-7 font-serif text-[clamp(2.6rem,5vw,4.8rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-white">
        {heroContent.title}
        <em className="not-italic text-primary-light">{heroContent.titleHighlight}</em>
        <b className="font-black text-white">{heroContent.titleSuffix}</b>
      </h1>
      <p className="mb-10 max-w-[500px] text-base leading-[1.8] text-white/55">
        {heroContent.subtitle.split("growth partners")[0]}
        <strong className="font-semibold text-white/90">growth partners</strong>
        {heroContent.subtitle.split("growth partners")[1]?.split("real revenue, not just reach.")[0]}
        <strong className="font-semibold text-white/90">real revenue, not just reach.</strong>
      </p>
    </>
  )
}
