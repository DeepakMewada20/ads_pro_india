# Providers

React context providers that wrap the application tree.

## What belongs here

- ThemeProvider (next-themes wrapper)
- Any future global context providers

## Rules

- All providers must be `"use client"`
- Keep providers minimal — one responsibility each
- Compose providers in the root layout, not in individual pages
