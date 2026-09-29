# Revamp Roadmap

Work top to bottom. Each item follows the Plan → Approve → Build → `/check` → Approve → Ship
workflow in `CLAUDE.md`. Say `/revamp` to start the next unchecked item.

## What we're modelling on
| Site | Why it's relevant | What to borrow |
|---|---|---|
| [SquashSmarts](https://www.squashsmarts.org/) (Philadelphia) | Sport + academics + leadership, free for Philly public-school kids | "Pillars" framing, real student photos, clear Enroll / Donate / Volunteer paths, local credibility |
| [First Tee](https://firsttee.org/) | Sport used to teach character / life skills | Program pages that say *who, when, where, how to join*; parent-first language; "find a location" style CTA |
| America SCORES | Sport + poetry + service-learning (closest to gymnastics + civics) | Showing the non-sport side as equally important, youth voice/quotes |
| Girls Who Code, KidSport | Top youth-nonprofit sites in 2026 roundups | Mission in the hero, big real photos, strong-contrast CTAs, impact numbers that are *real* |

Common pattern on all of them: **Hero (mission + 2 CTAs) → What we do (programs) → Impact (real numbers/stories)
→ Photos → Founder/team → Get involved (Enroll · Donate · Volunteer · Partner) → Footer with contact, address, socials, EIN.**

---

## Phase 0 — Foundation (fixes bugs that affect every page)
- [x] Install Tailwind properly (build step) instead of the CDN script; remove unused Firebase + Font Awesome scripts, the broken `@import` in `index.css`, and leftover template `App.css`
- [x] Load fonts once in `index.html` (Archivo Black is currently loaded inside the page body)
- [x] Add real page URLs (`/about`, `/programs`, …) with React Router so the back button, sharing and Google work
- [x] Split `src/App.jsx` (1,000 lines) into `components/` and `pages/`
- [x] Fix header: nav links have no styling (`className="..."`), no mobile menu at all (menu is hidden on phones), active page not highlighted
- [x] Remove stray dead code (`PAYMENT_URLS` + orphan button at App.jsx:921–935), unused imports, lint error
- [x] Clean `package.json`: remove the bogus `@supabase-js/source` GitHub dependency
- [x] Missing file: `/coach-harris.jpg` (used on Home + About) — placeholder until we get a photo of Mr. Harris
- [x] Fix "Warton" → "Wharton" everywhere
- [x] Add basic SEO: site title, meta description, social share image, favicon

## Phase 1 — Home page ✅
- [x] Plain-language hero with Enroll + Support buttons (no un-consented kids' photos)
- [x] Replaced fake "Institutional Partners" row with the three pillars (body · mind · citizen)
- [x] Programs overview linking to each program
- [x] Removed fake metrics ("Discipline Index 85%", "Fully Operational"); added "Why families choose us"
- [x] Founder section with real bio; photo placeholder until we get one
- [x] Get-involved band (Enroll · Volunteer · Donate · Partner) + location strip
- [x] Self-hosted fonts, readable text sizes, accessible gold (`gold-dark`) on light backgrounds

## Phase 2 — About ✅
- [x] Story, founder bio (nonpartisan), values, home base at Clayborn & Lewis Playground

## Phase 3 — Programs ✅
- [x] One section per program with ages / when / cost (shows "Contact us" until filled in) + enroll button
- [x] Parent FAQ

## Phase 4 — Gallery ✅
- [x] Replaced broken Supabase loading with a simple photo list (`src/data/gallery.js`)
- [x] Every photo has an `approved` switch; only approved photos are published (`npm run photos`)
- [x] Working cascade fade-in, category filters, full-screen viewer (keyboard arrows + on-screen buttons)
- [ ] Owner: approve photos once parent consent forms are signed
- [ ] Convert `IMG_0952.MOV` to `.mp4` if we want video

## Phase 5 — Support / Donate ✅
- [x] Plain-language giving levels, "where your gift goes", other ways to help
- [x] All Donate buttons go to `DONATE_URL` once set, otherwise to the contact form
- [x] Thank-you page for donations and messages
- [ ] Owner: pick a donation platform and set `DONATE_URL`

## Phase 6 — Contact / Enroll ✅
- [x] Contact & enrollment form (topic, child age, program) with spam trap
- [ ] Owner: create a Formspree form and set `FORM_ENDPOINT` (form is disabled until then)

## Phase 7 — Launch polish
- [x] Footer with address, contact, socials (shown once filled in), Privacy + Terms pages
- [x] Skip-to-content link, focus outlines, per-page titles, mobile menu, 44px tap targets
- [x] Images compressed (logo 858 KB → 39 KB), `.env` removed from git
- [ ] Owner: fill in the "Before launch checklist" in README.md
- [ ] Deploy to Netlify or Vercel and connect a domain
- [ ] Have Mr. Harris review all wording (especially About, Programs, Privacy/Terms)

## Questions — answered
- Spelling → **Wharton** ✅
- Location → Clayborn & Lewis Playground, 1101 N 38th St, Philadelphia, PA 19104 ✅ (confirm programs run there)
- Photo consent → **not confirmed** — no identifiable kids' photos go live until it is
- Donation platform → none yet (decide in Phase 5)

## Questions to ask Grandpa (Mr. Harris)
- What does **GD** in GD-Cadets stand for? Is it still the program name?
- When was Healthnastics Center Inc. founded? Is it a registered 501(c)(3)? EIN?
- Who is it for today — kids 8–14 only, or also teens and adults?
- What happens each week: days, times, where, cost (free?), how does a family sign up?
- Best public email / phone / socials for the site
- A good photo of him for the About page (and his OK on the bio)
- Can parents sign a photo-consent form so we can use real program photos?
