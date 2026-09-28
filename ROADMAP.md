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
- [ ] Install Tailwind properly (build step) instead of the CDN script; remove unused Firebase + Font Awesome scripts, the broken `@import` in `index.css`, and leftover template `App.css`
- [ ] Load fonts once in `index.html` (Archivo Black is currently loaded inside the page body)
- [ ] Add real page URLs (`/about`, `/programs`, …) with React Router so the back button, sharing and Google work
- [ ] Split `src/App.jsx` (1,000 lines) into `components/` and `pages/`
- [ ] Fix header: nav links have no styling (`className="..."`), no mobile menu at all (menu is hidden on phones), active page not highlighted
- [ ] Remove stray dead code (`PAYMENT_URLS` + orphan button at App.jsx:921–935), unused imports, lint error
- [ ] Clean `package.json`: remove the bogus `@supabase-js/source` GitHub dependency
- [ ] Missing file: `/coach-harris.jpg` (used on Home + About) — placeholder until we get a photo of Mr. Harris
- [ ] Fix "Warton" → "Wharton" everywhere
- [ ] Add basic SEO: page titles, meta description, social share image, favicon (currently Vite logo)

## Phase 1 — Home page
- [ ] Hero: plain-language headline ("Gymnastics, leadership and homework help for Philly kids 8–14"), real photo, CTAs **Enroll your child** + **Support us**
- [ ] Replace "Institutional Partners" row (lists categories, not partners) with real partners or remove
- [ ] Programs overview (Gymnastics · GD-Cadets civics · Homework help · Summer camp & trips) with photos
- [ ] Replace dashboard of fake metrics ("Discipline Index 85%", "Fully Operational") with real impact numbers or a short story/quote
- [ ] Founder section with real photo; testimonials from parents/cadets
- [ ] Get-involved band + newsletter signup

## Phase 2 — About
- [ ] Story, mission, founder + team (with safety clearances/certifications), location map, "Circa 2024" → real founding facts
- [ ] Remove jargon headings ("Base Intelligence", "Operational Ethos")

## Phase 3 — Programs (new page)
- [ ] One section per program: ages, days/times, location, cost (or free), what kids learn, how to enroll
- [ ] FAQ for parents (what to wear, pickup, safety, cost)

## Phase 4 — Gallery ("The Archives")
- [ ] Media pipeline (only for consent-cleared photos): compress (3–6 MB each → ~200 KB WebP), convert `.MOV` → `.mp4`, move web copies into `public/`; keep originals out of git (repo is 165 MB)
- [ ] Decide data source: static photo list in code (simplest, reliable) **or** fix Supabase (needs table, storage bucket, public read policy)
- [ ] Fix the "cascade" effect: cards set `animationDelay` but no animation class runs, and `animate-in`/`fade-in` classes need a plugin that isn't installed → build a real staggered fade-in on scroll (respecting reduced-motion)
- [ ] Show a friendly empty/error state (today a failed load silently shows nothing)
- [ ] Lightbox for photos, working video modal (MOV doesn't play in most browsers), category filters

## Phase 5 — Support / Donate
- [ ] Connect a real donation platform (e.g. Zeffy — free for nonprofits, Givebutter, or Donorbox); today every donate button does nothing
- [ ] Plain-language tiers ("$25/mo buys a leotard and workbook"), remove "Deploy Capital" wording and unverifiable claims ("SECURE Encrypted Portal", "100%")
- [ ] Volunteer + corporate partnership forms; show 501(c)(3)/EIN
- [ ] Thank-you page (currently `SuccessView` exists but is never reachable)

## Phase 6 — Contact / Enroll (new)
- [ ] Enrollment interest form (parent name, child age, program, contact) → email or Supabase
- [ ] Contact info, address, hours, map, socials

## Phase 7 — Launch polish
- [ ] Footer: real address/phone/email/socials, working Privacy + Terms pages (important when showing kids' photos)
- [ ] Accessibility pass (contrast, 8–11px text sizes currently used, keyboard navigation)
- [ ] Performance pass (Lighthouse ≥ 90), deploy (Vercel/Netlify) + custom domain

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
