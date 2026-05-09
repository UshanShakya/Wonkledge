# Step 04: Database and Role Mapping Foundation

## Status

- Not Started

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

Add the PostgreSQL and Prisma foundation needed for internal users and roles, then connect Clerk identities to internal application users.

## Scope

- Install Prisma packages:
  - `prisma`
  - `@prisma/client`
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

- [ ] Confirm PostgreSQL is available locally or through a managed connection string.
- [ ] Install Prisma dependencies.
- [ ] Add `DATABASE_URL` placeholder documentation.
- [ ] Create `prisma/schema.prisma`.
- [ ] Model internal users and roles.
- [ ] Add a Prisma client singleton helper.
- [ ] Add the first server-side internal user lookup helper.
- [ ] Run Prisma validation and migration.
- [ ] Run verification commands.
- [ ] Update `context/progress-tracker.md` after completion.

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

- Pending.
