export default function Loading() {
  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="text-sm text-muted">Loading...</p>
      </div>
    </main>
  )
}
