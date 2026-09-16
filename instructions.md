# AI Portfolio Instructions & Architecture Guide

## 1. Portfolio Purpose

This repository contains the personal professional portfolio of **Cedrick H. Regis Jr.**, a software engineer and STEM student developing websites, software, and games.
The website serves as a living archive and professional showcase of real, working projects, education, practical learning, and contact links for opportunities and collaboration.

---

## 2. Accuracy & Content Rules

Strict honesty and factual accuracy must be maintained at all times.

- **Do NOT invent:**
  - Employers, jobs, or commercial releases
  - Clients, partnerships, or business metrics
  - Certifications, diplomas, or degrees not explicitly documented
  - Unverifiable project features, statistics, or awards
  - Technologies or technical proficiencies not practiced
- **Education Guidelines:**
  - **AMA OED**: STEM High School Diploma.
  - **Aptech**: Must strictly be described as an **ongoing Software Engineering program**. Do NOT refer to it as an "Advanced Certificate", completed degree, or finished qualification unless official proof is added to the project.
- **Tone & Descriptions:**
  - Concise, honest, and technical, with a friendly game-community voice.
  - Project descriptions must remain around 1–2 sentences.
  - Avoid corporate buzzwords or exaggeration.
- **No fake skill levels:** never add percentages, star ratings, XP counters, or progress bars that imply a measured proficiency. Game-style labels are decoration only; they must never imply data that does not exist.

---

## 3. Static Architecture (Zero Build System)

The portfolio is built purely with standard web technologies:

- **HTML5**: Semantic markup (`index.html`)
- **CSS3**: Vanilla stylesheet (`css/style.css`) with CSS custom properties and responsive media queries
- **Vanilla JavaScript**: Lightweight interaction script (`js/script.js`) for the mobile menu, active-tab highlighting, and one small section reveal

There are:
- **NO** Node.js or npm dependencies
- **NO** React, Vite, Next.js, or bundlers
- **NO** Tailwind CSS or CSS postprocessors
- **NO** jQuery, Bootstrap, or external UI frameworks
- **NO** PHP or backend servers
- **NO** Build or compile commands needed

The only external request is the Google Fonts stylesheet for **Source Sans 3**. The font stack falls back to Source Sans Pro, Segoe UI, Verdana, and Arial, so the layout stays intact offline and on `file:///`.

---

## 4. GitHub Pages Requirements

The website is designed to be hosted directly on **GitHub Pages**:

1. **Relative Paths**: All asset references, stylesheets, scripts, and links MUST use relative paths without a leading slash:
   - `css/style.css` (NOT `/css/style.css`)
   - `js/script.js` (NOT `/js/script.js`)
   - `assets/header-logo/header-logo.png`
   - `assets/project-images/ewi-website.png`
   - `cv/Cedrick_Regis_Jr_CV.pdf`
2. **Root Deployment**: The repository can be served directly from the root `/` or `/docs` directory on GitHub Pages without any CI build steps or workflow transforms.

---

## 5. Directory Structure

```text
cedrick-portfolio/
├── index.html                     # Main semantic HTML5 portfolio document
├── css/
│   └── style.css                  # Custom CSS3 stylesheet (tokens, layout, responsive rules)
├── js/
│   └── script.js                  # Mobile menu, active nav tab, section reveal
├── assets/
│   ├── header-logo/
│   │   └── header-logo.png        # Original red text header logo
│   └── project-images/
│       ├── ewi-website.png        # Genuine East West International screenshot
│       ├── holy-diamond.png       # Genuine Holy Diamond Godot screenshot
│       ├── main_menu_manananggal_itchio.png # Genuine Ang Manananggal game screenshot
│       └── pandas-and-python.png  # Genuine Python & Pandas graphic
├── cv/
│   ├── Cedrick_Regis_Jr_CV.pdf    # Clean URL-safe CV/Resume file
│   └── CV (Cedrick Regis Jr.) bestest.pdf # Original filename backup
└── instructions.md                # This reference guide for developers and AI agents
```

---

## 6. Design Direction (current)

The site is a **2016-era game/community website** with a light **skate-sticker** streak: simple rectangles, chunky outlines, flat colour, small badges, and a compact tab menu. It should read as handmade and personal — a developer who likes games, code, and building things — not as a modern SaaS landing page.

**Explicitly avoid:** glassmorphism, gradient washes, abstract blobs, futuristic dashboards, giant case-study sections, animated backgrounds, and heavy scroll effects.

### 6.1 Colour tokens (`:root` in `css/style.css`)

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#ffffff` | Card and page surfaces |
| `--panel` | `#eef2f7` | Alternating section background, chips |
| `--panel-deep` | `#dde5ee` | Hero grid lines, image placeholders |
| `--ink` | `#15191e` | Text, every border, every hard shadow |
| `--ink-soft` | `#4a525c` | Body copy and secondary text |
| `--blue` | `#0b64c4` | Primary actions, active states, links |
| `--blue-dark` | `#09488e` | Header bar |
| `--blue-light` | `#d7e8fb` | Badge and panel fills |
| `--green` | `#2ea84c` | CV button, "ongoing" status |
| `--yellow` | `#ffc61e` | Status strip, section badges, hover shadow |
| `--red` | `#e5402c` | Stickers and "featured" pin |
| `--orange` | `#ff7a1a` | One accent word in the contact panel |

