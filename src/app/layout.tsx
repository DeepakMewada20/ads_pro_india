import type { Metadata, Viewport } from "next"
import { Sora, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const SITE_NAME = "Ads Pro India"
const SITE_DESCRIPTION = "ROI-focused performance marketing agency. Meta Ads, Google Ads, Funnels & Lead Generation."
const SITE_URL = "https://adsproindia.com"

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
}

export const viewport: Viewport = {
  themeColor: "#1a6fff",
  width: "device-width",
  initialScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  foundingDate: "2020",
  founder: { "@type": "Person", name: "Gautam Mali" },
  address: { "@type": "PostalAddress", addressLocality: "Indore", addressRegion: "MP", addressCountry: "IN" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+916268665115",
    contactType: "sales",
    availableLanguage: ["Hindi", "English"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
