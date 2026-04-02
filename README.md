# Sycamore Cottage — Care Home Website

A modern, production-grade residential care home website built as a recreation project. Designed with a clinical-yet-warm aesthetic, featuring a dark video hero, editorial typography, scroll animations, and a live Leaflet map.

**Live Demo:** [care-home-ruby.vercel.app](https://care-home-ruby.vercel.app)

---

## Lighthouse Scores

| Metric | Desktop | Mobile |
|---|---|---|
| Performance | 98 | 88 |
| Accessibility | 94 | 95 |
| Best Practices | 100 | 100 |
| SEO | 91 | 91 |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| Styling | SCSS (CSS custom properties) |
| Animation | GSAP + ScrollTrigger |
| Map | Leaflet.js + CartoDB Positron tiles |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── assets/                  # Static assets (video, images, SVGs)
├── components/
│   ├── Navbar/              # Fixed navbar with scroll + mobile states
│   │   ├── Navbar.jsx
│   │   └── Navbar.scss
│   └── Footer/              # Responsive footer with nav columns
│       ├── Footer.jsx
│       └── Footer.scss
├── hooks/
│   ├── useNavMenu.js        # Mobile menu toggle + body scroll lock
│   ├── useScrolled.js       # Scroll threshold detection
│   ├── useActiveLink.js     # React Router active link state
│   ├── useNavbarAnimation.js # GSAP navbar entrance animation
│   ├── useHeroAnimation.js  # GSAP hero entrance sequence
│   └── useAboutAnimation.js # GSAP ScrollTrigger about section
├── layouts/
│   └── Mainlayout.jsx       # Shared layout wrapper
├── pages/
│   ├── Home/
│   │   ├── Home.jsx         # Page entry point
│   │   ├── Hero.jsx         # Video hero + grid layout
│   │   ├── About.jsx        # Kensei-style about section
│   │   ├── QuoteBanner.jsx  # Dark Cicero quote interstitial
│   │   ├── Testimonials.jsx # CQC + review cards
│   │   ├── MapSection.jsx   # Leaflet map + floating card
│   │   └── Contact.jsx      # Dark contact section
│   ├── About/
│   │   └── AboutPage.jsx    # Full about page
│   ├── JoinTeam/
│   │   └── JoinTeamPage.jsx # Full bleed hero + vacancy card
│   └── BookTour/
│       └── BookTourPage.jsx # Dark centered booking form
└── App.jsx
```

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — Hero, About, Quote, Testimonials, Map, Contact |
| `/about` | About Us — Dark hero, story, team, values, CTA |
| `/careers` | Join The Team — Full bleed image, vacancy status |
| `/book-tour` | Book A Tour — Dark form (EmailJS ready) |

---

## Design System

### Tokens (`:root`)

```css
--white:      #ffffff
--off-white:  #f5f6f8
--gray-50:    #eef0f3
--gray-100:   #d8dce3
--gray-400:   #8c93a0
--gray-700:   #3a3f4a
--ink:        #111318
--blue:       #2563eb
--blue-light: #eff4ff
--blue-mid:   #93b4f7

--font-display: "EB Garamond", serif
--font-body:    "Nunito", sans-serif
--font-accent:  "Crimson Pro", Georgia, serif

--transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

### Typography

- **Display** — EB Garamond (headings, editorial moments)
- **Body** — Nunito (UI, labels, body copy)
- **Accent** — Crimson Pro italic (stats, pull quotes, testimonials)

---

## Custom Hooks

### `useNavMenu`
Manages mobile menu open/close state. Locks body scroll when open and auto-closes on desktop resize.

### `useScrolled(threshold)`
Fires when the page scrolls past a given pixel threshold (default `60px`). Used to trigger the navbar's frosted glass state.

### `useActiveLink`
Uses React Router's `useLocation` to track the current pathname and expose an `isActive(href)` helper.

### `useNavbarAnimation`
GSAP timeline that animates the logo, nav links, CTA, and hamburger sliding down on page load with a `1.4s` delay (after the hero begins).

### `useHeroAnimation`
GSAP timeline sequence:
1. Video scales from `1.08` → `1`
2. Overlay fades in
3. Title 1 slides up
4. Title 2 slides up
5. Sub copy fades up
6. CTAs slide up
7. Trust items stagger in
8. Scroll indicator fades in

### `useAboutAnimation`
ScrollTrigger-powered animations for the About section — image bleed slides in from right, heading, sub copy, and feature items stagger in on scroll.

---

## Map Setup

The map uses **Leaflet.js** with **CartoDB Positron** tiles (clean grey/white style). Add these to your `index.html`:

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
```

Coordinates: `51.25127075425786, -1.0855206229821315` (Skippetts Lane West, Basingstoke)

---

## Book A Tour — EmailJS Setup

The booking form is wired for EmailJS. Install and configure:

```bash
npm install @emailjs/browser
```

In `BookTourPage.jsx`, replace the comment in `handleSubmit`:

```js
import emailjs from "@emailjs/browser";

emailjs.send("SERVICE_ID", "TEMPLATE_ID", form, "PUBLIC_KEY")
  .then(() => setSent(true))
  .catch((err) => console.error(err));
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Google Fonts

Add to `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Nunito:wght@400;500;600&family=Crimson+Pro:ital,wght@0,400;1,400;1,600&display=swap" rel="stylesheet">
```

---

## Credits

- **Design & Development** — Dan Gabrielle De Castro
- **Original site** — [sycamorecottageresthome.com](https://www.sycamorecottageresthome.com)
- **Map tiles** — © OpenStreetMap contributors © CARTO
- **Stock photo** — Elder resident image via [source]
- **Tree icon** — SVG Repo
