# Progress Tracker

Update this file after every meaningful implementation change.

This file is intentionally light during the planning stage. Once development begins, keep it updated so the project can resume safely between sessions.

## Current Phase

- Implementation started / Base route groups complete

## Current Goal

- Set up PostgreSQL and Prisma for internal user and role mapping as the next implementation unit. Read `context/steps/04-DatabaseAndRoleMappingFoundation.md` for more context.

## Completed

- Product idea defined.
- User roles identified:
  - Student
  - Teacher/Reviewer
  - Content Admin
  - Reviewer Admin
  - Super Admin
- Core user stories drafted.
- Context file structure prepared.
- MVP scope defined.
- Architecture direction defined.
- UI direction defined.
- Code standards defined.
- AI workflow rules defined.
- Git repository initialized and initial branch renamed to `main`.
- Next.js 15 App Router project initialized with TypeScript strict mode.
- Base project files added:
  - `package.json`
  - `package-lock.json`
  - `next.config.ts`
  - `tsconfig.json`
  - `eslint.config.mjs`
  - `.gitignore`
  - `app/layout.tsx`
  - `app/page.tsx`
  - `app/globals.css`
- Wonkledge dark theme CSS custom properties mapped from `context/ui-context.md`.
- Initial home route added as a lightweight project shell.
- Dependencies installed with npm.
- Verified setup with:
  - `npm run typecheck`
  - `npm run lint`
  - `npm run build`
- Tailwind CSS 4 and PostCSS configured for the Next.js app.
- PostCSS config finalized as `postcss.config.js` so Next.js reliably applies Tailwind during dev/build.
- Tailwind CSS-first theme mapping added for Wonkledge dark tokens.
- Tailwind source paths configured for App Router, components, features, and lib files.
- shadcn/ui initialized with `components.json`, project aliases, Lucide icon configuration, and `lib/utils.ts`.
- Initial home route migrated to Tailwind utility classes while preserving the dark Wonkledge shell.
- Step record `context/steps/01-TailwindAndShadcn.md` marked completed.
- Verified Tailwind/shadcn setup with:
  - `npm run typecheck`
  - `npm run lint`
  - `npm run build`
- Clerk authentication package installed with `@clerk/nextjs`.
- Clerk provider wired into `app/layout.tsx` while preserving the dark Wonkledge shell.
- Clerk middleware added in `middleware.ts` with protected-route matchers for future student, teacher, admin, dashboard, learning, practice, profile, bookmark, subscription, and scoped API routes.
- Custom Clerk sign-in and sign-up routes added:
  - `app/(auth)/sign-in/[[...sign-in]]/page.tsx`
  - `app/(auth)/sign-up/[[...sign-up]]/page.tsx`
- Safe Clerk environment placeholders added in `.env.example`.
- `.gitignore` excludes local `.clerk/` configuration created by Clerk keyless development mode.
- Clerk prebuilt-component styling mapped to Wonkledge dark CSS variables in `app/globals.css`.
- Tailwind source paths restored for future `components` and `features` files.
- Detailed user stories file normalized to `context/user-stories.md` to match `CLAUDE.md`.
- Step record `context/steps/02-ClerkAuthentication.md` marked completed.
- Step record `context/steps/03-BaseRouteGroups.md` created for the next implementation unit.
- Verified Clerk setup with:
  - `npm run typecheck`
  - `npm run lint`
  - `npm run build`
- Public route moved under `app/(public)/` while preserving `/`.
- Base protected route groups created:
  - `app/(student)/`
  - `app/(teacher)/`
  - `app/(admin)/`
- Minimal protected route shell pages added:
  - `/student`
  - `/teacher`
  - `/admin`
- Protected group layouts use Clerk server-side `auth.protect()`.
- Step record `context/steps/03-BaseRouteGroups.md` marked completed.
- Step record `context/steps/04-DatabaseAndRoleMappingFoundation.md` created for the next implementation unit.
- Verified base route group setup with:
  - `npm run lint`
  - `npm run build`
  - `npm run typecheck`

## In Progress

- Project setup, Tailwind/shadcn setup, Clerk authentication, and base route groups are complete.
- Next implementation unit should add the PostgreSQL/Prisma foundation for internal user and role mapping.

## Next Up

1. Add PostgreSQL and Prisma foundation:
   - database connection
   - Prisma schema
   - Prisma client helper
   - environment placeholders
