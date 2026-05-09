# Step 06: Dashboard Shells and Role-Aware Redirects

## Status

- Completed

## Source Requirement

- `context/progress-tracker.md` lists role-aware dashboard entry behavior after the public landing and login/logout navigation step.
- `context/architecture.md` says the app should prefer one primary dashboard role per session.
- Step 04 added internal users, role assignments, and server-side role checks for `/student`, `/teacher`, and `/admin`.
- Step 05 adds public role entry links but intentionally does not implement dashboard redirects.

## Task

Add the first role-aware dashboard entry behavior and improve the protected route shells now that internal roles exist.

## Scope

- Add a shared dashboard redirect helper that chooses the correct route from the current internal user's role or primary role.
- Add or normalize a protected `/dashboard` route that sends users to `/student`, `/teacher`, or `/admin`.
- Keep `/student`, `/teacher`, and `/admin` as separate route boundaries.
- Improve the existing dashboard shell pages only enough to support the next implementation units.
- Document how the first super admin or staff users should be bootstrapped until admin user management exists.
- Do not implement content CRUD, subscriptions, payments, AI usage, learning progress, or full dashboard analytics in this step.

## Checklist

- [x] Decide the first dashboard redirect priority for multi-role users.
- [x] Add role-aware dashboard redirect helper.
- [x] Add or normalize `/dashboard`.
- [x] Improve route shell copy or structure only where needed.
- [x] Document the temporary staff-role bootstrap path.
- [x] Run verification commands.
- [x] Update `context/progress-tracker.md` after completion.

## Completion Criteria

- A signed-in student is routed to the student dashboard entry.
- Staff users with teacher/admin roles are routed to the correct dashboard entry.
- Unauthorized role crossover remains blocked server-side.
- The next implementation unit has clear bootstrap instructions for assigning initial staff roles.
- TypeScript, lint, and production build pass.

## Verification Commands

```bash
npm run typecheck
npm run lint
npm run build
```

## Completion Notes

- Added `/dashboard` as the shared protected post-auth entry route.
- Dashboard priority is admin, then teacher, then student. Any admin role opens `/admin`.
- `/dashboard` creates a missing internal app user from the current Clerk user and uses the Clerk `wonkledgeSignupRole` unsafe metadata value to distinguish student and teacher signup intent.
- Teacher-intent accounts can create a `teacher_reviewer` internal role; admin public signup remains approval/bootstrap-only and no-role accounts are sent to `/access-pending`.
- Public signed-in navigation now points to `/dashboard` instead of hardcoded student workspace links.
- Verified with:
  - `npm run typecheck`
  - `npm run lint`
  - `npm run build`
