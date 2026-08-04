export interface DetailedService {
  id: string
  title: string
  tagline: string
  iconName: string
  badge: string
  accentColor: string // Tailwind gradient e.g. "from-blue-500 to-indigo-600"
  whatItIs: string
  whyNeeded: string
  keySubtypes: string[]
  workflowSteps: { step: string; title: string; desc: string }[]
  benefits: string[]
  businessTypes: string[]
  worksBestWith: { id: string; title: string; relationship: string }[]
}

export const DETAILED_SERVICES_DATA: DetailedService[] = [
  {
    id: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    tagline: "Turn Cold Social Traffic Into High-Intent Lead Pipeline & Revenue",
    iconName: "ThumbsUp",
    badge: "Paid Social Engine",
    accentColor: "from-blue-500 via-indigo-500 to-purple-600",
    whatItIs:
      "Meta Ads are full-funnel paid advertising campaigns executed across Facebook, Instagram, Messenger, and Audience Network. We build end-to-end campaign architectures—combining precision demographic targeting, AI lookalikes, scroll-stopping video creatives, and retargeting loops.",
    whyNeeded:
      "Over 2 billion active users scroll Facebook and Instagram daily. Running organic posts alone reaches less than 2% of your audience. Meta Ads allow you to bypass algorithm limits, target exact decision-makers, and generate predictable sales or leads on demand.",
    keySubtypes: [
      "Facebook Prospecting Ads",
      "Instagram Reels & Story Ads",
      "Dynamic Retargeting Loops",
      "AI Lookalike & Custom Audiences",
    ],
    workflowSteps: [
      { step: "01", title: "Creative Hooks", desc: "Deploy scroll-stopping video & image ad angles targeting key customer pain points." },
      { step: "02", title: "Precision Targeting", desc: "Use Meta AI lookalikes & interest stacks to reach qualified buyers." },
      { step: "03", title: "Destination Routing", desc: "Direct traffic to custom high-converting landing pages tailored to the ad offer." },
      { step: "04", title: "Retargeting Loop", desc: "Re-engage visitors who didn't convert with testimonials & urgency offers." },
    ],
    benefits: [
      "Instant brand visibility to millions of targeted users",
      "Lower Cost Per Acquisition (CPA) through AI optimization",
      "Scalable daily lead and sale generation",
      "Full transparency on Return on Ad Spend (ROAS)",
    ],
    businessTypes: ["E-Commerce & D2C Brands", "Real Estate Developers", "Local Business & Healthcare", "B2B Lead Generation"],
    worksBestWith: [
      { id: "landing-page", title: "Landing Page Development", relationship: "Captures ad traffic with sub-2s load speed for 3x higher conversion." },
      { id: "creative", title: "Creative & Copy", relationship: "Feeds campaigns with scroll-stopping ad graphics & high-converting hooks." },
      { id: "lead-gen", title: "Lead Generation", relationship: "Instantly syncs lead forms with CRM & automated WhatsApp nurture." },
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads (Search, Shopping & YouTube)",
    tagline: "Capture High-Intent Customers At The Exact Moment They Want To Buy",
    iconName: "Search",
    badge: "High Intent Capture",
    accentColor: "from-blue-600 via-cyan-500 to-emerald-500",
    whatItIs:
      "Google Ads capture active commercial intent across Google Search, Shopping feeds, Display Network, and YouTube. Instead of pushing ads to casual scrollers, Google Ads place your business directly in front of buyers actively searching for your exact solutions right now.",
    whyNeeded:
      "When someone searches 'best real estate consultant near me' or 'buy organic skincare', they are ready to purchase. If your business isn't at the top of Google Search, your competitors get 100% of those ready-to-buy customers.",
    keySubtypes: [
      "High-Intent Search Campaigns",
      "Google Shopping & Performance Max",
      "YouTube Video Placement Ads",
      "Google Display Retargeting",
    ],
    workflowSteps: [
      { step: "01", title: "Keyword Audit", desc: "Identify commercial intent keywords with high search volume and buying intent." },
      { step: "02", title: "Ad Copywriting", desc: "Craft compelling headline extensions and negative keyword filters to eliminate bad clicks." },
      { step: "03", title: "Message Match", desc: "Send clicks to dedicated landing pages matching exact search query intent." },
      { step: "04", title: "Conversion Bidding", desc: "Optimize target CPA and ROAS bidding algorithms to maximize profit margin." },
    ],
    benefits: [
      "Highest conversion rates among all digital ad channels",
      "Pay only when qualified users actually click your ad (PPC)",
      "Instant top-of-page visibility above organic search results",
      "Granular control over negative keywords & daily spend hygiene",
    ],
    businessTypes: ["High-Ticket B2B & Agencies", "Local Services & Clinics", "E-Commerce Stores", "Luxury Real Estate"],
    worksBestWith: [
      { id: "landing-page", title: "Landing Page Development", relationship: "Ensures 100% message match between search ad and landing page offer." },
      { id: "web-dev", title: "Website Development", relationship: "Builds domain authority and quality score for lower cost-per-click." },
      { id: "funnels", title: "Funnel Building", relationship: "Nurtures high-intent search leads into high-value repeat clients." },
    ],
  },
  {
    id: "lead-gen",
    title: "Lead Generation Systems",
    tagline: "Turn Anonymous Web Traffic Into Contactable, Qualified Sales Pipeline",
    iconName: "Mail",
    badge: "Pipeline Engine",
    accentColor: "from-amber-500 via-orange-500 to-red-500",
    whatItIs:
      "A Lead Generation System is an end-to-end pipeline that attracts potential buyers, captures their verified contact details (Name, Phone, Email, Business Need), validates lead quality, and instantly routes them to your sales team and CRM for instant closure.",
    whyNeeded:
      "Without a structured lead generation flow, website traffic is wasted. If a interested prospect leaves without giving contact info, you lose that business forever. Lead generation creates a steady, predictable stream of qualified sales inquiries every day.",
    keySubtypes: [
      "Multi-Channel Lead Sourcing",
      "Instant 60-Second Lead Sync",
      "CRM Integration & Lead Scoring",
      "Automated WhatsApp & Email Nurturing",
    ],
    workflowSteps: [
      { step: "01", title: "Targeted Ads", desc: "Drive qualified traffic using Meta or Google Ads featuring compelling lead magnet offers." },
      { step: "02", title: "Landing Page Capture", desc: "Prospect enters verified contact details into clean, friction-free lead forms." },
      { step: "03", title: "Instant CRM Route", desc: "Data syncs within 60 seconds to your CRM with lead quality scoring." },
      { step: "04", title: "Automated Touchpoint", desc: "Trigger instant automated WhatsApp greeting & handoff to sales team for closing." },
    ],
    benefits: [
      "Predictable daily volume of verified prospect inquiries",
      "Zero manual data entry with 100% automated CRM synchronization",
      "Higher conversion rate by contacting leads within 60 seconds",
      "Full tracking of cost-per-lead (CPL) and lead-to-sale ratio",
    ],
    businessTypes: ["Real Estate Agencies & Developers", "Financial & Advisory Services", "B2B Companies & Agencies", "Coaching & Institutes"],
    worksBestWith: [
      { id: "meta-ads", title: "Meta Ads", relationship: "Drives high-volume lead inquiries using targeted native forms and landing pages." },
      { id: "google-ads", title: "Google Ads", relationship: "Captures urgent, high-intent lead searches for high closing probability." },
      { id: "funnels", title: "Funnel Building", relationship: "Automates instant follow-up sequences via WhatsApp and Email." },
    ],
  },
  {
    id: "funnels",
    title: "Funnel Building",
    tagline: "Guide Cold Prospects Through Multi-Step Conversion Architecture",
    iconName: "Layers",
    badge: "Conversion Architecture",
    accentColor: "from-purple-500 via-pink-500 to-rose-500",
    whatItIs:
      "Funnel Building is the art of creating step-by-step digital journeys that guide a cold prospect from first awareness to lead capture, upsells, automated follow-up, and ultimate purchase—operating automatically 24 hours a day, 7 days a week.",
    whyNeeded:
      "95% of first-time visitors leave without buying. Relying on a single webpage loses almost all potential customers. A structured sales funnel captures lead intent, nurtures hesitation through automated email/WhatsApp, and boosts Average Order Value (AOV).",
    keySubtypes: [
      "Multi-Step Lead Qualification Funnels",
      "One-Click Upsell & Order Bump Flows",
      "High-Converting Thank You Pages",
      "Automated Email & WhatsApp Sequences",
    ],
    workflowSteps: [
      { step: "01", title: "Traffic Entry", desc: "Cold visitors arrive via ads or search to a dedicated opt-in landing page." },
      { step: "02", title: "Qualification Form", desc: "Prospects complete multi-step questions filtering out unqualified tire-kickers." },
      { step: "03", title: "Thank You & Upsell", desc: "Immediate redirection to booking calendar, special offer, or product upsell." },
      { step: "04", title: "Automated Nurture", desc: "Drip sequence of emails & WhatsApp messages educating prospect until purchase." },
    ],
    benefits: [
      "Increases Average Order Value (AOV) via strategic upsells",
      "Automates 80% of lead qualification before your sales team speaks to them",
      "Operates 24/7 generating revenue on complete autopilot",
      "Maximizes total customer lifetime value (LTV)",
    ],
    businessTypes: ["D2C & E-Commerce Brands", "Coaching & Info-Product Sellers", "High-Ticket B2B Consulting", "Subscription Services"],
    worksBestWith: [
      { id: "landing-page", title: "Landing Page Development", relationship: "Provides the high-speed opt-in foundation for every funnel stage." },
      { id: "lead-gen", title: "Lead Generation", relationship: "Syncs lead data into automated nurturing sequences." },
      { id: "meta-ads", title: "Meta Ads", relationship: "Feeds top-of-funnel traffic into the qualification sequence." },
    ],
  },
  {
    id: "landing-page",
    title: "Landing Page Development",
    tagline: "Purpose-Built, Sub-2s Loading Pages Engineered Purely For Conversion",
    iconName: "MousePointerClick",
    badge: "CRO Engine",
    accentColor: "from-indigo-500 via-purple-500 to-pink-500",
    whatItIs:
      "A Landing Page is a standalone, hyper-focused webpage designed for a single campaign objective (e.g., getting a phone call, form fill, or purchase) without distracting header menus, external links, or irrelevant noise.",
    whyNeeded:
      "Traditional company websites have 15+ navigation links, sidebars, and blogs. Sending ad traffic to a generic website causes analysis paralysis and 80%+ bounce rates. A dedicated landing page increases lead conversion by 3x - 5x.",
    keySubtypes: [
      "Direct-Response Landing Pages",
      "Sub-2 Second Mobile Load Speed",
      "Conversion Rate Optimization (CRO)",
      "A/B Headline & Offer Variant Testing",
    ],
    workflowSteps: [
      { step: "01", title: "Ad Message Match", desc: "Ensure headline directly matches the exact ad copy that the visitor clicked." },
      { step: "02", title: "Frictionless Form", desc: "Place high-visibility lead capture forms above the fold with social proof." },
      { step: "03", title: "Trust & Proof", desc: "Embed real client testimonials, video reviews, security badges, and FAQs." },
      { step: "04", title: "Single Focused CTA", desc: "Drive 100% of user focus toward a single clear conversion button." },
    ],
    benefits: [
      "300%+ higher conversion rate compared to standard website pages",
      "Lowers Cost Per Lead (CPL) and ad acquisition costs significantly",
      "Sub-2 second page speed guarantee on mobile devices",
      "Clear data analytics to run precise A/B split tests",
    ],
    businessTypes: ["Real Estate Projects", "Healthcare & Clinics", "E-Commerce Product Launches", "Service Providers"],
    worksBestWith: [
      { id: "meta-ads", title: "Meta Ads", relationship: "Converts social media scrollers into verified lead inquiries." },
      { id: "google-ads", title: "Google Ads", relationship: " Delivers 100% keyword message match for maximum Quality Score." },
      { id: "creative", title: "Creative & Copy", relationship: "Packs pages with persuasive headlines, social proof, and call-to-actions." },
    ],
  },
  {
    id: "web-dev",
    title: "Website Development (Next.js & Modern Stacks)",
    tagline: "Enterprise Brand Digital Headquarters Built For Speed, Trust & SEO Rank",
    iconName: "Globe",
    badge: "Digital HQ",
    accentColor: "from-cyan-500 via-blue-600 to-indigo-700",
    whatItIs:
      "We design and code modern, custom-built websites using cutting-edge stacks like Next.js, React, and Tailwind CSS. We craft ultra-fast, responsive digital headquarters that project authority, rank high on Google SEO, and convert visitors into long-term clients.",
    whyNeeded:
      "Your website is the face of your business. Outdated, slow, or broken mobile websites destroy consumer trust instantly. A modern Next.js website loads instantly, ranks on search engines, and establishes market dominance over competitors.",
    keySubtypes: [
      "Next.js & React Web Applications",
      "Headless E-Commerce Development",
      "Corporate Brand Digital HQs",
      "Technical SEO & Schema Optimization",
    ],
    workflowSteps: [
      { step: "01", title: "Architecture & UX", desc: "Map user journeys, site taxonomy, and conversion wireframes." },
      { step: "02", title: "UI Design System", desc: "Create modern Figma prototypes with rich dark/light theme aesthetics." },
      { step: "03", title: "Clean Next.js Code", desc: "Develop clean, component-driven TypeScript code with sub-2s speed guarantee." },
      { step: "04", title: "SEO & Launch", desc: "Implement structured data schema, mobile optimization, and security protocols." },
    ],
    benefits: [
      "Sub-2 second page loading speeds guaranteed across all devices",
      "Built-in Google technical SEO structure for high organic search rank",
      "Unmatched digital brand authority that justifies premium pricing",
      "Full mobile responsiveness and modern glassmorphic UI",
    ],
    businessTypes: ["Corporate Enterprises", "Growing D2C & E-Commerce Brands", "Professional Consultancies", "Technology Startups"],
    worksBestWith: [
      { id: "google-ads", title: "Google Ads", relationship: "Improves Google Quality Score to lower pay-per-click costs." },
      { id: "landing-page", title: "Landing Page Development", relationship: "Complements campaign landing pages with an authoritative brand homepage." },
      { id: "creative", title: "Creative & Copy", relationship: "Fills site with compelling brand narratives and visual assets." },
    ],
  },
  {
    id: "creative",
    title: "Creative & Copywriting",
    tagline: "Scroll-Stopping Visual Assets & Hooks That Capture Attention & Drive Action",
    iconName: "PenTool",
    badge: "Leverage Variable",
    accentColor: "from-purple-600 via-pink-500 to-orange-400",
    whatItIs:
      "Creative & Copywriting is the fuel of your digital growth engine. We produce high-converting ad graphics, UGC-style video scripts, persuasive landing page copy, and scroll-stopping headlines engineered to stop users in their tracks and compel them to click.",
    whyNeeded:
      "Ad algorithms on Meta and TikTok are driven by creative performance. A campaign with mediocre ad graphics will burn money no matter how good the targeting is. Scroll-stopping creatives reduce Cost Per Click (CPC) and dramatically increase ROAS.",
    keySubtypes: [
      "UGC Video Scripting & Editing",
      "High-CTR Static & Carousel Ad Graphics",
      "Direct-Response Copywriting Frameworks",
      "Headline & Hook Variant Production",
    ],
    workflowSteps: [
      { step: "01", title: "Competitor Research", desc: "Analyze top-performing ad creatives in your industry to identify visual gaps." },
      { step: "02", title: "Hook Ideation", desc: "Write 5+ variations of 3-second opening hooks and emotional pain point angles." },
      { step: "03", title: "Visual Editing", desc: "Design high-resolution images, motion graphics, and captions engineered for social feeds." },
      { step: "04", title: "Iteration & Scaling", desc: "Analyze CTR and watch-time data to iterate on winning creative concepts." },
    ],
    benefits: [
      "Dramatically reduces Cost Per Click (CPC) and CPM on ad platforms",
      "Protects ad campaigns against creative fatigue and audience burn-out",
      "Establishes a strong visual brand identity across all digital touchpoints",
      "Increases ad click-through rates (CTR) by 2x - 4x",
    ],
    businessTypes: ["D2C E-Commerce Stores", "Consumer Apps & Brands", "Real Estate Projects", "Lead Generation Advertisers"],
    worksBestWith: [
      { id: "meta-ads", title: "Meta Ads", relationship: "Powers FB & IG campaigns with fresh, high-performing visual creative assets." },
      { id: "landing-page", title: "Landing Page Development", relationship: "Ensures headline and image consistency from ad click to landing page." },
      { id: "funnels", title: "Funnel Building", relationship: "Crafts persuasive copy for email drips and WhatsApp follow-ups." },
    ],
  },
  {
    id: "app-dev",
    title: "App Development (iOS, Android & Flutter)",
    tagline: "Custom Native & Cross-Platform Mobile Applications Built For Scale",
    iconName: "Smartphone",
    badge: "Retention Platform",
    accentColor: "from-blue-600 via-indigo-600 to-purple-600",
    whatItIs:
      "We design and build fast, reliable cross-platform mobile applications for iOS and Android using modern frameworks like Flutter and React Native. From MVP launches to full product ecosystems, we deliver seamless mobile experiences that engage users.",
    whyNeeded:
      "Mobile users spend 88% of their mobile time inside apps rather than browsers. Having a custom app provides direct access to your customers' home screens, enables instant zero-cost push notification marketing, and maximizes customer lifetime value (LTV).",
    keySubtypes: [
      "Cross-Platform iOS & Android Apps",
      "Flutter & React Native Architecture",
      "Push Notification & Engagement Setup",
      "App Store & Google Play Optimization",
    ],
    workflowSteps: [
      { step: "01", title: "UX Wireframing", desc: "Design intuitive screen flows focused on effortless user navigation." },
      { step: "02", title: "Cross-Platform Build", desc: "Develop clean native-performance code deployed synchronously to iOS and Android." },
      { step: "03", title: "Backend API Sync", desc: "Connect databases, payment gateways, and real-time user authentication." },
      { step: "04", title: "Store Publishing", desc: "Handle full App Store & Google Play review guidelines and launch protocols." },
    ],
    benefits: [
      "Direct home-screen access to your power users and repeat buyers",
      "Zero-cost re-engagement marketing via targeted mobile push notifications",
      "Blazing fast native performance with offline data sync capabilities",
      "Boosts business valuation and long-term brand equity",
    ],
    businessTypes: ["E-Commerce & D2C Brands", "SaaS & Tech Platforms", "Booking & Service Platforms", "Community & Media Apps"],
    worksBestWith: [
      { id: "web-dev", title: "Website Development", relationship: "Integrates web application data seamlessly with mobile app backend APIs." },
      { id: "lead-gen", title: "Lead Generation", relationship: "Drives app installs and user onboarding through direct ad funnels." },
      { id: "funnels", title: "Funnel Building", relationship: "Triggers automated push notification sequences to retain active app users." },
    ],
  },
  {
    id: "ad-consulting",
    title: "Ad Consulting & Growth Advisory",
    tagline: "Senior Strategic Oversight, Media Audit & Campaign Scaling For In-House Teams",
    iconName: "Lightbulb",
    badge: "Strategic Advisory",
    accentColor: "from-emerald-500 via-teal-500 to-cyan-600",
    whatItIs:
      "Ad Consulting is a high-level strategic partnership for businesses with existing in-house marketing teams or active campaigns. We perform deep account audits, uncover tracking leaks, restructure bidding strategies, create team SOPs, and provide bi-weekly growth roadmapping.",
    whyNeeded:
      "Many businesses spend lakhs on ads but suffer from hidden tracking errors, poor account structure, or unoptimized bidding. Hiring a full senior media buyer in-house is expensive. Consulting provides enterprise-level guidance without agency overhead.",
    keySubtypes: [
      "Full Account & Pixel Tracking Audit",
      "Media Spend & Attribution Optimization",
      "Scalable Campaign Roadmapping",
      "In-House Team Training & Standard Operating Procedures (SOPs)",
    ],
    workflowSteps: [
      { step: "01", title: "Deep Audit", desc: "Examine ad accounts, pixel attribution, CPA benchmarks, and funnel conversion leaks." },
      { step: "02", title: "Action Plan", desc: "Deliver a step-by-step growth roadmap detailing bidding, creative, and offer changes." },
      { step: "03", title: "Team Upskilling", desc: "Train your internal team on campaign structure, SOPs, and daily spend hygiene." },
      { step: "04", title: "Bi-Weekly Review", desc: "Review real-time ROAS dashboards and adjust media strategy to scale profit margins." },
    ],
    benefits: [
      "Immediately eliminates wasted ad spend and invalid traffic clicks",
      "Provides senior media buying expertise at a fraction of full retainer cost",
      "Upskills your existing internal marketing team with proven industry SOPs",
      "Delivers clear, data-driven scaling roadmaps to achieve predictable ROAS",
    ],
    businessTypes: ["In-House Marketing Teams", "Scaling Startup Founders", "High-Spend E-Commerce Brands", "Enterprise Companies"],
    worksBestWith: [
      { id: "meta-ads", title: "Meta Ads", relationship: "Audits and restructures Facebook/Instagram campaign architectures for scale." },
      { id: "google-ads", title: "Google Ads", relationship: "Cleans negative keywords, bidding strategies, and Quality Scores." },
      { id: "funnels", title: "Funnel Building", relationship: "Identifies conversion drop-offs across landing pages and email follow-ups." },
    ],
  },
]
