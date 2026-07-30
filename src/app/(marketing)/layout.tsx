import { ThemeProvider } from "@/providers/theme-provider"
import { ToasterProvider } from "@/providers/toaster-provider"
import { Navbar } from "@/components/layout/navbar/navbar"
import { Footer } from "@/components/sections/footer"
import { FloatingComponents } from "@/components/floating"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <Navbar />
      <main id="main-content" className="flex flex-1 flex-col pt-[70px]">{children}</main>
      <Footer />
      <FloatingComponents />
      <ToasterProvider />
    </ThemeProvider>
  )
}
