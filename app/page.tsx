export default function HomePage() {
  return (
    <main className="page">
      <section className="intro">
        <h1>SelfForge</h1>
        <p className="tagline">
          We build focused software products that replace complexity with clarity.
        </p>
      </section>

      <section className="products">
        <div className="product">
          <h2>AutoForge</h2>
          <p>
            Intelligent automotive software that turns vehicle data, diagnostics,
            and workflows into something humans can actually use.
          </p>
        </div>

        <div className="product">
          <h2>DevBuddy</h2>
          <p>
            A developer-focused AI assistant designed to reason, build,
            troubleshoot, and ship alongside you — not talk in circles.
          </p>
        </div>

        <div className="product muted">
          <h2>?????</h2>
          <p>
            A logistics and fleet platform currently in development, purpose-built
            for the real-world trucking industry.
          </p>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} SelfForge LLC
      </footer>
    </main>
  );
}
