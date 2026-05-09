# UI Context

## Product

**Wonkledge** is an AI-powered learning platform for Nepal. The UI must support:

- Public marketing pages
- Student onboarding and learning flows
- Student progress and AI weakness/strength tracking
- Teacher/reviewer dashboards
- Admin and super admin dashboards
- Subscription and payment flows
- AI-assisted content creation and review flows

The current UI direction is **dark mode only**.

Do not design or implement a light theme unless explicitly requested later.

---

# Theme

Wonkledge should feel modern, trustworthy, premium, and focused on learning. The design should be mobile-first for students while still scaling well to tablet and desktop dashboards for teachers, admins, and super admins.

The visual language combines:

- Education-tech clarity
- Modern dark SaaS polish
- Glassmorphic layered surfaces
- Spacious mobile layouts
- Clear progress indicators
- Friendly but serious AI guidance
- Trustworthy payment and subscription screens
- Organized admin dashboards with high information density
- Clear weak/strong topic visualization

The design style is **Modern Glassmorphic Dark Mode** with a **Lunar Tech** aesthetic.

The interface should feel like a serious study cockpit for ambitious students, not a playful children’s app. It should also feel powerful enough for content admins, teachers, reviewers, and super admins who manage large amounts of learning content and analytics.

---

# Brand & Style

The design system is engineered for a high-performance educational environment, targeting ambitious students and meticulous administrators.

The brand personality is:

- **Intelligent**
- **Sophisticated**
- **Propulsive**
- **Focused**
- **Trustworthy**
- **Premium**
- **Calm under pressure**

It balances the gravity of academic excellence with the energy of digital innovation.

The visual direction employs a **Modern Glassmorphic** style layered over a deep, monochromatic base. By using subtle translucent surfaces, tonal layering, thin borders, and vibrant neon accents, the UI creates a sense of depth and focus.

This **Lunar Tech** aesthetic ensures that even with high information density, the interface feels expansive and non-cluttered, evoking calm focus during intense study sessions.

---

# Design Principles

1. **Dark mode only for now.**
2. Mobile-first by default, especially for students.
3. Desktop layouts must support dense admin and reviewer workflows.
4. Keep student screens simple, encouraging, and focused.
5. Make weak/strong topic insights easy to understand.
6. Avoid making the student dashboard feel like an admin dashboard.
7. Use clear labels for locked, free, premium, completed, weak, needs practice, and strong content.
8. Use cards, tabs, filters, step-based flows, and progressive disclosure to reduce confusion.
9. Admin pages may be denser, but they must remain searchable, filterable, and organized.
10. AI feedback should feel helpful, human, and actionable.
11. Payment screens must feel safe, clear, and trustworthy.
12. Use consistent spacing, radius, color tokens, typography, and status badges.
13. Use glow effects only for meaningful emphasis, not decoration everywhere.
14. Use tonal layering and glassmorphism instead of heavy traditional shadows.
15. Never rely only on color to communicate important states.

---

# Design Tokens

The following Wonkledge token set is the source of truth for the current dark theme.

Keep these color codes as provided.

```yaml
name: Wonkledge
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#191b23'
  surface-container: '#1d2027'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e1e2ec'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e1e2ec'
  inverse-on-surface: '#2e3038'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#6d95ef'
  primary: '#6d95ef'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#ffb786'
  on-tertiary: '#502400'
  tertiary-container: '#df7412'
  on-tertiary-container: '#461f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#6d95ef'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#10131a'
  on-background: '#e1e2ec'
  surface-variant: '#32353c'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-dense:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  stats-lg:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 20px
  container-max: 1440px
```

---

# CSS Custom Properties

When implementing the theme, map the Wonkledge tokens into CSS custom properties. Components must use these variables instead of hardcoded hex values.

