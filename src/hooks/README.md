# Hooks

Custom React hooks encapsulating reusable stateful logic.

## When to create a hook

- When the same stateful logic is needed in 2+ components
- When you want to hide implementation details (e.g., IntersectionObserver setup)
- When a component's logic can be extracted for testability

## What belongs here

- `use*` functions that use React hooks internally
- Hooks that wrap third-party libraries (Lenis, framer-motion, GSAP)

## What does NOT belong here

- Utility functions without hooks (go to `lib/`)
- Business logic that is specific to a single component
- Data fetching logic (use `lib/services/` or Server Components)
