# Step 03: Base Route Groups

## Status

- Not Started

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

- [ ] Confirm current Clerk-authenticated route setup.
- [ ] Move or recreate the public home route under `app/(public)/` without changing the `/` URL.
- [ ] Create the student route group boundary.
- [ ] Create the teacher route group boundary.
- [ ] Create the admin route group boundary.
- [ ] Add minimal protected placeholder pages only if needed to verify route protection.
- [ ] Confirm `/` remains public.
- [ ] Confirm protected namespaces redirect unauthenticated users through Clerk.
- [ ] Run verification commands.
- [ ] Update `context/progress-tracker.md` after completion.

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

- Pending.
