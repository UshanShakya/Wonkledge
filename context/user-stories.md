# Wonkledge User Stories

## Product Summary

**Wonkledge** is an AI-powered learning platform for Nepal-focused students preparing for exams such as SEE/SLC, +2, Loksewa, PEA, Engineering Entrance, Medical Entrance, and other future academic or competitive exams.

The platform helps students learn through structured courses, video lessons, written notes, MCQs, subjective answer practice, mock tests, AI feedback, teacher review, weakness/strength tracking, personalized study plans, and flexible subscription-based access.

---

# User Story 1: Exam Category Selection

**User role:** Student  
**Goal:** Choose an exam category such as SEE/SLC, +2, Loksewa, PEA, Engineering Entrance, or Medical Entrance.  
**Reason / benefit:** So the student receives content, questions, study plans, and recommendations related to their exam goal.

**Acceptance Criteria:**
- Student can view a list of available exam categories.
- Student can select one exam category during onboarding.
- Student can change or add exam categories later if allowed.
- The app shows subjects, tracks, lessons, notes, quizzes, and mock tests based on the selected exam category.
- Admin can manage which exam categories are available.

**Priority:** MVP / Core feature

---

# User Story 2: Subject or Combined Track Selection

**User role:** Student  
**Goal:** Choose either a single subject or a combined preparation track under an exam category.  
**Reason / benefit:** So the student can study one subject only or prepare for a full exam package depending on their goal.

**Acceptance Criteria:**
- Student can choose an exam category first.
- Student can select a specific subject under that category.
- Student can select a combined/full preparation track.
- The app organizes lessons, notes, videos, MCQs, subjective questions, and mock tests based on the selected subject or track.
- Student can switch or add more subjects/tracks if allowed by their subscription.
- Admin can create and manage both single subjects and combined tracks.

**Priority:** MVP / Core feature

---

# User Story 3: Diagnostic Test

**User role:** Student  
**Goal:** Take a short diagnostic test after choosing an exam category and subject/track.  
**Reason / benefit:** So the app can understand the student’s current level, strengths, and weaknesses before creating a study plan.

**Acceptance Criteria:**
- Student takes a short diagnostic test during onboarding.
- Diagnostic questions are based on the selected exam category and subject/track.
- Student receives a simple result after completing the test.
- The result identifies strong topics and weak topics.
- Diagnostic performance helps generate the initial personalized study plan.
- Student can retake the diagnostic test later if allowed.
- Admin can configure diagnostic test questions from the admin panel.

**Priority:** MVP / Core feature

---

# User Story 4: Personalized Daily Study Plan

**User role:** Student  
**Goal:** Receive a daily study plan based on diagnostic results and learning progress.  
**Reason / benefit:** So the student knows exactly what to study each day and does not feel confused or overwhelmed.

**Acceptance Criteria:**
- The app uses diagnostic results to identify weak and strong topics.
- The app creates a daily study plan for the selected exam category, subject, or track.
- Weak topics receive more priority in the plan.
- Student can clearly see today’s study tasks.
- Tasks may include videos, notes, MCQs, subjective practice, revision, and mock tests.
- Student can mark tasks as completed.
- The study plan updates based on student performance.
- Admin can create default study plan templates.
- AI can personalize or adjust the study plan.

**Priority:** MVP / Core feature

---

# User Story 5: Exam Target Date

**User role:** Student  
**Goal:** Set an exam date or target completion date.  
**Reason / benefit:** So the study plan can adjust based on how much time the student has left before the exam.

**Acceptance Criteria:**
- Student can add an exam date or target date.
- Student can edit or remove the target date.
- The app adjusts study plan intensity based on remaining time.
- If the exam is close, the app focuses more on revision and weak areas.
- If the exam is far away, the app spreads lessons more evenly.
- The target date can be optional.

**Priority:** Good-to-have / Later feature

---

# User Story 6: Topic-Based MCQ Practice

**User role:** Student  
**Goal:** Practice MCQ questions after each lesson or topic.  
**Reason / benefit:** So the student can check whether they understood the topic properly.

