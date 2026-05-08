# Wonkledge Project Overview

## Overview

Wonkledge is an AI-powered, mobile-first learning platform for Nepal. It helps students prepare for exams such as SEE/SLC, +2, Loksewa, PEA, Engineering Entrance, Medical Entrance, and other structured academic or competitive exams. The platform combines video lessons, written notes, MCQs, subjective practice, mock tests, AI-driven weakness/strength tracking, personalized study plans, teacher review, and subscription-based access.

The goal is not to build only a normal course platform like Udemy. The goal is to build a structured learning engine where students know exactly what to study, what they are good at, what they are weak at, and what they should do next.

## Product Positioning

Wonkledge is:

- A Nepal-focused exam preparation platform
- A mobile-first learning web app
- An AI-powered study planner and weakness tracker
- A content management system for exam categories, subjects, chapters, topics, lessons, MCQs, mock tests, and subjective questions
- A subscription-based education product with Nepali payment support
- A review platform where teachers can approve or improve AI feedback before students receive final guidance

## Target Users

### Students

Students preparing for:

- SEE/SLC
- +2 Science
- +2 Management
- Loksewa levels such as Officer, Assistant/Subba, Field Level, and other levels
- PEA
- Engineering Entrance
- Medical Entrance
- Other future academic or competitive exams

### Teachers / Reviewers

Teachers and reviewers who:

- Review subjective answers
- Review mock test performance
- Approve, edit, or replace AI-generated feedback
- Give final feedback to students

### Content Admins

Content admins who:

- Create and manage learning content
- Upload videos, notes, MCQs, subjective questions, mock tests, and rubrics
- Use AI to generate content drafts
- Send content for review and approval

### Reviewer Admins

Reviewer admins who:

- Check content quality
- Approve or reject content
- Review AI-generated drafts before publication

### Super Admins

Super admins who:

- Manage platform-wide settings
- Manage roles and permissions
- Manage subscription plans
- Track revenue
- Track AI usage and cost
- Control feature access by subscription tier

## Goals

1. Help students identify their strengths and weaknesses through diagnostic tests, MCQ practice, subjective practice, mock tests, and AI analysis.
2. Provide a personalized daily study plan based on each student's selected exam track, performance, weak topics, and learning history.
3. Allow admins to manage all exam categories, subjects, chapters, topics, videos, notes, questions, rubrics, and subscription plans without changing code.
4. Support both objective and subjective exam preparation.
5. Provide AI-generated feedback while keeping human review available for quality and trust.
6. Build a flexible subscription system where pricing can differ by exam category, level, subject, bundle, and access tier.
7. Support Nepali payment gateways such as eSewa, Khalti, and IME Pay, plus manual payment verification.
8. Keep the system domain-agnostic so new exam categories can be added through data and admin configuration rather than code rewrites.
9. Track AI usage and cost so the business can control spending and protect profitability.
10. Start as a mobile-first web app and later expand into native mobile apps if needed.

## Core User Flow

### Student Flow

1. Student visits the platform.
2. Student signs up or logs in using Clerk.
3. Student selects an exam category, such as SEE/SLC, +2, Loksewa, PEA, Engineering Entrance, or Medical Entrance.
4. Student selects a subject, level, or combined preparation track.
5. Student takes a diagnostic test.
6. The system creates an initial weakness/strength profile.
7. The system generates a personalized study plan.
8. Student studies through videos and written notes.
9. Student practices MCQs after lessons or topics.
10. Student receives explanations for correct and incorrect answers.
11. Student bookmarks difficult content.
12. Student practices subjective/written answers.
13. Student receives AI feedback and may request teacher review.
14. Student takes mock tests.
15. Student receives AI performance feedback and optional teacher review.
16. Student views a dashboard showing progress, strengths, weaknesses, scores, and recommended next actions.
17. Student uses revision mode to focus on weak topics and saved questions.
18. Student subscribes to a plan when premium content or features are required.
19. Student pays through Nepali payment gateways or manual payment verification.
20. Student continues learning through dashboard reminders, search, browsing, and continue-learning sections.

### Admin Flow

1. Admin logs in through the shared authentication system.
2. Admin is redirected to the correct dashboard based on role.
3. Admin creates exam categories, subjects, levels, tracks, chapters, and topics.
4. Admin creates or uploads lessons, videos, notes, MCQs, subjective questions, mock tests, and rubrics.
5. Admin may use AI to generate content drafts.
6. AI-generated content stays in draft state.
7. Reviewer checks, edits, approves, rejects, or requests changes.
8. Published content becomes visible to students based on free/premium access rules.
9. Admin creates and manages subscription plans.
10. Admin assigns content and features to plans.
11. Admin monitors payments, manual verification, analytics, AI usage, and review queues.

### Teacher / Reviewer Flow