```css
:root {
  --background: #10131a;
  --on-background: #e1e2ec;

  --surface: #10131a;
  --surface-dim: #10131a;
  --surface-bright: #363941;
  --surface-container-lowest: #0b0e15;
  --surface-container-low: #191b23;
  --surface-container: #1d2027;
  --surface-container-high: #272a31;
  --surface-container-highest: #32353c;
  --surface-variant: #32353c;

  --on-surface: #e1e2ec;
  --on-surface-variant: #c2c6d6;

  --inverse-surface: #e1e2ec;
  --inverse-on-surface: #2e3038;

  --outline: #8c909f;
  --outline-variant: #424754;

  --surface-tint: #6d95ef;

  --primary: #6d95ef;
  --on-primary: #002e6a;
  --primary-container: #4d8eff;
  --on-primary-container: #00285d;
  --inverse-primary: #005ac2;

  --secondary: #d0bcff;
  --on-secondary: #3c0091;
  --secondary-container: #571bc1;
  --on-secondary-container: #c4abff;

  --tertiary: #ffb786;
  --on-tertiary: #502400;
  --tertiary-container: #df7412;
  --on-tertiary-container: #461f00;

  --error: #ffb4ab;
  --on-error: #690005;
  --error-container: #93000a;
  --on-error-container: #ffdad6;

  --primary-fixed: #d8e2ff;
  --primary-fixed-dim: #6d95ef;
  --on-primary-fixed: #001a42;
  --on-primary-fixed-variant: #004395;

  --secondary-fixed: #e9ddff;
  --secondary-fixed-dim: #d0bcff;
  --on-secondary-fixed: #23005c;
  --on-secondary-fixed-variant: #5516be;

  --tertiary-fixed: #ffdcc6;
  --tertiary-fixed-dim: #ffb786;
  --on-tertiary-fixed: #311400;
  --on-tertiary-fixed-variant: #723600;

  --font-heading: Manrope, Inter, system-ui, sans-serif;
  --font-sans: Inter, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  --radius-sm: 0.25rem;
  --radius-default: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-full: 9999px;

  --spacing-unit: 4px;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-gutter: 20px;
  --container-max: 1440px;
}
```

---

# Colors

This design system uses a restricted **Deep Space** palette to maintain high contrast and readability.

## Foundations

- Main app background uses `background` / `surface`: `#10131a`
- Deepest containers use `surface-container-lowest`: `#0b0e15`
- Low containers use `surface-container-low`: `#191b23`
- Default cards use `surface-container`: `#1d2027`
- Elevated surfaces use `surface-container-high`: `#272a31`
- Highest surfaces use `surface-container-highest`: `#32353c`

## Accents

- Primary accent: `primary` / Electric Blue `#6d95ef`
- Strong primary container: `primary-container` `#4d8eff`
- Secondary accent: `secondary` / Violet `#d0bcff`
- Secondary container: `secondary-container` `#571bc1`
- Tertiary warm accent: `tertiary` `#ffb786`
- Tertiary container: `tertiary-container` `#df7412`

## Functional Colors

Use these tokens for semantic states:

- Error: `error` `#ffb4ab`
- Error container: `error-container` `#93000a`
- Success should use a green semantic token added in implementation, visually aligned with the dark theme.
- Warning should use tertiary/warm tokens unless a dedicated warning token is added.
- Locked or premium content should primarily use secondary/violet tokens.

## Glows

Primary actions and active states may use a 15–20% opacity drop shadow of the accent color.

Examples:

- Primary glow: `0 0 24px rgba(173, 198, 255, 0.18)`
- Secondary glow: `0 0 24px rgba(208, 188, 255, 0.16)`
- Warm glow: `0 0 20px rgba(255, 183, 134, 0.14)`
- Error glow: `0 0 18px rgba(255, 180, 171, 0.14)`

Use glow sparingly for:

- Primary CTAs
- Active navigation
- Progress highlights
- AI insight cards
- Study timer rings
- Important dashboard metrics

Do not apply glow to every card.

---

# Semantic Learning Colors

Use semantic labels in code rather than directly coding product meaning into colors.

| Learning State | Recommended Token |
| --- | --- |
| Strong topic | Success semantic token |
| Needs practice | `tertiary` / warm token |
| Weak topic | `error` |
| New topic | `primary` |
| Locked content | `secondary` |
| Premium feature | `secondary` |
| Completed content | Success semantic token |
| In progress | `primary` |
| AI-generated | `primary` |
| Teacher-reviewed | `tertiary` |
| Draft content | `on-surface-variant` |
| Published content | Success semantic token |
| Rejected content | `error` |

---

# Typography

The typography system prioritizes structural clarity for complex academic data.

## Font Roles

| Role | Font | Usage |
| --- | --- | --- |
| Headings | Manrope | Page titles, section headers, cards, dashboard labels |
| Statistical displays | Manrope | Scores, progress numbers, AI cost, revenue, analytics |
| Body text | Inter | Notes, explanations, descriptions, forms, general UI |
| Dense UI text | Inter | Tables, sidebars, filters, metadata |
| Mono labels | JetBrains Mono | Small labels, metadata, IDs, system-like badges, code snippets |

## Type Scale

