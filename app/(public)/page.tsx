import { SignOutButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import {
  ArrowRight,
  BrainCircuit,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  Mail,
  Menu,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { dashboardHref, getRoleOption } from "@/lib/auth/role-entry";

const navLinks = [
  { href: "#what-we-do", label: "What we do" },
  { href: "#services", label: "Services" },
  { href: "#accounts", label: "Accounts" },
  { href: "#contact", label: "Contact" }
];

const studentRoleEntry = getRoleOption("student");

const roleLinks = ([
  { icon: GraduationCap, key: "student", loginLabel: "Student login" },
  { icon: ClipboardCheck, key: "teacher", loginLabel: "Teacher login" },
  { icon: ShieldCheck, key: "admin", loginLabel: "Admin login" }
] as const).map((role) => ({
  ...getRoleOption(role.key),
  icon: role.icon,
  loginLabel: role.loginLabel
}));

const whatWeDo = [
  {
    description:
      "Students get structured lessons, practice, revision, and recommendations tied to their selected exam path.",
    icon: GraduationCap,
    title: "Focused student preparation"
  },
  {
    description:
      "AI helps surface weak areas and study priorities while human reviewers stay in the loop for trust and quality.",
    icon: BrainCircuit,
    title: "AI-guided study direction"
  },
  {
    description:
      "Teachers and admins can review feedback, manage content, and keep published material controlled.",
    icon: FileCheck2,
    title: "Human-reviewed learning"
  }
];

const services = [
  "Exam preparation pathways",
  "Diagnostic tests and practice",
  "Personalized study plans",
  "AI weakness and strength tracking",
  "Teacher-reviewed subjective feedback",
  "Admin-managed content and subscriptions"
];

export default async function Home() {
  const { userId } = await auth();
  const isSignedIn = Boolean(userId);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-outline-variant bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 w-full max-w-[var(--container-max)] items-center justify-between gap-4 px-5">
          <Link
            aria-label="Wonkledge home"
            className="font-heading text-lg font-extrabold tracking-normal text-on-surface"
            href="/"
          >
            Wonkledge
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navLinks.map((link) => (
              <a
                className="rounded-[var(--radius-default)] px-3 py-2 text-sm font-medium text-on-surface-variant transition hover:bg-surface-container-high hover:text-on-surface"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {isSignedIn ? (
              <>
                <Link
                  className="rounded-[var(--radius-default)] border border-outline-variant px-3 py-2 text-sm font-semibold text-on-surface transition hover:bg-surface-container-high"
                  href={dashboardHref}
                >
                  Dashboard
                </Link>
                <SignOutButton>
                  <button className="rounded-[var(--radius-default)] bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition hover:bg-primary/90">
                    Logout
                  </button>
                </SignOutButton>
                <UserButton />
              </>
            ) : (
              <>
                <Link
                  className="rounded-[var(--radius-default)] border border-outline-variant px-3 py-2 text-sm font-semibold text-on-surface transition hover:bg-surface-container-high"
                  href="#accounts"
                >
                  Create account
                </Link>
                <Link
                  className="rounded-[var(--radius-default)] bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
                  href={studentRoleEntry.signInHref}
                >
                  Student login
                </Link>
              </>
            )}
          </div>

          <details className="group relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-[var(--radius-default)] border border-outline-variant bg-surface-container-low text-on-surface marker:hidden">
              <span className="sr-only">Open navigation</span>
              <Menu aria-hidden="true" className="h-5 w-5" />
            </summary>
            <div className="absolute right-0 top-12 w-[min(21rem,calc(100vw-2.5rem))] rounded-[var(--radius-lg)] border border-outline-variant bg-surface-container-low p-3 shadow-2xl shadow-black/30">
              <nav aria-label="Mobile navigation" className="grid gap-1">
                {navLinks.map((link) => (
                  <a
                    className="rounded-[var(--radius-default)] px-3 py-3 text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-3 grid gap-2 border-t border-outline-variant pt-3">
                {isSignedIn ? (
                  <>
                    <Link
                      className="rounded-[var(--radius-default)] border border-outline-variant px-3 py-3 text-sm font-semibold text-on-surface hover:bg-surface-container-high"
                      href={dashboardHref}
                    >
                      Dashboard
                    </Link>
                    <SignOutButton>
                      <button className="rounded-[var(--radius-default)] bg-primary px-4 py-3 text-sm font-bold text-primary-foreground">
                        Logout
                      </button>
                    </SignOutButton>
                  </>
                ) : (
                  roleLinks.map((role) => (
                    <Link
                      className="rounded-[var(--radius-default)] border border-outline-variant px-3 py-3 text-sm font-semibold text-on-surface hover:bg-surface-container-high"
                      href={role.signInHref}
                      key={role.key}
                    >
                      {role.loginLabel}
                    </Link>
                  ))
                )}
              </div>
            </div>
          </details>
        </div>
      </header>

      <section
        className="relative isolate overflow-hidden border-b border-outline-variant bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(11, 14, 21, 0.94) 0%, rgba(16, 19, 26, 0.82) 48%, rgba(16, 19, 26, 0.5) 100%), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80')"
        }}
      >
        <div className="mx-auto flex min-h-[calc(92svh-4rem)] w-full max-w-[var(--container-max)] items-center px-5 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-xs font-semibold uppercase leading-none tracking-[0.05em] text-primary">
              AI-powered learning platform for Nepal
            </p>
            <h1 className="font-heading text-5xl font-extrabold leading-[1.05] tracking-normal text-on-surface sm:text-6xl lg:text-7xl">
              Exam preparation that knows what to study next.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant sm:text-xl sm:leading-9">
              Wonkledge helps students prepare through structured exam paths,
              guided practice, AI weakness tracking, and human-reviewed
              feedback for serious Nepal-focused learning.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-default)] bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
                href={isSignedIn ? dashboardHref : studentRoleEntry.signUpHref}
              >
                Start as a student
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-default)] border border-outline bg-background/45 px-5 py-3 text-sm font-bold text-on-surface backdrop-blur transition hover:bg-surface-container-high"
                href="#accounts"
              >
                Choose account type
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-outline-variant bg-surface-container-lowest px-5 py-14 sm:py-20"
        id="what-we-do"
      >
        <div className="mx-auto max-w-[var(--container-max)]">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.05em] text-primary">
              What we do
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-on-surface sm:text-4xl">
              We turn exam preparation into a guided learning path.
            </h2>
            <p className="mt-4 text-base leading-8 text-on-surface-variant">
              Wonkledge is being built for students who need clarity, not more
              scattered content. The platform connects learning material,
              practice, feedback, and progress into one exam-focused system.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {whatWeDo.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="rounded-[var(--radius-default)] border border-outline-variant bg-surface-container-low p-5"
                  key={item.title}
                >
                  <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
                  <h3 className="mt-5 font-heading text-xl font-bold text-on-surface">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant px-5 py-14 sm:py-20" id="services">
        <div className="mx-auto grid max-w-[var(--container-max)] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.05em] text-primary">
              Services
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-on-surface sm:text-4xl">
              Preparation support for learners and academic teams.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div
                className="flex items-center gap-3 rounded-[var(--radius-default)] border border-outline-variant bg-surface-container-low px-4 py-4"
                key={service}
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-tertiary" />
                <p className="text-sm font-semibold text-on-surface">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-b border-outline-variant bg-surface-container-lowest px-5 py-14 sm:py-20"
        id="accounts"
      >
        <div className="mx-auto max-w-[var(--container-max)]">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.05em] text-primary">
              Accounts
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-on-surface sm:text-4xl">
              Choose how you want to enter Wonkledge.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {roleLinks.map((role) => {
              const Icon = role.icon;
              const signedInHref = dashboardHref;
              const signedOutHref = role.signUpHref;

              return (
                <article
                  className="rounded-[var(--radius-default)] border border-outline-variant bg-surface-container-low p-5"
                  key={role.key}
                >
                  <Icon aria-hidden="true" className="h-6 w-6 text-primary" />
                  <h3 className="mt-5 font-heading text-xl font-bold text-on-surface">
                    {role.label}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                    {role.accountCopy}
                  </p>
                  <div className="mt-5 grid gap-2">
                    <Link
                      className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-default)] bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
                      href={isSignedIn ? signedInHref : signedOutHref}
                    >
                      {isSignedIn
                        ? "Open dashboard"
                        : role.actionCopy}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                    {role.key !== "student" ? (
                      <a
                        className="inline-flex items-center justify-center rounded-[var(--radius-default)] border border-outline-variant px-4 py-3 text-sm font-bold text-on-surface transition hover:bg-surface-container-high"
                        href="#contact"
                      >
                        {role.contactCopy}
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:py-20" id="contact">
        <div className="mx-auto grid max-w-[var(--container-max)] gap-8 rounded-[var(--radius-lg)] border border-outline-variant bg-surface-container-low p-6 sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <Mail aria-hidden="true" className="h-8 w-8 text-tertiary" />
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-on-surface sm:text-4xl">
              Contact Wonkledge
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-on-surface-variant">
              For launch partnerships, teacher reviewer access, admin access,
              or early exam category discussions, reach the Wonkledge team.
            </p>
            <a
              className="mt-5 inline-flex items-center gap-2 rounded-[var(--radius-default)] bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
              href="mailto:hello@wonkledge.com"
            >
              hello@wonkledge.com
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
