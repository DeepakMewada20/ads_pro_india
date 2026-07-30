import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-5 text-center">
      <h1 className="font-serif text-[clamp(3rem,8vw,6rem)] font-extrabold text-primary">404</h1>
      <p className="max-w-md text-muted">The page you are looking for does not exist or has been moved.</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 font-sans text-[0.9rem] font-semibold text-white no-underline transition-all hover:bg-primary-dark"
      >
        Back to Home
      </Link>
    </main>
  )
}