**Acceptance Criteria:**
- Student can practice MCQs after completing a lesson or topic.
- MCQs are connected to the selected exam category, subject, chapter, and topic.
- Student can answer MCQs inside the app.
- Student can see whether each answer is correct or incorrect.
- Student score is saved.
- Wrong answers are tracked as weak points.
- MCQ performance updates the student’s weakness/strength profile.
- Admin can create and manage MCQs from the admin panel.

**Priority:** MVP / Core feature

---

# User Story 7: MCQ Answer Explanation

**User role:** Student  
**Goal:** See an explanation for why an MCQ answer is correct or wrong.  
**Reason / benefit:** So the student understands the concept instead of only memorizing the answer.

**Acceptance Criteria:**
- Student can see the correct answer after answering an MCQ.
- Student can see an explanation for the answer.
- Explanation can be written by admin or generated/improved by AI.
- Student can review wrong answers later.
- Wrong answers are added to weak areas.
- The app can recommend more questions from weak topics.
- Admin can manage explanations from the admin panel.

**Priority:** MVP / Core feature

---

# User Story 8: Admin Content Management

**User role:** Admin  
**Goal:** Manage exam categories, subjects, tracks, lessons, notes, videos, MCQs, answers, explanations, and study plans.  
**Reason / benefit:** So the platform content can be updated without needing code changes.

**Acceptance Criteria:**
- Admin can create, edit, delete, and archive exam categories.
- Admin can create, edit, delete, and archive subjects and combined tracks.
- Admin can create and manage chapters and topics.
- Admin can upload or embed video lessons.
- Admin can create and edit written notes.
- Admin can add MCQs with options, correct answers, explanations, difficulty, topic, and marks.
- Admin can create default study plan templates.
- Admin can use AI to generate or improve questions, explanations, notes, and study plans.
- Admin can save content as draft before publishing.

**Priority:** MVP / Core feature

---

# User Story 9: Content Review and Approval

**User role:** Admin / Teacher-Reviewer / Super Admin  
**Goal:** Review and approve content before students can see it.  
**Reason / benefit:** So incorrect, unfinished, or low-quality AI-generated content is not published directly to students.

**Acceptance Criteria:**
- Admin can create content as draft.
- AI-generated content is saved as draft first.
- Reviewer can review lessons, notes, videos, MCQs, answers, explanations, subjective questions, rubrics, and study plans.
- Reviewer can approve content.
- Reviewer can reject content.
- Reviewer can request changes.
- Published content becomes visible to students.
- Unpublished content remains hidden from students.
- Admin can unpublish content if there is an error.

**Priority:** MVP / Core feature

---

# User Story 10: Admin Role Management

**User role:** Super Admin  
**Goal:** Assign different roles to team members.  
**Reason / benefit:** So each team member only accesses the admin features they are responsible for.

**Acceptance Criteria:**
- Super Admin can create admin users.
- Super Admin can assign roles.
- Supported roles can include Super Admin, Admin, Content Admin, Reviewer, Teacher, Finance/Admin Manager, and Support Admin.
- Content Admin can create and edit content.
- Reviewer can approve, reject, or request changes.
- Finance/Admin Manager can view subscriptions and payments.
- Support Admin can help students with issues.
- Only Super Admin can delete major platform data or manage admin users.

**Priority:** MVP / Good-to-have depending on launch size

---

# User Story 11: Video Lessons

**User role:** Student  
**Goal:** Watch video lessons inside the app.  
**Reason / benefit:** So the student can learn topics clearly in a course-style format similar to Udemy.

**Acceptance Criteria:**
- Student can open video lessons from their selected subject or track.
- Videos are organized by exam category, subject/track, chapter, and topic.
- Student can pause, resume, and replay videos.
- Student video progress is saved if supported.
- Completed videos are marked as done.
- After a video, student can take related MCQs or subjective practice.
- Admin can upload or embed video lessons.
- Admin can connect videos with topics, notes, and quizzes.
- Premium videos are locked if not included in the student’s subscription.

**Priority:** MVP / Core feature

---

# User Story 12: Video Comments

**User role:** Student  
**Goal:** Comment or ask questions under a video lesson.  
**Reason / benefit:** So the student can discuss confusing parts with teachers or other students.

