# Wharton Centre Healthnastics — website

Nonprofit youth program site (Philadelphia, ages ~8–14): gymnastics + civic
leadership ("GD-Cadets") + homework help, summer camp, trips. Founder: Lewis Harris.

The owner is a novice web builder. Explain changes in plain language, avoid
jargon, and never assume they know a tool — say what it does in one sentence.

## Stack
- React 19 + Vite (`npm run dev`, `npm run build`, `npm run lint`)
- Styling: Tailwind utility classes (currently via CDN in `index.html` — see ROADMAP Phase 0)
- Icons: `lucide-react`
- Optional data: Supabase (`src/supabaseClient.js`, table `cadet_modules`)
- All pages currently live in `src/App.jsx` (to be split — ROADMAP Phase 0)

## Workflow — ALWAYS follow this (owner must approve every change)

Work happens one page / one roadmap item at a time. Each item goes through:

1. **Plan** — Read the relevant code, then post a short plan: what will change,
   why (UX reason or bug), what it will look like, and any content/decisions
   needed from the owner. **Stop and wait for approval.** Do not edit files yet.
2. **Build** — After approval, make only the approved changes, using the
   Edit/Write tools (not sed/shell) so each file change shows up for approval.
3. **Check** — Run the `/check` skill (lint, build, screenshots at desktop +
   mobile, broken images/links, console errors, and the UX checklist). Fix
   anything it finds before showing results.
4. **Review** — Show the owner: summary of changes, screenshots, check results,
   and anything unresolved. **Wait for approval before committing.**
5. **Ship** — Commit with a clear message, push the working branch, and update
   the checkbox in `ROADMAP.md`. Open a PR only if the owner asks.

Never skip steps 1 or 4. If the owner says "just do it", that approval covers
only the item being discussed.

## Content & style rules
- Plain, warm language for parents, kids and donors. No fake metrics or
  placeholder stats presented as real (e.g. "Discipline Index 85%").
- Spell the organization consistently (confirm "Wharton" vs "Warton" with owner).
- Every image needs meaningful `alt` text; body text ≥ 16px; text contrast
  meets WCAG AA (4.5:1). No `text-black/20`-style faint body text.
- Mobile first: every page must work at 390px wide with a working menu.
- Brand colors: gold `#D4AF37`, red `#CC0000`, green `#006633`, cream `#fdf8f1`, black `#1A1A1A`.
- Kids' photos: only use images the owner confirms have media consent.
