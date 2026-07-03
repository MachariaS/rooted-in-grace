# Rooted in Grace — Design Prototype

Stories that remind us we're not walking alone. 🌿

## What's in this folder

- `index.html` — homepage: hero, featured story, podcast, Grace Notes, journal, events, community, partner
- `about.html` — founder story, "why I started this," the six-part mission, closing Grace Notes CTA
- `share.html` — "From the Sidewalk" story series: what it is, gentle expectations, submission form
- `events.html` — events page: upcoming events, registration pattern, past-gatherings archive
- `contact.html` — email, socials, and a short contact form
- `assets/style.css` — the entire shared design system (one stylesheet, used by every page)
- `assets/tree-mark.js` — writes the shared `#treemark` SVG symbol used by the logo everywhere
- `assets/main.js` — shared behavior: mobile nav toggle, scroll-reveal, placeholder form-submit handling
- `assets/logo-mark.svg` — the tree logomark, rebuilt as a crisp vector
- `assets/favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` — full favicon set

Every page is a static HTML file that links the shared `assets/style.css` and includes
`assets/tree-mark.js` + `assets/main.js` near the closing `</body>` tag. There's no build
step — open any `.html` file directly, or serve the folder with any static host (Vercel,
Netlify, GitHub Pages, `python3 -m http.server`, etc).

All forms (Grace Notes signup, Share Your Story, Contact) are front-end placeholders:
submitting swaps the form for a thank-you message via `handleFormSubmit()` in `main.js`,
but nothing is sent anywhere yet. Wire them to a real provider (see the pre-launch
checklist below) before launch.

## Design system

| Token | Value |
|---|---|
| Deep forest | `#26301F` |
| Moss | `#5C6B45` |
| Sage | `#A9B18D` |
| Cream | `#F7F2E3` |
| Bark | `#6B4E36` |
| Gold | `#C9A24B` |
| Display type | Cormorant Garamond |
| Script accent | Great Vibes (single words only, e.g. "Grace") |
| Body / UI type | Karla |

Signature element: the roots motif — roots grow out of the hero and reappear as section dividers.

## Since she wants to edit it herself (CMS options)

This prototype is the **design spec**. Three good paths to a self-editable site:

1. **Framer (recommended for her)** — rebuild this design in Framer (~$10–15/mo).
   Visual editing, built-in CMS for stories/episodes/events, forms, fast hosting.
   Easiest for a non-developer to own long-term.
2. **WordPress** — most flexible and widely supported (incl. local Kenyan hosts),
   pairs well with The Events Calendar plugin and MailPoet/Mailchimp. More upkeep.
3. **Free developer route** — keep this codebase, add Decap CMS + Netlify.
   $0/month hosting, she edits content through a simple admin panel,
   but you maintain the code.

## Deploying to Vercel

This is a static site with no build step, so it deploys as-is:

1. `npm i -g vercel` (if you don't have the CLI), then from this folder run `vercel`.
   Accept the defaults — no framework, no build command, output directory is `.`.
2. Or push this folder to a GitHub repo and import it in the Vercel dashboard
   ("New Project" → select the repo → Framework Preset: **Other** → Deploy).
3. Once deployed you'll get a `*.vercel.app` preview URL — that's what you share with your client.

## Pre-launch checklist

- [ ] Buy the domain (check rootedingrace.com / .org / .co.ke)
- [ ] Pick a newsletter provider (MailerLite and Buttondown have generous free tiers) and connect the Grace Notes form
- [ ] Create podcast accounts (Spotify for Creators is free) and swap in real links
- [ ] Set the community link (WhatsApp/Telegram invite URL)
- [ ] Choose an events tool (Luma is free and lovely) for registration
- [ ] Replace placeholder email `hello@rootedingrace.org`
- [ ] Add her real founder photo to `about.html` (swap out the `.portrait-frame` placeholder)
- [ ] Wire the three forms (Grace Notes, Share Your Story, Contact) to a real backend —
      e.g. Formspree/Basin for a no-code drop-in, or the newsletter provider's own form API
- [ ] Decide where "Share Your Story" submissions should land (email inbox, spreadsheet, CMS) before launch, since story text and consent need to be reviewed by a person
