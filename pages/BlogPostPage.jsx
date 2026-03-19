function BlogPostPage() {
  const { Link, useParams } = window.ReactRouterDOM;
  const { useEffect, useMemo, useState } = React;
  const {
    useJson,
    usePageTitle,
    fetchText,
    safeDecode,
    escapeHtml
  } = window.AppUtils;
  const { slug = "" } = useParams();
  const decodedSlug = safeDecode(slug);
  const { data: posts, loading, error } = useJson("content/posts/index.json");
  const [markdown, setMarkdown] = useState("");
  const [postError, setPostError] = useState("");
  const post = useMemo(() => posts.find((item) => item.slug === decodedSlug), [posts, decodedSlug]);

  useEffect(() => {
    let isMounted = true;
    setMarkdown("");
    setPostError("");

    if (!post) {
      return () => {
        isMounted = false;
      };
    }

    fetchText(post.file)
      .then((content) => {
        if (isMounted) {
          setMarkdown(content);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setPostError(err.message || "Unable to load this post.");
        }
      });

    return () => {
      isMounted = false;
    };
  }, [post]);

  usePageTitle(post ? `${post.title} | Impractical Dev` : "Blog | Impractical Dev");

  const postHtml = useMemo(() => {
    if (!markdown) {
      return "";
    }

    const rendered = typeof marked !== "undefined"
      ? marked.parse(markdown)
      : escapeHtml(markdown).replace(/\n/g, "<br>");

    return typeof DOMPurify !== "undefined" ? DOMPurify.sanitize(rendered) : rendered;
  }, [markdown]);

  return (
    <section className="stack">
      <Link className="text-link" to="/blog">&larr; Back to all posts</Link>

      {loading && <p className="card">Loading post...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && !post && <p className="error">The requested post was not found.</p>}

      {post && !postError && (
        <article className="post reveal">
          <header className="post-head">
            <p className="meta">{post.date} | {(post.tags || []).join(", ")}</p>
            <h2>{post.title}</h2>
          </header>
          {markdown ? (
            <div className="post-body" dangerouslySetInnerHTML={{ __html: postHtml }} />
          ) : (
            <p>Loading content...</p>
          )}
        </article>
      )}

      {postError && <p className="error">{postError}</p>}
    </section>
  );
}

window.RoutePages = window.RoutePages || {};
window.RoutePages.BlogPostPage = BlogPostPage;
