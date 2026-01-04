# Cumulus Studio - Next.js Demo App

A modern Next.js 16 demo application showcasing the App Router with server components, TypeScript, Tailwind CSS v4, and external API integration.

## Tech Stack

- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **Geist Font** - Vercel's font family (via `next/font/google`)

## Available Scripts

```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
app/
├── layout.tsx           # Root layout with navigation header
├── page.tsx             # Home landing page
├── not-found.tsx        # Custom 404 page
├── globals.css          # Global styles and Tailwind imports
├── about/
│   └── page.tsx         # About page
├── contact/
│   ├── page.tsx         # Contact page with form UI and server-side API call
│   └── button.tsx       # Client component for contact button
├── users/
│   ├── page.tsx         # Users listing page
│   ├── layout.tsx       # Layout for users section
│   ├── UserExplorer.tsx # Interactive user browser component
│   ├── data.ts          # Data fetching utilities (JSONPlaceholder API)
│   └── [userId]/
│       ├── page.tsx     # Dynamic user detail page
│       └── loading.tsx  # Loading skeleton for user details
└── api/
    └── hello/
        └── route.ts     # API route (GET/POST handlers)
```

## Key Features & Patterns

### Server Components by Default
All pages use React Server Components (RSC) by default. Only the `contact/button.tsx` is explicitly marked as a client component.

### Data Fetching
- Uses native `fetch` with `cache: "no-store"` for fresh data from JSONPlaceholder API
- Server-side data fetching in page components
- Loading UI with `loading.tsx` for dynamic routes

### API Routes
Route handlers are in `app/api/` following the App Router convention:
- `app/api/hello/route.ts` - Example GET/POST handlers

### Styling
- Tailwind CSS v4 with the new PostCSS plugin
- Dark mode support via `dark:` prefix classes
- Responsive design with mobile-first approach

### Navigation
- Link component from `next/link` for client-side navigation
- Sticky header navigation in root layout

### Environment Variables
- `NEXT_PUBLIC_SITE_URL` - Site URL (defaults to localhost:3000)
- `NEXT_PUBLIC_` prefix required for client-accessible variables

## External APIs

The app integrates with:
- **JSONPlaceholder** - Fake API for users and posts data
  - `https://jsonplaceholder.typicode.com/users`
  - `https://jsonplaceholder.typicode.com/posts`

## Image Configuration

Remote images allowed from Getty Images (configured in `next.config.ts`):
```ts
remotePatterns: [{ protocol: "https", hostname: "media.gettyimages.com" }]
```

## TypeScript Configuration

- Path alias configured: `@/*` maps to project root
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler

## Development Notes

1. **Run dev server** before making changes - `npm run dev`
2. **Hot reload** is enabled for fast development
3. **TypeScript strict mode** - ensure type safety when adding new code
4. **Client components** must include `"use client"` directive at top of file
5. **Metadata API** - Each page exports `metadata` for SEO and social sharing
