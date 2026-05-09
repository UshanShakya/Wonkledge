# Step 04: Database and Role Mapping Foundation

## Status

- Completed

## Source Requirement

- `CLAUDE.md` lists PostgreSQL and Prisma as the required database direction.
- `context/architecture.md` defines PostgreSQL as the primary relational database and Prisma as the ORM.
- `context/architecture.md` requires each Clerk user to map to exactly one internal user record.
- `context/progress-tracker.md` lists internal user and role mapping after the base route groups.
- Step 03 completed public, student, teacher, and admin route boundaries without adding database-backed authorization.

## Database Decision

- Use PostgreSQL as the primary application database. (to connect to docker postgres DATABASE_URL="postgresql://postgres:postgres@localhost:5432/wonkledge_db?schema=public")
- Use Prisma for schema, migrations, generated types, and data access.
- Recommended local setup: Dockerized PostgreSQL for repeatable development, or a local PostgreSQL install if Docker is unavailable.
- Recommended deployment setup: managed PostgreSQL compatible with Prisma.

## Task

Add the PostgreSQL and Prisma foundation needed for internal users and roles, then connect Clerk identities to internal application users. Also user logged in from admin should not be able to access other routes, for eg i logged in from /admin, but i was able to go to /student and /teacher as well. maybe this was becuase we have not setup the database properyl yet, but check that as well.

## Scope

- Install Prisma packages:
  - `prisma`
  - `@prisma/client`
  - `@prisma/adapter-pg`
- Add database environment placeholders without committing secrets.
- Add the initial Prisma schema for identity and roles only.
- Add a shared Prisma client helper.
- Add a server-side helper that can resolve the current Clerk user to an internal app user.
- Keep role names aligned with the product model:
  - Student
  - Teacher/Reviewer
  - Content Admin
  - Reviewer Admin
  - Super Admin
- Do not implement dashboards, content models, subscriptions, payments, AI usage logs, learning progress, or admin CRUD in this step.

## Checklist

- [x] Confirm PostgreSQL is available locally or through a managed connection string.
- [x] Install Prisma dependencies.
- [x] Add `DATABASE_URL` placeholder documentation.
- [x] Create `prisma/schema.prisma`.
- [x] Model internal users and roles.
- [x] Add a Prisma client singleton helper.
- [x] Add the first server-side internal user lookup helper.
- [x] Run Prisma validation and migration.
- [x] Run verification commands.
- [x] Update `context/progress-tracker.md` after completion.

## Completion Criteria

- Prisma is installed and configured.
- The app has a valid PostgreSQL connection string path through environment variables.
- The initial identity schema supports Clerk user mapping and multiple roles.
- Server code can look up the current authenticated Clerk user's internal user record.
- TypeScript, lint, Prisma validation, and production build pass.
- This step file is marked `Completed`.
- `context/progress-tracker.md` records the completed database and role-mapping foundation.

## Verification Commands

```bash
npx prisma validate
npx prisma migrate dev --name init_identity
npm run typecheck
npm run lint
npm run build
```

## Completion Notes

- Completed the Prisma 7 PostgreSQL foundation using `prisma.config.ts`, `prisma/schema.prisma`, `@prisma/client`, and `@prisma/adapter-pg`.
- Added internal identity tables for `users` and `user_roles`, plus `AppRole` and `UserStatus` enums.
- Added follow-up migration `20260509083000_remove_primary_role` so `user_roles` is the single source of truth for application authorization roles.
- Applied migration `20260509072609_init_identity` against the local Docker PostgreSQL URL documented in this step.
- Added `lib/prisma.ts` as the shared Prisma client singleton.
- Added `lib/auth/app-user.ts` to resolve the current Clerk user, create missing student users on student access, and enforce role-specific access server-side.
- Updated `/student`, `/teacher`, and `/admin` route-group layouts so a signed-in user must also have the correct internal role. Admin roles no longer automatically grant student or teacher access.
- Normalized the environment placeholder filename from `.env example` to `.env.example` and added `DATABASE_URL` documentation.
- Verification passed:
  - `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/wonkledge_db?schema=public" npx prisma validate`
  - `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/wonkledge_db?schema=public" npx prisma migrate dev --name init_identity`
  - `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/wonkledge_db?schema=public" npx prisma generate`
  - `npm run typecheck`
  - `npm run lint`
  - `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/wonkledge_db?schema=public" npm run build`
