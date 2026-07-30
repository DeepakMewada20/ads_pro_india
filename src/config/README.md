# Config

Application configuration objects.

## What belongs here

- Site config (name, URL, social links)
- Feature flags
- Third-party service configuration (API keys, endpoints)

## Rules

- Config values may be derived from constants
- Do not put secrets here — use environment variables
- Keep config files focused by domain