1. Teacher logs in through the shared authentication system.
2. Teacher is redirected to the teacher/reviewer dashboard.
3. Teacher views assigned review requests.
4. Teacher may pick available unassigned review requests if allowed.
5. Teacher views student answers, AI feedback, rubric, score, and student performance context.
6. Teacher edits, approves, or replaces AI feedback.
7. Student receives final feedback only after teacher approval when teacher review is requested.

## Features

### Authentication and Roles

- Clerk-based authentication
- One login system for students, teachers, admins, reviewers, and super admins
- Role-based dashboard redirection
- Role-based access control
- Student profile
- Admin user management
- Super admin role management

### Exam and Content Structure

- Exam categories
- Subjects
- Levels
- Combined tracks
- Chapters
- Topics
- Lessons
- Videos
- Written notes
- MCQs
- Subjective questions
- Mock tests
- Rubrics
- Content approval workflow

### Student Learning

- Category and subject/track selection
- Diagnostic test
- Personalized daily study plan
- Video lessons
- Written notes
- MCQ practice
- MCQ explanations
- Subjective answer practice
- AI grading
- Teacher review
- Mock tests
- AI mock test feedback
- Weakness and strength dashboard
- Smart revision mode
- Bookmarks
- Continue learning
- Search and structured browsing
- Notifications and reminders

### AI Features

- Diagnostic analysis
- Personalized study plan generation
- Weakness and strength detection
- MCQ explanation support
- Mock test performance summary
- Subjective answer grading
- Suggested improvements and sample better answers
- AI-assisted admin content generation
- AI-generated content saved as draft only
- AI cost and usage tracking
- AI limits by plan and role

### Subscription and Payment

- Multiple active subscriptions per student
- Exam-specific pricing
- Level-specific pricing
- Subject-specific pricing
- Bundle pricing
- Free and premium content access
- Nepali payment gateway integration
- Manual payment verification
- Payment history
- Subscription status and expiry
- Admin subscription management

### Admin and Business Analytics

- Total students
- Active, expired, and cancelled subscriptions
- Revenue by plan, exam category, subject, and date range
- Most studied topics
- Most attempted questions and mock tests
- Common weak topics by exam category
- Average mock test scores
- Teacher review workload
- Pending review requests
- AI usage and cost reporting

### Content Creation and Review

- Manual content creation
- Bulk import using Excel/CSV
- AI-assisted bulk generation
- Draft, review, approved, rejected, and published states
- Content duplication checks where possible
- Import history
- AI-generated content labels
- Human approval before student visibility

## Scope

### In Scope for MVP

- Mobile-first web app
- Clerk authentication
- Student, teacher/reviewer, admin, and super admin roles
- Exam category selection
- Subject or combined track selection
- Diagnostic tests
- Personalized study plans
- Video lessons through external video service or embed
- Written notes
- MCQs with explanations
- Subjective answer practice
- AI subjective feedback
- Teacher review workflow
- Mock tests
- AI mock test feedback
- Weakness/strength dashboard
- Smart revision mode
- Bookmarking
- Continue learning
- Subscription-aware search
- Structured browsing
- Multiple active subscriptions
- Free/premium access control
- Nepali payment gateway support
- Manual payment verification
- Admin content management
- Admin approval workflow
- Bulk content import
- AI-assisted content generation as draft
- Basic admin analytics
- AI usage and cost tracking

### Should-Have After MVP Stabilization

- More advanced analytics
- More advanced teacher assignment logic
- More advanced notification channels such as SMS
- Advanced content quality scoring
- Better AI moderation and hallucination checks
- Rich student performance history visualizations
- More payment providers
- Offline-first support

### Later / Out of Scope for Initial MVP

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
- Fully custom video hosting infrastructure from scratch

## Success Criteria

1. A student can sign up, select an exam category, select a track or subject, and access a personalized dashboard.
2. A student can take a diagnostic test and receive an initial weakness/strength profile.
3. A student can follow a daily study plan based on their selected exam path.
4. A student can study videos and notes organized by category, subject/track, chapter, and topic.
5. A student can practice MCQs and receive explanations.
6. Wrong MCQ answers update the student's weakness profile.
7. A student can practice subjective questions and receive AI feedback.
8. A teacher can review AI feedback, edit it, and send final feedback to the student.
9. A student can take mock tests and receive performance analysis.
10. A student can subscribe to a plan and unlock plan-specific content.
11. A student can hold multiple active subscriptions.
12. Search and browsing respect free/premium/subscription access rules.
13. Admin can create and publish content without code changes.
14. AI-generated content remains draft until reviewed and approved.
15. Admin can manage subscription plans and view payment records.
16. Super admin can track AI usage and estimated cost.
17. The app can support adding new exam categories without changing core code.
