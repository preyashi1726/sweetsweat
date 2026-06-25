# Sweat & Sweet Web App

## Setup

Project created with Next.js 16, React, TypeScript, Tailwind CSS, and Supabase.

### Environment Variables

`.env.local` already configured with Supabase credentials.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app directory (routes)
│   ├── auth/login/         # Login page
│   ├── auth/register/      # Register page
│   ├── dashboard/          # Dashboard (main app)
│   ├── onboarding/pair/    # Pair with partner
│   └── page.tsx            # Landing page
├── lib/
│   └── supabase.ts         # Supabase client
├── services/
│   └── auth.ts             # Auth logic
└── types/
    └── models.ts           # TypeScript models
```

## Deployment

Deploy to Vercel:

```bash
npm install -g vercel
vercel
```

Or connect GitHub repo to Vercel dashboard for auto-deployment.

## Next Steps

1. Create Supabase tables (users, couples, checkins, memories, activities)
2. Implement couple linking (create/join)
3. Implement check-ins
4. Implement memories vault
5. Implement points & rewards
6. Add real-time data sync
7. Add file uploads (photos, voice notes)
