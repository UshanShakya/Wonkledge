# AI Workflow Rules

## Approach

Build Wonkledge incrementally using a spec-driven workflow.

The context files define what to build, how to build it, and which constraints must be respected. Do not infer major product behavior from scratch. Before implementing or changing architecture, read the relevant context files and implement against them.

Recommended read order before implementation or architecture decisions:

1. `context/project-overview.md`
2. `context/architecture.md`
3. `context/ui-context.md`
4. `context/code-standards.md`
5. `context/ai-workflow-rules.md`
6. `context/progress-tracker.md`

During planning, focus on the context files. During actual implementation, update `progress-tracker.md` after every meaningful implementation change.

## Core Workflow

1. Identify the feature unit.
2. Check whether the feature is already defined in the context files.
3. Confirm the relevant role, goal, access rules, and acceptance criteria.
4. Implement the smallest end-to-end version.
5. Verify the feature manually.
6. Update `progress-tracker.md` when coding has started.
7. Update other context files first if the implementation changes scope, architecture, standards, or data model decisions.

## Scoping Rules

- Work on one feature unit at a time.
- Prefer small, verifiable increments over large speculative changes.
- Do not combine unrelated system boundaries in one implementation step.
- Do not mix student, admin, teacher, payment, AI, and content-management changes unless the feature requires it.
- Do not build later-phase features while implementing MVP features unless explicitly instructed.
- Do not expand the product scope just because a feature seems useful.
- Do not implement behavior that conflicts with the context files.
- When in doubt, preserve the MVP scope.

## Feature Unit Examples

Good feature units:

- Student category selection
- Student subject/track selection
- Diagnostic test attempt
- MCQ practice flow
- Subjective answer submission
- AI feedback generation for one subjective answer
- Teacher review queue
- Admin MCQ creation
- Admin content approval
- Subscription plan creation
- Payment verification for one gateway
- Manual payment approval
- AI usage logging

Too broad:

- Build the entire student dashboard, admin dashboard, and payment system together
- Add all payment gateways at once
- Build all AI workflows at once
- Build MCQ, subjective practice, mock tests, and analytics together
- Refactor architecture while also adding unrelated UI pages

## When to Split Work

Split an implementation step if it combines:

- UI changes and database schema changes that are not tightly connected
- Multiple unrelated API routes
- Student-facing and admin-facing workflows at the same time
- Payment gateway integration and subscription UI at the same time
- AI generation and teacher review workflow at the same time
- Content creation and content publishing workflow at the same time
- Search, browsing, and access-control changes all at once
- Multiple dashboards in one task
- Behavior not clearly defined in the context files
- A change that cannot be verified end to end quickly

If a change cannot be tested or reviewed in one focused pass, the scope is too broad. Split it.

## Handling Missing Requirements

- Do not invent product behavior not defined in the context files.
- If a requirement is ambiguous, update the relevant context file before implementing.
- If a requirement is missing during development, add it as an open question in `progress-tracker.md`.
- If an architectural decision is required, document it in `architecture.md` before implementation.
- If a UI rule is missing, document it in `ui-context.md` before building the interface.
- If a code convention is missing, document it in `code-standards.md` before applying the pattern repeatedly.
- If the missing detail blocks implementation, pause that feature and work on a better-defined unit.

## AI Product Rules

These rules apply to Wonkledge AI features, not just AI coding workflow.

- AI-generated admin content must be saved as draft.
- AI-generated content must not be published directly to students without human review.
- AI subjective grading should use rubrics where available.
- Teacher-reviewed feedback must be editable before being sent to students.
- AI feedback should help students understand mistakes, not only show scores.
- AI usage must be logged with estimated cost.
- AI limits must be enforceable by plan, role, and feature.
- Free users should have limited AI access.
- Premium users may receive higher AI limits.
- Admin AI generation should have separate budget controls from student AI usage.
- AI should not override subscription access rules.
- AI should not reveal locked premium content to unsubscribed students.

## Payment Workflow Rules

- Never activate a subscription from client-side payment success alone.
- Gateway payments must be verified server-side.
- Gateway callbacks/webhooks must be idempotent.
- Manual payment proof must be reviewed by an authorized admin.
- Rejected manual payment submissions must show a reason.
- Payment records must remain auditable.
- A student can have multiple active subscriptions.
- Access control must check all active subscriptions.

## Content Workflow Rules

- Content should follow the hierarchy:
  Exam Category → Track/Subject/Level → Chapter → Topic → Content.
- Content statuses must be respected.
- Draft content is not visible to students.
- In-review content is not visible to students.
- Rejected content is not visible to students.
- Published content is visible only according to access rules.
- AI-generated content should be labeled internally.
- Bulk imported content should start as draft.
- Admins should be able to review import errors before publishing content.

## Protected Files

Do not modify the following unless explicitly instructed:

- `components/ui/*` generated shadcn/ui primitives
- Third-party library internals
- Lock files unless dependency changes require it
- `.env` and secret files
- Payment gateway credential files
- AI provider credential files
- Generated Prisma migration files after they are applied
- Production data exports
- User-uploaded files
- Build output folders such as `.next/`, `dist/`, or `coverage/`
- Files outside the project scope

## Keeping Docs in Sync

Update the relevant context file whenever implementation changes:

- Product scope or feature behavior → `project-overview.md`
- System architecture, boundaries, storage, or invariants → `architecture.md`
- Theme, layout, design language, or component conventions → `ui-context.md`
- Code conventions, file organization, or implementation rules → `code-standards.md`
- Development workflow or scoping rules → `ai-workflow-rules.md`
- Completed work, current task, open questions, or next steps → `progress-tracker.md`

During the planning stage, `progress-tracker.md` can remain a starter document. During actual development, it must be updated after meaningful implementation changes.

## Before Moving to the Next Unit

Before moving to the next implementation unit, confirm:

1. The current unit works end to end within its defined scope.
2. No invariant defined in `architecture.md` was violated.
3. Auth and access control were enforced on the server.
4. The UI follows `ui-context.md`.
5. The code follows `code-standards.md`.
6. Payment, AI, or subscription changes were logged and verified where relevant.
7. Relevant context files were updated if scope or architecture changed.
8. `progress-tracker.md` reflects the completed work once development has started.
9. `npm run build` passes.
10. Known limitations or open questions are documented.

## Delivery Style

When implementing:

- Make focused changes.
- Explain what changed.
- Explain what was not changed.
- Mention how to test the change.
- Mention any assumptions.
- Mention any context file updated.
- Avoid vague claims such as “everything is done” unless verified.

## Default Build Order Recommendation

When actual development starts, a safe build order is:

1. Project setup and UI shell
2. Clerk authentication
3. Internal user and role mapping
4. Student dashboard shell
5. Admin dashboard shell
6. Exam category and track structure
7. Content hierarchy
8. Basic admin content creation
9. Student browsing
10. Subscription plan model
11. Access control for free/premium content
12. MCQ practice
13. Diagnostic test
14. Weakness/strength tracking
15. Study plan generation
16. Subjective practice
17. AI feedback logging
18. Teacher review
19. Mock tests
20. Payments
21. Manual payment verification
22. Search
23. Bulk import
24. Admin analytics
25. AI cost dashboard