**Acceptance Criteria:**
- Student can add a comment under a video.
- Student can reply to other comments.
- Teacher/admin can respond to comments.
- Admin can moderate comments.
- Admin can delete inappropriate comments.
- Student can report inappropriate comments.
- Comments can be sorted by newest, oldest, or most helpful.

**Priority:** Later feature

---

# User Story 13: Written Lesson Notes

**User role:** Student  
**Goal:** Read written notes for each lesson.  
**Reason / benefit:** So the student can study and revise without always watching videos.

**Acceptance Criteria:**
- Student can open written notes under each topic or lesson.
- Notes are organized by exam category, subject/track, chapter, and topic.
- Notes can include text, images, formulas, examples, and key points.
- Student can mark notes as completed.
- Admin can create, edit, delete, and publish notes.
- Admin can connect notes with related videos, MCQs, and subjective questions.
- AI can help generate summaries, flashcards, or simplified explanations from notes.
- Only approved/published notes are visible to students.

**Priority:** MVP / Core feature

---

# User Story 14: Bookmark Difficult Lessons and Questions

**User role:** Student  
**Goal:** Save or bookmark difficult lessons, notes, videos, or questions.  
**Reason / benefit:** So the student can return to difficult content later for revision.

**Acceptance Criteria:**
- Student can bookmark lessons, notes, videos, MCQs, subjective questions, and mock tests.
- Student can view all saved items in one place.
- Student can remove bookmarks.
- Bookmarked items can be grouped by exam category, subject, chapter, or topic.
- Bookmarked weak items can appear in revision mode.
- If bookmarked premium content expires, the item shows as locked or requires renewal.

**Priority:** MVP / Core feature

---

# User Story 15: AI Progress and Weakness Dashboard

**User role:** Student  
**Goal:** See what they are good at and what they are weak at.  
**Reason / benefit:** So the student can focus study time on areas that need improvement.

**Acceptance Criteria:**
- Student can see overall progress for their selected exam/subject/track.
- Student can see completed lessons, pending lessons, and quiz scores.
- Student can see strong topics based on correct answers and consistency.
- Student can see weak topics based on wrong answers, skipped questions, low scores, or repeated mistakes.
- Dashboard shows simple labels such as Strong, Needs Practice, and Weak.
- AI recommends what the student should study next.
- Weak topics are added into future study plans and revision sessions.
- Student can view improvement over time.
- Dashboard includes MCQ, mock test, and subjective answer performance where available.

**Priority:** MVP / Core feature

---

# User Story 16: Smart Revision Mode

**User role:** Student  
**Goal:** Practice only weak topics and bookmarked questions.  
**Reason / benefit:** So the student can improve the areas where they struggle the most.

**Acceptance Criteria:**
- Student can open a dedicated Revision Mode.
- Revision Mode includes weak topics detected from quiz/test performance.
- Revision Mode includes bookmarked lessons, notes, videos, and questions.
- The app prioritizes topics where the student repeatedly makes mistakes.
- Student can practice revision MCQs.
- Student can review explanations for wrong answers.
- When the student improves, topic status can move from Weak to Needs Practice or Strong.
- AI can recommend revision sessions based on recent performance.

**Priority:** MVP / Core feature

---

# User Story 17: Full Mock Test

**User role:** Student  
**Goal:** Take full mock tests similar to real exam practice.  
**Reason / benefit:** So the student can practice under exam-style conditions and understand their readiness.

**Acceptance Criteria:**
- Student can choose a mock test based on exam category, subject, or combined track.
- Mock test has a timer.
- Questions follow the real exam pattern as closely as possible.
- Student can submit the test.
- Student can see score after submission.
- Student can review correct and wrong answers.
- Wrong answers are added to weak topics.
- Mock test performance updates the progress dashboard.
- AI can generate a performance summary.

**Priority:** MVP / Core feature

---

# User Story 18: AI Mock Test Feedback

**User role:** Student  
**Goal:** Receive AI-generated feedback after completing a mock test.  
**Reason / benefit:** So the student understands strengths, weaknesses, mistakes, and next study steps.

