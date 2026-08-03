"use client"

import { testimonialsData } from "@/data/testimonials"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { TestimonialCard } from "./testimonial-card"

export function TestimonialsCarousel() {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 2 },
            "(min-width: 1024px)": { slidesToScroll: 3 },
          },
        }}
      >
        <div className="mb-8 flex items-center justify-end gap-3">
          <CarouselPrevious />
          <CarouselNext />
        </div>

        <CarouselContent>
          {testimonialsData.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
