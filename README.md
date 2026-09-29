# Healthnastics Center website

Website for **Healthnastics Center Inc.**, a Philadelphia nonprofit founded by Lewis Harris Jr.
It brings together gymnastics, fitness, homework help and civic leadership (GD-Cadets).

## Run it on your computer

1. Install [Node.js](https://nodejs.org) (the "LTS" version).
2. In this folder, run `npm install` once.
3. Run `npm run dev` and open the link it prints (usually http://localhost:5173).

Other commands:

| Command | What it does |
|---|---|
| `npm run lint` | Checks the code for mistakes |
| `npm run build` | Builds the finished site into `dist/` (what gets uploaded) |
| `npm run photos` | Makes web-sized copies of approved gallery photos |

## Where to change things

| To change… | Edit |
|---|---|
| Contact email/phone, address, socials, donation link, form link, founder photo | `src/site.js` |
| Program descriptions, ages, schedules, costs | `src/data/programs.js` |
| Which photos appear in the gallery | `src/data/gallery.js`, then run `npm run photos` |
| Colors and fonts | `src/index.css` (the `@theme` block) |
| Page text and layout | `src/pages/<Page>.jsx` |

Anything left as `null` in `src/site.js` shows a friendly "coming soon" instead of made-up info.

## Before launch checklist

- [ ] **Contact form:** create a free form at [formspree.io](https://formspree.io), paste its link into `FORM_ENDPOINT` in `src/site.js`.
- [ ] **Donations:** set up a nonprofit giving page (e.g. [Zeffy](https://www.zeffy.com), free for nonprofits) and paste it into `DONATE_URL`. Set its "after payment" page to `https://<your-site>/thank-you`.
- [ ] **Contact info:** fill in `CONTACT.email`, `CONTACT.phone`, `SOCIAL`, `ORG.foundedYear`, `ORG.ein`.
- [ ] **Founder photo:** add a photo of Mr. Harris to `public/` and set `FOUNDER_PHOTO`.
- [ ] **Program details:** fill in schedules and costs in `src/data/programs.js`.
- [ ] **Photo consent:** collect signed parent consent forms, then set `approved: true` for those photos and run `npm run photos`.
- [ ] **Review wording** with Mr. Harris: About page bio, program descriptions, Privacy and Terms pages.

## Putting it online

The easiest free options are [Netlify](https://www.netlify.com) or [Vercel](https://vercel.com):
connect this GitHub repository, use build command `npm run build` and output folder `dist`.
Both are already configured so page links like `/about` work (`public/_redirects`, `vercel.json`).

## Working with Claude Code

See `CLAUDE.md` for the workflow and `ROADMAP.md` for what's done and what's next.
Useful commands in Claude Code: `/revamp` (next roadmap item) and `/check` (full quality check).
