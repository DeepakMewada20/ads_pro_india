"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useCallback, useEffect, useState, createContext, useContext } from "react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]

interface CarouselContextValue {
  api: CarouselApi
  emblaRef: ReturnType<typeof useEmblaCarousel>[0]
  canScrollPrev: boolean
  canScrollNext: boolean
}

const CarouselContext = createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const context = useContext(CarouselContext)
  if (!context) throw new Error("useCarousel must be used within <Carousel />")
  return context
}

interface CarouselProps {
  children: ReactNode
  className?: string
  opts?: Parameters<typeof useEmblaCarousel>[0]
}

function Carousel({ children, className, opts }: CarouselProps) {
  const [emblaRef, api] = useEmblaCarousel({
    align: "start",
    loop: false,
    ...opts,
  })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback((api_: CarouselApi) => {
    if (!api_) return
    setCanScrollPrev(api_.canScrollPrev())
    setCanScrollNext(api_.canScrollNext())
  }, [])

  useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider value={{ api, emblaRef, canScrollPrev, canScrollNext }}>
      <div className={cn("relative", className)}>{children}</div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ children, className }: { children: ReactNode; className?: string }) {
  const { emblaRef } = useCarousel()

  return (
    <div ref={emblaRef} className="overflow-hidden py-2 -my-2">
      <div className={cn("flex", className)}>{children}</div>
    </div>
  )
}

function CarouselItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3", className)}>
      {children}
    </div>
  )
}

function CarouselPrevious({ className }: { className?: string }) {
  const { api, canScrollPrev } = useCarousel()

  return (
    <button
      type="button"
      onClick={() => api?.scrollPrev()}
      disabled={!canScrollPrev}
      aria-label="Previous slide"
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-ink shadow-sm transition-all hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 cursor-pointer",
        className,
      )}
    >
      <ArrowLeft className="h-4 w-4" />
    </button>
  )
}

function CarouselNext({ className }: { className?: string }) {
  const { api, canScrollNext } = useCarousel()

  return (
    <button
      type="button"
      onClick={() => api?.scrollNext()}
      disabled={!canScrollNext}
      aria-label="Next slide"
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-ink shadow-sm transition-all hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 cursor-pointer",
        className,
      )}
    >
      <ArrowRight className="h-4 w-4" />
    </button>
  )
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
export type { CarouselApi }
