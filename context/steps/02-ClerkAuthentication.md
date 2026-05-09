# Step 02: Clerk Authentication Setup

## Status

- Completed

## Source Requirement

- `context/progress-tracker.md` lists Clerk authentication as the next implementation unit.
- `CLAUDE.md` lists Clerk as the required authentication provider.
- `context/architecture.md` requires Clerk for authentication and the internal database for app-specific roles, subscriptions, profiles, progress, and permissions.
- `context/code-standards.md` requires server-side auth and authorization checks for protected pages and mutations.

## Task

Install and configure Clerk authentication for the existing Next.js 15 App Router project without starting internal role mapping, dashboards, database work, or feature implementation yet.

## Scope

- Install the official Clerk Next.js package.
- Add Clerk provider wiring to the root layout while preserving the dark Wonkledge theme.
- Add Clerk middleware with a conservative protected-route structure that can support future student, teacher, and admin route groups.
- Add sign-in and sign-up routes only if needed for the chosen Clerk App Router setup.
- Add safe environment variable documentation or examples without committing real secrets.
- Keep auth implementation separate from internal user profile and role mapping.
- Do not start Prisma, route group dashboards, payment, AI, content, or subscription implementation in this step.

## Checklist

- [x] Confirm current project setup and dependency versions.
- [x] Install `@clerk/nextjs`.
- [x] Configure required Clerk environment variable placeholders or documentation.
- [x] Wrap the app with `ClerkProvider` in `app/layout.tsx`.
- [x] Add Clerk middleware for future protected application routes.
- [x] Add sign-in/sign-up routes if required by the selected Clerk flow.
- [x] Confirm public home route remains accessible.
- [x] Confirm protected-route behavior is defined without adding dashboards yet.
- [x] Run verification commands.
- [x] Update `context/progress-tracker.md` after completion.

## Completion Criteria

- Clerk is installed and wired into the Next.js app.
- The app can support Clerk sign-in/sign-up without hardcoded secrets.
- Public routes remain public.
- Future protected route groups have an auth middleware foundation.
- Internal role mapping is intentionally left for a later step.
- TypeScript, lint, and production build pass.
- This step file is marked `Completed`.
- `context/progress-tracker.md` records the completed Clerk setup and the next task.

## Verification Commands

```bash
npm run typecheck
npm run lint
npm run build
```

## Completion Notes

- Installed `@clerk/nextjs` and updated `package-lock.json`.
- Added `ClerkProvider` to `app/layout.tsx` while preserving the dark Wonkledge root shell.
- Added `middleware.ts` using `clerkMiddleware()` and `createRouteMatcher()` for the future protected URL namespaces:
  - `/student(.*)`
  - `/teacher(.*)`
  - `/admin(.*)`
  - shared protected student areas such as `/dashboard(.*)`, `/learn(.*)`, `/practice(.*)`, `/mock-tests(.*)`, `/bookmarks(.*)`, `/profile(.*)`, and `/subscriptions(.*)`
  - future scoped API routes under `/api/student(.*)`, `/api/teacher(.*)`, and `/api/admin(.*)`
- Added custom Clerk catch-all routes:
  - `app/(auth)/sign-in/[[...sign-in]]/page.tsx`
  - `app/(auth)/sign-up/[[...sign-up]]/page.tsx`
- Added `.env.example` with safe Clerk key and redirect placeholders. No real secrets were committed.
- `.gitignore` now excludes local `.clerk/` configuration created by Clerk keyless development mode.
- Mapped Clerk prebuilt-component CSS variables to the Wonkledge dark theme tokens in `app/globals.css`.
- Restored Tailwind `@source` entries for future `components` and `features` files, matching the completed Tailwind/shadcn step record.
- Normalized the detailed user stories file from `context/wonkledge_user_stories.md` to `context/user-stories.md` so the documented source-of-truth path exists.
- Internal user profile, role mapping, dashboards, database, payment, AI, and subscription work were intentionally left for later steps.
- Verified with:
  - `npm run typecheck`
  - `npm run lint`
  - `npm run build`
