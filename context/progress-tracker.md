# Progress Tracker

Update this file after every meaningful implementation change.

This file is intentionally light during the planning stage. Once development begins, keep it updated so the project can resume safely between sessions.

## Current Phase

- Implementation started / Project setup

## Current Goal

- Configure Tailwind CSS and shadcn/ui on top of the initialized Next.js app.

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

## In Progress

- Project setup is complete.
- Next implementation unit should configure Tailwind CSS and shadcn/ui.

## Next Up

1. Install and configure Tailwind CSS and shadcn/ui.
2. Configure Clerk authentication.
3. Create the base route groups:
   - public
   - student
   - teacher
   - admin
4. Create internal user and role mapping.
5. Build the first dashboard shells.
6. Normalize the detailed user stories filename/reference if needed before feature implementation.

## Open Questions

- Which payment gateway should be implemented first: eSewa, Khalti, or IME Pay?
- Which video provider should be used for MVP: Cloudflare Stream, Vimeo, or YouTube private/unlisted?
- Which AI provider should be used first: OpenAI, Gemini, or provider abstraction from day one?
- Will teacher review be included in the first paid MVP plan or introduced after launch?
- Should SMS notifications be added in MVP or later?
- What exact first exam category should be launched first: SEE/SLC, +2, Loksewa, or PEA?
- `CLAUDE.md` references `context/user-stories.md`, but the current detailed user stories file is `context/wonkledge_user_stories.md`; should the file be renamed or should the references be updated?

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
