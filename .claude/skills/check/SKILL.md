---
name: check
description: Balanced quality check for the Healthnastics site — automated checks (lint, build, screenshots, console errors, broken images/links) plus a human-style UX/content review. Use after any change and before asking the owner to approve.
---

# /check — does it work, does it make sense, is it bug-free?

Run every section and report results as a short table: ✅ pass / ⚠️ warning / ❌ fail,
with the file:line or screenshot for each problem. Fix ❌ items you caused before
reporting; list anything pre-existing separately so the owner can decide.

## 1. Code health (automated)
- `npm run lint` — must have 0 errors.
- `npm run build` — must succeed with no warnings about unknown CSS rules or missing files.

## 2. Does it actually render? (automated)
- Start `npm run dev -- --port 5173` in the background.
- Run `node .claude/skills/check/screenshot.mjs <out-dir> [paths...]`
  (install with `npm i --no-save playwright` if missing; in cloud sessions it
  uses the preinstalled Chromium). It captures desktop (1440px) and mobile
  (390px) screenshots of each page and prints console errors, failed requests,
  broken images and horizontal-scroll overflow.
- Look at every screenshot yourself. Describe anything that looks broken,
  overlapping, cut off, or empty.

## 3. Does it make sense? (review checklist)
For each changed page, answer honestly:
- **5-second test:** Would a parent know what this is, who it's for, and what to do next?
- **One clear primary action** per section (Enroll / Donate / Contact), and every button actually goes somewhere.
- **Plain language:** no jargon ("deploy capital", "syncing nodes"), no fake stats.
- **Trust:** real photos, real names, location, contact info, safety info visible.
- **Accessibility:** alt text on images, body text ≥ 16px, contrast AA, buttons are `<button>`/`<a>` with visible focus, headings in order (one `h1` per page).
- **Mobile:** menu works, nothing overflows, tap targets ≥ 44px.
- **Performance:** images compressed (aim < 300 KB each), videos in MP4, nothing huge loaded above the fold.

## 4. Second opinion
For non-trivial code changes, also run the built-in `/code-review` skill on the diff.

## Report format
```
Check results — <page/item>
| Area | Result | Notes |
...
Screenshots: <paths>
Needs owner decision: <list or "none">
```
