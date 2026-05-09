const learningPillars = [
  "Diagnostic testing",
  "Personalized study plans",
  "AI weakness tracking",
  "Human-reviewed feedback"
];

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-stretch bg-background px-5 py-8 text-foreground sm:place-items-center">
      <section
        className="self-center rounded-[var(--radius-lg)] border border-outline-variant/80 bg-gradient-to-br from-surface-container-high to-surface-container-low p-6 sm:w-full sm:max-w-[920px] sm:p-12 lg:p-[72px]"
        aria-labelledby="home-title"
      >
        <p className="mb-4 font-mono text-xs font-semibold uppercase leading-none tracking-[0.05em] text-primary">
          Wonkledge
        </p>
        <h1
          id="home-title"
          className="max-w-[760px] font-heading text-[clamp(2.4rem,7vw,4.75rem)] font-extrabold leading-[1.05] tracking-normal text-on-surface"
        >
          Focused exam preparation for ambitious learners.
        </h1>
        <p className="mt-6 max-w-[660px] text-[1.05rem] leading-[1.7] text-on-surface-variant">
          A mobile-first learning engine for structured study, practice,
          feedback, revision, and subscription-aware exam preparation.
        </p>
        <div className="mt-8 flex flex-wrap gap-2" aria-label="Learning pillars">
          {learningPillars.map((pillar) => (
            <span
              className="rounded-full border border-outline-variant bg-surface-container-high px-4 py-3 text-sm leading-none text-on-surface"
              key={pillar}
            >
              {pillar}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
