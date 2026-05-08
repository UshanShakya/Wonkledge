# CLAUDE.md

## Project: Wonkledge

Wonkledge is an AI-powered, mobile-first learning platform for Nepal. It helps students prepare for exams such as SEE/SLC, +2, Loksewa, PEA, Engineering Entrance, Medical Entrance, and other structured academic or competitive exams.

The product is not just a course marketplace or Udemy clone. It is an AI-driven learning engine where students can identify what they are good at, what they are weak at, and what they should study next.

The app supports:

- Students
- Teachers / Reviewers
- Content Admins
- Reviewer Admins
- Super Admins

The main experience includes:

- Exam category selection
- Subject, level, or combined-track selection
- Diagnostic tests
- Personalized daily study plans
- Video lessons
- Written notes
- MCQ practice
- Subjective/written answer practice
- Mock tests
- AI weakness/strength tracking
- Smart revision mode
- Bookmarks
- Teacher review
- Subscriptions
- Nepali payment gateways
- Manual payment verification
- Admin content management
- AI-assisted content generation
- Bulk imports
- Analytics
- AI usage and cost tracking

---

# Application Building Context

Read the following files in order before implementing or making any architectural decision:

1. `context/project-overview.md` — product definition, goals, features, and scope
2. `context/user-stories.md` — detailed user stories, roles, goals, benefits, acceptance criteria, and priorities
3. `context/architecture.md` — system structure, boundaries, storage model, and invariants
4. `context/ui-context.md` — theme, colors, typography, and component conventions
5. `context/code-standards.md` — implementation rules and conventions
6. `context/ai-workflow-rules.md` — development workflow, scoping rules, and delivery approach
7. `context/progress-tracker.md` — current phase, completed work, open questions, and next steps

Update `context/progress-tracker.md` after each meaningful implementation change.

If implementation changes the architecture, scope, or standards documented in the context files, update the relevant file before continuing.

If implementation changes or clarifies user behavior, update `context/user-stories.md` before continuing.

---

# Current Context Status

The context files have been prepared for Wonkledge:

- `context/project-overview.md`
- `context/user-stories.md`
- `context/architecture.md`
- `context/ui-context.md`
- `context/code-standards.md`
- `context/ai-workflow-rules.md`
- `context/progress-tracker.md`

## Important UI Decision

The UI is **dark mode only for now**.

The dark design system is based on the Wonkledge theme tokens in `context/ui-context.md`.

Do not reintroduce a light theme unless explicitly requested.

## Important Product Decision

The detailed user stories must stay in their own file:

```text
context/user-stories.md
```

Do not duplicate the full user stories inside `CLAUDE.md`.

Use `CLAUDE.md` as the high-level instruction file and use `context/user-stories.md` as the detailed product behavior reference.

## Important Architecture Decision

The platform must be exam-category agnostic.

Do not hardcode product logic for SEE/SLC, +2, Loksewa, PEA, Engineering Entrance, or Medical Entrance. These must be configurable through the database/admin system.

The shared content hierarchy is:

```text
Exam Category → Track / Subject / Level → Chapter → Topic → Content
```

---

# Required Tech Direction

Use the project context files as the source of truth, but the current planned stack is:

- Next.js 15
- TypeScript
- Tailwind CSS
- shadcn/ui
- Clerk
- PostgreSQL
- Prisma
- AI provider adapter for OpenAI/Gemini or future providers
- Nepali payment gateways: eSewa, Khalti, IME Pay
- Manual payment verification
- External video provider for MVP, such as Cloudflare Stream, Vimeo, or private/unlisted YouTube

---

# Non-Negotiable Product Rules

1. AI-generated admin content must be saved as draft first.
2. AI-generated content must not be published directly to students without human approval.
3. Premium content access must be enforced on the server.
4. A student may have multiple active subscriptions.
5. Access checks must consider all active subscriptions.
6. Payment success must be verified server-side before activating a subscription.
7. Manual payment proof must not activate a subscription until admin approval.
8. AI usage must be logged and cost-estimated.
9. New exam categories should not require new code paths.
10. Draft, rejected, archived, unpublished, or in-review content must not be visible as normal student learning content.
11. Teacher-reviewed feedback must be approved/submitted by the teacher before students receive it as final feedback.
12. Do not put secrets, API keys, or payment credentials in source code.
13. Do not modify generated `components/ui/*` files unless explicitly required.

---

# Role-Based Product Model

## Student

Students can:

- Sign up and log in
- Choose exam category
- Choose subject, level, or combined track
- Take diagnostic tests
- Receive personalized study plans
- Watch videos
- Read notes
- Practice MCQs
- Practice subjective answers
- Take mock tests
- Receive AI feedback
- Request teacher review
- See weakness and strength dashboards
- Use revision mode
- Bookmark content
- Search and browse content
- Subscribe to paid plans
- Pay using gateway or manual payment
- View profile, subscription, payment history, and progress

## Teacher / Reviewer

Teachers/reviewers can:

- View assigned review requests
- Pick available review requests if allowed
- Review subjective answer submissions
- Review mock test feedback
- See AI-generated draft feedback
- Edit, approve, or replace AI feedback
- Submit final feedback to students

## Content Admin

Content admins can:

