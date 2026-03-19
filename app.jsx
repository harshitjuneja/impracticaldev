const routerDom = window.ReactRouterDOM;

if (!routerDom) {
  const rootEl = document.getElementById("root");
  if (rootEl) {
    rootEl.innerHTML = '<p class="error">Routing failed to load. Refresh the page and check CDN script availability.</p>';
  }
  throw new Error("ReactRouterDOM global is missing.");
}

const routePages = window.RoutePages || {};
const {
  HomePage,
  BlogListPage,
  BlogPostPage,
  VideosPage,
  AboutPage
} = routePages;

const missingPages = [
  ["HomePage", HomePage],
  ["BlogListPage", BlogListPage],
  ["BlogPostPage", BlogPostPage],
  ["VideosPage", VideosPage],
  ["AboutPage", AboutPage]
]
  .filter(([, component]) => typeof component !== "function")
  .map(([name]) => name);

if (missingPages.length > 0) {
  const rootEl = document.getElementById("root");
  if (rootEl) {
    rootEl.innerHTML = `<p class="error">Some route page files failed to load: ${missingPages.join(", ")}.</p>`;
  }
  throw new Error(`Missing route page components: ${missingPages.join(", ")}`);
}

const {
  HashRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate
} = routerDom;

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <HashRouter>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" to="/">Impractical Dev</Link>
          <nav className="nav" aria-label="Main navigation">
            <TopNavLink to="/" end>Home</TopNavLink>
            <TopNavLink to="/blog">Blog</TopNavLink>
            <TopNavLink to="/videos">Videos</TopNavLink>
            <TopNavLink to="/about">About</TopNavLink>
          </nav>
        </div>
      </header>

      <main className="container page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>Copyright {currentYear} Harshit Juneja</p>
        </div>
      </footer>
    </HashRouter>
  );
}

function TopNavLink({ to, end, children }) {
  return (
    <NavLink
      to={to}
      end={Boolean(end)}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {children}
    </NavLink>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
