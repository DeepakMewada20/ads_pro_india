export interface OverviewFaqItem {
  id: string
  question: string
  answer: string
  category: "General" | "Ads & Traffic" | "Landing Pages & Funnels" | "CRM & Automation"
}

export const SERVICES_OVERVIEW_FAQS: OverviewFaqItem[] = [
  {
    id: "faq-1",
    question: "Why do I need a dedicated Landing Page instead of sending traffic to my website?",
    answer:
      "Traditional company websites have 15+ navigation links, headers, footers, and sidebars that cause analysis paralysis. When paid ad traffic arrives on a generic homepage, 80%+ of visitors bounce without taking action. A dedicated landing page matches the exact ad copy that the visitor clicked, loads under 2 seconds, and presents a single focused call-to-action—increasing lead conversion rates by 3x - 5x.",
    category: "Landing Pages & Funnels",
  },
  {
    id: "faq-2",
    question: "What is the exact difference between a Website and a Sales Funnel?",
    answer:
      "A Website is your digital brochure and corporate headquarters designed for brand exploration, SEO rank, and company trust. A Sales Funnel is a multi-step conversion pathway designed to take a cold prospect step-by-step from ad click to lead capture, automated WhatsApp/email nurturing, upsells, and final purchase.",
    category: "Landing Pages & Funnels",
  },
  {
    id: "faq-3",
    question: "Meta Ads vs Google Ads—which platform should my business prioritize?",
    answer:
      "Meta Ads (Facebook & Instagram) excel at generating demand and targeting specific buyer demographics or interests. Google Ads (Search & Shopping) capture existing active search intent from buyers actively looking for your solution right now. Most scaling businesses achieve maximum ROAS by using Google Ads for high-intent capture and Meta Ads for prospecting and retargeting.",
    category: "Ads & Traffic",
  },
  {
    id: "faq-4",
    question: "How long before I start getting incoming qualified leads after launching?",
    answer:
      "Once your landing page is built and campaigns go live on Meta or Google Ads, leads typically start coming in within 24 to 48 hours. Our automated CRM and WhatsApp systems ensure leads receive instant touchpoints within 60 seconds of form completion.",
    category: "General",
  },
  {
    id: "faq-5",
    question: "Can I hire Ads Pro India for just one specific service (e.g., Meta Ads or Landing Page)?",
    answer:
      "Yes! While our complete Digital Growth Ecosystem delivers the highest compounding ROI, you can start with an individual module—such as Meta Ads management, Landing Page Development, or Ad Consulting—and expand as your revenue grows.",
    category: "General",
  },
  {
    id: "faq-6",
    question: "Which service should my business start with if we are launching from scratch?",
    answer:
      "If you have no existing digital assets, we recommend starting with Meta/Google Ads + a high-converting Landing Page. This combination gives you immediate market feedback, verified lead inquiries, and cash flow from day one.",
    category: "General",
  },
  {
    id: "faq-7",
    question: "What happens to leads after they fill out a form on the landing page?",
    answer:
      "Lead data is instantly validated and synced within 60 seconds into your CRM or Google Sheet. Simultaneously, an automated WhatsApp message and email confirmation are sent to the lead while a notification is pushed to your sales team.",
    category: "CRM & Automation",
  },
  {
    id: "faq-8",
    question: "How do your automated WhatsApp and Email nurturing flows work?",
    answer:
      "We build pre-written drip sequences using official API integrations. When a lead enters your pipeline, they receive automated messages answering key FAQs, sharing client testimonials, offering limited-time bonuses, and guiding them to book a sales call.",
    category: "CRM & Automation",
  },
  {
    id: "faq-9",
    question: "Why is ad creative and copywriting considered the most important leverage variable?",
    answer:
      "Modern ad algorithms (Meta AI & Google Performance Max) rely heavily on creative quality. A compelling 3-second video hook or headline can cut your Cost Per Click (CPC) in half, allowing you to get 2x more leads for the exact same ad budget.",
    category: "Ads & Traffic",
  },
  {
    id: "faq-10",
    question: "How do you track Return on Ad Spend (ROAS) and Cost Per Lead (CPL)?",
    answer:
      "We install server-side API tracking (Meta Conversions API & Google Tag Manager) to track every lead and sale back to the specific ad creative and keyword. You get access to a live performance dashboard displaying real-time CPL, CPA, and ROAS.",
    category: "Ads & Traffic",
  },
  {
    id: "faq-11",
    question: "What is the difference between done-for-you agency services and Ad Consulting?",
    answer:
      "Our Done-For-You Agency service handles 100% of copywriting, design, ad management, landing page coding, and CRM setup. Ad Consulting is designed for businesses with internal marketing teams who need senior media buying audits, SOPs, and scaling strategy.",
    category: "General",
  },
  {
    id: "faq-12",
    question: "Can you integrate our lead forms directly into our existing CRM software?",
    answer:
      "Absolutely. We integrate natively with Zoho CRM, HubSpot, Salesforce, LeadSquared, Pipedrive, Zapier, Webhooks, and custom REST APIs.",
    category: "CRM & Automation",
  },
  {
    id: "faq-13",
    question: "How do you prevent ad fatigue when running long-term Meta ad campaigns?",
    answer:
      "We refresh ad creatives bi-weekly by testing new video hooks, UGC variations, headline angles, and graphic formats before frequency metrics spike and performance drops.",
    category: "Ads & Traffic",
  },
  {
    id: "faq-14",
    question: "What makes Ads Pro India's digital ecosystem different from traditional marketing agencies?",
    answer:
      "Traditional agencies sell disconnected deliverables (e.g. just a website or just social media posts) without caring about sales conversions. We build connected growth engines where ads, landing pages, CRM, funnels, and retention systems work in sync to maximize net profit.",
    category: "General",
  },
  {
    id: "faq-15",
    question: "What contract or onboarding requirements are needed to get started?",
    answer:
      "Getting started is simple. After an initial discovery call, we perform a technical audit, agree on scope, onboard your ad accounts, and launch your connected growth stack within 7 to 10 business days.",
    category: "General",
  },
]
