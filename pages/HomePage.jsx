function HomePage() {
  const { Link } = window.ReactRouterDOM;
  const { usePageTitle } = window.AppUtils;
  usePageTitle("Harshit Juneja | Impractical Dev");

  return (
    <>
      <section className="hero reveal">
        <p className="kicker">Personal Website</p>
        <h1>Harshit Juneja</h1>
        <p className="lead">Health AI, computer vision, and practical engineering notes with a focus on what works in production.</p>
        <div className="cta-row">
          <Link className="btn primary" to="/blog">Read Blog</Link>
          <Link className="btn ghost" to="/videos">Watch Videos</Link>
        </div>
      </section>

      <section className="grid reveal">
        <article className="card">
          <h2>What I Write</h2>
          <p>Data science experiments, model deployment lessons, and technical deep dives in Markdown.</p>
        </article>
        <article className="card">
          <h2>What I Build</h2>
          <p>Clinical AI research, cloud-backed products, and software systems for real users.</p>
        </article>
        <article className="card">
          <h2>Where To Start</h2>
          <p>Go to the blog for new posts, videos for YouTube links, and about for my full profile.</p>
        </article>
      </section>
    </>
  );
}

window.RoutePages = window.RoutePages || {};
window.RoutePages.HomePage = HomePage;
