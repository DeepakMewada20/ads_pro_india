import { SectionContainer } from "@/components/common/section-container"
import { MaxWidthContainer } from "@/components/common/max-width-container"
import { TestimonialsHeader } from "./testimonials-header"
import { TestimonialsCarousel } from "./testimonials-carousel"
// import { VideoTestimonialButton } from "./video-modal"

export function Testimonials() {
  return (
    <SectionContainer id="testimonials" background="dark" className="pt-6 sm:pt-8 lg:pt-10">
      <MaxWidthContainer>
        <TestimonialsHeader />
        <TestimonialsCarousel />
        {/* Hidden for now: <VideoTestimonialButton /> */}
      </MaxWidthContainer>
    </SectionContainer>
  )
}
