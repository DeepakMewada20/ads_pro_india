import { SectionContainer } from "@/components/common/section-container"
import { MaxWidthContainer } from "@/components/common/max-width-container"
import { TestimonialsHeader } from "./testimonials-header"
import { TestimonialsCarousel } from "./testimonials-carousel"

export function Testimonials() {
  return (
    <SectionContainer id="testimonials" background="dark">
      <MaxWidthContainer>
        <TestimonialsHeader />
        <TestimonialsCarousel />
      </MaxWidthContainer>
    </SectionContainer>
  )
}
