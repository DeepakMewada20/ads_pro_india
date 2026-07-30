# Assets

Static assets that are imported in components (not served from `public/`).

## Structure

- `images/` — Image files processed by Next.js Image Optimization
- `icons/` — Custom SVG icons (not from Lucide)
- `logos/` — Logo variations

## When to use `public/` vs `assets/`

- Use `public/` for files that need a direct URL (robots.txt, favicon, OG images)
- Use `assets/` for files imported in components via `import` statements