- Manage exam categories
- Manage subjects, levels, and tracks
- Manage chapters and topics
- Create/edit videos, notes, MCQs, subjective questions, mock tests, and rubrics
- Bulk import content
- Use AI to generate draft content
- Send content for review

## Reviewer Admin

Reviewer admins can:

- Review draft content
- Approve, reject, or request changes
- Review AI-generated content before publishing
- Ensure content quality before student visibility

## Super Admin

Super admins can:

- Manage all roles and permissions
- Manage subscription plans
- Manage payments
- Manage platform settings
- View analytics
- Track AI usage and cost
- Set AI usage limits
- Control major platform-wide behavior

---

# MVP Scope

## Student MVP

- Clerk signup/login
- Category selection
- Subject/track selection
- Diagnostic test
- Daily study plan
- Video lesson viewing
- Written notes
- MCQ practice with explanations
- Subjective answer practice
- AI feedback
- Teacher review request
- Mock tests
- AI mock test summary
- Weakness/strength dashboard
- Smart revision mode
- Bookmarks
- Continue learning
- Search and browse
- Subscription-aware locked/unlocked content
- Student profile
- Payment history

## Admin MVP

- Role-based admin access
- Category/subject/track/chapter/topic management
- Video/note/MCQ/subjective/mock test/rubric management
- Draft/review/publish workflow
- AI-assisted content draft generation
- Bulk import using CSV/Excel
- Subscription plan management
- Payment records
- Manual payment verification
- Basic analytics
- AI usage and cost tracking

## Teacher MVP

- Review queue
- Assigned reviews
- Available reviews if allowed
- AI feedback review panel
- Rubric panel
- Feedback editor
- Final feedback submission

---

# Later / Not MVP

Do not build these unless explicitly requested:

- Native Android app
- Native iOS app
- Video comments
- Group chat
- Public forums
- Leaderboards
- Certificates
- Live classes
- AI voice tutor
- Full gamification
- Parent dashboard
- Marketplace for third-party teachers

---

# Build Order Recommendation

When implementation begins, use this order unless instructed otherwise:

1. Project setup
2. Tailwind and shadcn/ui setup
3. Clerk authentication
4. Internal user and role mapping
5. Route groups for public, student, teacher, and admin
6. Dashboard shells
7. Exam category and track data model
8. Content hierarchy
9. Admin content creation
10. Student browsing
11. Subscription plan model
12. Free/premium access control
13. MCQ practice
14. Diagnostic test
15. Weakness/strength tracking
16. Study plan generation
17. Subjective practice
18. AI feedback and AI usage logging
19. Teacher review
20. Mock tests
21. Payments
22. Manual payment verification
23. Search
24. Bulk import
25. Admin analytics
26. AI cost dashboard

---

# Development Behavior Rules for Claude

When working on this project:

1. Read the context files before implementation.
2. Use `context/user-stories.md` for detailed behavior and acceptance criteria.
3. Do not invent large new features.
4. Keep changes small and verifiable.
5. Use TypeScript strictly.
6. Use server-side access control.
7. Keep AI logic behind service/adapters.
8. Keep payment logic behind gateway adapters.
9. Use Prisma for database models.
10. Use shadcn/ui and Tailwind for UI.
11. Follow the dark theme from `context/ui-context.md`.
12. Update context files when architecture/scope/standards/user behavior changes.
13. Update `context/progress-tracker.md` after meaningful implementation changes.
14. Explain what changed and how to test it.
15. Do not claim completion without verifying the relevant build/test step.
16. For each implementation task, create or update a matching Markdown file in `context/steps/`.
17. Step files must describe the task, the source requirement, scope, checklist, completion criteria, verification commands, and completion status.
18. Mark a step file as completed only after the task is implemented and verified.
19. Keep `context/progress-tracker.md` and the active `context/steps/*.md` file in sync when a task starts, changes, or completes.

---

# Step Tracking Workflow

Every implementation unit should have a matching step file in:

```text
context/steps/
```

Use numbered filenames that match the build order when possible:

```text
context/steps/01-TailwindAndShadcn.md
context/steps/02-ClerkAuthentication.md
context/steps/03-RouteGroups.md
```

Before starting a task:

1. Read `context/progress-tracker.md`.
2. Create or update the relevant step file in `context/steps/`.
3. Record the task objective, source requirement, scope, checklist, and completion criteria.
4. Set the status to `Not Started` or `In Progress`.

During the task:

1. Keep the step checklist updated when meaningful progress is made.
2. Record important decisions, assumptions, or blockers in the step file.
3. Update `context/progress-tracker.md` if the project state changes.

After completing the task:

1. Run the relevant verification commands.
2. Record the verification results in the step file.
3. Mark the step status as `Completed`.
4. Update `context/progress-tracker.md` with what changed and the next step.

---

# User Stories Reference

The full detailed user stories are stored separately in:

```text
context/user-stories.md
```

That file is the source of truth for:

- User role
- Goal
- Reason / benefit
- Acceptance criteria
- Priority

Do not paste the full user stories into this file.

---

# Important Reminder

This project should be built as a serious, scalable, AI-powered learning platform.

The first version must stay focused on the MVP. Avoid building nice-to-have community or gamification features before the learning engine, content system, subscription access, payments, and AI tracking are stable.
