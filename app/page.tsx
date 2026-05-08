const learningPillars = [
  "Diagnostic testing",
  "Personalized study plans",
  "AI weakness tracking",
  "Human-reviewed feedback"
];

export default function Home() {
  return (
    <main className="home-shell">
      <section className="hero-panel" aria-labelledby="home-title">
        <p className="eyebrow">Wonkledge</p>
        <h1 id="home-title">Focused exam preparation for ambitious learners.</h1>
        <p className="hero-copy">
          A mobile-first learning engine for structured study, practice,
          feedback, revision, and subscription-aware exam preparation.
        </p>
        <div className="pillar-list" aria-label="Learning pillars">
          {learningPillars.map((pillar) => (
            <span key={pillar}>{pillar}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
