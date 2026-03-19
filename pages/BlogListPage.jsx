function BlogListPage() {
  const { Link } = window.ReactRouterDOM;
  const { useJson, usePageTitle } = window.AppUtils;
  usePageTitle("Blog | Impractical Dev");
  const { data: posts, loading, error } = useJson("content/posts/index.json");

  return (
    <>
      <section className="page-head reveal">
        <p className="kicker">Markdown Blog</p>
        <h1>Data Science And Technical Posts</h1>
        <p className="lead">Write posts in Markdown and publish by updating one small JSON index.</p>
      </section>

      <section className="stack">
        {loading && <p className="card">Loading posts...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && (
          <div className="stack stagger">
            {posts.map((post) => (
              <article className="card" key={post.slug}>
                <p className="meta">{post.date}</p>
                <h2>{post.title}</h2>
                <p>{(post.tags || []).join(", ")}</p>
                <Link className="btn ghost" to={`/blog/${encodeURIComponent(post.slug)}`}>Read Post</Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

window.RoutePages = window.RoutePages || {};
window.RoutePages.BlogListPage = BlogListPage;
