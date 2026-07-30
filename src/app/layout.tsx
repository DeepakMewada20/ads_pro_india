import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ads Pro India",
  description: "Premium advertising solutions for your business",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
