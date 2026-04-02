# Vishwadeep Balakrishnan — Personal Website

A minimal, beautiful personal website built for GitHub Pages.

## Getting Started

### Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g., `vishwadeep.github.io` or any repo name)
2. Upload all these files to the repository
3. Go to **Settings → Pages → Source** and select `main` branch, `/ (root)` folder
4. Your site will be live at `https://yourusername.github.io/repo-name`

---

## How to Edit Content

### Landing Page (`index.html`)
Edit the `.intro-block-content` sections directly in `index.html`. Each block has a label and a content area. Update the text, and update the `href` links to your actual Substack and Calendly URLs.

### About Page (`about.html`)
Edit the `<div class="about-section">` blocks in `about.html`. You can add or remove sections freely.

### Contact Page (`contact.html`)
Update the email address and social links in `contact.html`. Replace `vishwadeep@example.com` and the social media URLs with your real ones.

---

## How to Add Essays

### Step 1: Write the essay
Create a new `.md` file in the `_essays/` folder using the template in `_essays/_template.md`.

Name it with a URL-friendly slug, e.g.: `_essays/ai-and-democracy.md`

### Step 2: Add it to the data file
Open `js/essays-data.js` and add a new entry to the `ESSAYS` array:

```javascript
{
  slug: "ai-and-democracy",
  title: "AI and Democracy",
  date: "2025-04-01",
  description: "How AI is reshaping political participation.",
  tag: "AI",
  body: `
## Introduction

Your essay content here, in markdown format.

## Section Two

More content...
  `
}
```

The `body` field uses template literals (backticks) so you can include newlines and markdown formatting.

### Step 3: Push to GitHub
Commit and push. The essay will appear on the Ideas page and will be accessible at `essay.html?slug=ai-and-democracy`.

---

## Customisation

### Colors and Typography
All design tokens are in `css/style.css` under `:root { ... }`. You can change:
- `--accent` — the warm orange accent color
- `--font-serif` — the serif font (currently Lora)
- `--font-sans` — the sans-serif font (currently DM Sans)
- `--max-w` — the max content width

### Dark Mode
Dark mode is fully supported. Users can toggle it with the button in the nav. Their preference is saved in `localStorage` and persists across all pages.

### Adding Pages
To add a new page (e.g., `projects.html`):
1. Copy any existing page (e.g., `about.html`)
2. Rename it and update the `<title>` tag
3. Add a link to it in the nav on every page

---

## File Structure

```
/
├── index.html          ← Landing / home page
├── about.html          ← About page
├── ideas.html          ← Essay list page
├── essay.html          ← Individual essay template (dynamic)
├── contact.html        ← Contact page
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── theme.js        ← Theme persistence (loads in <head>)
│   ├── main.js         ← Nav, essay rendering, markdown parser
│   └── essays-data.js  ← Essay content and metadata ← EDIT THIS
└── _essays/
    ├── _template.md    ← Template for new essays
    └── *.md            ← Your essay source files (for reference)
```

---

## Notes

- The site is 100% static — no build step, no Node.js, no dependencies.
- Essays are stored in `js/essays-data.js` as JavaScript. The `_essays/` markdown files are for your reference and version control; the actual rendered content comes from `essays-data.js`.
- If you want fully automatic markdown-to-site conversion, consider adding a GitHub Action that reads `_essays/*.md` and regenerates `essays-data.js`.
