const { useEffect, useState } = React;

function useJson(path) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError("");

    fetchJson(path)
      .then((response) => {
        if (isMounted) {
          setData(response);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || `Unable to load ${path}`);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [path]);

  return { data, loading, error };
}

function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

async function fetchJson(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }

  return response.json();
}

async function fetchText(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }

  return response.text();
}

function sanitizeUrl(raw) {
  try {
    const parsed = new URL(raw);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.toString();
    }
  } catch (error) {
    return "#";
  }

  return "#";
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

window.AppUtils = {
  useJson,
  usePageTitle,
  fetchText,
  sanitizeUrl,
  safeDecode,
  escapeHtml
};
