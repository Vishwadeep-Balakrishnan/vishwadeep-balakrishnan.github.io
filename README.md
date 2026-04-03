# Vishwadeep Balakrishnan — Personal Site

Personal website and essay publishing platform built with [Astro](https://astro.build/) and MDX.

**Live at:** [vishwadeepb.com](https://vishwadeepb.com)

---

## Authoring Guide

### Adding a new essay

1. Create a new `.mdx` file in `src/content/essays/`:

   ```
   src/content/essays/your-essay-slug.mdx
   ```

2. Add frontmatter at the top:

   ```mdx
   ---
   title: "Your Essay Title"
   description: "A one-sentence summary."
   pubDate: 2025-04-01
   tag: "AI"
   tags: ["AI", "Research"]
   draft: false
   ---

   Your essay content here, written in Markdown/MDX...
   ```

3. Commit and push — it appears on the Ideas page automatically and gets its own page at `/essays/your-essay-slug/`.

**Frontmatter fields:**

| Field         | Required | Description                                            |
|---------------|----------|--------------------------------------------------------|
| `title`       | Yes      | Essay title displayed on the page and in listings      |
| `description` | Yes      | One-line summary shown in the essay list and meta tags |
| `pubDate`     | Yes      | Publication date in `YYYY-MM-DD` format                |
| `tag`         | No       | Primary category label (e.g. "AI", "Investing")        |
| `tags`        | No       | Array of tags for categorisation                       |
| `updatedDate` | No       | Last updated date in `YYYY-MM-DD` format               |
| `draft`       | No       | Set to `true` to hide from the site (default: `false`) |

### Editing an essay

Edit the corresponding `.mdx` file in `src/content/essays/`. Commit and push — changes go live automatically.

### Removing an essay

Delete the `.mdx` file from `src/content/essays/`. Commit and push — it disappears from the site automatically.

### Working with drafts

Set `draft: true` in the frontmatter to hide an essay from the site without deleting it. The essay won't appear in the Ideas list, RSS feed, or sitemap.

### Rich content

Essays support:

- **Code blocks** with syntax highlighting (fenced with triple backticks and language identifier)
- **Tables** (standard Markdown table syntax)
- **Images** (`![alt](url)` syntax)
- **Math** — inline with `$...$`, block with `$$...$$` (powered by KaTeX)
- **Blockquotes** (`> ...`)
- **Lists** (ordered and unordered)
- **Links**, **bold**, *italic* — all standard Markdown

---

## RSS Feed

An RSS feed is automatically generated at `/rss.xml` and includes all published (non-draft) essays. Readers can subscribe at:

```
https://vishwadeepb.com/rss.xml
```

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

---

## Deployment

The site deploys automatically to GitHub Pages via GitHub Actions:

1. Push to `main` branch
2. The `.github/workflows/deploy.yml` workflow runs automatically
3. It installs dependencies, builds the Astro site, and deploys to GitHub Pages

**Important:** The GitHub Pages source must be set to **GitHub Actions** (not "Deploy from a branch") in your repository settings under Settings → Pages.

---

## Project Structure

```
├── src/
│   ├── content/
│   │   └── essays/          ← Your essay .mdx files live here
│   ├── layouts/
│   │   └── BaseLayout.astro ← Shared layout (nav, head, theme)
│   ├── pages/
│   │   ├── index.astro      ← Home page
│   │   ├── about.astro      ← About page
│   │   ├── ideas.astro      ← Essays listing (auto-generated)
│   │   ├── contact.astro    ← Contact page
│   │   ├── essays/
│   │   │   └── [slug].astro ← Dynamic essay pages
│   │   └── rss.xml.ts       ← RSS feed generator
│   └── content.config.ts    ← Content collection schema
├── public/
│   ├── styles/global.css    ← Site stylesheet
│   ├── CNAME                ← Custom domain config
│   └── .nojekyll
├── astro.config.mjs         ← Astro configuration
└── package.json
```

---

## Technology

- **Astro** — static site generator
- **MDX** — Markdown + JSX for essay content
- **Shiki** — syntax highlighting for code blocks
- **KaTeX** — math equation rendering
- **Astro Content Collections** — typed content management
- **RSS** — `@astrojs/rss` for feed generation
- **Sitemap** — `@astrojs/sitemap` for SEO