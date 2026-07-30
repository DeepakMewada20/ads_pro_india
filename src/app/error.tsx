"use client"

export default function Error({
  _error,
  reset,
}: {
  _error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-5 text-center">
      <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] font-extrabold text-ink">Something went wrong</h1>
      <p className="max-w-md text-muted">An unexpected error occurred. Please try again or contact us if the issue persists.</p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 font-sans text-[0.9rem] font-semibold text-white transition-all hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Try Again
      </button>
    </main>
  )
}
