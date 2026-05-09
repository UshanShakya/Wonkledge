# Step 03: Base Route Groups

## Status

- Completed

## Source Requirement

- `context/progress-tracker.md` lists base route groups as the next implementation unit after Clerk authentication.
- `context/architecture.md` defines route boundaries for public, student, teacher, and admin areas.
- `context/code-standards.md` requires protected pages to use server-side auth and authorization checks.
- `context/steps/02-ClerkAuthentication.md` completed the Clerk foundation but intentionally did not create dashboards or internal role mapping.

## Task

Create the base App Router route group structure for public, student, teacher, and admin areas without implementing dashboard features, internal database role mapping, Prisma, payment, AI, content, or subscription logic.

## Scope

- Create or normalize the public route group while preserving the existing `/` home route.
- Create base route group boundaries for:
  - `app/(public)/`
  - `app/(student)/`
  - `app/(teacher)/`
  - `app/(admin)/`
- Use the protected URL namespace foundation from `middleware.ts`:
  - `/student`
  - `/teacher`
  - `/admin`
- Add only minimal route/layout shells needed to prove the boundaries exist.
- Use Clerk server-side authentication checks for protected group shells where pages are introduced.
- Do not implement internal user records, role mapping, dashboards, database schema, Prisma, payments, AI, content management, or subscriptions in this step.

## Checklist

- [x] Confirm current Clerk-authenticated route setup.
- [x] Move or recreate the public home route under `app/(public)/` without changing the `/` URL.
- [x] Create the student route group boundary.
- [x] Create the teacher route group boundary.
- [x] Create the admin route group boundary.
- [x] Add minimal protected placeholder pages only if needed to verify route protection.
- [x] Confirm `/` remains public.
- [x] Confirm protected namespaces redirect unauthenticated users through Clerk.
- [x] Run verification commands.
- [x] Update `context/progress-tracker.md` after completion.

## Completion Criteria

- Base route groups exist and match the architecture boundaries.
- The existing public home route still renders at `/`.
- Protected route namespaces have a clear foundation for later dashboards.
- No internal role mapping or feature work is introduced yet.
- TypeScript, lint, and production build pass.
- This step file is marked `Completed`.
- `context/progress-tracker.md` records the completed route-group setup and the next task.

## Verification Commands

```bash
npm run typecheck
npm run lint
npm run build
```

## Completion Notes

- Moved the public home route from `app/page.tsx` to `app/(public)/page.tsx`, preserving the `/` URL.
- Added protected route group layouts using Clerk server-side `auth.protect()`:
  - `app/(student)/layout.tsx`
  - `app/(teacher)/layout.tsx`
  - `app/(admin)/layout.tsx`
- Added minimal protected route shell pages:
  - `/student` at `app/(student)/student/page.tsx`
  - `/teacher` at `app/(teacher)/teacher/page.tsx`
  - `/admin` at `app/(admin)/admin/page.tsx`
- Internal user records, role mapping, dashboards, database, payment, AI, content, and subscription logic were intentionally left for later steps.
- Verified with:
  - `npm run lint`
  - `npm run build`
  - `npm run typecheck` after `next build` regenerated route metadata
- Verified local route behavior on `http://localhost:3001`:
  - `/` returns HTTP 200.
  - `/student`, `/teacher`, and `/admin` return HTTP 307 to Clerk for unauthenticated browser-style requests.
