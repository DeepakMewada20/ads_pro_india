"use client"

import { motion } from "framer-motion"
import { Sparkles, ExternalLink, ShieldCheck, ShoppingBag, MapPin, Zap, Star } from "lucide-react"

export function FeaturedProjectCard() {
  const googlePlayUrl =
    "https://play.google.com/store/apps/details?id=com.freshpickkart.customer&pcampaignid=web_share"

  const techStack = [
    "Flutter",
    "Firebase",
    "Razorpay",
    "Google Maps",
    "Push Notifications",
    "Android",
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px 100px 0px" }}
      transition={{ duration: 0.4 }}
      className="mt-6 rounded-xl border border-emerald-500/20 bg-slate-950/80 p-5 sm:p-6 backdrop-blur-xl hover:border-emerald-500/40 transition-all duration-300 shadow-lg"
    >
      {/* Header Row: Featured Badge + Status Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-mono font-bold text-amber-400">
            <Sparkles className="h-3 w-3 text-amber-400" />
            Featured Project
          </span>
          <span className="text-xs font-mono text-slate-400 font-medium">Production Mobile App</span>
        </div>

        {/* Live Status Badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Live on Google Play
        </span>
      </div>

      {/* Main Grid: Info Left, Mobile Mockup Right */}
      <div className="mt-4 grid gap-6 md:grid-cols-12 md:items-center">
        {/* Left Column: Project Info */}
        <div className="md:col-span-8">
          <h4 className="font-serif text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
            FreshPickKart Grocery App
          </h4>

          <p className="mt-2 text-xs leading-relaxed text-slate-300 font-sans">
            A production-ready grocery delivery application designed and developed by{" "}
            <strong className="text-white">Ads Pro India</strong>. Built using Flutter and Firebase with a focus on performance, scalability, and an exceptional customer experience. Features include secure authentication, real-time order management, Razorpay payment integration, push notifications, Google Maps integration, and an intuitive modern UI.
          </p>

          {/* Tech Stack Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-slate-900/90 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {/* Primary Google Play Link */}
            <a
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md hover:bg-emerald-500 transition-colors cursor-pointer"
            >
              {/* Google Play Icon */}
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.198-.18-.321-.441-.321-.734V2.548c0-.293.123-.554.32-.734zM15.206 13.414l2.483 2.483-11.41 6.467 8.927-8.95zm0-2.828l-8.927-8.95 11.41 6.467-2.483 2.483zm2.593 1.414l3.197 1.812c.704.399.704 1.047 0 1.446l-3.197 1.812-2.179-2.179 2.179-2.179z" />
              </svg>
              <span>View on Google Play</span>
              <ExternalLink className="h-3 w-3" />
            </a>

            {/* Secondary Disabled Case Study Link */}
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900/50 px-3.5 py-2 text-xs font-semibold text-slate-500 cursor-not-allowed opacity-75"
              title="Case study publication coming soon"
            >
              <span>View Case Study</span>
              <span className="text-[9px] font-mono uppercase bg-slate-800 text-slate-400 px-1.5 py-0.2 rounded border border-white/5">
                Soon
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Small Mobile App Mockup Illustration */}
        <div className="md:col-span-4 flex justify-center md:justify-end">
          <div className="relative w-44 sm:w-48 rounded-2xl border-2 border-slate-700/80 bg-slate-900 p-2.5 shadow-2xl overflow-hidden group-hover:border-emerald-500/40 transition-colors">
            {/* Phone Notch */}
            <div className="mx-auto h-2.5 w-16 rounded-full bg-slate-800 mb-2" />

            {/* Phone Screen UI Preview */}
            <div className="rounded-xl bg-slate-950 p-2.5 border border-white/5 text-[10px]">
              {/* Header inside phone */}
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
                <span className="font-bold text-emerald-400 flex items-center gap-1">
                  <ShoppingBag className="h-3 w-3" /> FreshPickKart
                </span>
                <span className="text-[9px] text-slate-400 flex items-center gap-0.5">
                  <MapPin className="h-2.5 w-2.5 text-blue-400" /> 15 Min
                </span>
              </div>

              {/* Banner Inside Phone */}
              <div className="rounded-lg bg-gradient-to-r from-emerald-950 to-blue-950 p-2 border border-emerald-500/20 mb-2 text-center">
                <span className="text-[9px] font-bold text-emerald-300 block">Fresh Farm Produce</span>
                <span className="text-[8px] text-slate-400 block">30% OFF First Order</span>
              </div>

              {/* Product Cards Grid Inside Phone */}
              <div className="grid grid-cols-2 gap-1.5">
                <div className="rounded-md bg-slate-900 p-1.5 border border-white/5 text-center">
                  <div className="h-6 w-full rounded bg-emerald-900/40 flex items-center justify-center text-[10px] mb-1">
                    🍏
                  </div>
                  <span className="text-[8px] text-slate-300 font-medium block">Fresh Apples</span>
                  <span className="text-[8px] text-emerald-400 font-bold">₹120/kg</span>
                </div>
                <div className="rounded-md bg-slate-900 p-1.5 border border-white/5 text-center">
                  <div className="h-6 w-full rounded bg-blue-900/40 flex items-center justify-center text-[10px] mb-1">
                    🥛
                  </div>
                  <span className="text-[8px] text-slate-300 font-medium block">Farm Milk</span>
                  <span className="text-[8px] text-emerald-400 font-bold">₹60/L</span>
                </div>
              </div>

              {/* Checkout Bar Inside Phone */}
              <div className="mt-2 rounded-md bg-emerald-600 px-2 py-1 text-center font-bold text-[8px] text-white flex items-center justify-between">
                <span>1 Item • ₹120</span>
                <span className="flex items-center gap-0.5">Checkout <Zap className="h-2 w-2" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
