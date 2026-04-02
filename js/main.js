/* main.js */

// ── Theme toggle ──
function initTheme() {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  function updateToggle(theme) {
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    toggle.querySelector('.toggle-label').textContent = theme === 'dark' ? 'Light' : 'Dark';
    toggle.querySelector('.toggle-icon').textContent = theme === 'dark' ? '☀' : '◐';
  }

  var current = localStorage.getItem('vb-theme') || 'light';
  document.documentElement.setAttribute('data-theme', current);
  updateToggle(current);

  toggle.addEventListener('click', function() {
    current = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', current);
    localStorage.setItem('vb-theme', current);
    updateToggle(current);
  });
}

// ── Active nav link ──
function initActiveNav() {
  var path = window.location.pathname;
  var links = document.querySelectorAll('.nav-links a');
  links.forEach(function(link) {
    var href = link.getAttribute('href');
    if (
      (href === 'index.html' && (path === '/' || path.endsWith('index.html') || path === '')) ||
      (href !== 'index.html' && path.includes(href.replace('.html', '')))
    ) {
      link.classList.add('active');
    }
  });
}

// ── Markdown essay loader (for ideas.html) ──
function loadEssays() {
  var container = document.getElementById('essay-list');
  if (!container) return;

  // Essays are defined in essays-data.js (auto-generated from _essays folder)
  if (typeof ESSAYS === 'undefined') return;

  if (ESSAYS.length === 0) {
    container.innerHTML = '<p style="color:var(--ink-4); font-size:0.9rem; padding: 24px 0;">No essays published yet. Check back soon.</p>';
    return;
  }

  // Sort by date descending
  var sorted = ESSAYS.slice().sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  container.innerHTML = sorted.map(function(essay) {
    var dateStr = essay.date ? new Date(essay.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : '';
    return [
      '<a href="essay.html?slug=' + essay.slug + '" class="essay-item">',
      '  <span class="essay-date">' + dateStr + '</span>',
      '  <span>',
      '    <span class="essay-title">' + essay.title + '</span>',
      essay.description ? '    <span class="essay-desc">' + essay.description + '</span>' : '',
      '  </span>',
      essay.tag ? '  <span class="essay-tag">' + essay.tag + '</span>' : '<span></span>',
      '</a>'
    ].join('\n');
  }).join('\n');
}

// ── Essay page loader ──
function loadEssay() {
  var container = document.getElementById('essay-content');
  if (!container) return;

  var params = new URLSearchParams(window.location.search);
  var slug = params.get('slug');
  if (!slug || typeof ESSAYS === 'undefined') return;

  var essay = ESSAYS.find(function(e) { return e.slug === slug; });
  if (!essay) {
    container.innerHTML = '<p>Essay not found.</p>';
    return;
  }

  // Update page title and header
  var titleEl = document.getElementById('essay-title');
  var dateEl  = document.getElementById('essay-date');
  var ledeEl  = document.getElementById('essay-lede');
  var tagEl   = document.getElementById('essay-tag-display');
  var docTitle = document.querySelector('title');

  if (titleEl) titleEl.textContent = essay.title;
  if (ledeEl && essay.description) ledeEl.textContent = essay.description;
  if (docTitle) docTitle.textContent = essay.title + ' — Vishwadeep Balakrishnan';
  if (tagEl && essay.tag) tagEl.textContent = essay.tag;

  if (dateEl && essay.date) {
    dateEl.textContent = new Date(essay.date).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  // Render markdown body
  if (essay.body) {
    container.innerHTML = parseMarkdown(essay.body);
  }
}

// ── Minimal markdown parser ──
function parseMarkdown(md) {
  return md
    // Headers
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // Bold and italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>')
    // Code inline
    .replace(/`(.+?)`/g, '<code>$1</code>')
    // Unordered lists
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]+?<\/li>)/g, '<ul>$1</ul>')
    // Paragraphs (double newline)
    .replace(/\n\n(?!<)/g, '</p><p>')
    .replace(/^(?!<)(.+)$/gm, function(m) {
      if (m.trim() === '') return '';
      if (m.startsWith('<')) return m;
      return m;
    })
    // Wrap in paragraph
    .replace(/^(?!<h|<ul|<blockquote|<\/|$)(.+)/gm, '<p>$1</p>')
    // Clean up
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<h[1-6])/g, '$1')
    .replace(/(<\/h[1-6]>)<\/p>/g, '$1');
}

// ── Init ──
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  initActiveNav();
  loadEssays();
  loadEssay();
});
