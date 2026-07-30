# Common Components

Reusable, generic UI components used across multiple sections.

## Components

- **SectionContainer** — Section wrapper with padding, background variants, max-width
- **SectionHeading** — Label + title + optional description (`.sec-lbl` + `.sec-title` pattern)
- **SectionBadge** — Small pill/tag badge (cert badges, popular tags, process tags)
- **GradientText** — Wraps text with primary blue color (`<em>` equivalent)
- **AnimatedButton** — Accessible button/link with Framer Motion hover/tap animations
- **GlassCard** — Glassmorphism card with light/dark variants and hover lift effect
- **IconWrapper** — Colored icon box container (for service icons, contact icons, etc.)
- **MaxWidthContainer** — Center-aligned 1200px max-width container
- **GridContainer** — Responsive grid with configurable columns (2, 3, or 4)
- **BackgroundGlow** — Animated gradient blob for decorative backgrounds
- **Divider** — Horizontal rule with light/dark variants

## Rules

- No website-specific content or hardcoded text
- Accept all content via `children` or props
- Only add a new component here if it's used in 2+ different sections
