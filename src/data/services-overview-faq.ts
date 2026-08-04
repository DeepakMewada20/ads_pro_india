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
      "Traditional company homepages are designed for general browsing and contain 15+ navigation links, header menus, social icons, and multiple competing topics. When paid ad traffic lands on a homepage, visitors get overwhelmed with choices and bounce without taking action—causing up to 90% of your ad budget to get wasted.\n\nA purpose-built Landing Page eliminates all navigation distractions and focuses 100% on matching the exact offer promised in your ad. Built on Next.js for sub-2 second loading speeds, it features persuasive copy, social proof, and a single focused Call-To-Action (CTA). This dedicated focus typically increases conversion rates by 3x to 5x compared to standard websites.",
    category: "Landing Pages & Funnels",
  },
  {
    id: "faq-2",
    question: "What is the difference between a Website and a Sales Funnel?",
    answer:
      "A Website serves as your digital headquarters—it establishes brand credibility, houses your company background, provides detailed service catalogues, and builds long-term organic SEO authority. It is designed for visitors who want to explore your brand at their own pace.\n\nA Sales Funnel, on the other hand, is a guided, high-converting customer acquisition path designed with a specific conversion goal. It takes a cold prospect from an initial ad click through a high-converting landing page, interactive lead qualification form, instant WhatsApp confirmation, and strategic retargeting sequence. While websites inform visitors, sales funnels convert visitors into paying customers.",
    category: "Landing Pages & Funnels",
  },
  {
    id: "faq-3",
    question: "Meta Ads vs Google Ads—which platform should my business prioritize?",
    answer:
      "Both platforms serve distinct roles in a complete growth system:\n• Google Ads (Search & Shopping) capture high-intent buyers who are actively searching for your service right now (e.g., 'best real estate developer' or 'clinic near me'). It yields high conversion intent.\n• Meta Ads (Facebook & Instagram) generate new demand by proactively placing visually engaging video and image ads in front of targeted user demographics based on interests and behavior.\n\nFor optimal growth, we recommend using Google Ads to capture existing search demand while scaling Meta Ads to generate mass awareness and feed your retargeting funnel.",
    category: "Ads & Traffic",
  },
  {
    id: "faq-4",
    question: "How long before I start getting incoming qualified leads?",
    answer:
      "Once campaign strategy, landing page setup, tracking pixels, and ad creatives are approved and deployed, paid ad campaigns typically begin generating incoming lead inquiries within 24 to 48 hours.\n\nFurthermore, because our systems integrate instant CRM and WhatsApp sync, your sales team receives immediate notifications the second a lead submits a form. Within 2 to 4 weeks of continuous campaign optimization, we establish your baseline Cost Per Lead (CPL) and begin scaling campaign budgets efficiently.",
    category: "General",
  },
  {
    id: "faq-5",
    question: "Can I hire Ads Pro India for just one specific service?",
    answer:
      "Yes, absolutely. While our full Digital Growth Engine produces the highest ROI by connecting all channels, you can start with any individual service module based on your current business priority:\n• Meta Ads or Google Ads Management if you already have a high-converting landing page.\n• Custom Landing Page / Web Application Development if your ads are running but traffic isn't converting.\n• WhatsApp Automation & CRM Integration if you are generating leads but struggling with manual follow-up.\n\nAs your campaign generates revenue, you can seamlessly plug in additional ecosystem modules.",
    category: "General",
  },
  {
    id: "faq-6",
    question: "What happens to leads after they fill out a form on the landing page?",
    answer:
      "The moment a prospect submits a lead form on your landing page, our automated infrastructure executes an instant 4-step handoff within 60 seconds:\n1. Data Validation: The system verifies phone numbers and email addresses to eliminate fake submissions.\n2. Instant CRM Sync: Lead details are automatically populated into your CRM, Google Sheet, or sales dashboard.\n3. Automated WhatsApp/Email Trigger: An instant confirmation message with your brochure/offer is sent directly to the lead's WhatsApp.\n4. Sales Notification: Your team receives an instant push notification with lead details so they can initiate contact while interest is at peak.",
    category: "CRM & Automation",
  },
  {
    id: "faq-7",
    question: "Why is ad creative considered the most important leverage variable?",
    answer:
      "Modern ad platform algorithms (on Meta and Google) rely on machine learning and user engagement signals to distribute ads. The ad creative (visual hook, headline, and video script) acts as your primary targeting filter.\n\nA scroll-stopping 3-second visual hook combined with direct response copy dramatically increases Click-Through-Rate (CTR). High CTR signals relevance to the ad algorithm, which lowers your CPM (Cost Per Thousand Impressions) and CPC (Cost Per Click)—allowing you to get double the leads for the exact same ad spend.",
    category: "Ads & Traffic",
  },
  {
    id: "faq-8",
    question: "What makes Ads Pro India different from traditional marketing agencies?",
    answer:
      "Traditional digital agencies operate in silos—the ad team doesn't talk to the web developer, and neither takes responsibility for actual sales closed. They report vanity metrics like 'impressions' and 'clicks' without driving net profit.\n\nAds Pro India builds complete, interconnected growth systems. We engineer the full customer path—from ad creative, high-speed landing page, and automated lead capture to CRM sync and retargeting funnels. We measure our success on net profit, unit economics, and compounding Return on Ad Spend (ROAS).",
    category: "General",
  },
]
