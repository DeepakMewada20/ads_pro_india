"use client"

export default function Error({
  _error,
  _reset,
}: {
  _error: Error & { digest?: string }
  _reset: () => void
}) {
  return <main />
}