| Token | Font | Size | Weight | Line Height | Usage |
| --- | --- | --- | --- | --- | --- |
| `display-lg` | Manrope | 48px | 800 | 1.1 | Landing hero, major marketing headline |
| `headline-md` | Manrope | 32px | 700 | 1.2 | Page titles, dashboard headers |
| `title-sm` | Manrope | 20px | 600 | 1.4 | Card titles, modal titles |
| `body-base` | Inter | 16px | 400 | 1.6 | Main content, lesson notes, questions |
| `body-dense` | Inter | 14px | 400 | 1.5 | Tables, sidebars, compact cards |
| `label-caps` | JetBrains Mono | 12px | 600 | 1.0 | Metadata labels, small status text |
| `stats-lg` | Manrope | 24px | 800 | 1.0 | Scores, analytics, dashboard numbers |

## Usage Rules

- Use `body-base` for primary learning content, especially questions and notes.
- Use `body-dense` for admin tables, sidebars, filters, and compact dashboard text.
- Use `label-caps` sparingly for metadata, AI labels, premium labels, and system tags.
- Academic content such as mock exams and questions must maintain strict vertical rhythm to reduce eye strain.
- Avoid using very small text for important exam content.

---

# Layout & Spacing

The layout follows a **Fluid Grid** model.

- Desktop: 12-column grid
- Mobile: 4-column grid
- Base spacing unit: 4px
- Internal card padding: usually `md` / 16px
- Section spacing: usually `lg` / 24px
- Large section spacing: `xl` / 32px
- Gutter: 20px
- Max container width: 1440px

## Mobile Layout Rules

- Student experience must be mobile-first.
- Use bottom navigation or compact sidebar patterns where appropriate.
- Show one main decision at a time in practice/test flows.
- Avoid dense admin-like tables on student mobile pages.
- Use stacked cards for daily study plan, continue learning, progress, and quick actions.

## Desktop Layout Rules

- Admin and teacher dashboards should use sidebar navigation.
- Student desktop can use sidebar + main area + optional right insight panel.
- Use data tables with filters for admin workflows.
- Use dashboard cards and charts for analytics.

---

# Elevation & Depth

Depth is communicated through **Tonal Layering** and **Glassmorphism**, not heavy shadows.

## Levels

| Level | Usage | Token / Guidance |
| --- | --- | --- |
| Level 0 | App canvas | `surface-container-lowest` / `#0b0e15` or `background` / `#10131a` |
| Level 1 | Cards, sidebars | `surface-container-low` / `#191b23` or `surface-container` / `#1d2027` |
| Level 2 | Hover states, raised cards | `surface-container-high` / `#272a31` |
| Level 3 | Modals, command menus, overlays | `surface-container-highest` / `#32353c` |
| Glass | Floating navs, overlay headers | 60% fill over dark surface + `backdrop-blur-md` |

## Borders

- Default border: `outline-variant` / `#424754`
- Strong border: `outline` / `#8c909f`
- Use 1px borders for cards, inputs, tables, and glass panels.
- Active elements may use a subtle 1px primary or secondary tinted border.

## Glass Effects

Use glass effects for:

- Floating navigation bars
- Sticky headers
- Modals
- AI insight overlays
- Command palettes

Suggested behavior:

- Background blur: 12px
- Surface fill: 60% opacity of a dark surface
- Border: 1px solid outline variant
- Avoid glass effects behind large reading areas if it reduces readability.

---

# Shapes

The shape language is consistently rounded, friendly, and professional.

| Context | Radius |
| --- | --- |
| Small utility elements | `rounded-sm` / 4px |
| Buttons and inputs | `rounded-md` / 12px |
| Cards and standard panels | `rounded-md` / 12px |
| Large containers and hero cards | `rounded-lg` / 16px |
| Featured dashboard panels | `rounded-xl` / 24px |
| Pills and badges | `rounded-full` |

This softens the technical aesthetic and makes the platform feel more accessible to students.

---

# Components

## Buttons

### Primary Buttons

- Solid Electric Blue / primary-driven fill
- Soft blue outer glow
- Strong contrast with readable text
- Used for major actions:
  - Start diagnostic test
  - Continue learning
  - Submit test
  - Subscribe
  - Pay now
  - Publish content
  - Approve review

### Secondary Buttons

- Ghost style
- Transparent or dark surface background
- 1px slate-gray border
- Blue glow or primary border on hover/focus

### Destructive Buttons

- Use error tokens
- Require confirmation for destructive admin actions

## Cards

- Use Level 1 surfaces.
- Separate content using 1px dividers.
- Titles use Manrope semi-bold or bold.
- Important insight cards may use subtle tinted borders.
- Avoid placing too many unrelated actions inside one card.

## Inputs

