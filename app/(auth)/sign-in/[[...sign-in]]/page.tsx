import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-5 py-8 text-foreground">
      <section className="w-full max-w-md" aria-labelledby="sign-in-title">
        <div className="mb-6 text-center">
          <p className="mb-3 font-mono text-xs font-semibold uppercase leading-none tracking-[0.05em] text-primary">
            Wonkledge
          </p>
          <h1
            id="sign-in-title"
            className="font-heading text-3xl font-bold leading-tight text-on-surface"
          >
            Sign in
          </h1>
        </div>
        <SignIn />
      </section>
    </main>
  );
}
