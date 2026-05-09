# Step 05: Landing Login Logout Navigation

## Status

- Completed

## Source Requirement

- `context/project-overview.md` defines one shared Clerk authentication system for students, teachers/reviewers, admins, and super admins.
- `context/architecture.md` keeps `/student`, `/teacher`, and `/admin` as separate protected route boundaries.
- Step 04 added database-backed role checks, so role entry links can safely point to protected routes while server-side authorization remains enforced.
- The user requested this step before dashboard redirects: create a landing page first, add buttons to log in as admin, student, and teacher, add logout, and make navigation work well on mobile.

## Task

Create the first public landing page experience with working responsive navigation and clear login/logout entry points for each role area.

## Scope

- Replace the temporary public home shell with a proper Wonkledge hero-style landing page.
- Add mobile-friendly navigation with links to page sections.
- Add landing sections for what Wonkledge does, services, account paths, and contact.
- Add role-specific entry buttons:
  - Student login
  - Teacher login
  - Admin login
- Make account creation ask for the account type first.
- Keep student account creation self-service for now.
- Keep admin account creation approval/contact-based until staff role management exists.
- Preserve the single Clerk login system; role buttons should route users into the correct protected area after authentication.
- Add signed-in logout access from the public landing page.
- Keep role authorization server-side through the Step 04 database-backed route-group checks.
- Do not implement role-aware `/dashboard` redirects yet.
- Do not implement full dashboard shells, content CRUD, subscriptions, payments, AI usage, learning progress, or admin management in this step.

## Checklist

- [x] Rename the step record to match the new scope.
- [x] Move dashboard redirects to a later step record.
- [x] Build the public landing page.
- [x] Add desktop navigation links.
- [x] Add mobile navigation links.
- [x] Add student, teacher, and admin login entry buttons.
- [x] Add signed-in logout access.
- [x] Run verification commands.
- [x] Update `context/progress-tracker.md` after completion.

## Completion Criteria

- `/` shows a polished mobile-first landing page.
- `/` feels like a public hero/marketing page, not a dashboard preview.
- Navigation links move to the intended landing page sections.
- The mobile navigation is usable on small screens.
- Signed-out users can choose student, teacher, or admin login entry points.
- Generic account creation asks users to choose an account type first.
- Signed-in users can reach role areas and can log out from the landing page.
- Unauthorized role crossover remains blocked by the route-group role checks from Step 04.
- TypeScript, lint, and production build pass.

## Verification Commands

```bash
npm run typecheck
npm run lint
npm run build
```

## Completion Notes

- Replaced the temporary public home shell with a responsive Wonkledge hero-style landing page.
- Removed the dashboard-style study cockpit preview and replaced it with public-site sections:
  - What we do
  - Services
  - Accounts
  - Contact
- Added sticky desktop navigation and a mobile `<details>` navigation menu.
- Added public role entry links for Student, Teacher, and Admin. These use role-aware sign-in URLs and keep Step 04 role checks as the server-side authorization layer.
- Added a shared role-entry helper in `lib/auth/role-entry.ts`.
- Updated `/sign-up` so generic account creation asks users to choose an account type first.
- Kept admin access approval/bootstrap-based until staff role management exists. Teacher self-service signup is handled with the later role-aware dashboard flow so teacher-intent accounts do not become students.
- Updated `/sign-in` to display the selected role context and redirect to the requested protected area after successful sign-in.
- Added signed-in access controls on the landing page, including role area links and a Clerk `SignOutButton`.
- Investigated the reported `ChunkLoadError`; production build passes and the error URL pointed at `localhost:3000` while the previous active dev server was on `localhost:3001`, indicating a stale dev-server/chunk mismatch. The dev server was restarted on `http://localhost:3000`.
- Moved dashboard redirect work into `context/steps/06-DashboardShellsAndRoleRedirects.md`.
- Verification passed:
  - Ensure `DATABASE_URL` is set in the environment.
  - `npm run typecheck`
  - `npm run lint`
  - `npm run build`
