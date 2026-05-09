const adminSections = ["Content", "Subscriptions", "Analytics"];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-8 text-foreground">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col justify-center gap-8">
        <div>
          <p className="mb-4 font-mono text-xs font-semibold uppercase leading-none tracking-[0.05em] text-primary">
            Admin Area
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-on-surface sm:text-5xl">
            Admin console
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-on-surface-variant">
            A signed-in workspace for content operations, subscriptions,
            payments, analytics, and platform controls.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3" aria-label="Admin route areas">
          {adminSections.map((section) => (
            <div
              className="rounded-[var(--radius-default)] border border-outline-variant bg-surface-container-low px-4 py-5"
              key={section}
            >
              <p className="text-sm font-medium text-on-surface">{section}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
