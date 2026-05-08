# Step 02: Clerk Authentication Setup

## Status

- Not Started

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

- [ ] Confirm current project setup and dependency versions.
- [ ] Install `@clerk/nextjs`.
- [ ] Configure required Clerk environment variable placeholders or documentation.
- [ ] Wrap the app with `ClerkProvider` in `app/layout.tsx`.
- [ ] Add Clerk middleware for future protected application routes.
- [ ] Add sign-in/sign-up routes if required by the selected Clerk flow.
- [ ] Confirm public home route remains accessible.
- [ ] Confirm protected-route behavior is defined without adding dashboards yet.
- [ ] Run verification commands.
- [ ] Update `context/progress-tracker.md` after completion.

## Completion Criteria

- Clerk is installed and wired into the Next.js app.
- The app can support Clerk sign-in/sign-up without hardcoded secrets.
- Public routes remain public.
- Future protected route groups have an auth middleware foundation.
- Internal role mapping is intentionally left for the next step.
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

- Pending.
