/* essays-data.js
 *
 * HOW TO ADD AN ESSAY:
 * 1. Create a .md file in the _essays/ folder (e.g., _essays/my-essay.md)
 * 2. Add an entry to the ESSAYS array below, following the format.
 * 3. Commit and push — GitHub Pages will update automatically.
 *
 * Each essay has:
 *   slug       — matches the filename without .md (used in the URL)
 *   title      — displayed in the list and essay header
 *   date       — ISO 8601 format: "YYYY-MM-DD"
 *   description — one-line summary shown in the essay list
 *   tag        — category label (optional)
 *   body       — the full markdown content of the essay
 *               (copy-paste from your .md file, or use a build script)
 */

var ESSAYS = [
  {
    slug: "ai-research-philanthropy",
    title: "Why Independent AI Research Matters",
    date: "2025-03-15",
    description: "On the role of independent researchers in shaping how AI develops — and why philanthropy has a part to play.",
    tag: "AI",
    body: `## The Case for Independence

There is something important about researchers who are not beholden to any single company or government. Independent researchers can ask uncomfortable questions. They can publish findings that powerful institutions would prefer remain unpublished.

In the domain of artificial intelligence, this independence is not merely nice to have. It may be essential.

## What Philanthropy Can Do

Philanthropic organisations can fund research that the market will not. They can create safe institutional homes for researchers who want to work on long-horizon problems — problems whose payoff comes in decades, not quarters.

This is the gap we are trying to fill.

## A Different Kind of Research Agenda

The questions that interest me most are structural. How do AI systems develop values? How do we build oversight mechanisms that remain robust as these systems become more capable? These are not questions with easy commercial applications. They require patience, rigour, and a willingness to be wrong in public.

That is the work. It is slow. It is uncertain. And it is necessary.`
  },
  {
    slug: "global-macro-and-ai",
    title: "Technology Investing Through a Macro Lens",
    date: "2025-01-08",
    description: "How global macroeconomic forces shape the trajectory of technology companies — and what investors miss when they ignore them.",
    tag: "Investing",
    body: `## Why Macro Matters for Tech

Most technology investors operate as if macroeconomic conditions are noise. Rates change. Currencies shift. Capital flows across borders. And yet, many technology portfolios are built as if these forces do not exist.

They do exist. And ignoring them is expensive.

## The Interest Rate Mistake

The 2021–2022 correction in growth equities was, at its core, a duration story. Long-duration assets — assets whose value is concentrated in distant future cash flows — are acutely sensitive to changes in discount rates.

When rates are near zero, a company that will earn the majority of its profits in 2040 looks very attractive. When rates rise to four percent, that same company looks considerably less attractive. This is arithmetic, not opinion.

## What I Watch

I focus on three signals: the shape of the yield curve, the direction of the dollar, and the marginal cost of capital for private markets. Together, they tell me a great deal about which technology strategies are likely to be rewarded in the near term.`
  }
];
