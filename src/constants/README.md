# Constants

Application-wide constant values.

## What belongs here

- Site name, URL, contact info
- SEO metadata defaults
- Theme configuration
- Any magic values that should not be hardcoded

## Rules

- All exports must be `const` or `as const`
- Do not import from `data/` or `types/` — only from `config/`
- Group related constants into separate files by domain