- Input background should be darker than card surface.
- Use `surface-container-lowest` or similar.
- 1px outline border.
- On focus, border transitions to primary with subtle outer glow.
- Validation errors use error token and clear helper text.

## Progress Bars

- Use dual-gradient tracks when appropriate: Violet to Blue.
- Background track uses a dark neutral surface.
- Progress should be clearly visible against dark surfaces.
- Weak/strong dashboards may use segmented progress bars.

## Status Badges

- Pill-shaped.
- Use low-opacity background fills and high-contrast text.
- Use consistent labels across student, teacher, and admin screens.

Examples:

- Free
- Premium
- Locked
- Completed
- In Progress
- Weak
- Needs Practice
- Strong
- Draft
- In Review
- Approved
- Published
- Rejected
- Archived
- AI Generated
- Teacher Reviewed

## Charts

Interactive charts should use:

- Glowing neon paths
- 2px line strokes
- Subtle gradient area fill below line charts
- Minimal grid lines
- Clear labels
- No overcrowding

Use charts for:

- Student progress over time
- Mock test performance
- Revenue trends
- Subscription growth
- AI usage cost
- Weak topics by category

## Study Timers

- Use large Manrope typography.
- Use circular progress rings.
- Use secondary Violet accent for timer rings.
- Keep timer visible but not distracting.

---

# Component Library

Use **shadcn/ui** on top of Tailwind CSS.

Expected components:

- Button
- Card
- Badge
- Tabs
- Dialog
- Sheet
- Dropdown Menu
- Select
- Input
- Textarea
- Table
- Progress
- Separator
- Alert
- Tooltip
- Accordion
- Form components
- Command menu
- Toast / notification component
- Skeleton loaders

Rules:

- Components in `components/ui/` are generated primitives.
- Prefer composing feature-specific components outside `components/ui/`.
- Do not manually edit generated UI components unless necessary.
- Add new primitives through the shadcn/ui CLI when possible.
- Keep styling aligned with the Wonkledge dark token system.

---

# Icons

Use **Lucide React**.

Icon sizing:

- Inline icon: `h-4 w-4`
- Button icon: `h-4 w-4`
- Card icon: `h-5 w-5`
- Large feature icon: `h-6 w-6` or `h-8 w-8`

Rules:

- Use stroke-based icons only.
- Avoid mixing icon styles.
- Use icons to support labels, not replace them.
- Do not rely on icons alone for important actions.

---

# Layout Patterns

## Public Landing Page

Include:

- Top navbar
- Hero section
- Exam category highlights
- AI learning explanation
- Feature grid
- How it works section
- Pricing preview
- Trust/testimonial section
- Call to action

Visual style:

- Dark hero background
- Subtle glow around AI/learning visuals
- Exam category cards
- Clear CTA buttons
- Premium SaaS feel

## Student Dashboard

Mobile-first layout:

1. Greeting and selected exam track
2. Continue Learning card
3. Today’s Study Plan
4. Strength/Weakness summary
5. Quick actions:
   - Practice MCQ
   - Revision Mode
   - Mock Test
   - Subjective Practice
6. Subscription status
7. Notifications and feedback alerts
8. Recent activity

Desktop layout:

- Left sidebar navigation
- Top header
- Main content area
- Optional right insight panel

## Student Navigation

Recommended items:

- Dashboard
- Study Plan
- Learn
- MCQ Practice
- Subjective Practice
- Mock Tests
- Revision
- Progress
- Subscriptions
- Profile

## Student Onboarding

Use a step-based flow:

1. Select exam category
2. Select subject, level, or combined track
3. Take diagnostic test
4. View initial AI study plan
5. Start first recommended task

## Learning Page

Structure:

- Breadcrumb: Category → Subject/Track → Chapter → Topic
- Topic header with progress
- Bookmark action
- Content tabs:
  - Video
  - Notes
  - MCQ Practice
  - Subjective Practice
  - Resources
- Next recommended action

## MCQ Practice Page

- One question at a time on mobile
- Clear answer options
- Submit/Next button
- Correct/incorrect state
- Explanation panel after answering
- Progress indicator
- Bookmark question
- Add to revision
- Topic weakness update after session

## Subjective Practice Page

- Question prompt
- Rubric preview if allowed
- Answer editor
- Save draft
- Submit for AI review
- Request teacher review if available in plan
- Feedback panel:
  - Score
  - Strengths
  - Missing points
  - Suggested improvement
  - Better sample answer if available

## Mock Test Page

- Exam-style header
- Timer
- Question navigator
- Save progress if allowed
- Submit confirmation
- Result summary
- Weakness breakdown
- AI recommendations
- Request teacher review option

