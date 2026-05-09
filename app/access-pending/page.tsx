import { auth } from "@clerk/nextjs/server";
import { ArrowRight, Mail, ShieldAlert } from "lucide-react";
import Link from "next/link";
import {
  dashboardHref,
  getRoleEntryOption,
  roleEntryOptions
} from "@/lib/auth/role-entry";

type AccessPendingPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function getParamValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function AccessPendingPage({
  searchParams
}: AccessPendingPageProps) {
  await auth.protect();

  const params = await searchParams;
  const role = getRoleEntryOption(getParamValue(params?.role));
  const roleLabel = role?.label ?? "Workspace";

  return (
    <main className="min-h-screen bg-background px-5 py-8 text-foreground">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col justify-center">
        <Link
          className="font-heading text-lg font-extrabold text-on-surface"
          href="/"
        >
          Wonkledge
        </Link>
        <div className="mt-10 max-w-2xl">
          <ShieldAlert aria-hidden="true" className="h-9 w-9 text-tertiary" />
          <p className="mt-6 font-mono text-xs font-semibold uppercase leading-none tracking-[0.05em] text-primary">
            Access pending
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-on-surface sm:text-5xl">
            {roleLabel} access is not active yet.
          </h1>
          <p className="mt-4 text-base leading-8 text-on-surface-variant">
            Your Wonkledge account is signed in, but this workspace needs the
            matching internal role before it can open. This keeps teacher,
            admin, and student areas separated instead of sending the wrong
            account type into the student portal.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {roleEntryOptions.map((option) => (
            <Link
              className="rounded-[var(--radius-default)] border border-outline-variant bg-surface-container-low p-4 transition hover:border-primary hover:bg-surface-container"
              href={option.signInHref}
              key={option.key}
            >
              <span className="text-sm font-bold text-on-surface">
                {option.label} login
              </span>
              <span className="mt-2 block text-xs leading-5 text-on-surface-variant">
                {option.description}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-default)] bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
            href={dashboardHref}
          >
            Check dashboard
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