Keep the interface mostly **white + charcoal + blue**. Green, yellow, red, and orange are small accents only — never backgrounds for large areas.

### 6.2 Structure tokens

- `--edge: 3px` — the standard chunky border, always `var(--ink)`.
- `--shadow: 4px 4px 0` / `--shadow-sm: 3px 3px 0` / `--shadow-lg: 7px 7px 0` — hard offset shadows, never blurred, never rgba.
- Border radius is **0** everywhere. Do not round corners.
- On the dark projects section, `.section-dark .card` flips the border to white and the shadow to blue so outlines stay visible.

### 6.3 Typography

- One family: **Source Sans 3** (weights 400 / 600 / 700 / 900), fallback `'Source Sans Pro', 'Segoe UI', Verdana, Arial, sans-serif`.
- Headings: weight 900, uppercase, tight line-height.
- Body: 17px, weight 400, `--ink-soft`, line length kept under ~62 characters.
- `.label` and `.badge`: 11px, weight 700, uppercase, `letter-spacing: .08–.1em`.
- Do not reintroduce Space Grotesk, DM Mono, or any monospace face — the old editorial system has been removed.

### 6.4 Reusable classes

| Class | Purpose |
| --- | --- |
| `.wrap` | Page container, `min(1140px, 100% - 36px)` |
| `.card` | Chunky border + hard shadow surface |
| `.card-bar` | Blue title bar inside a card (game-window look) |
| `.badge` / `.badge-blue` `.badge-green` `.badge-yellow` `.badge-red` | Small uppercase labels |
| `.chip` | Technology tags |
| `.btn` / `.btn-blue` `.btn-green` `.btn-yellow` / `.btn-sm` | Chunky buttons that shift on hover |
| `.dot` | Small square status indicator |
| `.tape` | Rotated sticker (used once, on the hero profile card) |
| `.strip` | Dark BUILD / PLAY / CODE / EXPLORE divider |
| `.reveal` / `.is-in` | Added by JS for the one small entrance transition |

### 6.5 Page sections

1. **Header** — compact blue bar: logo + name, tab links, green `VIEW CV →` button. Below it, a yellow status strip.
2. **Hero** — left: `PLAYER PROFILE` badge, large name, role badges, intro, two buttons. Right: a profile card with avatar, `@Cedi22` handle, build-type badges, and a "Currently building" list.
3. **About** — one main card plus Interests and Goal blocks.
4. **Skills** — four category cards (Programming, Web, Data, Game dev) plus a Toolbox chip row.
5. **Projects** — dark section. East West International is the featured build (wide card); the other three are game-library style cards.
6. **Experience** — sticky CV card beside labelled blocks (Work, Education, Current study, Practice).
7. **Contact** — blue band with a "Wanna build something?" panel and GitHub / LinkedIn / CV buttons.
8. **Footer** — name, role, year, and compact links.

### 6.6 Motion rules

- Hover/active transitions on buttons and project cards only (≈120ms).
- One small fade-and-rise on cards entering the viewport, added by JS.
- `prefers-reduced-motion: reduce` disables all of it, and content is fully visible with JavaScript off.
- No parallax, no scroll-jacking, no loading screens, no animated gradients.

---

## 7. Asset & Image Rules

- **Use Genuine Screenshots Only**: Never create fake screenshots, placeholder images, or unrelated stock photos.
- **Preserve Proportions**: Keep image aspect ratios intact. Project thumbnails use `object-fit: cover` inside fixed-height frames; `.img-top` shifts the crop to the top of an image when the title sits there (used for Ang Manananggal).
- **Accessibility**: Provide descriptive `alt` text explaining what is actually shown in each image.
- **File Integrity**: Do not rename or delete existing project assets without cause.
- Images carry `loading="lazy"` plus intrinsic `width`/`height` to avoid layout shift.

---

## 8. Header Logo Rules

- The asset is located at `assets/header-logo/header-logo.png`.
- **The text inside the PNG is intentionally red.**
- When using or styling this asset:
  - **Keep it red**: Do NOT apply CSS filters (`filter: hue-rotate`, `invert`, `grayscale`, etc.).
  - Do NOT recolor or re-render using a different font.
  - Maintain its natural aspect ratio.
  - Display it on backgrounds where the red and black text remains clearly legible (it sits in a white box in both the header and the hero avatar frame).

---

## 9. CV / Resume Rules

- The verified CV is located at `cv/Cedrick_Regis_Jr_CV.pdf` (and `cv/CV (Cedrick Regis Jr.) bestest.pdf`).
- Linked from four places: header button, Experience card, Contact panel, and footer.
- Links must include `target="_blank" rel="noopener noreferrer"`.
- Do not modify or fabricate details in the CV, and do not hide the CV button.

---

## 10. Verified Projects & External Links

