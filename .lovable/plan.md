# 98 Studio — Premium Agency Website

A minimalist luxury site for a web design + SEO agency. Built on TanStack Start (the Lovable equivalent of Next.js App Router — same React + file-based routing, just `src/routes/` instead of `app/`). All other elements of your brief are kept identical: Tailwind, Framer Motion, shadcn Dialog, Calendly placeholder, CMS-ready data layer.

## Visual system

- Background `#FFFFFF`, text `#0A0A0A`, accent `#e26215` (International Orange)
- Inter font (Geist as fallback alt)
- Generous whitespace, large display type, thin hairline dividers
- Tokens added to `src/styles.css` as semantic vars (`--accent`, `--accent-glow`, etc.) — no hardcoded hex in components
- Framer Motion: scroll-triggered fades, subtle parallax on hero, marquee on featured projects
- Glassmorphism nav: `backdrop-blur-xl`, translucent white, hairline border, accent underline on active link
- Persistent floating "Book a Call" pill — bottom-right desktop, bottom-center mobile, black bg with `#e26215` glow on hover

## Routes (`src/routes/`)

```
__root.tsx          → shell + glass nav + floating CTA + footer
index.tsx           → Home
works.tsx           → Portfolio hub with filter + modals
about.tsx           → Who We Are / Mission / Process
contact.tsx         → Calendly + contact details + FAQ
blog.index.tsx      → Blog listing
blog.$slug.tsx      → Blog post template
```

Each route gets its own `head()` with unique title/description/OG tags.

## Page specs

**Home (`/`)**
1. Hero — bold headline ("Web design & SEO for brands that mean it"), animated subtle gradient orb behind, sub-headline, two CTAs
2. Featured Projects — 3-up grid pulled from `featuredProjects` data
3. Services — 2 large cards (Web Development, SEO) with hover lift
4. About brief — short statement + link to /about
5. Calendly CTA section — placeholder div with loading spinner, ready for inline widget injection

**Works (`/works`)**
- Filter chips: All | Websites | SEO
- Image cards with project name + short description overlaid bottom-left on a gradient scrim
- Click → shadcn `Dialog` (centered modal) with image gallery, full description, "Live Link" button
- SEO case cards open a modal containing a PDF viewer (`<iframe src={pdf}>`) placeholder

**About (`/about`)**
- Three storytelling sections (Who / Mission / Process) with scroll fades, large numerals for process steps

**Contact (`/contact`)**
- Calendly placeholder div (spinner while loading)
- Contact details: phone, Instagram, LinkedIn — large typography
- Accordion FAQ at bottom (shadcn Accordion)

**Blog (`/blog`, `/blog/$slug`)**
- Listing: clean text-first cards (date, title, excerpt, reading time)
- Post template: prose layout, large title, meta, body from data

## CMS-ready data layer

All content lives in `src/data/`:
```
site.ts         → brand, nav, contact, social
projects.ts     → website projects (id, title, description, category, images, liveUrl)
seoCases.ts     → SEO cases (id, title, summary, pdfUrl)
services.ts     → service cards
faqs.ts         → FAQ items
posts.ts        → blog posts
```
Pages import from these — swap to Sanity later by replacing the data module.

## Components (`src/components/`)

- `layout/Nav.tsx` (glass header)
- `layout/FloatingCTA.tsx`
- `layout/Footer.tsx`
- `home/Hero.tsx`, `home/FeaturedProjects.tsx`, `home/Services.tsx`, `home/AboutBrief.tsx`, `home/CalendlySection.tsx`
- `works/ProjectCard.tsx`, `works/ProjectModal.tsx`, `works/SeoCaseModal.tsx`, `works/CategoryFilter.tsx`
- `shared/CalendlyEmbed.tsx` (placeholder div + spinner, comment showing where to drop Calendly script)
- `shared/Reveal.tsx` (Framer Motion scroll-fade wrapper)

## Technical notes

- `framer-motion` and shadcn `dialog` / `accordion` already available; will install if missing
- Images: generated hero/project mockups via image generation, saved to `src/assets/`, imported as ES6
- Semantic HTML: `<header> <main> <section> <article> <footer>`, single `<h1>` per route, alt text everywhere
- Fully responsive (mobile-first), tested at 375 / 768 / 1280
- No business logic — pure frontend/presentation

## Out of scope (this pass)

- Real Calendly account wiring (placeholder only, with clearly-marked drop-in spot)
- Real PDFs (placeholder URLs in `seoCases.ts`)
- Headless CMS connection (data layer is structured for it)