2. Create internal user and role mapping.
3. Build the first dashboard shells.
4. Normalize protected dashboard redirects after internal roles exist.

## Open Questions

- Which payment gateway should be implemented first: eSewa, Khalti, or IME Pay?
- Which video provider should be used for MVP: Cloudflare Stream, Vimeo, or YouTube private/unlisted?
- Which AI provider should be used first: OpenAI, Gemini, or provider abstraction from day one?
- Will teacher review be included in the first paid MVP plan or introduced after launch?
- Should SMS notifications be added in MVP or later?
- What exact first exam category should be launched first: SEE/SLC, +2, Loksewa, or PEA?

## Architecture Decisions

- The app will start as a mobile-first web app.
- The app should use Next.js, TypeScript, Tailwind CSS, shadcn/ui, Clerk, PostgreSQL, and Prisma.
- Clerk handles authentication; the internal database handles roles, profiles, subscriptions, progress, and permissions.
- The system must be exam-category agnostic.
- Students may have multiple active subscriptions.
- AI-generated content must remain draft until reviewed.
- Payment verification must happen server-side before subscription activation.
- Video hosting should use an external provider in MVP.
- AI usage and estimated cost must be logged.

## Session Notes

- The project is an AI-powered Nepal-focused learning platform.
- The app should not become a generic Udemy clone.
- The main differentiator is AI-driven weakness/strength tracking and personalized study guidance.
- Admin content management and review workflow are essential.
- Subscription plans must support different prices for different exam categories, levels, subjects, and bundles.
- The product should be designed so new exam categories can be added through data/configuration, not hardcoded logic.
- 2026-05-08: Read `CLAUDE.md`, project context files, and detailed user stories before implementation.
- 2026-05-08: Initialized Git and scaffolded the first Next.js app setup.
- 2026-05-08: `npm install` reported 2 moderate npm audit findings; do not run `npm audit fix --force` without reviewing dependency impact.
- 2026-05-08: Added the step tracking workflow to `CLAUDE.md` and created `context/steps/01-TailwindAndShadcn.md` as the active task record for the next implementation unit.
- 2026-05-08: Completed Tailwind CSS and shadcn/ui setup. Tailwind uses the official v4 PostCSS integration, `app/globals.css` preserves and maps Wonkledge dark tokens, and shadcn is configured without adding generated UI primitives yet.
- 2026-05-08: Created `context/steps/02-ClerkAuthentication.md` as the next task record for Clerk authentication setup.
- 2026-05-08: Fixed Tailwind CSS not applying in the browser by moving PostCSS configuration to `postcss.config.js`; verified the production CSS output contains generated Tailwind utilities such as `.grid`, `.min-h-screen`, `.bg-background`, and token-based text/background classes.
- 2026-05-08: Fixed non-standard `@theme inline` syntax and corrected `@source` paths to resolve utility generation issues in Next.js 15. Verified with a successful production build.
- 2026-05-09: Completed Clerk authentication setup using the current official Clerk Next.js App Router guidance. Because this project uses Next.js 15, the Clerk middleware file is `middleware.ts`.
- 2026-05-09: Added custom `/sign-in` and `/sign-up` Clerk routes, safe Clerk environment placeholders, and protected-route middleware foundations without starting internal role mapping or dashboards.
- 2026-05-09: Renamed `context/wonkledge_user_stories.md` to `context/user-stories.md` so the detailed user stories source-of-truth path matches `CLAUDE.md`.
- 2026-05-09: `npm install @clerk/nextjs` still reports 2 moderate npm audit findings; do not run `npm audit fix --force` without reviewing dependency impact.
- 2026-05-09: Created `context/steps/03-BaseRouteGroups.md` as the next task record for public, student, teacher, and admin route group setup.
- 2026-05-09: Local dev server started on `http://localhost:3001` because port `3000` was already in use. Public `/` and `/sign-in` responded with HTTP 200; `/student` is middleware-protected but remains 404 until Step 03 creates route shells.
- 2026-05-09: Completed Step 03 route groups. `/` remains public from `app/(public)/page.tsx`; `/student`, `/teacher`, and `/admin` now exist and are protected by Clerk middleware plus server-side `auth.protect()` layouts.
- 2026-05-09: Confirmed Clerk protected access can be tested without a database. Database-backed role authorization still requires the next PostgreSQL/Prisma step.
- 2026-05-09: Created `context/steps/04-DatabaseAndRoleMappingFoundation.md` for PostgreSQL, Prisma, internal users, and role mapping.
