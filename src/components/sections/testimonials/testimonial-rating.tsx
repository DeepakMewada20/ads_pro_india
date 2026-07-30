import { Star } from "lucide-react"

interface TestimonialRatingProps {
  rating: number
}

export function TestimonialRating({ rating }: TestimonialRatingProps) {
  return (
    <div className="mt-3 flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-white/10 text-white/10"}`}
        />
      ))}
    </div>
  )
}
