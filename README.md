# impracticaldev

Single-page ReactJS website with:

- Markdown-based blog for data science and technical posts
- Videos page driven by YouTube links in JSON
- About page with profile details

## Run Locally

From this folder, run:

```powershell
python -m http.server 8000
```

Then open http://localhost:8000

The app runs as a React SPA in hash mode:

- Home: `/#/`
- Blog list: `/#/blog`
- Blog post: `/#/blog/<post-slug>`
- Videos: `/#/videos`
- About: `/#/about`

## Edit Content

- Blog index: `content/posts/index.json`
- Blog Markdown files: `content/posts/*.md`
- Video links: `content/videos.json`
- About details: `pages/AboutPage.jsx`
- Route components: `pages/*.jsx`
- Shared hooks/utilities: `shared/app-utils.jsx`

## Notes

- React and React Router are loaded from CDNs (no build step required).
- Markdown rendering is done in-browser using `marked` + `DOMPurify`.
