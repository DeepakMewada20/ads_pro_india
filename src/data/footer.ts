import type { FooterColumn } from "@/types/footer"

export const footerConfig = {
  brand: {
    name: "AdsProIndia",
    description:
      "ROI-focused performance marketing agency helping businesses scale with Meta Ads, Google Ads & high-converting funnels.",
  },
  columns: [
    {
      id: "services",
      title: "Services",
      links: [
        { label: "Services Overview", href: "/services-overview" },
        { label: "Meta Ads", href: "/services-overview#meta-ads" },
        { label: "Google Ads", href: "/services-overview#google-ads" },
        { label: "E-commerce Funnels", href: "/services-overview#funnels" },
        { label: "Website Development", href: "/services-overview#web-dev" },
        { label: "Creative & Copy", href: "/services-overview#creative" },
      ],
    },
    {
      id: "company",
      title: "Company",
      links: [
        { label: "About Gautam", href: "#about" },
        { label: "Pricing", href: "#pricing" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      id: "connect",
      title: "Connect",
      links: [
        { label: "WhatsApp: 6268665115", href: "https://wa.me/916268665115", external: true },
        { label: "Instagram", href: "https://www.instagram.com/its.gautammali", external: true },
      ],
    },
  ] satisfies FooterColumn[],
  copyright: "© 2025 Ads Pro India. All rights reserved.",
  founder: "Founded by Gautam Mali · Indore, MP",
} as const
