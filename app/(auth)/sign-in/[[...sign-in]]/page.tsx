import { SignIn } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  getRoleEntryOption,
  getSafeRoleRedirect,
  roleEntryOptions
} from "@/lib/auth/role-entry";

type SignInPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function getParamValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const params = await searchParams;
  const role = getParamValue(params?.role);
  const redirect = getSafeRoleRedirect(getParamValue(params?.redirect), role);
  const selectedRole = getRoleEntryOption(role);

  return (
    <main className="min-h-screen bg-background px-5 py-8 text-foreground">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <Link
            className="font-heading text-lg font-extrabold text-on-surface"
            href="/"
          >
            Wonkledge
          </Link>
          <p className="mt-10 font-mono text-xs font-semibold uppercase leading-none tracking-[0.05em] text-primary">
            Sign in
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-4xl font-bold leading-tight text-on-surface sm:text-5xl">
            {selectedRole
              ? `${selectedRole.label} access`
              : "Choose where you want to continue."}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-on-surface-variant">
            {selectedRole
              ? selectedRole.description
              : "Use one Clerk login, then Wonkledge checks your internal role before opening protected areas."}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {roleEntryOptions.map((option) => (
              <Link
                className="group rounded-[var(--radius-default)] border border-outline-variant bg-surface-container-low p-4 transition hover:border-primary hover:bg-surface-container"
                href={option.signInHref}
                key={option.key}
              >
                <span className="text-sm font-bold text-on-surface">
                  {option.label}
                </span>
                <span className="mt-2 block text-xs leading-5 text-on-surface-variant">
                  {option.description}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.05em] text-primary">
              {selectedRole ? `${selectedRole.label} login` : "Account login"}
            </p>
            <Link
              className="inline-flex items-center gap-1 text-xs font-bold text-primary"
              href={selectedRole?.signUpHref ?? "/sign-up"}
            >
              Create account
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>
          </div>
          <SignIn
            fallbackRedirectUrl={redirect}
            forceRedirectUrl={redirect}
            signUpUrl={selectedRole?.signUpHref ?? "/sign-up"}
          />
        </div>
      </section>
    </main>
  );
}
