# Code Standards

## General

- Keep modules small, focused, and single-purpose.
- Fix root causes instead of layering temporary workarounds.
- Do not mix unrelated concerns in one component, route, or service.
- Build one feature unit at a time.
- Prefer clear, boring, maintainable code over clever abstractions.
- Use domain-specific names that match the product language: exam category, track, subject, chapter, topic, lesson, MCQ, subjective question, mock test, subscription, review request.
- Do not hardcode exam categories such as SEE/SLC, +2, or Loksewa into business logic. They should be database records.
- Keep student, admin, teacher, AI, and payment workflows separated.
- Every mutation must validate input, check auth, check authorization, and handle errors predictably.
- Do not expose secrets, tokens, payment credentials, or AI keys in client code.

## TypeScript

- TypeScript strict mode is required.
- Avoid `any`.
- Use explicit interfaces, inferred Prisma types, Zod schemas, or narrow utility types.
- Validate unknown input with Zod at system boundaries.
- Do not trust client-provided IDs without checking ownership/access.
- Prefer discriminated unions for status-heavy workflows.
- Keep shared types in `types/` only when they are used across multiple modules.
- Do not duplicate generated Prisma types unnecessarily.
- Use meaningful return types for server functions.
- Use `unknown` instead of `any` when handling external data, then validate it.

## Next.js

- Use the App Router.
- Default to Server Components when interactivity is not required.
- Add `"use client"` only when a component needs browser state, effects, event handlers, form interactivity, or client-only libraries.
- Keep route handlers focused on one responsibility.
- Do not put large business logic directly inside pages or route handlers.
- Use server-side access checks for protected pages and mutations.
- Use loading and error states for major routes.
- Keep student, admin, and teacher dashboards in separate route groups.
- Use dynamic routes for category/track/chapter/topic pages when needed.
- Avoid deeply nested client components unless necessary.

## React Components

- Prefer composition over large monolithic components.
- Keep feature-specific components close to their feature module.
- Extract repeated UI patterns only after they repeat enough to justify abstraction.
- Components should receive clear props and avoid hidden global assumptions.
- Avoid mixing data fetching, mutation logic, and heavy UI in the same component.
- Use controlled forms only when needed.
- Use optimistic UI carefully, never for payment or subscription activation.
- Use clear loading, empty, and error states.

## Styling

- Use Tailwind CSS utility classes.
- Use CSS custom property tokens defined in `ui-context.md`.
- Do not hardcode random hex colors in components.
- Follow the radius, spacing, and layout rules in `ui-context.md`.
- Use shadcn/ui primitives where appropriate.
- Keep mobile-first responsiveness.
- Use consistent status badges for content state, subscription state, payment state, and learning state.
- Do not introduce a second component library without approval.

## API Routes and Server Actions

- Validate and parse request input before business logic runs.
- Enforce authentication before reading protected user data.
- Enforce authorization before mutation.
- Return consistent response shapes.
- Handle expected errors with clear messages.
- Do not return raw stack traces to the client.
- Do not trust client-side payment success.
- Do not activate subscriptions from client-only confirmation.
- Keep webhooks idempotent.
- Log important payment and AI events.
- Avoid long-running synchronous route handlers for bulk imports or AI generation. Split large work into manageable units.

## Data and Storage

- Metadata belongs in PostgreSQL.
- Large files belong in file/blob storage.
- Video files should be handled by an external video provider for MVP.
- Do not store large binary data directly in the database.
- Use relational integrity where possible.
- Use soft delete/archive where historical records matter.
- Keep payment records even if subscription status changes.
- Keep attempt records for progress and weakness tracking.
- Keep AI usage logs for cost control.
- Do not permanently delete student learning history unless required by a clear privacy/account deletion workflow.

## Prisma and Database

- Schema changes must be intentional and documented if they affect architecture.
- Use migrations for schema changes.
- Use enums or controlled status fields for workflows such as content status, payment status, review status, and subscription status.
- Prefer normalized data for core relationships.
- Use join tables for many-to-many access rules, such as subscription plans granting access to content.
- Do not duplicate access rules in multiple unrelated places.
- Avoid hardcoded IDs.
- Seed only safe development data.
- Never commit production secrets or real user data.

## Auth and Permissions

