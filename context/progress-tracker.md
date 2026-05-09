# Progress Tracker

Update this file after every meaningful implementation change.

This file is intentionally light during the planning stage. Once development begins, keep it updated so the project can resume safely between sessions.

## Current Phase

- Implementation started / Landing login logout navigation complete

## Current Goal

- Build the proper admin/staff access request and verification workflow, then continue toward exam category and track structure.

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
- Prisma dependencies installed:
  - `@prisma/client`
  - `prisma`
  - `@prisma/adapter-pg`
- Environment placeholder normalized to `.env.example` and updated with `DATABASE_URL` documentation.
- Prisma 7 configured with:
  - `prisma.config.ts`
  - `prisma/schema.prisma`
  - `prisma/migrations/20260509072609_init_identity/migration.sql`
- Initial internal identity schema added:
  - `User`
  - `UserRole`
  - `AppRole`
  - `UserStatus`
- Initial role set added:
  - Student
  - Teacher/Reviewer
  - Content Admin
  - Reviewer Admin
  - Super Admin
- Shared Prisma client singleton added in `lib/prisma.ts`.
- Server-only internal user and role helper added in `lib/auth/app-user.ts`.
- Student route access now creates a missing internal student user from the current Clerk user.
- `/student`, `/teacher`, and `/admin` route groups now enforce database-backed role checks in addition to Clerk authentication.
- Admin roles no longer automatically grant student or teacher route access unless those roles are explicitly assigned too.
- Initial Prisma migration applied against local PostgreSQL using:
  - `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/wonkledge_db?schema=public"`
- Step record `context/steps/04-DatabaseAndRoleMappingFoundation.md` marked completed.
- Step record `context/steps/05-DashboardShellsAndRoleRedirects.md` created for the next implementation unit.
- Verified database and role-mapping foundation with:
  - `npx prisma validate`
  - `npx prisma migrate dev --name init_identity`
  - `npx prisma generate`
  - `npm run typecheck`
  - `npm run lint`
  - `npm run build`
- Step record `context/steps/05-DashboardShellsAndRoleRedirects.md` renamed and rescoped to `context/steps/05-LandingLoginLogoutNavigation.md`.
- Step record `context/steps/06-DashboardShellsAndRoleRedirects.md` created for the deferred dashboard redirect unit.
- Public landing page replaced the temporary home shell with:
  - desktop navigation
  - mobile navigation
  - hero-style public page
  - what-we-do section
  - services section
  - account type selection section
  - contact section
  - Student login entry
  - Teacher login entry
  - Admin login entry
  - signed-in logout access
- Role entry helper added in `lib/auth/role-entry.ts` for role-specific sign-in, sign-up, and protected workspace URLs.
- Generic `/sign-up` now asks users to choose an account type before showing Clerk account creation.
- Student and teacher signup are now self-service role-specific flows; admin account access remains approval/bootstrap-based until staff role management exists.
- `/sign-in` now accepts role and redirect query params and shows role-specific context before Clerk sign-in.
- Temporary admin bootstrap script added:
  - `scripts/grant-admin-role.mjs`
  - `npm run grant:admin`
- Step record `context/steps/05-LandingLoginLogoutNavigation.md` marked completed.
- Verified landing login/logout navigation with:
  - `npm run typecheck`
  - `npm run lint`
  - `npm run build`

## In Progress

- Project setup, Tailwind/shadcn setup, Clerk authentication, base route groups, database-backed role foundation, landing login/logout navigation, and role-aware dashboard redirects are complete.
- Next implementation unit should add proper admin/staff access request and verification behavior.

## Next Up

1. Build a proper admin/staff access request and verification workflow.
2. Continue toward exam category and track structure after dashboard entry behavior is stable.

## Open Questions

- Which payment gateway should be implemented first: eSewa, Khalti, or IME Pay?
- Which video provider should be used for MVP: Cloudflare Stream, Vimeo, or YouTube private/unlisted?
- Which AI provider should be used first: OpenAI, Gemini, or provider abstraction from day one?
- Will teacher review be included in the first paid MVP plan or introduced after launch?
- Should SMS notifications be added in MVP or later?
- What exact first exam category should be launched first: SEE/SLC, +2, Loksewa, or PEA?
- Should admin/staff access requests be modeled as a dedicated `RoleRequest`/`StaffAccessRequest` table or handled through an invite flow first?

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
- 2026-05-09: Completed Step 04 database and role-mapping foundation. Prisma 7 uses `prisma.config.ts` for the datasource URL and `@prisma/adapter-pg` for the PostgreSQL runtime adapter.
- 2026-05-09: Applied migration `20260509072609_init_identity` to local PostgreSQL. The initial identity schema maps each Clerk user to one internal `User` and supports multiple `UserRole` rows.
- 2026-05-09: Added role-backed server checks to `/student`, `/teacher`, and `/admin`. A user authenticated through Clerk can no longer cross into another protected route group without the required internal role.
- 2026-05-09: Created `context/steps/05-DashboardShellsAndRoleRedirects.md` as the next task record for role-aware dashboard redirects and first dashboard shells.
- 2026-05-09: Hardened the Prisma client helper so missing `DATABASE_URL` fails with a clear setup error instead of the PostgreSQL driver's `SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string` error.
- 2026-05-09: Renamed and rescoped Step 05 to `context/steps/05-LandingLoginLogoutNavigation.md`, moving dashboard redirects into Step 06.
- 2026-05-09: Completed Step 05 landing login/logout navigation. `/` now has desktop and mobile navigation, role-specific entry links for student/teacher/admin, and signed-in logout access.
- 2026-05-09: Created `context/steps/06-DashboardShellsAndRoleRedirects.md` as the next task record for role-aware dashboard redirects and first dashboard shells.
- 2026-05-09: Revised the Step 05 landing page away from a dashboard-style preview and into a public hero page with what-we-do, services, accounts, and contact sections.
- 2026-05-09: Updated account creation so `/sign-up` asks for account type first. Student and teacher signup are self-service role-specific flows; admin access routes to sign-in/contact until staff role management exists.
- 2026-05-09: Investigated a reported Clerk sign-in `ChunkLoadError`. The app builds successfully, and the error referenced `localhost:3000` while the previous dev server was on `localhost:3001`; restarted the dev server on `http://localhost:3000`.
- 2026-05-09: Removed `users.primaryRole` with migration `20260509083000_remove_primary_role`; `user_roles` is now the single source of truth for authorization role assignments.
- 2026-05-09: Added an npm override for `@hono/node-server` to address the dev-only Prisma audit finding through `@prisma/dev`.
- 2026-05-09: Added `scripts/grant-admin-role.mjs` and `npm run grant:admin` as a temporary bootstrap path for granting `super_admin`, `content_admin`, or `reviewer_admin` to a known Clerk/internal user before staff verification UI exists.
- 2026-05-09: Fixed the role-specific signup and dashboard entry bug. `/dashboard` now creates or finds the internal app user from Clerk, redirects by database role priority, and sends no-role accounts to `/access-pending`; student and teacher signup store `wonkledgeSignupRole` in Clerk unsafe metadata so teacher-intent accounts no longer become students. Public signed-in navigation now points to `/dashboard` instead of hardcoded student links, while admin signup remains approval/bootstrap-only.
