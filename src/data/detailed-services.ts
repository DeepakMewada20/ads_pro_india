export interface DetailedService {
  id: string
  title: string
  tagline: string
  iconName: string
  badge: string
  overview: string
  deliverables: string[]
  keySubtypes: string[]
  worksBestWith: { id: string; title: string; relationship: string }[]
}

export const DETAILED_SERVICES_DATA: DetailedService[] = [
  {
    id: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    tagline: "High-Intent Social Prospecting & Retargeting",
    iconName: "ThumbsUp",
    badge: "Paid Social",
    overview:
      "Full-funnel paid media campaigns on Facebook & Instagram. Combining AI lookalikes, 3-second video hooks, and dynamic retargeting to drive daily sales and leads.",
    deliverables: [
      "Audience persona & lookalike targeting",
      "Scroll-stopping video & carousel ad design",
      "A/B creative testing & bid optimization",
      "Server-side Conversions API tracking",
    ],
    keySubtypes: ["Facebook Prospecting", "Instagram Reels Ads", "Dynamic Retargeting", "Custom Audiences"],
    worksBestWith: [
      { id: "landing-page", title: "Landing Pages", relationship: "Converts ad traffic with sub-2s speed." },
      { id: "creative", title: "Creative & Copy", relationship: "Feeds campaigns with high-CTR visual assets." },
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads (Search, Shopping & YouTube)",
    tagline: "Capture Commercial Search Intent Right When Buyers Are Ready",
    iconName: "Search",
    badge: "High Intent",
    overview:
      "Target active commercial intent across Google Search, Shopping feeds, and YouTube. Position your business at the top of Google when buyers actively search for your solution.",
    deliverables: [
      "High-intent keyword audit & negative keyword hygiene",
      "Ad copywriting & search extension setup",
      "Google Shopping & Performance Max optimization",
      "Target CPA & ROAS automated bidding",
    ],
    keySubtypes: ["Search Ads", "Shopping & PMax", "YouTube Video Ads", "Display Retargeting"],
    worksBestWith: [
      { id: "landing-page", title: "Landing Pages", relationship: "Ensures 100% keyword message match." },
      { id: "web-dev", title: "Website Dev", relationship: "Improves Google Quality Score & lowers CPC." },
    ],
  },
  {
    id: "lead-gen",
    title: "Lead Generation Systems",
    tagline: "Turn Anonymous Web Traffic Into Verified Contact Inquiries",
    iconName: "Mail",
    badge: "Pipeline Engine",
    overview:
      "End-to-end pipeline that attracts potential buyers, captures verified contact details, scores lead quality, and syncs data to your CRM within 60 seconds.",
    deliverables: [
      "Multi-channel lead form integration",
      "60-second real-time CRM data sync",
      "Automated lead quality scoring",
      "Instant WhatsApp greeting automation",
    ],
    keySubtypes: ["Multi-Channel Sourcing", "Instant 60s Sync", "CRM Integration", "WhatsApp Nurture"],
    worksBestWith: [
      { id: "meta-ads", title: "Meta Ads", relationship: "Drives high-volume prospect inquiries." },
      { id: "funnels", title: "Funnels", relationship: "Automates instant follow-up sequences." },
    ],
  },
  {
    id: "funnels",
    title: "Funnel Building",
    tagline: "Automated Multi-Step Conversion Architecture",
    iconName: "Layers",
    badge: "Conversion Flow",
    overview:
      "Step-by-step digital pathways that guide cold prospects from initial click to lead qualification, automated drip nurturing, upsells, and final purchase.",
    deliverables: [
      "Multi-step lead qualification forms",
      "One-click upsell & order bump flows",
      "Thank you & appointment booking pages",
      "Automated WhatsApp & Email drip sequences",
    ],
    keySubtypes: ["Qualification Funnels", "Upsell Sequences", "Thank You Pages", "WhatsApp Drips"],
    worksBestWith: [
      { id: "landing-page", title: "Landing Pages", relationship: "Provides high-speed opt-in entry points." },
      { id: "lead-gen", title: "Lead Generation", relationship: "Triggers automated follow-up sequences." },
    ],
  },
  {
    id: "landing-page",
    title: "Landing Page Development",
    tagline: "Sub-2s Speed Pages Purpose-Built For Conversion",
    iconName: "MousePointerClick",
    badge: "CRO Engine",
    overview:
      "Standalone, hyper-focused web pages designed for a single campaign goal. Free from distracting menus, landing pages boost ad conversion rates by 3x - 5x.",
    deliverables: [
      "Sub-2 second mobile page loading guarantee",
      "Single focused headline & CTA offer match",
      "Embedded social proof & video testimonials",
      "A/B split testing & conversion analytics",
    ],
    keySubtypes: ["Direct-Response Pages", "Sub-2s Speed", "Mobile-First UX", "A/B Testing"],
    worksBestWith: [
      { id: "meta-ads", title: "Meta Ads", relationship: "Converts social scrollers into verified leads." },
      { id: "google-ads", title: "Google Ads", relationship: "Delivers maximum Quality Score & lower CPC." },
    ],
  },
  {
    id: "web-dev",
    title: "Website Development (Next.js)",
    tagline: "Enterprise Digital HQ Built For Speed, Authority & SEO",
    iconName: "Globe",
    badge: "Digital HQ",
    overview:
      "Custom, ultra-fast web applications built on Next.js and Tailwind CSS. Crafting authoritative digital headquarters that load instantly and rank high on Google.",
    deliverables: [
      "Next.js & React clean TypeScript code",
      "Built-in Google technical SEO structure",
      "Headless E-Commerce & CMS integration",
      "Sub-2s load speed & mobile responsiveness",
    ],
    keySubtypes: ["Next.js Web Apps", "Headless E-Com", "Brand HQs", "Technical SEO"],
    worksBestWith: [
      { id: "google-ads", title: "Google Ads", relationship: "Builds domain authority and Quality Score." },
      { id: "creative", title: "Creative & Copy", relationship: "Packs site with compelling brand narrative." },
    ],
  },
  {
    id: "creative",
    title: "Creative & Copywriting",
    tagline: "Scroll-Stopping Visual Assets & Hooks That Drive Action",
    iconName: "PenTool",
    badge: "Ad Leverage",
    overview:
      "High-converting ad graphics, UGC video scripts, and direct-response copy. Engineered to capture attention in 3 seconds and lower Cost Per Click (CPC).",
    deliverables: [
      "UGC-style video scripting & motion graphics",
      "High-CTR static & carousel ad designs",
      "3-second opening hook variations",
      "Persuasive direct-response sales copy",
    ],
    keySubtypes: ["UGC Video Scripts", "Static Ad Graphics", "3s Hook Variations", "Direct Copy"],
    worksBestWith: [
      { id: "meta-ads", title: "Meta Ads", relationship: "Powers campaigns with high-CTR ad assets." },
      { id: "landing-page", title: "Landing Pages", relationship: "Ensures headline consistency from ad to page." },
    ],
  },
  {
    id: "app-dev",
    title: "App Development (iOS & Android)",
    tagline: "Native & Cross-Platform Mobile Apps Built For Retention",
    iconName: "Smartphone",
    badge: "Mobile App",
    overview:
      "Cross-platform mobile applications built on Flutter and React Native. Providing direct home-screen access, zero-cost push notifications, and maximum customer LTV.",
    deliverables: [
      "Cross-platform iOS & Android development",
      "Zero-cost targeted push notifications",
      "Backend REST API & database synchronization",
      "App Store & Google Play publishing",
    ],
    keySubtypes: ["iOS & Android Apps", "Flutter Build", "Push Notifications", "App Store Launch"],
    worksBestWith: [
      { id: "web-dev", title: "Website Dev", relationship: "Syncs web app data with mobile app APIs." },
      { id: "lead-gen", title: "Lead Generation", relationship: "Drives app installs & user onboarding." },
    ],
  },
  {
    id: "ad-consulting",
    title: "Ad Consulting & Growth Advisory",
    tagline: "Senior Strategic Oversight & Scaling For In-House Teams",
    iconName: "Lightbulb",
    badge: "Advisory",
    overview:
      "Strategic advisory for businesses with existing in-house teams. Account audits, pixel tracking fixes, bidding restructures, and bi-weekly scaling roadmaps.",
    deliverables: [
      "Full ad account & pixel tracking audit",
      "Media spend & attribution optimization",
      "Team SOPs & campaign restructuring",
      "Bi-weekly ROAS review & growth roadmap",
    ],
    keySubtypes: ["Account Audit", "Attribution Fix", "Team Training", "Scaling Roadmap"],
    worksBestWith: [
      { id: "meta-ads", title: "Meta Ads", relationship: "Restructures campaign architecture for scale." },
      { id: "google-ads", title: "Google Ads", relationship: "Cleans negative keywords & bidding strategies." },
    ],
  },
]