- Clerk handles authentication.
- Internal database handles app-specific roles, subscriptions, and learning data.
- Every protected server function must check the current user.
- Every admin function must check admin role.
- Every super admin function must check super admin role.
- Teachers can only review assigned submissions or available submissions if the system allows pickup.
- Students can only access their own progress, attempts, submissions, bookmarks, and payments.
- Students can only access premium content if at least one active subscription grants access.
- UI-level hiding is helpful but not sufficient.

## AI Usage

- AI calls must go through a provider adapter/service layer.
- Do not call AI providers directly from random components or route handlers.
- Every AI request must be logged with feature, user/admin, model/provider, token estimate, cost estimate, and status.
- AI-generated admin content must be saved as draft.
- AI-generated content must not be published without human review.
- AI subjective grading should use rubrics where available.
- AI feedback should be editable by teachers/reviewers before final teacher-reviewed delivery.
- AI usage limits must be enforced by plan and role.
- Do not allow unlimited AI usage for free users.
- Reuse saved explanations or feedback where safe instead of regenerating unnecessarily.
- Keep prompts versioned or centrally managed when they become important to product behavior.

## Payments

- Payment logic must be isolated behind gateway adapter functions.
- Supported gateways should be integrated one at a time.
- Server-side verification is required before activating subscriptions.
- Payment callbacks/webhooks must be idempotent.
- Manual payment verification must remain pending until admin approval.
- Store payment status, gateway reference, internal reference, amount, currency, and linked plan.
- Never store full sensitive payment credentials in the database.
- Do not trust query parameters from gateway redirects without verification.

## Imports and Bulk Operations

- Bulk imports must validate required fields before creating records.
- Invalid rows should be reported with clear errors.
- Imported content should be saved as draft by default.
- Duplicate detection should be attempted where possible.
- Import history should be stored.
- Large imports should be split into manageable batches.
- AI bulk generation should have limits and should create drafts only.

## File Organization

- `app/(public)/` — public marketing and informational routes.
- `app/(student)/` — student dashboard and learning experience.
- `app/(teacher)/` — teacher/reviewer review experience.
- `app/(admin)/` — admin and super admin dashboards.
- `app/api/` — webhooks, payment callbacks, upload endpoints, AI endpoints, and integration routes.
- `components/ui/` — generated shadcn/ui primitives.
- `components/layout/` — shared layout components such as sidebars, navbars, shells.
- `components/shared/` — shared reusable app components.
- `features/learning/` — student learning modules.
- `features/content/` — content management and rendering modules.
- `features/practice/` — MCQ, subjective, mock test flows.
- `features/ai/` — AI services, prompt builders, model adapters, usage tracking.
- `features/payments/` — payment gateway adapters and payment UI helpers.
- `features/subscriptions/` — plan, access-control, and subscription logic.
- `features/reviews/` — teacher review workflows.
- `features/analytics/` — admin analytics logic and views.
- `lib/` — shared utilities, auth helpers, database client, validation helpers.
- `server/` — server-side services and data access functions.
- `prisma/` — schema, migrations, and seed files.
- `context/` — project context and source-of-truth documentation.
- `scripts/` — scripts for imports, seeding, checks, or maintenance.

## Naming Conventions

- Use PascalCase for React components.
- Use camelCase for functions and variables.
- Use kebab-case for route segments where appropriate.
- Use clear database model names.
- Use action-oriented function names, such as `createStudyPlan`, `verifyPayment`, `generateSubjectiveFeedback`, `publishContent`.
- Use consistent status names:
  - `draft`
  - `in_review`
  - `approved`
  - `published`
  - `rejected`
  - `archived`
  - `pending`
  - `active`
  - `expired`
  - `cancelled`
  - `failed`

## Testing and Verification

At minimum, verify each feature unit manually end to end during early development.

Important flows to verify:

- Signup/login and dashboard redirect
- Category and track selection
- Diagnostic test and result creation
- MCQ attempt and weakness update
- Subjective submission and AI feedback
- Teacher review and final feedback
- Subscription purchase and access unlock
- Manual payment approval
- Admin content creation and publishing
- Locked premium content behavior
- AI usage logging

When automated tests are introduced, prioritize:

- Access-control tests
- Payment verification tests
- Subscription access tests
- AI usage limit tests
- Content publishing workflow tests