**Acceptance Criteria:**
- Student receives a performance summary after submitting a mock test.
- AI identifies strong topics and weak topics.
- AI explains common mistake patterns.
- AI recommends lessons, notes, videos, MCQs, or revision sessions.
- AI updates the student’s future study plan.
- AI feedback is saved so the student can review it later.
- AI feedback can be limited based on subscription plan.

**Priority:** MVP / Core feature

---

# User Story 19: Teacher Review for Mock Tests

**User role:** Student / Teacher-Reviewer  
**Goal:** Send mock test performance for teacher review.  
**Reason / benefit:** So the student can receive human feedback when deeper guidance is needed.

**Acceptance Criteria:**
- Student can request teacher review after a mock test.
- Teacher can view the student’s mock test score, wrong answers, weak topics, and AI summary.
- Teacher can add comments or recommendations.
- Student receives teacher feedback inside the app.
- Admin can manage pending review requests.
- Teacher review can be limited based on subscription plan.
- Admin can track which teacher reviewed each request.

**Priority:** Good-to-have / MVP if teacher review is part of paid value

---

# User Story 20: Flexible Subscription Plans by Exam Category

**User role:** Student / Admin  
**Goal:** Subscribe to a plan based on exam category, level, subject, or bundle.  
**Reason / benefit:** So students only pay for the preparation content they need, and the business can price different exam types properly.

**Acceptance Criteria:**
- Student can view available subscription plans.
- Plans can differ for SEE/SLC, +2, Loksewa, PEA, Engineering Entrance, Medical Entrance, and other exams.
- Plans can vary by level, such as Loksewa Officer, Assistant/Subba, Field Level, etc.
- Plans can vary by subject or full preparation bundle.
- Admin can set different prices for each plan.
- Admin can choose monthly, yearly, lifetime, or course-based duration.
- Student gets access only to content included in their active plan.
- Expired users lose access to premium content but may still access free content.

**Priority:** MVP / Core feature

---

# User Story 21: Free and Paid Access Control

**User role:** Student / Admin  
**Goal:** Clearly see which content is free and which content requires payment.  
**Reason / benefit:** So students understand what they can access before subscribing.

**Acceptance Criteria:**
- Free content is visible to all registered students.
- Premium content is locked for unsubscribed students.
- Locked lessons, notes, videos, mock tests, and AI features show a subscription prompt.
- Student can upgrade from the locked content screen.
- Admin can mark content as free or premium.
- Admin can assign premium content to specific subscription plans.
- Search and browsing should not expose full paid content to unsubscribed users.

**Priority:** MVP / Core feature

---

# User Story 22: Admin Subscription Management

**User role:** Admin / Super Admin  
**Goal:** Create and manage different subscription plans.  
**Reason / benefit:** So the business can charge different prices for different exam categories, levels, subjects, and bundles.

**Acceptance Criteria:**
- Admin can create subscription plans.
- Admin can set plan name, price, duration, exam category, subject, level, and included features.
- Admin can create monthly, yearly, lifetime, or one-time course plans.
- Admin can edit, disable, or archive plans.
- Admin can assign content to specific plans.
- Admin can view active, expired, cancelled, and pending subscriptions.
- Admin can manually activate, extend, cancel, or fix a student subscription if needed.

**Priority:** MVP / Core feature

---

# User Story 23: Nepali Payment Gateway Integration

**User role:** Student  
**Goal:** Pay for subscriptions directly inside the app using Nepali payment gateways.  
**Reason / benefit:** So students can quickly unlock the course or preparation plan they need.

**Acceptance Criteria:**
- Student can choose a subscription plan.
- Student can pay using supported payment gateways.
- The app should support Nepali gateways such as eSewa, Khalti, and IME Pay.
- At least one payment gateway should be available in the MVP.
- After successful payment, the subscription activates automatically.
- If payment fails, the student sees a clear failed-payment message.
- Student can view payment history.
- Admin can view payment records.
- Student receives payment confirmation.

**Priority:** MVP / Core feature

---

# User Story 24: Manual Payment Verification

**User role:** Student / Admin  
**Goal:** Upload proof of payment for manual verification.  
**Reason / benefit:** So students can still activate subscriptions if gateway payment fails or they prefer bank transfer/QR payment.

