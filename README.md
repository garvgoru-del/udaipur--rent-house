# UDAIPUR RENT HOUSE

A production-ready MVP rental marketplace for Udaipur built with Next.js, TypeScript, Tailwind CSS and Supabase.

## Features

- Premium responsive design using royal blue, navy, white and gold accents.
- SEO-friendly homepage with Udaipur locality search, filters and property cards.
- Static property detail pages for realistic Udaipur demo rentals.
- Owner, tenant and broker dashboard UX for favourites, enquiries, visits and listings.
- Post Property flow and admin verification dashboard.
- Supabase schema, RLS policies, migrations and seed data for profiles, properties, favourites, enquiries and visit requests.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to connect authentication and database reads/writes.

## Supabase

Apply the migration and seed data with the Supabase CLI or SQL editor:

```bash
supabase db reset
```

Schema files live in `supabase/migrations/001_initial_schema.sql`; demo rows live in `supabase/seed/seed.sql`.

## Quality checks

```bash
npm run lint
npm run type-check
npm run build
```
