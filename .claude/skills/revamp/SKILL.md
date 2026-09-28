---
name: revamp
description: Plan and execute the next page revamp from ROADMAP.md with owner approval at each gate. Use when the owner says "/revamp", "next page", or names a page to redo.
---

# /revamp [page or roadmap item]

1. Open `ROADMAP.md`. If no item was named, pick the first unchecked item and say which.
2. Read the current code for that page and look at a fresh screenshot (`/check` step 2).
3. **Post a plan** (keep it short, plain language):
   - What's wrong today (bugs + UX problems), with screenshot references
   - Proposed layout, section by section, and why (cite the reference sites in ROADMAP where relevant)
   - Content I need from the owner (photos, text, links, facts) — use clear placeholders if they want to fill it in later
   - Files that will change
   Then **STOP and ask for approval**. Offer 2 options if there's a real design choice.
4. After approval, implement only what was approved (Edit/Write tools).
5. Run `/check`. Fix what you broke.
6. Show before/after screenshots + the check table. **Ask for approval to commit.**
7. On approval: commit, push the working branch, tick the item in `ROADMAP.md`.