**Acceptance Criteria:**
- Student can choose manual payment option.
- Student can view payment instructions.
- Student can upload payment screenshot or receipt.
- Student can submit transaction ID/reference number if available.
- Payment status shows as Pending Verification.
- Admin can review submitted payment proof.
- Admin can approve or reject the payment.
- If approved, the subscription becomes active.
- If rejected, the student sees the reason and can resubmit.
- Admin can keep payment records for future reference.

**Priority:** MVP / Core feature

---

# User Story 25: Student Profile Page

**User role:** Student  
**Goal:** View and manage personal learning profile.  
**Reason / benefit:** So the student can see exam track, subscription, progress, saved items, and payment history in one place.

**Acceptance Criteria:**
- Student can view name, email/phone number, and basic profile details.
- Student can see selected exam category, subject, or combined track.
- Student can see current subscription plan and expiry date.
- Student can view all active and expired subscriptions.
- Student can view payment history.
- Student can access bookmarked lessons and questions.
- Student can see overall learning progress.
- Student can update basic profile information.
- Student can change password/account settings through authentication provider.
- Student can switch or add exam tracks if allowed by subscription.

**Priority:** MVP / Core feature

---

# User Story 26: Student Signup and Login

**User role:** Student  
**Goal:** Sign up and log in using phone number or email.  
**Reason / benefit:** So the student can securely access their learning account.

**Acceptance Criteria:**
- Student can sign up using email.
- Student can sign up using phone number if enabled.
- Student can log in securely.
- Student can reset password or verify identity.
- Student account connects to selected exam category, subscription, progress, and payment history.
- The system can use Clerk for authentication.
- Admin can see registered users from the admin panel.

**Priority:** MVP / Core feature

---

# User Story 26A: Role-Specific Account Entry

**User role:** Student / Teacher-Reviewer / Admin  
**Goal:** Choose the correct account type before signing up or signing in.  
**Reason / benefit:** So student and teacher accounts do not get mixed, and admin access is not granted through public signup.

**Acceptance Criteria:**
- Users can choose Student, Teacher, or Admin from the account entry screen.
- Student signup creates a student-intent account and routes through `/dashboard`.
- Teacher signup creates a teacher-reviewer-intent account and routes through `/dashboard`.
- Admin public signup does not grant an admin role; admin access requires bootstrap or authorized role management.
- Signed-in users are sent through `/dashboard`, which opens the dashboard that matches their internal role.
- A teacher or admin intent must not silently create a student role.

**Priority:** MVP / Core feature

---

# User Story 27: Role-Based Dashboard Access

**User role:** Student / Teacher-Reviewer / Admin / Super Admin  
**Goal:** Log in from one system and be taken to the correct dashboard based on role.  
**Reason / benefit:** So students, teachers, and admins each see the tools they need without separate login systems.

**Acceptance Criteria:**
- All users can log in using the same authentication system.
- After login, the system checks the user’s role.
- Students are redirected to the student dashboard.
- Teachers/reviewers are redirected to the teacher/reviewer dashboard.
- Admins are redirected to the admin dashboard.
- Super Admins can access all admin features.
- Users cannot access dashboards that do not belong to their role.
- Roles can be managed by Super Admin.
- Role information can be stored using Clerk metadata and/or the app database.

**Priority:** MVP / Core feature

---

# User Story 28: Teacher Review Queue with AI Assistance

**User role:** Teacher-Reviewer  
**Goal:** Review assigned submissions, pick available submissions, or use AI-generated review suggestions.  
**Reason / benefit:** So teachers can give feedback faster and more accurately.

**Acceptance Criteria:**
- Teacher can see submissions assigned to them.
- Teacher can see available/unassigned review requests if admin allows it.
- Teacher can pick an unassigned submission to review.
- Teacher can send a submission to AI for a first review.
- AI can generate feedback based on score, weak topics, wrong answers, rubrics, and student performance.
- Teacher can review, edit, approve, or rewrite AI feedback before sending it to the student.
- Student only receives final teacher-approved feedback.
- Admin can track which teacher reviewed each submission.
- Admin can control whether teachers can pick any submission or only assigned ones.

