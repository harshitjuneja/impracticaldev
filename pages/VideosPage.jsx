function VideosPage() {
  const { useJson, usePageTitle, sanitizeUrl } = window.AppUtils;
  usePageTitle("Videos | Impractical Dev");
  const { data: videos, loading, error } = useJson("content/videos.json");

  return (
    <>
      <section className="page-head reveal">
        <p className="kicker">YouTube</p>
        <h1>Video Library</h1>
        <p className="lead">Manage this page by adding links in one JSON file.</p>
        <a className="btn ghost" href="https://www.youtube.com/@impracticaldev" target="_blank" rel="noopener noreferrer">Open Channel</a>
      </section>

      <section className="stack">
        {loading && <p className="card">Loading videos...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && (
          <div className="stack stagger">
            {videos.map((video, index) => (
              <article className="card" key={`${video.url}-${index}`}>
                <h2>{video.title || "Untitled"}</h2>
                <p>{video.description || ""}</p>
                <a className="btn primary" href={sanitizeUrl(video.url)} target="_blank" rel="noopener noreferrer">Open On YouTube</a>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

window.RoutePages = window.RoutePages || {};
window.RoutePages.VideosPage = VideosPage;
