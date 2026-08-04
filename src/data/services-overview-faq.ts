export interface OverviewFaqItem {
  id: string
  question: string
  answer: string
  category: "General" | "Ads & Traffic" | "Landing Pages & Funnels" | "CRM & Automation"
}

export const SERVICES_OVERVIEW_FAQS: OverviewFaqItem[] = [
  {
    id: "faq-1",
    question: "Why do I need a Landing Page instead of sending traffic to my website?",
    answer:
      "Traditional company websites have 15+ navigation links that cause distraction. Dedicated landing pages match ad headlines, load under 2 seconds, and feature 1 clear CTA—increasing conversion rates by 3x - 5x.",
    category: "Landing Pages & Funnels",
  },
  {
    id: "faq-2",
    question: "What is the difference between a Website and a Sales Funnel?",
    answer:
      "A Website is your digital brochure for brand exploration and SEO rank. A Sales Funnel is a step-by-step conversion pathway guiding prospects from ad click to automated lead nurturing and sale.",
    category: "Landing Pages & Funnels",
  },
  {
    id: "faq-3",
    question: "Meta Ads vs Google Ads—which platform should my business prioritize?",
    answer:
      "Google Ads capture existing commercial search intent. Meta Ads excel at generating demand and targeting buyer demographics. Scaling businesses use Google for intent capture and Meta for prospecting.",
    category: "Ads & Traffic",
  },
  {
    id: "faq-4",
    question: "How long before I start getting incoming qualified leads?",
    answer:
      "Once campaigns go live on Meta or Google Ads, leads typically start arriving within 24 to 48 hours. Our automated CRM routes data within 60 seconds.",
    category: "General",
  },
  {
    id: "faq-5",
    question: "Can I hire Ads Pro India for just one specific service?",
    answer:
      "Yes. You can start with an individual module—such as Meta Ads management, Landing Page Development, or Ad Consulting—and expand as your revenue scales.",
    category: "General",
  },
  {
    id: "faq-6",
    question: "What happens to leads after they fill out a form on the landing page?",
    answer:
      "Lead data is validated and synced within 60 seconds into your CRM or Google Sheet, triggering instant automated WhatsApp and email confirmations.",
    category: "CRM & Automation",
  },
  {
    id: "faq-7",
    question: "Why is ad creative considered the most important leverage variable?",
    answer:
      "Modern ad algorithms rely heavily on creative performance. A compelling 3-second video hook cuts your Cost Per Click (CPC) in half, doubling lead output for the same budget.",
    category: "Ads & Traffic",
  },
  {
    id: "faq-8",
    question: "What makes Ads Pro India different from traditional marketing agencies?",
    answer:
      "Traditional agencies sell isolated deliverables without conversion accountability. We build connected growth engines where ads, landing pages, CRM, and funnels work in sync for net profit.",
    category: "General",
  },
]