**Priority:** Good-to-have / Core feature if teacher review is monetized

---

# User Story 29: Subjective Answer Practice

**User role:** Student  
**Goal:** Practice subjective or written answers.  
**Reason / benefit:** So students can prepare for exams that require long answers, short answers, essays, explanations, or written problem-solving.

**Acceptance Criteria:**
- Student can open subjective practice by exam category, subject, chapter, or topic.
- Student can see written-answer questions.
- Student can type their answer inside the app.
- Student can save draft answers before submitting.
- Student can submit answers for AI review, teacher review, or both.
- The app stores submitted answers in the student profile.
- Student can view past answers and feedback.
- Subjective practice is connected to the progress dashboard.
- Weak topics from subjective answers are added to the student’s weakness profile.

**Priority:** MVP / Core feature

---

# User Story 30: AI Grading for Subjective Answers

**User role:** Student  
**Goal:** Receive AI review for written answers.  
**Reason / benefit:** So students can quickly understand what they did well and what they need to improve.

**Acceptance Criteria:**
- AI reviews the student’s written answer.
- AI checks answer quality based on rubric, key points, structure, clarity, and accuracy.
- AI gives a score or performance level.
- AI explains what is good in the answer.
- AI explains what is missing or incorrect.
- AI suggests how to improve the answer.
- AI can show a sample better answer.
- AI feedback is saved for later review.
- AI feedback updates the student’s weak and strong topic profile.
- AI usage can be limited by subscription plan.

**Priority:** MVP / Core feature

---

# User Story 31: Teacher Grading for Subjective Answers

**User role:** Student / Teacher-Reviewer  
**Goal:** Send subjective answers to a teacher for review.  
**Reason / benefit:** So the student can get deeper human feedback when needed.

**Acceptance Criteria:**
- Student can request teacher review for a subjective answer.
- Teacher can see the question, student answer, AI feedback, and rubric.
- Teacher can approve, edit, or replace AI feedback.
- Teacher can give comments and a score.
- Student receives final teacher feedback.
- Admin can control whether teacher review is included in the subscription plan.
- Teacher review status can be Pending, In Review, Completed, or Rejected.

**Priority:** MVP if teacher review is part of paid value / Otherwise good-to-have

---

# User Story 32: Admin Rubric Management

**User role:** Admin / Super Admin  
**Goal:** Create grading rubrics for subjective questions.  
**Reason / benefit:** So AI and teachers can grade written answers consistently.

**Acceptance Criteria:**
- Admin can create a rubric for subjective questions.
- Rubric can include mark distribution such as accuracy, structure, examples, clarity, and completeness.
- Rubric can be connected to exam category, subject, chapter, topic, or specific question.
- AI uses the rubric when grading student answers.
- Teachers can view the rubric while reviewing answers.
- Admin can edit or update rubrics.
- Rubrics must be approved/published before being used.
- Student feedback can show rubric-based scoring.

**Priority:** MVP / Core feature

---

# User Story 33: Study and Subscription Notifications

**User role:** Student / Admin  
**Goal:** Receive reminders and notifications.  
**Reason / benefit:** So students do not forget study plans, incomplete lessons, mock tests, feedback, or subscription expiry.

**Acceptance Criteria:**
- Student receives daily study reminders.
- Student receives reminders for incomplete lessons or pending tasks.
- Student receives notification when teacher feedback is ready.
- Student receives notification when AI feedback is ready.
- Student receives mock test reminders if scheduled.
- Student receives subscription expiry reminders.
- Student can turn notifications on or off from settings.
- Admin can send important announcements to selected students or groups.
- Notifications can start with in-app notifications and email.
- SMS/push notification can be added later.

**Priority:** MVP / Good-to-have depending on launch scope

---

# User Story 34: Subscription-Aware Search

**User role:** Student  
**Goal:** Search for lessons, notes, questions, subjects, and mock tests while seeing what is accessible under their subscription.  
**Reason / benefit:** So students can quickly find content and understand what is free, included, or locked.

