# Vishwadeep Balakrishnan

Source for [vishwadeepb.com](https://vishwadeepb.com), built with Astro and deployed through GitHub Pages.

## Publish an essay

Add a Markdown file to `src/content/essays/`:

```md
---
title: "Essay title"
date: 2026-09-04
description: "Optional one-sentence summary."
category: "Essay"
draft: false
---

Write the essay here using normal Markdown.
```

The filename becomes the URL. For example, `my-essay.md` is published at `/essays/my-essay/`. Essays automatically appear on the archive page, newest first.

Only `title` and `date` are required. Set `draft: true` to keep an essay off the site.

## Edit the site

- `src/pages/index.astro` — homepage copy
- `src/components/Header.astro` — navigation
- `src/components/SocialLinks.astro` — social links
- `src/styles/global.css` — all visual styling
- `src/content/essays/` — essay Markdown files

## Run locally

```bash
npm install
npm run dev
```

Run `npm run build` to verify the production site. Pushing to `main` triggers `.github/workflows/deploy.yml` and deploys the generated `dist/` folder to GitHub Pages.

Keep the root `CNAME`, `public/CNAME`, and `.github/workflows/deploy.yml` files in place so the custom domain continues to work.