## Student Progress / Analytics Page

Show:

- Overall progress
- Strong topics
- Weak topics
- Needs practice topics
- Improvement over time
- Completed lessons
- Quiz performance
- Mock test performance
- Subjective answer feedback history
- Revision recommendations

## Revision Mode

Show:

- Weak topics
- Bookmarked lessons/questions
- Recommended revision items
- Quick practice cards
- Improvement status after revision

## Search and Browse

Search should support:

- Lessons
- Notes
- Videos
- MCQs
- Subjective questions
- Mock tests
- Subjects
- Chapters
- Topics

Search UI should show:

- Free labels
- Premium labels
- Locked labels
- Subscribed content first
- Locked premium content without exposing full paid content
- Filters by category, subject, chapter, difficulty, type, and access

## Teacher Dashboard

Recommended navigation:

- Dashboard
- Assigned Reviews
- Available Reviews
- Completed Reviews
- Student Feedback History
- Profile

Teacher pages should include:

- Assigned reviews
- Available reviews
- Student answer panel
- AI feedback draft panel
- Rubric panel
- Teacher feedback editor
- Final feedback submission
- Status badges:
  - Pending
  - In Review
  - Completed

## Admin Dashboard

Recommended navigation:

- Dashboard
- Content
- Categories / Subjects
- Chapters / Topics
- Video Lessons
- Notes
- MCQs
- Subjective Questions
- Mock Tests
- Rubrics
- AI Generation
- Bulk Import
- Subscriptions
- Payments
- Users
- Analytics
- AI Cost
- Settings

Admin pages should include:

- Sidebar navigation
- Metrics summary cards
- Tables with search and filters
- Status badges
- Bulk actions where safe
- Confirmation dialogs for critical actions
- Clear empty states
- Audit-friendly payment and AI usage screens

## Payment Pages

Include:

- Plan name
- Plan price
- Plan duration
- Included features
- Payment method selection
- Gateway redirect/status
- Manual payment instructions
- Receipt upload
- Pending/approved/rejected status
- Payment history

Payment UI must feel safe and clear.

---

# Status Labels

Use consistent labels across the product.

| Status | Display |
| --- | --- |
| `draft` | Draft |
| `in_review` | In Review |
| `approved` | Approved |
| `published` | Published |
| `rejected` | Rejected |
| `archived` | Archived |
| `locked` | Locked |
| `free` | Free |
| `premium` | Premium |
| `completed` | Completed |
| `in_progress` | In Progress |
| `weak` | Weak |
| `needs_practice` | Needs Practice |
| `strong` | Strong |
| `pending` | Pending |
| `active` | Active |
| `expired` | Expired |
| `cancelled` | Cancelled |
| `failed` | Failed |
| `ai_generated` | AI Generated |
| `teacher_reviewed` | Teacher Reviewed |

---

# Empty States

Every major page must have useful empty states.

Examples:

- No study plan yet: prompt student to take diagnostic test.
- No subscription: show free content and upgrade options.
- No reviews assigned: show available review queue if allowed.
- No content in chapter: show admin-facing setup hint or student-facing coming soon message.
- No search results: suggest filters or show locked results if relevant.
- No payment history: show subscription options.
- No AI usage yet: explain that AI cost tracking begins after AI features are used.
- No imported content: show CSV/Excel template download action.

---

# Accessibility

- All interactive elements must be keyboard accessible.
- Use semantic HTML.
- Maintain readable contrast on dark surfaces.
- Buttons must have clear labels.
- Forms must show validation errors clearly.
- Loading states should not trap users.
- Avoid relying only on color to communicate weak/strong/locked states.
- Use text labels with icons and badges.
- Ensure focus states are visible in dark mode.
- Do not use glassmorphism behind long reading content if it reduces readability.

---

# Motion

Motion should be subtle and functional.

Use motion for:

- Card entrance
- Dashboard transitions
- Progress updates
- Feedback reveal
- Success states
- AI insight reveal
- Small hover interactions

Avoid:

- Excessive animations
- Distracting background motion
- Constant glowing movement
- Animations that slow down study flows
- Motion that makes exam/practice screens feel unstable

---

# Implementation Notes

- This file is the source of truth for Wonkledge UI direction.
- Dark mode is the only theme for now.
- Do not reintroduce light-theme tokens unless specifically requested.
- Use the Wonkledge token values above exactly for base theme colors.
- If extra semantic colors are needed, add them as aliases around the existing palette where possible.
- Keep all design decisions aligned with `project-overview.md`, `architecture.md`, and `code-standards.md`.