**Acceptance Criteria:**
- Student can search lessons, notes, videos, MCQs, subjective questions, subjects, chapters, and mock tests.
- Search results prioritize content included in the student’s active subscription plan.
- If the student has multiple active subscriptions, search includes and prioritizes all subscribed content.
- Free content is always searchable.
- Premium content outside the student’s subscription can appear as locked/hidden.
- Locked search results show labels such as Locked, Upgrade Required, or Not Included in Your Plan.
- Student can click locked content to view plan options.
- Admin can decide whether locked content preview is visible or fully hidden.
- Search can filter by exam category, subject, topic, difficulty, content type, and subscription access.
- Search should not expose full paid content to unsubscribed users.

**Priority:** MVP / Core feature

---

# User Story 35: Multiple Active Subscriptions

**User role:** Student / Admin  
**Goal:** Own multiple subscriptions at the same time.  
**Reason / benefit:** So students can prepare for more than one subject, exam, or level without losing access to other plans.

**Acceptance Criteria:**
- Student can purchase more than one subscription plan.
- Each subscription has its own start date, expiry date, status, and included content.
- Student can see all active and expired subscriptions in their profile.
- Access control checks all active subscriptions before locking content.
- Search results prioritize content from all active subscriptions.
- If one subscription expires, only that plan’s content becomes locked.
- Admin can view and manage each subscription separately.
- Payment history connects to the correct subscription plan.

**Priority:** MVP / Core feature

---

# User Story 36: Structured Content Browsing

**User role:** Student  
**Goal:** Browse content in a clear structure.  
**Reason / benefit:** So students can study step by step without needing to search every time.

**Acceptance Criteria:**
- Student can browse by exam category.
- Student can open subject or combined track.
- Student can browse chapters inside that subject/track.
- Student can open topics inside a chapter.
- Each topic can include video lessons, written notes, MCQs, subjective questions, and mock tests if available.
- Free content is accessible to all registered students.
- Premium content shows locked status if not included in the student’s subscription.
- Subscribed content appears clearly as accessible.
- Student can continue from where they left off.
- Content structure is managed from the admin panel.

**Priority:** MVP / Core feature

---

# User Story 37: Continue Learning

**User role:** Student  
**Goal:** Continue from where they left off.  
**Reason / benefit:** So students can quickly return to their last lesson, note, video, quiz, or topic without searching again.

**Acceptance Criteria:**
- Student dashboard shows a Continue Learning section.
- The section shows the last opened lesson, note, video, MCQ practice, subjective question, or mock test.
- Student can click and resume directly.
- Video progress can resume from the last watched position if supported.
- MCQ practice can show incomplete or recently attempted practice sets.
- Written notes can show recently opened topics.
- If a student has multiple active subscriptions, the app shows recent activity across all active plans.
- If a subscription expires, the related continue-learning item becomes locked or shows a renewal prompt.
- Student can see recently completed items.

**Priority:** MVP / Core feature

---

# User Story 38: Admin Analytics Dashboard

**User role:** Admin / Super Admin  
**Goal:** See platform analytics.  
**Reason / benefit:** So the business can understand student activity, subscription performance, revenue, and learning trends.

**Acceptance Criteria:**
- Admin can see total registered students.
- Admin can see active, expired, and cancelled subscriptions.
- Admin can see revenue by plan, exam category, subject, and time period.
- Admin can see most popular courses, subjects, chapters, and topics.
- Admin can see most attempted MCQs and mock tests.
- Admin can see average mock test scores by exam category or level.
- Admin can see commonly weak topics by exam category, subject, or chapter.
- Admin can see teacher review workload and pending review requests.
- Admin can filter analytics by date range, exam category, subject, plan, and user type.
- Super Admin can export analytics reports if needed.

**Priority:** MVP / Good-to-have depending on first launch scope

---

# User Story 39: Bulk Content Import

**User role:** Admin / Content Admin  
**Goal:** Bulk upload content using Excel/CSV templates.  
**Reason / benefit:** So admins can add many MCQs, notes, chapters, topics, and subjective questions quickly instead of entering everything one by one.

