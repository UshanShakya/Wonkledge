import { SignUp } from "@clerk/nextjs";
import {
  ArrowRight,
  ClipboardCheck,
  GraduationCap,
  Mail,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import {
  getRoleEntryOption,
  getSafeRoleRedirect,
  roleEntryOptions,
  signupRoleMetadataKey,
  type RoleEntryKey
} from "@/lib/auth/role-entry";

type SignUpPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

type RoleSignupDetail = {
  body: string;
  eyebrow: string;
  icon: typeof GraduationCap;
  notes: string[];
  title: string;
};

const roleSignupDetails: Record<RoleEntryKey, RoleSignupDetail> = {
  admin: {
    body:
      "Admin accounts can manage sensitive platform operations, so public self-service signup is closed. Existing admins can sign in, and new admins should be added through the bootstrap or role-management flow.",
    eyebrow: "Admin access",
    icon: ShieldCheck,
    notes: ["Content operations", "Subscriptions and payments", "Platform controls"],
    title: "Admin access needs approval."
  },
  student: {
    body:
      "Create a learner account for study paths, practice, progress, and future subscriptions.",
    eyebrow: "Student signup",
    icon: GraduationCap,
    notes: ["Study plans", "Practice and mock tests", "Progress tracking"],
    title: "Create your student account."
  },
  teacher: {
    body:
      "Create a reviewer account for rubric-guided review queues and final teacher feedback.",
    eyebrow: "Teacher signup",
    icon: ClipboardCheck,
    notes: ["Review queues", "Rubric feedback", "Teacher responses"],
    title: "Create your teacher reviewer account."
  }
};

function getParamValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function RoleSelectionGrid() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {roleEntryOptions.map((option) => {
        const detail = roleSignupDetails[option.key];
        const Icon = detail.icon;

        return (
          <article
            className="flex min-h-72 flex-col rounded-[var(--radius-default)] border border-outline-variant bg-surface-container-low p-5"
            key={option.key}
          >
            <Icon aria-hidden="true" className="h-7 w-7 text-primary" />
            <p className="mt-5 font-mono text-xs font-semibold uppercase leading-none tracking-[0.05em] text-primary">
              {detail.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-xl font-bold text-on-surface">
              {option.label}
            </h2>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant">
              {option.accountCopy}
            </p>
            <Link
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-[var(--radius-default)] bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
              href={option.signUpHref}
            >
              {option.actionCopy}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </article>
        );
      })}
    </div>
  );
}

function RoleSwitcher({ selectedRole }: { selectedRole: RoleEntryKey }) {
  return (
    <div className="mt-8 grid gap-2 sm:grid-cols-3">
      {roleEntryOptions.map((option) => {
        const isSelected = option.key === selectedRole;

        return (
          <Link
            aria-current={isSelected ? "page" : undefined}
            className={`rounded-[var(--radius-default)] border px-3 py-3 text-sm font-bold transition ${
              isSelected
                ? "border-primary bg-primary text-primary-foreground"
                : "border-outline-variant bg-surface-container-low text-on-surface hover:border-primary hover:bg-surface-container"
            }`}
            href={option.signUpHref}
            key={option.key}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}

export default async function SignUpPage({ searchParams }: SignUpPageProps) {
  const params = await searchParams;
  const role = getParamValue(params?.role);
  const selectedRole = getRoleEntryOption(role);
  const redirect = getSafeRoleRedirect(getParamValue(params?.redirect), role);

  if (!selectedRole) {
    return (
      <main className="min-h-screen bg-background px-5 py-8 text-foreground">
        <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col justify-center">
          <Link
            className="font-heading text-lg font-extrabold text-on-surface"
            href="/"
          >
            Wonkledge
          </Link>
          <div className="mt-10 max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase leading-none tracking-[0.05em] text-primary">
              Create account
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-on-surface sm:text-5xl">
              Start with the right account type.
            </h1>
            <p className="mt-4 text-base leading-8 text-on-surface-variant">
              Student, teacher, and admin accounts share Clerk authentication,
              but Wonkledge keeps their internal roles and dashboards separate.
            </p>
          </div>
          <RoleSelectionGrid />
        </section>
      </main>
    );
  }

  const detail = roleSignupDetails[selectedRole.key];
  const Icon = detail.icon;

  if (selectedRole.key === "admin") {
    return (
      <main className="min-h-screen bg-background px-5 py-8 text-foreground">
        <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col justify-center">
          <Link
            className="font-heading text-lg font-extrabold text-on-surface"
            href="/"
          >
            Wonkledge
          </Link>
          <RoleSwitcher selectedRole={selectedRole.key} />
          <div className="mt-10 max-w-2xl">
            <Icon aria-hidden="true" className="h-9 w-9 text-primary" />
            <p className="mt-6 font-mono text-xs font-semibold uppercase leading-none tracking-[0.05em] text-primary">
              {detail.eyebrow}
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-on-surface sm:text-5xl">
              {detail.title}
            </h1>
            <p className="mt-4 text-base leading-8 text-on-surface-variant">
              {detail.body}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-default)] bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
              href={selectedRole.signInHref}
            >
              Admin sign in
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-default)] border border-outline-variant px-5 py-3 text-sm font-bold text-on-surface transition hover:bg-surface-container-high"
              href="mailto:hello@wonkledge.com"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              Contact Wonkledge
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-5 py-8 text-foreground">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <Link
            className="font-heading text-lg font-extrabold text-on-surface"
            href="/"
          >
            Wonkledge
          </Link>
          <RoleSwitcher selectedRole={selectedRole.key} />
          <div className="mt-10 max-w-2xl">
            <Icon aria-hidden="true" className="h-9 w-9 text-primary" />
            <p className="mt-6 font-mono text-xs font-semibold uppercase leading-none tracking-[0.05em] text-primary">
              {detail.eyebrow}
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-on-surface sm:text-5xl">
              {detail.title}
            </h1>
            <p className="mt-4 text-base leading-8 text-on-surface-variant">
              {detail.body}
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {detail.notes.map((note) => (
              <div
                className="rounded-[var(--radius-default)] border border-outline-variant bg-surface-container-low px-4 py-4"
                key={note}
              >
                <p className="text-sm font-semibold text-on-surface">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.05em] text-primary">
              {selectedRole.actionCopy}
            </p>
            <Link
              className="inline-flex items-center gap-1 text-xs font-bold text-primary"
              href={selectedRole.signInHref}
            >
              Sign in
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>
          </div>
          <SignUp
            fallbackRedirectUrl={redirect}
            forceRedirectUrl={redirect}
            signInUrl={selectedRole.signInHref}
            unsafeMetadata={{ [signupRoleMetadataKey]: selectedRole.key }}
          />
        </div>
      </section>
    </main>
  );
}
