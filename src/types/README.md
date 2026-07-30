# Types

TypeScript type definitions and interfaces.

## What belongs here

- Shared interfaces used across multiple files
- Domain models (Service, PricingPlan, FAQItem, etc.)
- Utility types

## Rules

- No runtime code — types only
- Keep interfaces focused (Single Responsibility)
- Use `BaseEntity` for common fields (id, etc.)
- Import from here everywhere; never define the same type twice