**Acceptance Criteria:**
- Admin can download sample Excel/CSV templates.
- Admin can upload MCQs in bulk.
- Admin can upload subjective questions in bulk.
- Admin can upload chapters and topics in bulk.
- Admin can upload or import notes in bulk if formatted properly.
- The system validates required fields before importing.
- Invalid rows are shown with clear error messages.
- Imported content is saved as draft first.
- Admin/reviewer must approve content before publishing.
- Bulk upload connects content to the correct exam category, subject/track, chapter, and topic.
- System prevents duplicate questions if possible.
- Admin can review import history.

**Priority:** MVP / Core admin feature

---

# User Story 40: AI-Assisted Bulk Content Generation

**User role:** Admin / Content Admin / Teacher-Reviewer  
**Goal:** Use AI to generate MCQs, explanations, summaries, notes, and subjective questions from uploaded content.  
**Reason / benefit:** So learning materials can be created faster while still maintaining human quality control.

**Acceptance Criteria:**
- Admin can upload or select source content such as notes, chapters, PDFs, or written material.
- Admin can ask AI to generate MCQs from the source content.
- Admin can ask AI to generate answer explanations.
- Admin can ask AI to generate subjective questions.
- Admin can ask AI to generate sample answers and summaries.
- AI-generated content is saved as draft only.
- Admin/reviewer must review content before saving it as final or publishing.
- Admin can edit AI-generated content before approval.
- Admin can reject incorrect or low-quality AI content.
- The system shows which content was AI-generated.
- Published content becomes visible only after approval.
- AI-generated questions are linked to the correct exam category, subject/track, chapter, and topic.

**Priority:** MVP / Core admin feature

---

# User Story 41: AI Usage Limit and Cost Tracking

**User role:** Super Admin  
**Goal:** Control and track AI usage and cost.  
**Reason / benefit:** So the platform can prevent unnecessary AI spending and remain profitable.

**Acceptance Criteria:**
- Super Admin can set AI usage limits by subscription plan.
- Super Admin can set separate limits for students, admins, and teachers.
- Admin can see total AI usage in requests, tokens, and estimated cost.
- Admin can see AI spending by feature, such as MCQ explanation, subjective grading, mock test review, content generation, and AI tutor.
- Admin can see AI spending by user, plan, exam category, and date range.
- Admin can set monthly AI budget limits.
- System can warn admin when AI spending reaches thresholds such as 70%, 90%, or 100%.
- Free users can have very limited AI access.
- Premium users can have higher AI access.
- Admin/content generation AI usage can be separated from student AI usage.
- If the AI budget limit is reached, the system can pause non-essential AI features.
- AI-generated outputs should be logged for review and debugging.

**Priority:** MVP / Business-critical core feature

---

# Priority Summary

## Strong MVP / Core Features

- Exam category selection
- Subject or combined track selection
- Diagnostic test
- Personalized daily study plan
- MCQ practice
- MCQ explanations
- Admin content management
- Content review and approval
- Video lessons
- Written notes
- Bookmarks
- AI weakness/strength dashboard
- Smart revision mode
- Mock tests
- AI mock test feedback
- Flexible subscriptions
- Paid/free access control
- Admin subscription management
- Nepali payment gateway integration
- Manual payment verification
- Student profile
- Student signup/login
- Role-based dashboards
- Subjective answer practice
- AI subjective grading
- Rubric management
- Subscription-aware search
- Multiple active subscriptions
- Structured content browsing
- Continue learning
- Bulk content import
- AI-assisted content generation
- AI usage and cost tracking

## Good-to-Have / Depends on Launch Scope

- Exam target date
- Advanced admin role management
- Teacher review for mock tests
- Teacher review queue with AI assistance
- Teacher grading for subjective answers
- Notifications
- Admin analytics dashboard

## Later Features

- Video comments
- Group chat
- Leaderboards
- Certificates
- Live classes
- AI voice tutor
- Advanced gamification
- Full native mobile app

---

# Recommended MVP Direction

The first version should focus on proving the core value:

**Students can choose an exam track, study through structured content, practice MCQs and subjective answers, receive AI feedback, track weaknesses and strengths, revise weak topics, and access paid content through subscriptions.**

Admin should be able to manage content, subscriptions, payments, AI generation, review workflows, and AI usage costs.