### Project 1: East West International Website (FEATURED)
- **Status**: Ongoing
- **Type**: Web Project
- **Description**: Modernizing and maintaining a real business website with HTML, CSS, JavaScript, PHP, responsive UI/UX, SEO improvements, and website administration.
- **Image**: `assets/project-images/ewi-website.png`
- **Tags**: `HTML5`, `CSS`, `JavaScript`, `PHP`, `SEO`

### Project 2: Ang Manananggal
- **Status**: Completed
- **Type**: Game Project
- **Description**: A completed Unity horror game project inspired by Filipino mythology.
- **Image**: `assets/project-images/main_menu_manananggal_itchio.png`
- **Tags**: `Unity`, `C#`, `3D`
- **Repository**: [Ang Manananggal GitHub](https://github.com/Cedi22/AngManananggal)

### Project 3: Holy Diamond
- **Status**: Ongoing
- **Type**: Game Project
- **Description**: An ongoing Godot game-development project exploring interactive worlds and gameplay systems.
- **Image**: `assets/project-images/holy-diamond.png`
- **Tags**: `Godot`, `GDScript`

### Project 4: Python & Pandas Projects
- **Status**: Practical Study / Projects
- **Type**: Data Projects
- **Description**: Small Python and Pandas projects focused on programming, data processing, and analysis.
- **Image**: `assets/project-images/pandas-and-python.png`
- **Tags**: `Python`, `Pandas`, `Analysis`

### Professional Profiles
- **GitHub**: [https://github.com/Cedi22](https://github.com/Cedi22)
- **LinkedIn**: [https://www.linkedin.com/in/cedrick-regis-jr-41125535b/](https://www.linkedin.com/in/cedrick-regis-jr-41125535b/)

---

## 11. Prohibited Technologies

The following technologies must **NOT** be reintroduced into this repository:
- **React**, Preact, Vue, Svelte, Angular, or any JavaScript UI framework
- **Vite**, Webpack, Parcel, Rollup, ESBuild, or any JavaScript bundler
- **Node.js** server runtimes, Express, or backend scripts
- **npm**, pnpm, yarn package managers or `package.json` configurations
- **Tailwind CSS**, PostCSS, Sass, Less, or CSS build tools
- **TypeScript** compiler toolchains
- **jQuery**, Bootstrap, GSAP, or other external UI/animation libraries
- **PHP** or server-side rendering scripts

---

## 12. SEO & Accessibility Requirements

- Semantic landmarks: one `<header>`, one `<main>`, one `<footer>`, `<section>` per area, `<article>` per card.
- One `<h1>` (the name), `<h2>` per section, `<h3>` per card. Do not skip levels.
- Keep the meta description, Open Graph tags, and `twitter:card`. Do not add keyword stuffing.
- A skip link (`.skip-link`) is the first focusable element and must stay first.
- `:focus-visible` outlines are blue, switching to yellow on blue/dark surfaces. Never remove focus styling.
- The mobile menu button manages `aria-expanded` and `aria-label`; the active tab gets `aria-current="true"`.
- Decorative emoji and dots are `aria-hidden="true"`.

---

## 13. Instructions for Future AI Agents

When requested to update or modify this portfolio:
1. **Inspect First**: Check existing HTML, CSS, and JS before making changes.
2. **Convert, Don't Redesign**: Maintain the 2016 game-community look — flat colour, `3px` ink borders, hard offset shadows, zero radius, Source Sans 3, blue/green/yellow accents.
3. **Reuse the tokens and classes** in section 6 instead of inventing one-off styles or new colour values.
4. **Edit Static Files Directly**: Modify `index.html`, `css/style.css`, or `js/script.js` directly.
5. **Preserve Relative Paths**: Never use leading slashes (`/`) for assets, styles, or scripts.
6. **Preserve Header-Logo**: Never apply filters or recolor the red header-logo asset.
7. **No Build Tools**: Do not run `npm init`, install packages, or create Vite configurations.
8. **Keep the personality contained**: stickers, badges, and game labels are accents. If a change makes the page feel childish or cluttered, remove the accessory rather than adding another.
9. **Verify GitHub Pages Compatibility**: Test that all assets load locally and on static servers.

---

## 14. Verification Checklist

Before publishing or concluding edits:
- [x] `index.html` loads directly in the browser via file:// or a static server.
- [x] All relative asset paths resolve without 404 errors.
- [x] Header logo (`assets/header-logo/header-logo.png`) is crisp, unscaled, and retains original red coloring.
- [x] All 4 project images load with proper aspect ratios.
- [x] CV link (`cv/Cedrick_Regis_Jr_CV.pdf`) opens correctly from header, experience, contact, and footer.
- [x] Mobile menu toggles open/closed with proper ARIA, closes on Escape, outside click, and link click.
- [x] Active navigation tab follows the scroll position.
- [x] No horizontal overflow at 320px, 390px, 768px, 1024px, 1440px, or 1920px.
- [x] Keyboard navigation reaches every link with a visible focus ring; skip link is first.
- [x] Content is fully visible with JavaScript disabled and with reduced motion enabled.
- [x] External links to GitHub, LinkedIn, and the Ang Manananggal repository work.
- [x] Zero console errors or warnings.
