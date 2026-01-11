# FamCal

FamCal is a family calendar app focused on making the hectic fun of family life easier to manage. The goal is a shared, clear view of what’s happening, with integrations that keep everyone in sync.

## Goals

- Consolidate family events into a single, readable schedule.
- Reduce scheduling conflicts with quick updates and shared visibility.
- Integrate with Google Calendar first, with support for additional providers later.

## Tech Stack

- Vite + React + TypeScript
- TanStack Router (file-based routes in `src/routes/`)
- Tailwind CSS
- Vitest + Testing Library
- Cloudflare Wrangler for deployment

## Getting Started

```bash
pnpm install
pnpm dev
```

The dev server runs on `http://localhost:3000`.

## Common Commands

```bash
pnpm dev        # start local dev server
pnpm build      # build for production
pnpm preview    # preview production build locally
pnpm test       # run tests once
pnpm run deploy # build and deploy with Wrangler
```

## Project Structure

- `src/routes/`: file-based routes for the app
- `src/components/`: shared UI components
- `src/lib/`: utilities and shared logic
- `src/data/`: local data helpers or fixtures
- `public/`: static assets

## Integrations

Google Calendar is the first planned integration. Future targets include other calendar providers once the core experience is stable.

## Contributing

See `AGENTS.md` for contributor guidelines and conventions.

## Roadmap (Near Term)

- Authentication and Google Calendar OAuth
- Read-only calendar sync
- Shared family views and permissions
- Reminders and notification preferences
