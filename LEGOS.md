# Daystar Site Factory - Lego Component System

This document catalogs the modular UI "Lego blocks" available in the starter template. When generating a website, the AI (or developer) can pick, choose, and assemble these components inside `src/pages/index.astro` to construct the perfect layout matching the client's industry and target UI/UX.

---

## 🧱 The Lego Catalog (`src/components/`)

### 🧭 Navigation Bars
*   **[`Header.astro`](file:///templates/starter/src/components/Header.astro)**: Standard full-width sticky header with Services/Locations dropdowns. The safe default — use for most sites.
*   **[`NavbarPill.astro`](file:///templates/starter/src/components/NavbarPill.astro)**: Floating, centered pill-shaped navbar (concept inspired by the "Navbar Pill" style in Aceternity UI's navbar collection), rebuilt from scratch in Astro + Tailwind. `position: fixed` at the top with a small logo, simple anchor links, a CTA pill, and a collapsible mobile menu — condenses its shadow on scroll via a tiny vanilla-JS listener. Best for modern, minimal brands (salons/spas, boutique agencies, startups-y contractors) where a full-width bar feels too heavy. **Important**: it floats over content, so the page's first section needs top padding (e.g. `pt-28`) to clear it, and it doesn't include the Services/Locations dropdowns `Header.astro` has — use it in place of `Header.astro`, not alongside it.
    *   **Props**: all optional, falling back to `content.json`'s `navbarPill.links` and `business.json` for the CTA: `navLinksOverride` (array of `{ label, href }`), `ctaTextOverride`, `ctaHrefOverride`.
*   **[`NavbarSplitLogo.astro`](file:///templates/starter/src/components/NavbarSplitLogo.astro)**: Sticky full-width header with the logo centered and nav links split left/right of it (a common "editorial" nav pattern). Collapsible mobile menu, no dropdowns. Best for brands wanting a more editorial/design-forward feel than `Header.astro`'s dropdown nav — landscaping/hardscaping, boutique remodelers, design-led trades.
    *   **Props**: all optional, falling back to `content.json`'s `splitNav.leftLinks`/`splitNav.rightLinks` and `business.json` for the CTA: `leftLinksOverride`, `rightLinksOverride` (arrays of `{ label, href }`), `ctaTextOverride`, `ctaHrefOverride`.

### 🌅 Hero Blocks (Header & Entrances)
*   **[`HeroSplit.astro`](file:///templates/starter/src/components/Hero.astro)**: Best for standard professional services. Split layout with a detailed form card on the right and benefits/badges on the left.
*   **[`HeroGlass.astro`](file:///templates/starter/src/components/Hero.astro)**: Best for luxury brands (salons, spas, high-end remodelers). Centered layout surrounded by glowing ambient blobs and a blur-filter CTA card.
*   **[`HeroVideo.astro`](file:///templates/starter/src/components/Hero.astro)** (Oak City style): Best for contractor/home maintenance services (tree care, roofing, plumbing). Features centered emblem logo, loop-enabled HTML5 background video, and animated typewriter title hook.
*   **[`HeroAnimatedEntry.astro`](file:///templates/starter/src/components/HeroAnimatedEntry.astro)**: Centered, minimal hero with a staggered word-by-word entrance animation on the headline (concept inspired by the "Simple with entry animation" hero in Aceternity UI's hero collection). Pure CSS animation (per-word `animation-delay`, no JS), respects `prefers-reduced-motion`. Badge + headline + subtitle + a primary CTA and a secondary "Call Us" CTA. Best for brands that want a punchy, fast-loading, animation-forward first impression without a form or video — startups-y service brands, agencies, or as a lighter opener above `Services.astro`.
    *   **Props**: all optional, falling back to `content.json`'s `home.heroAnimated` block (and `business.json` for phone/CTA): `badgeOverride`, `headingOverride`, `subtitleOverride`, `primaryCtaTextOverride`, `primaryCtaHrefOverride`, `secondaryCtaTextOverride`, `secondaryCtaHrefOverride`.

### 🎀 Highlight ribbons
*   **[`Marquee.astro`](file:///templates/starter/src/components/Marquee.astro)**: Infinite looping marquee track. Fits right below the Hero to immediately build trust using FontAwesome icons.

### 🛠️ Services Grids
*   **[`Services.astro`](file:///templates/starter/src/components/Services.astro) (Standard)**: Renders service card details in a clean flat grid with numbered badge indicators.
*   **[`Services.astro`](file:///templates/starter/src/components/Services.astro) (Aspect Image)**: Renders cards featuring a top-aspect ratio image block and high-contrast link anchors. Perfect for visual service industries (landscaping, remodeling).
*   **[`ServicesBento.astro`](file:///templates/starter/src/components/ServicesBento.astro)**: Full-bleed image tiles with a "01/02/03..." index badge, gradient scrim, and a hover-reveal "Explore →" link. More visual/bento-feeling than the numbered-badge `Services.astro`. Best for trades where the work itself is the sell (landscaping, hardscaping, remodeling, roofing) and each service has a strong photo.
    *   **Props**: all optional, falling back to `content.json`'s `home.servicesBento` block: `badgeOverride`, `headingOverride`, `headingAccentOverride` (rendered as the accent-colored second line), `itemsOverride` (array of `{ src, alt, title, description, href }`).

### 🖼️ Showcase & Work Portfolios
*   **[`Gallery.astro`](file:///templates/starter/src/components/Gallery.astro)**: Renders a 4-column portfolio overlay grid. Shows location badges, dynamic job labels, and hover details.
*   **[`GalleryScrollChoreography.astro`](file:///templates/starter/src/components/GalleryScrollChoreography.astro)**: Cinematic scroll-driven showcase. Four quadrant project photos assemble into a grid as the visitor scrolls, then a hero "signature work" photo expands to fill the screen with a caption and CTA. Pure Astro + vanilla JS (scroll listener + CSS transforms, no framer-motion/React), respects `prefers-reduced-motion`. Best for visually strong portfolios where you want one "wow" moment mid-page: contractors/remodelers, landscapers, tree care, luxury builders, photographers, salons/spas. Use sparingly (one per page, it needs 400vh of scroll room) and pair with a lighter `Gallery.astro` grid elsewhere if more project photos are needed.
    *   **Props**: all optional, falling back to `content.json`'s `home.scrollShowcase` block (and `business.json` for the CTA text): `badgeOverride`, `headingOverride`, `subtitleOverride`, `imagesOverride` (`{ topLeft, topRight, bottomLeft, bottomRight, hero }`, each `{ src, alt }`), `heroCaptionOverride`, `ctaTextOverride`, `ctaHrefOverride`.
*   **[`CardsCarousel.astro`](file:///templates/starter/src/components/CardsCarousel.astro)**: "Apple-style" horizontal cards carousel (concept inspired by Aceternity UI's Apple Cards Carousel). Tall image cards scroll-snap across the section with arrow controls; clicking a card opens a fade/scale modal with an expanded image and description. Pure Astro + vanilla JS (no React, no framer-motion, no `useOutsideClick` hook — a small self-contained modal with backdrop-click/Escape/close-button dismissal). Good as a secondary "get to know us" section below Services — services-based businesses, multi-offering brands, or anywhere you want a scannable, tappable summary of several offerings/guarantees in one row. Not a replacement for `Gallery.astro`/`GalleryScrollChoreography.astro` (those are photo-portfolio focused); this one is closer to a features/highlights carousel.
    *   **Props**: all optional, falling back to `content.json`'s `home.cardsCarousel` block: `badgeOverride`, `headingOverride`, `subtitleOverride`, `itemsOverride` (array of `{ src, alt, category, title, content }`, where `content` is an array of paragraph strings shown in the expanded modal).
*   **[`CompareSlider.astro`](file:///templates/starter/src/components/CompareSlider.astro)**: Before/after image comparison slider (concept inspired by Aceternity UI's Compare component) — drag or hover to reveal the "before" photo over the "after" photo via a `clip-path` reveal, with an optional autoplay ping-pong mode. Pure Astro + vanilla JS (pointer events, no React/framer-motion). Renders a responsive grid of comparisons, so it works with one job or several. Best for any visually-transformative service: roofing, remodeling, landscaping/lawn care, painting, tree removal, storm cleanup, deck/fence building. Skip it for businesses without a clear visual before/after (accountants, consultants, etc.).
    *   **Props**: all optional, falling back to `content.json`'s `home.compareShowcase` block: `badgeOverride`, `headingOverride`, `subtitleOverride`, `itemsOverride` (array of `{ before: { src, alt }, after: { src, alt }, label }`), `modeOverride` (`'drag' | 'hover'`, default `'drag'`), `initialPercentageOverride` (0-100, default `50`), `showHandleOverride` (boolean, default `true`), `autoplayOverride` (boolean, default `false`), `autoplayDurationOverride` (ms, default `4000`).

### ✨ Feature / Highlight Grids
*   **[`FeatureOverlayCards.astro`](file:///templates/starter/src/components/FeatureOverlayCards.astro)**: Grid of image cards where hovering (or tapping on touch) reveals an extended description over a gradient overlay (concept inspired by the "Background Overlay Card" style in Aceternity UI's card collection). Pure CSS `group-hover` — no JS. Best for a compact "why choose us" / guarantees grid with photo backing rather than plain icon cards; pairs well below `HeroAnimatedEntry.astro` or `Services.astro`.
    *   **Props**: all optional, falling back to `content.json`'s `home.featureCards` block: `badgeOverride`, `headingOverride`, `subtitleOverride`, `itemsOverride` (array of `{ src, alt, icon, title, description }`, `icon` being a Font Awesome class string).

### 🎬 Feature Splits
*   **[`FeatureVideoSplit.astro`](file:///templates/starter/src/components/FeatureVideoSplit.astro)**: Dark, full-bleed split section — media (video or image) on one side, a kicker/two-tone heading/copy/checklist/CTA on the other. Good as a mid-page "here's how we work" moment between `Services`/`ServicesBento` and `Reviews`. Works with either a photo or a looping background video (`isVideoOverride`).
    *   **Props**: all optional, falling back to `content.json`'s `home.featureVideoSplit` block: `badgeOverride`, `headingOverride`, `headingAccentOverride`, `paragraphsOverride` (string array), `checklistOverride` (string array, rendered with checkmarks), `ctaTextOverride`, `ctaHrefOverride`, `mediaSrcOverride`, `mediaAltOverride`, `isVideoOverride` (boolean), `captionOverride`.

### 🦶 Footers
*   **[`Footer.astro`](file:///templates/starter/src/components/Footer.astro)**: Standard 4-column footer (brand/socials, services, locations, contact) with a legal bottom bar. The safe default.
*   **[`FooterBigText.astro`](file:///templates/starter/src/components/FooterBigText.astro)**: Alternative footer — a 3-column link footer (services, locations, contact) with an oversized, faded wordmark of the business name spanning the bottom edge (concept inspired by the "Footer With Big Text" style in Aceternity UI's footer collection). Best for brands leaning into bold typographic identity; skip it for very long business names, which crowd the wordmark at small viewport widths.
    *   **Props**: `taglineOverride` (optional, falls back to `content.json`'s `footerBigText.tagline`); services/locations/contact pull directly from `content.json`/`business.json` like `Footer.astro`.

### 💬 Social Proof & Reviews
*   **[`Reviews.astro`](file:///templates/starter/src/components/Reviews.astro) (Grid)**: Standard 3-column masonry grid layout. Displays client name, locations, and ratings.
*   **[`Reviews.astro`](file:///templates/starter/src/components/Reviews.astro) (Snap Slider)**: Touch-enabled horizontal scrolling swipe track. Perfect for mobile UI/UX.
*   **[`ReviewsMarquee.astro`](file:///templates/starter/src/components/ReviewsMarquee.astro)**: Infinite auto-scrolling horizontal ticker of review cards, pauses on hover. Pure CSS (reuses the existing `.animate-marquee` keyframe from `global.css`), no JS. Best when you want reviews to feel ambient/always-moving rather than a fixed grid — good pairing anywhere on the page, including right below `Marquee.astro`.
    *   **Props**: all optional — `itemsOverride` (array of `{ author, location, rating, text }`, falls back to `content.json`'s top-level `reviews` array), `badgeOverride`, `headingOverride`.

### ❓ FAQ Layouts
*   **[`FAQ.astro`](file:///templates/starter/src/components/FAQ.astro) (Accordion)**: Standard single-column centered list of toggle-able questions.
*   **[`FAQ.astro`](file:///templates/starter/src/components/FAQ.astro) (Double Column)**: Left column features a sticky lead CTA, right column houses the accordions. Great for heavy FAQ list profiles.
*   **[`FAQNumbered.astro`](file:///templates/starter/src/components/FAQNumbered.astro)**: Two-column FAQ — sticky left column with heading + a "still unsure? just call" phone link, right column has `Q01/Q02...`-numbered accordion items (native `<details>`, no JS). Functionally similar to `FAQ.astro`'s Double Column mode but with numbered questions and a phone-first CTA instead of a "Get an Estimate" button; use whichever numbering/CTA style fits the brand.
    *   **Props**: all optional, falling back to `content.json`'s `home.faqNumbered` block and top-level `faqs` array: `badgeOverride`, `headingOverride`, `subtitleOverride`, `itemsOverride` (array of `{ q, a }`).

---

## 🤖 Instructions for AI Agents (Antigravity & Claude)

When you receive a prompt to generate or modify a client website, **do not feel bound to a single static layout**. Follow this selection process:

1.  **Analyze Industry & Vibe**:
    *   *Contractors (Roofers, Tree Crews, Painters)*: Choose `HeroVideo` (or `HeroContractor`), `Marquee`, `Services` (Aspect Image), `Reviews` (Snap Slider), `Gallery` (or `GalleryScrollChoreography` for a more premium, visual-heavy brand), and `FAQ` (Double Column).
    *   *Professional/B2B Services (Accountants, Agencies)*: Choose `HeroSplit`, `Services` (Standard), `Reviews` (Grid), and `FAQ` (Accordion).
    *   *Luxury/Lifestyle (Spas, Salons, Boutique Stores)*: Choose `HeroGlass` (with custom background blurs), `Services` (Standard), and `Reviews` (Grid).
2.  **Assemble the Homepage**:
    *   Open `src/pages/index.astro` in the client directory.
    *   Import only the selected components.
    *   Inject them into the `<MainLayout>` in the logically optimal layout flow.
